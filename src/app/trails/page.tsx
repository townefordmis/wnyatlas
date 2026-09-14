import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { trails } from "@/data/trails";

export const metadata: Metadata = { title: "Curated trails", description: "Guided routes through connected Western New York places and environmental histories." };

export default function TrailsPage() {
  return <main className="index-page"><SiteHeader /><section className="index-hero"><p className="eyebrow">Curated narratives</p><h1>Follow an evidence trail.</h1><p>Move through connected places in a deliberate order, with context for what joins them—and what remains distinct.</p></section><section className="trail-index">{trails.map((trail, index) => <Link href={`/trails/${trail.slug}`} key={trail.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{trail.title}</h2><p>{trail.intro}</p><strong>{trail.places.length} places →</strong></div></Link>)}</section></main>;
}
