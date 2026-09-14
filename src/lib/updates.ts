import { featuredSites } from "@/data/featured-sites";
import { getSiteStory } from "@/lib/site-story";

export function getRecentUpdates() {
  return featuredSites
    .map((site) => ({
      site,
      reviewed: getSiteStory(site).lastReviewed ?? "Review date pending",
      date: new Date(getSiteStory(site).lastReviewed ?? ""),
      note: site.updateNote ?? "Editorial review completed; sources, status, and place narrative checked.",
    }))
    .filter((item) => !Number.isNaN(item.date.valueOf()))
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}
