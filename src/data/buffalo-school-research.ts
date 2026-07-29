import campusData from "./buffalo-school-campuses.json";
import remediationData from "./buffalo-nearby-remediation-records.json";

export type SchoolRelationship =
  | "point_inside_dec_boundary"
  | "within_500_ft_of_dec_boundary"
  | "within_1000_ft_of_dec_boundary"
  | "documented_campus_property"
  | "documented_directly_adjacent"
  | "mapped_parcel_boundary_intersection";

export type BuffaloSchoolCampus = {
  id: string;
  address: string;
  city: string;
  zip: string;
  coordinates: [number, number];
  schools: Array<{ name: string; type: string; sedCode: string }>;
  nearbyRemediationSites: Array<{
    siteCode: string;
    siteName: string;
    program: string;
    siteClass: string;
    siteAddress: string;
    relationship: SchoolRelationship;
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

const verifiedSchoolCampuses = (
  campusData as BuffaloSchoolCampus[]
)
  .filter((campus) => Boolean(verifiedCampusCleanupCodes[campus.address]))
  .map((campus) => ({
    ...campus,
    researchStatus: "documented_same_site" as const,
    nearbyRemediationSites: campus.nearbyRemediationSites
      .filter((site) =>
        Boolean(verifiedCampusCleanupCodes[campus.address][site.siteCode]),
      )
      .map((site) => ({
        ...site,
        relationship:
          verifiedCampusCleanupCodes[campus.address][site.siteCode],
      })),
  }));

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

export const buffaloSchoolCampuses = [
  ...verifiedSchoolCampuses.filter(
    (campus) => !tapestryAddresses.has(campus.address),
  ),
  ...(tapestryCampus ? [tapestryCampus] : []),
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

export const nearbyRemediationRecords =
  remediationData as NearbyRemediationRecord[];

export const nearbyRemediationByCode = new Map(
  nearbyRemediationRecords.map((record) => [record.siteCode, record]),
);

export const existingAtlasSiteByCleanupCode: Record<string, string> = {
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

export const documentedCampusHistory: Record<
  string,
  {
    heading: string;
    facts: string[];
    completion: string;
    sourceUrl: string;
    sourceLabel: string;
  }
> = {
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
    sourceLabel: "Tapestry School history",
  },
};

export const relationshipLabels: Record<SchoolRelationship, string> = {
  documented_campus_property: "Cleanup property includes the campus",
  documented_directly_adjacent: "DEC record identifies the site as directly adjacent",
  mapped_parcel_boundary_intersection:
    "Current county parcel intersects the mapped DEC boundary",
  point_inside_dec_boundary: "School point falls inside the mapped DEC boundary",
  within_500_ft_of_dec_boundary: "Mapped within 500 feet",
  within_1000_ft_of_dec_boundary: "Mapped 500–1,000 feet away",
};
