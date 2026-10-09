import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { LeadReadingNav } from "@/components/lead-reading-nav";
import { LeadHistoryMap } from "@/components/lead-history-map";
import { historicalLeadRecords, leadPlaceRecords } from "@/data/lead-investigation";
import { historySources as s, leadChapters, leadFacilities, leadTimeline, type LeadSource } from "@/data/lead-history";
import { buffaloLineInventory, buffaloWaterSources } from "@/data/buffalo-lead-water";
import { featuredSites } from "@/data/featured-sites";
import styles from "./lead.module.css";

export const metadata: Metadata = {
  title: "Lead: The Poison Western New York Inherited",
  description: "Buffalo's white-lead factories, rental housing, gasoline, garden pesticides, batteries and buried water lines: a sourced Western New York history through 2026.",
  alternates: { canonical: "/research/lead" },
  openGraph: { type: "article", url: "/research/lead", title: "Lead: The Poison Western New York Inherited | WNYAtlas", description: "Lead regulation changed faster than the built environment." },
};
function Source({ source }: { source: LeadSource }) {
  return <a className={styles.source} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>;
}
function Sources({ sources }: { sources: readonly LeadSource[] }) {
  return <div className={styles.citations}>{sources.map(source => <Source key={source.url} source={source} />)}</div>;
}
const facilityFields = [
  ["operation", "Who operated, when, and what they made"], ["leadRole", "How lead was involved"],
  ["wasteAndFindings", "Waste and investigation findings"], ["succession", "Closure, sale and successors"],
  ["cleanup", "Cleanup and remaining controls"], ["now", "Later use and the record available in 2026"],
] as const;
const paintChapterForFacility: Record<string, string> = { "mcdougall-kellogg-elk-street": "paint-industry", "pratt-lambert-scajaquada": "other-paint" };
const facilityOverview: Record<string, { role: string; remedy: string; reuse: string; gap: string }> = {
  "mcdougall-kellogg-elk-street": { role: "White-lead pigment and buried paint waste", remedy: "Cover and stabilization; continuing controls", reuse: "Managed land; dated 2024 ownership account", gap: "Factory-to-parcel alignment and current tenants" },
  "pratt-lambert-scajaquada": { role: "Paint production; lead-specific processes unverified", remedy: "Limited soil work recorded; complete remedy unresolved", reuse: "Two historical industrial properties", gap: "Buffalo formulas and controls at each parcel" },
  "michael-heyman-east-ferry": { role: "Zinc/lead smelting and ash disposal", remedy: "136,234 tons removed; completion January 2008", reuse: "Townhomes at 858, built 2013", gap: "Boundaries and present use of 856" },
  "former-electruk-battery": { role: "Lead-acid battery production", remedy: "2012 completion certificate; continuing controls", reuse: "DEC identifies Moley Magnetics", gap: "Later occupancy and control changes" },
  "tract-ii-highland-avenue": { role: "Battery manufacture and lead-affected fill", remedy: "Separate tract remedies; Tract II completed 2018", reuse: "Managed redevelopment properties", gap: "Tract I completion and current occupants" },
};
function Process({ title, steps, source }: { title: string; steps: string[]; source: LeadSource }) {
  return <figure className={styles.process}><figcaption>{title}</figcaption><ol>{steps.map(step => <li key={step}>{step}</li>)}</ol><Sources sources={[source]} /></figure>;
}
const pathways = [
  { title: "Paint and dust", text: "Deterioration or disturbance → chips and microscopic dust → hands, toys and ingestion.", source: s.home },
  { title: "Gasoline and soil", text: "Historical vehicle exhaust → atmospheric deposition → soil and tracked-in dust.", source: s.soil },
  { title: "Garden pesticides", text: "Historical lead-arsenate application → lead and arsenic in soil → soil contact, dust and potentially contaminated produce. Local use requires evidence.", source: s.gardenGuide },
  { title: "Industrial waste", text: "Pigment waste, smelter ash or battery materials → locally documented soil/fill. Attribution requires site evidence.", source: s.elk },
  { title: "Drinking water", text: "Corrosion of a lead-containing service line, solder or fixture → tap water.", source: s.water },
  { title: "Take-home exposure", text: "Workplace lead dust → clothing, boots, skin or vehicles → the household.", source: s.history },
];
export default function LeadResearchPage() {
  const mapPoints = leadFacilities.flatMap(facility => {
    const site = featuredSites.find(site => site.id === facility.id);
    return site ? [{ id: facility.id, name: facility.name, location: facility.location, coordinates: site.coordinates, note: facility.now }] : [];
  });
  return <main>
    <SiteHeader />
    <header className={`${styles.hero} ${styles.historyHero}`}>
      <p className="eyebrow">Western New York · An industrial and housing history</p>
      <h1>Lead: The Poison Western New York Inherited</h1>
      <p className={styles.dek}>The danger was known long before the regulations arrived.</p>
      <p>Paint, gasoline, pesticides, pipes, smelters and batteries left lead in Western New York&apos;s homes, soil and infrastructure. The legacy outlasted the products—and often the industries.</p>
      <p>Follow the household pathways, the industrial properties or the policy decisions. Each connects Buffalo&apos;s history with the unfinished work of removing lead hazards.</p>
      <Sources sources={[s.history, s.health, s.elk, s.inventory, s.eastFerry, s.hud]} />
      <p className={styles.reviewed}>Research reviewed October 7, 2026 · Historical-site follow-up October 9, 2026 · Findings retain their own dates</p>
      <div className={styles.heroFacts}>
        <a href="#water"><strong>33,600</strong><span>identified lead service lines<br />December 2025 inventory</span></a>
        <a href="#industrial-sites"><strong>136,234 tons</strong><span>lead-contaminated soil removed<br />East Ferry cleanup</span></a>
        <a href="#public-housing"><strong>2026</strong><span>HUD audit of Buffalo<br />public-housing oversight</span></a>
      </div>
      <nav className={styles.readingPaths} aria-label="Choose a reading path">
        <a href="#housing"><span>Homes, water and soil</span><strong>What can remain at an older property?</strong><p>Start with paint and dust, then explore service lines and the history of yard soil.</p></a>
        <a href="#industrial-sites"><span>Industry and cleanup</span><strong>What happened at these properties?</strong><p>Compare documented lead uses, remedies, later uses and unanswered questions.</p></a>
        <a href="#inspections"><span>Policy and oversight</span><strong>How did Buffalo respond?</strong><p>Follow rental inspections, enforcement, public housing and unequal burdens.</p></a>
      </nav>
    </header>
    <LeadReadingNav />
    <div className={styles.content}>
      {leadChapters.map(chapter => <section id={chapter.id} key={chapter.id} className={`${styles.section} ${styles.chapter}`}>
        <p className="eyebrow">{chapter.eyebrow}</p><h2>{chapter.title}</h2>
        {(chapter.id === "paint-industry" ? [{ text: "Historical maps place white-lead and paint firms in the Elk Street district. Later investigators identified lead oxide and lead carbonate in buried paint-like waste and attributed it most likely to those industries. The findings document a local pigment legacy; they do not identify the source of paint in an individual home.", sources: [s.elk] }] : chapter.id === "other-paint" ? [{ text: "Pratt & Lambert operated separate paint/resin and lacquer plants along Scajaquada Creek. Manufacturing and waste records are documented, but lead-specific Buffalo products and pigment processes remain unverified. Its two properties need their own evidence.", sources: [s.pratt, s.creek] }] : chapter.paragraphs).map((paragraph, index) => <div className={styles.prose} key={index}>{"heading" in paragraph && paragraph.heading && <h3>{paragraph.heading}</h3>}<p>{paragraph.text}</p><Sources sources={paragraph.sources} /></div>)}
        {chapter.id === "paint-industry" && <a className={styles.source} href="#facility-mcdougall-kellogg-elk-street">Read the property record and historical documents ↓</a>}
        {chapter.id === "other-paint" && <a className={styles.source} href="#facility-pratt-lambert-scajaquada">Read the two-property record and research gaps ↓</a>}
        {chapter.id === "paint-industry" && <figure className={styles.process}>
          <figcaption>From pigment production to a household exposure pathway</figcaption>
          <ol>{["Lead metal", "White-lead pigment", "Paint on a house", "Deterioration and friction dust", "Childhood exposure"].map(step => <li key={step}>{step}</li>)}</ol>
          <p>A general process chain; it does not identify the manufacturer of paint in a particular house.</p>
        </figure>}
        {chapter.id === "housing" && <Process title="How old paint becomes household dust" steps={["Existing coating", "Wear or disturbance", "Dust on surfaces", "Hands and ingestion"]} source={s.home} />}
        {chapter.id === "gasoline" && <Process title="How a past use can become a soil legacy" steps={["Leaded fuel", "Historical emissions", "Deposition in soil", "Dust carried indoors"]} source={s.soil} />}
        {chapter.id === "garden" && <aside className={styles.caution}>
          <strong>From old orchard to present neighborhood: the mapping work still ahead</strong>
          <p>Compare historical orchard rows, nursery grounds, vineyards and truck farms with later aerials, deeds and subdivision plats. Then seek crop-specific spray records and soil sampling. The northern Niagara orchard belt and Erie County agricultural records are research starting points; no subdivision is identified here as pesticide-contaminated.</p>
          <ol><li>Locate and date the former agricultural footprint.</li><li>Establish which pesticides were used and when.</li><li>Trace subdivision, grading and imported fill.</li><li>Use lead and arsenic sampling to assess present conditions.</li></ol>
          <p>The Atlas map below continues to show documented industrial sites. Former farm footprints will need their own evidence before they can be mapped responsibly.</p>
        </aside>}
        {chapter.id === "public-housing" && <aside className={styles.caution}><strong>Keep the audit&apos;s denominator.</strong><p>The assessment and disclosure percentages concern 69 sampled units containing lead-based paint. They are not estimates for the entire BMHA housing inventory.</p></aside>}
      </section>)}
      <section id="water" className={styles.section}>
        <p className="eyebrow">12 · The underground legacy</p><h2>The service line stayed after plumbing rules changed.</h2>
        <figure className={styles.inventoryFigure}>
          <figcaption>Buffalo Water · 76,457 service lines<br /><span>Inventory certified December 11, 2025; a dated classification, not a live replacement counter.</span></figcaption>
          <div className={styles.inventoryBar} aria-hidden="true">{buffaloLineInventory.map((row, i) => <span key={row.label} className={styles[`inventoryColor${i}`]} style={{ width: `${row.count / 76457 * 100}%` }} />)}</div>
          <div className={styles.inventoryWrap}><table className={styles.inventory}>
            <caption>Known lead and unknown material remain separate categories.</caption>
            <thead><tr><th scope="col">Classification</th><th scope="col">Lines</th><th scope="col">Meaning</th></tr></thead>
            <tbody>{buffaloLineInventory.map((row, i) => <tr key={row.label}><th scope="row"><span aria-hidden="true" className={`${styles.inventorySwatch} ${styles[`inventoryColor${i}`]}`} />{row.label}</th><td>{row.count.toLocaleString("en-US")}</td><td>{row.note}</td></tr>)}</tbody>
            <tfoot><tr><th scope="row">Total</th><td>76,457</td><td>Public and private portions are not added as separate lines.</td></tr></tfoot>
          </table></div><Sources sources={[s.inventory]} />
        </figure>
        <aside className={styles.keyFinding}><strong>Pipe material and water quality answer different questions.</strong><p>This dated inventory classifies connections. It does not measure the lead concentration at a household tap.</p><Sources sources={[s.inventory, s.water]} /></aside>
        <div className={styles.prose}><p>The service line is the smaller connection from a street water main to a property, potentially with portions on either side of the property boundary. Lead can also be present in solder, fittings and fixtures. Corrosion can release lead into water; a modern treatment plant does not replace the old connection beneath a house.</p><Sources sources={[s.water]} /></div>
        <div className={styles.prose}><p>The Safe Drinking Water Act&apos;s 1986 amendments restricted lead plumbing materials, with requirements effective in June 1988. EPA adopted the Lead and Copper Rule in 1991. Those measures did not excavate Buffalo&apos;s existing service lines.</p><Sources sources={[s.federalTimeline, s.laws]} /></div>

        <div className={styles.prose}><p>Buffalo Water reports phosphate treatment for corrosion control. It can reduce lead release without changing the pipe&apos;s material. A lead line is a potential source; actual tap-water lead depends on chemistry, plumbing, stagnation and disturbance. EPA&apos;s health goal is zero. Pipe classification and a water sample answer different questions.</p><Sources sources={[s.waterReport, s.water]} /></div>
        <div className={styles.prose}><p>Buffalo&apos;s modern code retains historical language about lead services and flexible connections. It does not settle when lead was first allowed, whether it was required for particular pipe sizes, or when local specifications stopped permitting installations. Those dates remain archival research questions.</p><Sources sources={[s.plumbingCode]} /></div>
        <aside className={styles.record}><h3>Replacement progress and the work ahead</h3><p>The city reports more than 700 properties served by its $10 million expansion completed in June 2024. Later board decisions and 2026 funding announcements retain their own dates; announced money cannot be counted as completed pipe removal.</p><Sources sources={[buffaloWaterSources.recovery, buffaloWaterSources.minutes, buffaloWaterSources.grant]} /><Link className={styles.source} href="/research/lead/buffalo-water-lines">Read the water-system history, program milestones and household guidance →</Link></aside>
      </section>
      <section id="industrial-sites" className={styles.section}>
        <p className="eyebrow">13 · Smelters, pigment and batteries</p><h2>Follow the property through cleanup and reuse.</h2>
        <p>These facilities show different lead processes and different endings. Cleanup boundaries, historical factory footprints and modern tenants must be checked separately. A remediated property&apos;s past is not a claim of present exposure.</p>
        <div className={styles.inventoryWrap}><table className={`${styles.inventory} ${styles.directory}`}>
          <caption>Compare the records first; open a property below for sources and full history.</caption>
          <thead><tr><th scope="col">Property / lead role</th><th scope="col">Remedy status</th><th scope="col">Later use</th><th scope="col">Open question</th></tr></thead>
          <tbody>{leadFacilities.map(facility => { const overview = facilityOverview[facility.id]; return <tr key={facility.id}><th scope="row"><a href={`#facility-${facility.id}`}>{facility.name}</a><p>{overview.role}</p></th><td>{overview.remedy}</td><td>{overview.reuse}</td><td>{overview.gap}</td></tr>; })}</tbody>
        </table></div>
        <div className={styles.records}>{leadFacilities.map(facility => <details className={styles.record} id={`facility-${facility.id}`} key={facility.id}>
          <summary className={styles.recordSummary}>
          <p className={styles.status}>{facility.evidenceStatus === "well-documented" ? "Documented atlas record" : "Research in progress · lead-specific production unresolved"}</p>
          <h3>{facility.name}</h3><p className={styles.location}>{facility.location}</p>
          <p className={styles.limit}><strong>Research gaps:</strong> {facilityOverview[facility.id].gap}</p><span className={styles.expandHint}>Open history, remedy and sources</span></summary>
          <dl className={styles.facilityFacts}>{facilityFields.map(([key, label]) => <div key={key}><dt>{label}</dt><dd>{facility[key]}</dd></div>)}</dl>
          <p className={styles.limit}><strong>Research gaps:</strong> {facility.gaps}</p>
          {paintChapterForFacility[facility.id] && <details className={styles.archive}><summary>Historical documents and company chronology</summary>{leadChapters.find(chapter => chapter.id === paintChapterForFacility[facility.id])?.paragraphs.map((paragraph, index) => <div className={styles.prose} key={index}><p>{paragraph.text}</p><Sources sources={paragraph.sources} /></div>)}</details>}
          <Sources sources={facility.sources} /><Link className={styles.source} href={`/sites/${facility.id}`}>Open the full Atlas property record →</Link>
        </details>)}</div>
        <details className={styles.archive}><summary>Full comparison of lead use, cleanup and later use</summary>
        <div className={styles.inventoryWrap}><table className={`${styles.inventory} ${styles.thenNow}`}>
          <caption>Then and now · later use is identified only to the scope supported by the cited record</caption>
          <thead><tr><th scope="col">Historic operation / location</th><th scope="col">Lead role</th><th scope="col">Cleanup</th><th scope="col">Later use and 2026 limits</th></tr></thead>
          <tbody>{leadFacilities.map(facility => <tr key={facility.id}><th scope="row"><a href={`#facility-${facility.id}`}>{facility.name}</a><p>{facility.location}</p></th><td>{facility.leadRole}</td><td>{facility.cleanup}</td><td>{facility.now}</td></tr>)}</tbody>
        </table></div>
        </details>
      </section>
      <section id="places" className={styles.section}>
        <p className="eyebrow">14 · Other documented investigations</p><h2>The wider record includes unfinished answers.</h2>
        <div className={styles.records}>{leadPlaceRecords.filter(record => record.id !== "east-ferry").map(record => <details className={styles.record} id={record.id} key={record.id}>
          <summary className={styles.recordSummary}>
          <p className={styles.status}>{record.status}</p><h3>{record.name}</h3><p className={styles.location}>{record.location}</p><p className={styles.limit}>{record.limit}</p><span className={styles.expandHint}>Open findings, response and sources</span></summary>
          <p>{record.finding}</p><p>{record.response}</p><Sources sources={"sources" in record ? record.sources : [record.source]} />
        </details>)}</div>
        <details id="historical-sites" className={styles.archive}><summary>Earlier factories and historical-smelter research records</summary>
          <p>These existing Atlas records preserve period listings and agency decisions. Unverified factory footprints are not given map pins.</p>
          <div className={styles.records}>{historicalLeadRecords.map(record => <article className={styles.record} id={record.id} key={record.id}>
            <p className={styles.status}>{record.status}</p><h3>{record.name}</h3><p className={styles.location}>{record.location}</p><p>{record.history}</p><p>{record.agencyRecord}</p><p className={styles.limit}><strong>Research gap:</strong> {record.nextEvidence}</p><Sources sources={record.sources} />
          </article>)}</div>
        </details>
      </section>
      <section id="one-house" className={styles.section}>
        <p className="eyebrow">15 · One house, several generations of lead</p><h2>Where did the lead come from?</h2>
        <p>Several pathways can overlap at an older property. This schematic explains possibilities; it is not a diagnosis of any Buffalo address.</p>
        <figure className={styles.houseFigure}>
          <svg viewBox="0 0 840 490" role="img" aria-labelledby="house-title house-description">
            <title id="house-title">An older house and possible lead pathways</title><desc id="house-description">Exterior and window-frame paint can produce dust. Soil can contain paint flakes, historical traffic deposition, garden pesticide residues or locally documented industrial waste. A service line runs from the street water main to the house.</desc>
            <path d="M250 170 L420 65 L590 170" fill="none" stroke="currentColor" strokeWidth="9" />
            <path d="M275 160 V370 H565 V160" fill="var(--paper)" stroke="currentColor" strokeWidth="5" />
            <path d="M380 370 V260 H450 V370 M310 210 H360 V270 H310 Z M480 210 H530 V270 H480 Z M310 240 H360 M505 210 V270" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M40 375 H800" stroke="var(--moss)" strokeWidth="5" /><path d="M45 425 H380 V370" stroke="var(--rust)" strokeWidth="8" fill="none" />
            <path d="M690 340 H790 M715 325 H765 L778 340 M730 340 V375" fill="none" stroke="currentColor" strokeWidth="4" />
            <g fontSize="17" fill="currentColor"><text x="50" y="105">Exterior paint</text><text x="50" y="129">and weathering</text><text x="625" y="180">Window friction</text><text x="625" y="204">and household dust</text><text x="60" y="305">Yard soil:</text><text x="60" y="329">paint + deposition</text><text x="60" y="353">+ past garden pesticides</text><text x="615" y="295">Historical exhaust</text><text x="55" y="462">Street main → service line → household plumbing</text></g>
            <g stroke="var(--rust)" strokeWidth="2" fill="none"><path d="M180 123 L275 195" /><path d="M620 197 L530 237" /><path d="M195 338 L230 375" /><path d="M707 301 L734 320" /></g>
          </svg><figcaption>Lead regulation changed faster than the built environment.</figcaption>
        </figure>
        <div id="pathways" className={styles.pathwayGrid}>{pathways.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p><Source source={item.source} /></article>)}</div>
      </section>
      <section id="timeline" className={styles.section}><p className="eyebrow">16 · Decisions and their aftermath</p><h2>A long history. An unfinished removal.</h2>
        <ol className={styles.timeline}>{leadTimeline.map(item => <li key={item.date}><span className={styles.timelineDate}>{item.date}</span><div><p>{item.text}</p><Source source={item.source} /></div></li>)}</ol>
      </section>
      <section id="map" className={styles.section}><p className="eyebrow">17 · Industrial geography</p><h2>Explore the documented places.</h2><p>Atlas points identify records, not historic factory footprints, cleanup boundaries or exposure zones. Pratt & Lambert&apos;s point locates Tonawanda Street; West Avenue is separate. The Highland marker is Tract II, not the whole battery complex.</p><LeadHistoryMap points={mapPoints} /></section>
      <section id="visual-record" className={styles.section}><p className="eyebrow">18 · Then and now in the documentary record</p><h2>Compare maps before drawing boundaries.</h2>
        <div className={styles.pathways}><article><h3>Elk Street</h3><p>Plate 6 locates historical paint operations. Compare it with the periodic review&apos;s modern cleanup plan; these are different boundaries.</p><Sources sources={[s.elk, s.elkReview]} /></article><article><h3>East Ferry</h3><p>Read DEC&apos;s excavation account beside Belmont&apos;s redevelopment listing. Housing followed remediation; the listing does not resolve every neighboring parcel.</p><Sources sources={[s.eastFerry, s.townhomes]} /></article><article><h3>Highland Avenue</h3><p>Compare Tract I&apos;s aerial layout with Tract II&apos;s remedy plan. A georeferenced overlay remains a research gap; no unverified image is represented as a parcel survey.</p><Sources sources={[s.tractI, s.tractII]} /></article></div>
      </section>
      <section id="evidence" className={styles.section}><p className="eyebrow">19 · Sources, interpretation and open questions</p><h2>Keep the evidence attached to the claim.</h2>
        <div className={styles.pathways}><article><h3>Documented fact</h3><p>A cited directory, investigation, legal record or audit states the finding. The Atlas preserves its date, scope and sample.</p></article><article><h3>Historical inference</h3><p>An interpretation connects documented conditions, such as unequal ability to repair housing. It does not establish an unrecorded factory formula or an individual&apos;s source of exposure.</p></article><article><h3>Research lead</h3><p>An unresolved company, parcel or process is a question to investigate. It is not counted as confirmed production, contamination or cleanup.</p></article></div>
        <p>Facility gaps appear with each property. Additional work remains on historical service-line specifications, early advocacy, later court dispositions and modern tenants at divided industrial parcels. Dated agency reuse accounts are identified as such.</p>
        <aside className={styles.caution}><strong>How to read a site record</strong><p>A historical factory listing does not establish current contamination. A map point does not define a cleanup boundary or exposure zone. Remedy completion may retain contamination under controls, and an agency closure does not by itself establish clean soil. Property records and household measurements answer different questions.</p></aside>
        <details className={styles.archive}><summary>Source and document directory</summary><div className={styles.sourceDirectory}>{Object.values(s).map(source => <Source key={source.url + source.label} source={source} />)}</div></details>
        <Link className={styles.source} href="/methodology">Atlas evidence methodology →</Link>
      </section>
      <section className={`${styles.section} ${styles.ending}`}><h2>Banning future use was easier than removing a century of what was already here.</h2>
        <p>Buffalo&apos;s lead history belongs to buildings, soil and infrastructure as much as to closed factories. Paint stayed on windows. Pesticide applications left metals in some agricultural and garden soils. Industrial waste required excavation or lasting controls. Service lines remained connected to houses. Enforcement records and the 2026 audit show that prevention still depends on maintenance, inspection, disclosure and removal.</p>
        <p>The city inherited the material. The work now is to prevent that inheritance from becoming another child&apos;s exposure.</p><Sources sources={[s.home, s.elkReview, s.inventory, s.hud]} />
        <Link className={styles.source} href="/chemicals/lead">Lead exposure and effects profile →</Link>
      </section>
    </div>
  </main>;
}
