import type { Metadata } from "next";
import Link from "next/link";

import { HealthTopicExplorer } from "@/components/health-topic-explorer";
import { SiteHeader } from "@/components/site-header";
import { healthCountyRecords, healthTopicBySlug, healthTopics, healthTrendRecords } from "@/data/health-platform";

export const metadata: Metadata = {
  title: "Health Explorer | Public Health Atlas",
  description: "Compare official public-health indicators across eight Western New York counties and all New York counties with published values.",
  alternates: { canonical: "/health/explorer" },
};

type Props = {
  searchParams: Promise<{ topic?: string | string[]; indicator?: string | string[]; county?: string | string[] }>;
};

export default async function HealthExplorerPage({ searchParams }: Props) {
  const query = await searchParams;
  const requestedTopic = typeof query.topic === "string" ? query.topic : "heart-disease";
  const topic = healthTopicBySlug[requestedTopic] ?? healthTopicBySlug["heart-disease"];
  const indicator = typeof query.indicator === "string" ? query.indicator : undefined;
  const county = typeof query.county === "string" ? query.county : undefined;
  const topicCountyRecords = healthCountyRecords.filter((record) => topic.indicatorIds.includes(record.indicatorId) || record.indicatorId === "total-population");
  const topicTrendRecords = healthTrendRecords.filter((record) => topic.indicatorIds.includes(record.indicatorId));

  return (
    <main>
      <SiteHeader />
      <section className="health-topic-hero health-explorer-hero">
        <p className="eyebrow">WNYAtlas · Public Health Atlas</p>
        <h1>One explorer. Every supported county indicator.</h1>
        <p className="dek">Choose a topic, measure, and Western New York county. Every result preserves its reporting period, denominator, statewide placement, and source limitations.</p>
      </section>

      <nav className="health-subnav" aria-label="Public Health Atlas navigation">
        <Link href="/health">Overview</Link><Link href="/health/cancer">Cancer</Link><Link href="/health/neurological">Neurological</Link><Link href="/health/county/erie">County profiles</Link>
      </nav>

      <section className="health-explorer-topic-strip" aria-label="Available health topics">
        {healthTopics.filter((item) => item.indicatorIds.length).map((item) => (
          <Link className={item.slug === topic.slug ? "is-active" : ""} href={`/health/explorer?topic=${item.slug}#explorer`} key={item.slug}>
            <i style={{ background: item.color }} />{item.shortTitle}
          </Link>
        ))}
      </section>

      <HealthTopicExplorer topic={topic} initialIndicator={indicator} initialCounty={county} explorerMode platformTopics={healthTopics} countyRecords={topicCountyRecords} trendRecords={topicTrendRecords} />
    </main>
  );
}
