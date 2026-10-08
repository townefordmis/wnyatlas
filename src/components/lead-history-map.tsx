"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import styles from "@/app/research/lead/lead.module.css";

export type LeadMapPoint = { id: string; name: string; location: string; coordinates: [number, number]; note: string };

export function LeadHistoryMap({ points }: { points: LeadMapPoint[] }) {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markerRefs = useRef<maplibregl.Marker[]>([]);
  const [selected, setSelected] = useState(points[0]?.id);
  const [unavailable, setUnavailable] = useState(false);
  const selectedPoint = points.find(point => point.id === selected) ?? points[0];

  useEffect(() => {
    if (!container.current) return;
    let instance: maplibregl.Map;
    let active = true;
    try {
      instance = new maplibregl.Map({
        container: container.current,
        center: [-78.9, 43.03], zoom: 8.8, scrollZoom: false,
        style: { version: 8, sources: { osm: { type: "raster", tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"], tileSize: 256, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' } }, layers: [{ id: "base", type: "raster", source: "osm" }] },
      });
      map.current = instance;
      instance.addControl(new maplibregl.NavigationControl(), "top-right");
      instance.on("error", () => setUnavailable(true));
      instance.on("load", () => {
        instance.fitBounds(points.reduce((bounds, point) => bounds.extend(point.coordinates), new maplibregl.LngLatBounds()), { padding: 65, maxZoom: 11, duration: 0 });
      });
      markerRefs.current = points.map((point, i) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = styles.mapMarker;
        button.textContent = String(i + 1);
        button.setAttribute("aria-label", `Select ${point.name}`);
        button.addEventListener("click", () => setSelected(point.id));
        return new maplibregl.Marker({ element: button }).setLngLat(point.coordinates).addTo(instance);
      });
    } catch {
      queueMicrotask(() => { if (active) setUnavailable(true); });
    }
    return () => { active = false; markerRefs.current.forEach(marker => marker.remove()); markerRefs.current = []; instance?.remove(); map.current = null; };
  }, [points]);

  useEffect(() => {
    markerRefs.current.forEach((marker, i) => marker.getElement().setAttribute("aria-pressed", String(points[i].id === selected)));
  }, [selected, points]);

  return <div className={styles.mapLayout}>
    <div>
      <div ref={container} className={styles.mapCanvas} role="region" aria-label="Map of selected Western New York industrial lead records" />
      {unavailable && <p className={styles.limit} role="status">The map background is unavailable. All place records remain accessible in the numbered list.</p>}
    </div>
    <div className={styles.mapPanel}>
      <div className={styles.mapChoices} aria-label="Choose a place">{points.map((point, i) => <button key={point.id} type="button" aria-pressed={selected === point.id} onClick={() => {
        setSelected(point.id);
        map.current?.easeTo({ center: point.coordinates, zoom: 12, duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 700 });
      }}>{i + 1}. {point.name}</button>)}</div>
      {selectedPoint && <div aria-live="polite"><h3>{selectedPoint.name}</h3><p>{selectedPoint.location}</p><p>{selectedPoint.note}</p><Link className={styles.source} href={`/sites/${selectedPoint.id}`}>Open Atlas record →</Link><a className={styles.source} href={`#facility-${selectedPoint.id}`}>Read the history above ↑</a></div>}
    </div>
  </div>;
}
