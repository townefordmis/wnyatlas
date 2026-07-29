import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { StructuredData } from "@/components/structured-data";
import { featuredSites } from "@/data/featured-sites";
import {
  buffaloSchoolCampuses,
  existingAtlasSiteByCleanupCode,
} from "@/data/buffalo-school-research";
import { formerWaterwayRecords } from "@/data/former-waterways";
import { getConnectionGroupsForSite } from "@/data/site-connections";
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
  return featuredSites.map((site) => ({ id: site.id }));
}

export async function generateMetadata({
  params,
}: SitePageProps): Promise<Metadata> {
  const { id } = await params;
  const site = findSite(id);

  if (!site) {
    return {};
  }

  return {
    title: site.name,
    description: site.summary,
    alternates: {
      canonical: `/sites/${site.id}`,
    },
    openGraph: {
      type: "article",
      url: `/sites/${site.id}`,
      title: `${site.name} | WNYAtlas`,
      description: site.summary,
      images: site.image
        ? [
            {
              url: site.image.src,
              alt: site.image.alt,
            },
          ]
        : ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} | WNYAtlas`,
      description: site.summary,
      images: [site.image?.src ?? "/opengraph-image"],
    },
  };
}

export default async function SitePage({ params }: SitePageProps) {
  const { id } = await params;
  const site = findSite(id);

  if (!site) {
    notFound();
  }

  const story = getSiteStory(site);
  const connectionGroups = getConnectionGroupsForSite(site.id, featuredSites);
  const relatedWaterways = formerWaterwayRecords.filter(
    (record) => record.relatedSiteId === site.id,
  );
  const relatedSchoolCampuses = buffaloSchoolCampuses.filter((campus) =>
    campus.nearbyRemediationSites.some(
      (record) =>
        existingAtlasSiteByCleanupCode[record.siteCode] === site.id,
    ),
  );
  const siteUrl = `https://wnyatlas.com/sites/${site.id}`;
  const reviewedDate = story.lastReviewed
    ? new Date(story.lastReviewed)
    : null;
  const dateModified =
    reviewedDate && !Number.isNaN(reviewedDate.valueOf())
      ? reviewedDate.toISOString()
      : undefined;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}#article`,
        headline: site.name,
        description: site.summary,
        url: siteUrl,
        mainEntityOfPage: siteUrl,
        inLanguage: "en-US",
        ...(dateModified ? { dateModified } : {}),
        ...(site.image
          ? { image: `https://wnyatlas.com${site.image.src}` }
          : {}),
        author: {
          "@type": "Organization",
          name: "WNYAtlas",
          url: "https://wnyatlas.com/",
        },
        publisher: {
          "@type": "Organization",
          name: "WNYAtlas",
          url: "https://wnyatlas.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://wnyatlas.com/icon.svg",
          },
        },
        about: {
          "@id": `${siteUrl}#place`,
        },
      },
      {
        "@type": "Place",
        "@id": `${siteUrl}#place`,
        name: site.name,
        description: site.summary,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.municipality,
          addressRegion: "NY",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          longitude: site.coordinates[0],
          latitude: site.coordinates[1],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "WNYAtlas",
            item: "https://wnyatlas.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "All documented places",
            item: "https://wnyatlas.com/places",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: site.name,
            item: siteUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="story-page">
      <StructuredData data={structuredData} />
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
            {site.image && (
              <figure className="story-image">
                <Image
                  src={site.image.src}
                  alt={site.image.alt}
                  width={1200}
                  height={760}
                  priority
                />
                <figcaption>
                  <span>{site.image.caption}</span>
                  <a href={site.image.sourceUrl} target="_blank" rel="noreferrer">
                    {site.image.date} · {site.image.credit} · {site.image.rights}
                  </a>
                </figcaption>
              </figure>
            )}
          </div>
          <aside className="story-status">
            <p className="field-label">Evidence status</p>
            <strong>{evidenceLabels[site.evidenceStatus]}</strong>
            <p>{story.evidenceContext}</p>
            {story.lastReviewed && (
              <p className="story-reviewed">
                Editorial review: {story.lastReviewed}
              </p>
            )}
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
                {(site.id === "tonawanda-coke" || site.id === "love-canal") && (
                  <Link className="risk-map-link" href="/risks/airborne-exposure">
                    <span>Linked risk pathway</span>
                    <strong>See the airborne exposure & historic plumes map →</strong>
                  </Link>
                )}
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

            {connectionGroups.length > 0 && (
              <section>
                <p className="eyebrow">Atlas connections</p>
                <h2>Connected places</h2>
                <p>
                  These collections explain documented material, facility,
                  waterway, ownership, or cleanup relationships. Inclusion does not
                  imply that every place shares one contaminant source or plume.
                </p>
                <div className="connection-groups">
                  {connectionGroups.map((group) => (
                    <section key={group.id}>
                      <h3>{group.name}</h3>
                      <p>{group.summary}</p>
                      <div className="connection-list">
                        {group.members.map((member) => (
                          <Link
                            className={
                              member.siteId === site.id ? "is-current" : ""
                            }
                            href={`/sites/${member.siteId}`}
                            key={member.siteId}
                            aria-current={
                              member.siteId === site.id ? "page" : undefined
                            }
                          >
                            <span>{member.role}</span>
                            <strong>{member.site.name}</strong>
                            <p>{member.connection}</p>
                          </Link>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </section>
            )}

            {relatedWaterways.length > 0 && (
              <section>
                <p className="eyebrow">Waterway connection</p>
                <h2>See the documented waterway record</h2>
                <p>
                  The separate waterways map explains the documented relationship
                  among the historic waterbody, fill or sediment, and this Atlas
                  site without crowding the regional map.
                </p>
                {relatedWaterways.map((record) => (
                  <Link
                    className="risk-map-link"
                    href={`/research/former-waterways#waterway-${record.id}`}
                    key={record.id}
                  >
                    <span>Linked research map</span>
                    <strong>{record.name} →</strong>
                  </Link>
                ))}
              </section>
            )}

            {relatedSchoolCampuses.length > 0 && (
              <section>
                <p className="eyebrow">School-map connection</p>
                <h2>See the documented campus relationship</h2>
                <p>
                  The schools research map explains the documented property,
                  adjacency, or mapped-parcel relationship without treating
                  proximity as evidence of exposure or present school conditions.
                </p>
                {relatedSchoolCampuses.map((campus) => (
                  <Link
                    className="risk-map-link"
                    href={`/research/schools-industrial-sites#school-${campus.id}`}
                    key={campus.id}
                  >
                    <span>Linked schools map</span>
                    <strong>
                      {campus.schools.map((school) => school.name).join(" / ")} →
                    </strong>
                  </Link>
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
        <Link href="/#sites">Browse all {featuredSites.length} places</Link>
      </footer>
    </main>
  );
}
