import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  RadiologicalDocumentArchive,
  RadiologicalInvestigationMap,
} from "@/components/radiological-investigation-map";
import {
  probeCorroborationFindings,
  probeTestimonyRecords,
} from "@/data/radiological-investigation";
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
          <li><a href="#aerial-record"><span>01</span><strong>Aerial survey</strong><small>2023–2024 regional screening</small></a></li>
          <li><a href="#aerial-record"><span>02</span><strong>Roadway survey</strong><small>2025 targeted corridors</small></a></li>
          <li><a href="#radiological-map"><span>03</span><strong>Area of interest</strong><small>open the comparison map</small></a></li>
          <li><a href="#radiological-map"><span>04</span><strong>Ground survey</strong><small>see mapped public findings</small></a></li>
          <li><a href="#radiological-archive"><span>05</span><strong>Property access</strong><small>read the agency records</small></a></li>
          <li><a href="#radiological-archive"><span>06</span><strong>Detailed sampling</strong><small>review supporting documents</small></a></li>
          <li><a href="#radiological-archive"><span>07</span><strong>Laboratory analysis</strong><small>review technical evidence</small></a></li>
          <li><a href="#radiological-archive"><span>08</span><strong>Risk assessment</strong><small>read agency interpretations</small></a></li>
          <li><a href="#radiological-map"><span>09</span><strong>Agency decision</strong><small>compare documented outcomes</small></a></li>
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

      <section className="school-method radiological-method radiological-evidence-network" id="slag-distribution-evidence">
        <p className="eyebrow">Slag sources and distribution · evidence kept separate</p>
        <h2>The 1979 interviews expand the research network, but they do not prove one source for every hotspot.</h2>
        <div>
          <article>
            <h3>What the 1979 reports add</h3>
            <p>
              A private investigator recorded interviews describing Friona hauling,
              a Union Carbide dump near 56th and Pine streets, a Vanadium-area
              stockpile account, and reported slag use at former retail properties.
              These are useful
              contemporaneous leads, so the map shows them as yellow dashed markers.
              They are not agency sampling results or present-day hazard findings.
            </p>
          </article>
          <article>
            <h3>The source-attribution correction</h3>
            <p>
              A 2020 appellate decision summarizes a 2008 fingerprinting study that
              found slag from the Union Carbide predecessor facility markedly
              different from material recovered at the Niagara Falls Boulevard and
              Holy Trinity sites. The historical distribution account therefore
              cannot be used as proof that Union Carbide supplied every radioactive
              slag location.
            </p>
          </article>
          <article>
            <h3>Newer site-specific evidence</h3>
            <p>
              A 2017 assessment for 4435–4445 Military Road estimated about 500 tons
              of slightly elevated radiological fill. The record also preserves a
              prior non-confirmation by EPA and does not establish where that fill
              originated. It appears as a documented assessment pin, not a completed
              cleanup or source assignment.
            </p>
          </article>
        </div>
        <div className="radiological-source-row">
          <a href="https://investigativepost.org/wp-content/uploads/2017/02/Private-Investigator-Letters-to-Bowling-Alley-Owner-re-Sources-of-Slag-1979.pdf" target="_blank" rel="noreferrer">Read the 1979 investigator reports ↗</a>
          <a href="https://decisions.courts.state.ny.us/ad3/Decisions/2020/530766.pdf" target="_blank" rel="noreferrer">Read the 2020 source-fingerprint decision ↗</a>
          <a href="https://extapps.dec.ny.gov/data/DecDocs/C932174/Application.BCP.C932174.2017-07-01.Phase%202%20ESA%20-%20C%26S%20Engineers.pdf" target="_blank" rel="noreferrer">Read the Military Road assessment ↗</a>
        </div>
        <p className="measurement-caution">
          Evidence levels used here: A = agency sampling, removal, or laboratory
          record; B = official industrial or waste-history record; C = named
          contemporaneous testimony. No route line is drawn unless a reviewed record
          identifies the relationship directly.
        </p>
      </section>

      <section className="radiological-testimony-dossier" id="probe-1979-testimony">
        <div className="radiological-testimony-heading">
          <div>
            <p className="eyebrow">Original record dossier · all 12 scanned pages reviewed</p>
            <h2>Inside the 1979 Pine Bowl investigation</h2>
          </div>
          <p>
            Probe International Investigators Ltd. prepared reports dated May 10
            and June 8, 1979 for George Gellman of Consolidated Bowling
            Corporation. Evan P. Kenner authored the reports; Lewis Barone conducted
            many of the Niagara Falls interviews. The June supplement includes
            Kenner&apos;s June 4 interview with John Friona.
          </p>
        </div>

        <div className="radiological-testimony-timeline" aria-label="1979 investigation sequence">
          <article><span>April 26</span><strong>Investigation begins</strong><p>Kenner records meeting with the Pine Bowl owner and defining the question of who supplied or placed slag beneath the property.</p></article>
          <article><span>May 10</span><strong>First report</strong><p>Barone&apos;s contractor and supplier interviews identify possible sources, haulers, competing construction accounts, and named fill destinations.</p></article>
          <article><span>June 4</span><strong>John Friona interviewed</strong><p>Kenner records Friona&apos;s account of the Hackett/Friona arrangement, the 56th/Pine dump, and separately managed radioactive slag.</p></article>
          <article><span>June 8</span><strong>Supplement issued</strong><p>The second report adds the Friona interview, Vanadium/Pittsburgh Metallurgical leads, and unresolved people or records to pursue.</p></article>
        </div>

        <div className="radiological-testimony-guide">
          <strong>How to read these accounts</strong>
          <span><i className="is-context" /> Corroborated context</span>
          <span><i className="is-testimony" /> Testimony only</span>
          <span><i className="is-qualifier" /> Qualifying or competing account</span>
        </div>

        <div className="radiological-testimony-list">
          {probeTestimonyRecords.map((record) => (
            <details key={record.id} id={`testimony-${record.id}`}>
              <summary>
                <span className={`testimony-status ${record.status}`} aria-hidden="true" />
                <span><small>{record.reportDate}</small><strong>{record.witness}</strong><em>{record.subject}</em></span>
              </summary>
              <div>
                <section><h3>What the report records</h3><p>{record.account}</p></section>
                <section><h3>Independent check and limit</h3><p>{record.independentCheck}</p></section>
              </div>
            </details>
          ))}
        </div>

        <div className="radiological-open-leads">
          <h3>Names and records still requiring archival proof</h3>
          <p>
            C.A. Hackett job or corporate files; Harold Heinrich&apos;s employment role;
            Bruno Scrufari excavation records; Walter Kozdranski hauling records;
            Friona invoices or dispatch books; the former King&apos;s Plaza parcel; and
            the underlying 2008 slag-fingerprinting laboratory file. These remain
            research targets, not affirmative map claims.
          </p>
        </div>

        <a className="radiological-primary-document" href="https://investigativepost.org/wp-content/uploads/2017/02/Private-Investigator-Letters-to-Bowling-Alley-Owner-re-Sources-of-Slag-1979.pdf" target="_blank" rel="noreferrer">
          Open the complete 12-page original scan <span>PDF · May and June 1979 ↗</span>
        </a>
      </section>

      <section className="radiological-corroboration" aria-labelledby="corroboration-heading">
        <p className="eyebrow">Additional primary-record research</p>
        <h2 id="corroboration-heading">What later records add—and what they still do not prove</h2>
        <div>
          {probeCorroborationFindings.map((record) => (
            <article key={record.title}>
              <h3>{record.title}</h3>
              <p>{record.finding}</p>
              <aside><strong>Limit</strong>{record.caution}</aside>
              <a href={record.sourceUrl} target="_blank" rel="noreferrer">{record.sourceLabel} ↗</a>
            </article>
          ))}
        </div>
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
          <p><strong>August 12, 2026 · testimony dossier</strong> Added a complete witness-by-witness reading of the 12-page Probe record, federal corroboration and limits, and the documented Fashion Outlets/Sabre Park radiological-fill encounter.</p>
          <p><strong>August 12, 2026</strong> Added the 1979 slag-distribution testimony layer, the Military Road assessment pin, and the later source-fingerprint correction.</p>
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
