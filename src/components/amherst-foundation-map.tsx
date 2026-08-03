"use client";

import { useEffect, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type { CanvasSourceSpecification, Map as MapLibreMap } from "maplibre-gl";

const layerControls = [
  {
    id: "foundation-concentrations",
    label: "2005 report concentrations",
    detail: "Coarse relative density, not household points",
    color: "#c43b2f",
    layers: ["foundation-density-raster"],
    initial: true,
  },
  {
    id: "soil-context",
    label: "Soil context",
    detail: "Five report-comparison series highlighted",
    color: "#d6862c",
    layers: ["soils-raster"],
    initial: false,
  },
  {
    id: "nwi-wetlands",
    label: "Current NWI wetlands",
    detail: "Current federal inventory, not historic fill proof",
    color: "#16837a",
    layers: ["wetlands-raster"],
    initial: true,
  },
  {
    id: "surficial-geology",
    label: "Surficial geology",
    detail: "Regional 1:250,000 context",
    color: "#6f5c95",
    layers: ["geology-raster"],
    initial: false,
  },
  {
    id: "audubon-context",
    label: "Audubon study area",
    detail: "Simplified planning orientation overlay",
    color: "#4d3a85",
    layers: ["audubon-raster"],
    initial: true,
  },
] as const;

type SelectedFeature = {
  heading: string;
  category: string;
  summary: string;
  evidence: string;
  limitation: string;
  sourceId: string;
};

const initialSelection: SelectedFeature = {
  heading: "What the 2005 study found",
  category: "Study interpretation",
  summary:
    "The Corps report found no single cause. It described expansive soils, compressible layers, drainage changes, foundation design and construction as possible interacting factors.",
  evidence:
    "The report mapped 501 repair permits from 1987-2004 and 594 inquiries from 2000 through March 2005. Most mapped reports were north of Main Street and on lacustrine soil units, but no one unit was a definitive predictor.",
  limitation:
    "Most Amherst homes were described as performing as expected. This map cannot diagnose a property, establish causation or replace a licensed engineer and site-specific investigation.",
  sourceId: "usace-2005-study",
};

type ResearchFeature = {
  type: "Feature";
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][] | number[][][][];
  };
  properties: Record<string, unknown>;
};

type ResearchCollection = {
  type: "FeatureCollection";
  features: ResearchFeature[];
};

const amherstBounds = {
  west: -78.83249769822079,
  south: 42.945843396924055,
  east: -78.69687631393913,
  north: 43.087053422685706,
};

function forEachRing(
  feature: ResearchFeature,
  callback: (rings: number[][][]) => void,
) {
  if (feature.geometry.type === "Polygon") {
    callback(feature.geometry.coordinates as number[][][]);
  } else {
    (feature.geometry.coordinates as number[][][][]).forEach(callback);
  }
}

