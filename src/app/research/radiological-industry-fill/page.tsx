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
import { EvidenceStatusBadge } from "@/components/evidence-status-badge";
import { InvestigationStats } from "@/components/investigation-stats";
import { ResearchSectionNav } from "@/components/research-section-nav";

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
        <p className="eyebrow"><EvidenceStatusBadge status="active-government-investigation" detail="Updated August 19, 2026" /></p>
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
        <InvestigationStats stats={[
          { stage: "Regional screening", value: "≈1,000", label: "square miles screened", asOfDate: "July 20, 2026" },
          { stage: "Aerial screening", value: "500,000+", label: "aerial data points evaluated", asOfDate: "July 20, 2026" },
          { stage: "Areas of interest", value: "≈380", label: "screening areas identified", asOfDate: "July 20, 2026" },
          { stage: "Ground review", value: "≈160", label: "areas advancing to ground surveys", asOfDate: "July 20, 2026" },
          { stage: "Property access", value: "≈470", label: "access agreements reported", asOfDate: "July 30, 2026" },
          { stage: "Weekly fieldwork", value: "200", label: "properties screened in the preceding week", asOfDate: "July 30, 2026" },
          { stage: "Deeper investigation", value: "6", label: "properties requiring additional work", asOfDate: "July 30, 2026" },
          { stage: "Precautionary action", value: "4", label: "families offered temporary relocation", asOfDate: "July 30, 2026" },
        ]} />
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

      <aside className="radiological-evidence-key" aria-label="Evidence level key"><strong>Evidence levels used here</strong><span><b>A</b> Agency sampling, removal, or laboratory finding</span><span><b>B</b> Official industrial or waste-history record</span><span><b>C</b> Named contemporaneous testimony requiring corroboration</span></aside>
      <ResearchSectionNav items={[
        { href: "#radiological-map", label: "Evidence map" },
        { href: "#current-investigation", label: "Current assessment" },
        { href: "#connected-investigations", label: "Sub-investigations" },
        { href: "#aerial-record", label: "Survey history" },
        { href: "#radiological-archive", label: "Documents" },
      ]} />

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

        <p className="measurement-caution">
          The consolidated figures above combine two dated snapshots of different
          stages in the same pipeline. Regional screening totals from July 20 and
          weekly property-level field progress reported July 30 are different measures
          and should not be added together.
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

      <section className="radiological-substories" id="connected-investigations">
        <div><p className="eyebrow">Connected investigations</p><h2>Four records, kept distinct.</h2><p>The active assessment provides the regional frame. These focused records preserve separate places, material chains, witnesses, and evidentiary limits.</p></div>
        <div className="radiological-substory-grid">
          <Link href="/research/radiological/southtowns-slag"><EvidenceStatusBadge status="research-in-progress" /><h3>Southtowns / Buffalo Slag</h3><p>Abbott Road, Republic Steel TENORM, and the documented construction-material chain.</p><strong>Read the full record →</strong></Link>
          <Link href="/research/radiological/black-creek-village"><EvidenceStatusBadge status="active-government-investigation" /><h3>Black Creek Village</h3><p>The separate 99th Street fill investigation and its still-pending radiological answer.</p><strong>Read the full record →</strong></Link>
          <Link href="/research/radiological/1979-pine-bowl-dossier"><EvidenceStatusBadge status="research-in-progress" /><h3>1979 Pine Bowl dossier</h3><p>The full witness-by-witness Probe Services record, with corroboration and explicit limits.</p><strong>Read the full record →</strong></Link>
          <a href="#radiological-map"><EvidenceStatusBadge status="documented" /><h3>1986 DOE/ORNL survey</h3><p>The 100-point historical reference dataset remains paired with the interactive map and downloads.</p><strong>Explore the survey →</strong></a>
        </div>
      </section>

      <section className="radiological-southtowns radiological-moved-section" id="southtowns-slag">
        <div className="radiological-southtowns-heading">
          <div>
            <p className="eyebrow">Southtowns slag investigation · newest to oldest</p>
            <h2>Old industrial slag is a testable lead—not a proven explanation for Southtown radiological signals.</h2>
          </div>
          <p>
            Government records now connect Buffalo-area iron and steel slag to
            TENORM, a historical processor, construction markets, and surviving
            Southtown infrastructure. They do not yet connect those facts into one
            proven radiological delivery route.
          </p>
        </div>

        <div className="radiological-southtowns-callout">
          <strong>The investigation question</strong>
          <p>
            Are current Southtown radiological areas of interest occurring where
            historical industrial slag was placed? Public property-level survey
            coordinates, laboratory results, construction records, and delivery
            records are needed to test that question.
          </p>
        </div>

        <ol className="radiological-southtowns-timeline">
          <li>
            <div><time>2025–2026</time><span className="evidence-status is-proven">Proven</span></div>
            <h3>Abbott Road contains documented slag; its radiological character remains untested publicly.</h3>
            <p>
              Erie County&apos;s December 2025 assessment says record plans, 1990
              bridge borings, and March 2025 project borings indicate slag beneath
              Abbott Road and around the Smoke Creek bridge abutments. The consultant
              recommended radiological screening and laboratory analysis if field
              readings are elevated. The report identifies TENORM as a potential
              concern; it does not report that the Abbott Road slag is TENORM.
            </p>
            <a href="https://www3.erie.gov/dpw/sites/www3.erie.gov.dpw/files/2026-01/5764.15-abbott-rd-draft-ippfdr-december-5-2025_2.pdf" target="_blank" rel="noreferrer">Read the Erie County assessment, PDF pages 56–58 ↗</a>
          </li>
          <li>
            <div><time>2015–2016</time><span className="evidence-status is-proven">Proven</span></div>
            <h3>Former Republic Steel slag was identified as low-level Ra-226 TENORM.</h3>
            <p>
              A March 2015 load excavated during RiverBend redevelopment triggered
              a recycling facility&apos;s radiation monitors and was returned to the
              site. The later DEC-filed work plan identifies subsurface iron- and
              steelmaking slag as the source of low-level TENORM and radium-226 as
              the principal isotope. This establishes radiological slag at the former
              Republic property—not the radiological character of every Republic load.
            </p>
            <a href="https://extapps.dec.ny.gov/data/DecDocs/V00619/Report.VCP.V00619.2016-05-02.Final%20RiverBend%20TENORM%20Reuse%20Work%20Plan%20.pdf" target="_blank" rel="noreferrer">Read the RiverBend TENORM work plan ↗</a>
          </li>
          <li>
            <div><time>March 1989</time><span className="evidence-status is-unresolved">Reason unresolved</span></div>
            <h3>Hamburg Engineering instructed a developer to specify “NO SLAG.”</h3>
            <p>
              The Town Engineering Department&apos;s Lincoln Square Apartments review
              required “NO SLAG” in every detail and stone within the Town
              right-of-way. The document proves the instruction existed by March 8,
              1989. It gives no reason, and WNY Atlas has found no evidence that the
              restriction was adopted because of radiation rather than engineering
              performance or another concern.
            </p>
            <a href="https://www.townofhamburgny.gov/Archive/ViewFile/Item/868" target="_blank" rel="noreferrer">Read the Hamburg Planning Board file, PDF page 14 ↗</a>
          </li>
          <li>
            <div><time>1988 record</time><span className="evidence-status is-proven">Proven</span></div>
            <h3>Republic and Hanna Furnace slag entered Buffalo Slag&apos;s construction-material stream.</h3>
            <p>
              A NYSDOT-commissioned site characterization says Buffalo Slag operated
              the Steelawanna property from about 1913 to 1983. It identifies Hanna
              Furnace “hard” slag and Republic Steel lightweight slag, mixed,
              crushed, screened, and sold for road base and embankment fill. A
              separate Hanna Furnace report says Buffalo Slag bought and removed
              Hanna slag, recovered iron, and sold the remainder for road bases or
              railroad ballast.
            </p>
            <div className="radiological-source-row">
              <a href="https://extapps.dec.ny.gov/data/DecDocs/V00319/Report.VCP.V00319.1988-11-01.Preliminary_Site_Characterization_Steelwanna_Ave-Buffalo_and_Lackawanna--Recra_Environmental-ocr.pdf" target="_blank" rel="noreferrer">Buffalo Slag / Steelawanna record ↗</a>
              <a href="https://extapps.dec.ny.gov/data/DecDocs/915029/Report.HW.915029.1988-08-22.Site_Characterization_and_Environmental_Assessment-Vol_%20I--Recra_Environmental-ocr.pdf" target="_blank" rel="noreferrer">Hanna Furnace record ↗</a>
            </div>
          </li>
          <li>
            <div><time>1983 bid</time><span className="evidence-status is-proven">Proven</span></div>
            <h3>Buffalo Slag offered Woodlawn-produced aggregate to the Town of Boston.</h3>
            <p>
              The municipal bid file lists crushed blast-furnace slag grades and
              crusher-run products available from Buffalo Slag&apos;s Woodlawn Plant
              No. 81 in Hamburg, with delivered prices and a representation that the
              aggregates met state transportation specifications. This documents a
              Southtown construction market; it does not identify a radiologically
              elevated batch or a particular placement location.
            </p>
            <a href="https://www.boston-ny.com/uploads/7/8/9/7/78977060/townboardminutes1983.pdf" target="_blank" rel="noreferrer">Read the Town of Boston bid file, PDF pages 97–100 ↗</a>
          </li>
          <li>
            <div><time>Before March 1994</time><span className="evidence-status is-supported">Statewide mechanism</span></div>
            <h3>DEC confirms the broader historical pathway beneath roads and construction projects.</h3>
            <p>
              DEC&apos;s TENORM policy history explains that slag and other
              TENORM-containing ore-refining byproducts were historically used as
              inexpensive construction backfill without consideration of their
              radioactivity. The statewide policy validates the mechanism, but it
              does not identify Buffalo Slag, Abbott Road, or any Southtown property
              as radiologically contaminated.
            </p>
            <a href="https://dec.ny.gov/news/environmental-notice-bulletin/2023-07-05/statewide-program-policy-management-of-soils-contaminated-with-technologically-enhanced-naturally-occurring-radioactive-materials-tenorm" target="_blank" rel="noreferrer">Read NYSDEC&apos;s TENORM policy notice ↗</a>
          </li>
        </ol>

        <div className="radiological-known-unknown radiological-southtowns-status">
          <article>
            <h3>Documented chain</h3>
            <ul>
              <li>Republic Steel and Hanna Furnace slag reached Buffalo Slag&apos;s processing stream.</li>
              <li>Buffalo Slag sold processed material for road base, embankment fill, ballast, and Southtown aggregate markets.</li>
              <li>Slag remaining at former Republic Steel was later identified as Ra-226 TENORM.</li>
              <li>Historical slag remains beneath Abbott Road and near the Smoke Creek bridge abutments.</li>
            </ul>
          </article>
          <article>
            <h3>Unresolved bridge</h3>
            <ul>
              <li>Whether TENORM-bearing Republic slag entered Buffalo Slag&apos;s construction products.</li>
              <li>Whether Abbott Road slag or another Southtown placement contains TENORM.</li>
              <li>Whether current radiological areas of interest overlap documented slag placements.</li>
              <li>Why Hamburg prohibited slag in Town right-of-way details by 1989.</li>
            </ul>
          </article>
        </div>

        <p className="measurement-caution">
          Niagara&apos;s documented phosphate-slag and federal radiological-material
          distribution history remains a separate evidence branch. WNY Atlas does
          not use it to infer that Niagara material traveled south or that
          Buffalo-area iron and steel slag had the same origin or isotope profile.
        </p>
      </section>

      <section className="school-method radiological-method radiological-black-creek radiological-moved-section" id="black-creek-village">
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

      <section className="school-method radiological-method radiological-evidence-network radiological-moved-section" id="slag-distribution-evidence">
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

      <section className="radiological-testimony-dossier radiological-moved-section" id="probe-1979-testimony">
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

      <section className="radiological-corroboration radiological-moved-section" aria-labelledby="corroboration-heading">
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

      <section className="school-method radiological-method" id="newly-verified-industry-records">
        <p className="eyebrow">Newly verified industry records</p>
        <h2>Three documented operations - and three boundaries the evidence does not cross.</h2>
        <div>
          <article>
            <h3>TAM: documented melt, unknown destination</h3>
            <p>
              <strong>Confirmed:</strong> NIOSH records a 1955 AEC pilot melt at
              Titanium Alloys Manufacturing using 40 pounds of uranium-contaminated
              stainless steel and 30 pounds of aluminum shipped from Mallinckrodt -
              about 90 grams of uranium in total. Input material reached 26,800
              dpm/100 cm², and the survey table identifies slag from the melt.
              Separate bench-scale uranium-compound work followed July 10-11, 1956.
            </p>
            <p>
              <strong>Research boundary:</strong> the reviewed public record does not
              say where the experimental slag ultimately went. TAM&apos;s nonradioactive
              zirconium-operation shipments to LOOW do not answer that question and
              are not used here to connect the melt to a later fill site.
            </p>
            <a href="https://www.cdc.gov/niosh/ocas/pdfs/sec/titanalloy/titanpeter-190-r0.pdf" target="_blank" rel="noreferrer">Read NIOSH SEC-00190 ↗</a>
          </article>
          <article>
            <h3>Tonawanda Am-241: a separate sewer pathway</h3>
            <p>
              <strong>Confirmed:</strong> New York State Archives describes EAD
              Metallurgy&apos;s approximately 1977-1983 production of Am-241 foil elements
              for smoke detectors and releases to the sanitary sewer that contaminated
              sewer lines, the sewage-treatment plant, and landfill. A federal
              administrative record traces the material from sewer to treatment sludge,
              through the municipal sludge incinerator, and into the eastern landfill.
            </p>
            <p>
              <strong>Pathway boundary:</strong> this later americium history is not the
              Linde uranium story and is not part of the Niagara County solid-slag
              distribution record.
            </p>
            <a href="https://findingaids.nysed.gov/do/a1bb63f9-e4a2-5676-8c2c-7c944838ec53" target="_blank" rel="noreferrer">Open New York State Archives series 20691 ↗</a>
            <a href="https://lmpublicsearch.lm.doe.gov/SiteDocs/T-335.pdf" target="_blank" rel="noreferrer">Read the federal landfill pathway record ↗</a>
          </article>
          <article>
            <h3>Carborundum: two federal-work periods</h3>
            <p>
              <strong>Confirmed:</strong> NIOSH documents experimental centerless
              grinding of ten uranium slugs, totaling approximately 30 pounds, from
              June through September 1943 and a separate 1959-1967 AEC
              fuel-development program involving uranium and mixed uranium/plutonium
              carbide and related fuel materials.
            </p>
            <p>
              <strong>Research boundary:</strong> the work-site record strengthens the
              industrial history but does not prove that Carborundum supplied the
              material at any particular off-site slag or fill location.
            </p>
            <a href="https://www.cdc.gov/niosh/ocas/pdfs/tbd/carbco-r0-508.pdf" target="_blank" rel="noreferrer">Read the NIOSH Carborundum site profile ↗</a>
          </article>
        </div>
      </section>

      <section className="school-method radiological-method" id="linde-waste-pathways">
        <p className="eyebrow">One plant, distinct material routes</p>
        <h2>Linde&apos;s solid residues and liquid effluent did not follow one path.</h2>
        <p>
          Federal records describe several routes from Linde&apos;s Manhattan Project-era
          uranium processing. They belong in one history, but they are not interchangeable
          evidence and should not be drawn as one continuous shipment chain.
        </p>
        <div>
          <article>
            <h3>Solid residues and fill</h3>
            <p>
              Solid uranium-processing residues were stored or moved among the Linde,
              Ashland, Seaway and Tonawanda Landfill FUSRAP records. Each destination
              retains its own chain-of-custody and cleanup findings.
            </p>
          </article>
          <article>
            <h3>Sanitary-sewer discharge</h3>
            <p>
              Linde liquid process wastes were initially discharged to town sewers.
              This is a liquid-effluent route, not proof that the same solid residues
              entered the sewer or treatment sludge.
            </p>
          </article>
          <article>
            <h3>On-site disposal wells</h3>
            <p>
              EPA&apos;s 1982 overview reports that about 37 million gallons of wastewater
              containing radioactive materials were injected into five approximately
              150-foot-deep wells at Linde.
            </p>
          </article>
          <article>
            <h3>Storm drainage to Two Mile Creek</h3>
            <p>
              When wells plugged or overflowed, federal records say effluent could be
              diverted through a former storm-drainage ditch to Two Mile Creek. A 1981
              survey generally found sampled creek media comparable to baseline locations;
              that result does not erase the documented historical route.
            </p>
          </article>
        </div>
        <p>
          EAD Metallurgy&apos;s later Am-241 sewer-to-sludge-to-incinerator-to-landfill route
          is another distinct Tonawanda history; it is not a continuation of Linde&apos;s
          uranium-processing pathway.
        </p>
        <p>
          <a href="https://lmpublicsearch.lm.doe.gov/LMSites/2667-NY.08-5.pdf" target="_blank" rel="noreferrer">Read the 1981 Linde liquid-pathway survey ↗</a>{" · "}
          <a href="https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000TE3Z.TXT" target="_blank" rel="noreferrer">Read EPA&apos;s 1982 Niagara Frontier overview ↗</a>
        </p>
      </section>

      <RadiologicalDocumentArchive />

      <section className="radiological-update-log" aria-labelledby="radiological-update-heading">
        <p className="eyebrow">Living investigation</p>
        <h2 id="radiological-update-heading">What changed</h2>
        <div>
          <p><strong>September 14, 2026 · source comparison completed</strong> Added the TAM source quantity and survey measurements, expanded the EAD sewer-to-sludge-to-landfill chain with public government records, and clarified the Carborundum material and operating periods. Court-filed Upper Mountain Road evidence remains separately labeled and does not prove disposition of TAM&apos;s 1955 experimental slag.</p>
          <p><strong>September 14, 2026 · TAM, Carborundum, and Tonawanda Am-241</strong> Added independently verified federal and state records, kept the TAM slag destination unresolved, and separated solid slag/fill evidence from the EAD sanitary-sewer and municipal-waste pathway.</p>
          <p><strong>September 14, 2026 · research hub restructure</strong> Separated the Southtowns slag, Black Creek Village, and 1979 Pine Bowl investigations into focused, linkable records; consolidated the current investigation statistics and made the 100-point survey list collapsible.</p>
          <p><strong>August 19, 2026 · Southtowns slag investigation</strong> Added the Abbott Road slag evidence, former Republic Steel Ra-226 TENORM finding, Buffalo Slag supply chain, Woodlawn municipal-product record, Hamburg no-slag instruction, and the explicit unresolved link between historical placements and current radiological areas of interest.</p>
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
