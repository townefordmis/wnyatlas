"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type {
  CanvasSourceSpecification,
  LayerSpecification,
  Map as MapLibreMap,
  Marker,
} from "maplibre-gl";

import {
  formerWaterwayRecords,
  waterwayEvidenceLabels,
  type FormerWaterwayRecord,
  type WaterwayEvidenceType,
} from "@/data/former-waterways";
import {
  landscapeChangeGeometries,
  type LandscapeChangeGeometry,
} from "@/data/landscape-change-geometries";

const regionalCenter: [number, number] = [-78.84, 42.985];

const waterwayMarkerColors: Record<WaterwayEvidenceType, string> = {
  documented_disposal_fill: "#d81b60",
  documented_filled_waterway: "#0057b8",
  documented_contaminated_sediment: "#6f2dbd",
  documented_reclaimed_land: "#f28c00",
  documented_engineered_waterway: "#00897b",
  documented_culverted_waterway: "#6d4c41",
  documented_filled_wetland: "#e64a19",
  documented_slag_fill: "#212121",
  documented_restored_wetland: "#2e7d32",
};

const confidenceLabels = {
  documented: "Documented in the reviewed agency record",
  agency_mapped_approximation: "Approximate Atlas trace aligned from an agency map",
  research_boundary_pending: "Documented change; historical boundary research pending",
} as const;

const geometryCanvasSize = 512;

function geometrySourceId(id: string) {
  return `landscape-source-${id}`;
}

function geometryLayerId(id: string) {
  return `landscape-layer-${id}`;
}

function geometryBounds(geometry: LandscapeChangeGeometry) {
  const points = geometry.coordinates[0];
  const longitudes = points.map(([longitude]) => longitude);
  const latitudes = points.map(([, latitude]) => latitude);
  return {
    west: Math.min(...longitudes),
    east: Math.max(...longitudes),
    south: Math.min(...latitudes),
    north: Math.max(...latitudes),
  };
}

function pointInGeometry(
  point: [number, number],
  geometry: LandscapeChangeGeometry,
) {
  const [longitude, latitude] = point;
  const ring = geometry.coordinates[0];
  let inside = false;
  for (let index = 0, previous = ring.length - 1; index < ring.length; previous = index++) {
    const [x1, y1] = ring[index];
    const [x2, y2] = ring[previous];
    if (
      y1 > latitude !== y2 > latitude &&
      longitude < ((x2 - x1) * (latitude - y1)) / (y2 - y1) + x1
    ) {
      inside = !inside;
    }
  }
  return inside;
}