function pointInRing(point: [number, number], ring: number[][]) {
  const [longitude, latitude] = point;
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

function pointInFeature(point: [number, number], feature: ResearchFeature) {
  let inside = false;
  forEachRing(feature, (rings) => {
    if (pointInRing(point, rings[0]) && !rings.slice(1).some((ring) => pointInRing(point, ring))) {
      inside = true;
    }
  });
  return inside;
}

function canvasPoint([longitude, latitude]: number[], size: number) {
  return [
    ((longitude - amherstBounds.west) / (amherstBounds.east - amherstBounds.west)) * size,
    ((amherstBounds.north - latitude) / (amherstBounds.north - amherstBounds.south)) * size,
  ];
}

function drawCollection(
  canvas: HTMLCanvasElement,
  collection: ResearchCollection,
  style: (feature: ResearchFeature) => { fill: string; stroke: string; width: number; dash?: number[] },
) {
  const context = canvas.getContext("2d");
  if (!context) return;
  collection.features.forEach((feature) => {
    const featureStyle = style(feature);
    context.beginPath();
    forEachRing(feature, (rings) => {
      rings.forEach((ring) => {
        ring.forEach((coordinate, index) => {
          const [x, y] = canvasPoint(coordinate, canvas.width);
          if (index === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        });
        context.closePath();
      });
    });
    context.fillStyle = featureStyle.fill;
    context.fill("evenodd");
    context.strokeStyle = featureStyle.stroke;
    context.lineWidth = featureStyle.width;
    context.setLineDash(featureStyle.dash ?? []);
    context.stroke();
  });
  context.setLineDash([]);
}

function featureToSelection(feature: { properties?: Record<string, unknown> }): SelectedFeature {
  const properties = feature.properties ?? {};
  const layerType = String(properties.layer_type ?? "mapped_context");

  if (layerType === "2005_report_symbol_density") {
    return {
      heading: `${String(properties.density_class ?? "Mapped")} relative concentration`,
      category: "2005 report symbol density",
      summary:
        "This coarse cell contains a relative concentration of permit and inquiry symbols in USACE Figure 23.",
      evidence: String(properties.report_totals ?? "Published report symbols through March 2005."),
      limitation:
        "The Atlas replaced household points with coarse cells. Cell color is relative symbol density—not an address count, current condition or risk score.",
      sourceId: String(properties.source_id ?? "usace-2005-figure-23"),
    };
  }

  if (layerType === "soil_context") {
    return {
      heading: String(properties.soil_name ?? "Mapped soil unit"),
      category: `Soil map unit${properties.musym ? ` · ${properties.musym}` : ""}`,
      summary: String(properties.report_context ?? "Mapped soil context."),
      evidence: [
        properties.hydric_status ? `Hydric status: ${properties.hydric_status}` : null,
        properties.drainage_class ? `Drainage: ${properties.drainage_class}` : null,
        properties.frost_action ? `Frost action: ${properties.frost_action}` : null,
      ]
        .filter(Boolean)
        .join(" · ") || "See the source soil survey attributes.",
      limitation:
        "Soil polygons represent generalized map units. They do not describe the exact soil profile beneath a home or predict foundation performance.",
      sourceId: String(properties.source_id ?? "erie-detailed-soils"),
    };
  }

  if (layerType === "current_nwi_wetland") {
    return {
      heading: String(properties.wetland_type ?? "NWI mapped wetland"),
      category: `Current NWI · ${String(properties.wetland_code ?? "unclassified")}`,
      summary: "The U.S. Fish and Wildlife Service currently maps this polygon in the National Wetlands Inventory.",
      evidence: properties.acres_source
        ? `Source-record area: ${Number(properties.acres_source).toFixed(2)} acres.`
        : "Official NWI geometry clipped to Amherst.",
      limitation:
        "NWI is not a regulatory wetland delineation. It does not prove that nearby developed land was formerly wetland or filled.",
      sourceId: String(properties.source_id ?? "fws-nwi-current"),
    };
  }

  if (layerType === "surficial_geology") {
    return {
      heading: String(properties.unit_name ?? "Surficial geologic unit"),
      category: "Regional surficial geology",
      summary: String(properties.report_context ?? "Regional geologic context."),
      evidence: `New York State Museum unit${properties.material_code ? ` ${properties.material_code}` : ""}.`,
      limitation: String(
        properties.scale_note ?? "The regional source cannot support parcel-level conclusions.",
      ),
      sourceId: String(properties.source_id ?? "nysm-surficial-geology"),
    };
  }

  return {
    heading: String(properties.name ?? "Audubon planning context"),
    category: "Neighborhood orientation",
    summary: String(properties.stated_limits ?? "Simplified planning study-area overlay."),
    evidence: "The Town describes the study area by UB North Campus/Ellicott Creek, Campbell Boulevard, Sweet Home Road and North French Road.",
    limitation: String(properties.boundary_note ?? "Not a surveyed or zoning boundary."),
    sourceId: String(properties.source_id ?? "amherst-audubon-plan"),
  };
}

export function AmherstFoundationMap() {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const researchCollections = useRef<Record<string, ResearchCollection>>({});
  const overlayCanvases = useRef<HTMLCanvasElement[]>([]);
  const visibilityRef = useRef<Record<string, boolean>>({
    "foundation-concentrations": true,
    "soil-context": false,
    "nwi-wetlands": true,
    "surficial-geology": false,
    "audubon-context": true,
  });
  const [selected, setSelected] = useState<SelectedFeature>(initialSelection);
  const [visibility, setVisibility] = useState<Record<string, boolean>>(
    Object.fromEntries(layerControls.map((control) => [control.id, control.initial])),
  );

  useEffect(() => {
    if (!container.current || map.current) return;

    const isMobile = window.matchMedia("(max-width: 760px)").matches;
    const dataRoot = `${window.location.origin}/data/amherst-foundations`;
    const emptyFeatureCollection = { type: "FeatureCollection" as const, features: [] };
    const instance = new maplibregl.Map({
      container: container.current,
      center: [-78.764, 43.014],
      zoom: isMobile ? 10.1 : 10.65,
      minZoom: 9.4,
      maxZoom: 16,
      cooperativeGestures: true,
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
          geology: { type: "geojson", data: emptyFeatureCollection },
          soils: { type: "geojson", data: emptyFeatureCollection },
          wetlands: { type: "geojson", data: emptyFeatureCollection },
          concentrations: {
            type: "geojson",
            data: emptyFeatureCollection,
          },
          audubon: { type: "geojson", data: emptyFeatureCollection },
          boundary: { type: "geojson", data: emptyFeatureCollection },
        },
        layers: [
          { id: "osm", type: "raster", source: "osm" },
          {
            id: "geology-fill",
            type: "fill",
            source: "geology",
            layout: { visibility: "none" },
            paint: {
              "fill-color": [
                "match",
                ["get", "unit_name"],
                "Lacustrine Silt and Clay",
                "#8a6aa8",
                "Lacustrine Sand",
                "#c7a55a",
                "Till",
                "#9b7a69",
                "Recent Alluvium",
                "#4b8c86",
                "#7e7891",
              ],
              "fill-opacity": 0.42,
            },
          },
          {
            id: "geology-line",
            type: "line",
            source: "geology",
            layout: { visibility: "none" },
            paint: { "line-color": "#5f4777", "line-width": 1 },
          },
          {
            id: "soils-fill",
            type: "fill",
            source: "soils",
            paint: {
              "fill-color": [
                "match",
                ["get", "report_context"],
                "One of five lacustrine soil series compared in the 2005 USACE study",
                "#e98a2f",
                "#dfd5bd",
              ],
              "fill-opacity": [
                "match",
                ["get", "report_context"],
                "One of five lacustrine soil series compared in the 2005 USACE study",
                0.34,
                0.12,
              ],
            },
          },
          {
            id: "soils-line",
            type: "line",
            source: "soils",
            paint: { "line-color": "#9b7650", "line-width": 0.35, "line-opacity": 0.55 },
          },
          {
            id: "wetlands-fill",
            type: "fill",
            source: "wetlands",
            paint: { "fill-color": "#16837a", "fill-opacity": 0.55 },
          },
          {
            id: "wetlands-line",
            type: "line",
            source: "wetlands",
            paint: { "line-color": "#075b56", "line-width": 1.1 },
          },
          {
            id: "foundation-density-fill",
            type: "fill",
            source: "concentrations",
            paint: {
              "fill-color": [
                "match",
                ["get", "density_class"],
                "higher",
                "#ad1f2d",
                "moderate",
                "#e46d3d",
                "#f3c56e",
              ],
              "fill-opacity": [
                "match",
                ["get", "density_class"],
                "higher",
                0.64,
                "moderate",
                0.48,
                0.34,
              ],
            },
          },
          {
            id: "foundation-density-line",
            type: "line",
            source: "concentrations",
            paint: { "line-color": "#7d1c27", "line-width": 1, "line-opacity": 0.72 },
          },
          {
            id: "audubon-fill",
            type: "fill",
            source: "audubon",
            paint: { "fill-color": "#4d3a85", "fill-opacity": 0.06 },
          },
          {
            id: "audubon-line",
            type: "line",
            source: "audubon",
            paint: { "line-color": "#4d3a85", "line-width": 2.4, "line-dasharray": [2, 2] },
          },
          {
            id: "town-boundary",
            type: "line",
            source: "boundary",
            paint: { "line-color": "#172720", "line-width": 2.2, "line-opacity": 0.85 },
          },
        ],
      },
    });
    map.current = instance;
    const loadResearchSources = async () => {
      if (container.current) container.current.dataset.sourceLoader = "started";
      const sourceFiles = {
        geology: "surficial-geology.geojson",
        soils: "soil-context.geojson",
        wetlands: "current-nwi-wetlands.geojson",
        concentrations: "foundation-report-concentrations.geojson",
        audubon: "neighborhood-context.geojson",
        boundary: "amherst-boundary.geojson",
      } as const;
      try {
        const collections = await Promise.all(
          Object.entries(sourceFiles).map(async ([sourceId, filename]) => {
            const response = await fetch(`${dataRoot}/${filename}`);
            if (!response.ok) throw new Error(`${filename}: HTTP ${response.status}`);
            return [sourceId, (await response.json()) as ResearchCollection] as const;
          }),
        );
        researchCollections.current = Object.fromEntries(collections);

        const overlayDefinitions = [
          {
            key: "geology",
            layerId: "geology-raster",
            visible: false,
            style: (feature: ResearchFeature) => {
              const colors: Record<string, string> = {
                "Lacustrine Silt and Clay": "rgba(138, 106, 168, .48)",
                "Lacustrine Sand": "rgba(199, 165, 90, .46)",
                Till: "rgba(155, 122, 105, .42)",
                "Recent Alluvium": "rgba(75, 140, 134, .48)",
              };
              return {
                fill: colors[String(feature.properties.unit_name)] ?? "rgba(126, 120, 145, .4)",
                stroke: "rgba(95, 71, 119, .76)",
                width: 2,
              };
            },
          },
          {
            key: "soils",
            layerId: "soils-raster",
            visible: false,
            style: (feature: ResearchFeature) => {
              const compared =
                feature.properties.report_context ===
                "One of five lacustrine soil series compared in the 2005 USACE study";
              return {
                fill: compared ? "rgba(233, 138, 47, .42)" : "rgba(223, 213, 189, .18)",
                stroke: compared ? "rgba(145, 88, 38, .68)" : "rgba(155, 118, 80, .3)",
                width: compared ? 1.8 : .7,
              };
            },
          },
          {
            key: "wetlands",
            layerId: "wetlands-raster",
            visible: true,
            style: () => ({
              fill: "rgba(22, 131, 122, .58)",
              stroke: "rgba(7, 91, 86, .92)",
              width: 2,
            }),
          },
          {
            key: "concentrations",
            layerId: "foundation-density-raster",
            visible: true,
            style: (feature: ResearchFeature) => {
              const density = String(feature.properties.density_class);
              const fill =
                density === "higher"
                  ? "rgba(173, 31, 45, .72)"
                  : density === "moderate"
                    ? "rgba(228, 109, 61, .58)"
                    : "rgba(243, 197, 110, .44)";
              return { fill, stroke: "rgba(125, 28, 39, .76)", width: 1.6 };
            },
          },
          {
            key: "audubon",
            layerId: "audubon-raster",
            visible: true,
            style: () => ({
              fill: "rgba(77, 58, 133, .08)",
              stroke: "rgba(77, 58, 133, .95)",
              width: 5,
              dash: [10, 8],
            }),
          },
          {
            key: "boundary",
            layerId: "amherst-boundary-raster",
            visible: true,
            style: () => ({
              fill: "rgba(0, 0, 0, 0)",
              stroke: "rgba(23, 39, 32, .94)",
              width: 5,
            }),
          },
        ];

        const addCanvasOverlays = () => {
          overlayDefinitions.forEach((definition) => {
            const canvas = document.createElement("canvas");
            canvas.id = `amherst-${definition.key}-canvas`;
            canvas.width = 1536;
            canvas.height = 1536;
            canvas.hidden = true;
            document.body.appendChild(canvas);
            overlayCanvases.current.push(canvas);
            drawCollection(canvas, researchCollections.current[definition.key], definition.style);

            const sourceId = `amherst-${definition.key}-canvas-source`;
            instance.addSource(sourceId, {
              type: "canvas",
              canvas: canvas.id,
              animate: false,
              coordinates: [
                [amherstBounds.west, amherstBounds.north],
                [amherstBounds.east, amherstBounds.north],
                [amherstBounds.east, amherstBounds.south],
                [amherstBounds.west, amherstBounds.south],
              ],
            } satisfies CanvasSourceSpecification);
            instance.addLayer({
              id: definition.layerId,
              type: "raster",
              source: sourceId,
              layout: { visibility: definition.visible ? "visible" : "none" },
              paint: { "raster-opacity": 1, "raster-resampling": "linear" },
            });
          });
          if (container.current) {
            container.current.dataset.sourceLoader = "complete";
            container.current.dataset.mapReady = "true";
            container.current.dataset.loadedSources = collections.map(([key]) => key).join(",");
            container.current.dataset.renderedFeatures = String(
              collections.reduce((total, [, collection]) => total + collection.features.length, 0),
            );
          }
        };

        window.setTimeout(addCanvasOverlays, 0);
      } catch (error) {
        if (container.current) container.current.dataset.sourceLoader = "error";
        console.error("Amherst GIS data load error", error);
      }
    };
    const sourceTimer = window.setTimeout(() => void loadResearchSources(), 0);
    instance.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    instance.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-left");

    const featureAt = (point: [number, number]) => {
      const searchOrder = [
        ["concentrations", "foundation-concentrations"],
        ["wetlands", "nwi-wetlands"],
        ["soils", "soil-context"],
        ["geology", "surficial-geology"],
        ["audubon", "audubon-context"],
      ] as const;
      for (const [collectionId, controlId] of searchOrder) {
        if (!visibilityRef.current[controlId]) continue;
        const features = researchCollections.current[collectionId]?.features ?? [];
        for (let index = features.length - 1; index >= 0; index -= 1) {
          if (pointInFeature(point, features[index])) return features[index];
        }
      }
      return undefined;
    };
    instance.on("error", (event) => {
      console.error("Amherst GIS layer error", event.error?.message ?? event.error);
    });
    instance.on("click", (event) => {
      const feature = featureAt([event.lngLat.lng, event.lngLat.lat]);
      if (container.current) {
        container.current.dataset.lastMapClick = `${event.lngLat.lng.toFixed(6)},${event.lngLat.lat.toFixed(6)}`;
        container.current.dataset.lastFeature = String(feature?.properties.feature_id ?? "none");
      }
      if (feature) setSelected(featureToSelection(feature));
    });
    instance.on("mousemove", (event) => {
      instance.getCanvas().style.cursor = featureAt([event.lngLat.lng, event.lngLat.lat])
        ? "pointer"
        : "";
    });

    const resize = () => requestAnimationFrame(() => instance.resize());
    const observer = new ResizeObserver(resize);
    observer.observe(container.current);
    window.addEventListener("resize", resize);

    return () => {
      window.clearTimeout(sourceTimer);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      overlayCanvases.current.forEach((canvas) => canvas.remove());
      overlayCanvases.current = [];
      instance.remove();
      map.current = null;
    };
  }, []);

  function toggleLayer(controlId: string, layerIds: readonly string[]) {
    setVisibility((current) => {
      const nextVisible = !current[controlId];
      visibilityRef.current = { ...visibilityRef.current, [controlId]: nextVisible };
      layerIds.forEach((layerId) => {
        if (map.current?.getLayer(layerId)) {
          map.current.setLayoutProperty(layerId, "visibility", nextVisible ? "visible" : "none");
        }
      });
      return { ...current, [controlId]: nextVisible };
    });
  }

  return (
    <section className="amherst-map-shell" aria-labelledby="amherst-map-title">
      <div className="amherst-map-heading">
        <div>
          <p className="eyebrow">Separate research map · Town of Amherst</p>
          <h2 id="amherst-map-title">Mapped evidence, not a property diagnosis</h2>
        </div>
        <p>
          Select a shaded feature to read what it documents and what it does not establish.
        </p>
      </div>

      <div className="amherst-map-grid">
        <div className="amherst-map-canvas" ref={container} />
        <aside className="amherst-map-panel" aria-live="polite">
          <div className="amherst-layer-controls" aria-label="Map layers">
            <p className="record-label">Layers</p>
            {layerControls.map((control) => (
              <label key={control.id}>
                <input
                  type="checkbox"
                  checked={visibility[control.id]}
                  onChange={() => toggleLayer(control.id, control.layers)}
                />
                <i style={{ background: control.color }} aria-hidden="true" />
                <span>
                  <strong>{control.label}</strong>
                  <small>{control.detail}</small>
                </span>
              </label>
            ))}
            <div className="amherst-pending-layer">
              <strong>Historic / filled wetlands</strong>
              <span>Source comparison underway; no polygons published without corroboration.</span>
            </div>
          </div>

          <article className="amherst-feature-story">
            <p className="record-label">{selected.category}</p>
            <h3>{selected.heading}</h3>
            <p>{selected.summary}</p>
            <dl>
              <div>
                <dt>Evidence</dt>
                <dd>{selected.evidence}</dd>
              </div>
              <div>
                <dt>Limit</dt>
                <dd>{selected.limitation}</dd>
              </div>
              <div>
                <dt>Source ID</dt>
                <dd><code>{selected.sourceId}</code></dd>
              </div>
            </dl>
          </article>
        </aside>
      </div>
    </section>
  );
}
