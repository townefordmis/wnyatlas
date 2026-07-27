import type { AtlasStory } from "@/types/site";

export const siteStories: Partial<Record<string, AtlasStory>> = {
  "5565-river-road": {
    lastReviewed: "July 27, 2026",
    background: [
      "The 5565 River Road property lies within Tonawanda's heavily industrialized Niagara River corridor. Historic aerial photographs show largely undeveloped land in 1927, followed by nearby petroleum-storage and truck-terminal activity and increasing deposits of industrial fill after World War II.",
      "By the late 1970s, fill covered much of the property and obscured portions of Rattlesnake Creek and a smaller southern drainage. A 2009 environmental assessment documented large fill mounds and surface drums, leading to state investigation and classification as a site requiring remedial action.",
    ],
    timeline: [
      { period: "1927", event: "Aerial photography showed the property as largely undeveloped." },
      { period: "1950s–1970s", event: "Industrial development expanded nearby, while fill accumulated across the property and altered local drainage." },
      { period: "2009", event: "A Phase I assessment documented extensive industrial fill and discarded drums at the surface." },
      { period: "2011–2012", event: "DEC completed site characterization and classified the property as a Class 2 inactive hazardous-waste site." },
      { period: "Present", event: "The upland property and documented PCB-affected shoreline sediment remain part of an active remedial record." },
    ],
    documentedImpacts: [
      "Industrial fill of uncertain origin covers much of the property and locally buried or displaced former drainage channels.",
      "Discarded drums and other debris were reported, although drums described in older accounts as containing black tar-like material were not located during DEC's preliminary assessment.",
      "DEC's sediment inventory identifies PCB-affected sediment associated with the site along the Niagara River edge.",
    ],
    cleanupAndControls: [
      "State investigation has used soil, groundwater, surface-water, and sediment information to distinguish the upland fill from shoreline impacts.",
      "Class 2 status means the defined site requires remedial action; it should not be presented as a completed cleanup.",
      "Future work must account for buried fill, altered drainage, and the relationship between upland sources and river sediment.",
    ],
    presentDay: [
      "The property remains an active state cleanup site within an operating industrial corridor. The atlas treats its documented boundary separately from neighboring terminals, tank farms, and cleanup sites and does not infer one continuous corridor-wide plume.",
    ],
    researchNotes: [
      "Add the final remedial decision and construction milestones when DEC issues them.",
      "Digitize the historic Rattlesnake Creek alignment and compare it with the modern site and sediment boundaries.",
    ],
  },
  "tennessee-gas-station-229": {
    lastReviewed: "July 27, 2026",
    background: [
      "Station 229 is a natural-gas pipeline compressor station on East Eden Road, part of the infrastructure that moved gas through rural Western New York. Compressor stations historically used large engines, lubricating systems, electrical equipment, and drainage networks that could create environmental impacts far from the region's better-known urban factories.",
      "The state cleanup record centers on PCB contamination associated with the station and its drainage or sediment areas. The site is now classified for long-term management rather than unrestricted closure.",
    ],
    timeline: [
      { period: "Pipeline era", event: "The East Eden Road property operated as Tennessee Gas Pipeline Compressor Station 229." },
      { period: "Investigation", event: "State and company investigations identified PCB-affected areas associated with station operations and drainage." },
      { period: "Remedial work", event: "Contaminated material was addressed and controls were established for residual impacts." },
      { period: "Long-term phase", event: "New York reclassified the cleanup as Class 4, indicating that site management remains necessary." },
    ],
    documentedImpacts: [
      "PCBs are the defining contaminant in the state remedial and sediment-mapping record.",
      "Affected sediment and drainage features extend the interpretation beyond a single equipment pad or building.",
      "The mapped cleanup area is site-specific and does not establish contamination across the wider rural landscape.",
    ],
    cleanupAndControls: [
      "Remedial actions addressed identified PCB source and sediment areas.",
      "Monitoring, inspection, land-use requirements, and maintenance preserve the remedy where contamination remains.",
      "Current operating permits for the compressor station are distinct from the inactive hazardous-waste cleanup record.",
    ],
    presentDay: [
      "Station 229 remains an instructive rural industrial site: major cleanup construction has been completed, while Class 4 status records continuing stewardship. The mapped sediment area should not be mistaken for a general warning about every nearby stream or property.",
    ],
    researchNotes: [
      "Add the station construction date, compressor technology, and exact source of the historical PCB releases from verified company or agency records.",
      "Map the remedial drainage and sediment features separately from the larger operating station parcel.",
    ],
  },
  "weber-knapp-company": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Weber-Knapp property at 441 Chandler Street is part of Jamestown's dense Chadakoin River manufacturing district. Industrial and residential uses occupied the area by at least 1902; Weber-Knapp acquired portions beginning in 1909, and a factory built around 1910 grew through repeated additions into an approximately 105,000-square-foot complex.",
      "A trichloroethylene vapor degreaser operated from about 1969 to 1993 and was connected to a 2,000-gallon solvent tank. Later investigation identified chlorinated-solvent contamination in overburden and bedrock groundwater, together with petroleum product and 1,4-dioxane concerns.",
    ],
    timeline: [
      { period: "1902–1910", event: "Earlier neighborhood uses gave way to Weber-Knapp acquisition and construction of the principal factory." },
      { period: "1910s–1960s", event: "The plant expanded, absorbing former dwellings and a section of Morse Avenue into the industrial complex." },
      { period: "Circa 1969–1993", event: "A TCE vapor degreaser and associated solvent tank operated at the facility." },
      { period: "2019 onward", event: "The property entered New York's Brownfield Cleanup Program for investigation and remediation." },
      { period: "2022 onward", event: "A groundwater extraction and treatment interim measure began operating while the broader remedy advanced." },
    ],
    documentedImpacts: [
      "TCE and related chlorinated compounds affected soil and groundwater, including fractured bedrock.",
      "Investigation also identified light non-aqueous-phase liquid and 1,4-dioxane in parts of the groundwater system.",
      "The Chadakoin River edge and sediment required controls separate from the interior manufacturing source areas.",
    ],
    cleanupAndControls: [
      "Groundwater extraction and treatment began as an interim remedial measure in July 2022.",
      "The remedy includes source-area work, building and vapor considerations, groundwater management, and a clean-stone sediment cover.",
      "An environmental easement and site-management obligations govern the approximately 2.65-acre cleanup property.",
    ],
    presentDay: [
      "Weber-Knapp remains a layered manufacturing and cleanup property beside the Chadakoin River. Active treatment and engineered controls are signs of a functioning remedy, not evidence that every deep-groundwater impact has disappeared.",
    ],
    researchNotes: [
      "Build a product and employment timeline from Weber-Knapp catalogs, city directories, and local archives.",
      "Track groundwater-treatment performance and distinguish Weber-Knapp impacts from neighboring D.C. Rollforms conditions.",
    ],
  },
  "pvs-chemicals-buffalo": {
    lastReviewed: "July 27, 2026",
    background: [
      "The PVS Chemicals property on Lee Street belongs to South Buffalo's long chemical-manufacturing and bulk-material corridor. Its setting near rail, the Buffalo River industrial belt, and other heavy industries helped make this part of the city a major production landscape during the twentieth century.",
      "New York lists the property as an active Class 2 inactive hazardous-waste disposal site. That classification establishes a significant remedial need for the defined site, while the available public record requires care when assigning particular releases to individual operating eras.",
    ],
    timeline: [
      { period: "Industrial development", event: "Chemical handling and manufacturing became established on the Lee Street property." },
      { period: "State investigation", event: "DEC evaluated waste-management areas, soil, and groundwater associated with the facility." },
      { period: "Class 2 listing", event: "New York identified the defined property as requiring remedial action." },
      { period: "Present", event: "The site remains in the active investigation and cleanup program while industrial permitting follows a separate regulatory track." },
    ],
    documentedImpacts: [
      "The state registry identifies hazardous-waste impacts significant enough to require action at the defined site.",
      "Chemical manufacturing and handling make soil, groundwater, tanks, process areas, and former waste-management features important lines of investigation.",
      "Conditions at PVS should not be merged with Buffalo Color or other nearby South Buffalo chemical properties without site-specific evidence.",
    ],
    cleanupAndControls: [
      "DEC oversight governs investigation, remedy selection, and any required interim actions.",
      "Active industrial permits regulate current operations but do not substitute for the historical cleanup program.",
      "Final controls and completion status should be updated from DEC decision and construction documents as the remedy progresses.",
    ],
    presentDay: [
      "PVS remains an active industrial and remedial property. The atlas presents the verified Class 2 status and avoids treating the entire Lee Street or Buffalo River corridor as a single contamination source.",
    ],
    researchNotes: [
      "Locate the most recent remedial investigation, interim-action, and registry-classification documents.",
      "Develop a verified ownership, product, and waste-management chronology before adding process-specific claims.",
    ],
  },
  "depew-village-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Depew Village Landfill was an unrecorded municipal disposal area near a bend of Cayuga Creek. The exact landfill limits were never documented; later investigation treated a roughly 32-acre study area, including a 1.3-acre registry parcel on a creek-bounded peninsula and additional fill near Zurbrick Road.",
      "The site has also been called the Depew DPW/Cayuga Creek and Zurbrick Road site. Its history combines municipal dumping, creek-bank filling, floodplain impacts, and later public-works and sewer infrastructure.",
    ],
    timeline: [
      { period: "Disposal era", event: "Municipal and other fill was placed near Cayuga Creek without a complete map of the landfill limits." },
      { period: "1980s", event: "The property entered the state hazardous-waste registry and underwent early investigation." },
      { period: "2008–2009", event: "DEC selected separate remedies for the landfill/source area and the Cayuga Creek, sediment, floodplain, and Zurbrick Road areas." },
      { period: "2010s", event: "Remedial construction addressed contaminated fill, creek-bank material, and exposure pathways." },
      { period: "Present", event: "The completed construction remains subject to site management, inspection, and periodic review." },
    ],
    documentedImpacts: [
      "Landfilled material and debris extended beyond the small original registry parcel.",
      "Contaminated fill had been dumped down the Zurbrick Road slope and affected creek-bank or floodplain areas.",
      "Cayuga Creek sediment and surface-water pathways were evaluated as a separate operable unit.",
    ],
    cleanupAndControls: [
      "DEC divided the remedy into operable units so upland fill and the creek environment could be addressed appropriately.",
      "Excavation, consolidation or cover, bank restoration, and other construction measures reduced contact and migration.",
      "A site-management plan, inspections, and institutional or engineering controls govern remaining material.",
    ],
    presentDay: [
      "The landfill is no longer an open disposal operation, but its remedy remains part of the Cayuga Creek landscape. The atlas distinguishes the confirmed cleanup areas from the much larger creek watershed.",
    ],
    researchNotes: [
      "Digitize the two operable-unit boundaries and the final construction limits.",
      "Add disposal dates and accepted waste types only where supported by municipal or DEC records.",
    ],
  },
  "lockport-city-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "The City of Lockport operated this approximately 30-acre municipal and industrial landfill from the early 1950s until 1976. The site occupies two fill areas separated by railroad tracks near Gulf Creek, a wetland, city facilities, and the Niagara Escarpment.",
      "Reported wastes included sewage sludge, peroxide-contaminated wood starch, chemical wastes, steel barrels, plastics, glass, cardboard, and paper. Operators reportedly trenched into overburden, deposited and burned waste, and covered it with excavated material.",
    ],
    timeline: [
      { period: "Early 1950s–1976", event: "The city operated the property as a municipal and industrial landfill." },
      { period: "1981 onward", event: "State investigations examined waste, groundwater, drainage, slope stability, and nearby Gulf Creek." },
      { period: "1992", event: "DEC selected the landfill remedy in a Record of Decision." },
      { period: "Post-closure era", event: "The site was closed and placed under long-term cap, drainage, access, and monitoring requirements." },
      { period: "Present", event: "Periodic inspection and maintenance continue under Class 4 site management." },
    ],
    documentedImpacts: [
      "Municipal and industrial wastes were buried and sometimes burned within two fill areas.",
      "Drums and refuse were historically visible at the surface, and a buried drainage pipe and steep landfill slopes complicated the setting.",
      "Gulf Creek, nearby wetlands, groundwater, drainage, and slope stability were important potential migration pathways.",
    ],
    cleanupAndControls: [
      "Closure measures covered and graded the waste mass and established controlled drainage.",
      "Fencing, access restrictions, vegetation, ditches, swales, and slope stabilization protect the closed landfill.",
      "Routine inspection and maintenance address erosion, settlement, drainage blockage, vegetation, and unauthorized vehicle access.",
    ],
    presentDay: [
      "The landfill is properly closed but remains a managed waste site. Class 4 status means the remedy depends on continuing care; it does not mean the buried municipal and industrial waste was wholly removed.",
    ],
    researchNotes: [
      "Add a final cap and drainage map and connect Gulf Creek carefully to the wider Eighteen Mile Creek watershed.",
      "Track the newest periodic-review findings and any repairs to slopes, drainage structures, or access controls.",
    ],
  },
  "batavia-iron-and-metal": {
    lastReviewed: "July 27, 2026",
    background: [
      "The 6.8-acre property at 301 Bank Street operated as Batavia Waste Material Company and later Batavia Iron and Metal from 1951 to 1999. The business recycled scrap metal and handled electrical transformers.",
      "Two furnaces operated from the early 1970s until 1994 to reclaim wire and smelt white metals. Before the furnaces were installed, wire insulation was reportedly removed by open burning in yard dumpsters, leaving a mixed metal-recycling legacy in fill, soil, groundwater, and neighboring areas.",
    ],
    timeline: [
      { period: "1951–1999", event: "The property operated as a metal-recycling and scrap-handling facility." },
      { period: "Early 1970s–1994", event: "Two furnaces reclaimed wire and smelted white metals, replacing earlier open burning used to strip insulation." },
      { period: "2013", event: "DEC selected a remedy addressing four principal areas of concern." },
      { period: "2022 onward", event: "State remedial construction advanced after design-phase investigation." },
      { period: "2024", event: "DEC documented modifications to the remedy based on additional investigation and construction findings." },
    ],
    documentedImpacts: [
      "PCBs and pesticides affected fill near the on-site building.",
      "PCBs and metals occurred in soil and fill across the property, with metals also affecting nearby Bank Street parcels.",
      "Debris piles, groundwater conditions, wetland sediment, and an off-site vapor pathway required separate evaluation.",
    ],
    cleanupAndControls: [
      "The remedy excavates contaminated soil, fill, debris, and wetland sediment where required, followed by verification and restoration.",
      "Groundwater treatment includes enhanced bioremediation in the affected area.",
      "Off-site vapor mitigation, institutional controls, and a site-management plan protect against remaining exposure pathways.",
    ],
    presentDay: [
      "Batavia Iron and Metal remains an active state cleanup whose design evolved as field work refined the extent of contamination. The property and specific neighboring parcels are documented; the findings should not be generalized to the wider Bank Street neighborhood.",
    ],
    researchNotes: [
      "Track final excavation quantities, wetland restoration, groundwater performance, and construction completion.",
      "Add worker, business, and scrap-market history without implying unverified exposure outcomes.",
    ],
  },
  "former-electruk-battery": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Former Electruk Battery site at 4922 IDA Park Drive represents a smaller industrial cleanup within Lockport's manufacturing district. Battery-related activity raised concerns about metals and other process materials in site soil.",
      "Niagara County carried the property through New York's Environmental Restoration Program, a program designed to investigate and clean publicly controlled brownfields for reuse.",
    ],
    timeline: [
      { period: "Industrial era", event: "Battery-related operations occupied the IDA Park Drive property." },
      { period: "Environmental Restoration Program", event: "The property was investigated and remediated under state oversight." },
      { period: "2012", event: "New York issued a Certificate of Completion and established continuing institutional controls." },
      { period: "Present", event: "Commercial or industrial reuse remains subject to an environmental easement and site-management requirements." },
    ],
    documentedImpacts: [
      "Battery handling or manufacturing created metals-related soil concerns requiring investigation and cleanup.",
      "The completed remedy left residual conditions appropriate for controlled commercial or industrial use rather than unrestricted use.",
      "The defined 1.35-acre controlled property should not be conflated with the larger industrial park.",
    ],
    cleanupAndControls: [
      "State-supervised remedial work addressed identified contaminated material before completion.",
      "The environmental easement restricts use to commercial and industrial purposes and prohibits unauthorized groundwater use.",
      "A site-management and soil-management framework governs future disturbance; the completion record identifies no continuing engineering control.",
    ],
    presentDay: [
      "The site is a completed environmental-restoration project available for controlled commercial or industrial use. Its easement is the durable link between the historic cleanup and safe future excavation or redevelopment.",
    ],
    researchNotes: [
      "Add the final engineering report's excavation quantities and verified contaminants.",
      "Clarify the company's products, operating dates, and relationship to surrounding Lockport industries.",
    ],
  },
  "stauffer-chemical-pasny": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Stauffer Chemical/PASNY site is a roughly 23-acre controlled property on Lewiston Road near the Niagara Power Project industrial landscape. Its history reflects the close physical relationship among chemical production, high-voltage infrastructure, transportation corridors, and the remade landscape around the Niagara River.",
      "State records document a completed remedy with contamination remaining under institutional and site-management controls. The Stauffer parcel must be interpreted separately from other Lewiston and Niagara Falls chemical sites despite shared corporate and industrial geography.",
    ],
    timeline: [
      { period: "Industrial era", event: "Chemical operations occupied the Lewiston Road property." },
      { period: "Investigation and remedy", event: "DEC and responsible parties characterized and addressed contaminated site media." },
      { period: "Remedial completion", event: "Major cleanup construction was completed and the site was reclassified for long-term management." },
      { period: "Present", event: "A Class 4 designation and environmental easement preserve use and management requirements." },
    ],
    documentedImpacts: [
      "Historic chemical production and waste management affected defined portions of the property.",
      "Residual contamination remains compatible only with the assumptions and controls established by the remedy.",
      "The site record should not be used to assign conditions to the entire Power Authority property or neighboring parcels.",
    ],
    cleanupAndControls: [
      "Remedial construction addressed identified source and exposure areas under DEC oversight.",
      "An environmental easement controls approximately 23 acres and restricts incompatible use or disturbance.",
      "Site management, inspection, monitoring, and soil-handling requirements maintain the remedy.",
    ],
    presentDay: [
      "Stauffer Chemical/PASNY is a closed Class 4 cleanup rather than an unrestricted former factory. Long-term controls are part of the completed remedy and should remain visible in any account of redevelopment or public access.",
    ],
    researchNotes: [
      "Develop a verified plant, product, ownership, and waste-disposal chronology from the remedial investigation and corporate archives.",
      "Digitize the easement and distinguish it from the larger PASNY and Lewiston industrial landscape.",
    ],
  },
  "frontier-chemical-pendleton": {
    lastReviewed: "July 27, 2026",
    background: [
      "Frontier Chemical Waste Process operated an industrial-waste treatment facility in Pendleton from 1958 to 1974. The plant treated plating wastes, pickle liquors, and other acidic liquids from plating and metal-finishing businesses.",
      "Treatment residuals were discharged into the approximately 15-acre Quarry Lake. After operations ended, much of the former process area was filled and graded, leaving contaminated sediment, soil, and groundwater that required a containment-based remedy.",
    ],
    timeline: [
      { period: "1958–1974", event: "Frontier Chemical treated plating and metal-finishing wastes at the Pendleton facility." },
      { period: "Post-1974", event: "Waste-treatment operations ended and portions of the process area were filled and graded." },
      { period: "1992", event: "DEC selected a containment and collection remedy in the site's Record of Decision." },
      { period: "1990s", event: "Contaminated lake sediment was removed and consolidated in an on-site engineered landfill." },
      { period: "Present", event: "The capped landfill and groundwater collection and pretreatment system operate under long-term management." },
    ],
    documentedImpacts: [
      "Plating wastes, pickle liquors, and acidic industrial liquids generated contaminated treatment residuals.",
      "Quarry Lake sediment received residuals from the waste-treatment process.",
      "Contaminated soil and groundwater required containment and hydraulic control.",
    ],
    cleanupAndControls: [
      "Contaminated lake sediment was excavated and placed within an approximately 11-acre on-site capped landfill.",
      "A subsurface containment boundary and groundwater collection, conveyance, and pretreatment system limit migration.",
      "Fencing, cap maintenance, wetland-area controls, monitoring, and annual periodic review preserve the remedy.",
    ],
    presentDay: [
      "The Pendleton site is a closed Class 4 facility with waste consolidated and managed on site. It is entirely distinct from Frontier Chemical's Royal Avenue facility in Niagara Falls, which has a different operating history and remedy.",
    ],
    researchNotes: [
      "Track current groundwater-system performance and Quarry Lake monitoring in future periodic reviews.",
      "Map the capped landfill, Quarry Lake, wetland, former process area, and larger 75-acre property as separate features.",
    ],
  },
  "1660-niagara-street-sediment": {
    lastReviewed: "July 27, 2026",
    background: [
      "The 1660 Niagara Street record represents a specific industrial shoreline property and associated Niagara River sediment area, not the entire West Side waterfront. The location developed within a corridor shaped by manufacturing, bulk handling, rail access, filling, and repeated property reuse.",
      "DEC identifies PCB-affected sediment adjoining the cleanup property. That connection makes the shoreline an important example of how upland industrial activity and submerged environmental records must be researched together.",
    ],
    timeline: [
      { period: "Industrial waterfront era", event: "Manufacturing and material-handling uses developed along the Niagara Street shoreline." },
      { period: "Investigation", event: "Environmental work evaluated the upland parcel and adjoining river sediment." },
      { period: "State cleanup record", event: "DEC established a site-specific remedial record for the property and associated sediment." },
      { period: "Present", event: "PCB-affected sediment remains mapped as a bounded feature requiring careful interpretation and management." },
    ],
    documentedImpacts: [
      "DEC's sediment inventory identifies PCBs in a defined shoreline sediment area.",
      "Historic fill and industrial use make the upland-to-river pathway important to the site interpretation.",
      "The available boundary does not support describing the entire upper Niagara River shoreline as affected by this site.",
    ],
    cleanupAndControls: [
      "Investigation and remedial decisions distinguish upland soil or groundwater from submerged sediment.",
      "Any shoreline construction, dredging, or sediment disturbance must account for the documented affected area.",
      "The atlas uses the mapped sediment feature rather than extending the marker to unrelated waterfront parcels.",
    ],
    presentDay: [
      "The site remains part of a rapidly changing Niagara Street waterfront. Redevelopment and public access should be described alongside, not in place of, the documented sediment record and any continuing controls.",
    ],
    researchNotes: [
      "Add the exact upland ownership and industrial-use chronology from DEC reports and city directories.",
      "Replace the centroid marker with verified upland and sediment geometry when authoritative downloadable boundaries are available.",
    ],
  },
  "farwell-road-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "Farwell Road Landfill is a former county-owned disposal site in the rural Town of Ischua. Its history shows that hazardous-waste management in Western New York was not limited to the Buffalo–Niagara industrial belt; smaller communities also inherited disposal areas requiring engineered closure.",
      "New York selected the remedy in 2001. Contaminated material remains within the managed landfill, making deed restrictions, cover maintenance, drainage, monitoring, and formal site management essential parts of the cleanup.",
    ],
    timeline: [
      { period: "Disposal era", event: "Waste was placed at the Farwell Road property before modern closure and hazardous-waste controls." },
      { period: "Investigation", event: "State work characterized the landfill, surrounding environmental media, and potential exposure pathways." },
      { period: "2001", event: "DEC selected the site remedy." },
      { period: "Remedial construction", event: "The landfill was closed under an engineered, containment-based remedy." },
      { period: "Present", event: "The site is inspected and managed under a revised long-term site-management plan." },
    ],
    documentedImpacts: [
      "Residual contamination remains within the former disposal footprint.",
      "Runoff, erosion, groundwater, and unauthorized disturbance are continuing concerns for a closed rural landfill.",
      "The documented site does not establish contamination on unrelated surrounding farms or residences.",
    ],
    cleanupAndControls: [
      "An engineered cover limits direct contact, erosion, and water infiltration.",
      "Deed and land-use restrictions prevent incompatible development or uncontrolled excavation.",
      "Inspection, maintenance, monitoring, reporting, and repair requirements are defined in the site-management plan.",
    ],
    presentDay: [
      "Farwell Road is a closed, managed landfill. Its cleanup contains remaining waste and controls exposure; it should not be described either as an active open dump or as land returned to unrestricted use.",
    ],
    researchNotes: [
      "Add verified operating dates, waste sources, and construction quantities from the remedial investigation and final engineering report.",
      "Map the cap, drainage system, monitoring network, and controlled parcel separately.",
    ],
  },
  "carroll-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "Carroll Landfill is an approximately 25-acre former municipal and construction-and-demolition disposal property in the Frewsburg area. Its location near homes, wetlands, and Conewango Creek made leachate, groundwater, drainage, and surface-water protection central to the remedy.",
      "The property later functioned in connection with solid-waste transfer activities, but the historic landfill and any later operating facilities require separate regulatory interpretation.",
    ],
    timeline: [
      { period: "Landfill era", event: "Municipal and construction-and-demolition wastes were disposed at the Town of Carroll property." },
      { period: "Investigation", event: "State and local work evaluated the waste mass, leachate, groundwater, wetlands, and nearby receptors." },
      { period: "Remedial design", event: "The selected remedy was translated into landfill, collection, treatment, and monitoring construction plans." },
      { period: "Construction and closure", event: "Engineering controls were installed to contain waste and manage contaminated water." },
      { period: "Present", event: "Treatment, monitoring, inspection, and maintenance continue under long-term management." },
    ],
    documentedImpacts: [
      "Landfill leachate and contaminated groundwater required collection and treatment.",
      "The setting near Conewango Creek and wetlands created sensitive surface-water and ecological pathways.",
      "The waste footprint and treatment infrastructure are site-specific and should not be generalized to all nearby land.",
    ],
    cleanupAndControls: [
      "The remedy uses landfill closure and cover systems to reduce infiltration and direct contact.",
      "Leachate or affected groundwater is collected and treated.",
      "Monitoring wells, drainage structures, inspections, maintenance, access controls, and land-use restrictions support long-term performance.",
    ],
    presentDay: [
      "Carroll Landfill remains a managed disposal property near an important creek corridor. The visible closure and treatment systems are continuing components of the remedy, not merely remnants of construction.",
    ],
    researchNotes: [
      "Add verified disposal dates, accepted waste categories, and current transfer-station relationship.",
      "Track treatment-system discharge performance and the newest groundwater and surface-water trends.",
    ],
  },
  "dc-rollforms-proto-tool": {
    lastReviewed: "July 27, 2026",
    background: [
      "The D.C. Rollforms/Proto Tool complex occupied part of Jamestown's Chadakoin River industrial corridor. Forging, machining, heat treating, electroplating, and vapor degreasing supported tool production but also created multiple waste streams and source areas.",
      "Investigation identified chlorinated solvents, petroleum, metals, and other industrial contaminants in soil and groundwater. Its riverbank setting required cleanup construction that protected the Chadakoin while removing source material.",
    ],
    timeline: [
      { period: "Manufacturing era", event: "Tool production included forging, machining, heat treating, plating, and solvent degreasing." },
      { period: "Investigation", event: "Environmental studies identified several contaminant groups and source areas." },
      { period: "Remedial construction", event: "Contaminated material was excavated while temporary river-protection measures isolated the work." },
      { period: "2009", event: "DEC certified completion of the major engineering construction." },
      { period: "Present", event: "Shoreline stabilization and continuing institutional or site-management controls preserve the remedy." },
    ],
    documentedImpacts: [
      "TCE, related breakdown products, toluene, xylenes, petroleum, and metals were associated with historic operations.",
      "Oil and other industrial residues affected portions of soil and groundwater.",
      "The proximity of the Chadakoin River required careful control of excavation, runoff, and bank stability.",
    ],
    cleanupAndControls: [
      "Contaminated soil and source material were excavated for appropriate management or disposal.",
      "Temporary barriers protected the river during construction, and the shoreline was stabilized afterward.",
      "Remaining impacts are governed by approved covers, land-use or excavation controls, monitoring, and site management where required.",
    ],
    presentDay: [
      "The former tool complex is a completed-construction cleanup within a larger riverfront manufacturing district. D.C. Rollforms and neighboring Weber-Knapp have related geography but distinct source histories and regulatory records.",
    ],
    researchNotes: [
      "Develop a company and product history from Jamestown industrial directories and Proto Tool records.",
      "Map excavation limits, stabilized shoreline, groundwater areas, and the boundary with Weber-Knapp.",
    ],
  },
  "durez-occidental-north-tonawanda": {
    lastReviewed: "July 27, 2026",
    background: [
      "The North Tonawanda Durez plant became part of Western New York's important plastics and chemical-manufacturing economy. Durez was associated with phenolic resins and molding compounds—materials used to make durable electrical, automotive, appliance, and industrial components before modern plastics became commonplace.",
      "Successive corporate ownership connected the facility to Hooker Chemical and later Occidental Chemical. The environmental record is divided among the former plant, waste-management areas, groundwater-control systems, outfalls, and affected sediment. Treating those areas as one undifferentiated problem would obscure how the remedy actually works.",
    ],
    timeline: [
      {
        period: "Industrial era",
        event:
          "Durez produced phenolic-resin and related chemical materials at the North Tonawanda complex.",
      },
      {
        period: "Corporate succession",
        event:
          "The operation became associated with Hooker and Occidental Chemical, linking it to a wider Niagara County chemical-manufacturing network.",
      },
      {
        period: "1989",
        event:
          "A partial consent judgment established major groundwater-monitoring and remediation obligations.",
      },
      {
        period: "1989–present",
        event:
          "A perimeter interceptor-trench system has operated to capture groundwater and limit off-site chemical migration.",
      },
      {
        period: "Current stewardship",
        event:
          "Groundwater levels, chemistry, hydraulic capture, sediment conditions, and engineering controls remain subject to monitoring and review.",
      },
    ],
    documentedImpacts: [
      "Chemical manufacturing and waste management affected soil and groundwater across portions of the former facility.",
      "DEC's sediment inventory identifies chlorinated dioxins and furans in an associated sediment area.",
      "The long operating history produced multiple source and management areas rather than a single uniform deposit.",
    ],
    cleanupAndControls: [
      "A perimeter interceptor trench creates an inward hydraulic gradient and collects groundwater that might otherwise migrate away from the property.",
      "Collected water is managed through a long-term extraction and treatment program.",
      "Institutional controls, monitoring wells, sediment restrictions, maintenance, and periodic review remain essential because contamination has not simply been excavated away.",
    ],
    presentDay: [
      "The Durez record is in long-term management. The correct present-day description is neither an uncontrolled historic dump nor a completely erased cleanup: groundwater capture and continuing controls are integral parts of the remedy.",
    ],
    researchNotes: [
      "Build a product and ownership timeline from Durez corporate records, Hooker annual reports, and North Tonawanda industrial directories.",
      "Map the interceptor trench, principal waste areas, outfalls, and DEC sediment boundary as separate features.",
      "Determine which sediment areas were capped, removed, or left subject to monitoring.",
    ],
  },
  "houdaille-strippit-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Akron property first entered the twentieth-century defense economy through Buffalo Arms, which used it from about 1940 to 1950 for machine-gun testing and scrap disposal. Houdaille Industries' Strippit Division later manufactured metalworking machinery there beginning in 1956.",
      "A roughly two-acre disposal area immediately behind the plant received process and general wastes until 1979. Records describe approximately 20,000 gallons per year of cutting oils, coolants, and possibly degreasing solvents, about three tons per year of heat-treatment sludge, refuse, open burning, and reports of buried drums.",
    ],
    timeline: [
      {
        period: "Circa 1940–1950",
        event:
          "Buffalo Arms used the property for machine-gun testing and disposed of metal scrap and related material.",
      },
      {
        period: "1956–1979",
        event:
          "Houdaille/Strippit manufactured metalworking equipment and used the rear disposal area for coolant, sludge, refuse, and possibly solvents.",
      },
      {
        period: "1979",
        event:
          "On-site disposal ended and the area was covered with several feet of fill during plant expansion.",
      },
      {
        period: "1981–1994",
        event:
          "Successive investigations characterized buried waste, drums, metals, organic compounds, and groundwater conditions.",
      },
      {
        period: "1994–present",
        event:
          "Waste was consolidated beneath a composite soil and geomembrane cap, followed by post-closure monitoring and maintenance.",
      },
    ],
    documentedImpacts: [
      "Historical records identify process coolants, cutting oils, heat-treatment sludge, refuse, and suspected degreasing solvents in the disposal area.",
      "Investigations detected metals, PCBs, PAHs, phthalates, and halogenated organic compounds in site media.",
      "The reported buried drums and earlier defense-production use add uncertainty to the precise inventory of material beneath the cap.",
    ],
    cleanupAndControls: [
      "The 1994 interim remedial measure consolidated waste into a controlled footprint.",
      "A composite soil and geomembrane cap limits contact, erosion, and water infiltration.",
      "Groundwater sampling, cap inspection, vegetation management, repair, and periodic reporting continue under the post-closure program.",
    ],
    presentDay: [
      "The property remains associated with industrial use while the former disposal area is a managed capped landfill. The remedy contains material on site rather than demonstrating that every drum and waste deposit was removed.",
    ],
    researchNotes: [
      "Locate Buffalo Arms property plans and wartime production records to clarify the testing range and scrap-disposal footprint.",
      "Reconcile the reported drum count with construction records from the 1994 consolidation.",
      "Map the capped two-acre area separately from the larger operating industrial property.",
    ],
  },
  "remington-rand-north-tonawanda": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Remington Rand property belongs to North Tonawanda's long manufacturing history. Remington Rand assembled several office-machine, filing-system, and business-equipment companies into a nationally recognized industrial corporation, and its local plant became a substantial part of the city's factory landscape.",
      "Later environmental investigation documented a mixed industrial contaminant profile rather than one single release. Petroleum, chlorinated solvents, PAHs, metals, and PCBs reflected decades of machinery, fuel, electrical equipment, material handling, and changing operations.",
    ],
    timeline: [
      {
        period: "Manufacturing era",
        event:
          "The property supported Remington Rand and successor industrial operations within North Tonawanda's rail- and canal-served factory district.",
      },
      {
        period: "Industrial decline",
        event:
          "Manufacturing contraction and property reuse left aging buildings, tanks, equipment areas, and subsurface impacts requiring investigation.",
      },
      {
        period: "2000s",
        event:
          "State investigation and interim actions addressed petroleum, solvents, PCBs, PAHs, and metals in targeted areas.",
      },
      {
        period: "2010",
        event:
          "DEC reported completion of major interim remedial measures supporting controlled redevelopment.",
      },
      {
        period: "Present",
        event:
          "Restricted-residential or other approved reuse depends on covers, institutional controls, and site-management requirements.",
      },
    ],
    documentedImpacts: [
      "Petroleum and chlorinated solvents affected portions of soil and groundwater.",
      "PCBs were associated with electrical or industrial equipment areas.",
      "PAHs and metals occurred in historic industrial soil and fill.",
    ],
    cleanupAndControls: [
      "Interim measures removed tanks, contaminated material, or other identified sources where required.",
      "Remaining impacts are managed beneath approved covers and through land-use and excavation controls.",
      "Environmental easements and site-management obligations preserve the assumptions under which redevelopment was approved.",
    ],
    presentDay: [
      "The former plant has moved from heavy industrial use toward redevelopment, but its environmental history remains embedded in parcel-specific controls. Reuse should not be described as proof that all residual material was removed.",
    ],
    researchNotes: [
      "Establish the plant's opening date, original products, peak employment, and successor occupants from city directories and company records.",
      "Map former production buildings, tank areas, railroad access, and remedial areas.",
      "Separate conditions documented on the Remington Rand cleanup parcel from neighboring North Tonawanda industries.",
    ],
  },
  "former-buffalo-china": {
    lastReviewed: "July 27, 2026",
    background: [
      "Buffalo Pottery was established in 1901 as part of the Larkin Company's vertically integrated manufacturing world. The Hayes Street factory produced decorated commercial and household ceramics, later operating under the Buffalo China name and becoming a familiar regional employer and brand.",
      "Ceramic production involved kilns, glazing, decorating, fuels, solvents, metals, and extensive factory infrastructure. When the historic operation ended and the property entered redevelopment, investigation found that the environmental story extended beyond the plant boundary through groundwater and soil vapor.",
    ],
    timeline: [
      {
        period: "1901",
        event:
          "Buffalo Pottery began production as an associated Larkin enterprise on the East Side industrial property.",
      },
      {
        period: "Twentieth century",
        event:
          "The plant produced institutional, commercial, and household ceramics and later became widely known as Buffalo China.",
      },
      {
        period: "Factory closure and transition",
        event:
          "The end of historic ceramics production led to property investigation, demolition or reuse planning, and entry into the Brownfield Cleanup Program.",
      },
      {
        period: "Remedial construction",
        event:
          "Cleanup addressed contaminated soil and groundwater and established vapor controls where necessary.",
      },
      {
        period: "Present",
        event:
          "Groundwater, soil-vapor, and engineering-control monitoring continue, including an off-site sub-slab system at a neighboring residence.",
      },
    ],
    documentedImpacts: [
      "Industrial operations affected soil and groundwater beneath portions of the former factory.",
      "Soil-vapor migration required evaluation beyond the principal property boundary.",
      "A neighboring residence received a sub-slab depressurization system as part of the continuing protective measures.",
    ],
    cleanupAndControls: [
      "Contaminated material was removed or managed beneath approved covers during redevelopment.",
      "Groundwater and soil-vapor monitoring track residual impacts and potential migration.",
      "Sub-slab depressurization, institutional controls, environmental easements, and periodic review remain part of the remedy.",
    ],
    presentDay: [
      "The site illustrates both Buffalo's manufacturing ingenuity and the long environmental afterlife of an industrial plant. Redevelopment coexists with continuing off-site monitoring and vapor controls.",
    ],
    researchNotes: [
      "Add product catalogs, worker history, photographs, and a factory-building chronology from Larkin and Buffalo Pottery archives.",
      "Identify which ceramic processes and later occupants correspond to the documented contaminants.",
      "Keep the neighboring vapor-control record precise enough to avoid generalizing conditions to the wider residential area.",
    ],
  },
  "harrison-radiator-lockport": {
    lastReviewed: "July 27, 2026",
    background: [
      "Harrison Radiator emerged in Lockport during the early automobile era and became part of the group of component manufacturers assembled into General Motors. The plant made radiators and heat-exchange products, tying Lockport directly to the growth of mass automobile production.",
      "The scale and longevity of metalworking, fabrication, testing, coating, degreasing, fuel use, and utility systems created a complex industrial property. DEC's completed-site designation reflects remedial work, but the historic facility should be interpreted parcel by parcel rather than as one uniform condition.",
    ],
    timeline: [
      {
        period: "Early 1900s",
        event:
          "Harrison developed radiator manufacturing in Lockport as the automobile industry expanded.",
      },
      {
        period: "General Motors era",
        event:
          "The operation became a major GM component division and a defining regional employer.",
      },
      {
        period: "Late twentieth century",
        event:
          "Production changes, plant modernization, and industrial-property transitions led to environmental investigation and cleanup.",
      },
      {
        period: "Remediation",
        event:
          "State-supervised work addressed identified industrial impacts and established any required controls.",
      },
      {
        period: "Present",
        event:
          "The closed DEC remediation record remains part of a larger active and former manufacturing landscape on Upper Mountain Road.",
      },
    ],
    documentedImpacts: [
      "Historic automotive-component manufacturing involved oils, fuels, solvents, metals, coatings, and industrial wastewater systems.",
      "DEC records document a bounded remediation site within a much larger manufacturing history.",
      "Conditions on one cleanup parcel should not be attributed automatically to the entire Harrison/GM property.",
    ],
    cleanupAndControls: [
      "Investigation and remedial actions addressed identified source areas under DEC oversight.",
      "Completed-site status records the remedial program outcome for the defined parcel.",
      "Any residual contamination, excavation requirements, or continuing controls remain parcel-specific.",
    ],
    presentDay: [
      "Harrison Radiator remains important both as labor and automotive history and as a documented cleanup site. The atlas treats those histories together without implying that the whole Lockport manufacturing district shares identical conditions.",
    ],
    researchNotes: [
      "Verify the founding, acquisition, product, employment, and plant-expansion timeline through GM and Lockport archival sources.",
      "Obtain the final remedial report and map the exact DEC site boundary within the larger plant.",
      "Connect worker and product history without making unsupported occupational-health claims.",
    ],
  },
  "lehigh-valley-railroad-derailment": {
    lastReviewed: "July 27, 2026",
    background: [
      "In December 1970, a Lehigh Valley Railroad train derailed at the Gulf Road crossing in Le Roy. Two tank cars ruptured, releasing approximately 30,000 gallons of trichloroethylene, or TCE, into the ground; about one ton of cyanide crystals was also released.",
      "The cyanide was collected and neutralizing material was spread, but most of the TCE could not be recovered. Odors were reported within days, and the solvent entered bedrock groundwater, eventually producing a plume extending roughly four miles through portions of Genesee, Livingston, and Monroe counties.",
    ],
    timeline: [
      {
        period: "December 1970",
        event:
          "The derailment released about 30,000 gallons of TCE and one ton of cyanide crystals at Gulf Road.",
      },
      {
        period: "1971",
        event:
          "The railroad excavated flushing trenches and installed carbon treatment on affected private wells.",
      },
      {
        period: "1989–1994",
        event:
          "TCE was found in the Genesee County campground well and then in approximately 50 wells east and southeast of the spill zone.",
      },
      {
        period: "2003",
        event:
          "A public waterline connected existing homes in the affected area to a municipal supply.",
      },
      {
        period: "2023",
        event:
          "EPA selected a long-term remedy addressing soil, groundwater, surface water, soil vapor, indoor air, and institutional controls.",
      },
    ],
    documentedImpacts: [
      "TCE entered fractured bedrock and created an approximately four-mile groundwater plume.",
      "Private wells and a campground supply were affected, prompting filtration, monitoring, and public-water connections.",
      "Soil vapor and indoor-air pathways required mitigation systems at affected properties.",
      "Mud Creek surface water and streambed conditions became part of the remedy.",
    ],
    cleanupAndControls: [
      "Contaminated source soil is excavated for permitted off-site disposal where accessible.",
      "The selected remedy uses long-term groundwater monitoring because available treatment cannot restore the full bedrock plume within a reasonable period.",
      "Streambed treatment, vapor mitigation, indoor-air monitoring, public-water connections, easements, and groundwater-use restrictions reduce exposure.",
    ],
    presentDay: [
      "More than fifty years after the derailment, the site remains an active federal and state cleanup. Its history demonstrates how a short transportation accident can become a multi-county groundwater and vapor-management problem lasting generations.",
    ],
    researchNotes: [
      "Add the train consist, locomotive, ownership, emergency-response, and contemporary newspaper chronology.",
      "Map the spill zone, groundwater plume, public-water service area, Mud Creek remedy, and vapor-mitigation properties at appropriate privacy-preserving scales.",
      "Track implementation milestones under EPA's 2023 Record of Decision.",
    ],
  },
  "chemical-leaman-tank-lines": {
    lastReviewed: "July 27, 2026",
    background: [
      "Chemical Leaman Tank Lines operated a chemical tank-truck terminal on Fillmore Avenue in Tonawanda. Tank cleaning and freight handling generated wastewater and residues that were managed in on-site impoundments before modern hazardous-waste controls were established.",
      "The property also contains layers of transportation and disposal history. A former trolley grade crossed the land, construction and demolition fill covered much of the western portion, and the southern edge drains toward Ellicott Creek.",
    ],
    timeline: [
      {
        period: "Pre-terminal landscape",
        event:
          "A north-south trolley grade crossed the property before later industrial filling and terminal development.",
      },
      {
        period: "Tank-terminal era",
        event:
          "Chemical Leaman operated tank-truck handling and cleaning facilities with waste impoundments.",
      },
      {
        period: "1970s",
        event:
          "Construction and demolition fill accumulated on the western property, including material reportedly associated with a burned Tonawanda department store.",
      },
      {
        period: "1987–1989",
        event:
          "DEC ordered closure of the impoundments; contaminated material was excavated and shipped off site, followed by additional excavation and backfilling.",
      },
      {
        period: "Present",
        event:
          "The Class 2 site remains under remediation requirements and an approximately 15-acre environmental easement.",
      },
    ],
    documentedImpacts: [
      "Tank washing and chemical-freight operations generated residues and wastewater managed in on-site impoundments.",
      "Investigators documented fill, leachate breakout, and potential migration toward the low southern portion of the property and Ellicott Creek.",
      "Construction and demolition debris complicates the site history but should not automatically be described as hazardous industrial waste without supporting records.",
    ],
    cleanupAndControls: [
      "Waste-impoundment material was excavated and transported to an industrial disposal facility during closure work.",
      "Additional investigation and remedy requirements address remaining soil, groundwater, fill, and migration pathways.",
      "An environmental easement controls land use and requires compliance with the approved site-management framework.",
    ],
    presentDay: [
      "Chemical Leaman remains a managed Class 2 cleanup property. Its story connects chemical transportation, tank cleaning, informal fill, historic transit infrastructure, and Ellicott Creek rather than representing a single isolated spill.",
    ],
    researchNotes: [
      "Identify the chemicals routinely transported and the operating dates of the terminal from manifests, permits, and company directories.",
      "Verify the reported Jenss department-store demolition-fill account through hauling and municipal records.",
      "Map the former impoundments, trolley grade, filled area, leachate location, and creek boundary.",
    ],
  },
  "altech-specialty-steel": {
    lastReviewed: "July 27, 2026",
    background: [
      "Iron and steel manufacturing began on this Dunkirk property by 1908. Foundry work evolved into forging and finishing stainless-steel rod, bar, and wire, making the complex part of more than a century of metals production beside residential neighborhoods, rail lines, Crooked Brook, and Lake Erie.",
      "Past operations included salt-bath and trichloroethylene pickling, plating, heat treatment, solid-waste disposal, spills, and discharges to Willowbrook Pond. The 90-acre site is divided into operable units because the demolished Lucas Avenue Plant, the pond and tributary, and the main industrial plant present different conditions.",
    ],
    timeline: [
      {
        period: "1908 onward",
        event:
          "Iron and steel manufacturing began, later shifting toward specialty and stainless-steel products.",
      },
      {
        period: "1992",
        event:
          "A RCRA facility assessment identified 24 solid-waste-management units and 11 areas of concern.",
      },
      {
        period: "1995–1997",
        event:
          "Facility investigation documented hazardous-waste disposal and impacts to groundwater and surface-water sediment.",
      },
      {
        period: "1999–2002",
        event:
          "AlTech and successor Empire Specialty Steel entered bankruptcy; the property later continued operation as Dunkirk Specialty Steel.",
      },
      {
        period: "2012–present",
        event:
          "DEC selected operable-unit remedies, demolished the Lucas Avenue Plant, and continued phased investigation and cleanup.",
      },
    ],
    documentedImpacts: [
      "Chromium, lead, PCBs, chlorinated solvents, and other industrial contaminants affected soil, groundwater, pond material, and tributary sediment.",
      "Pickling operations used molten sodium or barium salts and trichloroethylene baths.",
      "Willowbrook Pond and its tributary connected plant operations to Crooked Brook and the wider Lake Erie drainage system.",
      "The plant lies near homes, recreation areas, and school property, making precise boundaries and pathways especially important.",
    ],
    cleanupAndControls: [
      "DEC divided the property into the Lucas Avenue Plant, Willowbrook Pond/tributary, and main-plant operable units.",
      "Demolition, excavation, soil and groundwater remedies, sediment work, covers, monitoring, and institutional controls proceed by operable unit.",
      "Active industrial areas require cleanup designs that protect workers and neighbors while accounting for continuing operations.",
    ],
    presentDay: [
      "Parts of the historic complex remain industrial while other areas have been demolished or entered remediation. AlTech is therefore both a continuing manufacturing landscape and a multi-phase State Superfund cleanup.",
    ],
    researchNotes: [
      "Build the full company succession from the 1908 works through AlTech, Empire, and Dunkirk Specialty Steel.",
      "Map all three operable units, Willowbrook Pond, the tributary, Crooked Brook, residential edges, and former disposal areas.",
      "Track remedy construction and sediment status without presenting proposed work as completed.",
    ],
  },
  "west-valley": {
    lastReviewed: "July 27, 2026",
    background: [
      "West Valley is the site of the only commercial nuclear-fuel reprocessing plant to have operated in the United States. The Main Plant Process Building recovered uranium and plutonium from irradiated fuel between 1966 and 1972, processing about 640 metric tons of fuel and generating approximately 600,000 gallons of liquid high-level radioactive waste.",
      "Congress created the West Valley Demonstration Project in 1980. The federal project covers about 200 acres within New York State's approximately 3,300-acre Western New York Nuclear Service Center. The law assigns the U.S. Department of Energy responsibility for solidifying the high-level waste, disposing of waste created by that work, and decontaminating and decommissioning project facilities before returning the premises to New York.",
    ],
    timeline: [
      {
        period: "1966–1972",
        event:
          "The commercial reprocessing plant operated, recovering uranium and plutonium from spent nuclear fuel.",
      },
      {
        period: "1980",
        event:
          "The West Valley Demonstration Project Act directed DOE to solidify the high-level waste and decommission project facilities.",
      },
      {
        period: "1996–2002",
        event:
          "DOE vitrified the liquid high-level waste into a stable glass form and later moved the canisters to on-site dry storage.",
      },
      {
        period: "2022–2025",
        event:
          "Crews deconstructed the radiologically contaminated Main Plant Process Building after two decades of deactivation work.",
      },
      {
        period: "2026",
        event:
          "Cleanup continued with removal of supporting structures and the start of Fuel Receiving and Storage Facility demolition.",
      },
    ],
    documentedImpacts: [
      "Fuel reprocessing contaminated process buildings and equipment with radioactive material and also left hazardous materials including lead, asbestos, and PCBs.",
      "The project manages high-level waste, transuranic and low-level waste, contaminated soil, legacy facilities, and disposal areas within a larger state-owned nuclear center.",
      "The site's long-term decisions affect both the federal project premises and adjoining areas that remain under New York State responsibility.",
    ],
    cleanupAndControls: [
      "Liquid high-level waste was vitrified into glass and placed in stainless-steel canisters; those canisters are stored on site pending a federal disposal pathway.",
      "Facility deactivation removes contaminated equipment and piping before controlled demolition, with dust suppression, air monitoring, debris controls, and off-site waste disposal.",
      "Environmental monitoring, surveillance, maintenance, and phased decision-making continue while additional structures, below-grade components, soil, and legacy waste are addressed.",
    ],
    presentDay: [
      "The Main Plant Process Building is gone, but West Valley remains an active nuclear cleanup and decommissioning project. Work in 2026 includes demolition of the former fuel-receiving facility and preparation for later phases; completion of one major building does not mean completion of the site-wide cleanup.",
    ],
    researchNotes: [
      "Keep the 200-acre federal project boundary distinct from the larger state-owned Western New York Nuclear Service Center.",
      "Track Phase 1 and later final-decommissioning decisions without presenting proposed remedies or schedules as completed work.",
    ],
  },
  "republic-steel": {
    lastReviewed: "July 27, 2026",
    background: [
      "The former Republic Steel property formed part of a larger South Buffalo steel and coke corridor along the Buffalo River. Steelmaking, coke production, rail activity, filling, and waste handling left extensive industrial soil and fill conditions across parcels later assembled under the Steelfields and RiverBend names.",
      "Cleanup and redevelopment divided the former complex into separate areas. New York's Voluntary Cleanup and Brownfield Cleanup programs addressed contaminated soil and fill, groundwater, former structures, and migration pathways while imposing continuing controls on portions where contamination remains in place.",
    ],
    timeline: [
      {
        period: "Industrial era",
        event:
          "Republic Steel and associated operations used the South Buffalo property for steel manufacturing and related heavy industry.",
      },
      {
        period: "2002",
        event:
          "Steelfields acquired former Republic Steel and Donner-Hanna properties and entered a state voluntary-cleanup agreement.",
      },
      {
        period: "2000s",
        event:
          "Remedial work removed or contained contaminated material and divided the property into managed redevelopment areas.",
      },
      {
        period: "2008–present",
        event:
          "Successive owners advanced RiverBend redevelopment while operation, monitoring, maintenance, and soil-management requirements continued.",
      },
    ],
    documentedImpacts: [
      "Historic steel and coke operations left contaminated soil, industrial fill, and former waste-management areas.",
      "The Buffalo River cleanup record identifies Steelfields as a shoreline property where remedies were designed to prevent residual contamination from migrating to the river.",
      "Because the former complex was subdivided, conditions and remedy obligations differ among individual areas and later development parcels.",
    ],
    cleanupAndControls: [
      "Remedial actions included excavation, grading, containment, covers, and management of remaining soil and fill.",
      "Site-management plans require controls during excavation or redevelopment, along with inspection, maintenance, and reporting obligations.",
      "Environmental easements and use restrictions preserve the commercial or industrial assumptions under which portions of the cleanup were approved.",
    ],
    presentDay: [
      "The former Republic Steel landscape now supports major redevelopment, but it remains a managed brownfield rather than an erased industrial site. Current use depends on parcel-specific remedies, engineering controls, and soil-management requirements.",
    ],
    researchNotes: [
      "Maintain a parcel crosswalk between former Republic Steel, Donner-Hanna, Steelfields areas, RiverBend, and later development names.",
      "Do not attribute conditions documented on one subdivision to the entire former complex without a parcel-specific source.",
    ],
  },
  "tonawanda-coke": {
    lastReviewed: "July 27, 2026",
    background: [
      "Coke manufacturing occurred on this River Road property from 1917 until Tonawanda Coke permanently shut down in October 2018. The process heated coal without air in batteries of ovens and produced coke and chemical by-products; the facility became a major regional focus for benzene emissions, environmental enforcement, and community health concerns.",
      "The 129-acre site consists of the former main plant east of River Road and a separate Niagara River parcel known as Site 108. Closure required an emergency federal and state response, followed by different cleanup programs for the main plant and Site 108.",
    ],
    timeline: [
      {
        period: "1917",
        event:
          "Coke manufacturing began on the property; Tonawanda Coke operated the facility from 1978.",
      },
      {
        period: "2013–2015",
        event:
          "Federal criminal enforcement and a judicial consent decree addressed violations of environmental law.",
      },
      {
        period: "October 2018",
        event:
          "The company suspended operations and permanently shut down its 60 coke ovens under government oversight.",
      },
      {
        period: "2018–2020",
        event:
          "EPA stabilized hazardous materials, treated and disposed of more than one million gallons of waste ammonia liquor, removed contaminated soil, and oversaw other emergency work.",
      },
      {
        period: "2020–present",
        event:
          "The main plant entered New York's Brownfield Cleanup Program while Site 108 remained under a separate federal and state cleanup framework.",
      },
    ],
    documentedImpacts: [
      "The facility's enforcement record included benzene, sulfur dioxide, particulate, and hazardous-waste concerns associated with coke production.",
      "Shutdown and removal work encountered contaminated soil, waste ammonia liquor, coal and coke, drums, vessels, and contaminated containment areas.",
      "Site 108 is a distinct state Superfund parcel west of River Road and should not be conflated with the former oven and main-plant parcel.",
    ],
    cleanupAndControls: [
      "EPA and DEC supervised gas purging and air monitoring during the 2018 shutdown; EPA reported that public-protective air thresholds were not exceeded during that operation.",
      "Emergency work removed or stabilized hazardous substances and secured facility systems after bankruptcy and closure.",
      "Longer-term investigation, cleanup, controls, and redevelopment review proceed under parcel-specific state brownfield and Superfund authorities.",
    ],
    presentDay: [
      "Coke production has ended. The property is a cleanup and redevelopment landscape whose status must be described separately for the former main plant and Site 108; redevelopment plans do not substitute for completion of applicable remedies.",
    ],
    researchNotes: [
      "Update the record with the latest DEC certificates, site-management plans, and construction status for the main-plant brownfield parcels.",
      "Keep verified emissions and enforcement findings separate from unsupported claims about individual medical causation.",
    ],
  },
  "woodlawn-beach": {
    lastReviewed: "July 27, 2026",
    background: [
      "Woodlawn Beach is a public Lake Erie swimming beach at the mouth of Blasdell Creek. Its environmental story is primarily about present-day water quality, storm-driven bacterial risk, creek and wetland function, and public-health decisions—not a documented claim that the park itself is a buried hazardous-waste landfill.",
      "Erie County uses monitoring and predictive tools to guide beach advisories, while New York State Parks has expanded and reconnected the wetland beside Blasdell Creek to improve habitat and reduce pollutants before creek water enters Lake Erie.",
    ],
    timeline: [
      {
        period: "Public-beach era",
        event:
          "The Lake Erie shoreline became a heavily used regional swimming and recreation area.",
      },
      {
        period: "Ongoing",
        event:
          "Erie County monitors beach conditions and posts swimming advisories or closures based on water-quality risk.",
      },
      {
        period: "2022–2023",
        event:
          "State Parks expanded the adjacent wetland, reconnected it to Blasdell Creek, controlled invasive species, and installed native plantings.",
      },
      {
        period: "2025",
        event:
          "State Parks reported the restored wetland exceeded 4.5 acres and included nearly 13,000 native plants.",
      },
    ],
    documentedImpacts: [
      "Bacterial water-quality conditions can change quickly, especially after rain and runoff, requiring day-to-day swimming decisions.",
      "Altered wetland and creek conditions reduced natural treatment and habitat functions near the beach.",
      "Available agency records support water-quality and habitat concerns but do not by themselves establish that the public beach is an old industrial landfill.",
    ],
    cleanupAndControls: [
      "The county's beach program uses sampling, modeling, advisories, and closures to reduce exposure when swimming conditions are unsuitable.",
      "Wetland expansion and a new creek connection increase circulation and natural pollutant-reduction processes before water reaches Lake Erie.",
      "Invasive-species control and native planting support longer-term wetland and wildlife recovery.",
    ],
    presentDay: [
      "Woodlawn remains an active public beach and restored wetland landscape. Visitors should use current county beach notices for swimming decisions; the atlas distinguishes those temporary public-health controls from the evidence required to label a historic disposal site.",
    ],
    researchNotes: [
      "Continue reviewing historical aerials and agency files for any documented fill areas without converting visual impressions into a landfill claim.",
      "Keep beach-bacteria advisories distinct from industrial sediment and groundwater records on neighboring properties.",
    ],
  },
  "seaway-site": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Seaway Site lies within a roughly 100-acre industrial park and former landfill along River Road. The landfill accepted municipal, commercial, construction, and industrial wastes, and in 1974 it also received material moved from the nearby Ashland 1 property that contained residues from Linde's wartime uranium-processing work.",
      "FUSRAP addresses the radiological portion of this mixed landfill history. The contaminants associated with that program include radium, thorium, uranium, and uranium daughter products; other landfill materials remain subject to their own regulatory history.",
    ],
    timeline: [
      {
        period: "1930–1993",
        event:
          "The property operated as a landfill accepting multiple categories of non-FUSRAP waste.",
      },
      {
        period: "1974",
        event:
          "Material containing Linde-derived residues was moved from Ashland 1 and placed at Seaway.",
      },
      {
        period: "2009",
        event:
          "USACE selected containment with limited off-site disposal as the FUSRAP remedy.",
      },
      {
        period: "2015–2016",
        event:
          "USACE excavated and shipped 1,121 cubic yards of qualifying FUSRAP material from the Northside area for off-site disposal.",
      },
      {
        period: "2024–2025",
        event:
          "An engineered cap was installed over Areas A, B, and C and completed in December 2025.",
      },
    ],
    documentedImpacts: [
      "FUSRAP-related soil contains radium, thorium, uranium, and associated daughter products derived from the region's early atomic-energy work.",
      "The radiological material is embedded within a larger former landfill that accepted varied municipal and industrial wastes.",
      "The remedy distinguishes capped landfill areas from Northside and Southside material outside the landfill boundaries.",
    ],
    cleanupAndControls: [
      "A roughly 22-acre, multilayer engineered cap—at least about 4.5 feet thick—contains FUSRAP material in Areas A, B, and C.",
      "Qualifying material outside the landfill containment boundary is excavated for licensed off-site disposal under the selected remedy.",
      "Federal surveillance, maintenance, long-term monitoring, land-use controls, and recurring five-year reviews are required because material remains contained on site.",
    ],
    presentDay: [
      "The engineered cap was completed in December 2025, with final establishment work continuing in 2026. USACE is conducting the next five-year review, scheduled for completion in 2027; the completed cap begins a long-term stewardship phase rather than ending federal responsibility.",
    ],
    researchNotes: [
      "Keep FUSRAP contamination distinct from the landfill's broader municipal and industrial waste inventory.",
      "Track the Southside excavation status and the 2027 five-year-review protectiveness determination.",
    ],
  },
  "gratwick-riverside-park": {
    lastReviewed: "July 27, 2026",
    background: [
      "Gratwick Riverside Park occupies a former municipal and industrial landfill on the Niagara River. Disposal occurred from the late 1930s into the 1960s, before the property became a public waterfront park; the recreational landscape therefore sits above a documented containment remedy.",
      "New York's State Superfund program investigated the landfill and selected a remedy that combined waste containment, groundwater and leachate control, shoreline and wetland work, and long-term management. Public access is compatible with that remedy only while its engineering and institutional controls remain protected.",
    ],
    timeline: [
      {
        period: "1938–1968",
        event:
          "The property operated as a landfill receiving municipal and industrial material.",
      },
      {
        period: "1991",
        event:
          "New York issued the Record of Decision establishing the site's remedial approach.",
      },
      {
        period: "2000s",
        event:
          "Remedial construction established the cap, groundwater collection, and related site controls.",
      },
      {
        period: "Present",
        event:
          "The property remains a public park and closed landfill under continuing operation, monitoring, maintenance, and excavation controls.",
      },
    ],
    documentedImpacts: [
      "Landfilled industrial and municipal material affected soil, fill, groundwater, and areas near the Niagara River shoreline.",
      "Investigations identified volatile organic compounds and other contaminants associated with the former disposal area.",
      "Because waste remains contained beneath the park, excavation and changes to drainage or cover systems require environmental review.",
    ],
    cleanupAndControls: [
      "An approximately 18-inch soil cap and underlying geotextile demarcation layer isolate landfill material from normal park use.",
      "A groundwater collection system operates as part of the remedy, with inspection and maintenance documented through site-management reporting.",
      "Construction within the park must protect the cap, use approved clean material, and follow contaminated-material and health-and-safety procedures.",
    ],
    presentDay: [
      "Gratwick is both a valued waterfront park and an actively managed closed landfill. The remedy supports recreation, trails, boating access, and habitat while requiring permanent care of the cap and groundwater-control system.",
    ],
    researchNotes: [
      "Map the legal landfill and cap boundary separately from the full modern park boundary.",
      "Use current periodic-review reports to track groundwater-system performance and any repairs to shoreline, drainage, or cover components.",
    ],
  },
  "cherry-farm": {
    lastReviewed: "July 27, 2026",
    background: [
      "Cherry Farm is an inactive Niagara River landfill in the Town of Tonawanda. Steel-manufacturing wastes and later industrial fill created an elevated landform of foundry sand, slag, cinders, fly ash, sludge, cutting oils, boiler-cleaning waste, concrete rubble, and related material.",
      "The approximately 56-acre property is hydrologically connected to drainage ditches, wetlands, and the Niagara River. New York addressed Cherry Farm together with the adjoining River Road site through investigation, capping, water controls, and habitat-oriented restoration.",
    ],
    timeline: [
      {
        period: "1908–1970",
        event:
          "Steel-manufacturing and other industrial wastes were disposed across the Cherry Farm and neighboring River Road properties.",
      },
      {
        period: "1980s",
        event:
          "State investigations documented widespread groundwater and surface-water standard exceedances and evaluated migration toward the Niagara River.",
      },
      {
        period: "1990s–2000",
        event:
          "Remedial construction capped the disposal areas, managed water pathways, and incorporated wetland and wildlife-habitat features.",
      },
      {
        period: "Present",
        event:
          "The completed remedy remains in operation, maintenance, and monitoring status.",
      },
    ],
    documentedImpacts: [
      "Fill included foundry sand, slag, cinders, fly ash, industrial sludge, oils, and other manufacturing wastes.",
      "Agency records identified PCBs, PAHs, metals, and other contaminants in the combined Cherry Farm and River Road investigation.",
      "Groundwater, surface water, drainage ditches, and adjacent wetlands created potential pathways to the Niagara River.",
    ],
    cleanupAndControls: [
      "The remedy consolidated and capped contaminated fill to reduce direct contact and rainwater infiltration.",
      "Drainage and water-management components limit contaminant migration, while long-term monitoring evaluates remedy performance.",
      "Habitat plantings and wetland features were incorporated into the cover design but do not replace the underlying containment controls.",
    ],
    presentDay: [
      "Remedial construction is complete, and the site is in long-term operation and maintenance. Its vegetated appearance reflects an engineered containment and habitat remedy, not removal of all buried industrial material.",
    ],
    researchNotes: [
      "Keep Cherry Farm and the adjacent River Road/INS Equipment site distinct while explaining their combined remedial design.",
      "Locate the most recent periodic-review certification before stating current groundwater or surface-water trends.",
    ],
  },
  "niagara-erie-radiological-assessment": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Niagara and Erie County Radiological Assessment is a regional investigation of properties where historic industrial slag or other fill may contain elevated naturally occurring radioactive material. It is an assessment program, not a finding that every contacted or screened property is contaminated.",
      "The work builds on historic aerial radiation surveys, later state and federal records, and contemporary screening. Agencies seek property access for ground-based testing where available information warrants a closer look; results must be evaluated property by property.",
    ],
    timeline: [
      {
        period: "1978",
        event:
          "Federal aerial surveillance identified radiation anomalies at several Niagara-area locations, leading to later ground investigations and removals.",
      },
      {
        period: "2020–2023",
        event:
          "EPA completed removals at several known Niagara County slag-fill locations while broader questions about other properties remained.",
      },
      {
        period: "2025–2026",
        event:
          "State and federal agencies expanded regional aerial, records-based, and property-access work under the Niagara and Erie County assessment.",
      },
      {
        period: "July 2026",
        event:
          "New York formally urged EPA to accelerate testing, risk communication, and planning for any properties where hazards are confirmed.",
      },
    ],
    documentedImpacts: [
      "Historic industrial slag can contain technically enhanced naturally occurring radioactive material, but concentration and exposure potential vary by source and property.",
      "Aerial anomalies and access letters are screening tools; neither alone establishes a completed exposure pathway or a need for removal.",
      "The investigation creates significant uncertainty for residents, making transparent methods, validated results, and property-specific communication essential.",
    ],
    cleanupAndControls: [
      "The current program uses aerial data, records review, ground surveys, sampling, and laboratory analysis to determine whether follow-up is warranted.",
      "Where radioactive fill is confirmed at actionable levels, agencies may use access controls, temporary relocation, excavation, off-site disposal, clean backfill, and restoration.",
      "Results and cleanup decisions must be communicated separately for each property rather than generalized across neighborhoods.",
    ],
    presentDay: [
      "The regional assessment is ongoing. WNYAtlas lists it to document the investigation and public process, while explicitly avoiding the claim that all contacted properties—or an entire neighborhood—contain hazardous radioactive fill.",
    ],
    researchNotes: [
      "Replace secondary reporting on the number of access letters with a direct agency dataset or written statement when released.",
      "Publish property-level locations only when agencies make them public and when doing so does not compromise resident privacy.",
    ],
  },
  "niagara-falls-boulevard-radiation-site": {
    lastReviewed: "July 27, 2026",
    background: [
      "EPA's Niagara Falls Boulevard removal addressed radioactive industrial slag used decades earlier as fill at commercial properties numbered 9512, 9524, 9540, and 9626 and in an adjoining wooded area. The work involved two operating businesses—a bowling alley and a building-supply center.",
      "The slag contained low levels of radioactive elements concentrated through industrial processes. EPA treated the documented fill areas as specific removal sites rather than evidence of uniform contamination along the entire boulevard.",
    ],
    timeline: [
      {
        period: "Early 1960s",
        event:
          "Industrial slag is believed to have been placed as fill at the affected properties.",
      },
      {
        period: "1978",
        event:
          "Federal aerial surveillance identified low-level radiation anomalies in the Niagara region.",
      },
      {
        period: "2016–2020",
        event:
          "EPA excavated radioactive slag from parking areas, interior spaces, and adjoining property and restored the affected areas.",
      },
      {
        period: "2020",
        event:
          "EPA reported completion of the Niagara Falls Boulevard removal work.",
      },
    ],
    documentedImpacts: [
      "Radioactive slag fill was documented in parking lots between the businesses and in specified interior areas of the building-supply center.",
      "Interior removal involved an office, two warehouses, two storage rooms, and material beneath demolished floor sections.",
      "The agency record identifies discrete affected properties and does not support extending the finding to every nearby commercial parcel.",
    ],
    cleanupAndControls: [
      "EPA excavated or removed slag and associated material from exterior and interior areas.",
      "Affected floor sections were demolished so underlying material could be removed and properly disposed.",
      "Clean material and reconstructed surfaces restored the excavated commercial areas after verification work.",
    ],
    presentDay: [
      "EPA lists the removal as complete. The site's value in the atlas is both historical and methodological: it shows how old fill can move industrial radiological material into ordinary commercial settings and why precise property boundaries matter.",
    ],
    researchNotes: [
      "Add final removal quantities and verification criteria when EPA's closeout records are available in a stable public file.",
      "Do not merge this site with the broader regional assessment or imply continuous boulevard-wide contamination.",
    ],
  },
  "donovan-head-start-radiation-site": {
    lastReviewed: "July 27, 2026",
    background: [
      "Two areas behind the Donovan Head Start facility at 1631 Main Street contained radioactive industrial slag used as fill decades ago. The documented material was in the playground and parking area; EPA reports that the two-story building itself was not radiologically contaminated.",
      "The property owner completed the removal in 2023 with EPA oversight. Because the site serves children, exact wording about where contamination was—and was not—found is central to an accurate public account.",
    ],
    timeline: [
      {
        period: "Early 1960s",
        event:
          "Industrial slag is believed to have been used as fill at several Niagara County properties.",
      },
      {
        period: "1978",
        event:
          "Federal aerial surveillance identified low-level radiation anomalies in the Niagara region.",
      },
      {
        period: "2023",
        event:
          "Radiological material was removed from the rear playground and parking lot under EPA oversight.",
      },
      {
        period: "Late summer 2023",
        event:
          "The parking lot, walkway, and playground were restored after removal and verification.",
      },
    ],
    documentedImpacts: [
      "Radioactive slag fill was confirmed in two exterior areas used as a playground and parking lot.",
      "EPA states that the Head Start building did not contain radiological contamination.",
      "The public concern reflects the sensitive land use, but the evidence must remain tied to the two documented exterior removal areas.",
    ],
    cleanupAndControls: [
      "The owner excavated and disposed of radiological fill with EPA oversight.",
      "Removal boundaries and verification work guided restoration with clean material.",
      "The playground, walkway, and parking surfaces were rebuilt after the contaminated material was removed.",
    ],
    presentDay: [
      "EPA lists the Donovan removal as complete. The restored facility grounds should be described together with the agency's explicit finding that the building itself was not contaminated.",
    ],
    researchNotes: [
      "Add the final volume, disposal destination, and verification results if EPA publishes a closeout report.",
      "Preserve the distinction between confirmed exterior fill and unsupported claims about the building or neighboring properties.",
    ],
  },
  "upper-mountain-road-radiation-site": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Upper Mountain Road removal addressed radioactive industrial slag used as fill along an access road and at two neighboring residential properties in Lewiston. EPA traced the concern to the same regional history of low-level radiological slag identified by aerial surveillance and later ground investigation.",
      "Cleanup occurred in phases because the affected material crossed different property settings: a culvert and gravel drive serving an access road, followed by soil beneath basement areas and in yards at two homes.",
    ],
    timeline: [
      {
        period: "Early 1960s",
        event:
          "Industrial slag is believed to have been placed as fill at specific Niagara County properties.",
      },
      {
        period: "1978",
        event:
          "A federal aerial survey identified low-level radiological anomalies in the Niagara region.",
      },
      {
        period: "2020",
        event:
          "EPA completed removal and clean backfill at the culvert crossing and portions of the gravel access road.",
      },
      {
        period: "2021–2023",
        event:
          "EPA conducted two additional cleanups at adjacent homes, including soil beneath basement areas and in exterior yards.",
      },
    ],
    documentedImpacts: [
      "Radioactive slag fill was documented in portions of an access road, culvert area, driveway, residential yards, and beneath basement areas.",
      "The location of material beneath occupied homes required temporary relocation during excavation and restoration.",
      "The documented removals are property-specific and do not establish that all Upper Mountain Road properties contain similar fill.",
    ],
    cleanupAndControls: [
      "EPA excavated radiological material and transported it for appropriate off-site disposal.",
      "Excavated areas received clean backfill and surface or structural restoration.",
      "The two families were temporarily relocated while work occurred beneath and around their homes.",
    ],
    presentDay: [
      "EPA reports the access-road and two residential cleanups as complete. The case remains important because it shows that historic fill can occur beneath later residential construction and that investigation boundaries must follow evidence rather than street names.",
    ],
    researchNotes: [
      "Add property-specific closeout measurements and disposal quantities if EPA publishes them.",
      "Do not identify private residential addresses beyond what agencies make public or extend findings to unsampled neighbors.",
    ],
  },
  "holy-trinity-radiation-site": {
    lastReviewed: "July 27, 2026",
    background: [
      "EPA's Holy Trinity Cemetery vicinity work concerned two residential properties next to the cemetery in Lewiston. Radioactive industrial slag had been used as fill in built surfaces around the homes; the federal removal did not establish that the entire cemetery or surrounding neighborhood was contaminated.",
      "The agency removed material from a garage and driveway at one home and from a driveway and patio at the other. The small, property-specific footprint makes precise naming especially important.",
    ],
    timeline: [
      {
        period: "Early 1960s",
        event:
          "Industrial slag is believed to have been used as fill at specific Niagara County locations.",
      },
      {
        period: "1978",
        event:
          "Federal aerial surveillance identified low-level radiation anomalies in the region.",
      },
      {
        period: "2020–2021",
        event:
          "EPA excavated radiological material at two homes adjacent to Holy Trinity Cemetery.",
      },
      {
        period: "Spring 2021",
        event:
          "EPA reported completion of removal and restoration at both properties.",
      },
    ],
    documentedImpacts: [
      "Affected material was documented in a garage and driveway at one residence.",
      "A driveway and patio were the documented removal areas at the second residence.",
      "Available EPA records identify two adjacent homes; they do not support labeling the full cemetery as a disposal site.",
    ],
    cleanupAndControls: [
      "EPA removed the affected slag and associated material from the specified built areas.",
      "Excavations were verified and restored with clean material and reconstructed surfaces.",
      "Completion status applies to the two documented properties and removal footprints.",
    ],
    presentDay: [
      "EPA lists the two residential cleanups as complete. WNYAtlas uses “cemetery vicinity” deliberately so the map does not convert a geographic reference into an unsupported claim about the cemetery itself.",
    ],
    researchNotes: [
      "Seek closeout documentation for final quantities and radiological verification criteria.",
      "Maintain resident privacy and avoid publishing exact addresses unless already necessary in an agency public record.",
    ],
  },
  "michael-heyman-east-ferry": {
    lastReviewed: "July 27, 2026",
    background: [
      "The 3.32-acre East Ferry Street site was the former Michael Heyman Company zinc and lead smelting and refining facility. High lead concentrations were found in ash and fill, and state investigations showed that contamination extended west into neighboring industrial and commercial properties.",
      "The cleanup became a major Buffalo environmental-justice project because contaminated industrial fill sat close to homes, churches, and community institutions. New York expanded the remedy beyond the former plant boundary as off-site data defined the actual extent.",
    ],
    timeline: [
      {
        period: "Industrial era",
        event:
          "Michael Heyman Company operated zinc and lead smelting and refining on East Ferry Street.",
      },
      {
        period: "2001–2004",
        event:
          "DEC investigations confirmed that lead-contaminated ash and fill extended onto additional properties west of the plant.",
      },
      {
        period: "2000s",
        event:
          "The state expanded cleanup goals and excavated contaminated soil across the site and affected neighboring parcels.",
      },
      {
        period: "January 2008",
        event:
          "DEC reports that the principal remedial construction was completed.",
      },
    ],
    documentedImpacts: [
      "Lead-contaminated ash and fill affected the former smelter property and several neighboring industrial and commercial parcels.",
      "Cleanup also encountered PCB-contaminated soil, underground fuel-oil tanks, tires, and construction and demolition debris.",
      "The investigation demonstrates that historic smelting impacts followed fill and property use rather than stopping at the original ownership line.",
    ],
    cleanupAndControls: [
      "The remedy excavated 136,234 tons of lead-contaminated soil and 77 cubic yards of PCB-affected soil.",
      "Two underground fuel-oil tanks and other waste and debris were removed.",
      "Excavated areas were restored with 104,156 cubic yards of clean fill, creating land suitable for planned community reuse under the approved remedy.",
    ],
    presentDay: [
      "The large-scale soil removal is complete, and the former industrial land has been positioned for community use. The record remains a defining local example of off-site investigation changing the size and ambition of a cleanup.",
    ],
    researchNotes: [
      "Map the off-site remedial parcels rather than representing the cleanup as a single point at 858 East Ferry.",
      "Review later property-use records and any continuing restrictions before describing individual parcels as unrestricted.",
    ],
  },
  "buffalo-color-area-e-field": {
    lastReviewed: "July 27, 2026",
    background: [
      "Area E is a 15.8-acre portion of the former Buffalo Color chemical-manufacturing complex. Remediation retained some contamination beneath engineered covers, plugged unused process sewers, rehabilitated storm sewers, and established long-term groundwater and cover-system monitoring.",
      "The central and western portions were later redeveloped as athletic fields with a fieldhouse, access walks, bleachers, and parking. The sports complex is therefore an example of restricted-residential reuse supported by engineered controls—not evidence that all former industrial material was removed.",
    ],
    timeline: [
      {
        period: "Chemical-manufacturing era",
        event:
          "The parcel formed part of the Buffalo Color dye and chemical complex.",
      },
      {
        period: "2010–2011",
        event:
          "Area E remedial construction established covers, sewer work, land-use controls, and a long-term site-management program.",
      },
      {
        period: "2018",
        event:
          "The first athletic-field and fieldhouse redevelopment phase was completed under DEC-approved controls.",
      },
      {
        period: "2022",
        event:
          "A second phase added athletic fields in the western portion of Area E.",
      },
      {
        period: "Present",
        event:
          "Cover inspections, shallow-groundwater monitoring, vapor controls, and environmental-easement obligations continue.",
      },
    ],
    documentedImpacts: [
      "Historic chemical manufacturing affected soil, fill, groundwater, and portions of the former process and storm-sewer system.",
      "Residual contamination remains beneath the integrated cover system and is managed through institutional and engineering controls.",
      "Potential groundwater migration and vapor intrusion require continuing monitoring or building-specific controls.",
    ],
    cleanupAndControls: [
      "Restricted-residential areas use combinations of clean soil, gravel, artificial turf, pavement, buildings, and geotextile demarcation layers as an integrated cover.",
      "An environmental easement controls subsurface disturbance, groundwater use, land use, and vapor-intrusion requirements.",
      "Quarterly groundwater sampling, cover inspections, and operation and maintenance verify that the remedy continues to function.",
    ],
    presentDay: [
      "The athletic fields and fieldhouse operate above a managed brownfield remedy. The latest reviewed periodic report found the cover intact and the remedy protective, while emphasizing that inspection, groundwater monitoring, and site-management obligations remain essential.",
    ],
    researchNotes: [
      "Update the profile when the revised engineering report, site-management plan, and easement referenced in the periodic report are finalized.",
      "Keep Area E's remedy and monitoring separate from conditions and programs governing Buffalo Color Areas A through D.",
    ],
  },
  "ashland-1-refinery-site": {
    lastReviewed: "July 27, 2026",
    background: [
      "Ashland 1, historically known as the Haist Property, stored about 8,000 tons of low-grade uranium-ore tailings from Linde's Manhattan Project-era processing between 1944 and 1946. Ashland Oil later acquired the land in 1960 and incorporated it into refinery operations.",
      "The property is part of the interconnected Tonawanda FUSRAP story: material originated at Linde, was stored at Ashland 1, and some was later moved to Seaway. The federal remedy removed qualifying radiological material rather than treating every consequence of later refinery use as a FUSRAP condition.",
    ],
    timeline: [
      {
        period: "1944–1946",
        event:
          "Approximately 8,000 tons of Linde uranium-ore tailings were stored on the Haist Property.",
      },
      {
        period: "1960",
        event:
          "Ashland Oil acquired the property for refinery use.",
      },
      {
        period: "1998",
        event:
          "USACE signed the Record of Decision for Ashland 1, Ashland 2, and Seaway Area D.",
      },
      {
        period: "2003",
        event:
          "Ashland 1 cleanup was completed after 173,000 tons of material were excavated for off-site disposal.",
      },
      {
        period: "2008–present",
        event:
          "The site entered federal long-term stewardship under the Department of Energy Office of Legacy Management.",
      },
    ],
    documentedImpacts: [
      "Stored uranium-processing residues affected soil at the former Ashland refinery property.",
      "The material history links Ashland 1 to Linde, Ashland 2, Seaway Area D, and portions of Rattlesnake Creek.",
      "FUSRAP eligibility and cleanup criteria address early atomic-energy contamination and should not be used as a blanket description of all refinery-era conditions.",
    ],
    cleanupAndControls: [
      "USACE excavated approximately 173,000 tons of material from Ashland 1 and shipped it off site for disposal.",
      "Related work removed more than 33,000 tons from affected portions of Rattlesnake Creek in 2005.",
      "Federal long-term stewardship preserves records and verifies the completed remedy under the land-use assumptions established by the cleanup.",
    ],
    presentDay: [
      "The FUSRAP remedial action is complete and the site is under DOE legacy management. Its present-day story is one of documented removal and stewardship, while the movement of material to Seaway remains a separate containment history.",
    ],
    researchNotes: [
      "Map the original Haist storage area, later refinery parcel, and cleanup footprint distinctly.",
      "Do not merge Ashland 1's completed removal status with Seaway's capped-landfill status or with non-FUSRAP refinery contamination.",
    ],
  },
  "huntley-generating-station": {
    lastReviewed: "July 27, 2026",
    background: [
      "Huntley was a coal-fired generating station on the Niagara River in the Town of Tonawanda. Its environmental footprint included the power plant, coal handling, wastewater and settling ponds, and a separately managed industrial landfill used for coal-combustion residuals.",
      "Coal ash is the mineral residue left after coal is burned. At Huntley it was managed through ponds, dewatering systems, and landfill disposal; those units have their own inspection, closure, monitoring, and permit records distinct from the retired generating buildings.",
    ],
    timeline: [
      {
        period: "River Station era",
        event:
          "Electric generation developed on the Niagara River property and later expanded into the Huntley coal-fired station.",
      },
      {
        period: "1970s–1980s",
        event:
          "Multiple coal-combustion residual ponds and equalization units were commissioned or modified.",
      },
      {
        period: "2011",
        event:
          "EPA's national coal-ash initiative evaluated the structural condition and hazard potential of Huntley's impoundments.",
      },
      {
        period: "2016",
        event:
          "The coal-fired generating station retired.",
      },
      {
        period: "Present",
        event:
          "The former plant and the industrial ash landfill proceed through separate closure, monitoring, property-management, and redevelopment processes.",
      },
    ],
    documentedImpacts: [
      "Coal combustion produced fly ash and bottom ash requiring pond or landfill management.",
      "EPA's impoundment assessment found that failure of several pond embankments could release residuals toward the Niagara River, a hazard classification rather than a finding that failure had occurred.",
      "Groundwater, surface-water, landfill, and pond conditions must be evaluated under the records governing each unit.",
    ],
    cleanupAndControls: [
      "Impoundment and landfill controls include embankment inspection, water management, cover or closure work, groundwater monitoring, and annual reporting.",
      "The industrial landfill remains subject to New York solid-waste requirements after power generation ceased.",
      "Building demolition or redevelopment does not remove the continuing obligations attached to ash-management areas.",
    ],
    presentDay: [
      "Huntley no longer burns coal, but retirement is not the same as environmental closure. The former generating property, ash ponds, and industrial landfill require separate status descriptions as monitoring, closure, and reuse decisions continue.",
    ],
    researchNotes: [
      "Obtain the newest landfill annual report and unit-by-unit closure documentation before stating that any coal-ash area is fully closed.",
      "Keep EPA dam-hazard classifications distinct from evidence of an actual release or current structural deficiency.",
    ],
  },
  "dunlop-disposal-sites": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Dunlop tire plant contained three historical waste-disposal areas within a larger industrial property near River Road and Sheridan Drive. Records describe disposal of oils, cinders, solvents, wood, building rubble, rubber products, and other plant wastes beginning in the early twentieth century.",
      "New York investigated the three areas as related but distinct units and selected containment remedies supported by long-term groundwater monitoring. The atlas treats them as one connected plant history while preserving their separate boundaries and records.",
    ],
    timeline: [
      {
        period: "1920s onward",
        event:
          "Waste-disposal areas developed alongside tire-manufacturing operations.",
      },
      {
        period: "1980s–1992",
        event:
          "State and federal investigations characterized three disposal areas, groundwater, and potential pathways toward nearby surface water.",
      },
      {
        period: "1993",
        event:
          "New York selected and designed capping and monitoring remedies for the inactive disposal areas.",
      },
      {
        period: "1990s–present",
        event:
          "Caps, inspections, institutional controls, and long-term groundwater monitoring have managed wastes remaining on site.",
      },
    ],
    documentedImpacts: [
      "Historical disposal included waste oils, solvents, cinders, rubber products, construction debris, and process-related metals and chemicals.",
      "Investigations evaluated soil, waste, groundwater, and the potential for migration toward the Niagara River and interconnected industrial groundwater system.",
      "The three units differ in size, waste history, and conditions; findings from Site 2 should not automatically be applied to Sites 1 and 3.",
    ],
    cleanupAndControls: [
      "Engineered landfill caps reduce direct contact and rainwater infiltration into contained waste.",
      "Groundwater wells and periodic sampling track whether contaminants are migrating from the disposal areas.",
      "Landfill inspections, repair obligations, land-use controls, and excavation restrictions protect the containment systems.",
    ],
    presentDay: [
      "The disposal areas remain managed within an industrial property. Their remedy relies on intact caps and continuing groundwater oversight, so an active or redeveloped plant use does not eliminate the underlying closed-landfill controls.",
    ],
    researchNotes: [
      "Build separate polygons and remedy summaries for Dunlop Sites 1, 2, and 3.",
      "Locate the newest periodic-review certification before characterizing current groundwater trends or cap condition.",
    ],
  },
  "buffalo-harbor-cdf-4": {
    lastReviewed: "July 27, 2026",
    background: [
      "Buffalo Harbor Confined Disposal Facility No. 4 is a 107-acre in-lake containment facility attached to land at the Outer Harbor's south end. The U.S. Army Corps of Engineers built it in 1977 to receive dredged material from federal navigation projects.",
      "Its location beside the former Bethlehem Steel property makes it easy to confuse with the steel plant's slag fill or HWM-2 waste unit. CDF No. 4 is a separate Erie County-owned, federally operated navigation facility with its own acceptance, capacity, and containment record.",
    ],
    timeline: [
      {
        period: "1977",
        event:
          "The confined disposal facility was constructed under federal navigation authority.",
      },
      {
        period: "Operating era",
        event:
          "The facility received material dredged to maintain Buffalo Harbor, Black Rock Channel, and Tonawanda Harbor.",
      },
      {
        period: "2023 fact sheet",
        event:
          "USACE reported a total capacity of 6.9 million cubic yards and typical placement of about 140,000 cubic yards every two years.",
      },
      {
        period: "Present",
        event:
          "The facility remains reserved primarily for material from authorized navigation projects, with other use subject to environmental acceptance and capacity review.",
      },
    ],
    documentedImpacts: [
      "Navigation dredging removes accumulated sediment from channels and requires controlled placement when material is unsuitable for open-water disposal or beneficial use.",
      "The CDF permanently changes the shoreline and contains dredged sediment within perimeter structures.",
      "Its waste stream and legal identity differ from Bethlehem Steel's industrial landfills and slag-created land.",
    ],
    cleanupAndControls: [
      "Perimeter containment isolates placed dredged material from the surrounding lake.",
      "USACE controls material acceptance, placement, capacity, operation, and maintenance; non-federal use requires an environmental and navigation-capacity determination.",
      "Monitoring and structural maintenance support continued containment and navigation service.",
    ],
    presentDay: [
      "CDF No. 4 remains an operating dredged-material facility with substantial reported capacity. It should be mapped as navigation infrastructure—not relabeled as the Bethlehem Steel landfill or used to imply that all Buffalo River dredging went onto the steel property.",
    ],
    researchNotes: [
      "Track updated bathymetry, remaining capacity, accepted material sources, and any beneficial-use proposals.",
      "Maintain distinct polygons for CDF No. 4, Bethlehem HWM-2, and the steel plant's slag-fill shoreline.",
    ],
  },
  "pfohl-brothers-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "Pfohl Brothers is a roughly 130-acre former landfill near Transit Road, Aero Drive, wetlands, and residential property in Cheektowaga. Areas B and C received municipal and industrial wastes from 1932 to 1971; Area A was principally a soil-borrow area and received a separate no-action decision.",
      "Industrial wastes reportedly came from steel, metal, chemical, petroleum, utility, optical, furnace-material, and other manufacturers. Disposal used shallow pits that were covered with fly ash and fill, leaving drums, waste, leachate, and contaminated environmental media to be addressed through Superfund.",
    ],
    timeline: [
      {
        period: "1932–1971",
        event:
          "Municipal and industrial wastes were disposed in Areas B and C.",
      },
      {
        period: "1992–1995",
        event:
          "Cleanup decisions selected containment for Areas B and C, no action for Area A, and removal of 4,534 drums.",
      },
      {
        period: "2002",
        event:
          "Waste consolidation, caps, containment, and leachate collection and treatment were completed.",
      },
      {
        period: "2008",
        event:
          "EPA deleted the site from the National Priorities List after completing the required remedial construction.",
      },
      {
        period: "2025",
        event:
          "EPA completed the fifth five-year review because contaminants remain above levels allowing unrestricted use.",
      },
    ],
    documentedImpacts: [
      "Investigations identified PAHs, PCBs, volatile organic compounds, metals, and contamination affecting soil, sediment, surface water, and groundwater.",
      "Leachate seeps, exposed waste, nearby wetlands, creeks, fishing areas, and residential surroundings created human and ecological exposure concerns.",
      "Area A differs from the landfilled Areas B and C and was not found to require the same containment remedy.",
    ],
    cleanupAndControls: [
      "The cleanup removed 4,534 drums and consolidated approximately 540,000 cubic yards of edge waste plus 9,200 cubic yards near wetlands into the interior of Areas B and C.",
      "Two large caps, landfill-gas vents, drainage works, containment, and leachate collection and treatment manage waste remaining on site.",
      "Covenants prohibit groundwater use and cap-disturbing excavation and impose redevelopment, drainage, basement, and soil-gas requirements.",
    ],
    presentDay: [
      "Pfohl Brothers remains a monitored and maintained containment site. NPL deletion means the required cleanup was completed; it does not mean all waste was removed or that the property supports unlimited use and unrestricted exposure.",
    ],
    researchNotes: [
      "Incorporate the 2025 five-year review's specific recommendations and PFAS findings into the next editorial update.",
      "Map Areas A, B, and C separately so the no-action borrow area is not portrayed as capped hazardous-waste landfill.",
    ],
  },
  "tifft-nature-preserve": {
    lastReviewed: "July 27, 2026",
    background: [
      "Tifft Nature Preserve is a 264-acre urban wildlife refuge on former docklands. Portions were used as a City of Buffalo dump in the 1950s and 1960s before municipal waste was capped with clay and soil and the landscape was reshaped for habitat and public use.",
      "The preserve now combines a 75-acre cattail marsh, woodlands, grasslands, ponds, trails, and environmental education. Its success as habitat is inseparable from the history of containment and ecological restoration beneath and around the modern preserve.",
    ],
    timeline: [
      {
        period: "Industrial dockland era",
        event:
          "The property formed part of Buffalo's rail- and water-served industrial waterfront.",
      },
      {
        period: "1950s–1960s",
        event:
          "Portions of the land were used for municipal waste disposal.",
      },
      {
        period: "1970s",
        event:
          "Waste was capped with clay and soil, ponds were enlarged, vegetation was planted, and the preserve was established.",
      },
      {
        period: "2025–present",
        event:
          "New habitat work has targeted marsh water levels, invasive species, turtle nesting, fish spawning, and Lake Kirsty shoreline restoration.",
      },
    ],
    documentedImpacts: [
      "Municipal dumping and earlier industrial waterfront use altered soil, fill, drainage, and habitat.",
      "Capping left waste contained beneath portions of the preserve rather than excavating the entire disposal history.",
      "Wetland water levels, invasive vegetation, and shoreline condition remain active ecological-management concerns.",
    ],
    cleanupAndControls: [
      "Clay and soil cover isolated former municipal waste and supported revegetation.",
      "Pond enlargement, marsh management, native planting, and habitat structures converted disturbed land into functioning urban habitat.",
      "Future excavation and habitat construction must account for capped areas and protect the containment system.",
    ],
    presentDay: [
      "Tifft is an active nature preserve, education center, and important migratory-bird stopover. Its public value and ecological recovery are real, while the former dump remains part of the land's managed physical history.",
    ],
    researchNotes: [
      "Obtain the original closure drawings and map the municipal-dump footprint separately from the full preserve.",
      "Document how current habitat projects avoid or protect capped waste areas and whether formal landfill monitoring continues.",
    ],
  },
  "main-hertel-the-rails": {
    lastReviewed: "July 27, 2026",
    background: [
      "The 4.9-acre Main and Hertel brownfield supported manufacturing beginning around 1910. Products included paint, vehicles, and gasoline pumps, and the Keystone Corporation later used the property for electroplating.",
      "New York's Brownfield Cleanup Program addressed contaminated soil, drums, underground-storage-tank material, transformers, and demolition debris before the property was redeveloped as The Rails, a mixed-use apartment and commercial complex.",
    ],
    timeline: [
      {
        period: "1910 onward",
        event:
          "Successive manufacturers produced paint, vehicles, gasoline pumps, and other goods on the property.",
      },
      {
        period: "Electroplating era",
        event:
          "Keystone Corporation conducted electroplating operations, adding a metal-finishing chapter to the site's industrial history.",
      },
      {
        period: "2024",
        event:
          "DEC issued a Brownfield Cleanup Program Certificate of Completion after reviewing the completed remedy.",
      },
      {
        period: "Present",
        event:
          "The property has been redeveloped with apartments and adjoining commercial space.",
      },
    ],
    documentedImpacts: [
      "Historic industrial uses contaminated soil and left drums, tanks, transformers, and building material requiring controlled disposal.",
      "Electroplating and manufacturing histories guided investigation for metals, petroleum-related compounds, and other industrial contaminants.",
      "The brownfield boundary is a defined 4.9-acre cleanup site and should not be expanded to the entire Main–Hertel neighborhood.",
    ],
    cleanupAndControls: [
      "Approximately 1,700 tons of contaminated soil were excavated and disposed off site.",
      "Cleanup also removed about six tons of drums and underground-storage-tank material and roughly 500 tons of building material, including concrete, wood, and transformers.",
      "DEC's Certificate of Completion confirms that the approved remedial objectives were met for the site's planned use, subject to any controls recorded in the final engineering documents.",
    ],
    presentDay: [
      "The Rails demonstrates residential and commercial reuse of a former industrial property after state-supervised cleanup. The completion certificate applies to the defined brownfield remedy and does not erase the site's manufacturing history.",
    ],
    researchNotes: [
      "Add the final engineering report and environmental easement to specify any remaining cover, vapor, groundwater, or excavation controls.",
      "Map the certified site boundary rather than using the development's marketing footprint.",
    ],
  },
  "former-trico-plant": {
    lastReviewed: "July 27, 2026",
    background: [
      "Trico manufactured windshield wipers in a large complex near the Buffalo Niagara Medical Campus. Decades of manufacturing, power generation, storage, and building use left soil, fill, groundwater, and building-related environmental conditions to be managed during conversion of the complex.",
      "The Brownfield Cleanup Program supported rehabilitation primarily into apartments with commercial space. Because portions of contamination remain managed in place, the redevelopment operates under a site-management plan rather than being described as an unrestricted removal of every historical impact.",
    ],
    timeline: [
      {
        period: "Manufacturing era",
        event:
          "Trico used the complex for windshield-wiper manufacturing and supporting industrial operations.",
      },
      {
        period: "Post-industrial period",
        event:
          "Vacancy and redevelopment planning led to environmental investigation, building abatement, and brownfield enrollment.",
      },
      {
        period: "Cleanup and construction",
        event:
          "Remedial work proceeded with adaptive reuse of the historic industrial buildings.",
      },
      {
        period: "2025",
        event:
          "A revised site-management plan documented the engineering and institutional controls governing the occupied redevelopment.",
      },
    ],
    documentedImpacts: [
      "Historic manufacturing and urban fill affected environmental media and required investigation during residential conversion.",
      "Large industrial buildings presented asbestos, lead-based materials, petroleum systems, and other regulated building and subsurface conditions.",
      "Remaining contamination is managed according to the final remedy and should not be generalized beyond the brownfield boundary.",
    ],
    cleanupAndControls: [
      "Cleanup combined removal or treatment of affected material with building abatement and controlled redevelopment.",
      "Cover systems, occupied-building controls, groundwater or soil-disturbance procedures, and environmental easements apply where specified by the site-management plan.",
      "Periodic inspection, certification, and operation and maintenance preserve the remedy after residents and businesses occupy the complex.",
    ],
    presentDay: [
      "The former Trico plant is primarily a residential adaptive-reuse project with commercial space. Its successful reuse depends on continued compliance with the state-approved site-management plan and any environmental easement.",
    ],
    researchNotes: [
      "Extract the parcel-specific contaminants, remedial quantities, and active engineering controls from the final engineering report.",
      "Distinguish the certified brownfield site from adjacent Trico-era or medical-campus parcels not covered by the same remedy.",
    ],
  },
  "niagara-falls-air-reserve-pfas": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Niagara Falls Air Reserve Station has a long hazardous-waste corrective-action history involving former landfills, tanks, fire-training areas, and groundwater contamination. A newer investigation layer concerns PFAS associated with historical use and release of aqueous film-forming firefighting foam.",
      "PFAS work must be read separately from the older volatile-organic-compound remedy. EPA's RCRA page reports corrective action complete and groundwater controlled for the legacy units, while Air Force and state investigations continue to define PFAS occurrence and potential migration.",
    ],
    timeline: [
      {
        period: "1942 onward",
        event:
          "Military aviation, waste handling, fuel systems, and fire training created multiple environmental investigation areas.",
      },
      {
        period: "1990s",
        event:
          "Groundwater collection, treatment, soil heating, vapor extraction, and other corrective measures began at legacy units.",
      },
      {
        period: "2016–2019",
        event:
          "Air Force investigations evaluated historical firefighting-foam use and sampled for PFAS at potential release areas.",
      },
      {
        period: "Present",
        event:
          "PFAS assessment and response decisions proceed alongside long-running RCRA groundwater and site-wide monitoring.",
      },
    ],
    documentedImpacts: [
      "Historical AFFF use created potential PFAS source areas associated with fire-training and emergency-response activities.",
      "Legacy investigations also found VOCs—including benzene, trichloroethene, and vinyl chloride—in groundwater at several units.",
      "PFAS detections, plume boundaries, and exposure pathways require separate current data; legacy corrective-action completion does not automatically resolve PFAS.",
    ],
    cleanupAndControls: [
      "Legacy units use groundwater capture and treatment, site security, restricted access, and facility-wide surface-water and groundwater monitoring.",
      "PFAS work uses records review, source-area sampling, groundwater investigation, and risk-based evaluation under evolving federal and state standards.",
      "Any drinking-water response, off-site investigation, or permanent PFAS remedy must be tied to documented pathways rather than assumed from on-base detection alone.",
    ],
    presentDay: [
      "The air station remains active. EPA classifies the older RCRA corrective action as complete with groundwater controlled, while PFAS remains an investigation and potential-response program whose current conclusions must come from the newest Air Force and state records.",
    ],
    researchNotes: [
      "Add the latest Air Force remedial-investigation results, off-base sampling boundaries, and decision documents when released.",
      "Keep AFFF-related PFAS findings distinct from the older landfill, tank, and VOC corrective-action units.",
    ],
  },
  "mayville-pfas-site": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Mayville PFAS investigation began after perfluorononanoic acid, or PFNA, was detected in the village public-water system in December 2020. State work identified PFNA and other PFAS in environmental media near a former school athletic field reportedly used for firefighting training with aqueous film-forming foam.",
      "The formal site includes three tax parcels at 2 Academy Street, while the investigation extends downgradient through the village. New York divided the work into three operable units because the suspected source area and the still-undefined off-site extent require different investigation steps.",
    ],
    timeline: [
      {
        period: "December 2020",
        event:
          "PFNA was detected in the public-water system and the Health Department issued a do-not-drink advisory.",
      },
      {
        period: "2021",
        event:
          "The village began using a new supply well and installed carbon treatment on an existing well; PFAS was not detected in water supplied from the replacement sources.",
      },
      {
        period: "2021–2023",
        event:
          "Supplemental investigations sampled soil, sediment, surface water, groundwater, and private wells.",
      },
      {
        period: "2023–2025",
        event:
          "DEC designated the property a drinking-water-contamination remediation site and advanced a detailed remedial investigation.",
      },
    ],
    documentedImpacts: [
      "PFNA and other PFAS were documented in on-site surface soil, sediment, surface water, and groundwater.",
      "Off-site sediment, surface water, and groundwater results showed migration beyond the three-parcel site boundary.",
      "Twenty-five private wells sampled in December 2020 did not contain PFNA or elevated concentrations of the other analyzed PFAS.",
    ],
    cleanupAndControls: [
      "The immediate drinking-water response changed supply wells and added granular-activated-carbon treatment.",
      "The remedial investigation is defining source areas, downgradient operable units, environmental pathways, and the extent of impacts to public-water wells.",
      "Future source removal, treatment, institutional controls, or long-term monitoring will depend on the completed investigation and selected remedy.",
    ],
    presentDay: [
      "Mayville is an active PFAS investigation, not a completed cleanup. The public-water exposure was mitigated through replacement supply and treatment, while DEC continues to define the source and off-site extent before selecting a permanent environmental remedy.",
    ],
    researchNotes: [
      "Track the remedial-investigation results and distinguish PFNA from other PFAS in maps and tables.",
      "Do not portray the 2020 do-not-drink advisory as current when state records say replacement sources have tested without detected PFAS.",
    ],
  },
  "marine-drive-apartments-east-pfas": {
    lastReviewed: "July 27, 2026",
    background: [
      "Marine Drive Apartments East is a 2.447-acre brownfield at 90 Erie Street, historically part of Buffalo's canal district and later used as a parking lot beside the existing apartment complex. Deep historic fill reflects earlier streets, canals, buildings, and waterfront activity.",
      "The brownfield investigation identified conventional fill-related contaminants in soil and low-level PFAS in groundwater. DEC's public record states that PFAS was not found above applicable criteria in soil and assumes the groundwater PFAS comes from an off-site source, an important limit on how the site should be labeled.",
    ],
    timeline: [
      {
        period: "Historic canal district",
        event:
          "Streets, canals, tenements, waterfront activity, demolition, and filling created a complex subsurface record.",
      },
      {
        period: "February 2024",
        event:
          "The applicant entered New York's Brownfield Cleanup Program.",
      },
      {
        period: "2024",
        event:
          "A remedial investigation characterized soil, groundwater, historic fill, and redevelopment alternatives.",
      },
      {
        period: "June 2025",
        event:
          "DEC and the Health Department approved the investigation and remedial work plan and issued the final decision document.",
      },
    ],
    documentedImpacts: [
      "SVOCs, PAHs, metals, acetone, and other contaminants occur in deep historic fill and subsurface soil.",
      "Low-level PFAS, SVOCs, and metals were detected in groundwater.",
      "The investigation did not identify PFAS exceedances in soil from the surface to more than 20 feet deep and attributes groundwater PFAS to an assumed off-site source.",
    ],
    cleanupAndControls: [
      "The selected remedy addresses contaminated historic fill and soil under state brownfield oversight.",
      "Construction controls, soil handling, groundwater management, verification sampling, and any vapor or cover requirements protect workers and future residents.",
      "Groundwater PFAS requires monitoring and source interpretation without inaccurately assigning an on-site soil source.",
    ],
    presentDay: [
      "The site is moving from investigation into implementation of a state-approved remedy for planned affordable housing. It remains a cleanup project until construction, final engineering documentation, and any required certification are complete.",
    ],
    researchNotes: [
      "Update the profile with remedial construction quantities, groundwater PFAS trends, and the final completion certificate.",
      "Preserve DEC's distinction between on-site historic-fill contamination and the assumed off-site source of groundwater PFAS.",
    ],
  },
  "iroquois-gas-westwood": {
    lastReviewed: "July 27, 2026",
    background: [
      "This property near Dart and Bradley streets is associated with the former Iroquois Gas manufactured-gas plant and later Westwood Pharmaceutical operations. Manufactured-gas plants heated coal or oil to make fuel gas, leaving coal tar and other dense wastes that can persist in soil and groundwater.",
      "New York's site-characterization work documented coal-tar-related contamination, including benzene and other BTEX compounds and polycyclic aromatic hydrocarbons. The nearby Scajaquada Creek setting makes the distinction between on-site source material and migration pathways especially important.",
    ],
    timeline: [
      {
        period: "Manufactured-gas era",
        event:
          "Iroquois Gas operated a manufactured-gas facility in the Dart and Bradley streets area.",
      },
      {
        period: "Later industrial use",
        event:
          "Westwood Pharmaceutical and related industrial activity occupied portions of the property.",
      },
      {
        period: "2021–2022",
        event:
          "DEC-directed site characterization evaluated soil, groundwater, soil vapor, and the relationship to nearby Scajaquada Creek.",
      },
      {
        period: "October 2022",
        event:
          "DEC issued the site-characterization report that anchors the present public record.",
      },
    ],
    documentedImpacts: [
      "Coal tar and coal-tar indicators were identified in subsurface materials.",
      "Benzene, toluene, ethylbenzene, xylenes, and PAHs were among the contaminants evaluated in site media.",
      "The site's proximity to Scajaquada Creek creates a potential migration pathway that requires source- and location-specific interpretation.",
    ],
    cleanupAndControls: [
      "DEC characterization defines the nature and extent of contamination before a final remedy is selected.",
      "Access controls and safe soil-management procedures are necessary where contaminated subsurface material may be disturbed.",
      "Further investigation, remedial design, and long-term monitoring should be tracked through DEC's official site record.",
    ],
    presentDay: [
      "This remains an investigation and cleanup-planning site rather than a completed remediation. Public descriptions should identify documented manufactured-gas contamination without implying that every nearby property or all of Scajaquada Creek is part of the site.",
    ],
    researchNotes: [
      "Track later DEC decision documents for the selected remedy, cleanup boundaries, and implementation schedule.",
      "Keep the former Iroquois Gas source area distinct from later Westwood operations and other Scajaquada Creek contamination sources.",
    ],
  },
  "west-genesee-former-mgp": {
    lastReviewed: "July 27, 2026",
    background: [
      "A manufactured-gas plant operated on this approximately 1.65-acre West Genesee Street property from 1848 to 1948. Coal-gas production left wastes containing volatile organic compounds, PAHs, and cyanide in soil and groundwater.",
      "After a long investigation, contaminated material was excavated and disposed of off site. New York issued a Certificate of Completion in 2006, and the property was redeveloped with the HealthNow office building.",
    ],
    timeline: [
      {
        period: "1848–1948",
        event:
          "Manufactured gas was produced at the property for roughly a century.",
      },
      {
        period: "1989–2004",
        event:
          "Environmental investigations defined manufactured-gas wastes in soil and groundwater.",
      },
      {
        period: "2006",
        event:
          "Contaminated soil was excavated and shipped off site under state oversight.",
      },
      {
        period: "November 30, 2006",
        event:
          "New York issued a Certificate of Completion, enabling redevelopment of the property.",
      },
    ],
    documentedImpacts: [
      "Benzene, toluene, ethylbenzene, and xylenes were associated with former gas-production wastes.",
      "PAHs and cyanide were also documented in soil and groundwater.",
      "The compact downtown site required cleanup compatible with a large occupied commercial building.",
    ],
    cleanupAndControls: [
      "Contaminated soil and manufactured-gas waste were excavated and disposed of at authorized off-site facilities.",
      "The completed remedy and redevelopment were documented through New York's cleanup program.",
      "Any remaining engineering or institutional controls must be maintained under the site's completion documents.",
    ],
    presentDay: [
      "The former plant is a completed-cleanup and redevelopment example, now occupied by a major office building. Completion does not erase its industrial history; it means the state-approved remedy was carried out and continuing controls, if any, remain enforceable.",
    ],
    researchNotes: [
      "Use the Certificate of Completion and site-management documents to describe any residual contamination or continuing restrictions precisely.",
      "Do not confuse this West Genesee site with other Buffalo manufactured-gas plants or nearby petroleum releases.",
    ],
  },
  "solvent-chemical-niagara-falls": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Solvent Chemical property on Buffalo Avenue was used for chemical manufacturing, storage, and waste handling. Investigations found benzene, chlorinated benzenes, and related compounds in soil and in both overburden and bedrock groundwater.",
      "New York selected a containment-and-treatment remedy in 1996. Because contamination extends through multiple groundwater zones and nonaqueous-phase liquid has required monitoring, the remedy depends on active collection, treatment, maintenance, and periodic review rather than a one-time excavation.",
    ],
    timeline: [
      {
        period: "Industrial operating era",
        event:
          "Chemical manufacturing and disposal practices created soil and groundwater source areas.",
      },
      {
        period: "December 1996",
        event:
          "DEC issued the Record of Decision selecting a multi-part containment and treatment remedy.",
      },
      {
        period: "Remedial construction",
        event:
          "Groundwater control, collection, pretreatment, cover, and monitoring systems were installed.",
      },
      {
        period: "2021–present",
        event:
          "Periodic reviews continue to evaluate system operation, groundwater conditions, NAPL, and protectiveness.",
      },
    ],
    documentedImpacts: [
      "Benzene and chlorinated benzenes affected site soil and groundwater.",
      "Contamination occurred in shallow overburden and deeper bedrock groundwater zones.",
      "Nonaqueous-phase liquid and dissolved contamination created persistent sources requiring long-term hydraulic control.",
    ],
    cleanupAndControls: [
      "Overburden and bedrock groundwater are collected or controlled to limit migration.",
      "Extracted water is pretreated before discharge, while the cover limits exposure and infiltration.",
      "Groundwater, NAPL, treatment performance, and engineering controls are inspected through long-term operation, maintenance, and periodic review.",
    ],
    presentDay: [
      "Solvent Chemical remains an active long-term remedy. The principal public-health protection comes from containing contaminated groundwater, treating collected water, maintaining the cover and systems, and checking that the remedy continues to perform as designed.",
    ],
    researchNotes: [
      "Report the latest periodic-review conclusions and system-performance data rather than describing the 1996 remedy as a finished excavation.",
      "Separate overburden, bedrock, dissolved-phase, and NAPL findings when more detailed plume mapping becomes available.",
    ],
  },
  "ashland-2-fusrap-site": {
    lastReviewed: "July 27, 2026",
    background: [
      "Ashland 2 was an industrial landfill used by Ashland Oil for general refuse and industrial and chemical byproducts. In 1974, soil excavated during construction at Ashland 1—including residues derived from Manhattan Project-era uranium processing—was moved to Ashland 2 and the neighboring Seaway property.",
      "The federal FUSRAP remedy removed more than 52,000 tons of contaminated material for off-site disposal. Cleanup was completed in 1999, documented in a 2006 completion report, and transferred to the Department of Energy for long-term stewardship in 2008.",
    ],
    timeline: [
      {
        period: "Industrial landfill era",
        event:
          "Ashland Oil used the property for general refuse and industrial and chemical byproducts.",
      },
      {
        period: "1974",
        event:
          "Radioactively contaminated soil excavated from Ashland 1 was placed at Ashland 2 and Seaway.",
      },
      {
        period: "1998–1999",
        event:
          "A federal cleanup decision was issued and more than 52,000 tons of material were removed off site.",
      },
      {
        period: "2006–2008",
        event:
          "USACE completed the closeout report and transferred long-term stewardship to DOE.",
      },
    ],
    documentedImpacts: [
      "The imported soil contained uranium-series radioactive residues associated with former Linde processing material.",
      "The property also had a separate history of refuse and industrial and chemical waste disposal.",
      "Moving Ashland 1 soil in 1974 distributed related material across three distinct sites that require separate records.",
    ],
    cleanupAndControls: [
      "More than 52,000 tons of radiologically contaminated material were excavated and sent to an authorized off-site disposal facility.",
      "Verification surveys documented compliance with the federal cleanup decision.",
      "DOE long-term stewardship preserves the cleanup record and any continuing land-use information after USACE closeout.",
    ],
    presentDay: [
      "The FUSRAP cleanup is complete and the site is in federal long-term stewardship. It should be labeled as a remediated radiological site, while acknowledging the property's separate industrial-landfill history and avoiding conflation with Ashland 1 or Seaway.",
    ],
    researchNotes: [
      "Use DOE stewardship records for any current restrictions, inspections, or land transfers.",
      "Maintain the chain of custody from Linde to Ashland 1 to Ashland 2/Seaway without claiming the landfill itself performed Manhattan Project production.",
    ],
  },
  "tonawanda-landfill-fusrap-vicinity": {
    lastReviewed: "July 27, 2026",
    background: [
      "In 1992, the Department of Energy designated portions of the Tonawanda Landfill and adjacent mudflats as a FUSRAP vicinity property because radioactive material resembled material found at other Tonawanda FUSRAP sites. Federal records emphasize that no documentation ties the property itself to Manhattan Engineer District or Atomic Energy Commission operations.",
      "USACE separated the mudflats and landfill into different decisions. The mudflats required no remedial action; the landfill remedy addressed accessible contamination while allowing deeper residual material to remain under a commercial-industrial cleanup standard.",
    ],
    timeline: [
      {
        period: "1992",
        event:
          "DOE designated the landfill and mudflats as a FUSRAP vicinity property.",
      },
      {
        period: "Federal investigation",
        event:
          "USACE evaluated the landfill and mudflats as separate operable units and found no documentary MED/AEC link.",
      },
      {
        period: "2017",
        event:
          "The landfill Record of Decision selected a commercial-industrial remedy; the mudflats required no action.",
      },
      {
        period: "2024 onward",
        event:
          "Five-year review and long-term stewardship evaluate the remedy where residual radioactivity remains at depth.",
      },
    ],
    documentedImpacts: [
      "Radium, uranium, and thorium contamination was identified in landfill materials.",
      "Residual radioactive material remains below approximately five feet in portions of the landfill.",
      "The evidence supports a FUSRAP vicinity-property designation but not a claim that MED or AEC production occurred here.",
    ],
    cleanupAndControls: [
      "The landfill response removed or addressed accessible material to meet the selected commercial-industrial cleanup standard.",
      "The remedy is considered protective for recreational use but does not establish unrestricted residential suitability.",
      "Periodic inspections and five-year reviews are required to confirm long-term performance for up to 1,000 years before DOE stewardship.",
    ],
    presentDay: [
      "The landfill response is complete, with deeper residual contamination managed through land-use assumptions and long-term review. The adjacent mudflats received a no-action decision and should not be mapped as though they share the landfill's residual-contamination finding.",
    ],
    researchNotes: [
      "Add the first five-year-review findings when the final federal report is available.",
      "Retain the official caveat that no record connects this property to Manhattan Project or Atomic Energy Commission activity.",
    ],
  },
  "niagara-falls-storage-site": {
    lastReviewed: "July 27, 2026",
    background: [
      "The 191-acre Niagara Falls Storage Site occupies part of the former Lake Ontario Ordnance Works. Beginning in 1944, the Manhattan Engineer District used it to store radioactive residues and wastes from uranium-ore processing; additional material arrived through 1952.",
      "DOE consolidated wastes into the approximately 10-acre Interim Waste Containment Structure between 1982 and 1986. USACE now manages three operable units—the containment structure, balance of plant, and groundwater—and selected complete excavation, processing, and out-of-state disposal of the containment structure's contents in 2019.",
    ],
    timeline: [
      {
        period: "1944–1952",
        event:
          "The Manhattan Engineer District and successor program stored uranium-processing residues and radioactive wastes at the former ordnance works.",
      },
      {
        period: "1982–1986",
        event:
          "DOE consolidated waste, contaminated rubble, debris, and soil in an engineered earthen containment structure.",
      },
      {
        period: "2019",
        event:
          "USACE signed the decision to remove the entire containment structure and dispose of its contents out of state.",
      },
      {
        period: "2021–2026",
        event:
          "Detailed design advanced while USACE continued security, maintenance, environmental surveillance, and planning for the remaining operable units.",
      },
    ],
    documentedImpacts: [
      "The containment structure holds radioactive residues, contaminated demolition debris, and soil from the main site and vicinity properties.",
      "Radiological contamination also affects balance-of-plant media and groundwater addressed through separate federal decisions.",
      "The stored materials are directly connected to Manhattan Project uranium-ore processing and subsequent federal handling.",
    ],
    cleanupAndControls: [
      "USACE maintains site security, operations, the containment structure, and environmental surveillance while removal is designed.",
      "The selected source remedy calls for complete excavation, processing, and permitted out-of-state disposal of the containment structure contents.",
      "After removal, underlying soil will be investigated and remediated as necessary under the balance-of-plant and groundwater cleanup goals.",
    ],
    presentDay: [
      "NFSS is an active federal remediation site. USACE reports that the engineered structure is performing as designed and remains protective, but the final remedy is removal—not permanent retention—and detailed implementation remains ahead.",
    ],
    researchNotes: [
      "Track final design, construction awards, transportation planning, excavation quantities, and disposal destinations.",
      "Keep the federal site boundary and its three operable units distinct from surrounding vicinity properties.",
    ],
  },
  "niagara-falls-storage-site-vicinity-properties": {
    lastReviewed: "July 27, 2026",
    background: [
      "Niagara Falls Storage Site vicinity properties are parcels outside the principal federal site that were investigated because Manhattan Engineer District or Atomic Energy Commission material may have been moved, deposited, or dispersed there. They are not one continuous contamination zone and must be evaluated parcel by parcel.",
      "USACE identifies several open parcels north of NFSS on private property, including VP-E, E-Prime, H-Prime, and G, plus the town-owned VP-X. Access, historical use, sampling results, and remedy status differ across these locations.",
    ],
    timeline: [
      {
        period: "1940s–1950s",
        event:
          "Federal storage and handling at the former ordnance works created pathways by which affected material reached some neighboring parcels.",
      },
      {
        period: "DOE and USACE investigations",
        event:
          "Individual vicinity properties were surveyed, remediated, closed, or retained for further investigation.",
      },
      {
        period: "September 2025",
        event:
          "USACE released a remedial-investigation report and proposed no remedial action for the four-acre VP-H-Prime parcel.",
      },
      {
        period: "Current program",
        event:
          "USACE remains responsible for investigation and response at open vicinity properties when access and funding allow.",
      },
    ],
    documentedImpacts: [
      "Some vicinity properties were affected by material associated with MED/AEC operations at the Niagara Falls Storage Site.",
      "Other investigated parcels may meet cleanup criteria or receive a no-action determination; the designation alone does not prove current contamination.",
      "Private ownership and limited access have delayed investigation of certain parcels.",
    ],
    cleanupAndControls: [
      "Each parcel receives its own investigation, decision, verification, and closeout rather than a single area-wide remedy.",
      "Completed removals and no-action determinations must be tied to the exact vicinity-property identifier and boundary.",
      "Open parcels remain subject to federal investigation, access coordination, and any remedy selected from their sampling results.",
    ],
    presentDay: [
      "The vicinity-property program remains partly open. The map point is an orientation marker, not a claim that every surrounding parcel is contaminated; future polygon mapping should show each federal parcel and its individual status.",
    ],
    researchNotes: [
      "Build a parcel-level inventory of every VP identifier, ownership, acreage, decision, cleanup date, and verification report.",
      "Update VP-H-Prime when USACE issues its final decision following the 2025 proposed no-action plan.",
    ],
  },
  "electro-metallurgical-company": {
    lastReviewed: "July 27, 2026",
    background: [
      "Electro Metallurgical Company, a Union Carbide subsidiary, operated the metal-production end of the Western New York uranium chain. Linde in Tonawanda converted uranium concentrates to uranium tetrafluoride, or green salt, which was shipped to Electro Metallurgical in Niagara Falls and reduced to uranium metal.",
      "Beginning in April 1943, the purpose-built facility used the magnesium-reduction process and produced 1,538 tons of uranium metal—more than one-third of the Manhattan Project's requirement and more than any other single producer described in DOE's history.",
    ],
    timeline: [
      {
        period: "Early 1943",
        event:
          "The Manhattan Engineer District arranged a full-scale uranium-metal production line through Union Carbide and its subsidiaries.",
      },
      {
        period: "April 1943",
        event:
          "Production began in a dedicated one-story structure at the Niagara Falls plant.",
      },
      {
        period: "Manhattan Project",
        event:
          "Linde green salt was reduced with magnesium, melted, and cast into uranium-metal ingots.",
      },
      {
        period: "Program total",
        event:
          "The operation produced 1,538 tons of uranium metal, over one-third of project needs.",
      },
    ],
    documentedImpacts: [
      "The facility handled large quantities of uranium tetrafluoride and uranium metal in a wartime industrial process.",
      "Magnesium reduction generated uranium-metal biscuits and magnesium-fluoride slag requiring industrial handling.",
      "The historical source establishes production significance but does not, by itself, define present contamination boundaries or current exposure.",
    ],
    cleanupAndControls: [
      "Historical identification should be followed by review of federal eligibility, radiological surveys, demolition records, and any state cleanup files for the exact parcel.",
      "Any surviving subsurface or building impacts require conclusions based on modern sampling rather than production history alone.",
      "Public mapping should separate the documented production role from the regulatory status of the larger industrial property.",
    ],
    presentDay: [
      "This profile documents a major Manhattan Project production location. The reviewed DOE history firmly establishes its role and output, but the current parcel-level cleanup and residual-contamination record requires additional primary-document research before stronger present-day claims are made.",
    ],
    researchNotes: [
      "Locate the exact former production-building footprint and federal considered-site or elimination records.",
      "Add verified postwar decommissioning, survey, waste-disposition, and present ownership information when authoritative records are obtained.",
    ],
  },
  "bliss-laughlin-steel": {
    lastReviewed: "July 27, 2026",
    background: [
      "At 110 Hopkins Street, Bliss & Laughlin Steel machined and straightened uranium rods in September and October 1952 under work associated with National Lead of Ohio, an Atomic Energy Commission prime contractor. The work occurred in a 3,230-square-foot Special Finishing Area within a much larger steel building.",
      "AEC records indicate that rod turnings were returned through the Lake Ontario Ordnance Works for shipment to Fernald. Federal surveys later found residual uranium in the finishing area, leading to a short FUSRAP decontamination completed in 1999.",
    ],
    timeline: [
      {
        period: "September–October 1952",
        event:
          "Workers machined and straightened uranium rods, apparently during Saturday shifts.",
      },
      {
        period: "November 1952",
        event:
          "Records document 53 drums of uranium turnings shipped from the ordnance works to Fernald.",
      },
      {
        period: "1992–1998",
        event:
          "DOE found the site eligible for FUSRAP, characterization followed, and USACE selected building decontamination.",
      },
      {
        period: "December 1998–March 1999",
        event:
          "USACE decontaminated the affected building area and documented closure for unrestricted use.",
      },
    ],
    documentedImpacts: [
      "Natural uranium contamination was found primarily in the former Special Finishing Area.",
      "Machining generated uranium turnings that were collected and shipped back into the federal materials system.",
      "The affected work area represented only a small portion of the full industrial building and grounds.",
    ],
    cleanupAndControls: [
      "USACE removed or decontaminated affected building materials to site-specific radiological standards.",
      "Post-remediation surveys supported unrestricted-use closure under the selected federal criteria.",
      "DOE Legacy Management preserves records and provides long-term stewardship for the completed FUSRAP site.",
    ],
    presentDay: [
      "The Buffalo site is a completed FUSRAP cleanup in DOE long-term stewardship. Its importance lies both in the documented 1952 uranium work and in the verified federal decontamination; it should not be portrayed as an uncontrolled active radiological site.",
    ],
    researchNotes: [
      "Use DOE's current certification summary and stewardship plan for future status updates.",
      "Preserve the distinction between the entire steel property and the much smaller Special Finishing Area where uranium work occurred.",
    ],
  },
  "guterl-specialty-steel": {
    lastReviewed: "July 27, 2026",
    background: [
      "The former Simonds Saw and Steel facility in Lockport performed foundry and rolling-mill work for the Atomic Energy Commission from 1948 through 1956. USACE reports that the plant processed more than 25 million pounds of uranium metal and more than 30,000 pounds of thorium metal.",
      "Later owners included Wallace and Murray and Guterl Specialty Steel. Federal investigation identified thorium-232 and uranium in buildings and soil and uranium in groundwater, leading USACE to select a comprehensive dismantlement, excavation, and groundwater-treatment remedy.",
    ],
    timeline: [
      {
        period: "1948–1956",
        event:
          "Simonds conducted AEC-related foundry and rolling operations using uranium and thorium metals.",
      },
      {
        period: "Post-AEC ownership",
        event:
          "The complex passed through later steel-company owners while the former federal work areas remained distinct.",
      },
      {
        period: "2021",
        event:
          "USACE presented the proposed site-wide cleanup plan for public review.",
      },
      {
        period: "Current federal remedy",
        event:
          "The signed Record of Decision calls for building dismantlement, complete affected-soil removal, and active groundwater-plume recovery and treatment.",
      },
    ],
    documentedImpacts: [
      "Thorium-232 and uranium contamination is present in former process buildings and soil.",
      "Uranium contamination affects groundwater beneath the site.",
      "The scale of AEC processing—millions of pounds of uranium—makes this one of the region's most substantial early atomic-energy production sites.",
    ],
    cleanupAndControls: [
      "AEC-related buildings are to be dismantled and disposed of at an appropriately permitted off-site facility.",
      "Affected soil will be completely removed to the groundwater-protection cleanup goal and disposed of off site.",
      "Extraction wells and an on-site rubblized trench will recover the uranium plume for ex situ treatment, with monitoring of plume reduction.",
    ],
    presentDay: [
      "Guterl is an active FUSRAP remediation project with a selected final remedy. The federal decision finds that the remedy will be protective when implemented; that statement should not be confused with cleanup already being complete.",
    ],
    researchNotes: [
      "Track design, contract awards, demolition and soil-removal quantities, groundwater treatment start-up, and completion milestones.",
      "Map the federally affected former AEC areas separately from portions of the larger industrial complex acquired by later owners.",
    ],
  },
  "katherine-street-peninsula": {
    lastReviewed: "July 27, 2026",
    background: [
      "Katherine Street Peninsula is a filled industrial landform in the Buffalo River corridor. Historical mapping and planning records show compacted fill and nearby waste-oil handling, while the river edge was affected by the broader legacy of contaminated Buffalo River sediment.",
      "EPA, USACE, and local partners combined sediment remediation with shoreline and habitat restoration here. The reviewed sources do not establish that the peninsula itself was a municipal landfill, so the atlas avoids repeating that unverified description.",
    ],
    timeline: [
      { period: "Industrial era", event: "Filling and industrial waterfront use reshaped the peninsula and its shoreline." },
      { period: "Buffalo River cleanup", event: "Contaminated navigation-channel and river sediment was addressed through the Area of Concern program." },
      { period: "Restoration phase", event: "Partners rebuilt shoreline and shallow-water habitat at Katherine Street." },
      { period: "2024", event: "USACE announced completion of the Katherine Street habitat-restoration work." },
    ],
    documentedImpacts: [
      "Industrial fill and former waterfront uses altered the natural shoreline and subsurface.",
      "Contaminated Buffalo River sediment affected aquatic habitat along the peninsula.",
      "Available primary records support a waste-oil history nearby but not a claim that the landform was a municipal dump.",
    ],
    cleanupAndControls: [
      "River sediment remediation reduced direct contaminant sources in the Area of Concern.",
      "Shoreline grading, native vegetation, and aquatic habitat features restored ecological function.",
      "Future soil disturbance should be guided by parcel-specific environmental investigation of historic fill.",
    ],
    presentDay: [
      "The peninsula is best understood as a restored industrial shoreline within a remediated river corridor. Its exact upland fill history remains less certain than the documented sediment and habitat work.",
    ],
    researchNotes: [
      "Locate parcel-level boring logs and waste-oil facility records before assigning a stronger upland contamination status.",
      "Keep completed river restoration distinct from any future upland redevelopment cleanup.",
    ],
  },
  "exxonmobil-former-buffalo-terminal": {
    lastReviewed: "July 27, 2026",
    background: [
      "The former ExxonMobil Buffalo Terminal at Elk and Babcock streets was a large refinery, lubricant plant, storage, and distribution property on the Buffalo River. Decades of petroleum handling left impacted soil, groundwater, tanks, piping, and other industrial infrastructure.",
      "New York divided the extensive property into multiple brownfield operable units so investigation and cleanup could proceed in manageable phases. Each unit has its own agreement, remedy, and completion status.",
    ],
    timeline: [
      { period: "Petroleum-industrial era", event: "Refining, lubricant production, bulk storage, and terminal operations occupied the riverfront." },
      { period: "2001", event: "A broad Babcock Street properties investigation documented environmental conditions across the former complex." },
      { period: "2010s", event: "Separate brownfield operable units advanced through investigation, proposed remedies, and cleanup agreements." },
      { period: "Current redevelopment", event: "Cleanup and reuse continue by parcel under state oversight." },
    ],
    documentedImpacts: [
      "Petroleum compounds affected soil and groundwater around former tanks, process areas, and transfer infrastructure.",
      "Large-scale industrial fill and buried infrastructure complicate characterization and excavation.",
      "Riverfront location creates potential groundwater and stormwater pathways toward the Buffalo River.",
    ],
    cleanupAndControls: [
      "Separate operable units use excavation, petroleum recovery, tank and piping removal, covers, and groundwater management as required.",
      "Construction health-and-safety and soil-management plans control exposure during redevelopment.",
      "Institutional controls and site-management plans preserve restrictions where contamination remains.",
    ],
    presentDay: [
      "This is a multi-parcel cleanup and redevelopment district, not a single finished remedy. Status should always be reported by operable unit, because completed work on one section does not establish conditions across the entire former terminal.",
    ],
    researchNotes: [
      "Build an operable-unit table with acreage, selected remedy, completion certificate, residual contamination, and current use.",
      "Add river and groundwater monitoring trends where state reports provide comparable data.",
    ],
  },
  "polymer-applications": {
    lastReviewed: "July 27, 2026",
    background: [
      "Polymer Applications manufactured phenolic resins and rubber products at 3445 River Road. A major 1988 fire left an abandoned complex containing drums, tanks, laboratory chemicals, damaged process equipment, and contaminated environmental media.",
      "EPA removal work addressed immediate hazards, while New York's hazardous-waste program managed longer-term investigation and remediation. The site's industrial chemicals and fire history make careful separation of emergency removal and final remedy important.",
    ],
    timeline: [
      { period: "Manufacturing era", event: "The plant produced phenolic-resin and rubber products using varied industrial chemicals." },
      { period: "1988", event: "A fire damaged the facility and left chemicals, drums, tanks, and debris requiring emergency response." },
      { period: "Federal removal", event: "EPA stabilized and removed immediate hazardous materials from the abandoned plant." },
      { period: "State remediation", event: "DEC continued site investigation, cleanup, and long-term management." },
    ],
    documentedImpacts: [
      "Fire-damaged drums, tanks, process chemicals, and laboratory materials created direct hazards.",
      "Industrial contaminants affected building materials, soil, and groundwater.",
      "The River Road setting required attention to migration toward nearby surface water and neighboring industrial properties.",
    ],
    cleanupAndControls: [
      "Emergency removal stabilized containers and removed accessible hazardous chemicals and debris.",
      "State-directed remediation addressed contaminated media beyond the immediate fire response.",
      "Monitoring, land-use controls, and site-management requirements apply where residual impacts remain.",
    ],
    presentDay: [
      "Polymer Applications is a documented former chemical-manufacturing cleanup site. Its current status should be drawn from the latest DEC periodic review, not inferred solely from the visible condition of the property.",
    ],
    researchNotes: [
      "Add exact removal quantities and the latest protectiveness determination from DEC and EPA records.",
      "Distinguish contamination attributable to Polymer Applications from the wider southwestern Tonawanda groundwater study.",
    ],
  },
  "3m-o-cel-o-tonawanda": {
    lastReviewed: "July 27, 2026",
    background: [
      "The O-Cel-O plant manufactured cellulose sponges on River Road. Carbon disulfide used in production and releases associated with handling and drainage areas became the principal focus of New York's investigation and remedy.",
      "Interim measures addressed source and drainage features before the final state decision. The hazardous-waste listing is closed, but closure includes continuing engineering and institutional controls rather than erasing the site's industrial record.",
    ],
    timeline: [
      { period: "Manufacturing era", event: "Sponge production used carbon disulfide and other process materials." },
      { period: "Interim response", event: "Controls were installed at chemical-handling and drainage areas to reduce releases." },
      { period: "1999", event: "DEC issued the site Record of Decision." },
      { period: "2021 review", event: "The periodic review evaluated inspections, monitoring, and continuing controls." },
    ],
    documentedImpacts: [
      "Carbon disulfide was the signature contaminant associated with former plant operations.",
      "Drainage and handling areas created pathways to soil and groundwater.",
      "Residual conditions require the property to remain within an inspection and monitoring program.",
    ],
    cleanupAndControls: [
      "Interim source-control work addressed chemical storage, handling, and drainage features.",
      "The final remedy incorporated site controls and monitoring appropriate to remaining impacts.",
      "Periodic reviews verify continued compliance with engineering and institutional controls.",
    ],
    presentDay: [
      "The state site is closed in the regulatory sense but remains managed. The correct public message is that the remedy is in place and monitored, not that no contamination ever existed or that controls are unnecessary.",
    ],
    researchNotes: [
      "Update the profile from the newest periodic review when available.",
      "Document the exact current land-use restriction and monitoring locations before adding parcel polygons.",
    ],
  },
  "dupont-yerkes": {
    lastReviewed: "July 27, 2026",
    background: [
      "DuPont's Yerkes plant at 3115 River Road is a long-running chemical and polymer-products facility. It appears in New York's southwestern Tonawanda hydrogeologic study and operates under wastewater, air-emissions, and hazardous-material regulatory programs.",
      "Unlike an abandoned dump, Yerkes is an active regulated industrial site. Inclusion in the atlas reflects documented industrial releases and environmental controls; it does not mean every permitted discharge represents an uncontrolled exposure.",
    ],
    timeline: [
      { period: "Industrial development", event: "The River Road property developed into a chemical and polymer-products manufacturing complex." },
      { period: "Regional investigation", event: "DEC included the property in its southwestern Tonawanda groundwater and geochemical study." },
      { period: "Ongoing regulation", event: "Air and wastewater permits set treatment, monitoring, and reporting requirements." },
      { period: "2025", event: "DEC reviewed a wastewater permit application for continuing plant operations." },
    ],
    documentedImpacts: [
      "Historical chemical operations form part of the documented industrial groundwater setting along River Road.",
      "Wastewater and air emissions include regulated pollutants requiring permit limits and monitoring.",
      "Regional groundwater findings must be apportioned carefully among several adjacent industrial properties.",
    ],
    cleanupAndControls: [
      "Wastewater treatment and discharge permits establish enforceable operating and sampling conditions.",
      "Hazardous-air-pollutant controls and emissions reporting govern active process sources.",
      "Groundwater investigation and any corrective measures should be attributed to exact facility units and official decisions.",
    ],
    presentDay: [
      "Yerkes remains a regulated operating facility. The atlas should show the environmental record and controls without implying that a valid permit is proof of either zero impact or present danger.",
    ],
    researchNotes: [
      "Track final 2025 permit terms, discharge monitoring, violations, and corrective-action documents.",
      "Add PFAS or other emerging-contaminant findings only when tied to verified sampling at this facility.",
    ],
  },
  "fmc-peroxychem-evonik-tonawanda": {
    lastReviewed: "July 27, 2026",
    background: [
      "The former FMC Tonawanda plant near River Road and Sawyer Avenue has operated under several corporate owners in chemical manufacturing. DEC evaluated it within the southwestern Tonawanda groundwater study, while EPA reporting documents regulated chemical releases from the industrial corridor.",
      "The property's former state hazardous-waste listing was delisted, but later operations continued under environmental permits. Delisting a past waste site and regulating a current plant are separate actions with different meanings.",
    ],
    timeline: [
      { period: "FMC era", event: "Chemical manufacturing and waste-management activities developed at the property." },
      { period: "State site review", event: "DEC investigated the former hazardous-waste listing and later delisted it." },
      { period: "Regional groundwater study", event: "The facility was evaluated alongside other southwestern Tonawanda industrial properties." },
      { period: "Later ownership", event: "Chemical operations continued under PeroxyChem, Evonik, or related entities and active permits." },
    ],
    documentedImpacts: [
      "Historical industrial activities warranted state waste-site and regional groundwater evaluation.",
      "Facility chemical releases and waste streams are documented through regulatory reporting.",
      "Shared groundwater conditions along River Road require source-specific evidence before attributing a plume.",
    ],
    cleanupAndControls: [
      "State delisting records define what historical conditions were evaluated and why further listed-site action was not required.",
      "Current operations remain subject to air, wastewater, hazardous-waste, and chemical-release requirements.",
      "Any new release or emerging-contaminant finding should be assessed through current permit and corrective-action records.",
    ],
    presentDay: [
      "This is a regulated industrial property with a historical cleanup record, not an open Superfund site. Both facts belong on the map, with the delisted state site kept distinct from continuing permitted operations.",
    ],
    researchNotes: [
      "Add the formal delisting rationale and date from DEC's registry record.",
      "Verify current operator, products, permits, and recent compliance data before each major update.",
    ],
  },
  "gastown-former-mgp": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Gastown property at 126 East Niagara Street in the City of Tonawanda is a former manufactured-gas plant. Coal-tar nonaqueous-phase liquid and contaminated groundwater migrated through the subsurface and were detected in nearby building sump systems.",
      "The remedy uses recovery and treatment rather than relying only on excavation. That operating-system history is central to understanding why the site remains managed after the former gasworks disappeared.",
    ],
    timeline: [
      { period: "Gas-manufacturing era", event: "The plant produced manufactured gas and generated persistent coal-tar waste." },
      { period: "Investigation", event: "Coal-tar NAPL and affected groundwater were traced on site and toward nearby structures." },
      { period: "System installation", event: "Recovery and treatment equipment was installed to intercept contamination." },
      { period: "2002 onward", event: "Semiannual and later monitoring reports documented system operation and site conditions." },
    ],
    documentedImpacts: [
      "Coal-tar NAPL remains a persistent subsurface source.",
      "Dissolved manufactured-gas compounds affected groundwater.",
      "Contamination reached or threatened nearby basement sump pathways, creating a building-specific concern.",
    ],
    cleanupAndControls: [
      "NAPL and affected groundwater are recovered to limit migration.",
      "Collected liquids are treated or disposed of through approved systems.",
      "Monitoring wells and nearby sump observations evaluate performance and potential off-site movement.",
    ],
    presentDay: [
      "Gastown is a long-term operating remedy. Public interpretation should focus on the recovery system, current monitoring, and protectiveness rather than treating the former plant footprint as the only relevant boundary.",
    ],
    researchNotes: [
      "Replace early system reports with the newest operation and periodic-review data.",
      "Map confirmed off-site monitoring and sump locations only at a scale that protects residential privacy.",
    ],
  },
  "lockport-transit-street-former-mgp": {
    lastReviewed: "July 27, 2026",
    background: [
      "A manufactured-gas plant operated on Transit Street in Lockport from 1851 to 1927. Coal tar and related nonaqueous-phase liquid persisted after the plant closed, affecting soil and groundwater in a mixed urban setting.",
      "New York's remedy combined removal of accessible source material with containment and long-term management where complete excavation was impracticable.",
    ],
    timeline: [
      { period: "1851–1927", event: "The Transit Street plant manufactured gas for the Lockport area." },
      { period: "Investigation era", event: "Sampling identified coal tar, NAPL, and associated soil and groundwater contamination." },
      { period: "Remedial design", event: "DEC and the responsible utility developed excavation and containment work." },
      { period: "Long-term phase", event: "Monitoring and site management continued after construction." },
    ],
    documentedImpacts: [
      "Coal-tar NAPL occurred in the subsurface.",
      "PAHs, benzene, and other manufactured-gas constituents affected soil or groundwater.",
      "Urban utilities, buildings, and property boundaries complicated source removal.",
    ],
    cleanupAndControls: [
      "Accessible coal-tar waste and contaminated soil were excavated where feasible.",
      "Containment and cover components isolate residual material.",
      "Groundwater and engineering controls remain subject to long-term monitoring and maintenance.",
    ],
    presentDay: [
      "The former gasworks is a remediated but managed site. The remedy reduced exposure and migration while leaving some residual contamination under controls.",
    ],
    researchNotes: [
      "Add construction quantities and the latest periodic-review conclusion from the full DEC document set.",
      "Distinguish this Transit Street gasworks from the unrelated Transit Road landfill discussed elsewhere in local history.",
    ],
  },
  "mineral-springs-road-former-mgp": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Mineral Springs Road manufactured-gas plant was built in the 1920s and operated into the 1960s. Investigations found purifier residuals and hydrocarbon compounds associated with gas production and handling.",
      "The property proceeded through New York's voluntary cleanup program, where remedial work addressed source areas and enabled controlled reuse.",
    ],
    timeline: [
      { period: "1920s", event: "The manufactured-gas facility was constructed." },
      { period: "1920s–1960s", event: "Gas production and related industrial operations continued at the property." },
      { period: "Voluntary cleanup", event: "Investigation identified purifier waste and hydrocarbon-affected media." },
      { period: "Remedy and closure", event: "State-approved cleanup and controls supported program completion." },
    ],
    documentedImpacts: [
      "Purifier residuals contained contaminants characteristic of manufactured-gas treatment.",
      "Hydrocarbon compounds affected soil and subsurface media.",
      "Past structures and fill influenced the distribution of residual contamination.",
    ],
    cleanupAndControls: [
      "Contaminated source materials were removed or isolated under the voluntary cleanup remedy.",
      "A cover and soil-management requirements prevent routine contact with remaining fill where applicable.",
      "Institutional controls govern future excavation and land use.",
    ],
    presentDay: [
      "Mineral Springs Road is a completed state cleanup with continuing obligations where residual material remains. Its classification should follow the official completion and site-management documents.",
    ],
    researchNotes: [
      "Add exact completion dates, removal quantities, and current restrictions from DEC's final engineering report.",
      "Confirm the historic plant footprint before replacing the point with a parcel polygon.",
    ],
  },
  "buffalo-gas-light-tonawanda-street": {
    lastReviewed: "July 27, 2026",
    background: [
      "The 31 Tonawanda Street property held a Buffalo Gas Light gasometer near Scajaquada Creek. A gas holder stored manufactured gas but did not necessarily perform the full production process on the same parcel.",
      "DEC investigation evaluates the gasometer property alongside coal-tar impacts associated with the adjoining former Westwood/Iroquois manufactured-gas area. This relationship requires careful source attribution.",
    ],
    timeline: [
      { period: "Manufactured-gas era", event: "A large gas holder operated at 31 Tonawanda Street near the creek." },
      { period: "Later reuse", event: "The structure disappeared and the property entered later urban and industrial use." },
      { period: "Site characterization", event: "DEC investigated subsurface conditions and the relationship to the adjoining former MGP." },
      { period: "Current assessment", event: "Source boundaries and cleanup needs remain part of the broader area investigation." },
    ],
    documentedImpacts: [
      "Coal-tar-related compounds are a documented concern in the adjoining manufactured-gas area.",
      "Historic gas-holder foundations and fill can create preferential accumulation or migration pathways.",
      "Available records do not justify attributing every nearby coal-tar finding to operations on the gasometer parcel itself.",
    ],
    cleanupAndControls: [
      "Characterization separates parcel conditions from migration originating at adjoining properties.",
      "Safe soil and groundwater management is required during intrusive work.",
      "A final remedy should be described only after DEC issues parcel-specific decision documents.",
    ],
    presentDay: [
      "This remains a research and investigation profile. It is included because the gas-holder history and adjoining MGP contamination are documented, while the atlas explicitly preserves uncertainty about the source of impacts on the parcel.",
    ],
    researchNotes: [
      "Locate historic Sanborn maps, ownership records, boring logs, and DEC's final source interpretation.",
      "Keep the point linked to—but not merged with—the Iroquois Gas / Westwood record.",
    ],
  },
  "pierce-arrow-manufacturing-complex": {
    lastReviewed: "July 27, 2026",
    background: [
      "Pierce-Arrow's former automobile works occupied a large complex around Great Arrow and Elmwood avenues. Automotive manufacturing, fuel storage, metalworking, painting, electrical equipment, and later hazardous-material storage left different environmental conditions across separately owned parcels.",
      "State brownfield records document petroleum impacts, industrial fill, metals, PCBs, solvents, and underground tanks. A 2024 investigation addendum for 157 Great Arrow also added PFAS sampling, but results must be interpreted parcel by parcel.",
    ],
    timeline: [
      { period: "Automobile era", event: "Pierce-Arrow manufactured luxury vehicles across the Great Arrow complex." },
      { period: "Later industrial reuse", event: "Subdivided buildings supported varied manufacturing, storage, and commercial uses." },
      { period: "2007 onward", event: "Separate parcels entered New York's Brownfield Cleanup Program." },
      { period: "2024", event: "The 157 Great Arrow investigation plan was expanded to include PFAS sampling." },
    ],
    documentedImpacts: [
      "Petroleum, tanks, and industrial fill affected multiple former manufacturing areas.",
      "Metals, PCBs, and solvents were identified in state brownfield records.",
      "PFAS investigation at one parcel does not establish complex-wide PFAS contamination.",
    ],
    cleanupAndControls: [
      "Each brownfield parcel receives its own investigation, remedy, construction controls, and completion decision.",
      "Tank removal, soil excavation, covers, vapor evaluation, and groundwater management are used where required.",
      "Environmental easements and site-management plans preserve restrictions on residual contamination.",
    ],
    presentDay: [
      "The former complex is a mosaic of reused, remediated, and still-investigated parcels. It should never be presented as a single cleanup with one status.",
    ],
    researchNotes: [
      "Create a parcel matrix covering every brownfield site number, address, remedy, and completion certificate.",
      "Add PFAS findings only after the laboratory results and agency interpretation are public.",
    ],
  },
  "union-road-gardenville-yard": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Union Road site—remembered locally as the Losson Road tar pit—was part of the former Gardenville railroad classification and maintenance yard. A rail spur extended into an eastern wetland depression that was used for railyard-waste disposal.",
      "Erie County investigators documented an approximately 80-by-140-foot area of tar-like waste and 56 abandoned drums in 1982; a later investigation reported 81 drums. The selected remedy did not excavate every waste deposit. It stabilized the tar-pit material in place, moved other impacted material into a containment cell, installed a bentonite slurry wall and cap, and established long-term groundwater control and monitoring.",
    ],
    timeline: [
      { period: "Railyard era", event: "Rail classification and maintenance generated wastes disposed along an eastern spur." },
      { period: "1982–1986", event: "Investigators documented tar-like waste and dozens of abandoned drums; the recorded count increased from 56 to 81 as investigation continued." },
      { period: "1995–1997", event: "Tar-pit material was stabilized and impacted material was consolidated within a slurry-walled containment cell beneath an engineered cap." },
      { period: "2024 review", event: "The latest cited periodic review evaluated monitoring and remedy maintenance." },
    ],
    documentedImpacts: [
      "Tar-like material, abandoned drums, and indications of buried metal objects documented direct waste disposal.",
      "Disposal in a wetland depression created soil, groundwater, and ecological pathways.",
      "Residual waste remains on site beneath the remedy.",
    ],
    cleanupAndControls: [
      "Impacted material was stabilized in place or consolidated within the containment cell. Available public records do not establish that every drum or drum fragment was removed from the property.",
      "An engineered cap prevents routine contact and limits infiltration.",
      "Groundwater monitoring, inspections, maintenance, and institutional controls protect the remedy.",
    ],
    presentDay: [
      "The disposal area is capped and managed rather than restored to unrestricted conditions. Long-term reviews are the key evidence for whether containment continues to perform.",
    ],
    researchNotes: [
      "Locate the final construction report or drum-disposition log that could establish how the individually documented drums were handled.",
      "Add groundwater trend conclusions and any cap repairs from post-2024 reviews.",
      "Map the disposal spur and capped footprint separately from the larger former yard.",
    ],
  },
  "hooker-hyde-park-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "Hooker Chemical disposed of roughly 80,000 tons of chemical waste at Hyde Park, including material associated with dioxin contamination. Waste and contaminated perimeter areas affected soil and groundwater beyond the original landfill.",
      "The federal-state remedy caps the source and perimeter, hydraulically contains contaminated groundwater, and treats recovered water. EPA later deleted the site from the National Priorities List because the remedy was constructed, not because all waste was removed.",
    ],
    timeline: [
      { period: "Disposal era", event: "Hooker placed tens of thousands of tons of chemical waste in the landfill." },
      { period: "Superfund investigation", event: "EPA defined landfill, perimeter, groundwater, and dioxin-related contamination." },
      { period: "Remedy construction", event: "Caps, collection systems, treatment, and community monitoring were installed." },
      { period: "2007", event: "EPA deleted Hyde Park from the Superfund list while long-term controls continued." },
    ],
    documentedImpacts: [
      "Chemical waste included dioxin-bearing material and other persistent compounds.",
      "Contaminated groundwater migrated through fractured bedrock beyond the disposal footprint.",
      "Community concern required monitoring wells and explicit off-site performance checks.",
    ],
    cleanupAndControls: [
      "Landfill and perimeter caps isolate waste and reduce infiltration.",
      "Hydraulic-control wells capture contaminated groundwater for treatment.",
      "Community monitoring wells, maintenance, institutional controls, and five-year reviews verify containment.",
    ],
    presentDay: [
      "Hyde Park is a contained, treated, and monitored former Superfund landfill. Deletion from the NPL signifies construction completion and continued protectiveness obligations, not removal of the buried waste.",
    ],
    researchNotes: [
      "Report the newest five-year-review findings and capture-zone performance.",
      "Avoid merging Hyde Park with Love Canal or other Hooker sites that have separate remedies.",
    ],
  },
  "hooker-102nd-street-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "Hooker Chemical and Olin used the 102nd Street landfill for at least 159,000 tons of liquid and solid chemical waste. The Niagara River location created direct concern about groundwater and nonaqueous-phase liquid migration.",
      "The remedy consolidated waste beneath a lined cap, installed a slurry wall and recovery systems, and established long-term groundwater and NAPL monitoring.",
    ],
    timeline: [
      { period: "Industrial disposal era", event: "Hooker and Olin deposited bulk liquid and solid chemical wastes." },
      { period: "Superfund listing and design", event: "Federal investigation defined the landfill source and riverward migration pathways." },
      { period: "Remedy construction", event: "Waste consolidation, cap, slurry wall, and recovery systems were completed." },
      { period: "Long-term phase", event: "Groundwater and NAPL systems continue under operation, maintenance, and review." },
    ],
    documentedImpacts: [
      "Large volumes of mixed chemical waste remain within the landfill.",
      "Contaminated groundwater and NAPL created potential pathways toward the Niagara River.",
      "Waste ownership and source history involve two industrial operators and require precise attribution.",
    ],
    cleanupAndControls: [
      "A lined cap limits exposure and infiltration over consolidated waste.",
      "A subsurface slurry wall and liquid-recovery systems contain migration.",
      "Groundwater, NAPL, treatment systems, and institutional controls receive long-term monitoring.",
    ],
    presentDay: [
      "The landfill remains a contained-waste remedy beside the Niagara River. Protectiveness depends on the integrity and operation of the cap, wall, recovery, and monitoring systems.",
    ],
    researchNotes: [
      "Add the latest five-year-review conclusions and system recovery volumes.",
      "Map the exact landfill boundary rather than using the point as a proxy for surrounding riverfront land.",
    ],
  },
  "hooker-s-area-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "S-Area is an approximately eight-acre former chemical-waste landfill next to the Niagara Falls drinking-water treatment plant. Its location made source containment and protection of water infrastructure central remedy objectives.",
      "The selected remedy uses a final cap, source containment, groundwater collection and treatment, and continuing monitoring. Buried waste remains in place under engineered controls.",
    ],
    timeline: [
      { period: "Disposal era", event: "Industrial chemical waste was placed in the S-Area landfill." },
      { period: "Federal-state investigation", event: "Studies evaluated the waste source, groundwater, and proximity to the water plant." },
      { period: "Remedy construction", event: "Cap, containment, collection, and treatment components were installed." },
      { period: "Long-term operation", event: "Monitoring and maintenance continue to verify protection of nearby receptors." },
    ],
    documentedImpacts: [
      "Mixed chemical wastes remain buried within the landfill.",
      "Groundwater contamination required active collection and treatment.",
      "The adjoining drinking-water plant increased the consequence of remedy failure, though proximity alone does not mean finished water was contaminated.",
    ],
    cleanupAndControls: [
      "The final landfill cap prevents direct contact and limits rainwater infiltration.",
      "Containment and groundwater collection intercept migration for treatment.",
      "Long-term sampling, inspections, maintenance, and land-use controls preserve protectiveness.",
    ],
    presentDay: [
      "S-Area is a controlled, operating containment remedy. The atlas should distinguish the landfill's documented groundwater impacts from the treated municipal drinking water supplied by the neighboring plant.",
    ],
    researchNotes: [
      "Add current capture-system performance and five-year-review conclusions.",
      "Document the precise relationship between the landfill boundary and water-treatment infrastructure.",
    ],
  },
  "dupont-necco-park-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "DuPont's Necco Park disposal area contains an estimated 93,000 tons of industrial process waste. Contaminants entered soil and fractured-bedrock groundwater, including dense nonaqueous-phase liquid capable of sinking through water-bearing fractures.",
      "The remedy relies on a clay cap, groundwater and DNAPL recovery, treatment, and a large monitoring-well network to control movement rather than excavating the entire waste mass.",
    ],
    timeline: [
      { period: "Industrial disposal era", event: "DuPont placed process waste in the Necco Park area." },
      { period: "Superfund investigation", event: "EPA characterized buried waste, groundwater, DNAPL, and fractured-bedrock pathways." },
      { period: "Remedy implementation", event: "Cap, recovery wells, treatment, and monitoring systems were installed." },
      { period: "Long-term phase", event: "Hydraulic containment and monitoring continue under federal review." },
    ],
    documentedImpacts: [
      "Approximately 93,000 tons of industrial process waste remain in the disposal area.",
      "Groundwater contamination extends through complex fractured bedrock.",
      "DNAPL creates a persistent subsurface source requiring specialized recovery and monitoring.",
    ],
    cleanupAndControls: [
      "A clay cap isolates waste and reduces infiltration.",
      "Groundwater and DNAPL recovery systems remove contaminated liquids for treatment.",
      "A broad monitoring-well network tests plume containment and remedy performance.",
    ],
    presentDay: [
      "Necco Park is a long-term containment and treatment site. Its protectiveness depends on continued recovery, treatment, cap care, and monitoring across a complex bedrock system.",
    ],
    researchNotes: [
      "Report updated DNAPL recovery and groundwater plume trends from the newest review.",
      "Keep the disposal area distinct from adjacent DuPont operating areas and other Niagara chemical sites.",
    ],
  },
  "niagara-sanitation-nash-road-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Niagara Sanitation landfill on Nash Road accepted municipal refuse and industrial wastes, including caustic material, sludges from regional manufacturers, and waste associated with the former air base. Later residential development nearby heightened concern about historic disposal boundaries.",
      "New York's remedy and approved operation, maintenance, and monitoring program manage the landfill and remaining contamination.",
    ],
    timeline: [
      { period: "Landfill era", event: "Municipal and industrial waste was disposed at the Nash Road property." },
      { period: "Investigation", event: "DEC characterized disposal areas, waste types, and environmental pathways." },
      { period: "Remedial program", event: "Containment and management measures were implemented under state oversight." },
      { period: "Current phase", event: "Approved operation, maintenance, and monitoring continue." },
    ],
    documentedImpacts: [
      "The landfill accepted both ordinary refuse and documented industrial chemical wastes.",
      "Caustic materials and industrial sludges created contamination concerns beyond a typical sanitary landfill.",
      "Nearby homes require careful boundary mapping without labeling the entire neighborhood as landfill.",
    ],
    cleanupAndControls: [
      "The remedy contains waste and manages exposure pathways within the defined site.",
      "Groundwater and other environmental media are sampled under the approved monitoring plan.",
      "Inspections, maintenance, and land-use controls protect capped or controlled areas.",
    ],
    presentDay: [
      "Niagara Sanitation remains a managed former landfill. Site-specific monitoring should guide present-day conclusions, while residential parcels must not be characterized without direct evidence.",
    ],
    researchNotes: [
      "Add the newest monitoring trends, remedy boundary, and protectiveness determination.",
      "Compare historical disposal maps with current parcels before publishing polygon geometry.",
    ],
  },
  "lancaster-sanitary-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "Lancaster Sanitary Landfill accepted municipal refuse and documented industrial wastes, including sludges, waste ink, chemical drums, and PCB-containing equipment. The disposal footprint crosses the Lancaster-Clarence area.",
      "New York approved closure and capping, later reclassified the hazardous-waste site, and requires post-closure groundwater monitoring and maintenance.",
    ],
    timeline: [
      { period: "Landfill operation", event: "Municipal refuse and varied industrial wastes were placed at the site." },
      { period: "Closure", event: "The landfill was graded and capped under a state-approved closure plan." },
      { period: "1994", event: "DEC documented the site-classification decision after evaluating closure conditions." },
      { period: "2021 onward", event: "An updated post-closure monitoring and maintenance plan governs long-term care." },
    ],
    documentedImpacts: [
      "Industrial sludges, waste ink, chemical drums, and PCB equipment were disposed with municipal waste.",
      "Landfill leachate created a potential pathway to groundwater.",
      "Buried waste remains in place beneath the closure system.",
    ],
    cleanupAndControls: [
      "A final cover limits contact and infiltration.",
      "Post-closure groundwater wells track potential contaminant migration.",
      "Cap, drainage, gas, access, and institutional controls require inspection and maintenance.",
    ],
    presentDay: [
      "The landfill is closed and maintained, not excavated away. Its current significance lies in the performance of the cap and post-closure groundwater program.",
    ],
    researchNotes: [
      "Add current monitoring results and any corrective maintenance from annual reports.",
      "Confirm the exact municipal boundary and disposal footprint for future polygon mapping.",
    ],
  },
  "niagara-county-refuse": {
    lastReviewed: "July 27, 2026",
    background: [
      "Niagara County Refuse accepted municipal solid waste and industrial chemical wastes from 1969 to 1976. Approximately 3.1 million tons remain contained at the site.",
      "The Superfund remedy placed waste beneath a cap and added leachate collection, gas venting, and environmental monitoring. Cleanup construction was completed in 2000, followed by long-term operation and five-year reviews.",
    ],
    timeline: [
      { period: "1969–1976", event: "The landfill accepted municipal and industrial wastes." },
      { period: "Superfund remedy", event: "EPA selected containment, leachate management, gas controls, and monitoring." },
      { period: "2000", event: "Construction of the cleanup remedy was completed." },
      { period: "Long-term phase", event: "Groundwater, surface water, cap, leachate, and gas systems remain under review." },
    ],
    documentedImpacts: [
      "Roughly 3.1 million tons of mixed waste remain buried.",
      "Leachate and landfill gas required engineered collection and venting.",
      "Groundwater and surface-water pathways require continuing surveillance.",
    ],
    cleanupAndControls: [
      "An engineered cap isolates waste and reduces infiltration.",
      "Leachate collection and gas vents manage liquids and decomposition gases.",
      "Groundwater and surface-water monitoring, maintenance, institutional controls, and five-year reviews verify performance.",
    ],
    presentDay: [
      "The site is a completed-construction Superfund containment remedy. Protectiveness depends on continued cap, leachate, gas, and monitoring performance because the waste remains on site.",
    ],
    researchNotes: [
      "Update the profile with the newest five-year review after the cited 2019 report.",
      "Report any emerging-contaminant sampling separately from the historical remedy unless formally incorporated.",
    ],
  },
  "alltift-landfill-ramco-steel": {
    lastReviewed: "July 27, 2026",
    background: [
      "Alltift Landfill and the adjoining Ramco Steel area combine a former disposal property with later industrial use near the Buffalo River corridor. Investigation identified waste and contaminated soil requiring consolidation and isolation.",
      "The completed state remedy placed material beneath an engineered cover and established institutional controls, inspections, and long-term operation and maintenance.",
    ],
    timeline: [
      { period: "Disposal and industrial era", event: "Waste placement and steel-related property use created contaminated fill and soil." },
      { period: "Investigation and design", event: "DEC defined the material requiring consolidation and cover." },
      { period: "2006", event: "The cited construction-completion report documented the implemented remedy." },
      { period: "Long-term phase", event: "Periodic reviews evaluate cover condition, controls, and maintenance." },
    ],
    documentedImpacts: [
      "Buried waste and contaminated soil were documented within the remedy footprint.",
      "Historic fill and industrial use created heterogeneous subsurface conditions.",
      "Residual material remains beneath the engineered cover.",
    ],
    cleanupAndControls: [
      "Waste and affected soil were consolidated into the controlled footprint.",
      "An engineered cover prevents direct contact and limits infiltration.",
      "Institutional controls, inspections, soil-management rules, and long-term maintenance preserve the remedy.",
    ],
    presentDay: [
      "Alltift is a completed but controlled cleanup. Public or industrial reuse must remain consistent with the cover and institutional controls.",
    ],
    researchNotes: [
      "Add the latest periodic-review findings and current property use.",
      "Map the remedy footprint separately from surrounding Tifft and Buffalo River lands.",
    ],
  },
  "outer-harbor-greenbelt": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Outer Harbor Greenbelt occupies waterfront land formed in part from dredged sediment, construction debris, and a former municipal dump that received ash and incinerator residue. Its modern recreational landscape overlays a substantial engineered and industrial history.",
      "Brownfield remediation removed selected contaminated soil, installed a protective cover, and stabilized the shoreline. New York issued a Certificate of Completion in 2012.",
    ],
    timeline: [
      { period: "Fill and disposal era", event: "Dredged sediment, debris, municipal waste, ash, and incinerator residue helped form the land." },
      { period: "Brownfield investigation", event: "Sampling identified conditions requiring controlled recreational-use remediation." },
      { period: "Remedial construction", event: "Crews removed targeted soil, installed cover, and stabilized shoreline areas." },
      { period: "2012", event: "New York issued the site's Certificate of Completion." },
    ],
    documentedImpacts: [
      "Historic fill included dredged material, construction debris, ash, and incinerator residue.",
      "Contaminated soil required removal or isolation before public recreation.",
      "Shoreline erosion could expose fill without stabilization and maintenance.",
    ],
    cleanupAndControls: [
      "Selected contaminated soil was excavated and disposed of appropriately.",
      "A protective soil cover separates visitors from remaining historic fill.",
      "Shoreline stabilization, inspections, soil-management rules, and institutional controls protect the remedy.",
    ],
    presentDay: [
      "The Greenbelt is a successful public reuse of remediated filled land. Recreational access is compatible with the remedy, while subsurface disturbance still requires adherence to site-management controls.",
    ],
    researchNotes: [
      "Add the environmental easement, cover inspection schedule, and precise completed-cleanup boundary.",
      "Distinguish this greenbelt remedy from other Outer Harbor parcels created with different fill histories.",
    ],
  },
  "times-beach-disposal-site": {
    lastReviewed: "July 27, 2026",
    background: [
      "Times Beach is a 45-acre confined disposal site used from 1972 to 1976 for sediment dredged from the Buffalo River federal navigation channel. The contained sediment reflects the river's industrial contamination history.",
      "After disposal ended, natural succession and restoration transformed the surface into a valued nature preserve. Habitat use does not mean the contained dredged material was removed.",
    ],
    timeline: [
      { period: "1972–1976", event: "Contaminated navigation-channel sediment was placed in the confined disposal area." },
      { period: "Post-disposal", event: "Vegetation and wildlife colonized the closed containment surface." },
      { period: "Preserve era", event: "The city and partners managed the property for habitat and public environmental value." },
      { period: "Ongoing restoration", event: "Invasive-species control and habitat work continue around the containment area." },
    ],
    documentedImpacts: [
      "The site contains dredged sediment affected by the Buffalo River's industrial contaminant legacy.",
      "Constructed dikes and fill permanently altered former shoreline and wetland conditions.",
      "Disturbance or erosion could compromise isolation of the contained material.",
    ],
    cleanupAndControls: [
      "The confined disposal structure physically isolates dredged sediment.",
      "Habitat restoration and vegetation management improve surface ecological function without disturbing containment.",
      "Access, erosion, invasive species, and structural condition require continuing stewardship.",
    ],
    presentDay: [
      "Times Beach is both a disposal structure and a nature preserve. Those identities are compatible only while containment integrity and habitat management are maintained.",
    ],
    researchNotes: [
      "Document ownership, inspection responsibility, and current structural-monitoring requirements.",
      "Do not describe all sediment beneath the preserve as uniform; disposal records and sampling should guide detail.",
    ],
  },
  "pettit-flume-durez-outfall": {
    lastReviewed: "July 27, 2026",
    background: [
      "Pettit Flume carried stormwater and contaminated drainage from the former Durez chemical plant through sewers to a Niagara River cove. Plant-related contaminants accumulated along roughly 22,000 feet of sewer and in outfall sediment.",
      "Cleanup combined source containment at Durez with sewer cleaning, removal of about 25,000 cubic yards of contaminated sewer and cove sediment, wetland restoration, and later maintenance dredging.",
    ],
    timeline: [
      { period: "Industrial discharge era", event: "Plant drainage transported contaminants through Pettit Flume to the Niagara River." },
      { period: "Source investigation", event: "Agencies linked sewer and cove contamination to former Durez operations." },
      { period: "Major cleanup", event: "Approximately 22,000 feet of sewer were cleaned and about 25,000 cubic yards of sediment removed." },
      { period: "Long-term phase", event: "Wetland restoration, maintenance dredging, and source-site controls continued." },
    ],
    documentedImpacts: [
      "Contaminants accumulated in storm-sewer sediment over a long conveyance route.",
      "The Niagara River cove received affected sediment at the outfall.",
      "Without control of the Durez source, cleaned downstream areas could be recontaminated.",
    ],
    cleanupAndControls: [
      "Source containment at the former plant reduces continuing discharge.",
      "Sewer and cove sediments were excavated and disposed of off site.",
      "Wetland restoration, maintenance dredging, and monitoring address residual deposition and habitat.",
    ],
    presentDay: [
      "Pettit Flume demonstrates a source-to-outfall remedy: plant, sewer, sediment, and cove must be evaluated together. The major removal is complete, but upstream controls and maintenance remain essential.",
    ],
    researchNotes: [
      "Add current sediment-monitoring and maintenance-dredging results.",
      "Map the conveyance route as a line rather than implying the point represents the full affected system.",
    ],
  },
  "gill-creek-chemical-corridor": {
    lastReviewed: "July 27, 2026",
    background: [
      "Gill Creek flows past the DuPont and Olin chemical plants to the Niagara River. Historic plant operations affected creek sediment and groundwater, making the corridor both an ecological receptor and a migration pathway.",
      "A joint cleanup removed approximately 8,020 cubic yards of contaminated sediment by 1992. Groundwater collection, treatment, and monitoring continued to control movement toward the creek and river.",
    ],
    timeline: [
      { period: "Industrial discharge era", event: "Chemical-plant operations affected groundwater and creek sediment." },
      { period: "Joint investigation", event: "DuPont, Olin, and agencies evaluated sources and downstream deposition." },
      { period: "By 1992", event: "Approximately 8,020 cubic yards of contaminated sediment had been removed." },
      { period: "Long-term phase", event: "Groundwater collection, treatment, and monitoring continued along the corridor." },
    ],
    documentedImpacts: [
      "Industrial contaminants accumulated in Gill Creek sediment.",
      "Contaminated groundwater created a continuing pathway toward the creek and Niagara River.",
      "Multiple adjacent operators make source allocation more complex than a single-facility outfall.",
    ],
    cleanupAndControls: [
      "Affected creek sediment was excavated and disposed of.",
      "Groundwater collection systems intercept contaminated flow for treatment.",
      "Creek, groundwater, and treatment performance require continuing monitoring.",
    ],
    presentDay: [
      "The major sediment removal is historical, while groundwater control remains the critical continuing barrier. Current creek condition should be described from recent monitoring rather than the pre-1992 record alone.",
    ],
    researchNotes: [
      "Locate recent creek sediment and groundwater trend reports from both facilities.",
      "Represent Gill Creek as a corridor and keep facility-specific sources separately attributed.",
    ],
  },
  "smokes-creek-bethlehem-corridor": {
    lastReviewed: "July 27, 2026",
    background: [
      "Smokes Creek crosses the former Bethlehem Steel property before entering Lake Erie. Decades of steelmaking discharges contaminated the lower creek and degraded its channel and habitat.",
      "Approximately 40,000 cubic yards of affected sediment were removed in 2009. Current planning extends beyond contaminant removal to bank stability, fish and wildlife connectivity, flood resilience, and restoration from the industrial corridor to the creek mouth.",
    ],
    timeline: [
      { period: "Steelmaking era", event: "Plant discharges and industrial alteration affected the lower creek." },
      { period: "Investigation and design", event: "Agencies characterized contaminated sediment and selected removal." },
      { period: "2009", event: "Approximately 40,000 cubic yards of affected sediment were excavated." },
      { period: "Current restoration", event: "Partners plan bank, habitat, connectivity, and resilience improvements." },
    ],
    documentedImpacts: [
      "Industrial contaminants accumulated in lower-creek sediment.",
      "Channelization and altered banks reduced habitat quality and connectivity.",
      "The corridor is influenced by both legacy contamination and present hydrologic and erosion pressures.",
    ],
    cleanupAndControls: [
      "Contaminated sediment was removed from the lower creek.",
      "Source-site controls at the former steel property reduce renewed loading.",
      "Bank stabilization, native habitat, connectivity, and monitoring form the next restoration phase.",
    ],
    presentDay: [
      "Smokes Creek is a remediated industrial waterway entering a broader restoration phase. The 2009 sediment removal was substantial but did not by itself restore all habitat or eliminate watershed pressures.",
    ],
    researchNotes: [
      "Track final restoration designs, permits, construction, and post-project biological monitoring.",
      "Separate conditions in the industrial lower creek from upstream watershed reaches and the public beach area.",
    ],
  },
  "southtowns-awtf-ash-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Southtowns Advanced Wastewater Treatment Facility maintained an on-site disposal area for ash generated by sewage-sludge incineration. It lies beside, but is not the same as, Woodlawn Beach State Park's natural beach and dune system.",
      "Erie County reclaimed the ash landfill by excavating, testing, transporting, and disposing of its contents off site, then restoring the disturbed area.",
    ],
    timeline: [
      { period: "Incineration era", event: "Sewage-sludge incinerator ash was placed in an on-site disposal area." },
      { period: "Closure planning", event: "Erie County characterized the ash and planned full removal and reclamation." },
      { period: "Reclamation", event: "Ash and associated landfill material were excavated, tested, hauled, and disposed of off site." },
      { period: "Restoration", event: "The former disposal footprint was graded and revegetated." },
    ],
    documentedImpacts: [
      "The disposal area contained wastewater-treatment incinerator ash.",
      "Its proximity to Lake Erie and Woodlawn Beach required careful material handling and runoff control.",
      "The record does not identify the adjacent natural beach or dune as landfill.",
    ],
    cleanupAndControls: [
      "Landfill contents were removed rather than permanently capped in place.",
      "Material testing and controlled transport directed waste to approved disposal.",
      "Backfill, grading, vegetation, and post-construction verification restored the footprint.",
    ],
    presentDay: [
      "The ash landfill has been reclaimed through off-site removal. The marker records the former disposal footprint and should not stigmatize Woodlawn Beach or imply ash remains across the park.",
    ],
    researchNotes: [
      "Add final removal tonnage, disposal destination, and closure certification.",
      "Replace the point with the verified former landfill polygon when county plans are available.",
    ],
  },
  "lasalle-reservoir-quarry-landfill": {
    lastReviewed: "July 27, 2026",
    background: [
      "This roughly 50-acre former limestone quarry was later filled with municipal refuse, incinerator ash, construction and demolition debris, appliances, vegetation, and documented Buffalo Forge waste. Portions became McCarthy Park and nearby development, while an open quarry area serves as a stormwater-retention basin.",
      "State investigation evaluated whether the mixed fill warranted continued hazardous-waste registry status. DEC concluded that the record supported removal from the registry, a regulatory decision that does not erase the quarry's fill history.",
    ],
    timeline: [
      { period: "Quarry era", event: "Limestone extraction created a large excavated basin." },
      { period: "Fill era", event: "Municipal refuse, ash, debris, appliances, vegetation, and some industrial waste entered the quarry." },
      { period: "Public reuse", event: "Filled portions became parkland and development; the remaining basin served stormwater storage." },
      { period: "State evaluation", event: "DEC investigation supported removal from the hazardous-waste registry." },
    ],
    documentedImpacts: [
      "The quarry received heterogeneous municipal, demolition, ash, and documented industrial fill.",
      "Filled land beneath public uses requires careful soil and cover management.",
      "Registry removal means state criteria for continued listed-site action were not met, not that no waste exists.",
    ],
    cleanupAndControls: [
      "State investigation and sampling evaluated hazardous-waste concerns and exposure pathways.",
      "Existing cover and paved or landscaped surfaces limit routine contact with fill.",
      "Future excavation should use environmental review and controlled soil management appropriate to unknown fill.",
    ],
    presentDay: [
      "The area supports park, development, and stormwater uses after state review. It belongs in the atlas as a documented filled quarry with a non-active registry status, not as an open hazardous-waste cleanup.",
    ],
    researchNotes: [
      "Locate detailed sampling maps and the formal delisting decision.",
      "Separate the filled park/development areas from the open stormwater reservoir in future geometry.",
    ],
  },
  "1827-fillmore-former-quarry": {
    lastReviewed: "July 27, 2026",
    background: [
      "A former stone quarry at 1827 Fillmore Avenue was backfilled during the 1940s and 1950s with material of unknown origin and later developed as the Kensington Heights apartment complex.",
      "Brownfield investigation found PAHs and metals in soil and fill. Excavation, cover, and institutional controls supported state cleanup completion in 2019.",
    ],
    timeline: [
      { period: "Quarry era", event: "Stone extraction created a deep urban excavation." },
      { period: "1940s–1950s", event: "The quarry was backfilled with material whose origin was not fully documented." },
      { period: "Residential era", event: "Kensington Heights apartments were constructed over the former quarry." },
      { period: "2019", event: "New York completed the brownfield cleanup after excavation and cover work." },
    ],
    documentedImpacts: [
      "PAHs and metals were detected in soil and historic fill.",
      "Unknown fill composition created uncertainty requiring broad characterization.",
      "Residential use increased the need for a protective cover and enforceable soil-management controls.",
    ],
    cleanupAndControls: [
      "Contaminated soil and fill were excavated where required by the remedy.",
      "A site cover prevents routine residential contact with remaining fill.",
      "Institutional controls and a site-management plan govern future disturbance and maintenance.",
    ],
    presentDay: [
      "The property is a completed brownfield cleanup with residual fill managed beneath cover. Completion supports reuse but does not make uncontrolled excavation appropriate.",
    ],
    researchNotes: [
      "Add the Certificate of Completion, environmental easement, and exact residual-contamination areas.",
      "Use verified redevelopment information when describing present occupancy or future housing plans.",
    ],
  },
  "eighteenmile-creek-superfund": {
    lastReviewed: "July 27, 2026",
    background: [
      "The Eighteen Mile Creek Superfund site covers roughly 15 miles from the Lockport source area toward Lake Ontario. Historic industries contaminated facility soil, groundwater, creek sediment, and floodplain areas with PCBs, lead, and other pollutants.",
      "EPA divided the site into stages and operable units. Source-area actions have included demolition, excavation, capping, and selected residential relocations, while downstream sediment investigation and fish-consumption restrictions remain important.",
    ],
    timeline: [
      { period: "Industrial era", event: "Manufacturing and waste handling released contaminants near the creek's Lockport source." },
      { period: "Superfund listing", event: "EPA placed the multi-mile creek system in the federal cleanup program." },
      { period: "Source-area actions", event: "Buildings were demolished, contaminated material excavated, caps installed, and some residents relocated." },
      { period: "Current program", event: "Investigation and cleanup continue by operable unit along the creek corridor." },
    ],
    documentedImpacts: [
      "PCBs and lead contaminate source-area soil and creek sediment.",
      "Groundwater, runoff, and sediment transport connected industrial sources to downstream reaches.",
      "Fish-consumption advisories reflect persistent bioaccumulation risk in the aquatic food web.",
    ],
    cleanupAndControls: [
      "Source buildings and contaminated soil were removed or capped in priority areas.",
      "Residential relocation addressed properties where safe continued occupancy was not compatible with the selected action.",
      "Sediment investigation, access controls, monitoring, and staged remedial decisions continue downstream.",
    ],
    presentDay: [
      "Eighteen Mile Creek remains an active, large-scale Superfund cleanup. Completed source work is meaningful, but it should not be described as completion of the entire 15-mile site or cancellation of fish advisories.",
    ],
    researchNotes: [
      "Track each operable unit's decision, construction status, sediment volume, and post-cleanup monitoring.",
      "Represent the site as a corridor with source-area polygons rather than a single point.",
    ],
  },
  "forest-glen-mobile-home-subdivision": {
    lastReviewed: "July 27, 2026",
    background: [
      "Forest Glen was a residential development built over an inadequately covered chemical-waste disposal area in the Town of Niagara. The discovery placed residents in direct proximity to buried industrial waste and contaminated soil.",
      "EPA permanently relocated residents from 51 mobile homes and two houses, then excavated contaminated soil and consolidated it beneath an engineered cap. The response converted a residential exposure problem into a controlled, unoccupied disposal site.",
    ],
    timeline: [
      { period: "Disposal era", event: "Chemical waste was placed at the property before residential development." },
      { period: "Residential development", event: "Mobile homes and houses were established over the inadequately covered dump." },
      { period: "Superfund response", event: "EPA investigated the exposure and permanently relocated affected residents." },
      { period: "Remedial construction", event: "Contaminated soil was excavated, consolidated, and contained beneath an engineered cap." },
    ],
    documentedImpacts: [
      "Homes were located directly over or beside inadequately covered chemical waste.",
      "Contaminated soil created direct-contact and residential exposure concerns.",
      "The confirmed disposal area is site-specific and does not establish contamination throughout the wider neighborhood.",
    ],
    cleanupAndControls: [
      "EPA permanently relocated occupants from 51 mobile homes and two houses.",
      "Affected soil was excavated and consolidated within an engineered capped area.",
      "Land-use restrictions, cap inspections, groundwater monitoring, and long-term maintenance protect the remedy.",
    ],
    presentDay: [
      "The former subdivision is now a capped and controlled Superfund site without residential occupancy. The remedy prevents exposure while waste remains contained; surrounding properties should be discussed only from parcel-specific evidence.",
    ],
    researchNotes: [
      "Add the newest five-year-review findings, groundwater trends, and current site ownership.",
      "Use the verified capped-area boundary rather than extending the marker to the broader Forest Glen neighborhood.",
    ],
  },
  "wide-beach-development": {
    lastReviewed: "July 27, 2026",
    background: [
      "At Wide Beach, PCB-contaminated waste oil was spread on dirt roads for dust suppression. Road grading and excavation later moved affected soil into residential yards and nearby wetlands, distributing contamination through the Lake Erie community.",
      "The federal remedy treated approximately 36,160 tons of contaminated soil and sediment and restored disturbed wetlands. EPA deleted the site from the National Priorities List in 1994 after completing the cleanup.",
    ],
    timeline: [
      { period: "Dust-control era", event: "Waste oil containing PCBs was applied to unpaved community roads." },
      { period: "Redistribution", event: "Road work moved PCB-affected soil into yards and wetland areas." },
      { period: "Superfund cleanup", event: "Soil and sediment were excavated and treated, and affected properties were restored." },
      { period: "1994", event: "EPA deleted Wide Beach from the National Priorities List after remedy completion." },
    ],
    documentedImpacts: [
      "PCBs contaminated road soil, residential yards, and sediment.",
      "Ordinary grading practices spread affected material beyond the original road surfaces.",
      "Cleanup disturbance affected wetlands that required ecological restoration.",
    ],
    cleanupAndControls: [
      "Approximately 36,160 tons of contaminated soil and sediment were excavated and treated.",
      "Clean material restored roads, yards, and other excavated areas.",
      "Affected wetlands were restored and the completed remedy was verified before NPL deletion.",
    ],
    presentDay: [
      "Wide Beach is a completed and delisted Superfund cleanup. Its history remains important, but the official record supports describing the remedy as complete rather than portraying the community as an active uncontrolled PCB site.",
    ],
    researchNotes: [
      "Add any post-deletion monitoring or redevelopment reviews from EPA's current site file.",
      "Keep historic affected-property mapping precise enough to avoid stigmatizing uninvolved nearby homes.",
    ],
  },
  "fmc-middleport": {
    lastReviewed: "July 27, 2026",
    background: [
      "FMC's Middleport plant began manufacturing arsenic-based pesticides and other products in the 1920s. Historic releases, waste handling, runoff, and air deposition affected facility soil, sediment, surface water, groundwater, and off-site properties.",
      "New York supervises a multi-year cleanup extending beyond the plant to residential and commercial parcels and Royalton-Hartland school property. Arsenic is the defining contaminant, though specific cleanup decisions vary by area.",
    ],
    timeline: [
      { period: "1920s onward", event: "The plant manufactured arsenic-based pesticides and other chemical products." },
      { period: "Investigation era", event: "Agencies documented on-site impacts and off-site deposition and runoff pathways." },
      { period: "Off-site remedy", event: "Contaminated soil removal proceeded across residential, commercial, and school properties." },
      { period: "2025", event: "DEC reported that the multi-year off-site cleanup program remained active." },
    ],
    documentedImpacts: [
      "Arsenic affected plant soil and nearby properties through several transport pathways.",
      "Facility sediment, surface water, and groundwater were also part of the corrective-action record.",
      "Residential and school settings required property-specific cleanup and restoration.",
    ],
    cleanupAndControls: [
      "Contaminated soil is excavated from defined off-site properties and replaced with clean material.",
      "Lawns, landscaping, pavement, and school or residential features are restored after verification sampling.",
      "Facility corrective action, groundwater and surface-water controls, monitoring, and land-use requirements continue separately from off-site excavation.",
    ],
    presentDay: [
      "FMC Middleport remains an active, phased cleanup with completed work on many properties and continuing obligations elsewhere. Progress must be reported by remediation area and property group rather than as one finished or uniformly contaminated community.",
    ],
    researchNotes: [
      "Track annual property counts, excavation volumes, restoration completion, and remaining remedial areas.",
      "Distinguish measured facility releases from naturally occurring regional arsenic and from properties below cleanup criteria.",
    ],
  },
  "former-american-axle-east-delavan": {
    lastReviewed: "July 27, 2026",
    background: [
      "General Motors and later American Axle operated a large automotive-parts manufacturing complex at 1001 East Delavan Avenue. Plant operations, underground tanks, and electrical equipment created petroleum impacts and possible PCB-release areas.",
      "The property is divided between a state Superfund site and Brownfield Cleanup Program parcels. Oil recovery, phased investigation, demolition, and remediation therefore proceed under more than one regulatory track.",
    ],
    timeline: [
      { period: "GM and American Axle era", event: "Automotive-component manufacturing occupied the large East Delavan complex." },
      { period: "Closure and investigation", event: "Plant closure led to characterization of tanks, petroleum, electrical equipment, and subsurface conditions." },
      { period: "2017 onward", event: "Portions entered the Brownfield Cleanup Program while the state Superfund area remained separately managed." },
      { period: "2021", event: "DEC and local representatives formed a community working group to support cleanup communication." },
    ],
    documentedImpacts: [
      "Petroleum affected soil and groundwater around operations and underground tanks.",
      "Free product required recovery in portions of the complex.",
      "Potential PCB releases from electrical equipment require location-specific confirmation and cleanup.",
    ],
    cleanupAndControls: [
      "Oil recovery removes mobile petroleum product and limits migration.",
      "Demolition, tank removal, excavation, and verification sampling proceed by cleanup parcel.",
      "Covers, vapor controls, groundwater monitoring, institutional controls, and site management are applied where residual impacts remain.",
    ],
    presentDay: [
      "The former plant is an active, phased cleanup and redevelopment property. The state Superfund and brownfield sections should remain visibly distinct because their boundaries, responsible parties, and completion status differ.",
    ],
    researchNotes: [
      "Create a parcel and operable-unit matrix with current remedy and completion status.",
      "Track community-working-group materials and current free-product recovery data.",
    ],
  },
  "cecos-international": {
    lastReviewed: "July 27, 2026",
    background: [
      "The CECOS property has a disposal history dating to 1897 and began hazardous-waste treatment, storage, and disposal operations in 1977. Numerous waste-management units accumulated across the large facility over time.",
      "EPA and New York corrective-action investigations found releases to fill, soil, and groundwater. Closed units are capped and maintained, while contaminated groundwater is recovered and treated under continuing hazardous-waste permits and corrective-action controls.",
    ],
    timeline: [
      { period: "1897 onward", event: "Waste disposal occurred on the property long before modern hazardous-waste regulation." },
      { period: "1977 onward", event: "The facility operated hazardous-waste treatment, storage, and disposal units." },
      { period: "Closure and corrective action", event: "Regulators investigated releases and closed or capped historic waste units." },
      { period: "Current program", event: "Groundwater recovery, treatment, monitoring, maintenance, and permit controls continue." },
    ],
    documentedImpacts: [
      "Historic waste-management units released contaminants to fill and soil.",
      "Groundwater contamination requires active recovery and treatment.",
      "The long operating history produced units with different wastes, closure designs, and regulatory status.",
    ],
    cleanupAndControls: [
      "Closed disposal units are capped and maintained to prevent contact and reduce infiltration.",
      "Contaminated groundwater is recovered and treated.",
      "Corrective-action orders, hazardous-waste permits, monitoring networks, inspections, and institutional controls govern long-term performance.",
    ],
    presentDay: [
      "CECOS is a long-term hazardous-waste corrective-action site, not a single completed excavation. Understanding current risk depends on the status of individual closed units and the performance of groundwater containment and treatment.",
    ],
    researchNotes: [
      "Build a unit-level inventory of landfill cells, lagoons, tanks, closure dates, and corrective-action requirements.",
      "Update ownership, active permits, groundwater trends, and EPA environmental-indicator determinations.",
    ],
  },
  "frontier-chemical-royal-avenue": {
    lastReviewed: "July 27, 2026",
    background: [
      "Frontier Chemical operated a hazardous-waste treatment and storage facility at 4626 Royal Avenue on property with earlier chlor-alkali manufacturing and sludge-disposal history. Multiple operating eras contributed to a complex subsurface record.",
      "VOCs and other contaminants remain concentrated in deep soil and groundwater. Major corrective construction is complete, while pump-and-treat, monitoring, industrial-use restrictions, and site-management controls continue.",
    ],
    timeline: [
      { period: "Earlier industrial era", event: "Chlor-alkali manufacturing and sludge disposal occurred at the property." },
      { period: "Frontier Chemical era", event: "The facility treated and stored hazardous waste." },
      { period: "Corrective action", event: "EPA and New York directed source work and groundwater-control construction." },
      { period: "Long-term phase", event: "Pump-and-treat, monitoring, maintenance, and restricted industrial use continue." },
    ],
    documentedImpacts: [
      "VOCs remain in deep soil and groundwater.",
      "Historical sludge disposal and later hazardous-waste operations created overlapping source areas.",
      "Deep contamination requires long-term hydraulic management rather than reliance on surface cleanup alone.",
    ],
    cleanupAndControls: [
      "Major source and corrective-action construction addressed accessible contaminated materials and facility units.",
      "A pump-and-treat system captures contaminated groundwater for treatment.",
      "Monitoring, an industrial-use restriction, institutional controls, and a site-management plan govern remaining contamination.",
    ],
    presentDay: [
      "Frontier Chemical is in long-term corrective-action management. The major construction phase is complete, but the ongoing groundwater system and land-use restriction are essential parts of the remedy.",
    ],
    researchNotes: [
      "Add current pump-and-treat performance, plume trends, and EPA environmental-indicator status.",
      "Separate contamination attributed to earlier chlor-alkali operations from Frontier's later waste-treatment activities where records allow.",
    ],
  },
};
