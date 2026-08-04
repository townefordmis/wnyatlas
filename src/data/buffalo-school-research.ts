import campusData from "./buffalo-school-campuses.json";
import remediationData from "./buffalo-nearby-remediation-records.json";

export type SchoolRelationship =
  | "point_inside_dec_boundary"
  | "within_500_ft_of_dec_boundary"
  | "within_1000_ft_of_dec_boundary"
  | "documented_campus_property"
  | "documented_directly_adjacent"
  | "documented_former_federal_property"
  | "mapped_parcel_boundary_intersection";

export type BuffaloSchoolCampus = {
  id: string;
  address: string;
  city: string;
  zip: string;
  coordinates: [number, number];
  displayName?: string;
  schools: Array<{ name: string; type: string; sedCode: string }>;
  nearbyRemediationSites: Array<{
    siteCode: string;
    siteName: string;
    program: string;
    siteClass: string;
    siteAddress: string;
    relationship: SchoolRelationship;
    distanceFeet?: number;
    detailUrl: string;
  }>;
  researchStatus:
    | "documented_same_site"
    | "proximity_screened"
    | "campus_mapped";
};

export const heldCleanupCodes = new Set([
  "915412",
  "915413",
  // DEC lists this former application as class N and the assembled source
  // record does not identify a completed cleanup or contaminants. Nearby
  // campuses already have stronger, separately documented qualifying sites.
  "C915214",
]);

const verifiedCampusCleanupCodes: Record<string, Record<string, SchoolRelationship>> = {
  "154 S OGDEN ST": {
    C915268: "documented_campus_property",
  },
  "75 W HURON ST": {
    C915282: "documented_campus_property",
  },
  "95 FOURTH ST": {
    V00362: "documented_campus_property",
    "915167": "documented_directly_adjacent",
    C915194: "documented_directly_adjacent",
    C915194A: "documented_directly_adjacent",
  },
  "65 GREAT ARROW AVE": {
    C915220: "mapped_parcel_boundary_intersection",
    C915326: "mapped_parcel_boundary_intersection",
  },
  "111 GREAT ARROW AVE": {
    C915220: "mapped_parcel_boundary_intersection",
    C915326: "mapped_parcel_boundary_intersection",
  },
};

const publishableProximityRelationships = new Set<SchoolRelationship>([
  "point_inside_dec_boundary",
  "within_500_ft_of_dec_boundary",
]);

const campusDisplayNameByAddress: Record<string, string> = {
  "2885 MAIN ST":
    "BENNETT HIGH SCHOOL OF INNOVATIVE TECHNOLOGY / MIDDLE EARLY COLLEGE HIGH SCHOOL",
};

const verifiedSchoolCampuses = (campusData as BuffaloSchoolCampus[])
  .map((campus) => {
    const verifiedCodes = verifiedCampusCleanupCodes[campus.address];
    const nearbyRemediationSites = campus.nearbyRemediationSites
      .filter((site) =>
        verifiedCodes
          ? Boolean(verifiedCodes[site.siteCode])
          : publishableProximityRelationships.has(site.relationship) &&
            !heldCleanupCodes.has(site.siteCode),
      )
      .map((site) => ({
        ...site,
        relationship: verifiedCodes?.[site.siteCode] ?? site.relationship,
      }));

    return {
      ...campus,
      displayName: campusDisplayNameByAddress[campus.address] ?? campus.displayName,
      researchStatus: verifiedCodes
        ? ("documented_same_site" as const)
        : ("proximity_screened" as const),
      nearbyRemediationSites,
    };
  })
  .filter((campus) => campus.nearbyRemediationSites.length > 0);

const tapestryAddresses = new Set([
  "65 GREAT ARROW AVE",
  "111 GREAT ARROW AVE",
]);
const tapestryRecords = verifiedSchoolCampuses.filter((campus) =>
  tapestryAddresses.has(campus.address),
);
const tapestrySites = new Map<
  string,
  BuffaloSchoolCampus["nearbyRemediationSites"][number]
>();
tapestryRecords.forEach((campus) =>
  campus.nearbyRemediationSites.forEach((site) =>
    tapestrySites.set(site.siteCode, site),
  ),
);

const tapestryCampus: BuffaloSchoolCampus | undefined = tapestryRecords.length
  ? {
      id: "tapestry-great-arrow-campus",
      address: "65 & 111 GREAT ARROW AVE",
      city: "BUFFALO",
      zip: "14216",
      coordinates: [-78.87120170649202, 42.942437270921715],
      schools: tapestryRecords.flatMap((campus) => campus.schools),
      nearbyRemediationSites: Array.from(tapestrySites.values()),
      researchStatus: "documented_same_site",
    }
  : undefined;

const royaltonHartlandCampus: BuffaloSchoolCampus = {
  id: "royalton-hartland-middleport-campus",
  address: "54 & 78 STATE ST",
  city: "MIDDLEPORT",
  zip: "14105",
  coordinates: [-78.4672605, 43.2119685],
  schools: [
    {
      name: "ROYALTON-HARTLAND HIGH SCHOOL",
      type: "public",
      sedCode: "401201060003",
    },
    {
      name: "ROYALTON-HARTLAND MIDDLE SCHOOL",
      type: "public",
      sedCode: "401201060004",
    },
  ],
  nearbyRemediationSites: [
    {
      siteCode: "932014",
      siteName: "FMC Corporation — Royalton-Hartland School property (OU4)",
      program: "State Superfund / RCRA Corrective Action",
      siteClass: "2",
      siteAddress: "Roy-Hart Middleport campus",
      relationship: "documented_campus_property",
      detailUrl:
        "https://dec.ny.gov/environmental-protection/waste-management/hazardous-waste/fmc-middleport-facility",
    },
  ],
  researchStatus: "documented_same_site",
};

