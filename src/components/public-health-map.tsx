"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type { GeoJSONSource, Map as MapLibreMap } from "maplibre-gl";

import { CancerComparison } from "@/components/cancer-comparison";
import { PublicHealthComparison } from "@/components/public-health-comparison";
import {
  publicHealthLayerMeta,
  publicHealthMapRecords,
  type PublicHealthLayerId,
  type PublicHealthMapRecord,
} from "@/data/public-health-cancer";

const layerOrder: PublicHealthLayerId[] = [
  "cancer",
  "birth-defects",
  "childhood-asthma",
  "premature-birth",
  "low-birth-weight",
  "childhood-lead",
  "drinking-water",
];

function recordsFor(layer: PublicHealthLayerId) {
  return publicHealthMapRecords.filter((record) => record.layer === layer);
}

function isZipLayer(layer: PublicHealthLayerId) {
  return (
    layer === "childhood-lead" ||
    layer === "childhood-asthma" ||
    layer === "premature-birth" ||
    layer === "low-birth-weight"
  );
}

function featureCollection(records: PublicHealthMapRecord[]) {
  return {
    type: "FeatureCollection" as const,
    features: records.map((record) => ({
      type: "Feature" as const,
      properties: {
        id: record.id,
        radius: record.radius,
      },
      geometry: {
        type: "Point" as const,
        coordinates: record.coordinates,
      },
    })),
  };
}

