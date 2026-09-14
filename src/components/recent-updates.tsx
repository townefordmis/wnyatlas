import Link from "next/link";

import { getPublicSiteName } from "@/lib/site-name";
import { getRecentUpdates } from "@/lib/updates";

export function RecentUpdates() {
  const updates = getRecentUpdates().slice(0, 5);
  return (
    <section className="recent-updates" aria-labelledby="recent-updates-title">
      <div className="section-heading">
        <div><p className="eyebrow">Living public record</p><h2 id="recent-updates-title">Recently updated</h2></div>
        <Link href="/updates">See all updates →</Link>
      </div>
      <div className="recent-update-list">
        {updates.map(({ site, reviewed }) => (
          <Link href={`/sites/${site.id}`} key={site.id}>
            <time>{reviewed}</time>
            <strong>{getPublicSiteName(site.name)}</strong>
            <span>{site.county} County</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