const blasdellElementaryCampus: BuffaloSchoolCampus = {
  id: "blasdell-elementary-campus",
  address: "3780 S PARK AVE",
  city: "BLASDELL",
  zip: "14219",
  coordinates: [-78.8228, 42.7955],
  schools: [
    {
      name: "BLASDELL ELEMENTARY SCHOOL",
      type: "public",
      sedCode: "141604060004",
    },
  ],
  nearbyRemediationSites: [
    {
      siteCode: "C915192",
      siteName: "Jonnie's Porta Signs",
      program: "Brownfield Cleanup Program",
      siteClass: "C",
      siteAddress: "3734 South Park Avenue",
      relationship: "within_500_ft_of_dec_boundary",
      distanceFeet: 386,
      detailUrl: "https://extapps.dec.ny.gov/data/DecDocs/C915192/",
    },
  ],
  researchStatus: "proximity_screened",
};

const kalfasCampus: BuffaloSchoolCampus = {
  id: "henry-j-kalfas-magnet-campus",
  address: "1880 BEECH AVE",
  city: "NIAGARA FALLS",
  zip: "14305",
  coordinates: [-79.0401, 43.1158],
  schools: [
    {
      name: "HENRY J KALFAS MAGNET SCHOOL",
      type: "public",
      sedCode: "400800010015",
    },
  ],
  nearbyRemediationSites: [
    {
      siteCode: "932136",
      siteName: "Tract II Highland Avenue",
      program: "State Superfund Program",
      siteClass: "C",
      siteAddress: "Highland and Beech Avenues",
      relationship: "within_500_ft_of_dec_boundary",
      distanceFeet: 382,
      detailUrl: "https://extapps.dec.ny.gov/data/DecDocs/932136/",
    },
    {
      siteCode: "B00022",
      siteName: "Tract II Highland Avenue",
      program: "Environmental Restoration Program",
      siteClass: "Former program record",
      siteAddress: "Highland and Beech Avenues",
      relationship: "within_500_ft_of_dec_boundary",
      distanceFeet: 382,
      detailUrl: "https://extapps.dec.ny.gov/data/DecDocs/B00022/",
    },
  ],
  researchStatus: "proximity_screened",
};

const lewistonPorterCampus: BuffaloSchoolCampus = {
  id: "lewiston-porter-central-campus",
  displayName: "LEWISTON-PORTER CENTRAL CAMPUS",
  address: "4061 CREEK RD",
  city: "YOUNGSTOWN",
  zip: "14174",
  coordinates: [-79.01444, 43.21384],
  schools: [
    { name: "LEWISTON-PORTER PRIMARY EDUCATION CENTER", type: "public", sedCode: "" },
    { name: "LEWISTON-PORTER INTERMEDIATE EDUCATION CENTER", type: "public", sedCode: "" },
    { name: "LEWISTON-PORTER MIDDLE SCHOOL", type: "public", sedCode: "" },
    { name: "LEWISTON-PORTER SENIOR HIGH SCHOOL", type: "public", sedCode: "361719001534" },
  ],
  nearbyRemediationSites: [
    {
      siteCode: "USACE-LOOW-LP-2011",
      siteName: "Former LOOW buffer zone and wastewater infrastructure",
      program: "DERP-FUDS / U.S. Army Corps of Engineers site inspection",
      siteClass: "Federal historical investigation",
      siteAddress: "Lewiston-Porter Central School District campus",
      relationship: "documented_former_federal_property",
      detailUrl:
        "https://extapps.dec.ny.gov/data/DecDocs/932153/Report.RCRA.932153.2011-05-24.LEW-Port_Schools_SI_report.pdf",
    },
  ],
  researchStatus: "documented_same_site",
};

const holmesElementaryCampus: BuffaloSchoolCampus = {
  id: "holmes-elementary-tonawanda-campus",
  address: "365 DUPONT AVE",
  city: "TONAWANDA",
  zip: "14150",
  coordinates: [-78.89721586347919, 42.97633749862072],
  schools: [
    {
      name: "HOLMES ELEMENTARY SCHOOL",
      type: "public",
      sedCode: "142601030013",
    },
  ],
  nearbyRemediationSites: [
    {
      siteCode: "915038",
      siteName: "Union Carbide-Linde Division",
      program: "RCRA Corrective Action / federal FUSRAP history",
      siteClass: "A",
      siteAddress: "175 East Park Drive",
      relationship: "within_500_ft_of_dec_boundary",
      detailUrl:
        "https://appfactory.dec.ny.gov/DERExternalSearch/ERDDetails?SiteCode=915038",
    },
  ],
  researchStatus: "proximity_screened",
};

export const buffaloSchoolCampuses = [
  ...verifiedSchoolCampuses.filter(
    (campus) => !tapestryAddresses.has(campus.address),
  ),
  ...(tapestryCampus ? [tapestryCampus] : []),
  royaltonHartlandCampus,
  blasdellElementaryCampus,
  kalfasCampus,
  lewistonPorterCampus,
  holmesElementaryCampus,
];

export type NearbyRemediationRecord = {
  siteCode: string;
  siteName: string;
  program: string;
  siteClass: string;
  address: string;
  closestRelationship: SchoolRelationship;
  projects: Array<{ name: string; date: string }>;
  contaminants: string[];
  controls: Array<{ code: string; type: string }>;
  owners: string[];
  decDetailUrl: string;
  decDocumentIndex: string;
  documentIndexStatus: string;
  hasCertificateOfCompletion: boolean;
  hasFinalEngineeringReport: boolean;
  hasSiteManagementPlan: boolean;
  hasPeriodicReview: boolean;
  openDataStatus: "matched" | "not_found";
  openDataSource: string;
  assembledOn: string;
};

