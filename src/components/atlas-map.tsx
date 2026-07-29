"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type { Map as MapLibreMap, Marker } from "maplibre-gl";

import { featuredSites } from "@/data/featured-sites";
import type { AtlasSite } from "@/types/site";

const regionCenter: [number, number] = [-78.84, 42.8];
const SITE_LIST_PAGE_SIZE = 30;

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
  const markers = useRef<Map<string, Marker>>(new Map());
  const [selectedSite, setSelectedSite] = useState<AtlasSite>(featuredSites[0]);
  const [highlightedSiteId, setHighlightedSiteId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [county, setCounty] = useState("all");
  const [category, setCategory] = useState("all");
  const [evidence, setEvidence] = useState("all");
  const [visibleSiteCount, setVisibleSiteCount] = useState(SITE_LIST_PAGE_SIZE);
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
      const matchesEvidence =
        evidence === "all" || site.evidenceStatus === evidence;

      return matchesQuery && matchesCounty && matchesCategory && matchesEvidence;
    });
  }, [category, county, evidence, query]);
  const listedSites = filteredSites.slice(0, visibleSiteCount);
  const displayedSite =
    filteredSites.find((site) => site.id === selectedSite.id) ??
    filteredSites[0] ??
    selectedSite;

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const isMobileViewport = window.matchMedia("(max-width: 620px)").matches;
    const mapInstance = new maplibregl.Map({
      container: mapContainer.current,
      center: regionCenter,
      zoom: isMobileViewport ? 7.15 : 7.8,
      minZoom: 7,
      maxZoom: 16,
      cooperativeGestures: isMobileViewport,
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
    const resizeMap = () => {
      window.requestAnimationFrame(() => mapInstance.resize());
    };
    const resizeObserver = new ResizeObserver(resizeMap);
    resizeObserver.observe(mapContainer.current);
    window.addEventListener("resize", resizeMap);
    window.visualViewport?.addEventListener("resize", resizeMap);
    mapInstance.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right",
    );
    mapInstance.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      "bottom-left",
    );
    mapInstance.on("error", () => setMapUnavailable(true));

    const markerStore = markers.current;
    featuredSites.forEach((site) => {
      const marker = new maplibregl.Marker({
        color:
          site.category === "waterway"
            ? "#176b87"
            : site.category === "radiological"
              ? "#7b3f86"
              : site.category === "pfas"
                ? "#8b5e34"
                : site.category === "industry"
                  ? "#263943"
                  : "#b6462c",
        scale: 0.72,
        subpixelPositioning: true,
      })
        .setLngLat(site.coordinates)
        .addTo(mapInstance);
      const element = marker.getElement();
      element.classList.add("atlas-native-marker");
      element.setAttribute("aria-label", `Show ${site.name}, ${site.municipality}`);
      element.addEventListener("click", () => setSelectedSite(site));
      markerStore.set(site.id, marker);
    });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", resizeMap);
      window.visualViewport?.removeEventListener("resize", resizeMap);
      markerStore.forEach((marker) => marker.remove());
      markerStore.clear();
      mapInstance.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    const activeId = highlightedSiteId ?? displayedSite.id;
    markers.current.forEach((marker, siteId) => {
      marker.getElement().classList.toggle("is-highlighted", siteId === activeId);
    });
  }, [displayedSite.id, highlightedSiteId]);

  useEffect(() => {
    const visibleIds = new Set(filteredSites.map((site) => site.id));
    markers.current.forEach((marker, siteId) => {
      marker.getElement().style.display = visibleIds.has(siteId) ? "" : "none";
    });
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
    const isMobileViewport = window.matchMedia("(max-width: 620px)").matches;
    map.current?.flyTo({
      center: regionCenter,
      zoom: isMobileViewport ? 7.15 : 7.8,
      essential: false,
    });
  }

  function clearFilters() {
    setQuery("");
    setCounty("all");
    setCategory("all");
    setEvidence("all");
  }

  return (
    <section className="map-shell" aria-labelledby="map-heading">
      <div className="map-toolbar">
        <div>
          <p className="eyebrow">
            Every place is supported by documented public records ·{" "}
            {featuredSites.length} places
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
              onChange={(event) => {
                setQuery(event.target.value);
                setVisibleSiteCount(SITE_LIST_PAGE_SIZE);
              }}
              placeholder="Name, town, or keyword"
            />
            <div>
              <label>
                <span>County</span>
                <select
                  value={county}
                  onChange={(event) => {
                    setCounty(event.target.value);
                    setVisibleSiteCount(SITE_LIST_PAGE_SIZE);
                  }}
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
                  onChange={(event) => {
                    setCategory(event.target.value);
                    setVisibleSiteCount(SITE_LIST_PAGE_SIZE);
                  }}
                >
                  <option value="all">All types</option>
                  <option value="cleanup">Cleanup</option>
                  <option value="industry">Industry</option>
                  <option value="pfas">PFAS</option>
                  <option value="radiological">Radiological</option>
                  <option value="waterway">Waterway</option>
                </select>
              </label>
              <label>
                <span>Evidence</span>
                <select
                  value={evidence}
                  onChange={(event) => {
                    setEvidence(event.target.value);
                    setVisibleSiteCount(SITE_LIST_PAGE_SIZE);
                  }}
                >
                  <option value="all">All records</option>
                  <option value="well-documented">Documented</option>
                  <option value="research-in-progress">Research in progress</option>
                  <option value="research-lead">Research leads</option>
                </select>
              </label>
            </div>
            <p aria-live="polite">
              {filteredSites.length} of {featuredSites.length} places
              {(query ||
                county !== "all" ||
                category !== "all" ||
                evidence !== "all") && (
                <button type="button" onClick={clearFilters}>
                  Clear filters
                </button>
              )}
            </p>
          </div>
          <p className="field-label">Choose a place</p>
          <div className="map-site-list">
            {listedSites.map((site) => {
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
            {listedSites.length < filteredSites.length && (
              <button
                className="map-show-more"
                type="button"
                onClick={() =>
                  setVisibleSiteCount((count) => count + SITE_LIST_PAGE_SIZE)
                }
              >
                Show {Math.min(
                  SITE_LIST_PAGE_SIZE,
                  filteredSites.length - listedSites.length,
                )} more places
              </button>
            )}
          </div>

          {filteredSites.length > 0 && (
            <div className="map-detail" aria-live="polite">
              {displayedSite.image && (
                <Image
                  className="map-detail-image"
                  src={displayedSite.image.src}
                  alt={displayedSite.image.alt}
                  width={520}
                  height={260}
                />
              )}
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
