import type { AtlasSite, AtlasSource } from "@/types/site";

const dec = "New York State Department of Environmental Conservation document repository";
const gisUrl = "https://services6.arcgis.com/DZHaqZm9cxOD4CWM/ArcGIS/rest/services/Remediation_Sites/FeatureServer/1";

export const niagaraRefuseWasteSource: AtlasSource = {
  title: "Niagara County Refuse RI/FS Work Plan (March 1988), Table 2-1, printed pages 9–10",
  publisher: "Ebasco Services for EPA, preserved in the EPA Superfund archive",
  url: "https://semspub.epa.gov/work/02/49366.pdf",
};

export const researchCandidateSites: AtlasSite[] = [
  {
    id: "curtiss-malt-house",
    name: "Curtiss Malt House / Niagara Street Industrial Parcels",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary: "The former malt house and adjoining heat-treatment and machine-shop parcels at 1100–1114 Niagara Street are one expanding brownfield project. Investigations document impacted fill and groundwater; an April 2026 plan proposes soil removal, tank removal, and vapor controls as part of reuse.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.90059321326937, 42.9132928262656],
    updateNote: "Added the five-parcel brownfield history, documented findings, and April 2026 interim cleanup proposal.",
    sources: [
      { title: "Curtiss Malt House expanded investigation plan (April 2025), sections 1–3", publisher: dec, url: "https://extapps.dec.ny.gov/data/DecDocs/C915382/Work%20Plan.BCP.C915382.2025-04-29.Remedial%20Investigation%20WP%20-%20Expanded%20Area%20-%20Final.pdf" },
      { title: "Curtiss Malt House interim remedial measures work plan (April 2026), sections 1–3", publisher: "Brydges Engineering in Environment and Energy for Jenesis Development, DEC repository", url: "https://extapps.dec.ny.gov/data/DecDocs/C915382/Application.BCP.C915382.2026-04-01.Interim%20Remedial%20Measures%20Work%20Plan.pdf" },
      { title: "Curtiss Malt House agreements, investigations, and ownership amendments — C915382", publisher: dec, url: "https://extapps.dec.ny.gov/data/DecDocs/C915382/" },
      { title: "DEC remediation GIS — marker authority C915382, retrieved October 26, 2026", publisher: "NYSDEC", url: gisUrl },
    ],
    story: {
      lastReviewed: "October 26, 2026",
      background: [
        "The Niagara Street landmark sits within a larger industrial block. The 2026 work plan traces the southern parcel to a Curtiss malting drum house by 1899 and later grain-exchange use. A 1927 fire led to rebuilding at reduced height using surviving structural elements.",
        "The adjoining parcels have their own histories: grain-related warehouses, Modern Heat Treating and Forging, and Oliver Gear machining. The cleanup project now brings five addresses together, making it necessary to distinguish building-specific findings from contamination across the combined property.",
        "The April 2025 investigation plan described a 1.559-acre project. The April 2026 interim plan describes 2.686 acres across 1100, 1106, 1110, 1112, and 1114 Niagara Street. Older acreage and proposals should therefore be read in their original geographic scope.",
      ],
      timeline: [
        { period: "1899–1927", event: "Malting and later grain-exchange activity developed on the southern parcel; a major fire preceded reconstruction at reduced height." },
        { period: "Mid-to-late twentieth century", event: "Warehouse, heat-treatment, and machine-shop uses occupied adjoining parcels later incorporated into the brownfield project." },
        { period: "2012–2025", event: "Successive assessments examined soil, building residues, groundwater, and vapor concerns as the investigation area expanded." },
        { period: "April 2026", event: "An interim work plan proposed vapor mitigation, excavation and off-site disposal of impacted soil, and removal of a known underground tank." },
      ],
      documentedImpacts: [
        "The 2025 investigation plan identifies metals and PAHs in soil and chlorinated solvents in groundwater. Fill thickness and analytical results varied by location; these findings do not describe a uniform layer beneath the entire block.",
        "Earlier groundwater results and nearby industrial histories raised the possibility of contributions from neighboring properties. The plan treats source attribution as an investigation question; it does not prove that a particular neighboring manufacturer caused every detection.",
        "The 2026 interim plan identifies a potential vapor-intrusion concern in the northern building area and impacted fill across the expanded project. Findings in building residues, soil, and groundwater represent different sample media and should remain distinguishable.",
      ],
      cleanupAndControls: [
        "The April 2026 proposal combines a modified sub-slab depressurization system, excavation of impacted fill for off-site disposal, and underground-tank registration and removal. A work plan establishes proposed work; it does not certify completed installation or removal.",
      ],
      presentDay: [
        "The 2026 plan proposes offices at 1112–1114 Niagara Street, parking on other parcels, and event and residential uses at the former malt house. These are proposed uses, not a verified opening or cleanup-completion milestone.",
      ],
      researchNotes: [
        "Obtain DEC approval, construction documentation, vapor-system testing, and a final engineering report before describing the interim measures as complete.",
        "The marker uses DEC's C915382 GIS point, retrieved October 26, 2026. It is an orientation point, not the boundary of the expanded five-parcel project or a groundwater plume.",
      ],
    },
  },
  {
    id: "1440-main-street",
    updateNote: "Added the former garages and shops, documented PAH and metal findings, and the final investigation plan filed in July 2026.",
    name: "1440–1458 Main Street Brownfield",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary: "Former garages, shops, storage buildings, and gasoline-tank locations on Main Street became a brownfield investigation. Studies found PAHs and metals in fill; the final investigation plan filed in July 2026 addresses soil, groundwater, and vapor questions ahead of proposed mixed-use redevelopment.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.86586827252643, 42.912830950498744],
    sources: [
      { title: "1440 Main Street investigation fact sheet (March 2026), pages 1–2 — C915408", publisher: "NYSDEC", url: "https://extapps.dec.ny.gov/data/der/factsheet/c915408riwp.pdf" },
      { title: "1440 Main Street final RI work plan (June 2026; filed July 6), sections 1–3 — C915408", publisher: "Roux Environmental Engineering and Geology, DEC repository", url: "https://extapps.dec.ny.gov/data/DecDocs/C915408/Work%20Plan.BCP.C915408.2026-07-06.Final%20Remedial%20Investigation%20Work%20Plan.pdf" },
      { title: "1440 Main Street project documents — C915408", publisher: dec, url: "https://extapps.dec.ny.gov/data/DecDocs/C915408/" },
      { title: "DEC remediation GIS — marker authority C915408, retrieved October 26, 2026", publisher: "NYSDEC", url: gisUrl },
    ],
    story: {
      lastReviewed: "October 26, 2026",
      background: [
        "This Main Street block illustrates the environmental record of small urban businesses. DEC's March 2026 account describes garages, a plumbing shop, storefronts, storage, and a later radio studio on the 1.43-acre property between Glenwood and Woodlawn avenues.",
        "Historical gasoline tanks provide investigation targets, but former use alone does not establish which activity caused each soil finding.",
        "The final work plan distinguishes urban fill from underlying native soil and treats former tank areas as specific investigation targets. This helps separate widespread fill-related findings from a possible localized petroleum source, rather than assigning all contamination to the former garages.",
      ],
      timeline: [
        { period: "About 1925–1951", event: "Garages, storage, retail, and plumbing uses occupied the property; historical records identify gasoline tanks." },
        { period: "1951", event: "DEC's history identifies a radio station studio." },
        { period: "2023–2024", event: "Soil investigations identified PAHs and metals in urban fill, prompting a fuller assessment." },
        { period: "March–April 2026", event: "DEC sought comment on a draft remedial investigation plan." },
        { period: "July 2026 archive", event: "DEC's file lists a final investigation work plan dated June, including redevelopment and further sampling proposals." },
      ],
      documentedImpacts: [
        "DEC reports previously detected metals and semi-volatile organic compounds in on-site soil. Its fact sheet does not establish completed groundwater delineation or measured indoor-air impacts.",
        "The final work plan's review of 2023 sampling identifies arsenic, barium, cadmium, lead, and mercury above applicable soil objectives at various locations. The 2024 supplemental investigation also found PAH and metal exceedances. These summaries do not mean that every compound exceeded every land-use objective at every sample.",
      ],
      cleanupAndControls: [
        "Proposed work includes soil borings, monitoring wells, and soil-vapor, sub-slab, and indoor-air sampling. These are investigation activities, not a selected final cleanup.",
        "The final plan includes test pits around historical tanks and possible interim removal of tanks or grossly petroleum-impacted soil if encountered. Community air monitoring accompanies intrusive work. The plan does not establish that tanks were found, removed, or certified closed.",
      ],
      presentDay: [
        "The March fact sheet left reuse undetermined. The later final plan proposes approximately 178,000 square feet of mixed-use residential and commercial redevelopment with parking. That proposal is a newer planning milestone, not evidence that construction or remediation is complete.",
      ],
      researchNotes: [
        "Review completed investigation results, interim-work documentation, and the alternatives analysis before assigning final cleanup requirements, contaminant sources, or exposure pathways. The final plan contains an inconsistent site-code reference in its introduction; the cover, archive, DEC fact sheet, and GIS identify C915408.",
        "Marker: DEC GIS point C915408, retrieved October 26, 2026; not a contamination boundary.",
      ],
    },
  },
  {
    id: "3701-river-road",
    updateNote: "Added the petroleum-property history, 2024 sampling findings, and September 2026 brownfield agreement.",
    name: "3701 River Road / Former Petroleum Property",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "cleanup",
    summary: "A former refinery-related storage and fueling property with petroleum-impacted soil and groundwater documented in 2024. DEC transmitted its executed Brownfield Cleanup Agreement in September 2026; entry into the program does not establish completed remediation.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.9306015042552, 42.975913440377624],
    sources: [
      { title: "3701 River Road Phase II investigation (October 30, 2024), pages 1–4 and Tables 1–2", publisher: "Roux Environmental Engineering and Geology, DEC repository", url: "https://extapps.dec.ny.gov/data/DecDocs/C915419/Application.BCP.C915419.2024-10-30.%20Phase%20II.pdf" },
      { title: "Executed Brownfield Cleanup Agreement transmittal (September 23, 2026) — C915419", publisher: dec, url: "https://extapps.dec.ny.gov/data/DecDocs/C915419/Agreement.BCP.C915419.2026-09-23.BCP%20Acceptance%20Package.pdf" },
      { title: "3701 River Road brownfield project documents — C915419", publisher: dec, url: "https://extapps.dec.ny.gov/data/DecDocs/C915419/" },
      { title: "DEC remediation GIS — marker authority C915419, retrieved October 26, 2026", publisher: "NYSDEC", url: gisUrl },
    ],
    story: {
      lastReviewed: "October 26, 2026",
      background: [
        "Roux's 2024 investigation places this 3.2-acre parcel within a former petroleum-refining landscape. Historical photographs show a bulk storage tank east of a former fueling-rack building between at least 1951 and 1985. Directory entries identify successive petroleum businesses; they do not identify the source of each release.",
        "In 2024 the property included a vacant commercial building and a landscape-supply operation. Its industrial setting uses public drinking water; groundwater sampling here is not evidence of contamination in that public supply.",
      ],
      timeline: [
        { period: "1951–1985 photographic record", event: "Historical imagery reviewed by Roux shows bulk petroleum storage beside the former fueling-rack building." },
        { period: "August–October 2024", event: "Test pits, soil borings, and temporary wells documented petroleum impacts; Roux recommended remediation and DEC review." },
        { period: "June 2026", event: "DEC announced a brownfield application and draft investigation plan for public review." },
        { period: "September 23, 2026", event: "DEC transmitted the executed Brownfield Cleanup Agreement for C915419." },
      ],
      documentedImpacts: [
        "Roux found petroleum VOCs above applicable petroleum soil-cleanup levels in four of eight analyzed soil samples. Some PAHs exceeded soil objectives at one test pit. Groundwater VOC exceedances occurred in two of four sampled temporary wells; results varied across the property.",
        "Two selected soil samples were also analyzed for lead: total lead was below the unrestricted-use objective and tetraethyl lead was not detected. That limited result does not establish conditions in all unsampled soil.",
      ],
      cleanupAndControls: [
        "The 2024 investigation recommended remediation under the spill program. Its recommendation to pursue no-further-action status was conditional on remediation; it was not a finding that cleanup had already occurred.",
        "The September 2026 agreement establishes a state-supervised brownfield process. The reviewed records do not establish a completed remedy or Certificate of Completion.",
      ],
      presentDay: [
        "This is an accepted brownfield investigation with documented petroleum impacts. Future reporting should distinguish work proposed, work approved, construction completed, and cleanup certified.",
      ],
      researchNotes: [
        "Review the subsequent fingerprinting assessment, approved investigation, and DEC decisions before naming a particular historical operator as the source or drawing an off-site plume.",
        "Marker: DEC GIS point C915419, retrieved October 26, 2026; not the former refinery footprint or a groundwater boundary.",
      ],
    },
  },
  {
    id: "olin-industrial-welding",
    updateNote: "Added the separate Olin disposal property, creek cleanup, containment system, and the July 2026 monitoring findings and limits.",
    name: "Olin / Industrial Welding Disposal Site",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary: "Olin's former research and disposal property beside Gill Creek contains mercury-bearing brine wastes and pesticide-related contamination. Creek sediment removal, capped consolidation, leachate collection, and restrictions created a continuing containment remedy. The 2026 report documents both functioning controls and specific monitoring exceedances.",
    evidenceStatus: "well-documented",
    coordinates: [-79.02617434310837, 43.08371594014158],
    sources: [
      { title: "Olin Industrial Welding Record of Decision (1994), site history and selected remedy", publisher: dec, url: "https://extapps.dec.ny.gov/data/DecDocs/932050/ROD.HW.932050.1994-11-03.olin_industrial_ou1_ou2.pdf" },
      { title: "Industrial Welding OU3 Record of Decision (2006)", publisher: dec, url: "https://extapps.dec.ny.gov/data/DecDocs/932050/ROD.HW.932050.2006-03-24.olin_industrial_ou3.pdf" },
      { title: "Industrial Welding 2026 periodic review, revised July 8, sections 1, 4.2, and 6", publisher: "Olin / WSP, DEC document repository", url: "https://extapps.dec.ny.gov/data/DecDocs/932050/Report.HW.932050.2026-07-08.2026_PRR.pdf" },
      { title: "Industrial Welding management plan (2008), OU3 cover and drainage requirements", publisher: dec, url: "https://extapps.dec.ny.gov/data/DecDocs/932050/Work%20Plan.HW.932050.2008-08-19.Site_Management_Plan_without_easement_attachment.pdf" },
      { title: "DEC remediation GIS — marker authority 932050, retrieved October 26, 2026", publisher: "NYSDEC", url: gisUrl },
    ],
    story: {
      lastReviewed: "October 26, 2026",
      background: [
        "This Packard Road/Veterans Drive property explains a waste destination separate from Olin's Buffalo Avenue production plant. A former marsh beside Gill Creek received brine-process waste, ash, and demolition material. The 1994 decision identifies mercury, BHC compounds, and PAHs as major concerns.",
        "The 2026 review dates Olin's High Energy Fuels research laboratory and pilot plant here to 1952–1956. Its later disposal history and investigation reached beyond the original waste area into adjoining land and creek sediment. The properties became separate cleanup units rather than one uniform excavation.",
      ],
      timeline: [
        { period: "1952–1956", event: "Olin's High Energy Fuels division operated a research laboratory and pilot plant; demolition and filling followed." },
        { period: "1981–1993", event: "Sampling and remedial investigation identified contaminated waste, soil, groundwater, and Gill Creek sediment." },
        { period: "1994–1999", event: "DEC selected containment and sediment removal; the 2026 history records creek work completed in 1998 and the management record dates the original site's remediation to 1999." },
        { period: "2006–2008", event: "A separate decision and asphalt-cover work addressed the southern Packard Road unit, with management requirements added to the site program." },
        { period: "July 2026", event: "The revised annual review evaluated conditions and remedy operation from May 2025 through May 2026." },
      ],
      documentedImpacts: [
        "The original investigation found mercury and BHC compounds in soils and groundwater and affected sediment in the adjacent creek. Historical sampling is evidence of conditions requiring remediation, not a measurement of present exposure at nearby homes.",
        "Section 4.2 of the 2026 review reports spring mercury of 16.3 µg/L and beta-BHC of 0.22 µg/L in monitoring well MW-2, above the groundwater comparison standards used in the report. Its surface-water discharge sample also had mercury and/or beta-BHC exceedances during the reporting period. These are identified monitoring points, not drinking-water samples or a mapped creek-wide condition.",
      ],
      cleanupAndControls: [
        "The selected remedy consolidates affected material beneath cover, limits groundwater movement through the waste, collects leachate, and restricts land use. Creek sediment excavation addressed an adjoining pathway rather than removing the entire buried source.",
        "The southern unit's management plan requires inspection of its asphalt cover, fence, drainage, and stormwater sampling system. Continued integrity matters because the remedy leaves contaminated material in place.",
      ],
      presentDay: [
        "Olin's 2026 review concludes that hydraulic control and the remedy remain effective and identifies no new exposure pathways. That conclusion must be read alongside its specific analytical exceedances; it is the operator's submitted assessment, not a separate DEC finding that every sample met standards.",
      ],
      researchNotes: [
        "Seek DEC's response to the 2026 report, follow-up on monitoring exceedances, and completion of the proposed retirement of an unused piezometer. Older records and the latest report use differing operable-unit labels; use each document's map when assigning a unit number.",
        "Marker: DEC GIS point 932050. EPA's legacy inventory lists a conflicting coordinate; the Atlas uses DEC's mapped cleanup property, not that legacy federal location.",
      ],
    },
  },
  {
    id: "durez-packard-road",
    updateNote: "Added Packard Road's resin plant, waste incinerator, and groundwater remedy, distinguished from North Tonawanda Durez.",
    name: "Durez Niagara / Packard Road Resin Plant",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary: "The phenolic-resin plant at 5000 Packard Road has its own hazardous-waste incinerator and groundwater-containment history. It is separate from the former North Tonawanda Durez works and Pettit Flume. DEC's June 2026 notice describes a proposed air-permit renewal for the Niagara Falls operation.",
    evidenceStatus: "well-documented",
    coordinates: [-79.00219642326812, 43.10018984299492],
    sources: [
      { title: "Durez Niagara Falls corrective-action cleanup profile, updated April 2026", publisher: "U.S. Environmental Protection Agency", url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-durez-corporation-niagara-falls-new-york" },
      { title: "Durez Niagara Title V renewal application notice (June 24, 2026)", publisher: "NYSDEC", url: "https://dec.ny.gov/news/environmental-notice-bulletin/2026-06-24/completed-application/city-of-niagara-falls-durez-niagara" },
      { title: "Durez Packard Road hazardous-waste permit renewal fact sheet (2013)", publisher: "NYSDEC", url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/durezfactsheet.pdf" },
      { title: "DEC remediation GIS — marker authority 932040, retrieved October 26, 2026", publisher: "NYSDEC", url: gisUrl },
    ],
    story: {
      lastReviewed: "October 26, 2026",
      background: [
        "Phenolic-resin manufacture at 5000 Packard Road creates both a product history and a waste-management history. DEC describes resins used in adhesives and protective coatings, with reactor washings and process wastewater requiring treatment.",
        "This Niagara Falls plant is distinct from the former Durez works in North Tonawanda. Shared corporate history does not transfer Pettit Flume's sediment findings to Packard Road.",
      ],
      timeline: [
        { period: "Before final corrective measures", event: "Interim work removed a lagoon and affected soil, improved tank areas, and installed cover and groundwater collection." },
        { period: "1995–2013 permit record", event: "The corrective-action program relied on continued operation of groundwater controls and monitoring." },
        { period: "June 24, 2026", event: "DEC announced a draft Title V air-permit renewal describing resin production and a process-wastewater hazardous-waste incinerator." },
      ],
      documentedImpacts: [
        "EPA identifies releases to fill, soil, and groundwater. Its account distinguishes shallow groundwater from a more extensive bedrock plume whose concentrations decrease off site.",
        "Hazardous waste handled by the plant includes solvent washings, spilled feedstocks, and laboratory wastes. A waste inventory or incinerator permit does not by itself establish an off-site exposure or an air-permit violation.",
      ],
      cleanupAndControls: [
        "Containment combines asphalt cover, shallow drain collection, and bedrock groundwater collection. EPA reports that these controls and continued monitoring meet the remedial design objectives.",
        "The June 2026 air notice describes an enclosed thermal oxidizer and waste-heat boiler treating aqueous process waste. Air-permit renewal and groundwater corrective action are separate regulatory decisions.",
      ],
      presentDay: [
        "The 2026 notice documents an operating resin-production and waste-treatment facility seeking permit renewal. The notice is not the final renewed permit or a new cleanup-completion finding.",
      ],
      researchNotes: [
        "Review the final air permit, emissions testing, annual groundwater reports, and residue-shipment records before adding current emission quantities or disposal destinations.",
        "Marker: DEC GIS point 932040, retrieved October 26, 2026. It represents the Packard Road cleanup record, not North Tonawanda's 932018 property.",
      ],
    },
  },
];
