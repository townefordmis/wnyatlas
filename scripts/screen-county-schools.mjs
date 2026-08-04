const schoolService =
  "https://gisservices.its.ny.gov/arcgis/rest/services/NYS_Schools/MapServer";
const remediationEndpoint =
  "https://gisservices.dec.ny.gov/arcgis/rest/services/der/" +
  "RemediationSpills/MapServer/3/query";
const counties = ["ERIE", "NIAGARA"];

async function fetchSchoolLayer(layerId, schoolType) {
  const params = new URLSearchParams({
    f: "json",
    where: `COUNTY_DESC IN (${counties.map((county) => `'${county}'`).join(",")})`,
    outFields:
      "INSTIT_ID,SED_CODE,LEGAL_NAME,POPULAR_NAME,PHYSADDRLINE1,PHYSCITY,PHYSZIPCD5,COUNTY_DESC,INSTSUBTYPDESC,RECORD_TYPE_DESC,SDL_DESC",
    returnGeometry: "true",
    outSR: "4326",
  });
  const response = await fetch(`${schoolService}/${layerId}/query?${params}`);
  const payload = await response.json();
  if (!response.ok || payload.error) {
    throw new Error(
      `School query failed: ${response.status} ${payload.error?.message ?? ""}`,
    );
  }
  return payload.features.map((feature) => ({
    ...feature.attributes,
    schoolType,
    longitude: feature.geometry.x,
    latitude: feature.geometry.y,
  }));
}

async function queryRemediationBoundaries(campus, distanceMeters) {
  const params = new URLSearchParams({
    f: "json",
    where: "1=1",
    geometry: JSON.stringify({
      x: campus.longitude,
      y: campus.latitude,
      spatialReference: { wkid: 4326 },
    }),
    geometryType: "esriGeometryPoint",
    inSR: "4326",
    spatialRel: "esriSpatialRelIntersects",
    outFields:
      "SITECODE,SITENAME,PROGRAM,SITECLASS,ADDRESS1,ADDRESS2,LOCALITY,ZIPCODE,COUNTY,TOWN,METHOD,GISFLAG,DETAIL_URL",
    returnGeometry: "false",
  });
  if (distanceMeters > 0) {
    params.set("distance", String(distanceMeters));
    params.set("units", "esriSRUnit_Meter");
  }
  const response = await fetch(`${remediationEndpoint}?${params}`);
  const payload = await response.json();
  if (!response.ok || payload.error) {
    throw new Error(
      `DEC query failed: ${response.status} ${payload.error?.message ?? ""}`,
    );
  }
  return payload.features;
}

const schools = (
  await Promise.all([
    fetchSchoolLayer(2, "public"),
    fetchSchoolLayer(4, "charter"),
  ])
).flat();

const campusesByAddress = new Map();
for (const school of schools) {
  const key = [
    school.COUNTY_DESC,
    school.PHYSADDRLINE1,
    school.PHYSCITY,
    school.PHYSZIPCD5,
  ]
    .map((value) => String(value ?? "").trim().toUpperCase())
    .join("|");
  const campus = campusesByAddress.get(key) ?? {
    key,
    address: school.PHYSADDRLINE1,
    city: school.PHYSCITY,
    zip: school.PHYSZIPCD5,
    county: school.COUNTY_DESC,
    longitude: school.longitude,
    latitude: school.latitude,
    schools: [],
  };
  campus.schools.push({
    name: school.LEGAL_NAME,
    type: school.schoolType,
    sedCode: school.SED_CODE,
    institutionId: school.INSTIT_ID,
    district: school.SDL_DESC,
  });
  campusesByAddress.set(key, campus);
}

const campuses = [...campusesByAddress.values()];
const candidates = [];
for (let index = 0; index < campuses.length; index += 8) {
  const batch = campuses.slice(index, index + 8);
  const results = await Promise.all(
    batch.map(async (campus) => {
      const [inside, within500] = await Promise.all([
        queryRemediationBoundaries(campus, 0),
        queryRemediationBoundaries(campus, 152.4),
      ]);
      const insideCodes = new Set(
        inside.map((feature) => feature.attributes.SITECODE),
      );
      return within500.map((feature) => ({
        campus,
        site: feature.attributes,
        relationship: insideCodes.has(feature.attributes.SITECODE)
          ? "point_inside_dec_boundary"
          : "within_500_ft_of_dec_boundary",
      }));
    }),
  );
  candidates.push(...results.flat());
}

candidates.sort(
  (a, b) =>
    a.campus.county.localeCompare(b.campus.county) ||
    a.campus.city.localeCompare(b.campus.city) ||
    a.campus.address.localeCompare(b.campus.address) ||
    a.site.SITECODE.localeCompare(b.site.SITECODE),
);
console.log(
  JSON.stringify(
    {
      generatedOn: new Date().toISOString(),
      sources: {
        schools: `${schoolService}/2 and /4`,
        remediationBoundaries: remediationEndpoint,
        distanceFeet: 500,
      },
      schoolRecords: schools.length,
      physicalCampuses: campuses.length,
      campusCountsByCounty: Object.fromEntries(
        counties.map((county) => [
          county,
          campuses.filter((campus) => campus.county === county).length,
        ]),
      ),
      candidateRelationships: candidates.length,
      candidateCampuses: new Set(candidates.map(({ campus }) => campus.key)).size,
      candidates,
    },
    null,
    2,
  ),
);