export function PublicHealthMap({ initialLayer = "childhood-asthma" }: { initialLayer?: PublicHealthLayerId }) {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const [activeLayer, setActiveLayer] = useState<PublicHealthLayerId>(initialLayer);
  const [selectedId, setSelectedId] = useState(recordsFor(initialLayer)[0]?.id ?? "");
  const activeRecords = useMemo(() => recordsFor(activeLayer), [activeLayer]);
  const selectedRecord =
    activeRecords.find((record) => record.id === selectedId) ?? activeRecords[0];
  const meta = publicHealthLayerMeta[activeLayer];

  useEffect(() => {
    if (!container.current || map.current) return;

    maplibregl.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
    const instance = new maplibregl.Map({
      container: container.current,
      center: [-78.82, 42.98],
      zoom: 8.45,
      minZoom: 7.4,
      maxZoom: 14,
      cooperativeGestures: window.matchMedia("(max-width: 700px)").matches,
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
          healthRecords: {
            type: "geojson",
            data: featureCollection(recordsFor(initialLayer)),
          },
        },
        layers: [
          { id: "osm", type: "raster", source: "osm" },
          {
            id: "health-records",
            type: "circle",
            source: "healthRecords",
            paint: {
              "circle-radius": ["get", "radius"],
              "circle-color": publicHealthLayerMeta[initialLayer].color,
              "circle-opacity": 0.78,
              "circle-stroke-color": "#fffdf8",
              "circle-stroke-width": 4,
            },
          },
        ],
      },
    });

    instance.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    instance.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-left");
    instance.on("click", "health-records", (event) => {
      const id = event.features?.[0]?.properties?.id;
      if (typeof id === "string") setSelectedId(id);
    });
    instance.on("mouseenter", "health-records", () => {
      instance.getCanvas().style.cursor = "pointer";
    });
    instance.on("mouseleave", "health-records", () => {
      instance.getCanvas().style.cursor = "";
    });

    const resize = () => window.requestAnimationFrame(() => instance.resize());
    const observer = new ResizeObserver(resize);
    observer.observe(container.current);
    window.addEventListener("resize", resize);
    window.visualViewport?.addEventListener("resize", resize);
    map.current = instance;

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("resize", resize);
      instance.remove();
      map.current = null;
    };
  }, [initialLayer]);

  function chooseLayer(layer: PublicHealthLayerId) {
    const nextRecords = recordsFor(layer);
    setActiveLayer(layer);
    setSelectedId(nextRecords[0]?.id ?? "");
    const instance = map.current;
    const source = instance?.getSource("healthRecords") as GeoJSONSource | undefined;
    source?.setData(featureCollection(nextRecords));
    instance?.setPaintProperty("health-records", "circle-color", publicHealthLayerMeta[layer].color);
    if (isZipLayer(layer)) {
      instance?.fitBounds([[-79.13, 42.48], [-78.38, 43.27]], { padding: 45, duration: 500 });
    } else {
      instance?.fitBounds([[-79.08, 42.67], [-78.48, 43.30]], { padding: 70, duration: 500 });
    }
    window.history.replaceState(null, "", `${window.location.pathname}?layer=${layer}#health-map`);
  }

  function chooseRecord(record: PublicHealthMapRecord) {
    setSelectedId(record.id);
    map.current?.flyTo({ center: record.coordinates, zoom: isZipLayer(activeLayer) ? 11 : 9.1 });
  }

  return (
    <div className="public-health-map-shell">
      <div className="public-health-layer-tabs" role="tablist" aria-label="Choose a public health map layer">
        {layerOrder.map((layer) => (
          <button
            key={layer}
            id={`health-layer-tab-${layer}`}
            type="button"
            role="tab"
            aria-selected={activeLayer === layer}
            aria-controls="health-layer-panel"
            className={activeLayer === layer ? "is-active" : ""}
            onClick={() => chooseLayer(layer)}
          >
            <i style={{ background: publicHealthLayerMeta[layer].color }} />
            {publicHealthLayerMeta[layer].shortLabel}
          </button>
        ))}
      </div>

      <div
        id="health-layer-panel"
        role="tabpanel"
        aria-labelledby={`health-layer-tab-${activeLayer}`}
      >
        <div className="public-health-map-grid">
          <div className="public-health-map-stage">
            <div
              ref={container}
              className="public-health-map-canvas"
              role="img"
              aria-label={`Map of ${meta.label} records for Western New York`}
            />
            <div className="public-health-map-badge">
              <strong>{meta.label}</strong>
              <span>{meta.geography} · {meta.unit}</span>
            </div>
          </div>

          <aside className="public-health-map-panel">
            {selectedRecord ? (
              <>
                <p className="record-label">{selectedRecord.geography}</p>
                <h3>{selectedRecord.name}</h3>
                <strong className="public-health-map-value">{selectedRecord.displayValue}</strong>
                <dl>
                  <div><dt>Period</dt><dd>{selectedRecord.period}</dd></div>
                  {selectedRecord.count !== undefined && (
                    <div>
                      <dt>
                        {activeLayer === "childhood-lead"
                          ? "Children tested"
                          : activeLayer === "drinking-water"
                            ? "Record count"
                            : activeLayer === "childhood-asthma"
                              ? "ED visits"
                              : activeLayer === "premature-birth" || activeLayer === "low-birth-weight"
                                ? "Three-year births"
                                : "Events"}
                      </dt>
                      <dd>{selectedRecord.count.toLocaleString()}</dd>
                    </div>
                  )}
                  <div><dt>Resolution</dt><dd>{meta.geography}</dd></div>
                </dl>
                {isZipLayer(activeLayer) && (
                  <p className="public-health-location-note">
                    The dot is a reference point for the entire ZIP area—not a patient, home, or street address.
                  </p>
                )}
                <p>{selectedRecord.detail}</p>
                {selectedRecord.related && (
                  <ul className="public-health-related-records">
                    {selectedRecord.related.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </>
            ) : (
              <div className="public-health-map-withheld">
                <p className="record-label">Local reporting rule</p>
                <h3>Not shown on the local map</h3>
                <p>{meta.mapAvailability}</p>
                <p>
                  County and state figures may still appear in clearly labeled
                  comparison tables, but they are not represented as local points.
                </p>
              </div>
            )}
            <div className="public-health-map-limit">
              <strong>Limit</strong>
              <p>{meta.limitation}</p>
            </div>
            <a href={meta.sourceUrl} target="_blank" rel="noreferrer">Open official dataset ↗</a>
          </aside>

          <div className="public-health-record-list" aria-label={`Available ${meta.shortLabel} records`}>
            {activeRecords.length > 0 ? (
              activeRecords.map((record) => (
                <button
                  key={record.id}
                  type="button"
                  className={record.id === selectedRecord?.id ? "is-active" : ""}
                  onClick={() => chooseRecord(record)}
                >
                  <span>{record.name}</span>
                  <strong>{record.displayValue}</strong>
                </button>
              ))
            ) : (
              <p className="public-health-no-local-records">No ZIP-, city-, system-, or smaller-area records are displayed for this layer.</p>
            )}
          </div>
        </div>

        {activeLayer === "cancer" && (
          <section className="cancer-explorer-shell public-health-active-detail" aria-labelledby="comparison-title">
            <div className="health-section-heading">
              <p className="eyebrow">Community comparison</p>
              <h2 id="comparison-title">Rates are comparable only when their definitions travel with them.</h2>
              <p>
                County figures below come from a fixed NYSDOH public-data extract so
                this first release can be reproduced. New York and U.S. references use
                the current NCI/CDC periods; differing years are labeled rather than
                silently mixed.
              </p>
            </div>
            <CancerComparison />
          </section>
        )}

        {activeLayer !== "cancer" && <PublicHealthComparison layer={activeLayer} />}
      </div>
    </div>
  );
}
