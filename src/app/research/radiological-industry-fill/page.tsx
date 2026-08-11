import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
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

      <section className="radiological-current-overview" id="current-investigation">
        <div className="radiological-current-heading">
          <div>
            <p className="eyebrow">Ongoing investigation · status reported July 20, 2026</p>
            <h2>From regional screening to property-level answers</h2>
          </div>
          <p>
            An area of interest is a screening result—not a contaminated property.
            Each stage narrows the question, and not every location advances to the
            next step.
          </p>
        </div>

        <div className="radiological-current-metrics" aria-label="Current assessment metrics">
          <article><strong>≈380</strong><span>areas of interest identified</span></article>
          <article><strong>≈220</strong><span>cleared from additional testing</span></article>
          <article><strong>≈160</strong><span>ground surveys ongoing</span></article>
          <article><strong>Pending</strong><span>complete public property-level results</span></article>
        </div>

        <ol className="radiological-investigation-flow">
          <li><span>01</span><strong>Aerial survey</strong><small>2023–2024 regional screening</small></li>
          <li><span>02</span><strong>Roadway survey</strong><small>2025 targeted corridors</small></li>
          <li><span>03</span><strong>Area of interest</strong><small>signal selected for review</small></li>
          <li><span>04</span><strong>Ground survey</strong><small>fall 2025–present</small></li>
          <li><span>05</span><strong>Property access</strong><small>when closer work is needed</small></li>
          <li><span>06</span><strong>Detailed sampling</strong><small>only when warranted</small></li>
          <li><span>07</span><strong>Laboratory analysis</strong><small>identify material and isotopes</small></li>
          <li><span>08</span><strong>Risk assessment</strong><small>interpret possible exposure</small></li>
          <li><span>09</span><strong>Agency decision</strong><small>cleanup or no further action</small></li>
        </ol>

        <div className="radiological-known-unknown">
          <article>
            <h3>What the public record establishes</h3>
            <ul>
              <li>Radioactive industrial material was historically produced, handled, stored, and reused as fill in the region.</li>
              <li>The 1986 report separated 38 NFSS-related locations from 62 other anomalies.</li>
              <li>EPA later completed documented removals at several Niagara County properties.</li>
              <li>The current three-phase state and federal assessment remains active.</li>
            </ul>
          </article>
          <article>
            <h3>What is not yet publicly resolved</h3>
            <ul>
              <li>The total number of properties with material that presents a current risk.</li>
              <li>How many modern signals reflect natural geology versus man-made material.</li>
              <li>Which current areas precisely overlap the 100 numbered 1984 survey locations.</li>
              <li>The eventual number of cleanups or no-further-action decisions.</li>
            </ul>
          </article>
        </div>

        <div className="radiological-source-row">
          <a href="https://dec.ny.gov/environmental-protection/facilities-in-your-neighborhood/niagara-and-erie-county-radiological-assessment" target="_blank" rel="noreferrer">Current NYSDEC project page ↗</a>
          <a href="https://dec.ny.gov/sites/default/files/2026-07/FINAL%20Monday%20July%2020%20NECRA%20Community%20Meeting%20Presentation.pdf" target="_blank" rel="noreferrer">July 20, 2026 agency briefing ↗</a>
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

      <section className="radiological-aerial-evidence" id="aerial-record">
        <div className="radiological-aerial-heading">
          <p className="eyebrow">Aerial and roadway evidence</p>
          <h2>What agencies surveyed, then and now</h2>
          <p>
            These official figures show where agencies looked. Their outlines and
            route lines describe survey coverage—not confirmed contamination,
            property boundaries, or exposure areas.
          </p>
        </div>

        <div className="radiological-aerial-grid">
          <figure>
            <a href="https://lmpublicsearch.lm.doe.gov/LMSites/2711-NY.17-6_NFSS.pdf" target="_blank" rel="noreferrer">
              <Image
                src="/historical/radiological-1979-aerial-survey-coverage.jpg"
                alt="Historical federal map showing the Niagara Falls areas included in the September 1979 helicopter radiological survey"
                width={1441}
                height={1870}
                sizes="(max-width: 760px) 92vw, 44vw"
              />
            </a>
            <figcaption>
              <strong>1978–1979 federal aerial surveys.</strong> DOE/EG&amp;G first
              flew a broad fixed-wing survey in November 1978, then a closer
              helicopter follow-up in September 1979. This archival figure maps the
              follow-up survey areas. <a href="https://lmpublicsearch.lm.doe.gov/LMSites/2711-NY.17-6_NFSS.pdf" target="_blank" rel="noreferrer">Open the full report ↗</a>
            </figcaption>
          </figure>

          <figure>
            <a href="https://dec.ny.gov/sites/default/files/2026-07/necraophase11roadwaysurvey.pdf" target="_blank" rel="noreferrer">
              <Image
                src="/historical/radiological-2025-roadway-survey-coverage.jpg"
                alt="NYSDEC and EPA map showing roads included in the 2025 Phase II radiological roadway survey"
                width={1445}
                height={1870}
                sizes="(max-width: 760px) 92vw, 44vw"
              />
            </a>
            <figcaption>
              <strong>2025 targeted roadway survey.</strong> NYSDEC and EPA drove
              selected corridors after the regional aerial screening. The colored
              lines are roads surveyed, not identified cleanup sites. <a href="https://dec.ny.gov/sites/default/files/2026-07/necraophase11roadwaysurvey.pdf" target="_blank" rel="noreferrer">Open the official map ↗</a>
            </figcaption>
          </figure>
        </div>

        <aside className="radiological-modern-aerial-note">
          <strong>Modern aerial baseline</strong>
          <p>
            EPA&apos;s ASPECT aircraft surveyed roughly 1,000 square miles in late
            2023 and summer 2024 at about 500 feet above ground, collecting more
            than 500,000 data points. Agencies reported no condition requiring an
            immediate public-health response; analysis and follow-up continue.
          </p>
        </aside>
      </section>

      <RadiologicalInvestigationMap />
      <RadiologicalDocumentArchive />

      <section className="radiological-update-log" aria-labelledby="radiological-update-heading">
        <p className="eyebrow">Living investigation</p>
        <h2 id="radiological-update-heading">What changed</h2>
        <div>
          <p><strong>August 11, 2026</strong> Added the current investigation workflow, known/unknown findings, and official 1979 aerial and 2025 roadway survey figures.</p>
          <p><strong>July 31, 2026</strong> Consolidated the 100 historical survey points, later EPA removals, and producer or handler records.</p>
        </div>
      </section>

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
