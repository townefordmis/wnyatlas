import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import {
  healthTopics,
  healthCountyRecords,
  indicatorLabel,
  rankForRecord,
  wnyCountyNames,
  wnyRecords,
} from "@/data/health-platform";

export const metadata: Metadata = {
  title: "Public Health Atlas",
  description: "Compare traceable public-health statistics across eight Western New York counties, all New York counties, and supported local geographies.",
  alternates: { canonical: "/health" },
};

const flagshipModules = [
  { title: "Cancer", status: "Flagship investigation", description: "Incidence, mortality, cancer types, historical trends, small-area context, and official investigations.", href: "/health/cancer", color: "#b65031" },
  { title: "Neurological conditions", status: "County comparison", description: "Parkinson's and parkinsonism prevalence, statewide rank, cases, covered population, and limitations.", href: "/health/neurological", color: "#65528b" },
];

export default function PublicHealthAtlasPage() {
  const uniqueIndicators = new Set(healthTopics.flatMap((topic) => topic.indicatorIds));
  const leadIndicator = "total-mortality";
  const regionalMortality = wnyRecords(leadIndicator)
    .filter((record) => record.value !== null)
    .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
  const highestMortality = regionalMortality[0];
  const topTenPlacements = Array.from(uniqueIndicators).reduce((total, indicatorId) => {
    return total + wnyRecords(indicatorId).filter((record) => {
      const rank = rankForRecord(record);
      return rank && rank.rank <= 10;
    }).length;
  }, 0);

  return (
    <main>
      <SiteHeader />
      <section className="health-hero health-platform-hero">
        <p className="eyebrow">WNYAtlas · Public Health Atlas</p>
        <h1>Western New York health, county by county and source by source.</h1>
        <p className="dek">Explore official health measures across eight Western New York counties, compare them with every New York county that has a published value, and move into ZIP or water-system detail only when the source supports it.</p>
        <div className="health-hero-actions">
          <Link href="/health/explorer">Open the Health Explorer →</Link>
          <Link href="/health/county/erie">Browse county profiles →</Link>
        </div>
        <div className="health-principle">
          <strong>Evidence before interpretation</strong>
          <p>Environmental history and health statistics are separate evidence streams. Proximity, rank, or correlation does not prove that a site caused a health outcome.</p>
        </div>
      </section>

      <section className="health-overview-strip" aria-label="Public Health Atlas coverage">
        <div><span>WNY counties</span><strong>8</strong></div>
        <div><span>Standardized indicators</span><strong>{uniqueIndicators.size}</strong></div>
        <div><span>County-indicator records</span><strong>{healthCountyRecords.length.toLocaleString()}</strong></div>
        <div><span>Top-ten NY placements</span><strong>{topTenPlacements}</strong></div>
        <div><span>Latest Atlas refresh</span><strong>Aug. 2026</strong></div>
      </section>

      <section className="health-finding-band">
        <div>
          <p className="eyebrow">Start with a finding</p>
          <h2>{highestMortality?.county ?? "WNY"} has the highest reported WNY value for {indicatorLabel(leadIndicator).toLowerCase()} in the current standardized release.</h2>
          <p>This is a navigation finding—not a causal conclusion. Open the measure to see the exact period, statewide placement, events, denominator, and source.</p>
        </div>
        <Link href={`/health/mortality?indicator=${leadIndicator}&county=${highestMortality?.county ?? "Erie"}#explorer`}>Inspect the comparison →</Link>
      </section>

      <section className="health-county-directory" aria-labelledby="county-directory-title">
        <div className="health-section-heading"><p className="eyebrow">Geography first</p><h2 id="county-directory-title">Choose a Western New York county</h2><p>Each profile gathers the supported measures in one place without combining them into an overall score.</p></div>
        <div>{wnyCountyNames.map((county, index) => <Link href={`/health/county/${county.toLowerCase()}`} key={county}><span>{String(index + 1).padStart(2, "0")}</span><strong>{county}</strong><small>County profile →</small></Link>)}</div>
      </section>

      <section className="health-module-grid health-platform-modules" aria-labelledby="health-modules-title">
        <div className="health-section-heading"><p className="eyebrow">Dedicated data pages</p><h2 id="health-modules-title">One topic, one explorer, visible limitations.</h2><p>The first complete release includes strong and weak datasets so their usefulness can be judged openly.</p></div>
        <div>
          {flagshipModules.map((module, index) => (
            <Link className="health-module is-live" href={module.href} key={module.title} style={{ "--module-color": module.color } as React.CSSProperties}>
              <span>{String(index + 1).padStart(2, "0")}</span><p>{module.status}</p><h3>{module.title}</h3><small>{module.description}</small><strong className="health-module-action">Open dedicated page →</strong>
            </Link>
          ))}
          {healthTopics.map((topic, index) => (
            <Link className={`health-module is-available ${topic.indicatorIds.length ? "" : "is-review"}`} href={`/health/${topic.slug}`} key={topic.slug} style={{ "--module-color": topic.color } as React.CSSProperties}>
              <span>{String(index + 3).padStart(2, "0")}</span><p>{topic.indicatorIds.length ? `${topic.indicatorIds.length} county indicators` : "Limited-data review"}</p><h3>{topic.shortTitle}</h3><small>{topic.description}</small><strong className="health-module-action">Open dedicated page →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="health-method-summary">
        <p className="eyebrow">Platform rules</p><h2>Comparable geography, comparable definitions, visible uncertainty.</h2>
        <div>
          <article><strong>1</strong><h3>Use official records</h3><p>State registries, NYSDOH, CDC, NCI, EPA, USGS, Census, and other government custodians come first.</p></article>
          <article><strong>2</strong><h3>Rank only reported values</h3><p>Suppressed or unavailable counties receive no rank. Every placement states its actual denominator.</p></article>
          <article><strong>3</strong><h3>Keep periods attached</h3><p>The Atlas does not silently compare mismatched periods or merge provisional and final data.</p></article>
          <article><strong>4</strong><h3>No overall health score</h3><p>Unlike measures remain separate so one convenient number cannot hide uncertainty or imply unsupported causation.</p></article>
        </div>
      </section>
    </main>
  );
}
