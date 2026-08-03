"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
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
  fernBrookCurrentRoute,
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

function geometrySourceId(id: string) {
  return `landscape-source-${id}`;
}

function geometryLayerId(id: string) {
  return `landscape-layer-${id}`;
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

function comparisonBounds(geometry: LandscapeChangeGeometry) {
  const bounds = geometryBounds(geometry);
  if (geometry.recordId === fernBrookCurrentRoute.recordId) {
    fernBrookCurrentRoute.coordinates.forEach((point) => bounds.extend(point));
  }
  return bounds;
}

export function FormerWaterwaysMap() {
  const shell = useRef<HTMLElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const markers = useRef<Map<string, Marker>>(new Map());
  const geometryLabels = useRef<Map<string, Marker>>(new Map());
  const geometryRouteDots = useRef<Map<string, Marker[]>>(new Map());
  const currentFernRouteDots = useRef<Marker[]>([]);
  const currentFernRouteLabel = useRef<Marker | null>(null);
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
    const geometrySources = Object.fromEntries(
      landscapeChangeGeometries.map((geometry) => [
        geometrySourceId(geometry.id),
        {
          type: "geojson" as const,
          data: {
            type: "Feature" as const,
            properties: { geometryId: geometry.id },
            geometry: {
              type: geometry.geometryType,
              coordinates: geometry.coordinates,
            },
          },
        },
      ]),
    );
    const geometryLayers: LayerSpecification[] = landscapeChangeGeometries.flatMap(
      (geometry): LayerSpecification[] => {
        if (geometry.geometryType === "Polygon") {
          return [{
              id: geometryLayerId(geometry.id),
              type: "fill",
              source: geometrySourceId(geometry.id),
              paint: {
                "fill-color": waterwayMarkerColors[geometry.evidenceType],
                "fill-opacity": 0.35,
                "fill-outline-color": waterwayMarkerColors[geometry.evidenceType],
              },
            }];
        }

        const layers: LayerSpecification[] = [
          {
            id: geometryCasingLayerId(geometry.id),
            type: "line",
            source: geometrySourceId(geometry.id),
            paint: {
              "line-color": "#003c38",
              "line-width": 14,
              "line-opacity": 0.96,
            },
          },
          {
              id: geometryLayerId(geometry.id),
              type: "line",
              source: geometrySourceId(geometry.id),
              paint: {
                "line-color": "#24e6c7",
                "line-width": 8,
                "line-opacity": 1,
                "line-dasharray": [1.8, 1.15],
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
      const feature = instance.queryRenderedFeatures(event.point, {
        layers: landscapeChangeGeometries.map((geometry) =>
          geometryLayerId(geometry.id),
        ),
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
        setSelectedGeometry(geometry);
        setSelected(record);
      }
    });

    const markerStore = markers.current;
    const geometryLabelStore = geometryLabels.current;
    const geometryRouteDotStore = geometryRouteDots.current;
    landscapeChangeGeometries.forEach((geometry) => {
      if (geometry.geometryType !== "LineString" || !geometry.mapLabel) return;
      const routeDots: Marker[] = [];
      geometry.coordinates.slice(0, -1).forEach((start, index) => {
        const end = geometry.coordinates[index + 1];
        for (let step = 0; step < 4; step += 1) {
          const progress = step / 4;
          const dotElement = document.createElement("span");
          dotElement.className = "waterway-route-dot";
          dotElement.style.display = "none";
          const dot = new maplibregl.Marker({
            element: dotElement,
            anchor: "center",
          })
            .setLngLat([
              start[0] + (end[0] - start[0]) * progress,
              start[1] + (end[1] - start[1]) * progress,
            ])
            .addTo(instance);
          routeDots.push(dot);
        }
      });
      const finalDotElement = document.createElement("span");
      finalDotElement.className = "waterway-route-dot";
      finalDotElement.style.display = "none";
      routeDots.push(
        new maplibregl.Marker({ element: finalDotElement, anchor: "center" })
          .setLngLat(geometry.coordinates[geometry.coordinates.length - 1])
          .addTo(instance),
      );
      geometryRouteDotStore.set(geometry.id, routeDots);

      const element = document.createElement("div");
      element.className = "waterway-route-label";
      element.textContent = geometry.mapLabel;
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

    const currentDots: Marker[] = [];
    fernBrookCurrentRoute.coordinates.slice(0, -1).forEach((start, index) => {
      const end = fernBrookCurrentRoute.coordinates[index + 1];
      for (let step = 0; step < 4; step += 1) {
        const progress = step / 4;
        const dotElement = document.createElement("span");
        dotElement.className = "waterway-current-route-dot";
        dotElement.style.display = "none";
        currentDots.push(
          new maplibregl.Marker({ element: dotElement, anchor: "center" })
            .setLngLat([
              start[0] + (end[0] - start[0]) * progress,
              start[1] + (end[1] - start[1]) * progress,
            ])
            .addTo(instance),
        );
      }
    });
    const currentEndElement = document.createElement("span");
    currentEndElement.className = "waterway-current-route-dot";
    currentEndElement.style.display = "none";
    currentDots.push(
      new maplibregl.Marker({ element: currentEndElement, anchor: "center" })
        .setLngLat(
          fernBrookCurrentRoute.coordinates[
            fernBrookCurrentRoute.coordinates.length - 1
          ],
        )
        .addTo(instance),
    );
    currentFernRouteDots.current = currentDots;

    const currentLabelElement = document.createElement("div");
    currentLabelElement.className = "waterway-current-route-label";
    currentLabelElement.textContent = "Current mapped course";
    currentLabelElement.style.display = "none";
    currentFernRouteLabel.current = new maplibregl.Marker({
      element: currentLabelElement,
      anchor: "right",
      offset: [-12, 0],
    })
      .setLngLat(fernBrookCurrentRoute.coordinates[10])
      .addTo(instance);

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
      const linkedGeometry = landscapeChangeGeometries.find(
        (geometry) => geometry.recordId === linkedRecord.id,
      );
      requestAnimationFrame(() => {
        setSelected(linkedRecord);
        setSelectedGeometry(linkedGeometry ?? null);
        shell.current?.scrollIntoView({ behavior: "auto", block: "start" });
      });
      if (linkedGeometry) {
        instance.fitBounds(comparisonBounds(linkedGeometry), {
          padding: isMobile ? 34 : 52,
          maxZoom: 14.6,
          duration: 0,
        });
      } else {
        instance.jumpTo({ center: linkedRecord.coordinates, zoom: 14 });
      }
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
      geometryRouteDotStore.forEach((dots) =>
        dots.forEach((dot) => dot.remove()),
      );
      geometryRouteDotStore.clear();
      currentDots.forEach((dot) => dot.remove());
      currentFernRouteDots.current = [];
      currentFernRouteLabel.current?.remove();
      currentFernRouteLabel.current = null;
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
      geometryRouteDots.current.get(geometry.id)?.forEach((dot) => {
        dot.getElement().style.display =
          visible.has(geometry.recordId) ? "" : "none";
      });
    });
    const fernIsVisible = visible.has(fernBrookCurrentRoute.recordId);
    currentFernRouteDots.current.forEach((dot) => {
      dot.getElement().style.display = fernIsVisible ? "" : "none";
    });
    if (currentFernRouteLabel.current) {
      currentFernRouteLabel.current.getElement().style.display =
        fernIsVisible && selected.id === fernBrookCurrentRoute.recordId
          ? ""
          : "none";
    }
  }, [filtered, selected.id]);

  function chooseRecord(record: FormerWaterwayRecord) {
    const geometry = landscapeChangeGeometries.find(
      (candidate) => candidate.recordId === record.id,
    );
    setSelected(record);
    setSelectedGeometry(geometry ?? null);
    if (geometry) {
      map.current?.fitBounds(comparisonBounds(geometry), {
        padding: 52,
        maxZoom: 14.6,
        duration: 500,
      });
    } else {
      map.current?.flyTo({
        center: record.coordinates,
        zoom: 14,
        essential: false,
      });
    }
  }

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
          {selected.id === fernBrookCurrentRoute.recordId && (
            <div className="waterway-route-notice fern-route-comparison" aria-live="polite">
              <strong>Fern Brook route comparison</strong>
              <span className="fern-route-current-key">
                <i aria-hidden="true" /> Current mapped course - Town study and USGS hydrography
              </span>
              <span className="fern-route-historic-key">
                <i aria-hidden="true" /> Possible circa-1926 course - approximate aerial alignment
              </span>
              <p>
                <strong>DEC 2021:</strong> The Grandview Bay review required
                abandonment of a culvert that formerly contained Fern Brook
                after a FEMA Letter of Map Revision. The notice does not map the
                culvert&apos;s exact former alignment.
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
          {selected.evidenceConfidence && (
            <p className="record-boundary-note">
              <strong>Boundary status:</strong>{" "}
              {confidenceLabels[selected.evidenceConfidence]}
            </p>
          )}

          {selectedGeometry && selectedGeometry.recordId === selected.id && (
            <section className="record-mapped-area">
              <p className="record-label">Mapped historical geography</p>
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

          {selected.id === fernBrookCurrentRoute.recordId && (
            <section className="record-mapped-area current-route-record">
              <p className="record-label">Current route reference</p>
              <h4>{fernBrookCurrentRoute.name}</h4>
              <p>{fernBrookCurrentRoute.explanation}</p>
              <a
                href={fernBrookCurrentRoute.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {fernBrookCurrentRoute.sourceLabel} â†—
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
