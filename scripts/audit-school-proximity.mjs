import fs from "node:fs";

const campuses = JSON.parse(
  fs.readFileSync(
    new URL("../src/data/buffalo-school-campuses.json", import.meta.url),
    "utf8",
  ),
);
const endpoint =
  "https://gisservices.dec.ny.gov/arcgis/rest/services/der/" +
  "RemediationSpills/MapServer/3/query";

async function queryCampus(campus, distanceMeters) {
  const [longitude, latitude] = campus.coordinates;
  const params = new URLSearchParams({
    f: "json",
    where: "1=1",
    geometry: JSON.stringify({
      x: longitude,
      y: latitude,
      spatialReference: { wkid: 4326 },
    }),
    geometryType: "esriGeometryPoint",
    inSR: "4326",
    spatialRel: "esriSpatialRelIntersects",
    outFields: "SITECODE,SITENAME,PROGRAM,SITECLASS,ADDRESS1,LOCALITY,COUNTY,METHOD,DETAIL_URL",
    returnGeometry: "false",
  });
  if (distanceMeters > 0) {
    params.set("distance", String(distanceMeters));
    params.set("units", "esriSRUnit_Meter");
  }
  const response = await fetch(`${endpoint}?${params}`);
  if (!response.ok) {
    throw new Error(`DEC proximity request failed: ${response.status}`);
  }
  const payload = await response.json();
  if (payload.error) {
    throw new Error(`DEC proximity request failed: ${payload.error.message}`);
  }
  return payload.features;
}

const records = [];
for (let index = 0; index < campuses.length; index += 8) {
  const batch = campuses.slice(index, index + 8);
  const results = await Promise.all(
    batch.map(async (campus) => {
      const [inside, within500] = await Promise.all([
        queryCampus(campus, 0),
        queryCampus(campus, 152.4),
      ]);
      const insideCodes = new Set(
        inside.map((feature) => feature.attributes.SITECODE),
      );
      return within500.map((feature) => ({
        campus,
        feature,
        relationship: insideCodes.has(feature.attributes.SITECODE)
          ? "point_inside_dec_boundary"
          : "within_500_ft_of_dec_boundary",
      }));
    }),
  );
  records.push(...results.flat());
}

records.sort(
  (a, b) =>
    a.campus.address.localeCompare(b.campus.address) ||
    a.feature.attributes.SITECODE.localeCompare(b.feature.attributes.SITECODE),
);

console.log(
  `Screened ${campuses.length} campuses against the current NYSDEC remediation-site boundary layer.`,
);
console.log(`Campus/site relationships within 500 feet: ${records.length}\n`);
for (const { campus, feature, relationship } of records) {
  console.log(
    [
      campus.address,
      campus.schools.map((school) => school.name).join("; "),
      relationship,
      feature.attributes.SITECODE,
      feature.attributes.SITENAME,
    ].join(" | "),
  );
}

