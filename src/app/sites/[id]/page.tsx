import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { featuredSites } from "@/data/featured-sites";
import { getSiteStory } from "@/lib/site-story";

type SitePageProps = {
  params: Promise<{ id: string }>;
};

const evidenceLabels = {
  "well-documented": "Well documented",
  "research-in-progress": "Research in progress",
  "research-lead": "Research lead",
};

function findSite(id: string) {
  return featuredSites.find((site) => site.id === id);
}

export function generateStaticParams() {
  return featuredSites
    .filter((site) => site.story)
    .map((site) => ({ id: site.id }));
}

export async function generateMetadata({
  params,
}: SitePageProps): Promise<Metadata> {
  const { id } = await params;
  const site = findSite(id);

  if (!site?.story) {
    return {};
  }

  return {
    title: `${site.name} | WNYAtlas`,
    description: site.summary,
  };
}

export default async function SitePage({ params }: SitePageProps) {
  const { id } = await params;
  const site = findSite(id);

  if (!site?.story) {
    notFound();
  }

  const story = getSiteStory(site);

  return (
    <main className="story-page">
      <header className="story-header">
        <Link className="brand" href="/" aria-label="WNYAtlas home">
          <span className="brand-mark">WNY</span>
          <span>ATLAS</span>
        </Link>
        <Link className="story-back" href="/#map">
          Back to the map
        </Link>
      </header>

      <article>
        <section className="story-hero">
          <div>
            <p className="eyebrow">
              {site.category} · {site.county} County
            </p>
            <h1>{site.name}</h1>
            <p className="story-location">{site.municipality}</p>
          </div>
          <aside className="story-status">
            <p className="field-label">Evidence status</p>
            <strong>{evidenceLabels[site.evidenceStatus]}</strong>
            <p>{story.evidenceContext}</p>
            <p className="story-reviewed">
              Editorial review: {story.lastReviewed}
            </p>
          </aside>
        </section>

        <div className="story-layout">
          <div className="story-body">
            <section>
              <p className="eyebrow">Background</p>
              <h2>What happened here?</h2>
              {story.background.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>{story.categoryContext}</p>
              {site.atomicLegacy && (
                <p>
                  <strong>{site.atomicLegacy.era}:</strong>{" "}
                  {site.atomicLegacy.role}
                </p>
              )}
            </section>

            {story.timeline.length > 0 && (
              <section>
                <p className="eyebrow">Chronology</p>
                <h2>Timeline</h2>
                <ol className="story-timeline">
                  {story.timeline.map((item) => (
                    <li key={`${item.period}-${item.event}`}>
                      <strong>{item.period}</strong>
                      <p>{item.event}</p>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {story.documentedImpacts.length > 0 && (
              <section>
                <p className="eyebrow">Environmental record</p>
                <h2>Documented impacts</h2>
                <ul>
                  {story.documentedImpacts.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {story.cleanupAndControls.length > 0 && (
              <section>
                <p className="eyebrow">Response</p>
                <h2>Cleanup and controls</h2>
                <ul>
                  {story.cleanupAndControls.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {story.presentDay.length > 0 && (
              <section>
                <p className="eyebrow">Then and now</p>
                <h2>The site today</h2>
                {story.presentDay.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            )}

            <section>
              <p className="eyebrow">Research desk</p>
              <h2>How this story is being built</h2>
              <p>
                WNYAtlas is reviewing the linked records for ownership history,
                operations, waste pathways, cleanup decisions, monitoring, and
                present-day use. Missing details remain research questions rather
                than being filled with assumptions.
              </p>
              {story.researchNotes.length > 0 && (
                <ul>
                  {story.researchNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              )}
            </section>
          </div>

          <aside className="story-evidence">
            <p className="field-label">Place record</p>
            <dl>
              <div>
                <dt>Municipality</dt>
                <dd>{site.municipality}</dd>
              </div>
              <div>
                <dt>County</dt>
                <dd>{site.county}</dd>
              </div>
              <div>
                <dt>Atlas category</dt>
                <dd>{site.category}</dd>
              </div>
              <div>
                <dt>Map point</dt>
                <dd>
                  {site.coordinates[1].toFixed(5)},{" "}
                  {site.coordinates[0].toFixed(5)}
                </dd>
              </div>
            </dl>

            <div className="story-sources">
              <p className="field-label">Sources</p>
              {site.sources?.length ? (
                site.sources.map((source) => (
                  <a
                    href={source.url}
                    key={source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{source.publisher}</span>
                    <strong>{source.title}</strong>
                  </a>
                ))
              ) : (
                <p>A public source list is being assembled for this record.</p>
              )}
            </div>
          </aside>
        </div>
      </article>

      <footer className="story-footer">
        <p>Evidence-based public history for Western New York.</p>
        <Link href="/#sites">Browse all 75 places</Link>
      </footer>
    </main>
  );
}
