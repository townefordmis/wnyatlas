"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type { Map as MapLibreMap, Marker } from "maplibre-gl";

import {
  currentAssessmentSources,
  generalizedAssessmentAreas,
  historicalRadiologicalRecords,
  historicalSurveySource,
  latestRadiologicalFollowUps,
  radiologicalProducers,
  radiologicalDocuments,
  type RadiologicalDocument,
  type HistoricalRadiologicalRecord,
  type RadiologicalDisposition,
  type RadiologicalFollowUp,
  type RadiologicalProducer,
} from "@/data/radiological-investigation";

type Selection =
  | { type: "historical"; record: HistoricalRadiologicalRecord }
  | { type: "producer"; record: RadiologicalProducer }
  | { type: "follow-up"; record: RadiologicalFollowUp };

type MapView = "all" | "old-remediated" | "1986-other" | "newer";

const dispositionLabels: Record<RadiologicalDisposition, string> = {
  "federal-remediated": "NFSS-related; report states remediation occurred",
  "historical-anomaly": "Other DOE/ORNL anomaly; generally associated with phosphate slag",
  "building-material-or-unconfirmed": "Approximate, building-related, or unresolved record",
};

const countyBoundaryUrl =
  "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/82/query?where=STATE%3D%2736%27%20AND%20COUNTY%20IN%20%28%27029%27%2C%27063%27%29&outFields=NAME%2CBASENAME%2CSTATE%2CCOUNTY&returnGeometry=true&outSR=4326&f=geojson";