const regionalRemediationRecords: NearbyRemediationRecord[] = [
  {
    siteCode: "915038",
    siteName: "Union Carbide-Linde Division",
    program: "RCRA Corrective Action / federal FUSRAP history",
    siteClass: "A",
    address: "175 East Park Drive, Tonawanda",
    closestRelationship: "within_500_ft_of_dec_boundary",
    projects: [
      { name: "Manhattan Engineer District uranium processing", date: "1942–1946" },
      { name: "Cleanup under standards then in effect", date: "1953" },
      { name: "Federal removal and remedial actions", date: "1997–2013" },
      { name: "FUSRAP Site Closeout Report", date: "2015-03-30" },
      { name: "Transfer to DOE Office of Legacy Management", date: "2017-03-30" },
    ],
    contaminants: [],
    controls: [],
    owners: ["Praxair/Linde industrial property"],
    decDetailUrl:
      "https://appfactory.dec.ny.gov/DERExternalSearch/ERDDetails?SiteCode=915038",
    decDocumentIndex:
      "https://www.lrd.usace.army.mil/Missions/Projects/Display/Article/3612342/linde-site/",
    documentIndexStatus: "Official USACE FUSRAP project and closeout summary",
    hasCertificateOfCompletion: false,
    hasFinalEngineeringReport: false,
    hasSiteManagementPlan: false,
    hasPeriodicReview: false,
    openDataStatus: "matched",
    openDataSource: "NYSDEC boundary record and U.S. Army Corps of Engineers FUSRAP history",
    assembledOn: "2026-08-04",
  },
  {
    siteCode: "USACE-LOOW-LP-2011",
    siteName: "Former LOOW buffer zone and wastewater infrastructure",
    program: "DERP-FUDS / U.S. Army Corps of Engineers site inspection",
    siteClass: "Federal historical investigation",
    address: "4061 Creek Road, Youngstown",
    closestRelationship: "documented_former_federal_property",
    projects: [
      { name: "Department of Defense ownership", date: "1942–1945" },
      { name: "Phase I outfall-line investigation", date: "1999" },
      { name: "Gamma walkover and drainage-ditch sampling", date: "2002" },
      { name: "Campus soil investigations", date: "2001–2006" },
      { name: "Campus Soils Management Plan", date: "2007" },
      { name: "USACE final site-inspection report", date: "2011-03" },
    ],
    contaminants: [
      "Explosives, boron and lithium tested below the outfall line; no reportable explosives",
      "VOCs, SVOCs, pesticides, PCBs, explosives and metals tested along the outfall",
      "Localized arsenic and PAH findings evaluated in campus soil investigations",
      "Localized PAHs and other constituents evaluated in Southwest Drainage Ditch media",
    ],
    controls: [
      { code: "SMP", type: "Campus Soils Management Plan prepared in 2007" },
    ],
    owners: ["Lewiston-Porter Central School District"],
    decDetailUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/932153/Report.RCRA.932153.2011-05-24.LEW-Port_Schools_SI_report.pdf",
    decDocumentIndex: "https://extapps.dec.ny.gov/data/DecDocs/932153/",
    documentIndexStatus: "Official DEC document collection containing the USACE report",
    hasCertificateOfCompletion: false,
    hasFinalEngineeringReport: false,
    hasSiteManagementPlan: true,
    hasPeriodicReview: false,
    openDataStatus: "matched",
    openDataSource: "U.S. Army Corps of Engineers site-inspection report",
    assembledOn: "2026-08-03",
  },
  {
    siteCode: "C915192",
    siteName: "Jonnie's Porta Signs",
    program: "Brownfield Cleanup Program",
    siteClass: "C",
    address: "3734 South Park Avenue, Blasdell",
    closestRelationship: "within_500_ft_of_dec_boundary",
    projects: [
      { name: "Brownfield Cleanup Agreement", date: "2005-05-31" },
      { name: "Remedial work completed", date: "2005" },
      { name: "Certificate of Completion", date: "2008-09-11" },
    ],
    contaminants: [
      "Petroleum-related compounds in soil and groundwater",
      "Metals in historic fill",
    ],
    controls: [
      { code: "IC", type: "Environmental easement and commercial-use restriction" },
    ],
    owners: [],
    decDetailUrl: "https://extapps.dec.ny.gov/data/DecDocs/C915192/",
    decDocumentIndex: "https://extapps.dec.ny.gov/data/DecDocs/C915192/",
    documentIndexStatus: "Official DEC document collection",
    hasCertificateOfCompletion: true,
    hasFinalEngineeringReport: false,
    hasSiteManagementPlan: true,
    hasPeriodicReview: true,
    openDataStatus: "matched",
    openDataSource: "NYSDEC remediation-site records and project documents",
    assembledOn: "2026-07-29",
  },
  {
    siteCode: "932136",
    siteName: "Tract II Highland Avenue",
    program: "State Superfund Program",
    siteClass: "C",
    address: "Highland and Beech Avenues, Niagara Falls",
    closestRelationship: "within_500_ft_of_dec_boundary",
    projects: [
      { name: "Environmental Restoration investigation", date: "2000" },
      { name: "Environmental Restoration Record of Decision", date: "2003" },
      { name: "State Superfund Record of Decision amendment", date: "2012-03" },
      { name: "Certificate of Completion", date: "2018-11-08" },
    ],
    contaminants: ["Lead in soil and fill", "Polycyclic aromatic hydrocarbons (PAHs)"],
    controls: [
      { code: "EC", type: "Site-wide cover system" },
      { code: "IC", type: "Environmental easement and commercial/industrial-use restriction" },
      { code: "SMP", type: "Site Management Plan and periodic review" },
    ],
    owners: [],
    decDetailUrl: "https://extapps.dec.ny.gov/data/DecDocs/932136/",
    decDocumentIndex: "https://extapps.dec.ny.gov/data/DecDocs/932136/",
    documentIndexStatus: "Official DEC document collection",
    hasCertificateOfCompletion: true,
    hasFinalEngineeringReport: true,
    hasSiteManagementPlan: true,
    hasPeriodicReview: true,
    openDataStatus: "matched",
    openDataSource: "NYSDEC remediation-site records and project documents",
    assembledOn: "2026-07-29",
  },
];

