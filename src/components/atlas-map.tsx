"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type { Map as MapLibreMap, Marker } from "maplibre-gl";

import { featuredSites } from "@/data/featured-sites";
import type { AtlasSite } from "@/types/site";

const regionCenter: [number, number] = [-78.84, 42.8];
const CLUSTER_ZOOM_THRESHOLD = 9;
const CLUSTER_DISTANCE = 52;

type SiteCluster = {
  sites: AtlasSite[];
  x: number;
  y: number;
};

const categoryLabels: Record<AtlasSite["category"], string> = {
  cleanup: "Cleanup",
  industry: "Industry",
  pfas: "PFAS / forever chemicals",
  radiological: "Radiological history",
  waterway: "Waterway",
};

const evidenceLabels: Record<AtlasSite["evidenceStatus"], string> = {
  "well-documented": "Documented atlas record",
  "research-in-progress": "Research in progress",
  "research-lead": "Research lead",
};

export function AtlasMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const markers = useRef<Marker[]>([]);
  const clusterMarkers = useRef<Marker[]>([]);
  const markerElements = useRef<Map<string, HTMLDivElement>>(new Map());
  const visibleSites = useRef<AtlasSite[]>(featuredSites);
  const activeSiteId = useRef(featuredSites[0].id);
  const refreshMarkers = useRef<() => void>(() => undefined);
  const [selectedSite, setSelectedSite] = useState<AtlasSite>(featuredSites[0]);
  const [highlightedSiteId, setHighlightedSiteId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [county, setCounty] = useState("all");
  const [category, setCategory] = useState("all");
  const [mapUnavailable, setMapUnavailable] = useState(false);

  const filteredSites = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return featuredSites.filter((site) => {
      const matchesQuery =
        !normalizedQuery ||
        [site.name, site.municipality, site.county, site.summary].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        );
      const matchesCounty = county === "all" || site.county === county;
      const matchesCategory = category === "all" || site.category === category;

      return matchesQuery && matchesCounty && matchesCategory;
    });
  }, [category, county, query]);
  const displayedSite =
    filteredSites.find((site) => site.id === selectedSite.id) ??
    filteredSites[0] ??
    selectedSite;

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const markerElementMap = markerElements.current;
    const mapInstance = new maplibregl.Map({
      container: mapContainer.current,
      center: regionCenter,
      zoom: 7.8,
      minZoom: 7,
      maxZoom: 16,
      attributionControl: false,
      style: {
        version: 8,
        sources: {
          openStreetMap: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution:
              '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        },
        layers: [
          {
            id: "openStreetMap",
            type: "raster",
            source: "openStreetMap",
          },
        ],
      },
    });

    map.current = mapInstance;
    mapInstance.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right",
    );
    mapInstance.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      "bottom-left",
    );
    mapInstance.on("error", () => setMapUnavailable(true));

    markers.current = featuredSites.map((site) => {
      const markerElement = document.createElement("div");
      markerElement.className = "atlas-marker-wrap";
      markerElement.dataset.siteId = site.id;
      markerElementMap.set(site.id, markerElement);

      const markerButton = document.createElement("button");
      markerButton.type = "button";
      markerButton.className = `atlas-marker marker-${site.category}`;
      markerButton.setAttribute(
        "aria-label",
        `Show ${site.name}, ${site.municipality}`,
      );
      markerButton.addEventListener("click", () => setSelectedSite(site));

      const markerLabel = document.createElement("span");
      markerLabel.className = "atlas-marker-label";
      markerLabel.setAttribute("aria-hidden", "true");
      markerLabel.textContent = site.name;

      markerElement.append(markerButton, markerLabel);

      const marker = new maplibregl.Marker({
        element: markerElement,
        anchor: "bottom",
      })
        .setLngLat(site.coordinates)
        .addTo(mapInstance);

      // MapLibre assigns role="button" to a custom marker container. The
      // actual button inside it already provides the interactive semantics,
      // so remove the duplicate role to avoid nesting one button inside
      // another in the accessibility tree.
      markerElement.removeAttribute("role");

      return marker;
    });

    function clearClusters() {
      clusterMarkers.current.forEach((marker) => marker.remove());
      clusterMarkers.current = [];
    }

    function drawVisibleMarkers() {
      clearClusters();

      const sites = visibleSites.current;
      const highlightedId = activeSiteId.current;
      const visibleIds = new Set(sites.map((site) => site.id));

      markerElementMap.forEach((element, siteId) => {
        element.style.display =
          visibleIds.has(siteId) && mapInstance.getZoom() >= CLUSTER_ZOOM_THRESHOLD
            ? ""
            : "none";
      });

      if (mapInstance.getZoom() >= CLUSTER_ZOOM_THRESHOLD) return;

      const clusterCandidates = sites.filter((site) => site.id !== highlightedId);
      const clusters: SiteCluster[] = [];

      clusterCandidates.forEach((site) => {
        const point = mapInstance.project(site.coordinates);
        const nearbyCluster = clusters.find(
          (cluster) =>
            Math.hypot(cluster.x - point.x, cluster.y - point.y) <
            CLUSTER_DISTANCE,
        );

        if (nearbyCluster) {
          const count = nearbyCluster.sites.length;
          nearbyCluster.x = (nearbyCluster.x * count + point.x) / (count + 1);
          nearbyCluster.y = (nearbyCluster.y * count + point.y) / (count + 1);
          nearbyCluster.sites.push(site);
        } else {
          clusters.push({ sites: [site], x: point.x, y: point.y });
        }
      });

      clusters.forEach((cluster) => {
        if (cluster.sites.length === 1) {
          const site = cluster.sites[0];
          markerElementMap.get(site.id)!.style.display = "";
          return;
        }

        const longitude =
          cluster.sites.reduce((sum, site) => sum + site.coordinates[0], 0) /
          cluster.sites.length;
        const latitude =
          cluster.sites.reduce((sum, site) => sum + site.coordinates[1], 0) /
          cluster.sites.length;
        const clusterButton = document.createElement("button");
        clusterButton.type = "button";
        clusterButton.className = "atlas-cluster";
        clusterButton.textContent = String(cluster.sites.length);
        clusterButton.setAttribute(
          "aria-label",
          `Zoom in to explore ${cluster.sites.length} nearby places`,
        );
        clusterButton.addEventListener("click", () => {
          mapInstance.flyTo({
            center: [longitude, latitude],
            zoom: Math.min(CLUSTER_ZOOM_THRESHOLD + 0.5, mapInstance.getZoom() + 2),
            essential: false,
          });
        });

        clusterMarkers.current.push(
          new maplibregl.Marker({ element: clusterButton })
            .setLngLat([longitude, latitude])
            .addTo(mapInstance),
        );
      });

      const activeMarker = markerElementMap.get(highlightedId);
      if (activeMarker && visibleIds.has(highlightedId)) {
        activeMarker.style.display = "";
      }
    }

    refreshMarkers.current = drawVisibleMarkers;
    mapInstance.on("zoomend", drawVisibleMarkers);
    drawVisibleMarkers();

    return () => {
      mapInstance.off("zoomend", drawVisibleMarkers);
      markers.current.forEach((marker) => marker.remove());
      markers.current = [];
      clearClusters();
      markerElementMap.clear();
      mapInstance.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    activeSiteId.current = highlightedSiteId ?? displayedSite.id;
    markerElements.current.forEach((element, siteId) => {
      element.classList.toggle(
        "is-highlighted",
        siteId === (highlightedSiteId ?? displayedSite.id),
      );
    });
    refreshMarkers.current();
  }, [displayedSite.id, highlightedSiteId]);

  useEffect(() => {
    visibleSites.current = filteredSites;
    refreshMarkers.current();
  }, [filteredSites]);

  function focusSite(site: AtlasSite) {
    setSelectedSite(site);
    map.current?.flyTo({
      center: site.coordinates,
      zoom: 11.5,
      essential: false,
    });
  }

  function resetMap() {
    map.current?.flyTo({
      center: regionCenter,
      zoom: 7.8,
      essential: false,
    });
  }

  function clearFilters() {
    setQuery("");
    setCounty("all");
    setCategory("all");
  }

  return (
    <section className="map-shell" aria-labelledby="map-heading">
      <div className="map-toolbar">
        <div>
          <p className="eyebrow">
            Working atlas · {featuredSites.length} evidence-linked places
          </p>
          <h2 id="map-heading">Explore the region</h2>
        </div>
        <button className="map-reset" type="button" onClick={resetMap}>
          Reset region
        </button>
      </div>

      <div className="map-layout">
        <div className="map-stage">
          <div
            className="map-canvas"
            ref={mapContainer}
            aria-label={`Interactive map of ${featuredSites.length} featured Western New York sites`}
          />
          {mapUnavailable && (
            <p className="map-status" role="status">
              The base map is unavailable. The site list remains fully accessible.
            </p>
          )}
        </div>

        <aside className="map-sidebar" aria-label="Featured places">
          <div className="atlas-filters">
            <label htmlFor="atlas-search">Search places</label>
            <input
              id="atlas-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name, town, or keyword"
            />
            <div>
              <label>
                <span>County</span>
                <select
                  value={county}
                  onChange={(event) => setCounty(event.target.value)}
                >
                  <option value="all">All counties</option>
                  <option value="Erie">Erie</option>
                  <option value="Niagara">Niagara</option>
                  <option value="Cattaraugus">Cattaraugus</option>
                  <option value="Chautauqua">Chautauqua</option>
                </select>
              </label>
              <label>
                <span>Type</span>
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option value="all">All types</option>
                  <option value="cleanup">Cleanup</option>
                  <option value="industry">Industry</option>
                  <option value="pfas">PFAS</option>
                  <option value="radiological">Radiological</option>
                  <option value="waterway">Waterway</option>
                </select>
              </label>
            </div>
            <p aria-live="polite">
              {filteredSites.length} of {featuredSites.length} places
              {(query || county !== "all" || category !== "all") && (
                <button type="button" onClick={clearFilters}>
                  Clear filters
                </button>
              )}
            </p>
          </div>
          <p className="field-label">Choose a place</p>
          <div className="map-site-list">
            {filteredSites.map((site) => {
              const index = featuredSites.findIndex((record) => record.id === site.id);

              return (
                <button
                  className={displayedSite.id === site.id ? "is-selected" : ""}
                  key={site.id}
                  type="button"
                  onClick={() => focusSite(site)}
                  onFocus={() => setHighlightedSiteId(site.id)}
                  onBlur={() => setHighlightedSiteId(null)}
                  onMouseEnter={() => setHighlightedSiteId(site.id)}
                  onMouseLeave={() => setHighlightedSiteId(null)}
                  aria-pressed={displayedSite.id === site.id}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{site.name}</strong>
                    <small>{site.municipality}</small>
                  </span>
                </button>
              );
            })}
            {filteredSites.length === 0 && (
              <p className="map-empty">No places match these filters.</p>
            )}
          </div>

          {filteredSites.length > 0 && (
            <div className="map-detail" aria-live="polite">
              <p>
                {categoryLabels[displayedSite.category]} · {displayedSite.county}{" "}
                County
              </p>
              <h3>{displayedSite.name}</h3>
              <p>{displayedSite.summary}</p>
              {displayedSite.atomicLegacy && (
                <p>
                  <strong>{displayedSite.atomicLegacy.era}:</strong>{" "}
                  {displayedSite.atomicLegacy.role}
                </p>
              )}
              <span>{evidenceLabels[displayedSite.evidenceStatus]}</span>
              {displayedSite.story && (
                <Link
                  className="map-story-link"
                  href={`/sites/${displayedSite.id}`}
                >
                  Read the full place record →
                </Link>
              )}
              {displayedSite.sources && (
                <div className="map-sources">
                  <strong>Official sources</strong>
                  {displayedSite.sources.map((source) => (
                    <a
                      href={source.url}
                      key={source.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {source.publisher}: {source.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
