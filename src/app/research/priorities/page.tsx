import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ResearchSectionNav } from "@/components/research-section-nav";
import { featuredSites } from "@/data/featured-sites";
import prioritiesConfig from "../../../../research/follow-up-priorities.config.json";

export const metadata: Metadata = {
  title: "Research Follow-up Priorities",
  description: "WNYAtlas research questions ordered by evidence, reader value, practical next steps, and expected research effort.",
  alternates: { canonical: "/research/priorities" },
};

const priorities = prioritiesConfig.items.map((item, index) => ({ ...item, rank: index + 1 }));
const sitesById = new Map(featuredSites.map((site) => [site.id, site]));
const tiers = Object.entries(prioritiesConfig.tiers);
const siteNoteCount = featuredSites.reduce((count, site) => count + (site.story?.researchNotes.length ?? 0), 0);
const reviewed = new Date(`${prioritiesConfig.reviewed}T12:00:00Z`).toLocaleDateString("en-US", {
  timeZone: "America/New_York", month: "long", day: "numeric", year: "numeric",
});

function contextLink(references: string[]) {
  if (references.some((file) => file.includes("school"))) return { href: "/research/schools-industrial-sites", label: "School research and evidence standards" };
  if (references.some((file) => file.includes("lead-water"))) return { href: "/research/lead/buffalo-water-lines", label: "Buffalo lead service-line research" };
  if (references.some((file) => file.includes("lead-investigation") || file.includes("lead-history"))) return { href: "/research/lead", label: "Lead history and source records" };
  if (references.some((file) => file.includes("radiological"))) return { href: "/research/radiological-industry-fill", label: "Radiological history and source records" };
  if (references.some((file) => file.includes("burning"))) return { href: "/research/burning-years", label: "Incineration and residue research" };
  return null;
}

export default function ResearchPrioritiesPage() {
  return (
    <main className="research-status-page">
      <SiteHeader />
      <header className="research-status-hero">
        <p className="eyebrow">Research agenda · reviewed {reviewed}</p>
        <h1>What is worth following up next</h1>
        <p>Research questions ordered by the value of the next useful answer: reader value, existing evidence, access to records, new knowledge, and effort. This is an editorial priority list, not a ranking of contamination or health risk.</p>
        <div className="research-status-actions"><Link href="/research-status">Research status and coverage</Link><Link href="/updates">Recently updated records</Link></div>
      </header>
      <section className="research-status-summary research-priority-summary" aria-label="Research queue coverage">
        <article><strong>{priorities.length}</strong><span>ranked workstreams</span></article>
        <article><strong>{featuredSites.length}</strong><span>mapped records considered</span></article>
        <article><strong>{siteNoteCount}</strong><span>site research notes considered</span></article>
        <article><strong>{priorities.filter((item) => item.tier === 1).length}</strong><span>first follow-ups</span></article>
      </section>
      <ResearchSectionNav items={tiers.map(([tier, label]) => ({ href: `#tier-${tier}` as const, label }))} />
      <section className="research-status-section research-priority-introduction">
        <div><p className="eyebrow">How to use this list</p><h2>Follow a question to the next record.</h2></div>
        <div>
          <p>Start with two or three questions from the first group. For a short research session, check Industrial Welding agency follow-up, Necco Park’s named milestone, or Exchange Street completion records. Bell/Olin waste tracing and the original 1979 inventory are larger projects with potential value across several sites.</p>
          <p>The order reflects evidence assembled for the {reviewed} review. Some leads already have published stories; their next task is to verify results or completion. A plan, a historical listing, or proximity alone does not establish a completed cleanup or an exposure.</p>
          <p>School reviews, historical lead and radiological records, deferred topics, and existing site notes are grouped here. The counts overlap; source notes include evidence limits and location qualifications as well as unanswered questions.</p>
        </div>
      </section>
      {tiers.map(([tier, label]) => {
        const items = priorities.filter((item) => item.tier === Number(tier));
        return (
          <section className="research-status-section research-priority-section" id={`tier-${tier}`} key={tier}>
            <p className="eyebrow">Priorities {items[0].rank}–{items[items.length - 1].rank}</p>
            <h2>{label}</h2>
            <ol className="research-priority-list" start={items[0].rank}>
              {items.map((item) => {
                const context = contextLink(item.references);
                const sites = item.siteIds.flatMap((id) => { const site = sitesById.get(id); return site ? [site] : []; });
                const paused = item.id === "paused-amherst-gis";
                return (
                  <li value={item.rank} id={`priority-${item.rank}`} key={item.id}>
                    <div className="research-priority-meta"><span>Priority {item.rank}</span><span>Effort: {item.effort}</span></div>
                    <h3>{item.title}</h3>
                    <p>{paused ? "This proposed experience remains paused while other source questions take precedence." : item.why}</p>
                    <p><strong>Next step:</strong> {paused ? "Revisit source permissions, georeferencing and privacy if the project is resumed." : item.nextAction.replace("Use the full site register below.", "Review the published Atlas place records.")}</p>
                    {(sites.length > 0 || context) && <div className="research-priority-links" aria-label={`Related records for priority ${item.rank}`}>
                      {sites.map((site) => <Link href={`/sites/${site.id}`} key={site.id}>{site.name}</Link>)}
                      {context && <Link href={context.href}>{context.label}</Link>}
                    </div>}
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
      <section className="research-status-section">
        <div><p className="eyebrow">A changing agenda</p><h2>Better evidence changes the order.</h2></div>
        <div><p>A new investigation result, agency decision, verified boundary, completed remedy, or source that connects several sites can move a question up. Repeatedly finding the same undated lead, duplicating an existing page, or lacking an identifiable next record moves it down. Lower priority describes the expected return from research, not the importance of a community.</p><Link href="/methodology">Read the Atlas evidence standards</Link></div>
      </section>
    </main>
  );
}
