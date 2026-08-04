"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type {
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
  smokesCreekShorelineColors,
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

const landscapeGeometrySourceId = "landscape-geometries";

function geometryLayerId(id: string) {
  return `landscape-layer-${id}`;
}

function geometryOutlineLayerId(id: string) {
  return `landscape-outline-${id}`;
}

function geometryCasingLayerId(id: string) {
  return `landscape-casing-${id}`;
}

function geometryBounds(geometry: LandscapeChangeGeometry) {
  const points =
    geometry.geometryType === "Polygon"
      ? geometry.coordinates.flat()
      : geometry.coordinates;
  const bounds = new maplibregl.LngLatBounds(points[0], points[0]);
  points.slice(1).forEach((point) => bounds.extend(point));
  return bounds;
}


function recordGeometryBounds(recordId: string) {
  const related = landscapeChangeGeometries.filter(
    (geometry) => geometry.recordId === recordId,
  );
  if (related.length === 0) return null;

  const bounds = geometryBounds(related[0]);
  related.slice(1).forEach((geometry) => {
    const nextBounds = geometryBounds(geometry);
    bounds.extend(nextBounds.getSouthWest());
    bounds.extend(nextBounds.getNorthEast());
  });
  return bounds;
}

function counterClockwiseRing(ring: [number, number][]) {
  const signedArea = ring.slice(0, -1).reduce((area, point, index) => {
    const next = ring[index + 1];
    return area + point[0] * next[1] - next[0] * point[1];
  }, 0);
  return signedArea < 0 ? [...ring].reverse() : ring;
}

