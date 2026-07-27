import fs from "node:fs";

const source = [
  "../src/data/featured-sites.ts",
  "../src/data/historic-cleanup-expansion.ts",
]
  .map((path) => fs.readFileSync(new URL(path, import.meta.url), "utf8"))
  .join("\n");
const connectionSource = fs.readFileSync(
  new URL("../src/data/site-connections.ts", import.meta.url),
  "utf8",
);

const sitePattern =
  /id: "([^"]+)"[\s\S]*?name: "([^"]+)"[\s\S]*?coordinates: \[(-?\d+(?:\.\d+)?), (-?\d+(?:\.\d+)?)\]/g;
const sites = [...source.matchAll(sitePattern)].map((match) => ({
  id: match[1],
  name: match[2],
  longitude: Number(match[3]),
  latitude: Number(match[4]),
}));

const issues = [];
const coordinateOwners = new Map();
const siteIds = new Set(sites.map((site) => site.id));

for (const site of sites) {
  if (
    site.longitude < -79.9 ||
    site.longitude > -77.85 ||
    site.latitude < 41.9 ||
    site.latitude > 43.7
  ) {
    issues.push(`${site.name}: coordinate falls outside the WNY review bounds`);
  }

  const key = `${site.longitude},${site.latitude}`;
  const existingOwner = coordinateOwners.get(key);
  if (existingOwner) {
    issues.push(
      `${site.name}: shares an exact coordinate with ${existingOwner} (${key})`,
    );
  } else {
    coordinateOwners.set(key, site.name);
  }
}

const connectedSiteIds = [
  ...connectionSource.matchAll(/siteId: "([^"]+)"/g),
].map((match) => match[1]);

for (const siteId of connectedSiteIds) {
  if (!siteIds.has(siteId)) {
    issues.push(`Connection group references unknown site ID: ${siteId}`);
  }
}

console.log(`Checked ${sites.length} site coordinates.`);
console.log(`Checked ${connectedSiteIds.length} connection memberships.`);

if (sites.length !== 114) {
  issues.push(`Expected 114 coordinate records but found ${sites.length}`);
}

if (issues.length > 0) {
  console.error(issues.map((issue) => `- ${issue}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log("No out-of-region or duplicate-coordinate issues found.");
}
