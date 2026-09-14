import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { getPublicSiteName } from "@/lib/site-name";
import { getRecentUpdates } from "@/lib/updates";

export const metadata: Metadata = { title: "Recently updated", description: "New and recently reviewed WNYAtlas place records." };
export default function UpdatesPage() { const updates = getRecentUpdates(); return <main className="index-page"><SiteHeader /><section className="index-hero"><p className="eyebrow">Living public record</p><h1>Recently added and updated</h1><p>Place records in reverse editorial-review order. <a href="/updates/feed.xml">Subscribe by RSS</a> to follow changes.</p></section><section className="updates-feed">{updates.map(({ site, reviewed, note }) => <article key={site.id}><time>{reviewed}</time><div><p>{site.county} County · {site.municipality}</p><h2><Link href={`/sites/${site.id}`}>{getPublicSiteName(site.name)}</Link></h2><p>{note}</p></div></article>)}</section><section className="email-signup"><p className="eyebrow">Get update notices</p><h2>Email notifications</h2><p>The email list is being prepared. For now, send a note to <a href="mailto:research@wnyatlas.com?subject=WNYAtlas%20update%20notifications">research@wnyatlas.com</a> with “update notifications” in the subject, or use the RSS feed.</p></section></main>; }
