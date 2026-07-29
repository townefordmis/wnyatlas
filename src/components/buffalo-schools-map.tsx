"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import type { Map as MapLibreMap, Marker } from "maplibre-gl";

import {
  buffaloSchoolCampuses,
  consolidateNearbyCleanupStories,
  documentedCampusHistory,
  existingAtlasSiteByCleanupCode,
  relationshipLabels,
  type BuffaloSchoolCampus,
} from "@/data/buffalo-school-research";

const buffaloCenter: [number, number] = [-78.855, 42.89];

function campusLabel(campus: BuffaloSchoolCampus) {
  return campus.schools.map((school) => school.name).join(" / ");
}

function uniqueStoryProjects(
  records: ReturnType<typeof consolidateNearbyCleanupStories>[number]["records"],
) {
  const projects = new Map<string, { name: string; date: string }>();
  records.forEach((record) =>
    record.projects.forEach((project) =>
      projects.set(`${project.name}|${project.date}`, project),
    ),
  );
  return Array.from(projects.values()).sort((a, b) =>
    `${a.date}-${a.name}`.localeCompare(`${b.date}-${b.name}`),
  );
}

function uniqueStoryContaminants(
  records: ReturnType<typeof consolidateNearbyCleanupStories>[number]["records"],
) {
  return Array.from(
    new Set(records.flatMap((record) => record.contaminants)),
  ).sort();
}

