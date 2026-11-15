import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ResearchSectionNav } from "@/components/research-section-nav";
import { earlyIndustryChapters, earlyIndustrySources } from "@/data/early-industry";

export const metadata: Metadata = {
  title: "Early Industry: 1750–1900",
  description: "Follow the records of Western New York's early portage trade, mills, tanneries, cement works, foundries and creek-oil recovery, with documented facts and unresolved questions.",
  alternates: { canonical: "/research/early-industry" },
};

export default function EarlyIndustryPage() {
  return <main className="research-status-page">
    <SiteHeader />
    <header className="research-status-hero">
      <p className="eyebrow">Historical investigation · reviewed November 15, 2026</p>
      <h1>Early industry: 1750–1900</h1>
      <p>Before Western New York&apos;s twentieth-century industrial expansion, portage landings, mills, tanneries, kilns and furnaces changed its waterways and communities. Seven source-led histories trace that earlier landscape, from Niagara trade to oil recovered from an Allegany County creek.</p>
      <div className="research-status-actions"><Link href="#cynthia-oil-works">The creek-oil story</Link><Link href="/sites/williamsville-water-mills">Williamsville mill district</Link><Link href="/places">All Atlas places</Link></div>
    </header>
    <ResearchSectionNav items={earlyIndustryChapters.map((chapter) => ({ href: `#${chapter.id}`, label: chapter.location.split(" · ")[0] }))} />
    <section className="research-status-section">
      <div><p className="eyebrow">Reading the evidence</p><h2>Historical use, environmental findings and open questions</h2></div>
      <div>
        <p>Government reports, historic surveys and archival descriptions support these histories. They do different jobs: an industrial listing documents a business; a historical pollution account describes a past event; neither substitutes for current environmental sampling.</p>
        <p>Bolivar has the clearest historical release account in this group. The other stories document industry, transport and landscape change while identifying the evidence still needed for waste, exposure or cleanup claims. Locations without verified footprints are discussed here without adding precise map pins.</p>
        <p>Page references distinguish printed report pages from PDF page numbers. An archival catalog description is labeled separately from original documents that have actually been read. <Link href="/methodology">Read the Atlas evidence standard →</Link></p>
      </div>
    </section>
    {earlyIndustryChapters.map((chapter) => <section className="research-status-section" id={chapter.id} key={chapter.id}>
      <div><p className="eyebrow">{chapter.period} · {chapter.location}</p><h2>{chapter.title}</h2>{chapter.related && <Link href={chapter.related.href}>{chapter.related.label} →</Link>}</div>
      <div>
        {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p><strong>Evidence limit:</strong> {chapter.limit}</p>
        <p><strong>Next useful record:</strong> {chapter.nextRecord}</p>
        <ul aria-label={`Sources for ${chapter.title}`}>
          {chapter.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a><p>{source.publisher}</p></li>)}
        </ul>
      </div>
    </section>)}
    <section className="research-status-section">
      <div><p className="eyebrow">Two further leads</p><h2>Earlier resource histories to follow</h2></div>
      <div>
        <p><strong>Warren Granger&apos;s cement works, 1850.</strong> USGS places a natural-cement plant beside Scajaquada Creek below the Main Street bridge, in what its 1913 account describes as Forest Lawn Cemetery. The exact footprint requires maps and property records. <a href={earlyIndustrySources.cement.url}>USGS, page 22 ↗</a></p>
        <p><strong>Seneca Oil Spring and Niagara trade, 1767.</strong> DEC&apos;s history records Seneca use of oil and trade at Fort Niagara by 1767, citing Herrick. Seneca-authored accounts and the original historical references should guide further work. A natural seep is distinct from an industrial release. <a href={earlyIndustrySources.oil.url}>DEC, printed page 4-1 / PDF page 365 ↗</a></p>
      </div>
    </section>
  </main>;
}
