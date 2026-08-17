import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { LoveCanalDisposalHistory } from "@/components/love-canal-disposal-history";
import { BuffaloRiverFireHistory } from "@/components/buffalo-river-fire-history";
import { BethlehemWorkerHistory } from "@/components/bethlehem-worker-history";
import { DeepHistoryFeature } from "@/components/deep-history-feature";
import {
  HistoricalAerialEvidence,
  hasHistoricalAerialEvidence,
} from "@/components/historical-aerial-evidence";
import { findChemicalsInText } from "@/data/chemicals";
import { featuredSites } from "@/data/featured-sites";
import {
  buffaloSchoolCampuses,
  existingAtlasSiteByCleanupCode,
} from "@/data/buffalo-school-research";
import { formerWaterwayRecords } from "@/data/former-waterways";
import { getConnectionGroupsForSite } from "@/data/site-connections";
import { getSiteStory } from "@/lib/site-story";
import { getPublicSiteName } from "@/lib/site-name";
import {
  getPfasEvidenceLabel,
  getPfasFindingLabel,
  getPfasSearchText,
} from "@/lib/pfas-evidence";
import { hasDeepHistoryFeature } from "@/data/deep-history-features";

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

  const publicName = getPublicSiteName(site.name);

  return {
    title: publicName,
    description: site.summary,
    alternates: {
      canonical: `/sites/${site.id}`,
    },
    openGraph: {
      type: "article",
      url: `/sites/${site.id}`,
      title: `${publicName} | WNYAtlas`,
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
      title: `${publicName} | WNYAtlas`,
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

  const publicName = getPublicSiteName(site.name);
  const story = getSiteStory(site);
  const hasAerials = hasHistoricalAerialEvidence(site.id);
  const hasDeepHistory = hasDeepHistoryFeature(site.id);
  const namedChemicals = findChemicalsInText(
    [
      site.summary,
      getPfasSearchText(site),
      ...story.background,
      ...story.documentedImpacts,
      ...story.cleanupAndControls,
      ...story.presentDay,
    ].join(" "),
  );
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
  const siteUrl = `https://www.wnyatlas.com/sites/${site.id}`;
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
        headline: publicName,
        description: site.summary,
        url: siteUrl,
        mainEntityOfPage: siteUrl,
        inLanguage: "en-US",
        ...(dateModified ? { dateModified } : {}),
        ...(site.image
          ? { image: `https://www.wnyatlas.com${site.image.src}` }
          : {}),
        author: {
          "@type": "Organization",
          name: "WNYAtlas",
          url: "https://www.wnyatlas.com/",
        },
        publisher: {
          "@type": "Organization",
          name: "WNYAtlas",
          url: "https://www.wnyatlas.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://www.wnyatlas.com/icon.svg",
          },
        },
        about: {
          "@id": `${siteUrl}#place`,
        },
      },
      {
        "@type": "Place",
        "@id": `${siteUrl}#place`,
        name: publicName,
        ...(publicName !== site.name ? { alternateName: site.name } : {}),
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
            item: "https://www.wnyatlas.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "All documented places",
            item: "https://www.wnyatlas.com/places",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: publicName,
            item: siteUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="story-page">
      <StructuredData data={structuredData} />
      <SiteHeader />

      <article>
        <section className="story-hero">
          <div>
            <p className="eyebrow">
              {site.category} · {site.county} County
            </p>
            <h1>{publicName}</h1>
            <p className="story-location">{site.municipality}</p>
            <p className="story-summary">{site.summary}</p>
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

        <nav className="story-section-nav" aria-label="Explore this place">
          <span>Explore this place</span>
          <a href="#overview">Overview</a>
          {site.id === "buffalo-river" && <a href="#river-fire">1968 fire</a>}
          {site.id === "bethlehem-steel" && <a href="#worker-history">Workers</a>}
          {hasDeepHistory && <a href="#deep-history">People &amp; history</a>}
          {hasAerials && <a href="#aerials">Aerial history</a>}
          {site.pfasCompounds?.length ? <a href="#pfas-compounds">PFAS compounds</a> : null}
          {story.timeline.length > 0 && <a href="#timeline">Timeline</a>}
          {story.documentedImpacts.length > 0 && <a href="#impacts">Impacts</a>}
          {story.cleanupAndControls.length > 0 && <a href="#cleanup">Cleanup</a>}
          {story.presentDay.length > 0 && <a href="#today">Today</a>}
          <a href="#sources">Sources</a>
        </nav>

        <div className="story-layout">
          <div className="story-body">
            <section className="story-chapter story-overview" id="overview">
              <div className="story-chapter-heading">
                <span aria-hidden="true">01</span>
                <div>
                  <p className="eyebrow">Background</p>
                  <h2>What happened here?</h2>
                </div>
              </div>
              <div className="story-background-copy">
                {story.background.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="story-context-note">{story.categoryContext}</p>
              </div>
              {(site.category === "pfas" || site.pfasStatus) && (
                <div className="pfas-record-status">
                  <strong>PFAS record status</strong>
                  {getPfasEvidenceLabel(site) && (
                    <p><strong>Atlas classification:</strong> {getPfasEvidenceLabel(site)}.</p>
                  )}
                  <p>
                    {site.pfasStatus === "under-review"
                      ? "Historical records and sampling information are being reviewed. This page does not present the property as a confirmed PFAS source."
                      : "PFAS activity, investigation, or detection is documented in the cited site record. That documentation does not by itself establish off-site exposure or a health effect in any individual."}
                  </p>
                  {site.pfasCompounds?.length ? (
                    <div className="pfas-compound-record" id="pfas-compounds">
                      <h3>Compounds and evidence</h3>
                      <div className="pfas-compound-list">
                        {site.pfasCompounds.map((compound) => (
                          <article key={`${compound.abbreviation}-${compound.finding}`}>
                            <div>
                              <strong>{compound.abbreviation}</strong>
                              <span>{compound.name}</span>
                            </div>
                            <p className={`pfas-finding is-${compound.finding}`}>
                              {getPfasFindingLabel(compound.finding)}
                            </p>
                            {compound.medium && <p><strong>Medium:</strong> {compound.medium}</p>}
                            {compound.note && <p>{compound.note}</p>}
                          </article>
                        ))}
                      </div>
                      {site.pfasScopeNote && <p className="pfas-scope-note"><strong>Evidence limit:</strong> {site.pfasScopeNote}</p>}
                      <p className="pfas-terminology-note">
                        <strong>C8 and APFO:</strong> PFOA is often called C8. APFO is the
                        ammonium salt of PFOA, but a PFOA environmental result does not
                        identify APFO as the original product or prove where it came from.
                      </p>
                    </div>
                  ) : null}
                </div>
              )}
              {site.atomicLegacy && (
                <p>
                  <strong>{site.atomicLegacy.era}:</strong>{" "}
                  {site.atomicLegacy.role}
                </p>
              )}
            </section>

            {site.id === "buffalo-river" && <BuffaloRiverFireHistory />}

            {site.id === "bethlehem-steel" && <BethlehemWorkerHistory />}

            {hasDeepHistory && <DeepHistoryFeature siteId={site.id} />}

            {site.id === "love-canal" && (
              <section className="story-research-figure" aria-labelledby="love-canal-aerial-title">
                <p className="eyebrow">Landscape transformation</p>
                <h2 id="love-canal-aerial-title">The canal, disposal area, neighborhood, and managed remedy over time</h2>
                <p>
                  This comparison aligns six aerial views to show visible landscape change. Colored outlines are approximate visual interpretations—not surveyed property, disposal, or remedy boundaries.
                </p>
                <figure>
                  <a
                    className="story-research-figure-scroll"
                    href="/historical/love-canal-aerial-timeline-corrected.png"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open the Love Canal aerial timeline at full size"
                  >
                    <Image
                      src="/historical/love-canal-aerial-timeline-corrected.png"
                      alt="Six-panel Love Canal aerial timeline comparing the open canal in 1938, the documented disposal period, closure and clay cover around 1953, emergency response in 1979, and the managed capped landfill area in 2024"
                      width={1536}
                      height={1024}
                    />
                  </a>
                  <figcaption>
                    <span>
                      WNYAtlas research graphic. Historical aerials are credited to Cornell University Library / IRIS Aerial Photograph Collection; the current panel is identified in the supplied composite as Google Earth, May 2024. Individual historical flight identifiers and the current third-party imagery-provider attribution were not preserved in the supplied composite and remain under review.
                    </span>
                    <span className="story-research-figure-links">
                      <a href="https://digital.library.cornell.edu/collections/aerialny" target="_blank" rel="noreferrer">Cornell aerial collection ↗</a>
                      <a href="https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/love-canal" target="_blank" rel="noreferrer">NYSDEC Love Canal record ↗</a>
                      <a href="https://semspub.epa.gov/work/HQ/186263.pdf" target="_blank" rel="noreferrer">EPA remedy record ↗</a>
                      <a href="https://earth.google.com/studio/docs/attribution/" target="_blank" rel="noreferrer">Google Earth attribution requirements ↗</a>
                    </span>
                    <strong>Open the image for full-size labels and notes.</strong>
                  </figcaption>
                </figure>
              </section>
            )}

            {site.id === "love-canal" && <LoveCanalDisposalHistory />}

            <HistoricalAerialEvidence siteId={site.id} />

            {namedChemicals.length > 0 && (
              <section className="story-chemicals" id="chemicals">
                <p className="eyebrow">Chemical guide</p>
                <h2>Chemicals named in this record</h2>
                <p>
                  These links explain potential hazards and exposure pathways. A
                  chemical named in a record does not establish that anyone was
                  exposed or harmed.
                </p>
                <div className="chemical-chip-list">
                  {namedChemicals.map((chemical) => (
                    <Link href={`/chemicals/${chemical.id}`} key={chemical.id}>
                      {chemical.name}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {(site.category === "pfas" || site.pfasStatus) && (
              <section className="pfas-health-context">
                <p className="eyebrow">Health context</p>
                <h2>Why PFAS are a long-term concern</h2>
                <p>
                  PFAS are a large family of manufactured chemicals. Many are highly
                  persistent, and some can remain in the environment or build up in
                  people and animals over time. Persistence can allow releases to move
                  through groundwater, surface water, waste systems, food, and fish long
                  after the original use has ended.
                </p>
                <p>
                  Human studies have found associations between increased exposure to
                  certain PFAS and higher cholesterol, lower antibody response to some
                  vaccines, changes in liver enzymes, pregnancy-induced hypertension and
                  preeclampsia, small decreases in birth weight, and kidney or testicular
                  cancer for PFOA. Evidence differs by compound, and research continues.
                  A site detection does not show that a particular person was exposed or
                  that PFAS caused an illness.
                </p>
                <div className="pfas-health-sources">
                  <a
                    href="https://www.atsdr.cdc.gov/pfas/about/health-effects.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ATSDR: How PFAS may affect health
                  </a>
                  <a
                    href="https://www.epa.gov/pfas/our-current-understanding-human-health-and-environmental-risks-pfas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    U.S. EPA: Current understanding of PFAS risks
                  </a>
                  <a
                    href="https://www.health.ny.gov/environmental/water/drinking/emerging_pfas_publicwater"
                    target="_blank"
                    rel="noreferrer"
                  >
                    New York State: PFAS and drinking water
                  </a>
                </div>
              </section>
            )}

            {story.timeline.length > 0 && (
              <section className="story-chapter" id="timeline">
                <div className="story-chapter-heading">
                  <span aria-hidden="true">02</span>
                  <div>
                    <p className="eyebrow">Chronology</p>
                    <h2>Timeline</h2>
                  </div>
                </div>
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
              <section className="story-chapter" id="impacts">
                <div className="story-chapter-heading">
                  <span aria-hidden="true">03</span>
                  <div>
                    <p className="eyebrow">Environmental record</p>
                    <h2>Documented impacts</h2>
                  </div>
                </div>
                <ul className="story-finding-list">
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
              <section className="story-chapter" id="cleanup">
                <div className="story-chapter-heading">
                  <span aria-hidden="true">04</span>
                  <div>
                    <p className="eyebrow">Response</p>
                    <h2>Cleanup and controls</h2>
                  </div>
                </div>
                <ul className="story-finding-list">
                  {story.cleanupAndControls.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {story.presentDay.length > 0 && (
              <section className="story-chapter story-today" id="today">
                <div className="story-chapter-heading">
                  <span aria-hidden="true">05</span>
                  <div>
                    <p className="eyebrow">Then and now</p>
                    <h2>The site today</h2>
                  </div>
                </div>
                <div className="story-today-copy">
                  {story.presentDay.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {connectionGroups.length > 0 && (
              <section id="connections">
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
                            <strong>{getPublicSiteName(member.site.name)}</strong>
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

            {site.category === "radiological" && (
              <section>
                <p className="eyebrow">Radiological-map connection</p>
                <h2>Place this site in the wider material history</h2>
                <p>
                  The separate radiological investigation map distinguishes
                  producers, processors, storage, the 100 historical survey
                  records, federal remediation, and current assessment coverage.
                </p>
                <Link
                  className="risk-map-link"
                  href="/research/radiological-industry-fill"
                >
                  <span>Linked research map</span>
                  <strong>Open the radiological investigation →</strong>
                </Link>
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

            <section id="research">
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

          <aside className="story-evidence" id="sources">
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
              <p className="story-source-rights-note">
                External photographs, news reports, and archival scans remain the
                property of their original publishers. WNYAtlas links to restricted
                material at its source and does not reproduce it without permission.
              </p>
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
