import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Latest Local Radiological News",
  description: "Local reporting and agency updates on Niagara–Erie flyovers, property testing, radioactive slag and cleanup.",
  alternates: { canonical: "/research/radiological/news" },
};

const updates = [
  { date: "September 10, 2026", topic: "Federal oversight", title: "Kennedy seeks answers on testing, material origins and resident support", publisher: "Office of Congressman Timothy M. Kennedy", summary: "An oversight letter asks EPA and the Army Corps about testing timelines, relocation assistance and financial impacts. The request does not establish the source of the material.", url: "https://kennedy.house.gov/news/documentsingle.aspx?DocumentID=2482" },
  { date: "September 1, 2026", topic: "Property testing", title: "Agencies report 847 properties screened in the August 31 update", publisher: "NYSDEC, via Niagara Frontier Publications", summary: "The update reports approximately 514 properties notified that no further radiological investigation was needed, 32 parcels referred to EPA and four properties recommended for voluntary temporary relocation. These are different stages, not counts to add together.", url: "https://www.wnypapers.com/news/article/current/2026/09/01/166923/nysdec-epa-update-for-aug.-31" },
  { date: "August 24, 2026", topic: "Local reporting", title: "EPA and DEC discuss the assessment with Buffalo Toronto Public Media", publisher: "Buffalo Toronto Public Media", summary: "Agency representatives discuss the regional investigation, historical industrial material and the questions behind the surveys.", url: "https://www.btpm.org/local/2026-08-24/epa-admin-dec-commish-join-btpm-news-to-discuss-ongoing-radiological-assessment" },
  { date: "August 18, 2026", topic: "Erie County", title: "County shares an update on regional radiological surveys", publisher: "Erie County Executive", summary: "The county reports on resident briefings and the ongoing state and federal assessment in Erie and Niagara counties.", url: "https://www4.erie.gov/exec/press/county-residents-receive-updates-radiological-assessments" },
  { date: "July 24, 2026", topic: "Resident concerns", title: "Town of Niagara residents press agencies for answers", publisher: "Niagara Frontier Publications", summary: "Local coverage documents the public meeting, resident concerns and questions about property testing and the agency response.", url: "https://www.wnypapers.com/news/article/featured/2026/07/24/166614/epa-state-dec-officials-meet-with-town-of-niagara-residents-to-address-radioactivity" },
  { date: "July 20, 2026", topic: "Flyovers & ground surveys", title: "Community briefing explains the move from aerial screening to ground testing", publisher: "NYSDEC and U.S. EPA", summary: "The agency presentation connects aerial and roadway screening with areas selected for ground surveys. An area of interest is a screening result, not confirmation that a property is contaminated.", url: "https://dec.ny.gov/sites/default/files/2026-07/FINAL%20Monday%20July%2020%20NECRA%20Community%20Meeting%20Presentation.pdf" },
  { date: "March 10, 2026", topic: "Niagara Falls slag & cleanup", title: "EPA's removal-site roundup documents local radioactive-material cleanups", publisher: "U.S. Environmental Protection Agency", summary: "The updated reference covers Niagara Falls Boulevard, Upper Mountain Road, Holy Trinity-area residences and Donovan Head Start. It describes earlier cleanup work; this publication date is not a new contamination finding.", url: "https://www.epa.gov/ny/niagara-county-radiation-removal-sites" },
];

export default function RadiologicalNewsPage() {
  return <main className="index-page">
    <SiteHeader />
    <section className="index-hero">
      <p className="eyebrow">Niagara & Erie counties</p>
      <h1>Latest radiological news</h1>
      <p>Flyovers, property testing, Niagara Falls slag, cleanup and resident concerns—in one place, newest first.</p>
      <p>Selected local reporting and agency updates. Reviewed September 28, 2026; this is an editorial collection, not a live news feed.</p>
      <nav className="radiological-directory-tools" aria-label="Radiological news links">
        <Link href="/research/radiological-industry-fill">Browse radiological places →</Link>
        <a href="https://dec.ny.gov/environmental-protection/facilities-in-your-neighborhood/niagara-and-erie-county-radiological-assessment">Current DEC updates & resident information ↗</a>
      </nav>
    </section>
    <section className="updates-feed" aria-label="News and agency updates">
      {updates.map((item) => <article key={item.url}>
        <time>{item.date}</time>
        <div><p>{item.topic} · {item.publisher}</p><h2><a href={item.url}>{item.title} ↗</a></h2><p>{item.summary}</p></div>
      </article>)}
    </section>
  </main>;
}
