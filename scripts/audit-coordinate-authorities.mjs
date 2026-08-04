import fs from "node:fs";

const source = [
  "../src/data/featured-sites.ts",
  "../src/data/historic-cleanup-expansion.ts",
  "../src/data/county-expansion-2026.ts",
]
  .map((path) => fs.readFileSync(new URL(path, import.meta.url), "utf8"))
  .join("\n");

const sitePattern =
  /id: "([^"]+)"[\s\S]*?name: "([^"]+)"[\s\S]*?coordinates: \[(-?\d+(?:\.\d+)?), (-?\d+(?:\.\d+)?)\]/g;
const matches = [...source.matchAll(sitePattern)];
const sites = matches.map((match, index) => {
  const blockEnd = matches[index + 1]?.index ?? source.length;
  const block = source.slice(match.index, blockEnd);
  const decCodes = [
    ...block.matchAll(/DecDocs\/([A-Z]?\d{6}[A-Z]?)/gi),
    ...block.matchAll(/siteSources\("([A-Z]?\d{6}[A-Z]?)"/gi),
  ].map((codeMatch) => codeMatch[1].toUpperCase());

  return {
    id: match[1],
    name: match[2],
    longitude: Number(match[3]),
    latitude: Number(match[4]),
    decCodes: [...new Set(decCodes)],
  };
});

const decCodes = [...new Set(sites.flatMap((site) => site.decCodes))];
const endpoint =
  "https://services6.arcgis.com/DZHaqZm9cxOD4CWM/ArcGIS/rest/services/" +
  "Remediation_Sites/FeatureServer/1/query";

const features = [];
for (let index = 0; index < decCodes.length; index += 40) {
  const batch = decCodes.slice(index, index + 40);
  const where = encodeURIComponent(
    `SITECODE IN (${batch.map((code) => `'${code}'`).join(",")})`,
  );
  const url =
    `${endpoint}?where=${where}` +
    "&outFields=SITECODE,SITENAME,ADDRESS1,LOCALITY,COUNTY,METHOD" +
    "&returnGeometry=true&outSR=4326&f=json";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`DEC coordinate request failed: ${response.status}`);
  }
  const payload = await response.json();
  if (payload.error) {
    throw new Error(`DEC coordinate request failed: ${payload.error.message}`);
  }
  features.push(...payload.features);
}

const officialByCode = new Map(
  features.map((feature) => [
    feature.attributes.SITECODE?.toUpperCase(),
    feature,
  ]),
);

// These entries intentionally map a related river feature or operating
// facility rather than the centroid of the DEC record cited for context.
const sourceContextOnly = new Set([
  "pettit-flume-durez-outfall",
  "gill-creek-chemical-corridor",
  "dupont-yerkes",
  "fmc-peroxychem-evonik-tonawanda",
  "bethlehem-steel",
]);

function distanceMeters(from, to) {
  const radians = (degrees) => (degrees * Math.PI) / 180;
  const earthRadius = 6_371_000;
  const latitudeDelta = radians(to.latitude - from.latitude);
  const longitudeDelta = radians(to.longitude - from.longitude);
  const a =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(radians(from.latitude)) *
      Math.cos(radians(to.latitude)) *
      Math.sin(longitudeDelta / 2) ** 2;
  return 2 * earthRadius * Math.asin(Math.sqrt(a));
}

const comparisons = [];
for (const site of sites) {
  for (const code of site.decCodes.slice(0, 1)) {
    const official = officialByCode.get(code);
    if (!official?.geometry) continue;

    comparisons.push({
      site,
      code,
      official,
      distance: distanceMeters(site, {
        longitude: official.geometry.x,
        latitude: official.geometry.y,
      }),
    });
  }
}

const discrepancies = comparisons
  .filter(
    (comparison) =>
      comparison.distance > 250 && !sourceContextOnly.has(comparison.site.id),
  )
  .sort((a, b) => b.distance - a.distance);

console.log(
  `Compared ${new Set(comparisons.map(({ site }) => site.id)).size} atlas places ` +
    `with ${comparisons.length} official NYSDEC site records.`,
);
console.log(
  `${sites.length - new Set(comparisons.map(({ site }) => site.id)).size} places ` +
    "require a non-DEC or manual location check.",
);
if (process.argv.includes("--list-manual")) {
  const comparedIds = new Set(comparisons.map(({ site }) => site.id));
  for (const site of sites.filter(({ id }) => !comparedIds.has(id))) {
    console.log(
      `manual | ${site.id} | ${site.longitude},${site.latitude}`,
    );
  }
}

if (discrepancies.length === 0) {
  console.log("No DEC coordinate differences greater than 250 meters.");
} else {
  console.log(
    `${discrepancies.length} DEC coordinate differences exceed 250 meters:`,
  );
  for (const { site, code, official, distance } of discrepancies) {
    console.log(
      [
        site.id,
        code,
        `${Math.round(distance)}m`,
        `atlas=${site.longitude},${site.latitude}`,
        `DEC=${official.geometry.x},${official.geometry.y}`,
        `method=${official.attributes.METHOD ?? "not stated"}`,
      ].join(" | "),
    );
  }
  process.exitCode = 1;
}