export function RadiologicalInvestigationMap() {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const historicalMarkers = useRef<Map<number, Marker>>(new Map());
  const producerMarkers = useRef<Map<string, Marker>>(new Map());
  const followUpMarkers = useRef<Map<string, Marker>>(new Map());
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("all");
  const [county, setCounty] = useState<"all" | "Erie" | "Niagara">("all");
  const [disposition, setDisposition] = useState<RadiologicalDisposition | "all">("all");
  const [showAssessment, setShowAssessment] = useState(true);
  const [showProducers, setShowProducers] = useState(true);
  const [mapView, setMapView] = useState<MapView>("all");
  const [selection, setSelection] = useState<Selection>({
    type: "historical",
    record: historicalRadiologicalRecords[0],
  });

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return historicalRadiologicalRecords.filter((record) => {
      if (county === "Erie") return false;
      if (area !== "all" && record.area !== area) return false;
      if (disposition !== "all" && record.disposition !== disposition) return false;
      return !normalized || `${record.name} ${record.location} ${record.area}`.toLowerCase().includes(normalized);
    });
  }, [area, county, disposition, query]);

  const filteredProducers = useMemo(
    () => county === "all" ? radiologicalProducers : radiologicalProducers.filter((record) => record.county === county),
    [county],
  );

  const displayedHistorical = useMemo(
    () => filtered.filter((record) => {
      if (mapView === "newer") return false;
      if (mapView === "old-remediated") return record.disposition === "federal-remediated";
      if (mapView === "1986-other") return record.disposition !== "federal-remediated";
      return true;
    }),
    [filtered, mapView],
  );

  const showNewerPins = mapView === "all" || mapView === "newer";

  const filteredFollowUps = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return latestRadiologicalFollowUps.filter((record) => {
      if (county !== "all" && record.county !== county) return false;
      return !normalized || `${record.name} ${record.location}`.toLowerCase().includes(normalized);
    });
  }, [county, query]);

  useEffect(() => {
    if (!container.current || map.current) return;

    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    maplibregl.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
    const instance = new maplibregl.Map({
      container: container.current,
      bounds: [[-79.12, 42.4], [-78.42, 43.4]],
      fitBoundsOptions: { padding: isMobile ? 18 : 34 },
      minZoom: 8,
      maxZoom: 18,
      cooperativeGestures: isMobile,
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
        },
        layers: [{ id: "osm", type: "raster", source: "osm" }],
      },
    });
    map.current = instance;
    instance.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    instance.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-left");
    const historicalStore = historicalMarkers.current;
    const producerStore = producerMarkers.current;
    const followUpStore = followUpMarkers.current;

    let layersInitialized = false;
    const initializeMapLayers = () => {
      if (layersInitialized) return;
      layersInitialized = true;
      instance.addSource("county-boundaries", { type: "geojson", data: countyBoundaryUrl });
      instance.addLayer({
        id: "county-fill",
        type: "fill",
        source: "county-boundaries",
        paint: {
          "fill-color": ["match", ["get", "COUNTY"], "029", "#4c7891", "063", "#72518b", "#777"],
          "fill-opacity": 0.07,
        },
      });
      instance.addLayer({
        id: "county-outline",
        type: "line",
        source: "county-boundaries",
        paint: {
          "line-color": ["match", ["get", "COUNTY"], "029", "#315d76", "063", "#5a346f", "#555"],
          "line-opacity": 0.8,
          "line-width": 2,
        },
      });
      instance.addSource("assessment", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: generalizedAssessmentAreas.map((record) => ({
            type: "Feature",
            properties: { name: record.name },
            geometry: { type: "Polygon", coordinates: record.coordinates },
          })),
        },
      });
      instance.addLayer({
        id: "assessment-fill",
        type: "fill",
        source: "assessment",
        paint: { "fill-color": "#6c4e82", "fill-opacity": 0.075 },
      });
      instance.addLayer({
        id: "assessment-outline",
        type: "line",
        source: "assessment",
        paint: { "line-color": "#6c4e82", "line-opacity": 0.55, "line-width": 1.4, "line-dasharray": [3, 3] },
      });

      const popup = new maplibregl.Popup({
        closeButton: true,
        closeOnClick: true,
        maxWidth: "310px",
        offset: 18,
      });

      function showPopup(
        coordinates: [number, number],
        label: string,
        title: string,
        detail: string,
      ) {
        const content = document.createElement("div");
        content.className = "radiological-popup";
        const eyebrow = document.createElement("span");
        eyebrow.textContent = label;
        const heading = document.createElement("strong");
        heading.textContent = title;
        const description = document.createElement("p");
        description.textContent = detail;
        const instruction = document.createElement("small");
        instruction.textContent = "Full sourced record is open beside or below the map.";
        content.append(eyebrow, heading, description, instruction);
        popup.setLngLat(coordinates).setDOMContent(content).addTo(instance);
      }

      historicalRadiologicalRecords.forEach((record) => {
        const element = document.createElement("button");
        element.type = "button";
        element.className = `radiological-map-marker historical-marker is-${record.disposition}`;
        element.setAttribute("aria-label", `Open ${record.name}: ${record.location}`);
        element.title = `${record.name} — ${record.location}`;
        element.append(document.createElement("span"));
        element.classList.toggle("is-selected", record.id === historicalRadiologicalRecords[0].id);
        element.addEventListener("click", (event) => {
          event.stopPropagation();
          setSelection({ type: "historical", record });
          showPopup(record.coordinates, dispositionLabels[record.disposition], record.name, record.location);
        });
        historicalStore.set(
          record.id,
          new maplibregl.Marker({ element, anchor: "center", subpixelPositioning: true })
            .setLngLat(record.coordinates)
            .addTo(instance),
        );
      });

      radiologicalProducers.forEach((record) => {
        if (!record.coordinates) return;
        const coordinates = record.coordinates;
        const element = document.createElement("button");
        element.type = "button";
        element.className = `radiological-map-marker producer-marker is-${record.role}`;
        element.setAttribute("aria-label", `Open ${record.name}: ${record.location}`);
        element.title = `${record.name} — ${record.location}`;
        element.append(document.createElement("span"));
        element.addEventListener("click", (event) => {
          event.stopPropagation();
          setSelection({ type: "producer", record });
          showPopup(coordinates, `${record.county} County · ${record.role.replaceAll("-", " ")}`, record.name, record.location);
        });
        producerStore.set(
          record.id,
          new maplibregl.Marker({ element, anchor: "center", subpixelPositioning: true })
            .setLngLat(coordinates)
            .addTo(instance),
        );
      });

      latestRadiologicalFollowUps.forEach((record) => {
        const element = document.createElement("button");
        element.type = "button";
        element.className = "radiological-map-marker follow-up-marker";
        element.setAttribute("aria-label", `Open latest follow-up for ${record.name}: ${record.location}`);
        element.title = `${record.name} — latest official follow-up`;
        element.append(document.createElement("span"));
        element.addEventListener("click", (event) => {
          event.stopPropagation();
          setSelection({ type: "follow-up", record });
          showPopup(record.coordinates, `Latest official follow-up · ${record.completed}`, record.name, record.latestStatus);
        });
        followUpStore.set(
          record.id,
          new maplibregl.Marker({ element, anchor: "center", subpixelPositioning: true })
            .setLngLat(record.coordinates)
            .addTo(instance),
        );
      });
    };

    instance.on("load", initializeMapLayers);
    instance.on("style.load", initializeMapLayers);
    requestAnimationFrame(() => {
      if (instance.isStyleLoaded()) initializeMapLayers();
    });

    const resize = () => requestAnimationFrame(() => instance.resize());
    const observer = new ResizeObserver(resize);
    observer.observe(container.current);
    window.addEventListener("resize", resize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      historicalStore.forEach((marker) => marker.remove());
      historicalStore.clear();
      producerStore.forEach((marker) => marker.remove());
      producerStore.clear();
      followUpStore.forEach((marker) => marker.remove());
      followUpStore.clear();
      instance.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    const visible = new Set(displayedHistorical.map((record) => record.id));
    historicalMarkers.current.forEach((marker, id) => {
      marker.getElement().style.display = visible.has(id) ? "" : "none";
    });
  }, [displayedHistorical]);

  useEffect(() => {
    const visible = new Set(filteredProducers.map((record) => record.id));
    producerMarkers.current.forEach((marker, id) => {
      marker.getElement().style.display = showProducers && visible.has(id) ? "" : "none";
    });
  }, [filteredProducers, showProducers]);

  useEffect(() => {
    const visible = new Set(filteredFollowUps.map((record) => record.id));
    followUpMarkers.current.forEach((marker, id) => {
      marker.getElement().style.display = showNewerPins && visible.has(id) ? "" : "none";
    });
  }, [filteredFollowUps, showNewerPins]);

  useEffect(() => {
    const instance = map.current;
    if (!instance?.getLayer("assessment-fill")) return;
    instance.setLayoutProperty("assessment-fill", "visibility", showAssessment ? "visible" : "none");
    instance.setLayoutProperty("assessment-outline", "visibility", showAssessment ? "visible" : "none");
  }, [showAssessment]);

  useEffect(() => {
    historicalMarkers.current.forEach((marker, id) => {
      marker.getElement().classList.toggle("is-selected", selection.type === "historical" && selection.record.id === id);
    });
    producerMarkers.current.forEach((marker, id) => {
      marker.getElement().classList.toggle("is-selected", selection.type === "producer" && selection.record.id === id);
    });
    followUpMarkers.current.forEach((marker, id) => {
      marker.getElement().classList.toggle("is-selected", selection.type === "follow-up" && selection.record.id === id);
    });
  }, [selection]);

  function chooseHistorical(record: HistoricalRadiologicalRecord) {
    setSelection({ type: "historical", record });
    map.current?.flyTo({ center: record.coordinates, zoom: Math.max(map.current.getZoom(), 14), essential: false });
  }

  function chooseProducer(record: RadiologicalProducer) {
    setSelection({ type: "producer", record });
    if (record.coordinates) map.current?.flyTo({ center: record.coordinates, zoom: 13, essential: false });
  }

  function chooseFollowUp(record: RadiologicalFollowUp) {
    setSelection({ type: "follow-up", record });
    map.current?.flyTo({ center: record.coordinates, zoom: 14, essential: false });
  }

  return (
    <section className="radiological-map-shell" aria-labelledby="radiological-map-title">
      <div className="school-map-toolbar">
        <div>
          <p className="eyebrow">Separate investigation map · 100 DOE/ORNL historical survey records</p>
          <h2 id="radiological-map-title">Industrial slag, uranium residue, fill, surveys, and cleanup</h2>
        </div>
        <div className="radiological-legend" aria-label="Map key">
          <span><i className="rad-dot-remediated" /> 1986 map · reported remediated</span>
          <span><i className="rad-dot-fill" /> 1986 map · other anomaly</span>
          <span><i className="rad-dot-review" /> Approximate/unresolved</span>
          <span><i className="rad-dot-follow-up" /> Newer documented site</span>
          <span><i className="rad-dot-producer" /> Production, processing, or storage</span>
          <span><i className="rad-county-erie" /> Erie County</span>
          <span><i className="rad-county-niagara" /> Niagara County</span>
          <span><i className="rad-area" /> 2025–26 survey coverage</span>
        </div>
      </div>
      <p className="radiological-map-help">
        Click or tap any marker for a quick identification. Its complete sourced
        record opens beside the map on desktop and directly below it on mobile.
        Marker color separates NFSS-related locations from the other DOE/ORNL
        anomalies. The 2025 roadway work is shown as survey coverage because agencies
        have not released property-level findings as public pins; teal pins represent
        newer sites with an official EPA location and outcome.
      </p>

      <div className="radiological-map-grid">
        <div className="radiological-map-canvas" ref={container} />

        <aside className="radiological-map-list" aria-label="Radiological map records">
          <label>
            <span>Search fill and survey locations</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Address, road, or anomaly number" />
          </label>
          <label className="radiological-map-view">
            <span>Map view</span>
            <select value={mapView} onChange={(event) => setMapView(event.target.value as MapView)}>
              <option value="all">All years compared</option>
              <option value="old-remediated">Old map: reported remediated</option>
              <option value="1986-other">1986 map: other survey locations</option>
              <option value="newer">Newer documented sites</option>
            </select>
          </label>
          <div className="radiological-filter-row">
            <label><span>County</span><select value={county} onChange={(event) => { const value = event.target.value as "all" | "Erie" | "Niagara"; setCounty(value); if (value === "Erie") setArea("all"); }}><option value="all">Erie + Niagara</option><option value="Erie">Erie County</option><option value="Niagara">Niagara County</option></select></label>
            <label><span>Area</span><select value={area} onChange={(event) => setArea(event.target.value)}><option value="all">All areas</option>{[...new Set(historicalRadiologicalRecords.map((record) => record.area))].map((value) => <option key={value}>{value}</option>)}</select></label>
            <label><span>Record</span><select value={disposition} onChange={(event) => setDisposition(event.target.value as RadiologicalDisposition | "all")}><option value="all">All records</option><option value="federal-remediated">NFSS-related · remediated</option><option value="historical-anomaly">Other DOE/ORNL anomaly</option><option value="building-material-or-unconfirmed">Approximate/unresolved</option></select></label>
          </div>
          <div className="radiological-toggles">
            <label><input type="checkbox" checked={showProducers} onChange={(event) => setShowProducers(event.target.checked)} /> Producers and handlers</label>
            <label><input type="checkbox" checked={showAssessment} onChange={(event) => setShowAssessment(event.target.checked)} /> 2025–26 assessment coverage</label>
          </div>
          <p className="school-result-count">{displayedHistorical.length} historical pins · {showNewerPins ? filteredFollowUps.length : 0} newer pins · {showProducers ? filteredProducers.length : 0} facilities or handlers</p>
          <div className="radiological-options">
            {displayedHistorical.length > 0 && <><p className="record-label">Visible 1986 fill and survey records</p>{displayedHistorical.map((record) => <button type="button" key={record.id} className={selection.type === "historical" && selection.record.id === record.id ? "is-active" : ""} onClick={() => chooseHistorical(record)}><strong>{record.name}</strong><span>{record.location}</span></button>)}</>}
            {showNewerPins && <><p className="record-label producer-heading">Latest documented follow-up</p>{filteredFollowUps.map((record) => <button type="button" key={record.id} className={selection.type === "follow-up" && selection.record.id === record.id ? "is-active follow-up" : "follow-up"} onClick={() => chooseFollowUp(record)}><strong>{record.name}</strong><span>{record.completed} · {record.location}</span></button>)}</>}
            {showProducers && <><p className="record-label producer-heading">Producers, processors, and storage</p>{filteredProducers.map((record) => <button type="button" key={record.id} className={selection.type === "producer" && selection.record.id === record.id ? "is-active producer" : "producer"} onClick={() => chooseProducer(record)}><strong>{record.name}</strong><span>{record.county} County · {record.role.replaceAll("-", " ")} · {record.evidence}</span></button>)}</>}
          </div>
        </aside>

        <article className="radiological-record">
          {selection.type === "historical" && <HistoricalDetail record={selection.record} />}
          {selection.type === "producer" && <ProducerDetail record={selection.record} />}
          {selection.type === "follow-up" && <FollowUpDetail record={selection.record} />}
        </article>
      </div>
    </section>
  );
}

