import Image from "next/image";
import Link from "next/link";

import { featuredSites } from "@/data/featured-sites";
import { getPublicSiteName } from "@/lib/site-name";

const evidenceLabels = {
  "well-documented": "Documented",
  "research-in-progress": "Research in progress",
  "research-lead": "Research lead",
};

export function FeaturedPlaces() {
  const sites = featuredSites
    .filter((site) => site.featuredOrder)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

  return (
    <section className="featured-places" aria-labelledby="featured-places-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Start here</p>
          <h2 id="featured-places-title">Landmark stories of the region</h2>
        </div>
        <p>Six well-known places that open onto Western New York&apos;s larger industrial and environmental history.</p>
      </div>
      <div className="featured-places-rail">
        {sites.map((site) => (
          <article key={site.id}>
            <Link href={`/sites/${site.id}`}>
              {site.image ? (
                <Image src={site.image.src} alt={site.image.alt} width={520} height={320} />
              ) : <div className="featured-place-placeholder" aria-hidden="true" />}
              <div>
                <span>{evidenceLabels[site.evidenceStatus]}</span>
                <h3>{getPublicSiteName(site.name)}</h3>
                <p>{site.summary}</p>
                <strong>Read the place record →</strong>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
