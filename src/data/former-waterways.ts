export type WaterwayEvidenceType =
  | "documented_disposal_fill"
  | "documented_filled_waterway"
  | "documented_contaminated_sediment"
  | "documented_reclaimed_land"
  | "documented_engineered_waterway"
  | "documented_culverted_waterway"
  | "documented_filled_wetland"
  | "documented_slag_fill"
  | "documented_restored_wetland";

export type LandscapeEvidenceConfidence =
  | "documented"
  | "agency_mapped_approximation"
  | "research_boundary_pending";

export type FormerWaterwayRecord = {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number];
  evidenceType: WaterwayEvidenceType;
  displayClassification?: string;
  waterwayHistory: string;
  documentedMaterial: string;
  environmentalRecord?: string;
  hydrologicPathway?: string;
  remediationStatus?: string;
  evidenceSummary?: string;
  interpretation: string;
  sourceUrl: string;
  sourceLabel: string;
  additionalSources?: {
    url: string;
    label: string;
  }[];
  relatedSiteId?: string;
  changePeriod?: string;
  comparisonYears?: string[];
  evidenceConfidence?: LandscapeEvidenceConfidence;
  presentStatus?: string;
};

export const formerWaterwayRecords: FormerWaterwayRecord[] = [
  {
    id: "sinclair-genesee-river-channelization",
    name: "Genesee River channelization at Sinclair Refinery",
    location: "Former Sinclair Refinery and landfill, Wellsville",
    coordinates: [-77.9448, 42.1115],
    evidenceType: "documented_engineered_waterway",
    displayClassification:
      "Cleanup-driven river channelization · documented landfill-erosion control",
    waterwayHistory:
      "The Genesee River forms the eastern and southern boundaries of the Sinclair site. After landfill erosion and flooding exposed waste and carried debris toward the river, agencies first built and stabilized an interim diversion berm. EPA's permanent remedy then partially channelized the river to protect the consolidated hazardous-waste landfill from erosion and inundation during a 100-year flood.",
    documentedMaterial:
      "The adjacent landfill contained approximately 230,000 cubic yards of refinery waste, including oily sludge, tank and separator sludge, off-specification products, burned Fuller's earth, acid waste, ash, tetraethyl lead, pesticides, waste oil, heavy metals, and drums. This inventory belongs to the landfill and must not be assigned uniformly to river sediment.",
    environmentalRecord:
      "Groundwater from the site discharges toward the Genesee River, and later LNAPL sheens led to removal of affected riverbank soil and riverbed and drainage-swale sediment. A 3,300-foot collection trench and constructed wetland system now intercept and treat contaminated shallow groundwater before monitored discharge.",
    hydrologicPathway:
      "EPA's landfill investigation estimated that groundwater from the central landfill could reach the river in about 1.2 years under the conditions studied. River stage, flooding, bank erosion, shallow groundwater, and contaminated fill therefore formed a documented connected remedy problem.",
    remediationStatus:
      "Channelization construction began in 1990, received final inspection in 1991, and was accepted in 1992. The river work operates with the capped landfill, cutoff wall, bank protection, groundwater collection and wetland treatment, institutional controls, and long-term monitoring.",
    evidenceSummary:
      "DOCUMENTED cleanup-driven partial channelization and bank protection; mapped line is a generalized altered reach, not the landfill, contamination, excavation, or engineering-survey boundary.",
    interpretation:
      "The solid Atlas line shows the approximate Sinclair river-remedy reach from EPA's site figures. It does not reproduce the construction centerline, pre-remedy channel, floodplain, Superfund boundary, or contaminated-sediment area.",
    sourceUrl: "https://semspub.epa.gov/work/02/609934.pdf",
    sourceLabel: "U.S. EPA 2022 Sinclair Refinery Sixth Five-Year Review",
    additionalSources: [
      {
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=91000FBM.TXT",
        label: "U.S. EPA 1985 landfill and river Record of Decision",
      },
    ],
    relatedSiteId: "sinclair-refinery-wellsville",
    changePeriod: "Interim diversion in 1983; permanent partial channelization constructed 1990–1991 and accepted 1992",
    comparisonYears: ["Pre-remedy river", "1983", "1990", "1991", "1992", "Present"],
    evidenceConfidence: "agency_mapped_approximation",
    presentStatus:
      "The altered reach remains part of an operating Superfund remedy and must be understood with the landfill cap, bank protection, groundwater interception, and wetland treatment system.",
  },
  {
    id: "cayuga-island-manmade-extensions",
    name: "Cayuga Island man-made extensions",
    location: "Western tip and portions of the southern shore, Niagara Falls",
    coordinates: [-78.9646, 43.0719],
    evidenceType: "documented_reclaimed_land",
    waterwayHistory:
      "DEC records describe two man-made island-extension areas: the western tip and portions of the southern shore. The western tip was extended before 1930 and widened between 1958 and 1962; comparison of 1927 and 1980 maps showed portions of the south shoreline extending by as much as 100 feet.",
    documentedMaterial:
      "The historical record establishes that fill was placed, but the reviewed document says only that chemical and other companies were suspected of supplying it. WNY Atlas does not name a fill producer or characterize the entire island as contaminated without stronger records.",
    interpretation:
      "This marker is a representative evidence location, not the boundary of either extension. The 1927, 1938, 1958-1962, 1966, 1978-1980 and modern aerial series are the priority sequence for reconstructing the shoreline change.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/932008/Work%20Plan.HW.932008.1991-10-28.DATA_COLLECTION_PROGRAM.pdf",
    sourceLabel: "NYSDEC Cayuga Island data-collection record — Site 932008",
    changePeriod: "Before 1930 through 1962; south-shore change documented by 1980",
    comparisonYears: ["1927", "1938", "1958", "1962", "1966", "1978–1980", "2024"],
    evidenceConfidence: "agency_mapped_approximation",
    relatedSiteId: "cayuga-island-industrial-fill",
  },
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
      "Canalside later re-excavated, rewatered, or interpreted portions of the historic terminus. The dashed Atlas line connects Commercial Slip with the documented downtown corridor and Wilkeson confluence; it is a centerline reconstruction, not surveyed canal banks or a fill-material boundary.",
    sourceUrl:
      "https://www.buffalony.gov/DocumentCenter/View/9463/PreservationReadySurvey",
    additionalSources: [{
      url: "https://www.epa.gov/great-lakes-aocs/buffalo-river-aoc",
      label: "U.S. EPA Buffalo River Area of Concern history and current work",
    }],
    changePeriod: "Downtown canal abandoned after the Barge Canal era; Commercial Slip filled in 1926",
    comparisonYears: ["Historic Erie Canal mapping", "1927", "1938", "1951", "Canalside reconstruction", "2024"],
    evidenceConfidence: "documented",
    presentStatus: "Canalside interprets and rewaters part of the historic canal terminus. The marker is historical context, not a current contamination boundary.",
    sourceLabel: "City of Buffalo Preservation Ready Survey",
  },
  {
    id: "ohio-basin-conway-park",
    name: "Filled Ohio Basin and shipping canal",
    location: "Conway Park and the former Ohio Basin, Buffalo",
    coordinates: [-78.8667023, 42.8684856],
    evidenceType: "documented_filled_waterway",
    waterwayHistory:
      "State brownfield records identify the open-water Ohio Basin and its shipping canal immediately east of the 300 Ohio Street property. The basin and canal were later filled, and the former water area is now occupied by Conway Park.",
    documentedMaterial:
      "The reviewed records establish that the basin and canal were filled. They do not establish one uniform fill composition throughout the entire former waterway. A separate DEC site-management record describes fill containing varying amounts of brick, concrete, metal debris, ash and wood at the nearby 225 Louisiana Street cleanup site, but WNY Atlas does not extend that parcel-specific finding across Conway Park.",
    interpretation:
      "The shaded area approximates the former basin using the modern Father Conway Park footprint, while the dashed route follows the historic slip toward the Buffalo River. Neither geometry is a contamination boundary.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915257/Application.BCP.C915257.2011-07-21.Attachments_6_thru_13.pdf",
    sourceLabel: "NYSDEC 300 Ohio Street Brownfield Cleanup Program application",
    additionalSources: [
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915350/Work%20Plan.BCP.C915350.2023-12-18.Site%20Management%20Plan_Final.pdf",
        label: "NYSDEC 225 Louisiana Street site-management plan",
      },
    ],
    changePeriod: "Filled before the modern use of the former basin as Conway Park",
    comparisonYears: ["Historic harbor maps", "1927", "1938", "1951", "1966", "1978", "2024"],
    evidenceConfidence: "agency_mapped_approximation",
  },
  {
    id: "babcock-former-buffalo-river-channel",
    name: "Filled Buffalo River channel at Babcock Street",
    location: "Former ExxonMobil Buffalo Terminal, Elk and Babcock Streets",
    coordinates: [-78.83719331140942, 42.86557967382599],
    evidenceType: "documented_filled_waterway",
    displayClassification:
      "Former river channel · documented petroleum migration investigation",
    waterwayHistory:
      "State brownfield records describe the Buffalo River crossing the southern portion of the former refinery property before it was rerouted and straightened between 1914 and 1917 to improve navigation and industrial access.",
    documentedMaterial:
      "The former river channel was filled. Later investigations also identified petroleum contamination in portions of the larger industrial property, but WNY Atlas does not treat the entire buried channel as a uniform contaminant deposit.",
    environmentalRecord:
      "DEC's OU-3 investigation documented dissolved and free-phase petroleum near the Babcock combined-sewer-overflow structure. A petroleum release and sheening near the outfall in August 2020 prompted response work by DEC, the U.S. Coast Guard, the Buffalo Fire Department, and the property owner. The source could not initially be pinpointed; historic subsurface petroleum was identified as a potential source.",
    hydrologicPathway:
      "The 2021 hydrogeologic report says the backfilled 1914–1917 river channel may act as a preferential migration pathway or accumulation point for petroleum. Investigators also evaluated communication among river-stage changes, groundwater, petroleum-bearing subsurface material, and the deteriorated CSO structure. This mechanism is documented for the investigated OU-3 area, not every former river channel.",
    remediationStatus:
      "Interim containment and recovery followed the 2020 release. The long-term concept included extending sheet-pile containment, limiting communication between the CSO and surrounding subsurface, controlling groundwater, and recovering product where present. The linked ExxonMobil terminal page tracks the broader multi-operable-unit remedy.",
    evidenceSummary:
      "DOCUMENTED filled channel; DOCUMENTED localized petroleum impacts and investigated migration pathway; former-channel polygon is not a petroleum boundary.",
    interpretation:
      "Agency records identify the buried channel as a possible subsurface migration or accumulation pathway. The shaded Atlas reconstruction follows the former-riverbed band on the 2026 DEC investigation figure and is not a uniform contamination boundary.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915201D/Report.BCP.C915201D.2026-04-07.Western_Inv_Report.pdf",
    sourceLabel: "NYSDEC western-area supplemental investigation report — C915201D",
    additionalSources: [
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915201D/Report.BCP.C915201D.2021-07-30.OU-3_CSO%20Area_Hydrogeologic_Investigation.pdf",
        label: "NYSDEC Babcock Street CSO hydrogeologic investigation — C915201D",
      },
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915201D/Work%20Plan.BCP.C915201D.2020-10-19.Updated_Interim_CMWP_Rev-%202.pdf",
        label: "NYSDEC interim corrective-measures work plan following the 2020 release",
      },
    ],
    relatedSiteId: "exxonmobil-former-buffalo-terminal",
    changePeriod: "1914–1917",
    comparisonYears: ["Pre-1914 mapping", "1927", "1938", "1951", "1966", "2024"],
    evidenceConfidence: "documented",
  },
  {
    id: "south-ogden-former-river-channel",
    name: "Former Buffalo River channel at South Ogden",
    location: "154 South Ogden Street, Buffalo",
    coordinates: [-78.80339974325409, 42.863467993220084],
    evidenceType: "documented_disposal_fill",
    displayClassification:
      "Former river channel · documented disposal fill and completed brownfield remedy",
    waterwayHistory:
      "DEC records describe part of the property as following a former Buffalo River channel that was filled after the river was straightened.",
    documentedMaterial:
      "The state decision document identifies disposal fill containing ash, black sand, brick, wood, and glass over much of the property.",
    environmentalRecord:
      "The remedial investigation documented localized PAHs, metals, and petroleum-related compounds in soil and fill. These findings were evaluated by sample location and remedial area; they do not establish uniform contamination throughout either the property or the mapped former channel.",
    hydrologicPathway:
      "Groundwater was reported to move generally north to northwest toward the Buffalo River. The former-channel geometry was therefore important to investigation and redevelopment planning, but the agency record does not equate the full historic channel polygon with one contaminant pathway or waste body.",
    remediationStatus:
      "Interim remedial measures removed affected soil, and the property was redeveloped for South Buffalo Charter School with engineered cover and vapor-protection components. Long-term obligations continue through the DEC-approved site-management program.",
    evidenceSummary:
      "DOCUMENTED former river channel and disposal fill; DOCUMENTED localized contamination and completed brownfield remedy; approximate channel trace is not a contamination polygon.",
    interpretation:
      "This is a documented filled-channel and disposal-site relationship. The modern school redevelopment is managed under the completed brownfield remedy and continuing site controls.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915268/Decision%20Document.BCP.C915268.2014-07-22.Final%20Decision%20Doccument.pdf",
    sourceLabel: "NYSDEC Decision Document — C915268",
    additionalSources: [
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915268/Work%20Plan.BCP.C915268.2012-12-28.Final_RI_WP.pdf",
        label: "NYSDEC 154 South Ogden remedial-investigation work plan and historic-channel figure",
      },
    ],
    changePeriod: "River relocation documented before the 1927 comparison map",
    comparisonYears: ["1927", "1938", "1951", "1966", "1978", "2024"],
    evidenceConfidence: "documented",
  },
  {
    id: "wilkeson-slip-fourth-street",
    name: "Filled Wilkeson Slip at Fourth Street",
    location: "Fourth Street and former canal district, Buffalo",
    coordinates: [-78.88460949990512, 42.887003889582715],
    evidenceType: "documented_filled_waterway",
    displayClassification:
      "Filled industrial slip · documented manufactured-gas coal-tar impacts",
    waterwayHistory:
      "DEC records identify the filled former Wilkeson Slip beneath part of this area, where the slip historically met the former Erie Canal.",
    documentedMaterial:
      "The reviewed record establishes the filled waterway and the adjoining manufactured-gas-plant history. It does not support describing every part of the filled slip as industrial-waste disposal.",
    environmentalRecord:
      "DEC's off-site characterization documents manufactured-gas-plant impacts—principally coal tar—within portions of the former Wilkeson Slip and toward Fourth Street. Coal tar was observed entering a 2012 utility excavation from beneath Fourth Street. Fill in the investigation area was reported as roughly 6 to 21 feet thick and included silt, clay, sand, gravel, slag, and brick.",
    hydrologicPathway:
      "The filled slip and Erie Canal confluence created a distinct subsurface setting. Shallow groundwater generally moves toward the Lake Erie waterfront, while coal-tar observations followed particular borings, excavations, and former-slip areas rather than every part of the historic waterway.",
    remediationStatus:
      "Earlier work excavated part of the former slip east of the off-site study area, and later Fourth Street work removed affected material and installed sheet piling. Residual conditions and institutional or engineering controls must be read from the applicable DEC site files.",
    evidenceSummary:
      "DOCUMENTED filled slip; DOCUMENTED localized MGP coal-tar impacts; approximate slip and canal centerlines are not present-day contamination boundaries.",
    interpretation:
      "The dashed traces show the mapped former Wilkeson Slip and its local confluence with the former Erie Canal. The waterway history and adjacent gas-manufacturing cleanup are shown together but kept as separate facts.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915194/Work%20Plan.BCP.C915194.2005-03-25.IRMWP%20Final%203%2025%2005.pdf",
    changePeriod: "Historic canal-and-slip era through twentieth-century filling and redevelopment",
    comparisonYears: ["Historic canal maps", "1927", "1938", "1951", "1970s school development", "2024"],
    evidenceConfidence: "documented",
    presentStatus: "The filled slip and adjoining manufactured-gas-plant cleanup remain separate records. Current conditions are governed by the applicable cleanup and site-management documents.",
    sourceLabel: "NYSDEC Interim Remedial Measure Work Plan — C915194",
    additionalSources: [
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915194A/Report.BCP.C915194A.2015-12-23.Site%20Characterization.pdf",
        label: "NYSDEC Former Buffalo Service Station–Off-Site characterization — C915194A",
      },
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915194A/",
        label: "NYSDEC Wilkeson Slip / Off-Site document collection",
      },
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915194/",
        label: "NYSDEC Fourth Street / Former Buffalo Service Station document collection",
      },
    ],
  },
  {
    id: "tifft-historic-marsh-loss",
    name: "Tifft Street historic marsh loss",
    location: "Tifft Street, railroad lands and surviving Tifft marsh, Buffalo",
    coordinates: [-78.862, 42.847],
    evidenceType: "documented_filled_wetland",
    waterwayHistory:
      "Federal Great Lakes records describe the Tifft Street area as formerly containing the largest emergent marsh at the eastern end of Lake Erie. Industrial and railroad development fragmented and largely filled the broader marsh landscape.",
    documentedMaterial:
      "The reviewed source establishes substantial wetland loss and filling but does not identify one uniform fill material across the entire historical marsh. Individual disposal and cleanup areas require their own records.",
    interpretation:
      "The brown shading is a deliberately generalized envelope for the historically extensive marsh landscape, not a reconstructed wetland edge or filled-area limit. Its boundary note keeps the surviving and restored Tifft Nature Preserve habitat distinct from documented broader marsh loss.",
    sourceUrl:
      "https://archive.epa.gov/solec/web/pdf/coastal_wetlands_of_the_great_lakes.pdf",
    additionalSources: [
      { url: "https://dec.ny.gov/things-to-do/watchable-wildlife/sites/tifft-nature-preserve", label: "NYSDEC present-day Tifft Nature Preserve profile" },
      { url: "https://dec.ny.gov/sites/default/files/2024-01/bnrhabreport.pdf", label: "NYSDEC Buffalo and Niagara Rivers habitat inventory" },
    ],
    presentStatus: "The surviving preserve is a 264-acre urban habitat with a 75-acre cattail marsh. Historical wetland loss is not a claim that the present preserve is uniformly filled or contaminated.",
    sourceLabel: "U.S. EPA State of the Lakes Ecosystem Conference wetlands report",
    relatedSiteId: "tifft-nature-preserve",
    changePeriod: "Industrial and railroad expansion through the twentieth century",
    comparisonYears: ["1927", "1938", "1951", "1966", "1978", "1995", "2024"],
    evidenceConfidence: "research_boundary_pending",
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
    additionalSources: [{ url: "https://www.epa.gov/great-lakes-aocs/buffalo-river-aoc", label: "U.S. EPA Buffalo River Area of Concern cleanup and restoration record" }],
    changePeriod: "Canal construction beginning in 1903; industrial decline and later remediation through the modern era",
    comparisonYears: ["1903 construction", "1927", "1938", "1951", "1966", "Cleanup-era plans", "2024"],
    evidenceConfidence: "documented",
    presentStatus: "The canal remains open water at Ship Canal Commons. DEC's engineered sediment cover and the surrounding land remedy are distinct controls.",
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
    changePeriod: "Reclamation beginning in the late nineteenth century and continuing through the twentieth century",
    comparisonYears: ["1927", "1938", "1951", "1966", "1978", "2002", "2024"],
    evidenceConfidence: "documented",
  },
  {
    id: "rattlesnake-island-the-flats",
    name: "Rattlesnake Island, former channel and The Flats",
    location: "River Road and Two Mile Creek industrial corridor, Town of Tonawanda",
    coordinates: [-78.9248, 42.9987],
    evidenceType: "documented_disposal_fill",
    displayClassification:
      "Filled island channel and wetland · documented industrial disposal sites",
    waterwayHistory:
      "Government habitat and cleanup records describe Rattlesnake Island beside a broad Niagara River marsh historically known as The Flats. The surrounding marsh and the channel separating the island from the mainland were subsequently filled as the River Road industrial corridor developed.",
    documentedMaterial:
      "A federal-state habitat assessment reports that Rattlesnake Island and the surrounding marsh were largely filled with industrial wastes by the late 1920s. DEC investigation records for the River Road site document later landfilling and industrial-waste disposal from approximately 1957 to 1970 and identify the former Rattlesnake Creek channel as filled. These records concern defined study areas and do not support treating the entire River Road corridor as one uniform deposit.",
    environmentalRecord:
      "The River Road record documents refuse, construction rubble, fly ash, bottom ash, foundry sand, slag, boiler-cleaning waste, and later liquid industrial wastes within its defined site. Investigations found PAHs, PCBs, metals, cyanide, and non-aqueous-phase liquid in different media. Adjacent Cherry Farm and other former Flats disposal sites have separate boundaries and records.",
    hydrologicPathway:
      "Groundwater beneath River Road generally moves west toward the Niagara River. DEC selected groundwater and product recovery to prevent contaminated groundwater or LNAPL discharge to the river, while the filled creek and former wetland geometry explain how the present industrial shoreline replaced the earlier island-and-marsh system.",
    remediationStatus:
      "The River Road remedy included a clean-earth cover, shoreline stabilization, groundwater extraction, LNAPL recovery, monitoring, and deed restrictions. Those controls apply to the River Road site and must not be projected across the entire former Flats landscape.",
    evidenceSummary:
      "DOCUMENTED filled Rattlesnake Creek and former wetland; DOCUMENTED waste and contamination within defined cleanup sites; broader Flats boundary remains a historical reconstruction.",
    interpretation:
      "The dashed line traces the former Rattlesnake Creek channel reproduced from the 1901 USGS map on DEC Figure 8. It makes the buried route visible without turning the broader former island and marsh landscape into an unsupported exposure or disposal boundary.",
    sourceUrl:
      "https://dec.ny.gov/sites/default/files/2024-01/bnrhabreport.pdf",
    sourceLabel: "Buffalo and Niagara Rivers Habitat Inventory and Assessment",
    additionalSources: [
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/915031/Report.HW.915031.1993-09-01.Phase1-2RIandFS.pdf",
        label: "NYSDEC River Road remedial investigation and feasibility study",
      },
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/915031/ROD.HW.915031.1994-03-01.river_road.pdf",
        label: "NYSDEC River Road Record of Decision — Site 915031",
      },
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915353/Report.BCP.C915353.2020-08-30.nygeology_2020_Tonawanda_Coke_ESA.pdf",
        label: "NYSDEC Tonawanda Coke environmental site assessment",
      },
    ],
    changePeriod: "Industrial filling documented by the late 1920s; later disposal documented approximately 1957-1970",
    comparisonYears: ["1901 map", "1927-1929", "1938", "1951", "1966", "1978", "2002", "2024"],
    evidenceConfidence: "research_boundary_pending",
  },
  {
    id: "bethlehem-tecumseh-slag-shoreline",
    name: "Bethlehem Steel / Tecumseh slag shoreline",
    location: "Former Bethlehem Steel waterfront, Lackawanna",
    coordinates: [-78.85913, 42.82158],
    evidenceType: "documented_slag_fill",
    waterwayHistory:
      "Federal and state records describe a long Lake Erie shoreline transformed by steelmaking operations. Approximately 440 acres of the western property became man-made land extending into the lake.",
    documentedMaterial:
      "EPA identifies iron- and steelmaking slag and other plant wastes as the material forming this man-made waterfront. Separate waste units and remedy areas exist within the larger property and should not be collapsed into one condition.",
    interpretation:
      "The shaded overview joins the 1912 and 1970 shoreline traces registered from the DEC engineering plate, making the scale of created land visible. The separate dated shoreline lines remain the more precise evidence; neither is a uniform disposal or contamination boundary.",
    sourceUrl:
      "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-tecumseh-redevelopment-incorporated-lackawanna",
    sourceLabel: "U.S. EPA Tecumseh Redevelopment hazardous-waste cleanup summary",
    relatedSiteId: "bethlehem-steel",
    changePeriod: "Approximately 1900–1968 for the major shoreline advance",
    comparisonYears: ["1912 shoreline", "1927", "1938", "1951", "1966", "1978", "1995", "2024"],
    evidenceConfidence: "documented",
  },
  {
    id: "outer-harbor-slip-3-created-wetland",
    name: "Outer Harbor Slip 3 created wetland",
    location: "Shipping Slip 3, Buffalo Outer Harbor",
    coordinates: [-78.8688, 42.8394],
    evidenceType: "documented_restored_wetland",
    waterwayHistory:
      "Shipping Slip 3 is an engineered harbor feature now being converted into coastal wetland habitat through a containment breakwater, beneficial reuse of navigation-channel sediment and native planting.",
    documentedMaterial:
      "DEC authorized placement of approximately 285,000 cubic yards of sediment dredged from Buffalo Harbor federal navigation channels in 2024, 2026 and 2028. The reviewed permit states that testing found the material suitable for beneficial use at Slip 3.",
    interpretation:
      "This is a modern created-wetland project, not evidence that a preexisting historical wetland was filled. It provides the present-day endpoint for the atlas timeline: an industrial slip intentionally reshaped as habitat using reviewed dredged material.",
    sourceUrl:
      "https://dec.ny.gov/news/environmental-notice-bulletin/2023-06-28/completed-application/buffalo-outer-harbor-slip-3",
    sourceLabel: "NYSDEC Buffalo Outer Harbor Slip 3 water-quality certification",
    changePeriod: "Breakwater construction beginning in 2023; sediment placement authorized for 2024, 2026 and 2028",
    comparisonYears: ["1927", "1938", "1951", "1966", "1978", "2002", "2024", "2026–2028 planned"],
    evidenceConfidence: "documented",
  },
  {
    id: "steel-winds-dredge-and-slag-fill",
    name: "Steel Winds dredge-spoil and slag-fill area",
    location: "Lake Erie shoreline north of Smokes Creek, Lackawanna",
    coordinates: [-78.8672, 42.8264],
    evidenceType: "documented_disposal_fill",
    waterwayHistory:
      "The Steel Winds parcel occupies part of the former Bethlehem Steel shoreline-fill area north of Smokes Creek.",
    documentedMaterial:
      "DEC records state that this portion of the slag-fill area was created first with U.S. Army Corps of Engineers dredge spoils and later with Bethlehem Steel slag beginning in 1937.",
    interpretation:
      "This record provides unusually specific fill provenance. It does not establish that every adjoining Bethlehem shoreline parcel received the same sequence or material mixture.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915205/Report.BCP.C915205.2007-12-03.Final_SMP.pdf",
    sourceLabel: "NYSDEC Steel Winds site-management plan — C915205",
    relatedSiteId: "bethlehem-steel",
    changePeriod: "Dredged-material placement followed by slag placement beginning in 1937",
    comparisonYears: ["1927", "1938", "1951", "1966", "1978", "2002", "2024"],
    evidenceConfidence: "documented",
  },
  {
    id: "smokes-creek-shifted-mouth",
    name: "Smokes Creek shifted mouth and confined channel",
    location: "Former Bethlehem Steel property to Lake Erie, Lackawanna",
    coordinates: [-78.863012, 42.811638],
    evidenceType: "documented_engineered_waterway",
    waterwayHistory:
      "A 2024 state study reports that slag deposits advanced the shoreline between about 1900 and 1968. The 1912 shoreline suggests the creek once reached Lake Erie near the present railroad crossing, approximately one-half mile from its modern outlet.",
    documentedMaterial:
      "The surrounding man-made land includes steelmaking slag. The same study describes approximately 440 acres along two miles of waterfront as primarily man-made land where iron- and steelmaking slag and waste were disposed. It also identifies two federal dumping grounds near the creek mouth that received dredged material from Buffalo Harbor, the Buffalo River and Black Rock Canal.",
    interpretation:
      "The modern lower creek crosses the slag-fill area in a confined, low-gradient channel. WNY Atlas registered the state study's engineering plate to the present creek and now shows the plate's 1912, 1923, 1937 and 1970 shoreline traces as separate colored lines. Blue shading marks the approximate land between the mapped 1912 and 1970 shorelines on both sides of the creek, including the SteelWinds shoreline strip. It is a landscape-change reconstruction, not a parcel, disposal-unit or uniform-contamination boundary.",
    sourceUrl:
      "https://extapps.dec.ny.gov/fs/programs/press/R9/12572245-Smokes%20Creek-Final%20Report_DRAFT%205-15-2024.pdf",
    sourceLabel: "NYSDEC Smokes Creek habitat opportunity assessment",
    additionalSources: [
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/915009/Report.HW.915009.2019-05-14.CMS%20-%20Plates.pdf",
        label: "NYSDEC Bethlehem Steel Corrective Measures Study — Plate 4-1A",
      },
      {
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/environmental-cleanup-at-former-bethlehem-steel-site",
        label: "NYSDEC former Bethlehem Steel cleanup overview",
      },
    ],
    relatedSiteId: "smokes-creek-bethlehem-corridor",
    changePeriod: "Approximately 1900–1968",
    comparisonYears: ["1912 shoreline", "1923 shoreline", "1937 shoreline", "1970 shoreline", "2024 study"],
    evidenceConfidence: "agency_mapped_approximation",
  },
  {
    id: "fern-brook-managed-outlet",
    name: "Fern Brook former culvert and managed outlet",
    location: "Evans Town Park and the former Mickey Rats property, Angola",
    coordinates: [-79.0650386749351, 42.6431143761833],
    evidenceType: "documented_engineered_waterway",
    waterwayHistory:
      "Fern Brook reaches Lake Erie beside Evans Town Park and the former Mickey Rats property. A 2021 state environmental notice for the Grandview Bay redevelopment required abandonment of a culvert that formerly contained Fern Brook after FEMA issued a Letter of Map Revision. Town waterfront records separately document maintenance dredging that directs the brook to the lake instead of allowing its outlet channel to run laterally across the Town Beach.",
    documentedMaterial:
      "The reviewed records document a former culverted route and active management of the beach outlet. Erie County's 1926 and 1951 aerial photographs also show the lower drainage corridor as the surrounding road and residential pattern developed. The records do not identify industrial-waste fill, establish the culvert's original construction date, or provide enough surveyed information to draw its precise former centerline.",
    interpretation:
      "The marker uses the USGS monitoring coordinate for the present mouth. The teal points are a cautious Atlas alignment of the circa-1926 open channel, checked against the 1951 aerial and surrounding modern geography. They show a possible historical corridor, not the exact former culvert alignment. WNY Atlas is withholding a present-day centerline until a named, georeferenced Town, FEMA or engineering source confirms it.",
    sourceUrl:
      "https://dec.ny.gov/news/environmental-notice-bulletin/2021-05-19/seqr/erie-county-the-town-of-evans-planning-board-as",
    sourceLabel: "NYSDEC Grandview Bay conditional negative declaration",
    additionalSources: [
      {
        url: "https://dos.ny.gov/system/files/documents/2020/08/evans_t_lwrp_compressed-1.pdf",
        label: "Town of Evans Local Waterfront Revitalization Program",
      },
      {
        url: "https://waterdata.usgs.gov/monitoring-location/USGS-0421403305/statistics/",
        label: "USGS Fern Brook at Mouth monitoring location",
      },
      {
        url: "https://townofevansny.gov/wp-content/uploads/Drainage-Study-for-Fern-Brook-Muddy-Creek-and-Big-Sister-Creek-.pdf",
        label: "Town of Evans Fern Brook drainage study",
      },
      {
        url: "https://www3.erie.gov/sites/default/files/images/aerialphotos/1951/51_6H20.jpg",
        label: "Erie County 1951 aerial photograph 6H20",
      },
      {
        url: "https://www.usgs.gov/national-hydrography/access-national-hydrography-products",
        label: "USGS National Hydrography Dataset",
      },
    ],
    changePeriod:
      "Former culvert documented in the 2021 redevelopment review; beach-outlet maintenance documented in the Town waterfront program",
    comparisonYears: ["1926", "1951", "2021", "2022 field study", "Present"],
    evidenceConfidence: "agency_mapped_approximation",
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
      "The dashed line is a generalized interpretive corridor through the canal-era industrial district. It makes the buried hydraulic system visible while explicitly avoiding a survey-grade claim for individual tunnel segments.",
    sourceUrl:
      "https://www.niagaracountybusiness.com/file-library/100208/city_lockport_comprehensive_plan.pdf",
    additionalSources: [{ url: "https://www.canals.ny.gov/", label: "New York State Canal Corporation" }],
    changePeriod: "Developed in the early 1850s; documented operation into the early 1940s",
    comparisonYears: ["Nineteenth-century industrial mapping", "1927", "1938", "1951", "2024"],
    evidenceConfidence: "agency_mapped_approximation",
    presentStatus: "The point is an interpretive location for the documented buried power system; it is not a surveyed tunnel alignment or a waste-disposal boundary.",
    sourceLabel: "City of Lockport Comprehensive Plan",
  },
  {
    id: "gulf-creek-upper-mountain-road",
    name: "Gulf Creek, wetlands and culvert corridor",
    location: "Old Upper Mountain Road area, Lockport",
    coordinates: [-78.72441412673288, 43.166278355547604],
    evidenceType: "documented_culverted_waterway",
    displayClassification:
      "Buried and altered creek · documented landfill and sediment impacts",
    waterwayHistory:
      "DEC investigation describes Gulf Creek passing through open channel and wetland areas before entering a large culvert. The Gulf Interceptor sewer also crossed the Old Upper Mountain Road cleanup area.",
    documentedMaterial:
      "State records document contaminated creek sediment and floodplain soil associated with the former disposal area, as well as unintended sewer and stormwater discharges caused by degraded interceptor infrastructure.",
    environmentalRecord:
      "DEC investigations documented deep municipal and industrial waste in the former ravine and VOCs, PAHs, pesticides, and metals in waste or soil, with related impacts in Gulf Creek water, sediment, and floodplain soil. Individual pesticide and PCB detections did not, by themselves, establish the landfill as their source.",
    hydrologicPathway:
      "Municipal dumping and burning pushed waste into the ravine and buried the Gulf Interceptor and the creek's headwater setting. Groundwater and drainage converge toward Gulf Creek, which reaches Eighteen Mile Creek roughly a mile downstream. The mapped line is a generalized creek-and-culvert corridor, not the sewer or cleanup boundary.",
    remediationStatus:
      "New York first relocated roughly 5,000 feet of combined sewer away from the waste and creek. Cleanup beginning in 2023 excavated landfill material, affected floodplain soil, and Gulf Creek sediment for treatment and consolidation beneath an engineered on-site cover, with water controls and continuing management.",
    evidenceSummary:
      "DOCUMENTED altered and partly buried headwater corridor; DOCUMENTED landfill and contaminated-sediment impacts; source attribution remains compound- and sample-specific.",
    interpretation:
      "The creek is partly open, partly wetland and partly culverted. WNY Atlas therefore identifies an altered waterway and sewer relationship rather than describing the entire creek as buried.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/932112/Report.HW.932112.2022-07-19.Old%20Upper%20MOuntain%20Road%20City%20of%20Lockport%20LF%20ESD.pdf",
    sourceLabel: "NYSDEC Old Upper Mountain Road Engineering Design Report",
    relatedSiteId: "old-upper-mountain-road-landfill",
    changePeriod: "Historic disposal and sewer construction followed by modern creek, wetland, and culvert investigation",
    comparisonYears: ["Historic site plans", "1951", "1966", "1978", "2022 engineering record", "2024"],
    evidenceConfidence: "documented",
    presentStatus: "Gulf Creek remains a mixture of open channel, wetland, and culverted segments. Cleanup and infrastructure work are tracked through the linked landfill record.",
  },
  {
    id: "scajaquada-buried-channel",
    name: "Scajaquada Creek buried and channelized corridor",
    location: "Lancaster, Depew, Cheektowaga, and Buffalo to Black Rock Canal",
    coordinates: [-78.868, 42.925],
    evidenceType: "documented_culverted_waterway",
    displayClassification:
      "Buried urban creek · sewer, sediment, and site-specific coal-tar investigations",
    waterwayHistory:
      "Scajaquada Creek historically crossed a broad lowland and wetland system before reaching the Niagara River corridor. The Scajaquada Drain, completed in 1928, buried roughly 3.5 miles of channel; other reaches were straightened, channelized, placed in concrete, and later constrained by transportation infrastructure.",
    documentedMaterial:
      "Municipal sewer overflows and runoff affect water quality across multiple reaches. Separate DEC investigations in defined lower-creek areas document PAHs, VOCs, PCBs, metals, and manufactured-gas coal-tar or DNAPL impacts. Those findings do not characterize the entire watershed.",
    environmentalRecord:
      "DEC's lower-creek work connects particular coal-tar impacts with the former Iroquois Gas/Westwood manufactured-gas setting. Other reaches are principally affected by pathogen, nutrient, oxygen, runoff, habitat, or sewer-overflow problems. WNY Atlas keeps those evidence types and locations separate.",
    hydrologicPathway:
      "Agency investigation found that historic alluvial channel geometry can matter underground: the deepest former channel does not always match the present creek centerline, and defined coal-tar migration followed portions of that older subsurface setting. This conclusion applies to the investigated lower-creek area, not all buried Scajaquada reaches.",
    remediationStatus:
      "Defined lower-creek areas received sediment or creek-bottom controls, DNAPL recovery infrastructure, and monitoring. Broader work continues through sewer-overflow reduction, watershed planning, habitat design, and transportation-corridor studies.",
    evidenceSummary:
      "DOCUMENTED burial and channelization; DOCUMENTED reach-specific contamination and controls; watershed-wide contamination is not established.",
    interpretation:
      "The mapped line is a generalized corridor connecting the upper watershed, buried Drain, channelized park reach, and Black Rock Canal outlet. It is not a sewer survey, cleanup boundary, or claim that the entire line contains coal tar.",
    sourceUrl:
      "https://dec.ny.gov/sites/default/files/2024-06/scajaquadacreekwatershedactionplan.pdf",
    sourceLabel: "NYSDEC Scajaquada Creek watershed planning record",
    additionalSources: [
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/915351/",
        label: "NYSDEC Lower Scajaquada Creek document collection — Site 915351",
      },
    ],
    relatedSiteId: "scajaquada-creek",
    changePeriod: "Major burial completed in 1928; continuing channel, sewer, cleanup, and restoration work",
    comparisonYears: ["Historic creek mapping", "1928 Drain", "1951", "Modern channel", "Current restoration planning"],
    evidenceConfidence: "agency_mapped_approximation",
  },
  {
    id: "eighteenmile-creek-contaminant-corridor",
    name: "Eighteen Mile Creek industrial and sediment corridor",
    location: "Lockport source area to Burt Dam and the lower Lake Ontario Area of Concern",
    coordinates: [-78.691, 43.171],
    evidenceType: "documented_contaminated_sediment",
    displayClassification:
      "Creek sediment corridor · upstream Superfund sources and downstream PCB impairment",
    waterwayHistory:
      "Eighteen Mile Creek begins in Lockport near the Erie Canal and flows north toward Lake Ontario. Its upper industrial corridor and the lower Area of Concern are connected by water and sediment transport but have different regulatory boundaries.",
    documentedMaterial:
      "EPA documents PCBs and lead in upper-corridor soil and creek sediment, with additional contaminants varying by source property and operable unit. Upland fill, erosion, runoff, flooding, and creek sediment are evaluated as distinct media and mechanisms.",
    environmentalRecord:
      "The lower Area of Concern extends from Burt Dam to Olcott Harbor. EPA's current assessment says lower-AOC sediment is below the toxicity threshold while PCB impairment in fish is driven primarily by upstream contamination; therefore, the lower AOC does not currently have a sediment-remediation management action.",
    hydrologicPathway:
      "Fine suspended material can move over Burt Dam, linking upstream source control with downstream biological monitoring. This is a documented transport relationship, not evidence that every downstream bank or sediment location has the same concentration.",
    remediationStatus:
      "Superfund work proceeds by operable unit through source-property, residential-soil, and creek-corridor actions. The major Lockport sediment remedy remains distinct from lower-AOC monitoring and beneficial-use decisions.",
    evidenceSummary:
      "DOCUMENTED upper-corridor contamination and downstream PCB transport; Superfund, AOC, and watershed boundaries are separate.",
    interpretation:
      "The mapped line provides watershed-scale context. It is not an EPA operable-unit polygon, the lower AOC boundary, or a uniform contaminated-sediment boundary.",
    sourceUrl: "https://www.epa.gov/great-lakes-aocs/eighteenmile-creek-aoc",
    sourceLabel: "U.S. EPA Eighteenmile Creek Area of Concern",
    additionalSources: [
      {
        url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0206456",
        label: "U.S. EPA Eighteen Mile Creek Superfund site profile",
      },
    ],
    relatedSiteId: "eighteenmile-creek-superfund",
    changePeriod: "Industrial source era through active staged Superfund cleanup and AOC monitoring",
    comparisonYears: ["Historic Lockport industry", "2012 NPL listing", "Current Superfund work", "Current AOC monitoring"],
    evidenceConfidence: "agency_mapped_approximation",
  },
  {
    id: "black-rock-canal-sediment-remediation",
    name: "Black Rock Canal legacy-sediment corridor",
    location: "Buffalo west side, Unity Island, and Tonawanda Harbor navigation corridor",
    coordinates: [-78.9035, 42.9286],
    evidenceType: "documented_contaminated_sediment",
    displayClassification:
      "Federal navigation canal · documented legacy-sediment removal",
    waterwayHistory:
      "Black Rock Canal is a federal navigation channel separated from the Niagara River by Unity Island. It receives Scajaquada Creek and forms part of the Niagara River Area of Concern.",
    documentedMaterial:
      "EPA describes the dredged material as contaminated legacy sediment containing industrial contaminants accumulated from historical activity. The documented volume applies to the combined Black Rock Channel and Tonawanda Harbor project.",
    environmentalRecord:
      "The strategic navigation project removed 181,532 cubic yards of contaminated sediment and advanced beneficial-use goals involving benthos, dredging restrictions, and wildlife effects.",
    hydrologicPathway:
      "The canal connects Scajaquada Creek, Buffalo's urban waterfront drainage, Tonawanda Harbor, and the Niagara River. Those connections provide watershed context but do not establish one source for all removed sediment.",
    remediationStatus:
      "Dredging occurred in 2014–15 and EPA records the project as completed in 2016. Navigation maintenance, sewer controls, tributary investigations, and habitat restoration continue through separate programs.",
    evidenceSummary:
      "DOCUMENTED contaminated-sediment removal; completed dredging does not establish that all corridor impairments or sources are gone.",
    interpretation:
      "The mapped centerline identifies the navigation and remediation corridor. It is not the dredging prism, sediment sampling boundary, or Area of Concern boundary.",
    sourceUrl:
      "https://www.epa.gov/great-lakes-aocs/remediation-and-restoration-projects-niagara-river-aoc",
    sourceLabel: "U.S. EPA Niagara River AOC remediation and restoration projects",
    relatedSiteId: "black-rock-canal",
    changePeriod: "Engineered navigation history; strategic contaminated-sediment removal in 2014–2015",
    comparisonYears: ["Historic navigation mapping", "2014–2015 dredging", "2016 completion", "Present"],
    evidenceConfidence: "documented",
  },
  {
    id: "niagara-river-aoc-network",
    name: "Niagara River Area of Concern network",
    location: "Lake Erie to Lake Ontario, including tributaries and defined nearshore sites",
    coordinates: [-78.9605, 43.076],
    evidenceType: "documented_engineered_waterway",
    displayClassification:
      "River-system hub · documented source control, sediment, and habitat programs",
    waterwayHistory:
      "The Niagara River is an international waterway transformed by navigation, hydropower, shoreline industry, municipal development, filled wetlands, engineered islands, and altered tributary mouths. It was designated a Great Lakes Area of Concern in 1987.",
    documentedMaterial:
      "Government records identify PCBs, PAHs, pesticides, metals, and other contaminants in defined source sites, tributaries, embayments, sediment, water, and biological media. WNY Atlas does not assign one mixture or condition to the entire river.",
    environmentalRecord:
      "The Area of Concern framework connects beneficial-use impairments with numerous individual cleanups and restoration projects. Cayuga Island, 102nd Street, Griffon Park, Gill Creek, Pettit Flume, Black Rock Canal, and tributary investigations retain separate evidence and boundaries.",
    hydrologicPathway:
      "Tributary inflow, groundwater discharge, nearshore sediment transport, navigation, and movement from Lake Erie toward Lake Ontario create multiple pathways. Each claimed source-to-river relationship requires its own agency evidence.",
    remediationStatus:
      "Federal, state, local, responsible-party, and binational programs have reduced specific loadings, removed sediment, controlled landfills, improved wastewater systems, and restored habitat. The AOC is an umbrella management geography, not one riverwide cleanup remedy.",
    evidenceSummary:
      "DOCUMENTED riverwide management framework with site-specific impacts and remedies; no uniform riverwide contamination boundary is claimed.",
    interpretation:
      "The mapped river line is a navigation aid connecting atlas records. It is not the legal AOC polygon, an exposure boundary, or a statement that every reach is impaired in the same way.",
    sourceUrl: "https://www.epa.gov/great-lakes-aocs/niagara-river-aoc",
    sourceLabel: "U.S. EPA Niagara River Area of Concern",
    relatedSiteId: "niagara-river-waterway",
    changePeriod: "Industrial transformation through the continuing binational restoration era",
    comparisonYears: ["Historic river corridor", "1987 AOC designation", "Cleanup era", "Present"],
    evidenceConfidence: "documented",
  },
  {
    id: "niagara-tributary-pcb-source-tracking",
    name: "Two Mile, Rattlesnake, and Tonawanda Creek PCB source investigation",
    location: "Town of Tonawanda tributaries to the Niagara River",
    coordinates: [-78.9065, 43.0077],
    evidenceType: "documented_contaminated_sediment",
    displayClassification:
      "Three-tributary PCB investigation · local sources incompletely resolved",
    waterwayHistory:
      "Two Mile, Rattlesnake, and Tonawanda creeks drain developed and industrialized parts of the Niagara River corridor. Two Mile and Rattlesnake also cross the historically extensive wetland landscape known as The Flats.",
    documentedMaterial:
      "High PCB concentrations had been reported in fish tissue in all three tributaries and in earlier mussel studies in Two Mile and Rattlesnake creeks. Sediment results did not always explain the biological concentrations.",
    environmentalRecord:
      "USGS and DEC deployed semipermeable membrane devices at 29 locations in 2018–19 to measure waterborne PCBs and improve source-area resolution. The data establish an investigation network, not a single proven source.",
    hydrologicPathway:
      "Passive samplers measure dissolved or readily accumulated waterborne PCBs over time, complementing sediment and tissue results. Differences among these media are part of the scientific question rather than evidence that one dataset is wrong.",
    remediationStatus:
      "This entry tracks source investigation rather than one completed creekwide remedy. Defined facility cleanups—such as the separate GE-related Two Mile Creek work—retain their own conclusions and boundaries.",
    evidenceSummary:
      "DOCUMENTED PCB source-tracking study; local source or sources remain incompletely resolved and are not assigned by WNY Atlas.",
    interpretation:
      "The shaded study envelope links the three tributaries at regional scale. It is not a contaminated-sediment boundary, source polygon, or claim of uniform PCB concentrations.",
    sourceUrl:
      "https://www.usgs.gov/centers/new-york-water-science-center/science/track-down-survey-pcbs-three-tributaries-niagara",
    sourceLabel: "U.S. Geological Survey three-tributary PCB track-down survey",
    additionalSources: [
      {
        url: "https://www.usgs.gov/data/pcbs-measured-three-tributaries-niagara-river-area-concern-aoc-2018-2019",
        label: "USGS PCB passive-sampler data release, 2018–2019",
      },
    ],
    relatedSiteId: "two-mile-creek-tonawanda",
    changePeriod: "Targeted PCB source investigation in 2018–2019 within a much longer altered-watershed history",
    comparisonYears: ["Historic Flats landscape", "Earlier fish and mussel studies", "2018", "2019", "Present"],
    evidenceConfidence: "documented",
  },
];

export const waterwayEvidenceLabels: Record<WaterwayEvidenceType, string> = {
  documented_disposal_fill: "Former channel with documented disposal fill",
  documented_filled_waterway: "Documented filled waterway",
  documented_contaminated_sediment: "Documented contaminated sediment",
  documented_reclaimed_land: "Documented reclaimed waterfront land",
  documented_engineered_waterway: "Documented engineered waterway",
  documented_culverted_waterway: "Documented altered or culverted waterway",
  documented_filled_wetland: "Documented filled or lost wetland",
  documented_slag_fill: "Documented slag-created land",
  documented_restored_wetland: "Documented restored or created wetland",
};
