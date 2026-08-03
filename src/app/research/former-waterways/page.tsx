import type { Metadata } from "next";
import Link from "next/link";

import { FormerWaterwaysMap } from "@/components/former-waterways-map";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Changed Waters, Filled Wetlands and Reclaimed Shorelines",
  description:
    "Explore documented former waterways, filled wetlands, reclaimed shorelines, slag-created land, disposal fill, and restored habitat across Western New York.",
  alternates: {
    canonical: "/research/former-waterways",
  },
  openGraph: {
    type: "article",
    url: "/research/former-waterways",
    title: "Changed Waters, Filled Wetlands and Reclaimed Shorelines | WNYAtlas",
    description:
      "A source-led map of Western New York's former waterways, filled wetlands, reclaimed shoreline, documented fill, and restored habitat.",
  },
};

export default function FormerWaterwaysResearchPage() {
  return (
    <main>
      <SiteHeader />
      <section className="school-research-hero">
        <p className="eyebrow">WNY Atlas research map · Erie and Niagara Counties</p>
        <h1>Changed Waters: former waterways, filled wetlands and reclaimed shores</h1>
        <p className="dek">
          Follow documented changes from the early aerial era to the present:
          filled channels and wetlands, reclaimed waterfront land, slag-created
          shoreline, disposal fill, and restored habitat.
        </p>
        <div className="school-caution">
          <strong>How to read this map</strong>
          <p>
            Markers identify documented evidence locations. Dashed shaded areas
            are approximate Atlas reconstructions from cited agency maps—not
            surveyed parcel, cleanup, or exposure boundaries. Physical landscape
            change and contamination are separate facts. Each description states
            exactly what the reviewed source supports.
          </p>
        </div>
      </section>

      <FormerWaterwaysMap />

      <section className="school-method">
        <p className="eyebrow">Evidence standard</p>
        <h2>Landscape change and contamination are separate facts.</h2>
        <div>
          <article>
            <h3>Documented former landscape</h3>
            <p>
              Historical or agency records must establish the former wetland,
              channel, slip, canal, sediment area, or shoreline.
            </p>
          </article>
          <article>
            <h3>Documented material</h3>
            <p>
              Waste, ash, dredged sediment, demolition debris, or contaminated
              material is named only when the reviewed source identifies it.
            </p>
          </article>
          <article>
            <h3>Source-aligned boundaries</h3>
            <p>
              Historic traces and fill polygons are added only when a defensible
              map can be aligned to modern geography. Every shaded area identifies
              its source year, confidence, and limits.
            </p>
          </article>
        </div>
        <Link href="/">Return to the regional atlas →</Link>
      </section>
    </main>
  );
}
