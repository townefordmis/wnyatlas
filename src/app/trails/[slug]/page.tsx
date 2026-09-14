import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { featuredSites } from "@/data/featured-sites";
import { findTrail, trails } from "@/data/trails";
import { getPublicSiteName } from "@/lib/site-name";

export function generateStaticParams() { return trails.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const trail = findTrail((await params).slug); return trail ? { title: trail.title, description: trail.intro } : {}; }

export default async function TrailPage({ params }: { params: Promise<{ slug: string }> }) {
  const trail = findTrail((await params).slug); if (!trail) notFound();
  return <main className="index-page"><SiteHeader /><article className="trail-page"><header><Link href="/trails">← All trails</Link><p className="eyebrow">Curated trail · {trail.places.length} places</p><h1>{trail.title}</h1><p>{trail.intro}</p></header><ol>{trail.places.map((entry, index) => { const site = featuredSites.find((item) => item.id === entry.slug); if (!site) return null; return <li key={entry.slug}><span>{String(index + 1).padStart(2, "0")}</span><Link href={`/sites/${site.id}`}>{site.image && <Image src={site.image.src} alt={site.image.alt} width={640} height={380} />}<div><p>{site.municipality} · {site.county} County</p><h2>{getPublicSiteName(site.name)}</h2><p>{entry.blurb ?? site.summary}</p><strong>Open place record →</strong></div></Link></li>; })}</ol></article></main>;
}