export const nearbyRemediationRecords = [
  ...(remediationData as NearbyRemediationRecord[]),
  ...regionalRemediationRecords,
];

export const nearbyRemediationByCode = new Map(
  nearbyRemediationRecords.map((record) => [record.siteCode, record]),
);

export const existingAtlasSiteByCleanupCode: Record<string, string> = {
  "915038": "linde-air-products",
  C915192: "jonnies-porta-signs",
  "932136": "tract-ii-highland-avenue",
  B00022: "tract-ii-highland-avenue",
  "932014": "fmc-middleport",
  "915033": "lasalle-reservoir-quarry-landfill",
  "915167": "west-genesee-former-mgp",
  C915283: "lasalle-reservoir-quarry-landfill",
  C915194: "west-genesee-former-mgp",
  C915194A: "west-genesee-former-mgp",
  V00362: "west-genesee-former-mgp",
  C915220: "pierce-arrow-manufacturing-complex",
  C915326: "pierce-arrow-manufacturing-complex",
  C915279: "1827-fillmore-former-quarry",
  C915318: "main-hertel-the-rails",
  C915318A: "main-hertel-the-rails",
};

export const cleanupStoryGroupByCode: Record<string, string> = {
  "915038": "linde-air-products",
  C915192: "jonnies-porta-signs",
  "932136": "tract-ii-highland-avenue",
  B00022: "tract-ii-highland-avenue",
  C915194: "buffalo-service-station-mgp",
  C915194A: "buffalo-service-station-mgp",
  "915167": "buffalo-service-station-mgp",
  V00362: "buffalo-service-station-mgp",
  C915208: "275-franklin",
  C915208A: "275-franklin",
  "915210": "main-hertel-corridor",
  C915210: "main-hertel-corridor",
  C915318: "main-hertel-corridor",
  C915318A: "main-hertel-corridor",
  C915220: "pierce-arrow-complex",
  C915312: "pierce-arrow-complex",
  C915326: "pierce-arrow-complex",
  C915354: "pierce-arrow-complex",
  C915358: "pierce-arrow-complex",
  C915370: "pierce-arrow-complex",
  C915320: "pierce-arrow-complex",
  C915294: "pilgrim-village-complex",
  C915362: "pilgrim-village-complex",
  C915363: "pilgrim-village-complex",
  C915415: "pilgrim-village-complex",
  "915007": "anaconda-aurubis",
  V00314: "anaconda-aurubis",
  V00734: "buffalo-river-dredging",
  "915324": "buffalo-river-dredging",
  "915033": "lasalle-reservoir",
  C915283: "lasalle-reservoir",
};

export const cleanupStoryLabels: Record<string, string> = {
  "linde-air-products": "Linde Air Products / Union Carbide industrial property",
  "jonnies-porta-signs": "Jonnie's Porta Signs / CVS Blasdell cleanup",
  "tract-ii-highland-avenue": "Tract II Highland Avenue cleanup",
  "buffalo-service-station-mgp":
    "Former Buffalo Service Station manufactured-gas complex",
  "275-franklin": "275 Franklin Street on-site and off-site cleanup",
  "main-hertel-corridor": "Main and Hertel / Hertel Warehouse cleanup corridor",
  "pierce-arrow-complex": "Former Pierce-Arrow manufacturing complex",
  "pilgrim-village-complex": "Pilgrim Village redevelopment and cleanup",
  "anaconda-aurubis": "Anaconda / American Brass / Aurubis industrial property",
  "buffalo-river-dredging": "Buffalo River GLNPO dredging project",
  "lasalle-reservoir": "LaSalle Reservoir and 89 LaSalle Avenue",
};

const relationshipRank: Record<SchoolRelationship, number> = {
  documented_campus_property: 0,
  documented_directly_adjacent: 1,
  documented_former_federal_property: 0,
  mapped_parcel_boundary_intersection: 1,
  point_inside_dec_boundary: 0,
  within_500_ft_of_dec_boundary: 1,
  within_1000_ft_of_dec_boundary: 2,
};

export type NearbyCleanupStory = {
  id: string;
  title: string;
  relationship: SchoolRelationship;
  sites: BuffaloSchoolCampus["nearbyRemediationSites"];
  records: NearbyRemediationRecord[];
};

export function consolidateNearbyCleanupStories(
  sites: BuffaloSchoolCampus["nearbyRemediationSites"],
): NearbyCleanupStory[] {
  const grouped = new Map<string, BuffaloSchoolCampus["nearbyRemediationSites"]>();

  sites.forEach((site) => {
    const groupId = cleanupStoryGroupByCode[site.siteCode] ?? site.siteCode;
    const group = grouped.get(groupId) ?? [];
    group.push(site);
    grouped.set(groupId, group);
  });

  return Array.from(grouped, ([id, groupSites]) => {
    const orderedSites = [...groupSites].sort(
      (a, b) =>
        relationshipRank[a.relationship] - relationshipRank[b.relationship],
    );
    return {
      id,
      title: cleanupStoryLabels[id] ?? orderedSites[0].siteName,
      relationship: orderedSites[0].relationship,
      sites: orderedSites,
      records: orderedSites
        .map((site) => nearbyRemediationByCode.get(site.siteCode))
        .filter((record): record is NearbyRemediationRecord => Boolean(record)),
    };
  }).sort(
    (a, b) =>
      relationshipRank[a.relationship] - relationshipRank[b.relationship] ||
      a.title.localeCompare(b.title),
  );
}

