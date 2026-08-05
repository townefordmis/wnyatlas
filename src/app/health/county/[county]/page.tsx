import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import {
  countyRecord,
  healthTopics,
  indicatorLabel,
  rankForRecord,
  stateRecord,
  wnyCountyNames,
} from "@/data/health-platform";

type Props = { params: Promise<{ county: string }> };

function titleCase(value: string) {
  return value.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function countyFromSlug(slug: string) {
  const label = titleCase(slug);
  return wnyCountyNames.find((county) => county.toLowerCase() === label.toLowerCase());
}

function formatValue(value: number, unit: string) {
  if (unit.toLowerCase().includes("median household")) return `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  if (unit.toLowerCase().includes("percentage")) return `${value.toFixed(1)}%`;
  return value.toLocaleString("en-US", { maximumFractionDigits: 1 });
}

export function generateStaticParams() {
  return wnyCountyNames.map((county) => ({ county: county.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const county = countyFromSlug((await params).county);
  if (!county) return {};
  return {
    title: `${county} County Health Profile | Public Health Atlas`,
    description: `Official county health indicators, statewide placement, reporting periods, and source limitations for ${county} County, New York.`,
    alternates: { canonical: `/health/county/${county.toLowerCase()}` },
  };
}

export default async function CountyHealthProfile({ params }: Props) {
  const county = countyFromSlug((await params).county);
  if (!county) notFound();

  const topicGroups = healthTopics
    .filter((topic) => topic.indicatorIds.length)
    .map((topic) => ({
      topic,
      records: topic.indicatorIds.flatMap((indicatorId) => {
        const record = countyRecord(indicatorId, county);
        return record ? [record] : [];
      }),
    }))
    .filter((group) => group.records.length);
  const uniqueRecords = Array.from(new Map(topicGroups.flatMap((group) => group.records).map((record) => [record.indicatorId, record])).values());
  const ranked = uniqueRecords.flatMap((record) => {
    const placement = rankForRecord(record);
    return placement ? [{ record, ...placement }] : [];
  });
  const topTen = ranked.filter((item) => item.rank <= 10).length;
  const published = uniqueRecords.filter((record) => record.value !== null).length;
  const unavailable = uniqueRecords.length - published;
  const featuredIds = ["cancer-incidence", "heart-disease-mortality", "diabetes-mortality", "respiratory-mortality", "premature-birth", "total-mortality"];

  return (
    <main>
      <SiteHeader />
      <section className="county-health-hero">
        <p className="eyebrow">Public Health Atlas · County profile</p>
        <h1>{county} County</h1>
        <p className="dek">A geography-first view of official health indicators. Each measure keeps its own reporting period and is never combined into a single health score.</p>
        <div className="county-profile-stats">
          <div><span>Published measures</span><strong>{published}</strong></div>
          <div><span>Top-ten NY placements</span><strong>{topTen}</strong></div>
          <div><span>Suppressed or unavailable</span><strong>{unavailable}</strong></div>
          <div><span>Regional set</span><strong>8 WNY counties</strong></div>
        </div>
      </section>

      <nav className="health-subnav" aria-label="County profile navigation">
        <Link href="/health">Overview</Link><Link href="/health/explorer">Health Explorer</Link>
        {wnyCountyNames.map((name) => <Link className={name === county ? "is-active" : ""} href={`/health/county/${name.toLowerCase()}`} key={name}>{name}</Link>)}
      </nav>

      <section className="county-featured-grid" aria-labelledby="county-featured-title">
        <div className="health-section-heading">
          <p className="eyebrow">County snapshot</p><h2 id="county-featured-title">Six measures to start the profile</h2>
          <p>These measures are a navigation aid, not a combined judgment about community health.</p>
        </div>
        <div>
          {featuredIds.map((indicatorId) => {
            const record = countyRecord(indicatorId, county);
            if (!record || record.value === null) return null;
            const placement = rankForRecord(record);
            const state = stateRecord(indicatorId);
            const difference = state?.value ? ((record.value / state.value) - 1) * 100 : null;
            return (
              <article key={indicatorId}>
                <p>{indicatorLabel(indicatorId)}</p>
                <strong>{formatValue(record.value, record.unit)}</strong>
                <dl>
                  <div><dt>NY placement</dt><dd>{placement ? `#${placement.rank} of ${placement.denominator}` : "—"}</dd></div>
                  <div><dt>Vs. NYS</dt><dd>{difference === null ? "—" : `${difference >= 0 ? "+" : ""}${difference.toFixed(1)}%`}</dd></div>
                  <div><dt>Period</dt><dd>{record.period}</dd></div>
                </dl>
              </article>
            );
          })}
        </div>
      </section>

      <section className="county-topic-groups" aria-labelledby="county-topic-title">
        <div className="health-section-heading">
          <p className="eyebrow">Complete indicator profile</p><h2 id="county-topic-title">Open a topic for the full statewide comparison</h2>
        </div>
        {topicGroups.map(({ topic, records }) => (
          <article key={topic.slug} style={{ "--topic-color": topic.color } as React.CSSProperties}>
            <div><p>{topic.eyebrow}</p><h3>{topic.title}</h3><Link href={`/health/${topic.slug}?county=${county}#explorer`}>Open topic →</Link></div>
            <div>
              {records.map((record) => {
                const placement = rankForRecord(record);
                return (
                  <div key={record.indicatorId}>
                    <span>{record.indicator}</span>
                    <strong>{record.value === null ? "Withheld" : formatValue(record.value, record.unit)}</strong>
                    <small>{placement ? `#${placement.rank} of ${placement.denominator} · ` : ""}{record.period}</small>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </section>

      <section className="county-profile-note">
        <strong>How to interpret this page</strong>
        <p>Rank 1 means the highest published value—not necessarily the best or worst result. Survey estimates, mortality rates, hospital events, provider counts, and social conditions have different meanings and denominators. Environmental records remain contextual and do not prove why a health statistic differs.</p>
        <a href="/data/health-county-indicators.csv" download>Download the audit data ↓</a>
      </section>
    </main>
  );
}
