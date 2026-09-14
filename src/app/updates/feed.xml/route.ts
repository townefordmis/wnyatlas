import { getPublicSiteName } from "@/lib/site-name";
import { getRecentUpdates } from "@/lib/updates";

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '\"': "&quot;" })[character] ?? character);
export function GET() {
  const items = getRecentUpdates().slice(0, 50).map(({ site, date, note }) => `<item><title>${escapeXml(getPublicSiteName(site.name))}</title><link>https://www.wnyatlas.com/sites/${site.id}</link><guid>https://www.wnyatlas.com/sites/${site.id}#${date.toISOString().slice(0, 10)}</guid><pubDate>${date.toUTCString()}</pubDate><description>${escapeXml(note)}</description></item>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>WNYAtlas updates</title><link>https://www.wnyatlas.com/updates</link><description>Recently reviewed Western New York place records.</description>${items}</channel></rss>`, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