export function FormerWaterwaysMap() {
  const shell = useRef<HTMLElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const markers = useRef<Map<string, Marker>>(new Map());
  const geometryLabels = useRef<Map<string, Marker>>(new Map());
  const [selected, setSelected] = useState(formerWaterwayRecords[0]);
  const [filter, setFilter] = useState<WaterwayEvidenceType | "all">("all");

  const selectedGeometries = useMemo(
    () =>
      landscapeChangeGeometries.filter(
        (geometry) => geometry.recordId === selected.id,
      ),
    [selected.id],
  );
  const selectedDetailGeometries = useMemo(
    () =>
      selectedGeometries.filter(
        (geometry) =>
          geometry.geometryType === "Polygon" || !geometry.displayColor,
      ),
    [selectedGeometries],
  );

  const filtered = useMemo(
    () =>
      filter === "all"
        ? formerWaterwayRecords
        : formerWaterwayRecords.filter(
            (record) => record.evidenceType === filter,
          ),
    [filter],
  );

  const focusRecord = useCallback(
    (record: FormerWaterwayRecord, duration = 500) => {
      const instance = map.current;
      if (!instance) return;

      instance.resize();
      const bounds = recordGeometryBounds(record.id);
      if (bounds) {
        instance.fitBounds(bounds, {
          padding: window.matchMedia("(max-width: 620px)").matches ? 28 : 52,
          maxZoom: 14.6,
          duration,
        });
      } else {
        instance.flyTo({
          center: record.coordinates,
          zoom: 14,
          duration,
          essential: false,
        });
      }
    },
    [],
  );

  const chooseRecord = useCallback(
    (record: FormerWaterwayRecord, duration = 500) => {
      setSelected(record);
      window.requestAnimationFrame(() => focusRecord(record, duration));
    },
    [focusRecord],
  );

  useEffect(() => {
    if (!container.current || map.current) return;

    const isMobile = window.matchMedia("(max-width: 620px)").matches;
    maplibregl.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
    const geometrySource = {
      type: "geojson" as const,
      data: {
        type: "FeatureCollection" as const,
        features: landscapeChangeGeometries.map((geometry) => ({
          type: "Feature" as const,
          properties: { geometryId: geometry.id },
          geometry: {
            type: geometry.geometryType,
            coordinates:
              geometry.geometryType === "Polygon"
                ? geometry.coordinates.map(counterClockwiseRing)
                : geometry.coordinates,
          },
        })),
      },
    };
    const geometryLayers: LayerSpecification[] = landscapeChangeGeometries.flatMap(
      (geometry): LayerSpecification[] => {
        if (geometry.geometryType === "Polygon") {
          return [
            {
              id: geometryCasingLayerId(geometry.id),
              type: "line",
              source: landscapeGeometrySourceId,
              filter: ["==", ["get", "geometryId"], geometry.id],
              paint: {
                "line-color": "#fffdf8",
                "line-width": isMobile ? 9 : 7,
                "line-opacity": 0.96,
              },
            },
            {
              id: geometryLayerId(geometry.id),
              type: "fill",
              source: landscapeGeometrySourceId,
              filter: ["==", ["get", "geometryId"], geometry.id],
              paint: {
                "fill-color":
                  geometry.displayColor ?? waterwayMarkerColors[geometry.evidenceType],
                "fill-opacity": isMobile ? 0.62 : 0.52,
                "fill-outline-color":
                  geometry.displayColor ?? waterwayMarkerColors[geometry.evidenceType],
              },
            },
            {
              id: geometryOutlineLayerId(geometry.id),
              type: "line",
              source: landscapeGeometrySourceId,
              filter: ["==", ["get", "geometryId"], geometry.id],
              paint: {
                "line-color":
                  geometry.displayColor ?? waterwayMarkerColors[geometry.evidenceType],
                "line-width": isMobile ? 5 : 4,
                "line-opacity": 1,
              },
            },
          ];
        }

        const layers: LayerSpecification[] = [
          {
            id: geometryCasingLayerId(geometry.id),
            type: "line",
            source: landscapeGeometrySourceId,
            filter: ["==", ["get", "geometryId"], geometry.id],
            paint: {
              "line-color": geometry.displayColor ? "#fffdf8" : "#003c38",
              "line-width": geometry.displayColor
                ? isMobile ? 18 : 16
                : isMobile ? 16 : 14,
              "line-opacity": 0.96,
            },
          },
          {
              id: geometryLayerId(geometry.id),
              type: "line",
              source: landscapeGeometrySourceId,
              filter: ["==", ["get", "geometryId"], geometry.id],
              paint: {
                "line-color": geometry.displayColor ?? "#24e6c7",
                "line-width": geometry.displayColor
                  ? isMobile ? 12 : 10
                  : isMobile ? 10 : 8,
                "line-opacity": 1,
                ...(geometry.lineStyle === "solid"
                  ? {}
                  : { "line-dasharray": [3.5, 1.5] }),
              },
            },
        ];
        return layers;
      },
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
        },
        layers: [
          { id: "osm", type: "raster", source: "osm" },
        ],
      },
    });
    map.current = instance;
    const installGeometryLayers = () => {
      instance.addSource(landscapeGeometrySourceId, geometrySource);
      geometryLayers.forEach((layer) => instance.addLayer(layer));
    };
    if (instance.isStyleLoaded()) installGeometryLayers();
    else instance.once("style.load", installGeometryLayers);
    instance.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right",
    );
    instance.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      "bottom-left",
    );

    instance.on("click", (event) => {
      const feature = instance.queryRenderedFeatures(event.point, {
        layers: landscapeChangeGeometries.flatMap((geometry) => [
          geometryLayerId(geometry.id),
          geometryCasingLayerId(geometry.id),
        ]),
      })[0];
      const geometry = landscapeChangeGeometries.find(
        (candidate) => candidate.id === feature?.properties?.geometryId,
      );
      const record = geometry
        ? formerWaterwayRecords.find(
            (candidate) => candidate.id === geometry.recordId,
          )
        : undefined;
      if (geometry && record) {
        chooseRecord(record);
      }
    });

    const markerStore = markers.current;
    const geometryLabelStore = geometryLabels.current;
    landscapeChangeGeometries.forEach((geometry) => {
      if (geometry.geometryType !== "LineString" || !geometry.mapLabel) return;
      const element = document.createElement("div");
      element.className = "waterway-route-label";
      element.textContent = geometry.mapLabel;
      if (geometry.displayColor) element.style.background = geometry.displayColor;
      element.style.display = "none";
      const midpoint = geometry.coordinates[Math.floor(geometry.coordinates.length / 2)];
      const label = new maplibregl.Marker({
        element,
        anchor: "left",
        offset: [12, 0],
      })
        .setLngLat(midpoint)
        .addTo(instance);
      geometryLabelStore.set(geometry.id, label);
    });

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
      marker.getElement().addEventListener("click", (event) => {
        event.stopPropagation();
        chooseRecord(record);
      });
      markerStore.set(record.id, marker);
    });

    const linkedRecordId = window.location.hash.replace("#waterway-", "");
    const linkedRecord = formerWaterwayRecords.find(
      (record) => record.id === linkedRecordId,
    );
    if (linkedRecord) {
      requestAnimationFrame(() => {
        setSelected(linkedRecord);
        shell.current?.scrollIntoView({ behavior: "auto", block: "start" });
      });
      instance.once("load", () => focusRecord(linkedRecord, 0));
    }

    const resize = () => requestAnimationFrame(() => instance.resize());
    const observer = new ResizeObserver(resize);
    observer.observe(container.current);
    window.addEventListener("resize", resize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      markerStore.forEach((marker) => marker.remove());
      markerStore.clear();
      geometryLabelStore.forEach((label) => label.remove());
      geometryLabelStore.clear();
      instance.remove();
      map.current = null;
    };
  }, [chooseRecord, focusRecord]);

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
      if (map.current?.getLayer(geometryOutlineLayerId(geometry.id))) {
        map.current.setLayoutProperty(
          geometryOutlineLayerId(geometry.id),
          "visibility",
          visible.has(geometry.recordId) ? "visible" : "none",
        );
      }
      if (map.current?.getLayer(geometryCasingLayerId(geometry.id))) {
        map.current.setLayoutProperty(
          geometryCasingLayerId(geometry.id),
          "visibility",
          visible.has(geometry.recordId) ? "visible" : "none",
        );
      }
      const label = geometryLabels.current.get(geometry.id);
      if (label) {
        label.getElement().style.display =
          visible.has(geometry.recordId) && geometry.recordId === selected.id
            ? ""
            : "none";
      }
    });
  }, [filtered, selected.id]);

  return (
    <section
      className="school-map-shell"
      id="waterway-map"
      ref={shell}
      aria-labelledby="waterway-map-title"
    >
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
            <i aria-hidden="true" /> Shading = approximate historical area
          </small>
          <small className="waterway-line-key">
            <i aria-hidden="true" /> Dashed teal line = possible historic waterway course, not a surveyed route
          </small>
        </div>
      </div>

      <div className="school-map-grid">
        <div className="school-map-canvas waterway-map-stage">
          <div className="waterway-map-inner" ref={container} />
          {selected.id === "fern-brook-managed-outlet" && (
            <div className="waterway-route-notice fern-route-comparison" aria-live="polite">
              <strong>Fern Brook route evidence</strong>
              <span className="fern-route-historic-key">
                <i aria-hidden="true" /> Possible circa-1926 course - approximate aerial alignment
              </span>
              <p>
                <strong>Current course:</strong> Precise centerline withheld
                while WNY Atlas seeks a named, georeferenced Town, FEMA or
                engineering source. The pin marks the verified USGS monitoring
                mouth.
              </p>
              <p>
                <strong>DEC 2021:</strong> The Grandview Bay review required
                abandonment of a culvert that formerly contained Fern Brook
                after a FEMA Letter of Map Revision. The notice does not map the
                culvert&apos;s exact former alignment.
              </p>
            </div>
          )}
          {selected.id === "smokes-creek-shifted-mouth" && (
            <div className="waterway-route-notice smokes-shoreline-comparison" aria-live="polite">
              <strong>Smokes Creek shoreline sequence</strong>
              <span><i style={{ background: smokesCreekShorelineColors[1912] }} aria-hidden="true" /> 1912</span>
              <span><i style={{ background: smokesCreekShorelineColors[1923] }} aria-hidden="true" /> 1923</span>
              <span><i style={{ background: smokesCreekShorelineColors[1937] }} aria-hidden="true" /> 1937</span>
              <span><i style={{ background: smokesCreekShorelineColors[1970] }} aria-hidden="true" /> 1970</span>
              <p>
                Blue shading shows the approximate land between the mapped
                1912 and 1970 shorelines. The 2024 state study describes the
                broader man-made shoreline as primarily slag and waste fill;
                the shading is not a contamination boundary.
              </p>
            </div>
          )}
        </div>

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
          {selected.presentStatus && (
            <section>
              <h4>Present-day status</h4>
              <p>{selected.presentStatus}</p>
            </section>
          )}
          {selected.evidenceConfidence && (
            <p className="record-boundary-note">
              <strong>Boundary status:</strong>{" "}
              {confidenceLabels[selected.evidenceConfidence]}
            </p>
          )}

          {selectedDetailGeometries.map((geometry, index) => (
            <section className="record-mapped-area" key={geometry.id}>
              <p className="record-label">
                Mapped historical geography
                {selectedDetailGeometries.length > 1
                  ? ` · Area ${index + 1} of ${selectedDetailGeometries.length}`
                  : ""}
              </p>
              <h4>{geometry.name}</h4>
              <p>{geometry.boundaryNote}</p>
              <p><strong>Map basis:</strong> {geometry.sourceYear}</p>
              <a
                href={geometry.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {geometry.sourceLabel} ↗
              </a>
            </section>
          ))}

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
