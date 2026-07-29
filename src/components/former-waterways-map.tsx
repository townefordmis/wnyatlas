"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type { Map as MapLibreMap, Marker } from "maplibre-gl";

import {
  formerWaterwayRecords,
  waterwayEvidenceLabels,
  type FormerWaterwayRecord,
  type WaterwayEvidenceType,
} from "@/data/former-waterways";

const buffaloCenter: [number, number] = [-78.85, 42.86];

export function FormerWaterwaysMap() {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const markers = useRef<Map<string, Marker>>(new Map());
  const [selected, setSelected] = useState(formerWaterwayRecords[0]);
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
    const instance = new maplibregl.Map({
      container: container.current,
      center: buffaloCenter,
      zoom: isMobile ? 10.2 : 11,
      minZoom: 9,
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
        layers: [{ id: "osm", type: "raster", source: "osm" }],
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

    const markerStore = markers.current;
    formerWaterwayRecords.forEach((record) => {
      const marker = new maplibregl.Marker({
        color: "#35637a",
        scale: 0.64,
        subpixelPositioning: true,
      })
        .setLngLat(record.coordinates)
        .addTo(instance);
      marker.getElement().classList.add("school-native-marker");
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
  }, [filtered, selected.id]);

  function chooseRecord(record: FormerWaterwayRecord) {
    setSelected(record);
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
            Separate research map · {formerWaterwayRecords.length} documented locations
          </p>
          <h2 id="waterway-map-title">Former waterways and documented fill</h2>
        </div>
        <div className="school-map-legend" aria-label="Map limitation">
          <span><i className="legend-nearby" /> Evidence location—not a surveyed boundary</span>
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
                <strong>{record.name}</strong>
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
          <section>
            <h4>What the record documents</h4>
            <p>{selected.documentedMaterial}</p>
          </section>
          <section>
            <h4>How WNY Atlas interprets it</h4>
            <p>{selected.interpretation}</p>
            <a href={selected.sourceUrl} target="_blank" rel="noreferrer">
              {selected.sourceLabel} ↗
            </a>
          </section>

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