export const nearbySiteHistoryByCode: Record<
  string,
  {
    summary: string;
    status: string;
    sourceLabel: string;
    sourceUrl: string;
  }
> = {
  C915279: {
    summary:
      "The property was a stone quarry by at least 1917, was backfilled with material of unknown origin in the 1940s and 1950s, and became the Kensington Heights apartment complex in 1958. DEC documented PAHs and metals in soil and fill.",
    status:
      "Cleanup included excavation, a cover system, and institutional controls. DEC issued a Certificate of Completion in December 2019.",
    sourceLabel: "DEC 1827 Fillmore Avenue cleanup fact sheet",
    sourceUrl: "https://extapps.dec.ny.gov/data/der/factsheet/c915279cubegins.pdf",
  },
  C915400: {
    summary:
      "The active brownfield record covers a multi-parcel block south of Best Street. The application identifies mixed residential and commercial history, including an RND Machine property; investigation records also evaluate fill and former automotive uses in the surrounding block.",
    status:
      "DEC currently maps this as an active Brownfield Cleanup Program site. The linked record documents investigation work, not a completed remedy.",
    sourceLabel: "DEC Jefferson and Best Brownfield Cleanup application",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915400/Application.BCP.C915400.2024-01-30.Revised%20Complete%20Application.pdf",
  },
  C915362: {
    summary:
      "Dense housing and small shops occupied the property from the late 1800s into the mid-1970s, and a gasoline station operated at Michigan and Best during the mid-1900s. The Pilgrim Village apartment buildings followed. DEC identified petroleum, PAHs, and metals in fill and groundwater.",
    status:
      "The remedy removed affected soil and addressed redevelopment conditions. DEC issued a Certificate of Completion in December 2022.",
    sourceLabel: "DEC Former Pilgrim Village decision document",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915362/Decision%20Document.BCP.C915362.2021-05-10.Decision%20Document.pdf",
  },
  C915375: {
    summary:
      "DEC's 0.736-acre Michigan-Best brownfield record documents PAHs, metals, and legacy pesticides including DDT-related compounds in the investigation dataset.",
    status:
      "DEC issued a Certificate of Completion in December 2022 for an unrestricted-use cleanup level.",
    sourceLabel: "DEC Michigan-Best Certificate of Completion",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915375/Certificate%20of%20Completion.BCP.C915375.2022-12-29.Executed%20COC%20Package%20.pdf",
  },
  "915007": {
    summary:
      "The state record covers the former Anaconda Company/American Brass industrial property near Military Road and Sayre Street. DEC's dataset lists arsenic, cadmium, lead, and PCBs for the site.",
    status:
      "The state project history records investigation and remedial work in the 1990s. The public document folder was unavailable during review, so the map does not characterize present conditions beyond the current DEC record.",
    sourceLabel: "DEC remediation-site record 915007",
    sourceUrl:
      "https://appfactory.dec.ny.gov/DERExternalSearch/ERDDetails?SiteCode=915007",
  },
  "915057": {
    summary:
      "DEC identifies the 400 Vulcan Street property as the TRW/J.H. Williams Division record under the Resource Conservation and Recovery Act program.",
    status:
      "The state project history lists a 1982 remedial action and a 2012 site characterization. Accessible state records did not support a more detailed contaminant or remedy narrative, so this entry remains deliberately limited.",
    sourceLabel: "DEC remediation-site record 915057",
    sourceUrl:
      "https://appfactory.dec.ny.gov/DERExternalSearch/ERDDetails?SiteCode=915057",
  },
  C915271: {
    summary:
      "The downtown property contained known and previously unknown petroleum underground tanks and service-station-affected soil and fill. DEC's remedy removed the tanks, about 24,870 tons of petroleum-affected soil, and about 10,300 tons of service-station-affected soil and fill.",
    status:
      "DEC approved the Final Engineering Report and issued a Certificate of Completion in December 2014 after the excavation and clean backfill work.",
    sourceLabel: "DEC 250 Delaware Avenue completion fact sheet",
    sourceUrl: "https://extapps.dec.ny.gov/data/der/factsheet/c915271coc.pdf",
  },
  C915366: {
    summary:
      "DEC application records trace portions of the block to residences, furniture manufacturing, an automotive garage and electrical service business, and later commercial uses. The record is for the defined Ellicott and North Oak Street parcels.",
    status:
      "DEC currently maps the property as an active Brownfield Cleanup Program site; the linked collection documents investigation and planning rather than a completed cleanup.",
    sourceLabel: "DEC Ellicott and Oak Streets Brownfield Cleanup application",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915366/Application.BCP.C915366.2020-07-01.Complete%20Application.pdf",
  },
  C915318: {
    summary:
      "Manufacturing began around 1910 and included paint, vehicles, gasoline pumps, and later Keystone electroplating operations. Investigation and cleanup addressed industrial soil, drums, tanks, transformers, and demolition material.",
    status:
      "DEC issued a Brownfield Cleanup Program Certificate of Completion in December 2024 before reuse as The Rails mixed-use development.",
    sourceLabel: "DEC Main and Hertel document collection",
    sourceUrl: "https://extapps.dec.ny.gov/data/DecDocs/C915318/",
  },
  C915389: {
    summary:
      "The assembled property included a former automotive-repair building, vacant residential buildings, mixed commercial/residential space, and vacant land. Investigation identified SVOCs, metals, pesticides, and chlorinated solvents in the state dataset.",
    status:
      "Cleanup demolished the buildings and removed about 7,850 tons of affected soil. DEC issued a Certificate of Completion in December 2025.",
    sourceLabel: "DEC 147 West Tupper completion fact sheet",
    sourceUrl: "https://extapps.dec.ny.gov/data/der/factsheet/c915389coc.pdf",
  },
  "915033": {
    summary:
      "The LaSalle property was a large limestone quarry later filled with municipal refuse, incinerator ash, demolition debris, appliances, vegetation, and documented Buffalo Forge waste. Portions became McCarthy Park and nearby development.",
    status:
      "State investigation supported removal from the hazardous-waste registry; the remaining quarry functions as a stormwater-retention basin. This history applies to the mapped former quarry/landfill area.",
    sourceLabel: "DEC LaSalle Reservoir Phase II investigation",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/915033/Report.HW.915033.1991-04-01.Phase_II_Investigation.pdf",
  },
  "915151": {
    summary:
      "General Electric operated here from 1921 to 1968 and serviced electrical equipment containing PCB dielectric fluid. Investigations found PCBs on building surfaces, in soil, in on-site sewers, on neighboring soil, and in part of the public sewer system.",
    status:
      "Work from 1992 through 1999 removed affected soil and sewer sediment and decontaminated the building. Covers, access controls, an environmental notice, and a Site Management Plan address residual PCB impacts.",
    sourceLabel: "DEC 318 Urban Street periodic review report",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/915151/Report.HW.915151.2025-10-31.PRR_and_IC-EC_Certification.pdf",
  },
  C915211: {
    summary:
      "The NOCO #S41 record concerns a former gasoline-service property at 1055 Genesee Street. DEC lists petroleum compounds and PAHs in the cleanup dataset.",
    status:
      "DEC issued a Certificate of Completion in December 2009. An environmental easement, commercial-use restriction, groundwater-use restriction, monitoring, and a Site Management Plan remain documented controls.",
    sourceLabel: "DEC NOCO #S41 Site Management Plan",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915211/Work%20Plan.BCP.C915211.2021-06-30.Revised_SMP.pdf",
  },
  C915237: {
    summary:
      "The connected downtown properties had residential and parking uses; 432 Pearl Street also had hot-air-heater manufacturing by 1925. The related 275 Franklin property operated as a dry cleaner from at least 1951 into the early 2000s. DEC lists PCE and TCE for the 432 Pearl cleanup record.",
    status:
      "DEC issued a Certificate of Completion in December 2017, with site-management documentation for the connected properties.",
    sourceLabel: "DEC 275 Franklin and 432 Pearl Site Management Plan",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915237/Work%20Plan.BCP.C915237.2017-07-26.Site%20Management%20Work%20Plan.pdf",
  },
  C915282: {
    summary:
      "DEC records document a horse stable, automotive garage and rental operations, and an automotive fueling station with underground tanks on portions of the 73–79 West Huron property.",
    status:
      "DEC issued a Brownfield Cleanup Program Certificate of Completion in December 2017; continuing site-management and periodic-review records are available.",
    sourceLabel: "DEC 73–79 West Huron Brownfield Cleanup application",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915282/Application.BCP.C915282.2013-10-02.BCP%20Application%20and%20Attachments%20A%20-%20F.pdf",
  },
  "915038": {
    summary:
      "From 1942 through 1946, Linde Air Products, a Union Carbide division, processed uranium ores for the Manhattan Engineer District at the East Park Drive ceramics plant. Federal records identify radium-226, thorium-230, and uranium isotopes as FUSRAP constituents of concern on portions of the industrial property.",
    status:
      "Federal work from 1997 through 2013 removed nearly 400,000 tons of affected material. USACE closed the FUSRAP remedy in 2015 for unlimited use and unrestricted exposure, while NYSDEC separately continues to map an active RCRA record for the industrial facility. Those are different regulatory records and neither establishes a condition at the school.",
    sourceLabel: "USACE Linde FUSRAP site history and closeout summary",
    sourceUrl:
      "https://www.lrd.usace.army.mil/Missions/Projects/Display/Article/3612342/linde-site/",
  },
};

