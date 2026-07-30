import type { Metadata } from "next";

import { ChemicalDirectory } from "@/components/chemical-directory";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { chemicalProfiles } from "@/data/chemicals";

export const metadata: Metadata = {
  title: "Chemical & Exposure Guide",
  description:
    "Plain-language profiles of contaminants documented in WNYAtlas, including persistence, exposure pathways, potential human-health effects, ecological effects, and official sources.",
  alternates: {
    canonical: "/chemicals",
  },
};

export default function ChemicalsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "WNYAtlas Chemical & Exposure Guide",
    url: "https://www.wnyatlas.com/chemicals",
    description: metadata.description,
    numberOfItems: chemicalProfiles.length,
  };

  return (
    <main>
      <StructuredData data={structuredData} />
      <SiteHeader />
      <section className="chemical-guide-hero">
        <p className="eyebrow">Chemical & Exposure Guide</p>
        <h1>Hazard is not the same as exposure.</h1>
        <p>
          These profiles explain what documented contaminants can do, how exposure
          may occur, what is known about long-term effects, and where uncertainty
          remains. A chemical named at a site does not establish that a person,
          community, or wildlife population was exposed or harmed.
        </p>
      </section>
      <section className="chemical-principles" aria-label="How to read the guide">
        <article>
          <strong>Hazard</strong>
          <p>What a substance is capable of causing under some conditions.</p>
        </article>
        <article>
          <strong>Detection</strong>
          <p>Where and when a laboratory measured a substance.</p>
        </article>
        <article>
          <strong>Exposure</strong>
          <p>Contact through air, water, food, soil, skin, or work.</p>
        </article>
        <article>
          <strong>Risk</strong>
          <p>Depends on dose, route, frequency, duration, and susceptibility.</p>
        </article>
      </section>
      <section className="chemical-guide-content">
        <div className="section-heading">
          <p className="eyebrow">Starting collection</p>
          <h2>{chemicalProfiles.length} priority profiles</h2>
        </div>
        <ChemicalDirectory />
      </section>
    </main>
  );
}