export function BuffaloSchoolsMap() {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const markers = useRef<Map<string, Marker>>(new Map());
  const [selected, setSelected] = useState<BuffaloSchoolCampus>(
    buffaloSchoolCampuses[0],
  );
  const [query, setQuery] = useState("");
  const [relationship, setRelationship] = useState("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return buffaloSchoolCampuses.filter((campus) => {
      const text = `${campusLabel(campus)} ${campus.address}`.toLowerCase();
      const matchesText = !normalized || text.includes(normalized);
      const relationships = campus.nearbyRemediationSites.map(
        (site) => site.relationship,
      );
      const matchesRelationship =
        relationship === "all" ||
        (relationship === "none"
          ? relationships.length === 0
          : relationships.includes(
              relationship as (typeof relationships)[number],
            ));
      return matchesText && matchesRelationship;
    });
  }, [query, relationship]);

  useEffect(() => {
    if (!container.current || map.current) return;
    const instance = new maplibregl.Map({
      container: container.current,
      center: buffaloCenter,
      zoom: 10.7,
      minZoom: 9,
      maxZoom: 17,
      attributionControl: false,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution:
              '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
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
    buffaloSchoolCampuses.forEach((campus) => {
      const color =
        campus.researchStatus === "documented_same_site"
          ? "#9e4b32"
          : campus.nearbyRemediationSites.length
            ? "#35637a"
            : "#405a4b";
      const marker = new maplibregl.Marker({
        color,
        scale: 0.62,
        subpixelPositioning: true,
      })
        .setLngLat(campus.coordinates)
        .addTo(instance);
      marker.getElement().classList.add("school-native-marker");
      marker.getElement().setAttribute("aria-label", `Open ${campusLabel(campus)}`);
      marker.getElement().addEventListener("click", () => setSelected(campus));
      markerStore.set(campus.id, marker);
    });

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
    const visible = new Set(filtered.map((campus) => campus.id));
    markers.current.forEach((marker, id) => {
      marker.getElement().style.display = visible.has(id) ? "" : "none";
      marker
        .getElement()
        .classList.toggle("is-selected", id === selected.id);
    });
  }, [filtered, selected.id]);

  function chooseCampus(campus: BuffaloSchoolCampus) {
    setSelected(campus);
    map.current?.flyTo({ center: campus.coordinates, zoom: 14, essential: false });
  }

  const history = documentedCampusHistory[selected.address];
  const nearbyStories = consolidateNearbyCleanupStories(
    selected.nearbyRemediationSites,
  );

  return (
    <section className="school-map-shell" aria-labelledby="school-map-title">
      <div className="school-map-toolbar">
        <div>
          <p className="eyebrow">
            3 physical campuses · 4 institutions · verified property relationships
          </p>
          <h2 id="school-map-title">Schools on or directly beside cleanup properties</h2>
        </div>
        <div className="school-map-legend" aria-label="Map legend">
          <span><i className="legend-same" /> Documented campus relationship</span>
        </div>
      </div>

      <div className="school-map-grid">
        <div className="school-map-canvas" ref={container} />

        <aside className="school-map-list" aria-label="School campuses">
          <label>
            <span>Find a campus</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="School or street"
            />
          </label>
          <label>
            <span>Documented map relationship</span>
            <select
              value={relationship}
              onChange={(event) => setRelationship(event.target.value)}
            >
              <option value="all">All verified campuses</option>
              <option value="documented_campus_property">Part of cleanup property</option>
              <option value="documented_directly_adjacent">Directly adjacent</option>
            </select>
          </label>
          <p className="school-result-count">{filtered.length} campuses shown</p>
          <div className="school-campus-options">
            {filtered.map((campus) => (
              <button
                type="button"
                key={campus.id}
                className={campus.id === selected.id ? "is-active" : ""}
                onClick={() => chooseCampus(campus)}
              >
                <strong>{campusLabel(campus)}</strong>
                <span>{campus.address}</span>
              </button>
            ))}
          </div>
        </aside>

        <article className="school-record">
          <p className="record-label">Campus record</p>
          <h3>{campusLabel(selected)}</h3>
          <p>{selected.address}, Buffalo, NY {selected.zip}</p>

          {history ? (
            <section>
              <h4>{history.heading}</h4>
              <ul>{history.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
              <p>{history.completion}</p>
              <a href={history.sourceUrl} target="_blank" rel="noreferrer">
                {history.sourceLabel} ↗
              </a>
            </section>
          ) : (
            <section>
              <h4>Previous use of this property</h4>
              <p>
                On-property historical use has not yet been reviewed for this
                campus. This does not mean that no earlier use existed.
              </p>
            </section>
          )}

          <section>
            <h4>Documented campus and cleanup-property relationship</h4>
            {nearbyStories.length ? (
              <ul className="nearby-records">
                {nearbyStories.map((story) => (
                  <li key={story.id}>
                    <strong>{story.title}</strong>
                    <span>
                      Supporting DEC records:{" "}
                      {story.sites.map((site) => site.siteCode).join(" · ")}
                    </span>
                    <span>{relationshipLabels[story.relationship]}</span>
                    {(() => {
                      const projects = uniqueStoryProjects(story.records);
                      const contaminants = uniqueStoryContaminants(story.records);
                      const availableDocuments = [
                        story.records.some(
                          (record) => record.hasCertificateOfCompletion,
                        ) && "Certificate of Completion",
                        story.records.some(
                          (record) => record.hasFinalEngineeringReport,
                        ) && "Final Engineering Report",
                        story.records.some(
                          (record) => record.hasSiteManagementPlan,
                        ) && "Site Management Plan",
                        story.records.some(
                          (record) => record.hasPeriodicReview,
                        ) && "Periodic Review",
                      ].filter(Boolean);
                      return (
                        <details>
                          <summary>Official cleanup history</summary>
                          {story.records.some(
                            (record) => record.openDataStatus === "matched",
                          ) ? (
                            <>
                              {projects.length > 0 && (
                                <div>
                                  <b>Recorded project milestones</b>
                                  <ul>
                                    {projects.map((project) => (
                                      <li key={`${project.name}-${project.date}`}>
                                        {project.name || "Project record"}
                                        {project.date ? ` — ${project.date}` : ""}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {contaminants.length > 0 && (
                                <p>
                                  <b>Contaminants listed in the state dataset:</b>{" "}
                                  {contaminants.join(", ")}.
                                </p>
                              )}
                              <p>
                                <b>Documented records available:</b>{" "}
                                {availableDocuments.join(", ") ||
                                  "See the DEC document collections"}.
                              </p>
                            </>
                          ) : (
                            <p>
                              This site was not matched in the state open-data
                              export. Its DEC map record remains linked for review.
                            </p>
                          )}
                          <p className="record-boundary-note">
                            These are agency database entries. Listing a
                            contaminant or milestone does not describe a school
                            exposure pathway or current school condition.
                          </p>
                        </details>
                      );
                    })()}
                    <span className="nearby-record-links">
                      {Array.from(
                        new Set(
                          story.sites
                            .map(
                              (site) =>
                                existingAtlasSiteByCleanupCode[site.siteCode],
                            )
                            .filter(Boolean),
                        ),
                      ).map((atlasId) => (
                        <a key={atlasId} href={`/sites/${atlasId}`}>
                          Full Atlas history →
                        </a>
                      ))}
                      {story.sites.map((site) => (
                        <a
                          key={site.siteCode}
                          href={site.detailUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          DEC {site.siteCode} ↗
                        </a>
                      ))}
                      {story.records
                        .filter((record) => record.decDocumentIndex)
                        .map((record) => (
                          <a
                            key={`${record.siteCode}-documents`}
                            href={record.decDocumentIndex}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Documents {record.siteCode} ↗
                          </a>
                        ))}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                The screening found no mapped DEC remediation-site boundary
                within 1,000 feet. This statement is limited to that dataset and
                search distance.
              </p>
            )}
          </section>
        </article>
      </div>
    </section>
  );
}
