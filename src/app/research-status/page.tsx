import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { deepHistoryFeatures } from "@/data/deep-history-features";
import { featuredSites } from "@/data/featured-sites";
import { siteImages } from "@/data/site-images";
import type { AtlasSite } from "@/types/site";

export const metadata: Metadata = {
  title: "Research Status & Coverage",
  description:
    "See the current geographic coverage, evidence stages, source checks, and known research gaps in WNYAtlas.",
  alternates: { canonical: "/research-status" },
};

const counties: AtlasSite["county"][] = [
  "Erie",
  "Niagara",
  "Chautauqua",
  "Cattaraugus",
  "Genesee",
  "Orleans",
  "Allegany",
  "Wyoming",
];

const categoryNames: Record<AtlasSite["category"], string> = {
  cleanup: "Cleanup and brownfield",
  industry: "Historic industry",
  radiological: "Radiological",
  waterway: "Changed waterway",
  pfas: "PFAS-focused",
};

export default function ResearchStatusPage() {
  const countyCounts = Object.fromEntries(
    counties.map((county) => [
      county,
      featuredSites.filter((site) => site.county === county).length,
    ]),
  );
  const categoryCounts = Object.entries(categoryNames).map(([category, label]) => ({
    category,
    label,
    count: featuredSites.filter((site) => site.category === category).length,
  }));
  const documented = featuredSites.filter(
    (site) => site.evidenceStatus === "well-documented",
  ).length;
  const activeResearch = featuredSites.length - documented;
  const pfasRecords = featuredSites.filter(
    (site) => site.category === "pfas" || site.pfasStatus,
  ).length;

  return (
    <main className="research-status-page">
      <SiteHeader />
      <header className="research-status-hero">
        <p className="eyebrow">Living research record · reviewed August 12, 2026</p>
        <h1>What is covered—and what still needs work</h1>
        <p>
          WNYAtlas publishes documented records in stages. A place appearing here does
          not establish exposure or harm, and a place being absent does not establish
          that no relevant history exists.
        </p>
      </header>

      <section className="research-status-summary" aria-label="Collection summary">
        <article><strong>{featuredSites.length}</strong><span>place records</span></article>
        <article><strong>{documented}</strong><span>well-documented records</span></article>
        <article><strong>{activeResearch}</strong><span>records still being strengthened</span></article>
        <article><strong>{Object.keys(deepHistoryFeatures).length}</strong><span>expanded history features</span></article>
        <article><strong>{Object.keys(siteImages).length}</strong><span>rights-reviewed lead images</span></article>
        <article><strong>{pfasRecords}</strong><span>PFAS-tagged records</span></article>
      </section>

      <section className="research-status-section">
        <div>
          <p className="eyebrow">Geographic coverage</p>
          <h2>Six counties currently have environmental place records.</h2>
          <p>
            Health reporting uses the eight-county Western New York region. The
            environmental collection has not yet identified publishable place records
            in Allegany or Wyoming counties. Those zeroes describe Atlas coverage—not
            environmental conditions in those counties.
          </p>
        </div>
        <div className="research-coverage-grid">
          {counties.map((county) => (
            <article className={countyCounts[county] === 0 ? "is-gap" : ""} key={county}>
              <span>{county} County</span>
              <strong>{countyCounts[county]}</strong>
              <small>{countyCounts[county] === 0 ? "research gap" : "published places"}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="research-status-section is-dark">
        <div>
          <p className="eyebrow">Collection balance</p>
          <h2>What kinds of places are represented</h2>
          <p>
            Category totals describe the page’s primary classification. A cleanup site
            may also carry a PFAS or radiological tag when the source record supports it.
          </p>
        </div>
        <div className="research-category-list">
          {categoryCounts.map((item) => (
            <div key={item.category}>
              <span>{item.label}</span>
              <strong>{item.count}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="research-status-section">
        <div>
          <p className="eyebrow">Quality checks</p>
          <h2>What was checked in this review</h2>
        </div>
        <ul className="research-check-list">
          <li><strong>175 coordinates:</strong> no duplicate or out-of-region coordinate problems found.</li>
          <li><strong>120 DEC-linked places:</strong> no differences greater than 250 meters from official DEC coordinates.</li>
          <li><strong>55 other places:</strong> require non-DEC or manual authority checks because no matching DEC site coordinate governs them.</li>
          <li><strong>175 histories:</strong> every place has a story and at least two sources under the current depth audit.</li>
          <li><strong>School records:</strong> unavailable DEC document directories are withheld from public links; one American Brass collection was recovered under DEC record V00314.</li>
        </ul>
      </section>

      <section className="research-status-section research-next-work">
        <div>
          <p className="eyebrow">Next research priorities</p>
          <h2>Known gaps are kept visible.</h2>
        </div>
        <ol>
          <li><strong>Allegany and Wyoming counties:</strong> screen official cleanup, landfill, industrial, radiological, and PFAS records before adding any place.</li>
          <li><strong>Airborne events:</strong> add only government-defined monitoring areas or documented event records; do not invent plume boundaries.</li>
          <li><strong>Source maintenance:</strong> recheck moved or unavailable government document collections and preserve the last review date.</li>
          <li><strong>Visual history:</strong> add aerial comparisons only where imagery dates, rights, alignment limits, and interpretation can be explained.</li>
        </ol>
        <div className="research-status-actions">
          <Link href="/places">Browse all places</Link>
          <Link href="/#map">Return to the regional map</Link>
        </div>
      </section>
    </main>
  );
}
