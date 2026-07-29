export type WaterwayEvidenceType =
  | "documented_disposal_fill"
  | "documented_filled_waterway"
  | "documented_contaminated_sediment"
  | "documented_reclaimed_land"
  | "documented_engineered_waterway"
  | "documented_culverted_waterway";

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
    id: "buried-erie-canal-buffalo-terminus",
    name: "Buried Erie Canal and Commercial Slip terminus",
    location: "Canalside and the former downtown canal corridor, Buffalo",
    coordinates: [-78.8771, 42.8775],
    evidenceType: "documented_filled_waterway",
    waterwayHistory:
      "The original Erie Canal reached Buffalo through the Commercial Slip at the foot of Main Street. After the Barge Canal shifted the active western connection to Tonawanda, the old canal through downtown was abandoned and filled; the Commercial Slip was filled in 1926.",
    documentedMaterial:
      "The reviewed historical sources establish abandonment and filling, but do not establish that every buried section was filled with industrial waste. WNY Atlas therefore labels this as a filled waterway rather than a waste-disposal site.",
    interpretation:
      "Canalside later re-excavated, rewatered, or interpreted portions of the historic terminus. This marker identifies the documented terminus area and does not claim to trace the entire buried canal alignment.",
    sourceUrl:
      "https://www.buffalony.gov/DocumentCenter/View/9463/PreservationReadySurvey",
    sourceLabel: "City of Buffalo Preservation Ready Survey",
  },
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
  {
    id: "lockport-hydraulic-race-tunnel",
    name: "Lockport hydraulic race and tunnel",
    location: "Erie Canal industrial district, Lockport",
    coordinates: [-78.6919, 43.1708],
    evidenceType: "documented_engineered_waterway",
    waterwayHistory:
      "Lockport's hydraulic company developed a man-made race and tunnel system in the early 1850s to divert Erie Canal water through the industrial district for mechanical power. Historical planning records state that the tunnel continued in use into the early 1940s.",
    documentedMaterial:
      "The reviewed sources document an engineered underground water-power system. They do not establish that the tunnel was a general industrial-waste disposal channel.",
    interpretation:
      "This marker identifies the documented downtown industrial-water system at an interpretive location rather than claiming a surveyed line for every buried segment.",
    sourceUrl:
      "https://www.niagaracountybusiness.com/file-library/100208/city_lockport_comprehensive_plan.pdf",
    sourceLabel: "City of Lockport Comprehensive Plan",
  },
  {
    id: "gulf-creek-upper-mountain-road",
    name: "Gulf Creek, wetlands and culvert corridor",
    location: "Old Upper Mountain Road area, Lockport",
    coordinates: [-78.72441412673288, 43.166278355547604],
    evidenceType: "documented_culverted_waterway",
    waterwayHistory:
      "DEC investigation describes Gulf Creek passing through open channel and wetland areas before entering a large culvert. The Gulf Interceptor sewer also crossed the Old Upper Mountain Road cleanup area.",
    documentedMaterial:
      "State records document contaminated creek sediment and floodplain soil associated with the former disposal area, as well as unintended sewer and stormwater discharges caused by degraded interceptor infrastructure.",
    interpretation:
      "The creek is partly open, partly wetland and partly culverted. WNY Atlas therefore identifies an altered waterway and sewer relationship rather than describing the entire creek as buried.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/932112/Report.HW.932112.2022-07-19.Old%20Upper%20MOuntain%20Road%20City%20of%20Lockport%20LF%20ESD.pdf",
    sourceLabel: "NYSDEC Old Upper Mountain Road Engineering Design Report",
    relatedSiteId: "old-upper-mountain-road-landfill",
  },
];

export const waterwayEvidenceLabels: Record<WaterwayEvidenceType, string> = {
  documented_disposal_fill: "Former channel with documented disposal fill",
  documented_filled_waterway: "Documented filled waterway",
  documented_contaminated_sediment: "Documented contaminated sediment",
  documented_reclaimed_land: "Documented reclaimed waterfront land",
  documented_engineered_waterway: "Documented engineered waterway",
  documented_culverted_waterway: "Documented altered or culverted waterway",
};
