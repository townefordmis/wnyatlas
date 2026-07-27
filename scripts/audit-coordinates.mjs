import fs from "node:fs";

const source = fs.readFileSync(
  new URL("../src/data/featured-sites.ts", import.meta.url),
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

for (const site of sites) {
  if (
    site.longitude < -79.9 ||
    site.longitude > -78.3 ||
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

console.log(`Checked ${sites.length} site coordinates.`);

if (sites.length !== 75) {
  issues.push(`Expected 75 coordinate records but found ${sites.length}`);
}

if (issues.length > 0) {
  console.error(issues.map((issue) => `- ${issue}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log("No out-of-region or duplicate-coordinate issues found.");
}