function createGeometryCanvas(geometry: LandscapeChangeGeometry) {
  const canvas = document.createElement("canvas");
  const bounds = geometryBounds(geometry);
  canvas.id = `landscape-canvas-${geometry.id}`;
  canvas.width = geometryCanvasSize;
  canvas.height = geometryCanvasSize;
  canvas.hidden = true;
  document.body.appendChild(canvas);

  const context = canvas.getContext("2d");
  if (context) {
    const color = waterwayMarkerColors[geometry.evidenceType];
    context.beginPath();
    geometry.coordinates[0].forEach(([longitude, latitude], index) => {
      const x =
        ((longitude - bounds.west) / (bounds.east - bounds.west)) *
        geometryCanvasSize;
      const y =
        ((bounds.north - latitude) / (bounds.north - bounds.south)) *
        geometryCanvasSize;
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.closePath();
    context.globalAlpha = 0.4;
    context.fillStyle = color;
    context.fill();
    context.globalAlpha = 1;
    context.strokeStyle = color;
    context.lineWidth = 10;
    context.setLineDash([22, 14]);
    context.stroke();
  }

  return { canvas, bounds };
}

export function FormerWaterwaysMap() {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const markers = useRef<Map<string, Marker>>(new Map());
  const [selected, setSelected] = useState(formerWaterwayRecords[0]);
  const [selectedGeometry, setSelectedGeometry] =
    useState<LandscapeChangeGeometry | null>(
      landscapeChangeGeometries.find(
        (geometry) => geometry.recordId === formerWaterwayRecords[0].id,
      ) ?? null,
    );
  const [filter, setFilter] = useState<WaterwayEvidenceType | "all">("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? formerWaterwayRecords
        : formerWaterwayRecords.filter(
            (record) => record.evidenceType === filter,
          ),
    [filter],
  );

  useEffect(() => {
    if (!container.current || map.current) return;

    const isMobile = window.matchMedia("(max-width: 620px)").matches;
    const geometryCanvases = landscapeChangeGeometries.map((geometry) => ({
      geometry,
      ...createGeometryCanvas(geometry),
    }));
    const geometrySources = Object.fromEntries(
      geometryCanvases.map(({ geometry, canvas, bounds }) => [
        geometrySourceId(geometry.id),
        {
          type: "canvas",
          canvas: canvas.id,
          animate: false,
          coordinates: [
            [bounds.west, bounds.north],
            [bounds.east, bounds.north],
            [bounds.east, bounds.south],
            [bounds.west, bounds.south],
          ],
        } satisfies CanvasSourceSpecification,
      ]),
    );
    const geometryLayers: LayerSpecification[] = landscapeChangeGeometries.map(
      (geometry) => ({
        id: geometryLayerId(geometry.id),
        type: "raster",
        source: geometrySourceId(geometry.id),
        paint: { "raster-opacity": 1 },
      }),
    );
    const instance = new maplibregl.Map({
      container: container.current,
      center: regionalCenter,
      zoom: isMobile ? 8.45 : 9.15,
      minZoom: 8,
      maxZoom: 17,
      cooperativeGestures: isMobile,
      attributionControl: false,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution:
              "© OpenStreetMap contributors",
          },
          ...geometrySources,
        },
        layers: [
          { id: "osm", type: "raster", source: "osm" },
          ...geometryLayers,
        ],
      },
    });
    map.current = instance;
    instance.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right",
    );
    instance.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      "bottom-left",
    );

    instance.on("click", (event) => {
      const geometry = [...landscapeChangeGeometries]
        .reverse()
        .find((candidate) =>
          pointInGeometry([event.lngLat.lng, event.lngLat.lat], candidate),
        );
      const record = geometry
        ? formerWaterwayRecords.find(
            (candidate) => candidate.id === geometry.recordId,
          )
        : undefined;
      if (geometry && record) {
        setSelectedGeometry(geometry);
        setSelected(record);
      }
    });

    const markerStore = markers.current;
    formerWaterwayRecords.forEach((record) => {
      const marker = new maplibregl.Marker({
        color: waterwayMarkerColors[record.evidenceType],
        scale: isMobile ? 0.9 : 0.82,
        subpixelPositioning: true,
      })
        .setLngLat(record.coordinates)
        .addTo(instance);
      marker.getElement().classList.add("waterway-native-marker");
      marker.getElement().dataset.evidenceType = record.evidenceType;
      marker.getElement().setAttribute("aria-label", `Open ${record.name}`);
      marker.getElement().addEventListener("click", () => setSelected(record));
      markerStore.set(record.id, marker);
    });

    const linkedRecordId = window.location.hash.replace("#waterway-", "");
    const linkedRecord = formerWaterwayRecords.find(
      (record) => record.id === linkedRecordId,
    );
    if (linkedRecord) {
      requestAnimationFrame(() => setSelected(linkedRecord));
      instance.jumpTo({ center: linkedRecord.coordinates, zoom: 14 });
    }

    const resize = () => requestAnimationFrame(() => instance.resize());
    const observer = new ResizeObserver(resize);
    observer.observe(container.current);
    window.addEventListener("resize", resize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      geometryCanvases.forEach(({ canvas }) => canvas.remove());
      markerStore.forEach((marker) => marker.remove());
      markerStore.clear();
      instance.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    const visible = new Set(filtered.map((record) => record.id));
    markers.current.forEach((marker, id) => {
      marker.getElement().style.display = visible.has(id) ? "" : "none";
      marker
        .getElement()
        .classList.toggle("is-selected", id === selected.id);
    });
    landscapeChangeGeometries.forEach((geometry) => {
      if (map.current?.getLayer(geometryLayerId(geometry.id))) {
        map.current.setLayoutProperty(
          geometryLayerId(geometry.id),
          "visibility",
          visible.has(geometry.recordId) ? "visible" : "none",
        );
      }
    });
  }, [filtered, selected.id]);

  function chooseRecord(record: FormerWaterwayRecord) {
    setSelected(record);
    setSelectedGeometry(
      landscapeChangeGeometries.find(
        (geometry) => geometry.recordId === record.id,
      ) ?? null,
    );
    map.current?.flyTo({
      center: record.coordinates,
      zoom: 14,
      essential: false,
    });
  }

  return (
    <section className="school-map-shell" aria-labelledby="waterway-map-title">
      <div className="school-map-toolbar">
        <div>
          <p className="eyebrow">
            Separate research map · {formerWaterwayRecords.length} documented locations · {landscapeChangeGeometries.length} mapped areas
          </p>
          <h2 id="waterway-map-title">Changed waters and documented fill</h2>
        </div>
        <div className="school-map-legend waterway-map-legend" aria-label="Map color key">
          {Object.entries(waterwayEvidenceLabels).map(([value, label]) => (
            <span key={value}>
              <i
                className="waterway-legend-swatch"
                style={{ background: waterwayMarkerColors[value as WaterwayEvidenceType] }}
              />
              {label}
            </span>
          ))}
          <small>Markers show evidence locations, not surveyed boundaries.</small>
          <small className="waterway-area-key">
            <i aria-hidden="true" /> Dashed shading = approximate historical area
          </small>
        </div>
      </div>

      <div className="school-map-grid">
        <div className="school-map-canvas" ref={container} />

        <aside className="school-map-list" aria-label="Documented waterway locations">
          <label>
            <span>Evidence shown</span>
            <select
              value={filter}
              onChange={(event) =>
                setFilter(event.target.value as WaterwayEvidenceType | "all")
              }
            >
              <option value="all">All documented locations</option>
              {Object.entries(waterwayEvidenceLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>
          <p className="school-result-count">{filtered.length} locations shown</p>
          <div className="school-campus-options">
            {filtered.map((record) => (
              <button
                type="button"
                key={record.id}
                id={`waterway-${record.id}`}
                className={record.id === selected.id ? "is-active" : ""}
                onClick={() => chooseRecord(record)}
              >
                <strong>
                  <i
                    className="waterway-list-swatch"
                    style={{ background: waterwayMarkerColors[record.evidenceType] }}
                    aria-hidden="true"
                  />
                  {record.name}
                </strong>
                <span>{waterwayEvidenceLabels[record.evidenceType]}</span>
              </button>
            ))}
          </div>
        </aside>

        <article className="school-record">
          <p className="record-label">Documented location</p>
          <h3>{selected.name}</h3>
          <p>{selected.location}</p>

          <section>
            <h4>Waterway history</h4>
            <p>{selected.waterwayHistory}</p>
          </section>
          {selected.changePeriod && (
            <section>
              <h4>Documented change period</h4>
              <p>{selected.changePeriod}</p>
              {selected.comparisonYears && (
                <p className="record-comparison-years">
                  <strong>Comparison sequence:</strong>{" "}
                  {selected.comparisonYears.join(" · ")}
                </p>
              )}
            </section>
          )}
          <section>
            <h4>What the record documents</h4>
            <p>{selected.documentedMaterial}</p>
          </section>
          <section>
            <h4>How WNY Atlas interprets it</h4>
            <p>{selected.interpretation}</p>
            <div className="nearby-record-links">
              <a href={selected.sourceUrl} target="_blank" rel="noreferrer">
                {selected.sourceLabel} ↗
              </a>
              {selected.additionalSources?.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {source.label} ↗
                </a>
              ))}
            </div>
          </section>
          {selected.evidenceConfidence && (
            <p className="record-boundary-note">
              <strong>Boundary status:</strong>{" "}
              {confidenceLabels[selected.evidenceConfidence]}
            </p>
          )}

          {selectedGeometry && selectedGeometry.recordId === selected.id && (
            <section className="record-mapped-area">
              <p className="record-label">Mapped historical area</p>
              <h4>{selectedGeometry.name}</h4>
              <p>{selectedGeometry.boundaryNote}</p>
              <p><strong>Map basis:</strong> {selectedGeometry.sourceYear}</p>
              <a
                href={selectedGeometry.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {selectedGeometry.sourceLabel} ↗
              </a>
            </section>
          )}

          {selected.relatedSiteId && (
            <Link href={`/sites/${selected.relatedSiteId}`}>
              Open the related main Atlas record →
            </Link>
          )}
        </article>
      </div>
    </section>
  );
}
