import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import {
  chemicalProfiles,
  findChemical,
  findChemicalsInText,
} from "@/data/chemicals";
import { featuredSites } from "@/data/featured-sites";
import { getSiteStory } from "@/lib/site-story";

type ChemicalPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return chemicalProfiles.map((chemical) => ({ id: chemical.id }));
}

export async function generateMetadata({
  params,
}: ChemicalPageProps): Promise<Metadata> {
  const { id } = await params;
  const chemical = findChemical(id);
  if (!chemical) return {};

  return {
    title: `${chemical.name} Exposure & Effects`,
    description: `${chemical.overview} Review persistence, exposure pathways, potential human-health effects, ecological effects, uncertainty, and official sources.`,
    alternates: {
      canonical: `/chemicals/${chemical.id}`,
    },
  };
}

export default async function ChemicalPage({ params }: ChemicalPageProps) {
  const { id } = await params;
  const chemical = findChemical(id);
  if (!chemical) notFound();

  const relatedSites = featuredSites.filter((site) => {
    const story = getSiteStory(site);
    const recordText = [
      site.summary,
      ...story.background,
      ...story.documentedImpacts,
      ...story.cleanupAndControls,
      ...story.presentDay,
    ].join(" ");
    return findChemicalsInText(recordText).some((record) => record.id === chemical.id);
  });
  const pageUrl = `https://www.wnyatlas.com/chemicals/${chemical.id}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: chemical.name,
    alternateName: chemical.aliases,
    description: chemical.overview,
    url: pageUrl,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "WNYAtlas Chemical & Exposure Guide",
      url: "https://www.wnyatlas.com/chemicals",
    },
  };

  return (
    <main className="chemical-page">
      <StructuredData data={structuredData} />
      <SiteHeader />
      <article>
        <header className="chemical-profile-hero">
          <p className="eyebrow">{chemical.family}</p>
          <h1>{chemical.name}</h1>
          {chemical.aliases.length > 0 && (
            <p className="chemical-profile-aliases">
              Also known as {chemical.aliases.join(", ")}
            </p>
          )}
          <p>{chemical.overview}</p>
        </header>

        <aside className="chemical-warning">
          <strong>How to read this profile</strong>
          <p>
            These are potential effects of exposure—not a diagnosis and not proof
            that anyone near a mapped property was exposed. Risk requires information
            about concentration, route, frequency, duration, and susceptibility.
          </p>
        </aside>

        <div className="chemical-profile-layout">
          <div>
            <section>
              <p className="eyebrow">Environmental behavior</p>
              <h2>Persistence and movement</h2>
              <p>{chemical.persistence}</p>
            </section>
            <section>
              <p className="eyebrow">Pathways</p>
              <h2>How exposure may occur</h2>
              <ul>
                {chemical.exposureRoutes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
            <section>
              <p className="eyebrow">People</p>
              <h2>Potential long-term human effects</h2>
              <ul>
                {chemical.humanHealth.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
            <section>
              <p className="eyebrow">Other living systems</p>
              <h2>Potential ecological effects</h2>
              <ul>
                {chemical.ecologicalHealth.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
            <section>
              <p className="eyebrow">Limits</p>
              <h2>Important uncertainty</h2>
              <p>{chemical.evidenceNote}</p>
            </section>
          </div>

          <aside className="chemical-profile-aside">
            <section>
              <p className="field-label">Official references</p>
              {chemical.sources.map((source) => (
                <a href={source.url} key={`${source.publisher}-${source.title}`} target="_blank" rel="noreferrer">
                  <strong>{source.publisher}</strong>
                  <span>{source.title}</span>
                </a>
              ))}
            </section>
            <section>
              <p className="field-label">Named in atlas records</p>
              {relatedSites.length > 0 ? (
                <div className="chemical-related-sites">
                  {relatedSites.map((site) => (
                    <Link href={`/sites/${site.id}`} key={site.id}>
                      <strong>{site.name}</strong>
                      <span>{site.municipality} · {site.county} County</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p>No current place record names this substance explicitly.</p>
              )}
            </section>
            <Link className="chemical-back-link" href="/chemicals">
              ← All chemical profiles
            </Link>
          </aside>
        </div>
      </article>
    </main>
  );
}