function HistoricalDetail({ record }: { record: HistoricalRadiologicalRecord }) {
  return <>
    <p className="record-label">1984 U.S. Department of Energy / Oak Ridge National Laboratory survey</p>
    <h3>{record.name}</h3>
    <p className="radiological-location">{record.location} · {record.area}</p>
    <div className="radiological-status"><strong>{dispositionLabels[record.disposition]}</strong><span>Map position: {record.coordinatePrecision.replaceAll("-", " ")}</span></div>
    <section><h4>What the historical record says</h4><p>{record.note}</p></section>
    <section><h4>Latest public comparison · July 2026</h4><p>{record.nfssRelated ? "The historical remediation and federal certification records remain the latest location-specific public outcome linked to this numbered point. The current NECRA materials do not publish a newer result matched to this exact pin." : "NECRA is reassessing the wider region, but its current public materials do not publish a property-level result matched to this exact 1984 point. WNY Atlas therefore preserves the historical finding without assigning a new clearance or contamination status."}</p></section>
    {(record.surfaceMicroRPerHour || record.oneMeterMicroRPerHour || record.scanRangeMicroRPerHour) && <section><h4>Recorded in 1984</h4><dl className="radiological-measurements">{record.oneMeterMicroRPerHour && <><dt>At one meter</dt><dd>{record.oneMeterMicroRPerHour} µR/h</dd></>}{record.surfaceMicroRPerHour && <><dt>At surface</dt><dd>{record.surfaceMicroRPerHour} µR/h</dd></>}{record.scanRangeMicroRPerHour && <><dt>Scan range</dt><dd>{record.scanRangeMicroRPerHour[0]}–{record.scanRangeMicroRPerHour[1]} µR/h</dd></>}</dl><p className="measurement-caution">Historical instrument readings are reproduced for context. They do not establish present-day exposure or conditions.</p></section>}
    <section><h4>Source</h4><a href={historicalSurveySource.url} target="_blank" rel="noreferrer">{historicalSurveySource.label} ↗</a></section>
  </>;
}

