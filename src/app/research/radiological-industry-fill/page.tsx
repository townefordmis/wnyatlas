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
        <p className="eyebrow">Living government investigation · updated August 17, 2026</p>
        <h1>Niagara–Erie radiological investigation</h1>
        <p className="dek">
          EPA, NYSDEC, and NYSDOH are conducting a large, active search for
          radiological material across Niagara and Erie counties. The work covers
          roughly 1,000 square miles, builds on more than 500,000 modern aerial data
          points, and has moved from aircraft and roadway screening into neighborhood
          surveys, residential testing, laboratory analysis, temporary relocations,
          and cleanup planning. The historical slag and uranium records below explain
          why investigators are finding a regional problem rather than one isolated site.
        </p>
        <div className="radiological-current-metrics" aria-label="Scale of the ongoing radiological investigation">
          <article><strong>≈1,000</strong><span>square miles screened</span></article>
          <article><strong>500,000+</strong><span>modern aerial data points</span></article>
          <article><strong>≈380</strong><span>areas of interest identified</span></article>
          <article><strong>≈160</strong><span>ground reviews identified in July</span></article>
        </div>
        <div className="school-caution radiological-caution">
          <strong>This is ongoing—not a completed historical survey</strong>
          <p>
            The map combines the active regional assessment with the older evidence
            investigators are using to understand it. A screening signal is not the
            same as a confirmed contaminated property, but confirmed elevated
            residential findings and temporary relocations mean this work cannot be
            presented as history alone. Every marker states whether it represents an
            old reading, completed removal, active review, or unresolved lead.
          </p>
        </div>
        <a className="radiological-map-jump" href="#radiological-map">
          Open the interactive evidence map <span>↓</span>
        </a>
      </section>

      <RadiologicalInvestigationMap />

      <section className="radiological-current-overview" id="current-investigation">
        <div className="radiological-current-heading">
          <div>
            <p className="eyebrow">Massive ongoing investigation · latest public figures remain fluid</p>
            <h2>Aircraft found the pattern; field teams are now working property by property.</h2>
          </div>
          <p>
            An area of interest is a screening result—not a contaminated property.
            Each stage narrows the question, and not every location advances to the
            next step.
          </p>
        </div>

        <div className="radiological-current-metrics" aria-label="Current assessment metrics">
          <article><strong>≈470</strong><span>property-access agreements reported July 30</span></article>
          <article><strong>200</strong><span>properties screened during the preceding week</span></article>
          <article><strong>6</strong><span>properties then requiring deeper investigation</span></article>
          <article><strong>4</strong><span>families offered precautionary relocation</span></article>
        </div>

        <p className="measurement-caution">
          These figures are dated snapshots from a rapidly changing investigation,
          not final totals. Earlier agency briefing material reported approximately
          380 regional areas of interest, about 220 not requiring additional testing,
          and about 160 advancing through ground surveys. Later field updates counted
          property agreements and completed screens, which are different measures and
          should not be added together.
        </p>

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
              <li>DEC separately confirms an active investigation of industrial fill uncovered at a 99th Street property in Black Creek Village.</li>
            </ul>
          </article>
          <article>
            <h3>What is not yet publicly resolved</h3>
            <ul>
              <li>The total number of properties with material that presents a current risk.</li>
              <li>How many modern signals reflect natural geology versus man-made material.</li>
              <li>Which current areas precisely overlap the 100 numbered 1984 survey locations.</li>
              <li>The eventual number of cleanups or no-further-action decisions.</li>
              <li>Whether the newly investigated Black Creek Village fill contains radiological material or is connected to Love Canal.</li>
            </ul>
          </article>
        </div>

        <div className="radiological-source-row">
          <a href="https://dec.ny.gov/environmental-protection/facilities-in-your-neighborhood/niagara-and-erie-county-radiological-assessment" target="_blank" rel="noreferrer">Current NYSDEC project page ↗</a>
          <a href="https://dec.ny.gov/sites/default/files/2026-07/FINAL%20Monday%20July%2020%20NECRA%20Community%20Meeting%20Presentation.pdf" target="_blank" rel="noreferrer">July 20, 2026 agency briefing ↗</a>
          <a href="https://spectrumlocalnews.com/nys/buffalo/public-safety/2026/07/30/epa--dec-share-update-on-continued-radiological-assessment-in-niagara-county" target="_blank" rel="noreferrer">July 30 field update ↗</a>
          <a href="https://www.wnypapers.com/news/article/featured/2026/07/24/166614/epa-state-dec-officials-meet-with-town-of-niagara-residents-to-address-radioactivity" target="_blank" rel="noreferrer">Property-testing and resident briefing ↗</a>
        </div>
      </section>

      <section className="school-method radiological-method radiological-black-creek" id="black-creek-village">
        <p className="eyebrow">Black Creek Village · inside the living Niagara investigation</p>
        <h2>Black Creek belongs in the ongoing regional story—not in a separate historical footnote.</h2>
        <div>
          <article>
            <h3>The regional investigation is the controlling present-day context</h3>
            <p>
              Black Creek Village sits within the Niagara Falls landscape now being
              reexamined through the Niagara–Erie assessment. The modern program is
              comparing aerial and roadway signals with historical radiological
              records, then moving selected areas into ground surveys, property access,
              detailed sampling, laboratory analysis, risk evaluation, and possible
              removal. This is the active investigation that frames every newer finding.
            </p>
          </article>
          <article>
            <h3>Black Creek also has an active property investigation</h3>
            <p>
              Residents reported carbon rods, dark fill, and other unusual material
              uncovered during a pool project at a 99th Street property near the Love
              Canal containment area. DEC told the Niagara Gazette that its
              investigation of that industrial fill is continuing. Earlier state files
              document additional affected fill and removal work on Black Creek Drive
              and 100th Street, making the new discovery part of a continuing
              neighborhood evidence record rather than an isolated complaint.
            </p>
          </article>
          <article>
            <h3>The property-level radiological answer is still pending</h3>
            <p>
              The regional investigation has confirmed elevated radiological material
              at some residential properties and led to precautionary relocations.
              Public agency material reviewed by WNY Atlas has not yet published a
              laboratory result assigning thorium or another radionuclide to the 99th
              Street fill. Black Creek therefore remains explicitly inside the active
              investigation chapter while its own radiological classification awaits
              a reproducible property-specific result.
            </p>
          </article>
        </div>
        <p className="measurement-caution">
          This evidence standard affects the pin, not the importance of the story.
          Black Creek is now tracked as part of the massive ongoing investigation. A
          property-level contamination marker will be added when an agency or
          reproducible laboratory record supplies the location and result.
        </p>
        <div className="radiological-source-row">
          <a href="https://www.cnhi.com/rss_feed/old-dec-report-heightens-familys-fears-as-they-seek-testing-near-love-canal/" target="_blank" rel="noreferrer">Read the July 2026 local investigation report ↗</a>
          <a href="https://extapps.dec.ny.gov/data/DecDocs/932020/Report.HW.932020.1990-11-15.STATUS_OF_REMEDIAL_ACTIVITIES.pdf" target="_blank" rel="noreferrer">Read the 1990 state Area 4 record ↗</a>
          <a href="https://extapps.dec.ny.gov/data/DecDocs/932020/Report.HW.932020.1991-11-13.STATUS_OF_RA.pdf" target="_blank" rel="noreferrer">Read the 1991 removal decision ↗</a>
          <a href="https://dec.ny.gov/environmental-protection/facilities-in-your-neighborhood/niagara-and-erie-county-radiological-assessment" target="_blank" rel="noreferrer">Follow the regional radiological assessment ↗</a>
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
            <h3>56th/Pine now has two evidence levels</h3>
            <p>
              An official remedial-investigation history documents Union Carbide
              furnace slag, hydrated lime, and miscellaneous plant-waste disposal at
              a 56th Street and Pine Avenue facility. That supports a Level B marker.
              John Friona&apos;s separate account of a fenced radioactive-slag burial
              remains Level C because no reviewed agency record locates or confirms
              that burial cell.
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
              slag location. The underlying laboratory file has not been recovered
              from a public repository, so this page reports the court&apos;s conclusion
              without adding unreviewed analytical detail.
            </p>
          </article>
          <article>
            <h3>Newer site-specific evidence and a full Sabre Park story</h3>
            <p>
              A 2017 assessment for 4435–4445 Military Road estimated about 500 tons
              of slightly elevated radiological fill. The record also preserves a
              prior non-confirmation by EPA and does not establish where that fill
              originated. It appears as a documented assessment pin, not a completed
              cleanup or source assignment. The 2014 Fashion Outlets / Sabre Park
              encounter now links to a full main-map story that keeps its 1978 fill,
              1989 mercury removal, 1994-95 waste response, and radiological work
              separate.
            </p>
          </article>
        </div>
        <div className="radiological-source-row">
          <a href="https://investigativepost.org/wp-content/uploads/2017/02/Private-Investigator-Letters-to-Bowling-Alley-Owner-re-Sources-of-Slag-1979.pdf" target="_blank" rel="noreferrer">Read the 1979 investigator reports ↗</a>
          <a href="https://decisions.courts.state.ny.us/ad3/Decisions/2020/530766.pdf" target="_blank" rel="noreferrer">Read the 2020 source-fingerprint decision ↗</a>
          <a href="https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/cri1.pdf" target="_blank" rel="noreferrer">Read the official 56th/Pine disposal history ↗</a>
          <a href="https://extapps.dec.ny.gov/data/DecDocs/C932174/Application.BCP.C932174.2017-07-01.Phase%202%20ESA%20-%20C%26S%20Engineers.pdf" target="_blank" rel="noreferrer">Read the Military Road assessment ↗</a>
          <Link href="/sites/fashion-outlets-sabre-park">Open the full Sabre Park site story →</Link>
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

      <RadiologicalDocumentArchive />

      <section className="radiological-update-log" aria-labelledby="radiological-update-heading">
        <p className="eyebrow">Living investigation</p>
        <h2 id="radiological-update-heading">What changed</h2>
        <div>
          <p><strong>August 17, 2026 · investigation scale corrected</strong> Rebuilt the page opening around the active 1,000-square-mile Niagara–Erie assessment, modern aerial dataset, intensive residential screening, confirmed elevated properties, and precautionary relocations; moved Black Creek firmly inside that living investigation.</p>
          <p><strong>August 17, 2026 · Black Creek Village watch</strong> Added the active 99th Street industrial-fill investigation, the 1990–1993 Black Creek Drive cleanup record, and the still-pending property-specific radiological classification within the regional assessment story.</p>
          <p><strong>August 12, 2026 · map-first navigation</strong> Moved the interactive evidence map directly below the introduction so visitors reach locations and records before the long-form research sections.</p>
          <p><strong>August 12, 2026 · Sabre Park and 56th/Pine</strong> Added the full Fashion Outlets / former Sabre Park main-map history, upgraded 56th/Pine with a separate official Level B disposal record, and documented the continuing limit on the unrecovered 2008 fingerprinting laboratory file.</p>
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
