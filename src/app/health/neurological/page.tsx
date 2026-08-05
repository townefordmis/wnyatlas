import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import {
  parkinsonDataset,
  parkinsonSources,
  westernNewYorkParkinsonCounties,
} from "@/data/parkinson-county";

export const metadata: Metadata = {
  title: "Parkinson's County Comparison | Public Health Atlas",
  description:
    "Compare 2023 claims-based Parkinson's disease and parkinsonism prevalence across eight Western New York counties and all 62 New York counties.",
  alternates: { canonical: "/health/neurological" },
  openGraph: {
    type: "article",
    url: "/health/neurological",
    title: "Parkinson's County Comparison | WNYAtlas",
    description:
      "A source-led county comparison of reported Parkinson's disease and parkinsonism prevalence in Western New York.",
  },
};

const number = new Intl.NumberFormat("en-US");

export default function NeurologicalHealthPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "WNYAtlas 2023 Parkinson's Disease and Parkinsonism County Comparison",
    description:
      "Calculated county ranks and statewide comparisons for eight Western New York counties using the NYSDOH All-Payer Database public release.",
    url: "https://www.wnyatlas.com/health/neurological",
    temporalCoverage: "2023",
    spatialCoverage: "Western New York and New York State",
    creator: { "@type": "Organization", name: "WNYAtlas" },
    isBasedOn: parkinsonSources.map((source) => source.url),
  };

  return (
    <main>
      <StructuredData data={datasetSchema} />
      <SiteHeader />

      <section className="health-hero neurological-hero">
        <p className="eyebrow">Public Health Atlas · Neurological conditions</p>
        <h1>How does reported Parkinson&apos;s prevalence compare across New York?</h1>
        <p className="dek">
          The latest public New York dataset supports a county-level comparison.
          It does not support ZIP-code dots, neighborhood clusters, or conclusions
          about why one county&apos;s rate differs from another.
        </p>
        <div className="health-principle is-caution">
          <strong>Rank is context—not a risk verdict.</strong>
          <p>
            These are crude, claims-based prevalence rates among adults included in
            New York&apos;s All-Payer Database. They are not age-adjusted. Differences
            in population age, insurance coverage, access to neurologists, diagnosis,
            and health-care use can affect county placement.
          </p>
        </div>
      </section>

      <section className="cancer-status-strip neurological-status-strip" aria-label="Dataset status">
        <div><span>Reporting year</span><strong>{parkinsonDataset.year}</strong></div>
        <div><span>Geography</span><strong>County of residence</strong></div>
        <div><span>Counties ranked</span><strong>{parkinsonDataset.rankedCountyCount} of 62</strong></div>
        <div><span>Rate type</span><strong>Crude · not age-adjusted</strong></div>
      </section>

      <section className="neurological-story" aria-labelledby="neurological-story-title">
        <div className="health-section-heading">
          <p className="eyebrow">The county story</p>
          <h2 id="neurological-story-title">Several WNY counties sit above the statewide reported rate.</h2>
          <p>
            New York&apos;s 2023 rate was {parkinsonDataset.stateRatePer10k.toFixed(1)}{" "}
            per 10,000 covered adults. Cattaraugus and Genesee placed within the
            10 highest county rates; Niagara ranked 18th and Erie ranked 33rd.
            Placement is ordered from the highest reported prevalence to the lowest.
          </p>
        </div>

        <div className="neurological-county-grid">
          {westernNewYorkParkinsonCounties
            .slice()
            .sort((a, b) => a.rank - b.rank)
            .map((county) => (
              <article className="neurological-county-card" key={county.county}>
                <div className="neurological-card-heading">
                  <div>
                    <span>{county.county} County</span>
                    <strong>{county.ratePer10k.toFixed(1)}</strong>
                    <small>per 10,000 covered adults</small>
                  </div>
                  <b>#{county.rank}<small> of 62</small></b>
                </div>
                <div className="neurological-rate-track" aria-hidden="true">
                  <span style={{ width: `${(county.ratePer10k / 60) * 100}%` }} />
                  <i style={{ left: `${(parkinsonDataset.stateRatePer10k / 60) * 100}%` }} />
                </div>
                <dl>
                  <div><dt>Compared with NYS</dt><dd>+{county.versusStatePercent.toFixed(1)}%</dd></div>
                  <div><dt>County percentile</dt><dd>Higher than {county.higherThanPercent}%</dd></div>
                  <div><dt>Identified members</dt><dd>{number.format(county.cases)}</dd></div>
                  <div><dt>Covered denominator</dt><dd>{number.format(county.coveredAdults)}</dd></div>
                </dl>
              </article>
            ))}
        </div>
        <p className="neurological-track-note">
          The vertical marker on each bar is the New York State rate. “Higher than”
          is the share of the other 61 named counties with a lower reported rate;
          the dataset&apos;s separate “Unknown” residence row is excluded.
        </p>
      </section>

      <section className="neurological-cause-effect" aria-labelledby="neurological-cause-effect-title">
        <div className="health-section-heading">
          <p className="eyebrow">Cause and effect</p>
          <h2 id="neurological-cause-effect-title">What could shape this pattern—and what the data cannot prove</h2>
          <p>
            Parkinson&apos;s disease usually cannot be traced to one cause. The most
            responsible reading separates established risk context, environmental
            associations, and the limits of this county comparison.
          </p>
        </div>

        <div className="neurological-evidence-grid">
          <article>
            <span>01 · Established context</span>
            <h3>Age, biology, and family history matter.</h3>
            <p>
              Risk rises with age, and genes can contribute. For most people,
              however, no single inherited change or exposure explains the disease.
            </p>
          </article>
          <article>
            <span>02 · Environmental evidence</span>
            <h3>Some exposures are associated with higher risk.</h3>
            <p>
              NIH and NYSDOH identify associations involving certain pesticides,
              herbicides, and other pollutants or toxins. An association is a signal
              for investigation—not proof that a particular place caused illness.
            </p>
          </article>
          <article>
            <span>03 · This county comparison</span>
            <h3>The ranking cannot connect exposure to diagnosis.</h3>
            <p>
              These records do not include a person&apos;s lifetime addresses,
              occupations, measured exposures, or disease latency, and the public
              county rates are not age-adjusted.
            </p>
          </article>
        </div>

        <div className="neurological-causal-test">
          <strong>What a stronger cause-and-effect investigation would need</strong>
          <p>
            Age-adjusted individual-level data, consistent case definitions,
            residential and occupational histories, measured exposure pathways,
            sufficient latency, comparison populations, confounder control, and
            results that can be replicated.
          </p>
        </div>
      </section>

      <section className="neurological-table-section" aria-labelledby="neurological-table-title">
        <div className="health-section-heading">
          <p className="eyebrow">Audit table</p>
          <h2 id="neurological-table-title">The numbers behind the placement</h2>
        </div>
        <div className="neurological-table-wrap">
          <table>
            <thead>
              <tr>
                <th>County</th><th>Rate / 10,000</th><th>Rank</th><th>Higher than</th><th>Vs. NYS</th><th>Cases</th><th>Covered adults</th>
              </tr>
            </thead>
            <tbody>
              {westernNewYorkParkinsonCounties
                .slice()
                .sort((a, b) => a.county.localeCompare(b.county))
                .map((county) => (
                  <tr key={county.county}>
                    <th>{county.county}</th>
                    <td>{county.ratePer10k.toFixed(1)}</td>
                    <td>{county.rank} of 62</td>
                    <td>{county.higherThanPercent}% of counties</td>
                    <td>+{county.versusStatePercent.toFixed(1)}%</td>
                    <td>{number.format(county.cases)}</td>
                    <td>{number.format(county.coveredAdults)}</td>
                  </tr>
                ))}
              <tr className="is-state-row">
                <th>New York State</th>
                <td>{parkinsonDataset.stateRatePer10k.toFixed(1)}</td>
                <td>Reference</td><td>—</td><td>—</td>
                <td>{number.format(parkinsonDataset.stateCases)}</td>
                <td>{number.format(parkinsonDataset.stateCoveredAdults)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="health-limitations neurological-limitations">
        <div className="health-section-heading">
          <p className="eyebrow">How to read this</p>
          <h2>What this comparison does—and does not—measure</h2>
        </div>
        <div>
          <article><h3>Not age-adjusted</h3><p>Parkinson&apos;s prevalence rises sharply with age. A county with an older covered population may rank higher even if age-specific rates are similar.</p></article>
          <article><h3>Not every resident</h3><p>The APD omits uninsured residents, certain federal programs, and some self-funded plans. Its denominator is covered members meeting the dataset rules—not the Census population.</p></article>
          <article><h3>Claims identify care</h3><p>A person must have qualifying diagnosis claims. Differences in access, diagnostic practice, and insurance continuity can affect who appears in the data.</p></article>
          <article><h3>Not an exposure analysis</h3><p>A county rank cannot show that an environmental site, pesticide, occupation, or other exposure caused any individual diagnosis.</p></article>
          <article><h3>No ZIP inference</h3><p>The state publishes this measure by county. WNYAtlas will not manufacture ZIP-level points or shaded neighborhoods from a county average.</p></article>
          <article><h3>No comparable MS series</h3><p>CDC&apos;s current public MS surveillance is national and broad-regional. MS is therefore discussed as a data gap, not ranked by New York county.</p></article>
        </div>
      </section>

      <section className="health-sources neurological-sources" id="sources">
        <div className="health-section-heading">
          <p className="eyebrow">Source ledger</p>
          <h2>Official records and visible calculations</h2>
        </div>
        <div>
          {parkinsonSources.map((source, index) => (
            <article key={source.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{source.title}</h3><p>{source.agency}</p></div>
              <p>{source.coverage}</p><p>{source.updated}</p>
              <a href={source.url} target="_blank" rel="noreferrer">Open source ↗</a>
            </article>
          ))}
        </div>
        <p className="health-access-note">
          Page prepared August 5, 2026. Rank 1 is the highest crude county rate.
          Percent difference is calculated as (county rate ÷ state rate − 1) × 100.
          Values shown to one decimal may differ slightly from calculations performed
          using the source dataset&apos;s full precision.
        </p>
        <Link className="health-back-link" href="/health">Return to the Public Health Atlas →</Link>
      </section>
    </main>
  );
}
