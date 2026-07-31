import type { Metadata } from "next";
import Link from "next/link";

import {
  CurrentAssessmentNote,
  RadiologicalDocumentArchive,
  RadiologicalInvestigationMap,
} from "@/components/radiological-investigation-map";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Radioactive Industrial Slag, Uranium Residues & Fill",
  description:
    "Trace radioactive industrial slag, uranium-production residues, historical fill locations, DOE/ORNL surveys, storage, and cleanup in Niagara and Erie counties.",
  alternates: { canonical: "/research/radiological-industry-fill" },
  openGraph: {
    type: "article",
    url: "/research/radiological-industry-fill",
    title: "Radioactive Industrial Slag, Uranium Residues & Fill | WNYAtlas",
    description:
      "A source-led investigation separating NFSS-related material from phosphate furnace slag and documenting production, reported reuse as fill, surveys, and remediation.",
  },
};

export default function RadiologicalInvestigationPage() {
  return (
    <main>
      <SiteHeader />
      <section className="school-research-hero radiological-hero">
        <p className="eyebrow">WNY Atlas investigation · Niagara and Erie counties</p>
        <h1>Radioactive industrial slag, uranium residues, and fill</h1>
        <p className="dek">
          This investigation follows two related but distinct histories: material
          connected to the Niagara Falls Storage Site and radioactive phosphate
          furnace slag reportedly reused beneath pavement, in driveways, and as
          gravel fill. It connects the producers and handlers with the 100 locations
          investigated by DOE and Oak Ridge National Laboratory, later cleanup, and
          today&apos;s wider government assessment.
        </p>
        <div className="school-caution radiological-caution">
          <strong>Historical finding does not mean current hazard</strong>
          <p>
            A mapped point may represent a historical instrument reading, material
            later removed, an approximate former landmark, or a producer or storage
            facility. The record panel states which. Shaded assessment areas show
            where agencies surveyed—not where contamination has been established.
            A survey point alone does not prove that uranium-production residue was
            used at that specific property.
          </p>
        </div>
      </section>

      <section className="school-method radiological-method radiological-report-summary">
        <p className="eyebrow">What the 1986 DOE/ORNL report concluded</p>
        <h2>One survey, two different historical findings</h2>
        <div>
          <article>
            <h3>38 NFSS-related locations</h3>
            <p>
              DOE/ORNL attributed these locations to material connected with the
              Niagara Falls Storage Site. The report states that material exceeding
              the applicable FUSRAP guidelines was removed and the locations were
              remediated.
            </p>
          </article>
          <article>
            <h3>62 other survey anomalies</h3>
            <p>
              The report generally associated these readings with phosphate furnace
              slag used beneath asphalt, in driveways, or as gravel. They were not
              attributed to NFSS, but that does not mean the slag had no radioactivity.
            </p>
          </article>
        </div>
        <p className="measurement-caution">
          These are historical classifications. The 1986 report does not establish
          present-day conditions at an individual property, and a mapped survey point
          does not by itself prove which material remains there today.
        </p>
      </section>

      <RadiologicalInvestigationMap />
      <CurrentAssessmentNote />
      <RadiologicalDocumentArchive />

      <section className="school-method radiological-method">
        <p className="eyebrow">How the material streams differ</p>
        <h2>Production residue, slag, and fill are not one single material stream.</h2>
        <div>
          <article>
            <h3>Phosphate slag and fill</h3>
            <p>
              The 1986 DOE/ORNL report generally associated many non-NFSS readings
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
