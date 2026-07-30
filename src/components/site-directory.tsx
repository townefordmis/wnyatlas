"use client";

import Link from "next/link";
import { useState } from "react";

import { featuredSites } from "@/data/featured-sites";

const INITIAL_SITE_COUNT = 8;

const categoryLabels = {
  cleanup: "Cleanup & brownfield",
  industry: "Historic industry",
  radiological: "Radiological",
  waterway: "Waterway",
  pfas: "PFAS",
};

export function SiteDirectory() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [county, setCounty] = useState("all");
  const [category, setCategory] = useState("all");

  const counties = [...new Set(featuredSites.map((site) => site.county))].sort();
  const normalizedQuery = query.trim().toLowerCase();
  const filteredSites = featuredSites.filter((site) => {
    const matchesQuery =
      !normalizedQuery ||
      [
        site.name,
        site.municipality,
        site.county,
        site.category,
        categoryLabels[site.category],
        site.summary,
      ].some((value) => value.toLowerCase().includes(normalizedQuery));
    const matchesCounty = county === "all" || site.county === county;
    const matchesCategory =
      category === "all" ||
      site.category === category ||
      (category === "pfas" && Boolean(site.pfasStatus));

    return matchesQuery && matchesCounty && matchesCategory;
  });
  const isFiltering =
    normalizedQuery.length > 0 || county !== "all" || category !== "all";
  const visibleSites =
    isExpanded || isFiltering
      ? filteredSites
      : filteredSites.slice(0, INITIAL_SITE_COUNT);

  return (
    <section className="featured" id="sites">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Documented collection</p>
          <h2>Explore places</h2>
        </div>
        <p>
          Search {featuredSites.length} researched places by name, community,
          county, or environmental history.
        </p>
      </div>

      <div className="directory-search" role="search" aria-label="Search places">
        <label className="directory-query">
          <span>Find a place</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Site, city, county, or topic"
          />
        </label>
        <label>
          <span>County</span>
          <select
            value={county}
            onChange={(event) => setCounty(event.target.value)}
          >
            <option value="all">All counties</option>
            {counties.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Type</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="all">All types</option>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="directory-results" aria-live="polite">
        {visibleSites.map((site, index) => (
          <article key={site.id} className="directory-place">
            <Link href={`/sites/${site.id}`}>
              <span className="site-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <h3>{site.name}</h3>
                <p>
                  {site.municipality} · {site.county} County
                </p>
              </span>
              <p className="site-meta">{categoryLabels[site.category]}</p>
              <span className="directory-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </article>
        ))}
        {filteredSites.length === 0 && (
          <div className="directory-empty">
            <h3>No matching places</h3>
            <p>Try a different spelling or clear one of the filters.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCounty("all");
                setCategory("all");
              }}
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {filteredSites.length > 0 && (
        <div className="directory-toggle">
          <p>
            Showing {visibleSites.length} of {filteredSites.length} places
          </p>
          <div className="directory-toggle-actions">
            <Link href="/places">Complete A–Z index</Link>
            {!isFiltering && filteredSites.length > INITIAL_SITE_COUNT && (
              <button
                type="button"
                onClick={() => setIsExpanded((value) => !value)}
              >
                {isExpanded ? "Show fewer places" : "View all places"}
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
