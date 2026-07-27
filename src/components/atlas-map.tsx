"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type { Map as MapLibreMap, Marker } from "maplibre-gl";

import { featuredSites } from "@/data/featured-sites";
import type { AtlasSite } from "@/types/site";

const regionCenter: [number, number] = [-78.84, 42.8];

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
  const markerElements = useRef<Map<string, HTMLDivElement>>(new Map());
  const [selectedSite, setSelectedSite] = useState<AtlasSite>(featuredSites[0]);
  const [highlightedSiteId, setHighlightedSiteId] = useState<string | null>(null);
  const [mapUnavailable, setMapUnavailable] = useState(false);

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

    return () => {
      markers.current.forEach((marker) => marker.remove());
      markers.current = [];
      markerElementMap.clear();
      mapInstance.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    markerElements.current.forEach((element, siteId) => {
      element.classList.toggle(
        "is-highlighted",
        siteId === (highlightedSiteId ?? selectedSite.id),
      );
    });
  }, [highlightedSiteId, selectedSite.id]);

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
          <p className="field-label">Choose a place</p>
          <div className="map-site-list">
            {featuredSites.map((site, index) => (
              <button
                className={selectedSite.id === site.id ? "is-selected" : ""}
                key={site.id}
                type="button"
                onClick={() => focusSite(site)}
                onFocus={() => setHighlightedSiteId(site.id)}
                onBlur={() => setHighlightedSiteId(null)}
                onMouseEnter={() => setHighlightedSiteId(site.id)}
                onMouseLeave={() => setHighlightedSiteId(null)}
                aria-pressed={selectedSite.id === site.id}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <strong>{site.name}</strong>
                  <small>{site.municipality}</small>
                </span>
              </button>
            ))}
          </div>

          <div className="map-detail" aria-live="polite">
            <p>
              {categoryLabels[selectedSite.category]} · {selectedSite.county} County
            </p>
            <h3>{selectedSite.name}</h3>
            <p>{selectedSite.summary}</p>
            {selectedSite.atomicLegacy && (
              <p>
                <strong>{selectedSite.atomicLegacy.era}:</strong>{" "}
                {selectedSite.atomicLegacy.role}
              </p>
            )}
            <span>{evidenceLabels[selectedSite.evidenceStatus]}</span>
            {selectedSite.story && (
              <Link className="map-story-link" href={`/sites/${selectedSite.id}`}>
                Read the full place record →
              </Link>
            )}
            {selectedSite.sources && (
              <div className="map-sources">
                <strong>Official sources</strong>
                {selectedSite.sources.map((source) => (
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
        </aside>
      </div>
    </section>
  );
}
