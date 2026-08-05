"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type { GeoJSONSource, Map as MapLibreMap } from "maplibre-gl";

import { PublicHealthMap } from "@/components/public-health-map";
import { healthSearchCounties } from "@/data/health-search-catalog";
import type { HealthCountyRecord, HealthTopic, HealthTrendRecord } from "@/data/health-platform";

type Props = {
  topic: HealthTopic;
  initialIndicator?: string;
  initialCounty?: string;
  explorerMode?: boolean;
  platformTopics: HealthTopic[];
  countyRecords: HealthCountyRecord[];
  trendRecords: HealthTrendRecord[];
};

function formatValue(record: HealthCountyRecord | undefined) {
  if (!record || record.value === null) return "Withheld";
  if (record.unit.toLowerCase().includes("median household")) {
    return `$${record.value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  }
  if (record.unit.toLowerCase().includes("percentage")) return `${record.value.toFixed(1)}%`;
  return record.value.toLocaleString("en-US", { maximumFractionDigits: 1 });
}

function mapData(records: HealthCountyRecord[]) {
  const values = records.flatMap((record) => record.value === null ? [] : [record.value]);
  const minimum = Math.min(...values, 0);
  const maximum = Math.max(...values, 1);
  return {
    type: "FeatureCollection" as const,
    features: records.flatMap((record) => {
      if (record.latitude === null || record.longitude === null || record.value === null) return [];
      const ratio = maximum === minimum ? 0.5 : (record.value - minimum) / (maximum - minimum);
      return [{
        type: "Feature" as const,
        properties: { county: record.county, radius: 11 + ratio * 9, opacity: 0.58 + ratio * 0.34 },
        geometry: { type: "Point" as const, coordinates: [record.longitude, record.latitude] },
      }];
    }),
  };
}

export function HealthTopicExplorer({ topic, initialIndicator, initialCounty, explorerMode = false, platformTopics, countyRecords, trendRecords: allTrendRecords }: Props) {
  const wnyCountyNames = healthSearchCounties;
  const labelFor = (id: string) => countyRecords.find((record) => record.indicatorId === id)?.indicator ?? id;
  const recordFor = (id: string, name: string) => countyRecords.find((record) => record.indicatorId === id && record.county === name);
  const rankedFor = (id: string) => countyRecords.filter((record) => record.indicatorId === id && record.county !== "New York State" && record.value !== null).sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
  const wnyFor = (id: string) => wnyCountyNames.map((name) => recordFor(id, name)).filter((record): record is HealthCountyRecord => Boolean(record));
  const placementFor = (record: HealthCountyRecord) => {
    if (record.value === null) return null;
    const ranked = rankedFor(record.indicatorId);
    const index = ranked.findIndex((candidate) => candidate.county === record.county);
    return index === -1 ? null : { rank: index + 1, denominator: ranked.length };
  };
  const firstIndicator = initialIndicator && topic.indicatorIds.includes(initialIndicator)
    ? initialIndicator
    : topic.indicatorIds[0] ?? "";
  const [indicatorId, setIndicatorId] = useState(firstIndicator);
  const [county, setCounty] = useState(
    initialCounty && wnyCountyNames.includes(initialCounty as (typeof wnyCountyNames)[number]) ? initialCounty : "Erie",
  );
  const [peerView, setPeerView] = useState<"all" | "wny" | "population" | "neighbors">("all");
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const indicatorRef = useRef(indicatorId);
  const records = wnyFor(indicatorId);
  const selected = records.find((record) => record.county === county) ?? records[0];
  const state = recordFor(indicatorId, "New York State");
  const statewideRank = selected ? placementFor(selected) : null;
  const wnyRank = selected?.value === null || !selected
    ? null
    : [...records].filter((record) => record.value !== null).sort((a, b) => (b.value ?? 0) - (a.value ?? 0)).findIndex((record) => record.county === selected.county) + 1;
  const stateDifference = selected?.value !== null && selected && state?.value
    ? ((selected.value / state.value) - 1) * 100
    : null;
  const trendRecords = allTrendRecords.filter((record) => record.indicatorId === indicatorId && record.county === county).sort((a, b) => a.year.localeCompare(b.year));

  useEffect(() => { indicatorRef.current = indicatorId; }, [indicatorId]);

  useEffect(() => {
    if (!mapContainer.current || map.current || !indicatorId) return;
    maplibregl.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
    const instance = new maplibregl.Map({
      container: mapContainer.current,
      center: [-78.55, 42.78],
      zoom: 6.9,
      minZoom: 6.2,
      maxZoom: 11,
      cooperativeGestures: window.matchMedia("(max-width: 700px)").matches,
      attributionControl: false,
      style: {
        version: 8,
        sources: {
          osm: { type: "raster", tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"], tileSize: 256, attribution: "© OpenStreetMap contributors" },
          countyHealth: { type: "geojson", data: mapData(records) },
        },
        layers: [
          { id: "osm", type: "raster", source: "osm" },
          {
            id: "county-health",
            type: "circle",
            source: "countyHealth",
            paint: {
              "circle-radius": ["get", "radius"],
              "circle-color": topic.color,
              "circle-opacity": ["get", "opacity"],
              "circle-stroke-color": "#fffdf8",
              "circle-stroke-width": 4,
            },
          },
        ],
      },
    });
    instance.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    instance.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-left");
    instance.on("click", "county-health", (event) => {
      const nextCounty = event.features?.[0]?.properties?.county;
      if (typeof nextCounty === "string") {
        setCounty(nextCounty);
        const params = new URLSearchParams({ indicator: indicatorRef.current, county: nextCounty });
        if (explorerMode) params.set("topic", topic.slug);
        window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}#explorer`);
      }
    });
    instance.on("mouseenter", "county-health", () => { instance.getCanvas().style.cursor = "pointer"; });
    instance.on("mouseleave", "county-health", () => { instance.getCanvas().style.cursor = ""; });
    const resize = () => window.requestAnimationFrame(() => instance.resize());
    const observer = new ResizeObserver(resize);
    observer.observe(mapContainer.current);
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
    // The map is initialized once; source updates are handled below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const source = map.current?.getSource("countyHealth") as GeoJSONSource | undefined;
    source?.setData(mapData(records));
    map.current?.setPaintProperty("county-health", "circle-color", topic.color);
  }, [records, topic.color]);

  function updateUrl(nextIndicator: string, nextCounty: string) {
    const params = new URLSearchParams();
    if (nextIndicator) params.set("indicator", nextIndicator);
    if (nextCounty) params.set("county", nextCounty);
    if (explorerMode) params.set("topic", topic.slug);
    window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}#explorer`);
  }

  function selectIndicator(nextIndicator: string) {
    setIndicatorId(nextIndicator);
    const nextRecords = wnyFor(nextIndicator);
    const nextCounty = nextRecords.some((record) => record.county === county) ? county : nextRecords[0]?.county ?? county;
    setCounty(nextCounty);
    updateUrl(nextIndicator, nextCounty);
  }

  function selectCounty(nextCounty: string) {
    setCounty(nextCounty);
    updateUrl(indicatorId, nextCounty);
    const record = records.find((candidate) => candidate.county === nextCounty);
    if (record?.latitude && record.longitude) map.current?.flyTo({ center: [record.longitude, record.latitude], zoom: 8.2 });
  }

  if (!topic.indicatorIds.length) {
    return (
      <div className="health-topic-empty">
        <strong>Dedicated page, limited comparison data</strong>
        <p>{topic.sourceNote}</p>
        {topic.localLayer && <PublicHealthMap initialLayer={topic.localLayer} singleLayer />}
      </div>
    );
  }

  const allRanked = rankedFor(indicatorId);
  const neighborMap: Record<string, string[]> = {
    Allegany: ["Cattaraugus", "Wyoming"], Cattaraugus: ["Allegany", "Chautauqua", "Erie", "Wyoming"],
    Chautauqua: ["Cattaraugus", "Erie"], Erie: ["Cattaraugus", "Chautauqua", "Genesee", "Niagara", "Wyoming"],
    Genesee: ["Erie", "Niagara", "Orleans", "Wyoming"], Niagara: ["Erie", "Genesee", "Orleans"],
    Orleans: ["Genesee", "Niagara"], Wyoming: ["Allegany", "Cattaraugus", "Erie", "Genesee"],
  };
  const selectedPopulation = recordFor("total-population", county)?.value;
  const displayedRanked = allRanked.filter((record) => {
    if (peerView === "wny") return wnyCountyNames.includes(record.county as (typeof wnyCountyNames)[number]);
    if (peerView === "neighbors") return record.county === county || (neighborMap[county] ?? []).includes(record.county);
    if (peerView === "population" && selectedPopulation) {
      const population = recordFor("total-population", record.county)?.value;
      return population !== null && population !== undefined && population >= selectedPopulation * 0.75 && population <= selectedPopulation * 1.25;
    }
    return true;
  });

  return (
    <div className="health-data-explorer" id="explorer">
      <div className="health-explorer-controls">
        <label>
          <span>Health topic</span>
          <select value={topic.slug} onChange={(event) => {
            window.location.href = explorerMode
              ? `/health/explorer?topic=${event.target.value}#explorer`
              : `/health/${event.target.value}`;
          }}>
            {platformTopics.filter((item) => item.indicatorIds.length || item.localLayer).map((item) => (
              <option value={item.slug} key={item.slug}>{item.shortTitle}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Indicator</span>
          <select value={indicatorId} onChange={(event) => selectIndicator(event.target.value)}>
            {topic.indicatorIds.map((id) => <option value={id} key={id}>{labelFor(id)}</option>)}
          </select>
        </label>
        <label>
          <span>WNY county</span>
          <select value={county} onChange={(event) => selectCounty(event.target.value)}>
            {wnyCountyNames.map((name) => <option value={name} key={name}>{name} County</option>)}
          </select>
        </label>
      </div>

      <div className="health-explorer-grid">
        <div className="health-county-map-wrap">
          <div ref={mapContainer} className="health-county-map" role="img" aria-label={`County reference map for ${labelFor(indicatorId)}`} />
          <p>Circles mark county reference points and are sized by the selected county value. They are not patient locations.</p>
        </div>
        <aside className="health-stat-panel" style={{ borderTopColor: topic.color }}>
          <p className="record-label">{selected?.county ?? county} County</p>
          <h2>{labelFor(indicatorId)}</h2>
          <strong>{formatValue(selected)}</strong>
          <span>{selected?.unit === "Rate" ? "Official reported rate" : selected?.unit}</span>
          <dl>
            <div><dt>WNY placement</dt><dd>{wnyRank ? `#${wnyRank} of ${records.filter((record) => record.value !== null).length}` : "Not ranked"}</dd></div>
            <div><dt>NY placement</dt><dd>{statewideRank ? `#${statewideRank.rank} of ${statewideRank.denominator}` : "Not ranked"}</dd></div>
            <div><dt>Compared with NYS</dt><dd>{stateDifference === null ? "No matching benchmark" : `${stateDifference >= 0 ? "+" : ""}${stateDifference.toFixed(1)}%`}</dd></div>
            <div><dt>Reporting period</dt><dd>{selected?.period ?? "Not published"}</dd></div>
            <div><dt>Events</dt><dd>{selected?.eventCount?.toLocaleString() ?? "Not published"}</dd></div>
            <div><dt>Denominator</dt><dd>{selected?.denominator?.toLocaleString() ?? "Not published"}</dd></div>
          </dl>
          <Link href={`/health/county/${selected?.county.toLowerCase() ?? county.toLowerCase()}`}>Open county profile →</Link>
        </aside>
      </div>

      <section className="health-ranked-section" aria-labelledby={`ranked-${topic.slug}`}>
        <div className="health-section-heading">
          <p className="eyebrow">Eight-county comparison</p>
          <h2 id={`ranked-${topic.slug}`}>Highest reported value to lowest</h2>
          <p>Placement is descriptive. “Highest” is not automatically “worst,” particularly for access, income, screening, and protective measures.</p>
        </div>
        <div className="health-ranked-bars">
          {[...records].filter((record) => record.value !== null).sort((a, b) => (b.value ?? 0) - (a.value ?? 0)).map((record) => {
            const maximum = Math.max(...records.map((item) => item.value ?? 0), 1);
            return (
              <button type="button" className={record.county === selected?.county ? "is-selected" : ""} onClick={() => selectCounty(record.county)} key={record.county}>
                <span>{record.county}</span>
                <i><b style={{ width: `${Math.max(3, ((record.value ?? 0) / maximum) * 100)}%`, background: topic.color }} /></i>
                <strong>{formatValue(record)}</strong>
              </button>
            );
          })}
        </div>
      </section>

      {trendRecords.length > 1 && (
        <section className="health-trend-section" aria-labelledby={`trend-${topic.slug}`}>
          <div className="health-section-heading">
            <p className="eyebrow">Historical trend</p>
            <h2 id={`trend-${topic.slug}`}>{county} County and the NYS-excluding-NYC reference</h2>
            <p>Bars use the source&apos;s annual values. Definition changes and gaps remain attached to the official series.</p>
          </div>
          <div className="health-trend-legend"><span><i style={{ background: topic.color }} />{county} County</span><span><i />NYS excluding NYC</span></div>
          <div className="health-trend-chart">
            {trendRecords.map((record) => {
              const maximum = Math.max(...trendRecords.flatMap((item) => [item.value, item.stateValue ?? 0]), 1);
              return (
                <div key={record.year}>
                  <div className="health-trend-bars">
                    <i title={`${county}: ${record.value}`} style={{ height: `${Math.max(3, (record.value / maximum) * 100)}%`, background: topic.color }} />
                    {record.stateValue !== null && <i title={`NYS excluding NYC: ${record.stateValue}`} style={{ height: `${Math.max(3, (record.stateValue / maximum) * 100)}%` }} />}
                  </div>
                  <strong>{record.year}</strong><span>{record.value.toLocaleString("en-US", { maximumFractionDigits: 1 })}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section className="health-audit-table" aria-labelledby={`audit-${topic.slug}`}>
        <div className="health-section-heading">
          <p className="eyebrow">All New York counties</p>
          <h2 id={`audit-${topic.slug}`}>Sortable-source audit view</h2>
          <p>{allRanked.length} counties have a reported value for this indicator. Suppressed or unavailable values are not assigned a rank.</p>
        </div>
        <div className="health-peer-filters" aria-label="County comparison group">
          <button className={peerView === "all" ? "is-active" : ""} onClick={() => setPeerView("all")} type="button">All NY counties</button>
          <button className={peerView === "wny" ? "is-active" : ""} onClick={() => setPeerView("wny")} type="button">WNY only</button>
          <button className={peerView === "population" ? "is-active" : ""} onClick={() => setPeerView("population")} type="button">Similar population ±25%</button>
          <button className={peerView === "neighbors" ? "is-active" : ""} onClick={() => setPeerView("neighbors")} type="button">Adjacent WNY counties</button>
        </div>
        <div className="health-table-scroll">
          <table>
            <thead><tr><th>Rank</th><th>County</th><th>Value</th><th>Period</th><th>Events</th><th>Denominator</th></tr></thead>
            <tbody>
              {displayedRanked.map((record) => {
                const statewideIndex = allRanked.findIndex((candidate) => candidate.county === record.county);
                return (
                <tr className={wnyCountyNames.includes(record.county as (typeof wnyCountyNames)[number]) ? "is-wny" : ""} key={record.county}>
                  <td>{statewideIndex + 1}</td><th>{record.county}</th><td>{formatValue(record)}</td><td>{record.period}</td><td>{record.eventCount?.toLocaleString() ?? "—"}</td><td>{record.denominator?.toLocaleString() ?? "—"}</td>
                </tr>
              );})}
            </tbody>
          </table>
        </div>
      </section>

      {topic.localLayer && (
        <section className="health-local-layer" aria-labelledby={`local-${topic.slug}`}>
          <div className="health-section-heading">
            <p className="eyebrow">Official local detail</p>
            <h2 id={`local-${topic.slug}`}>The most detailed supported geography</h2>
            <p>The local map retains the source geography and does not assign county averages to neighborhoods.</p>
          </div>
          <PublicHealthMap initialLayer={topic.localLayer} singleLayer />
        </section>
      )}
    </div>
  );
}
