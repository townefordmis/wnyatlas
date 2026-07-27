"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { featuredSites } from "@/data/featured-sites";

const INITIAL_SITE_COUNT = 12;

const evidenceLabels = {
  "well-documented": "Documented",
  "research-in-progress": "Research in progress",
  "research-lead": "Research lead",
};

export function SiteDirectory() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleSites = isExpanded
    ? featuredSites
    : featuredSites.slice(0, INITIAL_SITE_COUNT);

  return (
    <section className="featured" id="sites">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Starting collection</p>
          <h2>{featuredSites.length} anchor places</h2>
        </div>
        <p>
          Each place record connects its background, chronology, environmental
          record, cleanup status, and primary sources.
        </p>
      </div>

      <div className="site-list">
        {visibleSites.map((site, index) => (
          <article key={site.id}>
            <span className="site-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            {site.image && (
              <Link className="site-thumbnail" href={`/sites/${site.id}`}>
                <Image
                  src={site.image.src}
                  alt={site.image.alt}
                  width={236}
                  height={156}
                />
              </Link>
            )}
            <div>
              <p className="site-meta">
                {site.category} · {site.county} County
              </p>
              <h3>
                <Link href={`/sites/${site.id}`}>{site.name}</Link>
              </h3>
              <p>{site.summary}</p>
              {site.atomicLegacy && (
                <p className="site-meta">
                  {site.atomicLegacy.era} · {site.atomicLegacy.role}
                </p>
              )}
            </div>
            <div className="site-actions">
              <span className="evidence-pill">
                {evidenceLabels[site.evidenceStatus]}
              </span>
              <Link href={`/sites/${site.id}`}>Read the story →</Link>
            </div>
          </article>
        ))}
      </div>

      <div className="directory-toggle">
        <p>
          Showing {visibleSites.length} of {featuredSites.length} places
        </p>
        <button type="button" onClick={() => setIsExpanded((value) => !value)}>
          {isExpanded
            ? "Show fewer places"
            : `View all ${featuredSites.length} places`}
        </button>
      </div>
    </section>
  );
}