export const documentedCampusHistory: Record<
  string,
  {
    heading: string;
    facts: string[];
    completion: string;
    sourceUrl: string;
    sourceLabel: string;
    additionalSources?: Array<{ label: string; url: string }>;
  }
> = {
  "4061 CREEK RD": {
    heading: "Former LOOW property, outfall, and testing record",
    facts: [
      "The Army Corps identifies the 372-acre campus parcel as part of the former Lake Ontario Ordnance Works buffer zone—not the TNT manufacturing area.",
      "During federal ownership, a buried 30-inch outfall carried treated TNT wastewater, acid-neutralized wastewater, and sanitary wastewater from the former LOOW treatment plant toward the Niagara River. The concrete-encased terracotta pipe crosses the campus about six feet below ground.",
      "The Southwest Drainage Ditch also crosses the campus. Historical-aerial reviews identified mounds, scars, pits, pathways, and drainage features for field investigation; the Corps found no documentation of other Defense Department use of the school parcel.",
      "Phase I sampling below the outfall included TNT field screening and laboratory testing for explosives, boron, and lithium. The report states there were no reportable explosives and the data did not indicate an impact from former Defense Department activities.",
      "Later work included a gamma walkover; surface and subsurface soil testing; ditch water, sediment, and soil testing; and samples from 11 locations along the campus portion of the outfall for VOCs, SVOCs, pesticides, PCBs, explosives, and metals.",
      "Investigations reported localized arsenic and PAH findings in some campus soils and localized PAHs in ditch sediment. A 2007 Soils Management Plan addressed soil handling during redevelopment.",
      "A 2008 Niagara County community review identified remaining questions about residue in the outfall west of the Southwest Drainage Ditch, ditch-sediment coverage, wooded-area mounds, and running trails. The 2011 Corps inspection later investigated the ditch and aerial anomalies and summarized earlier outfall testing, but it did not state that every recommendation in the 2008 review had been closed.",
    ],
    completion:
      "The Corps' 2011 site inspection concluded that the investigated aerial anomalies and Southwest Drainage Ditch did not show contamination resulting from former Defense Department activity. It also concluded that the measured constituents did not pose unacceptable risks to people using or visiting the property. These are the report's findings, not a claim that the property was never affected or that no future review is warranted.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/932153/Report.RCRA.932153.2011-05-24.LEW-Port_Schools_SI_report.pdf",
    sourceLabel: "USACE Lewiston-Porter Final Site Inspection Report — March 2011",
    additionalSources: [
      {
        label: "Niagara County Community LOOW Final Report — September 2008",
        url: "https://downloads.niagaracounty.gov/Document_center/Department/A%20-F/Environmental/CLP%20Final%20Report%20Sept%2008.pdf",
      },
      {
        label: "NYSDOH Lewiston and Porter cancer-incidence investigation — 1991–2000",
        url: "https://www.health.ny.gov/environmental/investigations/lewiston/docs/lewiston_cancer_report.pdf",
      },
    ],
  },
  "154 S OGDEN ST": {
    heading: "Documented property history",
    facts: [
      "DEC records state that the property was not previously developed.",
      "DEC identifies past solid-waste disposal over much of the site as a source of contamination.",
      "Part of the property followed a former Buffalo River channel that was filled after the river was straightened.",
      "The DEC record describes fill containing ash, black sand, brick, wood, and glass.",
    ],
    completion:
      "DEC issued a Brownfield Cleanup Program Certificate of Completion in December 2014. The remedy includes a cover system and continuing site-management controls.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915268/Decision%20Document.BCP.C915268.2014-07-22.Final%20Decision%20Doccument.pdf",
    additionalSources: [{ label: "DEC South Buffalo Charter School document collection — C915268", url: "https://extapps.dec.ny.gov/data/DecDocs/C915268/" }],
    sourceLabel: "DEC Decision Document — C915268",
  },
  "75 W HURON ST": {
    heading: "Documented property history",
    facts: [
      "DEC records describe 73 and 75 W. Huron as one six-story building.",
      "Documented uses include a horse stable and later automotive garage and rental operations.",
      "City-directory research in the DEC application lists Huron Street Garage, Cyphers Incubator Co., and Cyphers Card Co.",
      "The 77–79 W. Huron parking-lot portion formerly contained an automotive fueling station with underground storage tanks.",
    ],
    completion:
      "DEC issued a Brownfield Cleanup Program Certificate of Completion in December 2017. The DEC collection includes continuing site-management and periodic-review records.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915282/Application.BCP.C915282.2013-10-02.BCP%20Application%20and%20Attachments%20A%20-%20F.pdf",
    additionalSources: [{ label: "DEC 73–79 West Huron Street document collection — C915282", url: "https://extapps.dec.ny.gov/data/DecDocs/C915282/" }],
    sourceLabel: "DEC Brownfield Cleanup application — C915282",
  },
  "95 FOURTH ST": {
    heading: "Documented property and adjacent-site history",
    facts: [
      "DEC records state that part of the former Buffalo Service Center property was acquired by the City of Buffalo for construction of Waterfront School in the 1970s.",
      "The school property is partially underlain by the filled former Wilkeson Slip, which met the former Erie Canal in this area.",
      "The adjacent Buffalo Service Station manufactured-gas plant operated under various companies from 1848 to 1948.",
      "DEC records identify the Fourth Street Site and portions of the former manufactured-gas complex as adjacent to the school and describe coordinated investigation and cleanup work.",
    ],
    completion:
      "State records list a November 2006 Certificate of Completion for the Former Buffalo Service Station cleanup. Connected Fourth Street, off-site, and voluntary-cleanup records include site-management or periodic-review documentation.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915194/Work%20Plan.BCP.C915194.2005-03-25.IRMWP%20Final%203%2025%2005.pdf",
    additionalSources: [{ label: "DEC Former Buffalo Service Station document collection — C915194", url: "https://extapps.dec.ny.gov/data/DecDocs/C915194/" }],
    sourceLabel: "DEC Interim Remedial Measure Work Plan — C915194",
  },
  "65 & 111 GREAT ARROW AVE": {
    heading: "Documented campus and mapped parcel relationship",
    facts: [
      "Tapestry School records state that the school moved to 65 Great Arrow Avenue in 2010 and acquired approximately seven acres at 111 Great Arrow Avenue in December 2012.",
      "The current Erie County parcel service places both school locations on one parcel owned by Tapestry Charter School.",
      "That parcel intersects the current mapped NYSDEC boundaries for the Former Pierce Arrow Manufacturing Site (C915220) and 157 Great Arrow Avenue (C915326).",
      "A mapped boundary intersection can represent overlap or a shared boundary. It does not establish contamination beneath a school building, exposure, or present risk.",
    ],
    completion:
      "DEC's 2017 application for C915326 states that the earlier C915220 investigation and remediation were not completed. It also states that only a portion of the two cleanup-site boundaries overlapped. C915326 remains a separate DEC record. Consult the linked DEC files for current regulatory status.",
    sourceUrl: "https://tapestryschool.org/about-tapestry/history/",
    additionalSources: [
      { label: "DEC Former Pierce Arrow Manufacturing document collection — C915220", url: "https://extapps.dec.ny.gov/data/DecDocs/C915220/" },
      { label: "DEC 157 Great Arrow Avenue document collection — C915326", url: "https://extapps.dec.ny.gov/data/DecDocs/C915326/" },
    ],
    sourceLabel: "Tapestry School history",
  },
  "54 & 78 STATE ST": {
    heading: "Documented school-property cleanup history",
    facts: [
      "DEC describes the neighboring FMC facility as a pesticide plant that formerly manufactured arsenic-based and other pesticide products.",
      "Past plant operations and waste practices affected soil and other environmental media on the facility and in off-site areas.",
      "DEC's 2013 remedy identifies the Royalton-Hartland School property as Operable Unit 4, a cleanup area outside the FMC facility boundary.",
      "Agency records document arsenic-affected soil and removal work on areas used by the middle and high school campus.",
    ],
    completion:
      "School-property soil removal occurred in 1996 and 1999, followed by phased DEC remediation from 2015 through 2020. A 2021 DEC update states that remedial activities on the Roy-Hart Middleport campus, Operable Unit 4, were complete.",
    sourceUrl:
      "https://dec.ny.gov/environmental-protection/waste-management/hazardous-waste/fmc-middleport-facility/news-updates",
    additionalSources: [{ label: "DEC FMC Middleport facility history and cleanup program", url: "https://dec.ny.gov/environmental-protection/waste-management/hazardous-waste/fmc-middleport-facility" }],
    sourceLabel: "DEC FMC Middleport news and cleanup updates",
  },
  "3780 S PARK AVE": {
    heading: "Documented nearby-site history",
    facts: [
      "The mapped DEC boundary for Jonnie's Porta Signs is approximately 386 feet from the official school location point.",
      "DEC records describe the 0.58-acre property at 3734 South Park Avenue as a former gasoline filling station.",
      "Investigation documented petroleum contamination in soil and groundwater and metals in historic fill.",
      "The 2005 cleanup removed fuel and waste-oil tanks, piping, pump islands, two hydraulic lifts, about 2,822 cubic yards of petroleum-affected soil, and about 998 cubic yards of fill.",
    ],
    completion:
      "DEC issued a Brownfield Cleanup Program Certificate of Completion in September 2008. Commercial-use controls and an environmental easement remain part of the documented remedy. The reviewed records do not state that contamination reached the school property.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915192/Fact%20Sheet.BCP.C915192.2008-09-11.COC.pdf",
    additionalSources: [{ label: "DEC Jonnie's Porta Signs document collection — C915192", url: "https://extapps.dec.ny.gov/data/DecDocs/C915192/" }],
    sourceLabel: "DEC Certificate of Completion fact sheet — C915192",
  },
  "1880 BEECH AVE": {
    heading: "Documented nearby-site history",
    facts: [
      "The mapped Tract II Highland Avenue boundary is approximately 382 feet from the official school location point.",
      "DEC records describe about 20 acres at Highland and Beech Avenues. The western portion was used by business-form manufacturers from 1903 to 1971; the eastern portion was associated with the adjacent former battery-manufacturing property.",
      "Fill and waste included demolition debris, battery casings, granular fill, and later household dumping. DEC identified lead and polycyclic aromatic hydrocarbons in soil as contaminants of concern.",
      "The Environmental Restoration record B00022 and State Superfund record 932136 describe successive programs for the same cleanup story, not two separate nearby properties.",
    ],
    completion:
      "The remedy included excavation and off-site disposal, treatment or disposal of lead-affected material, a site-wide cover, an environmental easement, and continuing site management. DEC issued a Certificate of Completion in November 2018. The reviewed records do not state that contamination reached the school property.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/932136/ROD.HW.932136.2012-03-28.ROD_AMENDMENT.pdf",
    additionalSources: [{ label: "DEC Highland Avenue / Kalfas Magnet School document collection — 932136", url: "https://extapps.dec.ny.gov/data/DecDocs/932136/" }],
    sourceLabel: "DEC Record of Decision amendment — 932136",
  },
  "365 DUPONT AVE": {
    heading: "Documented nearby industrial-property history",
    facts: [
      "The current NYSED school point is within 500 feet of NYSDEC's mapped boundary for the Union Carbide-Linde Division record at 175 East Park Drive.",
      "The school address is not inside the mapped DEC boundary. This entry is proximity-only and does not identify the school property as part of the Linde cleanup site.",
      "The East Park Drive plant processed uranium ores for the Manhattan Engineer District from 1942 through 1946. Federal cleanup records concern defined portions of that industrial property and connected Tonawanda disposal locations.",
      "USACE reports that federal removal and remedial work between 1997 and 2013 shipped nearly 400,000 tons of affected material out of state.",
    ],
    completion:
      "USACE finalized the Linde FUSRAP Site Closeout Report in March 2015 and states that no further response is needed for FUSRAP-eligible constituents, with unrestricted-use conditions achieved. NYSDEC still maps a separate active RCRA record for the industrial facility. The reviewed records do not state that contamination reached Holmes Elementary School.",
    sourceUrl:
      "https://www.lrd.usace.army.mil/Missions/Projects/Display/Article/3612342/linde-site/",
    sourceLabel: "U.S. Army Corps of Engineers Linde Site history and status",
    additionalSources: [
      {
        label: "DOE Tonawanda/Linde FUSRAP site certification summary",
        url: "https://www.energy.gov/lm/articles/tonawanda-new-york-site-fusrap-site-certification-summary",
      },
      {
        label: "NYSDEC remediation-site record — 915038",
        url: "https://appfactory.dec.ny.gov/DERExternalSearch/ERDDetails?SiteCode=915038",
      },
    ],
  },
};

export const relationshipLabels: Record<SchoolRelationship, string> = {
  documented_campus_property: "Cleanup property includes the campus",
  documented_directly_adjacent: "DEC record identifies the site as directly adjacent",
  documented_former_federal_property:
    "Agency records document former federal ownership and infrastructure on campus",
  mapped_parcel_boundary_intersection:
    "Current county parcel intersects the mapped DEC boundary",
  point_inside_dec_boundary: "School point falls inside the mapped DEC boundary",
  within_500_ft_of_dec_boundary:
    "Official school point is within 500 feet of the mapped DEC boundary",
  within_1000_ft_of_dec_boundary: "Mapped 500–1,000 feet away",
};
