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
  waterwayHistory: string;
  documentedMaterial: string;
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
      "Canalside later re-excavated, rewatered, or interpreted portions of the historic terminus. This marker identifies the documented terminus area and does not claim to trace the entire buried canal alignment.",
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
    waterwayHistory:
      "State brownfield records describe the Buffalo River crossing the southern portion of the former refinery property before it was rerouted and straightened between 1914 and 1917 to improve navigation and industrial access.",
    documentedMaterial:
      "The former river channel was filled. Later investigations also identified petroleum contamination in portions of the larger industrial property, but WNY Atlas does not treat the entire buried channel as a uniform contaminant deposit.",
    interpretation:
      "Agency records identify the buried channel as a possible subsurface migration or accumulation pathway. The shaded Atlas reconstruction follows the former-riverbed band on the 2026 DEC investigation figure and is not a uniform contamination boundary.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915201D/Report.BCP.C915201D.2026-04-07.Western_Inv_Report.pdf",
    sourceLabel: "NYSDEC western-area supplemental investigation report — C915201D",
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
    waterwayHistory:
      "DEC records describe part of the property as following a former Buffalo River channel that was filled after the river was straightened.",
    documentedMaterial:
      "The state decision document identifies disposal fill containing ash, black sand, brick, wood, and glass over much of the property.",
    interpretation:
      "This is a documented filled-channel and disposal-site relationship. The modern school redevelopment is managed under the completed brownfield remedy and continuing site controls.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915268/Decision%20Document.BCP.C915268.2014-07-22.Final%20Decision%20Doccument.pdf",
    sourceLabel: "NYSDEC Decision Document — C915268",
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
    waterwayHistory:
      "DEC records identify the filled former Wilkeson Slip beneath part of this area, where the slip historically met the former Erie Canal.",
    documentedMaterial:
      "The reviewed record establishes the filled waterway and the adjoining manufactured-gas-plant history. It does not support describing every part of the filled slip as industrial-waste disposal.",
    interpretation:
      "The dashed traces show the mapped former Wilkeson Slip and its local confluence with the former Erie Canal. The waterway history and adjacent gas-manufacturing cleanup are shown together but kept as separate facts.",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915194/Work%20Plan.BCP.C915194.2005-03-25.IRMWP%20Final%203%2025%2005.pdf",
    additionalSources: [{
      url: "https://extapps.dec.ny.gov/data/DecDocs/C915194/",
      label: "NYSDEC Fourth Street / Former Buffalo Service Station document collection",
    }],
    changePeriod: "Historic canal-and-slip era through twentieth-century filling and redevelopment",
    comparisonYears: ["Historic canal maps", "1927", "1938", "1951", "1970s school development", "2024"],
    evidenceConfidence: "documented",
    presentStatus: "The filled slip and adjoining manufactured-gas-plant cleanup remain separate records. Current conditions are governed by the applicable cleanup and site-management documents.",
    sourceLabel: "NYSDEC Interim Remedial Measure Work Plan — C915194",
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
      "The marker represents the documented landscape-change area, not a reconstructed wetland boundary. The surviving and restored habitat at Tifft Nature Preserve must remain visually separate from filled portions of the historical marsh.",
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
    waterwayHistory:
      "Government habitat and cleanup records describe Rattlesnake Island beside a broad Niagara River marsh historically known as The Flats. The surrounding marsh and the channel separating the island from the mainland were subsequently filled as the River Road industrial corridor developed.",
    documentedMaterial:
      "A federal-state habitat assessment reports that Rattlesnake Island and the surrounding marsh were largely filled with industrial wastes by the late 1920s. DEC investigation records for the River Road site document later landfilling and industrial-waste disposal from approximately 1957 to 1970 and identify the former Rattlesnake Creek channel as filled. These records concern defined study areas and do not support treating the entire River Road corridor as one uniform deposit.",
    interpretation:
      "This marker joins the documented former island, marsh and channel history without drawing an unsupported exposure boundary. The 1901 georeferenced island and former-coastline figure, the 1920s aerial plates and later imagery will be used to reconstruct individual landscape changes before shaded areas are published.",
    sourceUrl:
      "https://dec.ny.gov/sites/default/files/2024-01/bnrhabreport.pdf",
    sourceLabel: "Buffalo and Niagara Rivers Habitat Inventory and Assessment",
    additionalSources: [
      {
        url: "https://extapps.dec.ny.gov/data/DecDocs/915031/Report.HW.915031.1993-09-01.Phase1-2RIandFS.pdf",
        label: "NYSDEC River Road remedial investigation and feasibility study",
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
      "The marker identifies the documented slag-fill landscape. Aerial and engineering-map work will reconstruct successive shorelines rather than treating the modern property boundary as one fill event.",
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
      "This marker identifies the documented downtown industrial-water system at an interpretive location rather than claiming a surveyed line for every buried segment.",
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
    changePeriod: "Historic disposal and sewer construction followed by modern creek, wetland, and culvert investigation",
    comparisonYears: ["Historic site plans", "1951", "1966", "1978", "2022 engineering record", "2024"],
    evidenceConfidence: "documented",
    presentStatus: "Gulf Creek remains a mixture of open channel, wetland, and culverted segments. Cleanup and infrastructure work are tracked through the linked landfill record.",
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
