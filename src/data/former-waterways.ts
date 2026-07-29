export type WaterwayEvidenceType =
  | "documented_disposal_fill"
  | "documented_filled_waterway"
  | "documented_contaminated_sediment"
  | "documented_reclaimed_land";

export type FormerWaterwayRecord = {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number];
  evidenceType: WaterwayEvidenceType;
  waterwayHistory: string;
  documentedMaterial: string;
  interpretation: string;
  sourceUrl: string;
  sourceLabel: string;
  relatedSiteId?: string;
};

export const formerWaterwayRecords: FormerWaterwayRecord[] = [
  {
    id: "south-ogden-former-river-channel",
    name: "Former Buffalo River channel at South Ogden",
    location: "154 South Ogden Street, Buffalo",
    coordinates: [-78.80339974325409, 42.863467993220084],
    evidenceType: "documented_disposal_fill",
    waterwayHistory:
      "DEC records describe part of the property as following a former Buffalo River channel that was filled after the river was straightened.",
    documentedMaterial:
      "The state decision document identifies disposal fill containing ash, black sand, brick, wood, and glass over much of the property.",
    interpretation:
      "This is a documented filled-channel and disposal-site relationship. The modern school redevelopment is managed under the completed brownfield remedy and continuing site controls.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915268/Decision%20Document.BCP.C915268.2014-07-22.Final%20Decision%20Doccument.pdf",
    sourceLabel: "NYSDEC Decision Document — C915268",
  },
  {
    id: "wilkeson-slip-fourth-street",
    name: "Filled Wilkeson Slip at Fourth Street",
    location: "Fourth Street and former canal district, Buffalo",
    coordinates: [-78.88460949990512, 42.887003889582715],
    evidenceType: "documented_filled_waterway",
    waterwayHistory:
      "DEC records identify the filled former Wilkeson Slip beneath part of this area, where the slip historically met the former Erie Canal.",
    documentedMaterial:
      "The reviewed record establishes the filled waterway and the adjoining manufactured-gas-plant history. It does not support describing every part of the filled slip as industrial-waste disposal.",
    interpretation:
      "The waterway history and the adjacent gas-manufacturing cleanup are shown together but kept as separate facts.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915194/Work%20Plan.BCP.C915194.2005-03-25.IRMWP%20Final%203%2025%2005.pdf",
    sourceLabel: "NYSDEC Interim Remedial Measure Work Plan — C915194",
  },
  {
    id: "union-ship-canal-sediment",
    name: "Union Ship Canal and Hanna Furnace",
    location: "Ship Canal Commons, Buffalo",
    coordinates: [-78.8514, 42.835],
    evidenceType: "documented_contaminated_sediment",
    waterwayHistory:
      "The ship canal was constructed beginning in 1903 to serve the adjoining iron-manufacturing complex and was later extended.",
    documentedMaterial:
      "DEC records document furnace waste and industrial fill on surrounding land and contaminated canal sediment east of Route 5.",
    interpretation:
      "The canal sediment was covered with an engineered stone-and-gravel system, while the surrounding land received separate cleanup and cover measures.",
    sourceUrl: "https://extapps.dec.ny.gov/docs/regions_pdf/usccleanupfs.pdf",
    sourceLabel: "NYSDEC Union Ship Canal cleanup fact sheet",
    relatedSiteId: "union-ship-canal-hanna-furnace",
  },
  {
    id: "outer-harbor-greenbelt-reclaimed-land",
    name: "Outer Harbor Greenbelt reclaimed land",
    location: "Buffalo Outer Harbor",
    coordinates: [-78.869, 42.834],
    evidenceType: "documented_reclaimed_land",
    waterwayHistory:
      "The modern waterfront property was formed through decades of filling and land reclamation along the harbor.",
    documentedMaterial:
      "DEC identifies dredged harbor sediment, construction and demolition debris, and a former municipal dumping area that received ash and incinerator residue.",
    interpretation:
      "Selected contaminated soil was removed, a protective cover was installed, and the shoreline was stabilized before the property entered recreational use.",
    sourceUrl:
      "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/der-success-stories",
    sourceLabel: "NYSDEC Region 9 remediation success stories",
    relatedSiteId: "outer-harbor-greenbelt",
  },
];

export const waterwayEvidenceLabels: Record<WaterwayEvidenceType, string> = {
  documented_disposal_fill: "Former channel with documented disposal fill",
  documented_filled_waterway: "Documented filled waterway",
  documented_contaminated_sediment: "Documented contaminated sediment",
  documented_reclaimed_land: "Documented reclaimed waterfront land",
};
