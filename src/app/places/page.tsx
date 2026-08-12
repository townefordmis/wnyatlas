import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { featuredSites } from "@/data/featured-sites";
import { getPublicSiteName } from "@/lib/site-name";

export const metadata: Metadata = {
  title: "All Documented Places",
  description:
    "Browse the complete A–Z index of documented industrial, environmental, cleanup, waterway, PFAS, and radiological places in WNYAtlas.",
  alternates: {
    canonical: "/places",
  },
  openGraph: {
    type: "website",
    url: "/places",
    title: "All Documented Places | WNYAtlas",
    description:
      "Browse every documented Western New York place record in the WNYAtlas collection.",
  },
};

const categoryLabels = {
  cleanup: "Cleanup & brownfield",
  industry: "Historic industry",
  radiological: "Radiological",
  waterway: "Waterway",
  pfas: "PFAS",
};

export default function PlacesPage() {
  const sortedSites = [...featuredSites].sort((a, b) =>
    getPublicSiteName(a.name).localeCompare(getPublicSiteName(b.name)),
  );
  const groups = Object.groupBy(sortedSites, (site) =>
    getPublicSiteName(site.name).charAt(0).toUpperCase(),
  );
  const coveredCounties = new Set(featuredSites.map((site) => site.county));

  return (
    <main>
      <SiteHeader />
      <section className="places-index">
        <div className="places-index-heading">
          <div>
            <p className="eyebrow">Complete collection</p>
            <h1>All documented places</h1>
          </div>
          <p>
            A crawlable A–Z index of {featuredSites.length} researched place
            records. Use the homepage directory when you want to search by
            county or environmental topic. The collection currently includes
            environmental place records in {coveredCounties.size} of the eight
            WNYAtlas counties; absence from this index is not evidence that a place
            has no environmental history. <Link href="/research-status">Review the
            coverage and research status.</Link>
          </p>
        </div>

        <nav className="places-alphabet" aria-label="Place index letters">
          {Object.keys(groups).map((letter) => (
            <a key={letter} href={`#letter-${letter}`}>
              {letter}
            </a>
          ))}
        </nav>

        <div className="places-groups">
          {Object.entries(groups).map(([letter, sites]) => (
            <section key={letter} id={`letter-${letter}`}>
              <h2>{letter}</h2>
              <div>
                {sites?.map((site) => (
                  <Link key={site.id} href={`/sites/${site.id}`}>
                    <strong>{getPublicSiteName(site.name)}</strong>
                    <span>
                      {site.municipality} · {site.county} County ·{" "}
                      {categoryLabels[site.category]}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