function ProducerDetail({ record }: { record: RadiologicalProducer }) {
  return <>
    <p className="record-label">{record.role.replaceAll("-", " ")} · {record.evidence} evidence</p>
    <h3>{record.name}</h3>
    <p className="radiological-location">{record.location}</p>
    <section><h4>Documented role</h4><p>{record.summary}</p></section>
    <section><h4>Source</h4>{record.sourceUrl.startsWith("/") ? <Link href={record.sourceUrl}>{record.sourceLabel} →</Link> : <a href={record.sourceUrl} target="_blank" rel="noreferrer">{record.sourceLabel} ↗</a>}</section>
    {record.relatedSiteId && <Link className="radiological-main-link" href={`/sites/${record.relatedSiteId}`}>Open the full Atlas site record →</Link>}
  </>;
}

function FollowUpDetail({ record }: { record: RadiologicalFollowUp }) {
  return <>
    <p className="record-label">Latest official follow-up · {record.completed}</p>
    <h3>{record.name}</h3>
    <p className="radiological-location">{record.location}</p>
    <div className="radiological-status"><strong>Documented EPA removal record</strong><span>Compared with the 1984–1986 baseline</span></div>
    <section><h4>Latest public status</h4><p>{record.latestStatus}</p></section>
    <section><h4>What can—and cannot—be compared</h4><p>{record.historicalComparison}</p></section>
    <section><h4>Latest source used</h4><a href={record.sourceUrl} target="_blank" rel="noreferrer">{record.sourceLabel} ↗</a></section>
    <Link className="radiological-main-link" href={`/sites/${record.relatedSiteId}`}>Open the full Atlas site record →</Link>
  </>;
}

