import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ResearchSectionNav } from "@/components/research-section-nav";
import { historicalLeadRecords, leadPlaceRecords, leadSources } from "@/data/lead-investigation";
import styles from "./lead.module.css";

export const metadata: Metadata = {
  title: "Lead in Western New York: Industry, Homes and Soil",
  description: "A source-checked guide to Western New York lead records, historical cleanup, exposure pathways, and children's health, with direct EPA, DEC, and CDC sources.",
  alternates: { canonical: "/research/lead" },
  openGraph: { type: "article", url: "/research/lead", title: "Lead in Western New York | WNYAtlas", description: "Follow the documented lead record from industrial properties to paint, soil, and plumbing." },
};

function Source({ source }: { source: { label: string; url: string } }) {
  return <a className={styles.source} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>;
}

export default function LeadResearchPage() {
  return (
    <main>
      <SiteHeader />
      <header className={styles.hero}>
        <p className="eyebrow">Western New York · Lead investigation</p>
        <h1>Lead in Western New York</h1>
        <p className={styles.dek}>Industry, homes, and the legacy in soil.</p>
        <p>Follow lead manufacturing from historical directories to later investigations. Some properties have documented remedies; others require their industrial and environmental histories to be reconstructed.</p>
        <p className={styles.reviewed}>Sources checked October 7, 2026 · Historical findings are dated below</p>
        <aside className={styles.caution}>
          <strong>A place record is not an exposure diagnosis.</strong>
          <p>A historical operation, soil detection, and a person&apos;s exposure are different findings. Nearby homes and residents are not labeled affected without evidence specific to them.</p>
        </aside>
      </header>
      <ResearchSectionNav items={[{ href: "#historical-sites", label: "Before modern cleanup" }, { href: "#places", label: "Agency findings" }, { href: "#pathways", label: "Paint, soil and water" }, { href: "#children", label: "Children's health" }, { href: "#evidence", label: "Evidence standard" }]} />
      <div className={styles.content}>
        <aside className={styles.record}>
          <p className={styles.status}>A separate infrastructure story</p>
          <h2>Buffalo’s lead water lines</h2>
          <p>How the water system grew, where replacement is making headway, and why tens of thousands of lead and unknown lines still deserve attention. Follow the dated inventory, funding decisions, and stakes for children’s development.</p>
          <Link className={styles.source} href="/research/lead/buffalo-water-lines">Read the water-line story →</Link>
        </aside>
        <section id="historical-sites" className={styles.section}>
          <p className="eyebrow">Before EPA and Superfund</p>
          <h2>The factory can disappear. Its environmental history still needs an answer.</h2>
          <p>EPA dates its establishment to 1970; the federal Superfund law followed in 1980. The operations below appear in earlier industrial records. These dates describe the arrival of those federal institutions, not the absence of all earlier regulation.</p>
          <Source source={leadSources.epaOrigins} />
          <Source source={leadSources.superfundOrigins} />
          <aside className={styles.caution}>
            <strong>Why these histories deserve attention</strong>
            <p>A 2001 study identified approximately 430 former lead-smelting sites that were unknown to federal authorities. Nine of ten sites sampled exceeded the residential soil standards used in that study. This was a limited historical sample, not an estimate of contamination at these WNY locations.</p>
            <Source source={leadSources.smelterStudy} />
            <p>The Atlas warning is to check what occupied land before its current use. A factory closing, a building disappearing, or a missing cleanup record cannot establish that soil is safe. Historical lead use alone also cannot establish contamination.</p>
          </aside>
          <p>These five records preserve verified historical listings, documented company movement, and agency decisions. Locations are historical addresses or intersections; this section does not draw unverified parcel boundaries or hazard zones.</p>
          <div className={styles.records}>
            {historicalLeadRecords.map((record) => (
              <article id={record.id} key={record.id} className={styles.record}>
                <p className={styles.status}>{record.status}</p>
                <h3>{record.name}</h3>
                <p className={styles.location}>{record.location}</p>
                <h4>Historical evidence</h4>
                <p>{record.history}</p>
                <h4>Environmental record reviewed</h4>
                <p>{record.agencyRecord}</p>
                <p className={styles.limit}><strong>What still needs checking:</strong> {record.nextEvidence}</p>
                {record.sources.map((source) => <Source key={source.url} source={source} />)}
              </article>
            ))}
          </div>
          <p><strong>“Cleanup not established” describes the evidence reviewed here.</strong> It does not mean no cleanup occurred. EPA referral and non-site decisions are preserved as separate outcomes. This is a selected historical collection, not a complete inventory.</p>
        </section>
        <section id="places" className={styles.section}>
          <p className="eyebrow">The local record</p>
          <h2>What later investigations established</h2>
          <p>These selected Buffalo records illustrate a completed historical cleanup, documented soil sampling, and a removal action. Findings retain their source dates and apply to the properties investigated.</p>
          <div className={styles.records}>
            {leadPlaceRecords.map((record) => (
              <article id={record.id} key={record.id} className={styles.record}>
                <p className={styles.status}>{record.status}</p>
                <h3>{record.name}</h3>
                <p className={styles.location}>{record.location}</p>
                <p>{record.finding}</p>
                <p>{record.response}</p>
                <p className={styles.limit}><strong>What this establishes:</strong> {record.limit}</p>
                <Source source={record.source} />
                {record.siteId && <Link className={styles.source} href={`/sites/${record.siteId}`}>Read the Atlas place history →</Link>}
              </article>
            ))}
          </div>
        </section>
        <section id="pathways" className={styles.section}>
          <p className="eyebrow">Beyond the factory</p>
          <h2>Paint, soil, and plumbing carry different histories.</h2>
          <p>EPA identifies several potential household sources. The pathways below are general explanations; they do not identify the source of lead at a particular WNY address.</p>
          <div className={styles.pathways}>
            <article><h3>Paint and dust</h3><p>Older homes may retain lead-based paint. Deteriorating paint and disturbance during renovation can create contaminated chips and dust. The 1978 federal ban on sale of lead-based paint for homes and childcare facilities did not remove paint already in buildings.</p><Source source={leadSources.home} /></article>
            <article><h3>Gasoline and soil</h3><p>EPA identifies past leaded gasoline use, deteriorated exterior paint, and renovation as possible sources of lead in residential soil. Soil can also be tracked indoors as dust. A soil result alone does not distinguish among those sources.</p><Source source={leadSources.soil} /><p>The U.S. gasoline phaseout began in the 1970s and culminated in a 1996 ban for on-road motor vehicles.</p><Source source={leadSources.laws} /></article>
            <article><h3>Water and plumbing</h3><p>Lead can enter drinking water through corrosion of lead-containing plumbing, including pipes, fixtures, and solder. Service-line material and water-sample results answer different questions; neither should be inferred from proximity to a former smelter.</p><Source source={leadSources.home} /><Link className={styles.source} href="/research/lead/buffalo-water-lines">Buffalo’s replacement progress and remaining work →</Link></article>
          </div>
        </section>
        <section id="children" className={`${styles.section} ${styles.health}`}>
          <p className="eyebrow">Why it matters</p>
          <h2>A child can be affected without looking sick.</h2>
          <p>CDC has identified no safe blood-lead level in children. Even low levels are associated with learning, development, and behavioral problems.</p>
          <Source source={leadSources.health} />
          <p>CDC describes damage to the brain and nervous system, slowed growth, and hearing and speech problems. Most children have no obvious immediate symptoms. A blood lead test is the best way to assess exposure; families with concerns should speak with their child&apos;s healthcare provider.</p>
          <Source source={leadSources.symptoms} />
          <p className={styles.limit}>Environmental soil concentrations cannot be converted here into a child&apos;s blood-lead level or a predicted loss of IQ. Those are different measurements requiring exposure and health evidence.</p>
          <Link className={styles.source} href="/chemicals/lead">Read the Lead Exposure &amp; Effects profile →</Link>
        </section>
        <section id="evidence" className={styles.section}>
          <p className="eyebrow">Evidence standard</p>
          <h2>Follow each claim back to its source.</h2>
          <p>Source links appear beside the findings they support. Cleanup statements preserve the documented dates and scope. An agency listing is not proof of completed cleanup, and a historical result is not a current property assessment.</p>
          <p>Period directories establish historical listings and products. Historical research identifies locations to check. Agency assessments establish their own findings and decisions. These forms of evidence are kept separate so unresolved property histories remain visible without becoming claims of confirmed contamination.</p>
          <Link className={styles.source} href="/methodology">Atlas methodology →</Link>
        </section>
      </div>
    </main>
  );
}
