import type { Metadata } from "next";
import Link from "next/link";

import { CancerComparison } from "@/components/cancer-comparison";
import { PublicHealthMap } from "@/components/public-health-map";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { publicHealthSources } from "@/data/public-health-cancer";

export const metadata: Metadata = {
  title: "Cancer Data | Public Health Atlas",
  description:
    "Compare official cancer incidence, mortality, and historical trends for Erie and Niagara Counties with New York and United States reference rates.",
  alternates: { canonical: "/health/cancer" },
  openGraph: {
    type: "article",
    url: "/health/cancer",
    title: "Cancer Data | WNYAtlas Public Health Atlas",
    description:
      "A source-led comparison of cancer rates and trends in Erie and Niagara Counties, with state and national context.",
  },
};

export default function CancerAtlasPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "WNYAtlas Erie and Niagara County Cancer Comparison",
    description:
      "A presentation of official age-adjusted cancer rates from the New York State Department of Health and NCI State Cancer Profiles.",
    url: "https://www.wnyatlas.com/health/cancer",
    spatialCoverage: ["Erie County, New York", "Niagara County, New York"],
    temporalCoverage: "2011/2023",
    creator: { "@type": "Organization", name: "WNYAtlas" },
    isBasedOn: publicHealthSources.map((source) => source.url),
  };

  return (
    <main>
      <StructuredData data={datasetSchema} />
      <SiteHeader />

      <section className="health-hero cancer-hero">
        <p className="eyebrow">Public Health Atlas · Cancer</p>
        <h1>What do the official cancer records show?</h1>
        <p className="dek">
          Compare age-adjusted incidence and mortality rates for Erie and Niagara
          Counties, follow historical patterns, and open the original government
          records behind every number.
        </p>
        <div className="health-principle is-caution">
          <strong>This page does not establish environmental causation.</strong>
          <p>
            Cancer patterns reflect many factors, including age, tobacco and alcohol
            use, infections, genetics, occupation, screening, access to care, and
            environmental exposures. A rate difference or nearby site is a starting
            point for careful research—not proof of cause.
          </p>
        </div>
      </section>

      <section className="cancer-status-strip" aria-label="Dataset status">
        <div><span>County geography</span><strong>Erie + Niagara</strong></div>
        <div><span>Rate standard</span><strong>2000 U.S. population</strong></div>
        <div><span>County comparison</span><strong>2018–2020</strong></div>
        <div><span>Latest registry portal</span><strong>Through 2023</strong></div>
      </section>

      <section className="public-health-map-section" aria-labelledby="health-map-title">
        <div className="health-section-heading">
          <p className="eyebrow">Shared public-health map</p>
          <h2 id="health-map-title">Local data only on the map.</h2>
          <p>
            Switch among cancer, birth defects, childhood asthma emergency visits,
            premature birth, low birth weight, childhood lead, and public
            drinking-water systems. ZIP code, city, public-system area, or a
            smaller official geography is required for a map marker. County and
            state figures remain available for comparison, but are not shown as
            local points. The Atlas never combines these measures into a single
            health or environmental risk score.
          </p>
        </div>
        <PublicHealthMap />
      </section>

      <section className="cancer-explorer-shell" aria-labelledby="comparison-title">
        <div className="health-section-heading">
          <p className="eyebrow">Community comparison</p>
          <h2 id="comparison-title">Rates are comparable only when their definitions travel with them.</h2>
          <p>
            County figures below come from a fixed NYSDOH public-data extract so
            this first release can be reproduced. New York and U.S. references use
            the current NCI/CDC periods; differing years are labeled rather than
            silently mixed.
          </p>
        </div>
        <CancerComparison />
      </section>

      <section className="health-context-section">
        <div className="health-section-heading">
          <p className="eyebrow">Environmental context</p>
          <h2>Open the record layers separately.</h2>
          <p>
            These maps document places, materials, cleanups, and landscape change.
            They are linked for investigation, not drawn as causal overlays on the
            county health rates in this first release.
          </p>
        </div>
        <div className="health-context-links">
          <Link href="/#map"><strong>Main environmental map</strong><span>Industry, landfills, cleanup sites, PFAS, and documented waste locations →</span></Link>
          <Link href="/research/radiological-industry-fill"><strong>Radiological legacy</strong><span>FUSRAP, LOOW, Linde, uranium-processing history, and survey records →</span></Link>
          <Link href="/research/former-waterways"><strong>Changed waterways and fill</strong><span>Filled wetlands, altered channels, reclaimed shoreline, and historic aerial evidence →</span></Link>
          <Link href="/risks/airborne-exposure"><strong>Documented airborne risks</strong><span>Officially documented plumes, dates, limits, and source records →</span></Link>
        </div>
      </section>

      <section className="health-limitations">
        <div className="health-section-heading">
          <p className="eyebrow">Read before comparing</p>
          <h2>What these numbers can—and cannot—tell us</h2>
        </div>
        <div>
          <article><h3>Residence, not lifetime exposure</h3><p>County registry data generally describe residence at diagnosis. They do not reconstruct where a person lived or worked throughout life.</p></article>
          <article><h3>County averages hide local variation</h3><p>A county rate does not describe every neighborhood. Smaller-area releases also require privacy protection and careful stability review.</p></article>
          <article><h3>Age adjustment is not full adjustment</h3><p>Age-adjusted rates help compare populations with different age structures, but do not control for every demographic, behavioral, occupational, or clinical factor.</p></article>
          <article><h3>Periods must match</h3><p>The county extract and current state/national references cover different years. They provide context, but should not be treated as a formal statistical test.</p></article>
          <article><h3>2020 is unusual</h3><p>The pandemic disrupted screening and diagnosis. A drop in recorded incidence may reflect delayed detection rather than an immediate change in underlying disease.</p></article>
          <article><h3>Counts are not people at risk</h3><p>Event counts show diagnoses or deaths recorded during a period. Rates use population denominators and are the appropriate starting point for geographic comparison.</p></article>
        </div>
      </section>

      <section className="health-sources" id="sources">
        <div className="health-section-heading">
          <p className="eyebrow">Source ledger</p>
          <h2>Trace every number to the custodian.</h2>
        </div>
        <div>
          {publicHealthSources.map((source, index) => (
            <article key={source.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{source.title}</h3><p>{source.agency}</p></div>
              <p>{source.coverage}</p>
              <p>{source.updated}</p>
              <a href={source.url} target="_blank" rel="noreferrer">Open official source ↗</a>
            </article>
          ))}
        </div>
        <p className="health-access-note">Page prepared August 5, 2026. The Atlas will retain period-specific extracts so later updates can be audited rather than silently replacing earlier figures.</p>
        <Link className="health-back-link" href="/health">Return to the Public Health Atlas →</Link>
      </section>
    </main>
  );
}
