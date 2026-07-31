import type { Metadata } from "next";
import Link from "next/link";

import {
  CurrentAssessmentNote,
  RadiologicalDocumentArchive,
  RadiologicalInvestigationMap,
} from "@/components/radiological-investigation-map";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Radiological Industry, Fill, Surveys & Cleanup",
  description:
    "Explore documented radiological industry, historical survey anomalies, fill, storage, remediation, and current assessment work in Niagara and Erie counties.",
  alternates: { canonical: "/research/radiological-industry-fill" },
  openGraph: {
    type: "article",
    url: "/research/radiological-industry-fill",
    title: "Radiological Industry, Fill, Surveys & Cleanup | WNYAtlas",
    description:
      "A source-led investigation map separating historical measurements, producers and handlers, federal cleanup, and current survey coverage.",
  },
};

export default function RadiologicalInvestigationPage() {
  return (
    <main>
      <SiteHeader />
      <section className="school-research-hero radiological-hero">
        <p className="eyebrow">WNY Atlas investigation · Niagara and Erie counties</p>
        <h1>The material, the makers, the measurements, and what happened next</h1>
        <p className="dek">
          A separate map for Western New York’s radiological industrial history:
          the 100 locations recorded in a 1984 federal survey, the facilities that
          produced or handled distinct material streams, documented remediation,
          and the wider assessment underway today.
        </p>
        <div className="school-caution radiological-caution">
          <strong>Historical finding does not mean current hazard</strong>
          <p>
            A mapped point may represent a historical instrument reading, material
            later removed, an approximate former landmark, or a producer or storage
            facility. The record panel states which. Shaded assessment areas show
            where agencies surveyed—not where contamination has been established.
          </p>
        </div>
      </section>

      <RadiologicalInvestigationMap />
      <CurrentAssessmentNote />
      <RadiologicalDocumentArchive />

      <section className="school-method radiological-method">
        <p className="eyebrow">How the material streams differ</p>
        <h2>“Radioactive slag” is not one single history.</h2>
        <div>
          <article>
            <h3>Phosphate slag and fill</h3>
            <p>
              The 1986 federal report generally associated many non-NFSS readings
              with cyclowollastonite-rich phosphate slag used below pavement or as
              gravel. It reportedly traced that commercial material to the former
              Oldbury Furnace, but did not establish a producer for every address.
            </p>
          </article>
          <article>
            <h3>Uranium-production residue</h3>
            <p>
              Electro Metallurgical’s uranium-metal work produced C-2 reduction
              slag, later processed by Hooker to recover uranium. Linde’s uranium
              refining residues form another documented stream connected to the
              Tonawanda FUSRAP network.
            </p>
          </article>
          <article>
            <h3>NFSS-related material</h3>
            <p>
              The report attributed 38 historical locations to material connected
              with the Niagara Falls Storage Site. Those locations are marked as
              federally remediated, distinct from the other historical anomalies.
            </p>
          </article>
        </div>
        <Link href="/">Return to the regional atlas →</Link>
      </section>
    </main>
  );
}
