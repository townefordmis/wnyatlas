import type { Metadata } from "next";
import Link from "next/link";

import { enforcementActions } from "@/data/enforcement-actions";

export const metadata: Metadata = {
  title: "Major Environmental Enforcement Actions",
  description:
    "Ten major documented environmental penalties, settlements, and cost recoveries in Western New York.",
  alternates: {
    canonical: "/enforcement",
  },
  openGraph: {
    type: "article",
    url: "/enforcement",
    title: "Major Environmental Enforcement Actions | WNYAtlas",
    description:
      "Ten major documented environmental penalties, settlements, and cost recoveries in Western New York.",
  },
};

export default function EnforcementPage() {
  return (
    <main className="enforcement-page">
      <header className="story-header">
        <Link className="brand" href="/" aria-label="WNYAtlas home">
          <span className="brand-mark">WNY</span>
          <span>ATLAS</span>
        </Link>
        <Link href="/">← Return to the atlas</Link>
      </header>

      <section className="enforcement-hero">
        <p className="eyebrow">Accountability in the public record</p>
        <h1>Major environmental enforcement actions</h1>
        <p className="dek">
          Ten major financial enforcement actions documented in Western New
          York—from criminal fines to cleanup-cost recoveries.
        </p>
      </section>

      <section className="enforcement-method" aria-label="How to read this ranking">
        <strong>Amounts are not interchangeable.</strong>
        <p>
          A criminal fine punishes an offense. A civil penalty resolves violations.
          Cost recovery reimburses public cleanup spending. Natural-resource
          settlements fund restoration. We rank the announced dollar figures and
          clearly label each type of action.
        </p>
      </section>

      <section className="enforcement-list" aria-label="Ranked enforcement actions">
        {enforcementActions.map((action) => (
          <article key={`${action.rank}-${action.name}`}>
            <span className="enforcement-rank">{String(action.rank).padStart(2, "0")}</span>
            <div className="enforcement-copy">
              <p className="enforcement-meta">
                {action.year} · {action.place}
              </p>
              <h2>{action.name}</h2>
              <p>{action.note}</p>
              <a href={action.source.url} target="_blank" rel="noreferrer">
                {action.source.publisher}: {action.source.title} ↗
              </a>
            </div>
            <div className="enforcement-amount">
              <strong>{action.amount}</strong>
              <span>{action.type}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="enforcement-note">
        <p>
          This is a documented research ranking, not a claim that these are the only
          actions ever taken in the region. Dollar amounts are nominal and are not
          adjusted for inflation. Separate actions involving the same facility remain
          separate when they arose from different proceedings.
        </p>
      </section>
    </main>
  );
}
