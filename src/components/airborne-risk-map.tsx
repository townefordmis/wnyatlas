"use client";

import { useEffect, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type { Map as MapLibreMap } from "maplibre-gl";

import { airborneRiskAreas } from "@/data/airborne-risk-areas";

export function AirborneRiskMap() {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const [activeId, setActiveId] = useState(airborneRiskAreas[0].id);
  const activeArea =
    airborneRiskAreas.find((area) => area.id === activeId) ?? airborneRiskAreas[0];

  useEffect(() => {
    if (!container.current || map.current) return;

    const instance = new maplibregl.Map({
      container: container.current,
      center: [-78.92, 43.02],
      zoom: 9.2,
      minZoom: 7.5,
      maxZoom: 15,
      attributionControl: false,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "© OpenStreetMap contributors",
          },
          riskAreas: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: airborneRiskAreas.flatMap((area) => [
                {
                  type: "Feature" as const,
                  properties: { id: area.id, kind: "orientation", name: area.name },
                  geometry: {
                    type: "Polygon" as const,
                    coordinates: [area.orientationPolygon],
                  },
                },
                {
                  type: "Feature" as const,
                  properties: { id: area.id, kind: "source", name: area.name },
                  geometry: { type: "Point" as const, coordinates: area.sourcePoint },
                },
              ]),
            },
          },
        },
        layers: [
          { id: "osm", type: "raster", source: "osm" },
          {
            id: "risk-fill",
            type: "fill",
            source: "riskAreas",
            filter: ["==", ["get", "kind"], "orientation"],
            paint: { "fill-color": "#a94f31", "fill-opacity": 0.2 },
          },
          {
            id: "risk-outline",
            type: "line",
            source: "riskAreas",
            filter: ["==", ["get", "kind"], "orientation"],
            paint: {
              "line-color": "#8f3d25",
              "line-width": 2,
              "line-dasharray": [3, 2],
            },
          },
          {
            id: "risk-source",
            type: "circle",
            source: "riskAreas",
            filter: ["==", ["get", "kind"], "source"],
            paint: {
              "circle-radius": 8,
              "circle-color": "#20251f",
              "circle-stroke-color": "#f5f1e7",
              "circle-stroke-width": 3,
            },
          },
        ],
      },
    });

    instance.addControl(new maplibregl.NavigationControl(), "top-right");
    instance.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      "bottom-right",
    );
    instance.on("click", "risk-fill", (event) => {
      const id = event.features?.[0]?.properties?.id;
      if (typeof id === "string") setActiveId(id);
    });
    instance.on("mouseenter", "risk-fill", () => {
      instance.getCanvas().style.cursor = "pointer";
    });
    instance.on("mouseleave", "risk-fill", () => {
      instance.getCanvas().style.cursor = "";
    });
    map.current = instance;

    return () => {
      instance.remove();
      map.current = null;
    };
  }, []);

  function selectArea(id: string) {
    const area = airborneRiskAreas.find((item) => item.id === id);
    if (!area) return;
    setActiveId(id);
    map.current?.flyTo({ center: area.center, zoom: id.includes("love") ? 12 : 10.5 });
  }

  return (
    <div className="risk-map-layout">
      <div
        ref={container}
        className="risk-map-canvas"
        role="img"
        aria-label="Orientation map of documented Western New York airborne environmental study areas"
      />
      <aside className="risk-map-panel">
        <div className="risk-map-tabs" aria-label="Choose a documented area">
          {airborneRiskAreas.map((area) => (
            <button
              key={area.id}
              className={area.id === activeId ? "is-active" : ""}
              onClick={() => selectArea(area.id)}
              type="button"
            >
              {area.name}
            </button>
          ))}
        </div>
        <p className="field-label">{activeArea.status}</p>
        <h2>{activeArea.name}</h2>
        <dl className="risk-date-record">
          <div>
            <dt>Source-history period</dt>
            <dd>{activeArea.sourcePeriod}</dd>
          </div>
          <div>
            <dt>Documented airborne period</dt>
            <dd>{activeArea.documentedAirPeriod}</dd>
          </div>
        </dl>
        <p>{activeArea.description}</p>
        <a href={activeArea.source.url} target="_blank" rel="noreferrer">
          {activeArea.source.publisher}: {activeArea.source.title} ↗
        </a>
      </aside>
    </div>
  );
}
