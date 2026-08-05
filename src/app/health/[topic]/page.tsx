import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BirthDefectsEvidence } from "@/components/birth-defects-evidence";
import { HealthTopicExplorer } from "@/components/health-topic-explorer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { healthCountyRecords, healthPlatformSources, healthTopicBySlug, healthTopics, healthTrendRecords } from "@/data/health-platform";

type Props = {
  params: Promise<{ topic: string }>;
  searchParams: Promise<{ indicator?: string | string[]; county?: string | string[] }>;
};

export function generateStaticParams() {
  return healthTopics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = healthTopicBySlug[slug];
  if (!topic) return {};
  return {
    title: `${topic.title} | Public Health Atlas`,
    description: topic.description,
    alternates: { canonical: `/health/${topic.slug}` },
  };
}

export default async function HealthTopicPage({ params, searchParams }: Props) {
  const { topic: slug } = await params;
  const topic = healthTopicBySlug[slug];
  if (!topic) notFound();
  const query = await searchParams;
  const indicator = typeof query.indicator === "string" ? query.indicator : undefined;
  const county = typeof query.county === "string" ? query.county : undefined;
  const topicCountyRecords = healthCountyRecords.filter((record) => topic.indicatorIds.includes(record.indicatorId) || record.indicatorId === "total-population");
  const topicTrendRecords = healthTrendRecords.filter((record) => topic.indicatorIds.includes(record.indicatorId));
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `WNYAtlas ${topic.title}`,
    description: topic.description,
    url: `https://www.wnyatlas.com/health/${topic.slug}`,
    spatialCoverage: "Western New York and New York State",
    creator: { "@type": "Organization", name: "WNYAtlas" },
    isBasedOn: healthPlatformSources.map((source) => source.url),
  };

  return (
    <main>
      <StructuredData data={schema} />
      <SiteHeader />
      <section className="health-topic-hero" style={{ "--topic-color": topic.color } as React.CSSProperties}>
        <p className="eyebrow">Public Health Atlas · {topic.eyebrow}</p>
        <h1>{topic.title}</h1>
        <p className="dek">{topic.description}</p>
        <div className="health-principle is-caution">
          <strong>Read the geography and period first</strong>
          <p>{topic.caution}</p>
        </div>
      </section>

      <nav className="health-subnav" aria-label="Public Health Atlas navigation">
        <Link href="/health">Overview</Link>
        <Link href="/health/explorer">Health Explorer</Link>
        <Link href="/health/cancer">Cancer</Link>
        <Link href="/health/neurological">Neurological</Link>
        <Link href="/health/county/erie">County profiles</Link>
      </nav>

      {topic.slug === "birth-defects" ? (
        <BirthDefectsEvidence />
      ) : (
        <HealthTopicExplorer topic={topic} initialIndicator={indicator} initialCounty={county} platformTopics={healthTopics} countyRecords={topicCountyRecords} trendRecords={topicTrendRecords} />
      )}

      <section className="health-context-section">
        <div className="health-section-heading">
          <p className="eyebrow">Optional environmental context</p>
          <h2>Open the documentary record without implying causation.</h2>
          <p>Health statistics and environmental history remain separate by default. These links preserve that distinction while making related records easy to inspect.</p>
        </div>
        <div className="health-context-links">
          <Link href="/#map"><strong>Main environmental map</strong><span>Industry, cleanup sites, landfills, PFAS, and documented waste locations →</span></Link>
          <Link href="/research/radiological-industry-fill"><strong>Radiological legacy</strong><span>FUSRAP, LOOW, Linde, uranium-processing history, and survey records →</span></Link>
          <Link href="/research/former-waterways"><strong>Changed waterways and fill</strong><span>Filled wetlands, altered channels, shoreline expansion, and aerial evidence →</span></Link>
          <Link href="/risks/airborne-exposure"><strong>Documented airborne risks</strong><span>Official plumes, dates, geographic limits, and source records →</span></Link>
        </div>
      </section>

      <section className="health-topic-methods">
        <div className="health-section-heading">
          <p className="eyebrow">Methodology and sources</p>
          <h2>Every value keeps its source period and geography.</h2>
          <p>{topic.sourceNote ?? "County ranks include only New York counties with a published numeric value for the selected measure."}</p>
        </div>
        <div className="health-source-cards">
          {healthPlatformSources.map((source) => (
            <article key={source.title}>
              <p>{source.agency}</p><h3>{source.title}</h3><p>{source.note}</p>
              <a href={source.url} target="_blank" rel="noreferrer">Open official source ↗</a>
            </article>
          ))}
        </div>
        <div className="health-download-row">
          <a href="/data/health-county-indicators.csv" download>Download standardized county data ↓</a>
          <Link href="/health">Return to Public Health Atlas →</Link>
        </div>
      </section>
    </main>
  );
}