export function CurrentAssessmentNote() {
  return <section className="radiological-assessment-note"><p className="eyebrow">Forty-year comparison · 1984 baseline to July 2026</p><h2>The regional pattern is being reassessed, but the modern work is not yet a property-by-property replacement for the old survey.</h2><p>NYSDEC and EPA report roughly 380 areas of interest identified through the modern aerial and vehicle work: about 220 cleared without additional testing and about 160 receiving ground surveys. Agencies have not published property-level coordinates and outcomes for every active review. WNY Atlas therefore compares only official, geographically supportable results and never treats an unpublished result as a clearance or a confirmation.</p><div>{currentAssessmentSources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>)}</div></section>;
}

const documentKindLabels: Record<RadiologicalDocument["kind"], string> = {
  survey: "Survey and measurements",
  "audit-review": "Audit, certification, or technical review",
  "cleanup-decision": "Cleanup and administrative record",
  "worker-record": "Worker-exposure record",
  "current-assessment": "Current assessment",
};

export function RadiologicalDocumentArchive() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<RadiologicalDocument["kind"] | "all">("all");
  const [county, setCounty] = useState<"all" | "Erie" | "Niagara">("all");

  const documents = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return radiologicalDocuments.filter((document) => {
      if (kind !== "all" && document.kind !== kind) return false;
      if (county !== "all" && document.geography !== county && document.geography !== "Erie and Niagara") return false;
      return !normalized || `${document.title} ${document.agency} ${document.establishes} ${document.mapConnection}`.toLowerCase().includes(normalized);
    });
  }, [county, kind, query]);

  return (
    <section className="radiological-archive" aria-labelledby="radiological-archive-title">
      <div className="radiological-archive-heading">
        <div>
          <p className="eyebrow">Government record and research archive</p>
          <h2 id="radiological-archive-title">Read the evidence behind the map</h2>
          <p>
            This library includes every government survey, audit, certification,
            cleanup record, and technical worker review currently relied upon by
            this investigation. Draft or ongoing work is labeled as such.
          </p>
        </div>
        <div className="radiological-downloads" aria-label="Download research data">
          <a href="/data/radiological-historical-survey.csv" download>Download 100-location survey CSV ↓</a>
          <a href="/data/radiological-research.json" download>Download complete research JSON ↓</a>
        </div>
      </div>

      <div className="radiological-archive-controls">
        <label><span>Search documents</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Agency, report, facility, or subject" /></label>
        <label><span>Document type</span><select value={kind} onChange={(event) => setKind(event.target.value as RadiologicalDocument["kind"] | "all")}><option value="all">All document types</option>{Object.entries(documentKindLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
        <label><span>County</span><select value={county} onChange={(event) => setCounty(event.target.value as "all" | "Erie" | "Niagara")}><option value="all">Erie + Niagara</option><option value="Erie">Erie County</option><option value="Niagara">Niagara County</option></select></label>
      </div>

      <p className="school-result-count">{documents.length} of {radiologicalDocuments.length} reviewed government records shown</p>
      <div className="radiological-document-list">
        {documents.map((document) => (
          <article key={document.id}>
            <div className="radiological-document-meta">
              <span>{document.year}</span>
              <span>{document.agency}</span>
              <span>{document.geography}</span>
              <span className={`document-status ${document.status}`}>{document.status}</span>
            </div>
            <h3>{document.title}</h3>
            <p className="document-date">{document.date} · {documentKindLabels[document.kind]}</p>
            <details>
              <summary>What this record establishes</summary>
              <p>{document.establishes}</p>
              <p><strong>Map connection:</strong> {document.mapConnection}</p>
            </details>
            <a href={document.url} target="_blank" rel="noreferrer">Open government record ↗</a>
          </article>
        ))}
      </div>
      <p className="radiological-archive-note">
        “All research data” means all records currently used to support this map.
        Government repositories contain additional correspondence and attachments;
        those will be added as they are reviewed and connected to a mapped claim.
      </p>
    </section>
  );
}
