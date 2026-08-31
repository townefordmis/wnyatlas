import type { AtlasSite } from "@/types/site";

const decSuccessStories =
  "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/der-success-stories";
const decEasements =
  "https://dec.ny.gov/environmental-protection/site-cleanup/brownfield-and-state-superfund-programs/finalizing-remedial-projects/sites-with-environmental-easements";

export const historicCleanupExpansion: AtlasSite[] = [
  {
    id: "webb-road-grand-island",
    name: "Webb Road Site",
    municipality: "Grand Island",
    county: "Erie",
    category: "cleanup",
    summary:
      "A 24.32-acre group of vacant and underused parcels at Baseline Road and Grand Island Boulevard entered New York's Brownfield Cleanup Program after investigations identified environmental impacts requiring additional study and remediation. The record gives Grand Island its first site-specific brownfield entry in the atlas.",
    evidenceStatus: "well-documented",
    coordinates: [-78.9615764545719, 43.015747787265],
    newsEvents: [{ date: "June-July 2021", headline: "Three Grand Island parcels enter public brownfield review", summary: "DEC opened the 24.32-acre Webb Road application for comment and established a local document repository, beginning a parcel-defined investigation rather than labeling the wider neighborhood a cleanup site.", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/C915379/", reach: "Local" }],
    story: {
      lastReviewed: "July 27, 2026",
      background: [
        "The Webb Road Site consists of three parcels totaling 24.32 acres near Baseline Road and Grand Island Boulevard. The land was vacant or underused when Rivertown Center Holdings applied to enter it in New York's Brownfield Cleanup Program.",
        "Earlier environmental work prompted the applicant to propose additional investigation and remediation before redevelopment. The state brownfield file, rather than the wider Webb Road neighborhood, defines the place represented by this marker.",
      ],
      timeline: [
        {
          period: "Before 2021",
          event:
            "Environmental assessments and a Phase II investigation evaluated the three undeveloped parcels and identified conditions requiring further work.",
        },
        {
          period: "2021",
          event:
            "Rivertown Center Holdings applied to enter the 24.32-acre property in New York's Brownfield Cleanup Program.",
        },
        {
          period: "June–July 2021",
          event:
            "DEC opened the application for public comment and established the Grand Island Memorial Library as a document repository.",
        },
        {
          period: "Brownfield program",
          event:
            "Additional investigation, remedy selection, cleanup, and redevelopment review proceed through the state site file.",
        },
      ],
      documentedImpacts: [
        "The brownfield application describes the property as environmentally impacted and requiring additional investigation and remediation.",
        "The documented site is limited to three identified tax parcels; evidence does not support extending the marker to surrounding homes or the broader Webb Road area.",
        "Contaminants, affected media, and cleanup boundaries should be reported from the latest DEC investigation and decision records rather than inferred from former land use alone.",
      ],
      cleanupAndControls: [
        "Participation in the Brownfield Cleanup Program provides state oversight for investigation, remedy selection, cleanup verification, and any required long-term controls.",
        "Future redevelopment must be evaluated against the remedy and the level of use approved by DEC.",
        "The DEC document repository remains the authoritative source for current milestones and completion status.",
      ],
      presentDay: [
        "Webb Road is an active brownfield record, not a completed cleanup. The atlas should update its status when DEC posts a remedial investigation, decision document, certificate of completion, or site-management requirements.",
      ],
      researchNotes: [
        "Extract the contaminant and media tables from the final remedial investigation when available.",
        "Confirm the present brownfield agreement status and whether the proposed redevelopment or parcel configuration has changed.",
      ],
    },
    sources: [
      {
        title: "Webb Road Site Brownfield Cleanup Program Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915379/",
      },
      {
        title: "Webb Road Site Brownfield Application Public Notice",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2021-06-23/the-new-york-state-department-of-environmental-conservation-nys-dec-has-received-a-brownfield-cleanup-program-bcp-application-from-rivertown-center-holdings-llc-for-a-site-known-as-webb-road-site-site-id",
      },
    ],
  },
  {
    id: "motor-frog-islands-restoration",
    name: "Motor and Frog Islands Restoration",
    municipality: "Grand Island / Niagara River",
    county: "Erie",
    category: "waterway",
    summary:
      "Upper Niagara River habitat-restoration cluster centered on Motor Island and the former Frog Island shallows. A private boating club and bulkhead altered Motor Island, while historic gravel removal eliminated small islands nearby. Shoreline reconstruction and a recreated wetland complex now restore some of the lost shallow-water habitat.",
    evidenceStatus: "well-documented",
    coordinates: [-78.934036, 42.964515],
    story: {
      lastReviewed: "July 27, 2026",
      background: [
        "Motor Island was developed for a private motorboat club, including marina facilities and a vertical bulkhead that replaced most of its natural shoreline. After boating use was abandoned, its trees became important nesting habitat for colonial waterbirds.",
        "Between Motor and Strawberry islands, historic gravel extraction removed a small group of islands and left comparatively uniform shallow water. The Niagara River Area of Concern restoration program later treated both places as opportunities to rebuild habitat complexity.",
      ],
      timeline: [
        {
          period: "Historic development",
          event:
            "A private motorboat club, marina facilities, and a bulkhead substantially altered Motor Island's shoreline.",
        },
        {
          period: "Historic extraction",
          event:
            "Small islands between Motor and Strawberry islands were mined for gravel and eventually disappeared beneath the river.",
        },
        {
          period: "1998",
          event:
            "New York acquired the 6.3-acre Motor Island to protect colonial nesting birds and important fish habitat.",
        },
        {
          period: "2012–2013",
          event:
            "Habitat projects restored natural shoreline features at Motor Island and reconstructed wetland and island structure in the former Frog Island area.",
        },
        {
          period: "2022",
          event:
            "DEC reviewed maintenance work intended to repair erosion and improve wave protection at the Frog Island habitat project.",
        },
      ],
      documentedImpacts: [
        "Marina development and a vertical bulkhead replaced much of Motor Island's natural shoreline.",
        "Gravel extraction removed former islands and simplified shallow-water habitat between Motor and Strawberry islands.",
        "Wave action, boat wakes, ice, and high water continued to erode reconstructed planting areas.",
        "This is a habitat-loss and restoration record; the sources do not identify Motor or Frog Island as a hazardous-waste disposal site.",
      ],
      cleanupAndControls: [
        "Motor Island's bulkheaded edge was regraded and shallow-water shoreline habitat was reconstructed.",
        "The Frog Island project added berms, planting substrates, boulders, logs, and marsh structure to recreate habitat in the former island area.",
        "DEC management protects Motor Island's nesting colony; public access onto the island and beach is closed.",
      ],
      presentDay: [
        "Motor Island is a state wildlife management area and the reconstructed Frog Island complex is maintained as Niagara River habitat. The work repairs historic physical disturbance and habitat loss rather than documenting a conventional contaminated-site cleanup.",
      ],
      researchNotes: [
        "Add precise project polygons if DEC or the Power Authority publishes reusable construction geometry.",
        "Track the performance of repaired berms and emergent planting areas after high-water and ice events.",
      ],
    },
    sources: [
      {
        title: "Motor Island Wildlife Management Area",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/places/motor-island-wildlife-management-area",
      },
      {
        title: "Niagara River Area of Concern Habitat Restoration Plan Addendum",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/sites/default/files/2024-06/niagareaochabitat2019.pdf",
      },
      {
        title: "Frog Island Wetland Restoration Maintenance",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2022-07-27/completed-application/frog-island-wetland-restoration-hip",
      },
    ],
  },
  {
    id: "strawberry-island-restoration",
    name: "Strawberry Island Restoration",
    municipality: "Tonawanda / Niagara River",
    county: "Erie",
    category: "waterway",
    summary:
      "Historic gravel mining and persistent erosion greatly reduced and reshaped Strawberry Island. Successive shoreline stabilization and wetland projects protected the surviving island and rebuilt riverine marsh habitat within the Niagara River Area of Concern.",
    evidenceStatus: "well-documented",
    coordinates: [-78.9289, 42.9389],
    story: {
      lastReviewed: "July 27, 2026",
      background: [
        "Strawberry Island once occupied a much larger footprint in the upper Niagara River. Historic sand and gravel removal altered its form, and later ice, waves, and boat wakes accelerated erosion of the remaining shoreline.",
        "Beginning in the 1990s, state agencies undertook several phases of breach repair, shoreline protection, revegetation, and marsh creation. The work became part of the larger effort to restore habitat impairments in the Niagara River Area of Concern.",
      ],
      timeline: [
        {
          period: "Historic extraction era",
          event:
            "Sand and gravel mining reduced and reshaped Strawberry Island.",
        },
        {
          period: "1993–1997",
          event:
            "After a major breach, agencies repaired the island, stabilized approximately 1,400 feet of shoreline, and planted trees and shrubs.",
        },
        {
          period: "2002",
          event:
            "A third restoration phase created approximately three acres of riverine marsh and installed protective breakwall.",
        },
        {
          period: "2018",
          event:
            "A wetland-restoration project added roughly seven acres of habitat and continued shoreline protection.",
        },
        {
          period: "2022",
          event:
            "DEC reviewed repairs to eroded berms and planting areas within the habitat-improvement project.",
        },
      ],
      documentedImpacts: [
        "Historic aggregate mining removed island material and changed the surrounding shallow-water environment.",
        "Ice, waves, wakes, and high water caused breaches, shoreline retreat, and loss of wetland habitat.",
        "The island lies within a river historically impaired by industrial and municipal pollution, but the restoration sources principally document physical habitat loss rather than a discrete hazardous-waste source on the island.",
      ],
      cleanupAndControls: [
        "Stone protection repaired breaches and stabilized vulnerable shoreline.",
        "Breakwalls and low-profile berms reduced wave energy and sheltered new marsh areas.",
        "Native wetland, tree, and shrub planting rebuilt fish and wildlife habitat.",
        "Periodic maintenance replaces eroded material and protects the long-term restoration investment.",
      ],
      presentDay: [
        "Strawberry Island remains an undeveloped conservation and habitat-restoration site. Its changing footprint is a visible record of extraction, erosion, and active ecological repair in the upper Niagara River.",
      ],
      researchNotes: [
        "Compare historic navigation charts and aerial photographs to quantify the island's changing acreage.",
        "Track post-2022 maintenance and vegetation monitoring for the reconstructed marsh areas.",
      ],
    },
    sources: [
      {
        title: "Niagara River Area of Concern Habitat Restoration Plan Addendum",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/sites/default/files/2024-06/niagareaochabitat2019.pdf",
      },
      {
        title: "Strawberry Island Habitat Improvement Project Maintenance",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2022-07-27/completed-application/strawberry-island-0",
      },
    ],
  },
  {
    id: "durez-occidental-north-tonawanda",
    name: "Durez / Occidental Chemical",
    municipality: "North Tonawanda",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Historic chemical-manufacturing property near Walck and River roads. The closed Class 4 State Superfund site remains under management; DEC's sediment inventory identifies adjacent sediment affected by chlorinated dioxins and furans. The facility, groundwater, outfalls, and sediment require separate but connected interpretation.",
    evidenceStatus: "well-documented",
    coordinates: [-78.86006033, 43.04655837],
    newsEvents: [
      {
        date: "November 28, 1949",
        headline: "Gas in the enclosed Pettit Creek system is linked to basement explosions",
        summary: "The North Tonawanda History collection preserves a contemporary Tonawanda News article about emergency response to explosions associated with gas in the covered flume. It documents the event and contemporary explanation; it does not by itself establish the complete chemical source profile later developed by investigators.",
        publisher: "North Tonawanda History / Tonawanda News archive",
        url: "https://nthistory.com/collections/show/98",
        reach: "Local",
      },
      {
        date: "January 28, 1953",
        headline: "Hundreds of fish die in a documented Pettit Flume pollution event",
        summary: "A preserved local-news image records a visible ecological consequence during the Durez operating era, decades before the later dioxin, sediment-removal, and biomonitoring programs.",
        publisher: "North Tonawanda History / Tonawanda News archive",
        url: "https://nthistory.com/collections/show/98",
        reach: "Local",
      },
      {
        date: "1997-2006",
        headline: "Post-remedy mussel and sediment monitoring continues to detect Durez-pattern dioxins and furans",
        summary: "Binational Niagara River reports documented continuing bioavailability after major removals, maintenance dredging in 2000, and additional monitoring rather than treating construction completion as the end of the environmental record.",
        publisher: "Niagara River Toxics Management Plan",
        url: "https://www.epa.gov/sites/default/files/2015-11/documents/niagara-river-nrtmp-progress-report-workplan-2007-74pp.pdf",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Durez / Occidental Chemical Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932018/",
      },
      {
        title: "DEC Sediment Cap and Contamination Layer",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://gisservices.dec.ny.gov/arcgis/rest/services/dil/dil_clean_up/MapServer/5",
      },
      {
        title: "Durez North Tonawanda Site History and Drainage Improvement Plan",
        publisher: "New York State Department of Environmental Conservation document repository",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932018/Work%20Plan.HW.932018.2012-08-28.OMM_SiteDrainageImprovement_PlantSite_rev1.pdf",
      },
      {
        title: "Durez Groundwater Monitoring Plan",
        publisher: "New York State Department of Environmental Conservation document repository",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932018/Work%20Plan.HW.932018.2024-06-18.Workplan%20for%20Evaluation%20of%20Groundwater%20Quality_Final.pdf",
      },
      {
        title: "Durez Aquatic Assessment Work Plan",
        publisher: "New York State Department of Environmental Conservation document repository",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932018/Work%20Plan.HW.932018.2021-07-16.Aquatic%20Assess%20Work%20Plan_Final.pdf",
      },
    ],
  },
  {
    id: "chemical-leaman-tank-lines",
    name: "Chemical Leaman Tank Lines",
    municipality: "Tonawanda",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former chemical tank-truck terminal and cleaning property on Fillmore Avenue. The active Class 2 State Superfund site covers roughly 15 acres and is subject to an environmental easement, making it an important companion to the River Road chemical and transportation corridor.",
    evidenceStatus: "well-documented",
    coordinates: [-78.86055311, 43.01276013],
    sources: [
      {
        title: "Chemical Leaman Tank Lines Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915014/",
      },
      {
        title: "Chemical Leaman Environmental Easement",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/915014e.pdf",
      },
    ],
  },
  {
    id: "5565-river-road",
    name: "5565 River Road",
    municipality: "Tonawanda",
    county: "Erie",
    category: "cleanup",
    summary:
      "Active Class 2 State Superfund property within Tonawanda's River Road industrial corridor. DEC's sediment inventory identifies PCB-affected sediment associated with the site, requiring the upland property and Niagara River edge to be understood together without assuming one corridor-wide plume.",
    evidenceStatus: "well-documented",
    coordinates: [-78.908915, 43.002985],
    newsEvents: [
      {
        date: "2013 onward",
        headline: "Investigation begins at a River Road property linked to PCB-affected shoreline sediment",
        summary: "The state investigation connected the upland industrial property to a defined Niagara River sediment concern while preserving the distinction between this site and the many other River Road sources.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/5565rrfs.pdf",
        reach: "Local",
      },
      {
        date: "Active cleanup phase",
        headline: "A small industrial parcel becomes part of the larger public riverfront question",
        summary: "Residents evaluating River Road reuse need both upland and shoreline records; the marker does not represent the former Tonawanda Coke property or a corridor-wide plume.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915239/",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "5565 River Road Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915239/",
      },
      {
        title: "DEC Sediment Cap and Contamination Layer",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://gisservices.dec.ny.gov/arcgis/rest/services/dil/dil_clean_up/MapServer/5",
      },
    ],
  },
  {
    id: "tennessee-gas-station-229",
    name: "Tennessee Gas Pipeline Station 229",
    municipality: "Eden",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former pipeline-compressor station cleanup on East Eden Road. The closed Class 4 site remains managed, and DEC maps PCB-affected sediment over a substantial drainage area, adding an important rural industrial-contamination story to the atlas.",
    evidenceStatus: "well-documented",
    coordinates: [-78.8302482, 42.67695649],
    newsEvents: [
      {
        date: "Long-term cleanup record",
        headline: "A rural compressor station leaves a PCB sediment-management footprint",
        summary: "DEC's public record documents why the Station 229 story extends beyond machinery at the plant: PCB-affected drainage and sediment areas remain part of a closed Class 4 remedy requiring continued stewardship.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915140/",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Tennessee Gas Pipeline Station 229 Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915140/",
      },
      {
        title: "DEC Sediment Cap and Contamination Layer",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://gisservices.dec.ny.gov/arcgis/rest/services/dil/dil_clean_up/MapServer/5",
      },
    ],
  },
  {
    id: "weber-knapp-company",
    name: "Weber-Knapp Company",
    municipality: "Jamestown",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Historic manufacturing property on Chandler Street where chlorinated solvents affected environmental media. DEC records an installed clean-stone sediment cover and an environmental easement over approximately 2.65 acres.",
    evidenceStatus: "well-documented",
    coordinates: [-79.225, 42.099166667],
    newsEvents: [{ date: "2019-2022", headline: "Groundwater treatment begins beside the Chadakoin River", summary: "Brownfield work at the historic factory installed groundwater extraction and treatment and a clean-stone sediment cover, joining upland solvent control with a distinct river-edge remedy and long-term easement.", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/C907048/", reach: "Local" }],
    sources: [
      {
        title: "Weber-Knapp Company Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C907048/",
      },
      {
        title: "DEC Sediment Cap and Contamination Layer",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://gisservices.dec.ny.gov/arcgis/rest/services/dil/dil_clean_up/MapServer/5",
      },
    ],
  },
  {
    id: "pvs-chemicals-buffalo",
    name: "PVS Chemicals",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Sulfur-chemical plant at 55 Lee Street developed within the former Allied Chemical complex and purchased by PVS in 1981. Historical sulfuric-acid, sulfur dioxide, ammonia, and related operations created a separate soil-and-groundwater cleanup record from neighboring Buffalo Color; the defined property remains an active Class 2 State Superfund site.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.84121737, 42.86472756],
    newsEvents: [
      {
        date: "1996-2003",
        headline: "Acid releases and failing containment produce enforcement and groundwater work",
        summary: "State and Buffalo River records describe leaking pipes, broken valves, equipment failures, air and water violations, replacement equipment, a treatment facility, and quarterly groundwater monitoring.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/brr1.pdf",
        reach: "Regional",
      },
      {
        date: "2021-2026",
        headline: "Odor and sulfur-dioxide concerns change how neighboring athletic land can be used",
        summary: "DEC temporarily stopped operations in 2021 after emissions concerns near athletic fields; later reporting documented continued debate over whether intensive recreation was compatible beside an operating sulfur-chemical plant.",
        publisher: "WKBW",
        url: "https://www.wkbw.com/news/local-news/state-orders-business-to-temporarily-shut-down-buffalo-plant",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "PVS Chemicals Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915004/",
      },
      {
        title: "Buffalo River Groundwater Injury Determination Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/brr1.pdf",
      },
      {
        title: "EPA Facility Registry Report — PVS Chemical Solutions",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://frs-public.epa.gov/ords/frs_public2/fii_query_detail.disp_program_facility?p_registry_id=110000326996",
      },
    ],
  },
  {
    id: "depew-village-landfill",
    name: "Depew Village Landfill",
    municipality: "Depew",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former 1940–1961 village landfill and incinerator beside Cayuga Creek. A halted 2001 streambank project exposed hazardous lead-bearing fill, prompting a larger State Superfund investigation and a two-part remedy for the landfill, creek bank, sediment, methane, and erosion pathways. Long-term monitoring and site management continue.",
    evidenceStatus: "well-documented",
    coordinates: [-78.704797222, 42.8979],
    newsEvents: [
      {
        date: "2001",
        headline: "A creek-bank project uncovers hazardous lead and stops work",
        summary: "Army Corps excavation along Zurbrick Road encountered fill with lead up to 86,000 ppm and material that failed the hazardous-waste leaching test, revealing that the former landfill extended beyond its small registry parcel.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915105/Report.HW.915105.2007-03-19.Final_RI_Report.pdf",
        reach: "Local",
      },
      {
        date: "2022–2023 review",
        headline: "Long-term review finds the creek-edge remedy protective with maintenance still required",
        summary: "DEC's periodic review kept annual inspection and water and sediment monitoring in place and identified well repair and seep sampling work—an example of a completed remedy still needing active stewardship.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915105/Report.HW.915105.2024-02-14.Depew%20Village%20Landfill%202023%20PRR.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Depew Village Landfill Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915105/",
      },
      {
        title: "Depew Village Landfill Operable Unit 1 Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915105/ROD.HW.915105.2008-03-27.Depew_Village_Landfill_OU-01.pdf",
      },
      {
        title: "Depew Village Landfill 2023 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915105/Report.HW.915105.2024-02-14.Depew%20Village%20Landfill%202023%20PRR.pdf",
      },
    ],
  },
  {
    id: "lockport-city-landfill",
    name: "Lockport City Landfill",
    municipality: "Lockport",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former municipal landfill on Oakhurst Road. New York classifies the site as properly closed while requiring continuing management, distinguishing containment and stewardship from unrestricted reuse.",
    evidenceStatus: "well-documented",
    coordinates: [-78.72370647324514, 43.17286010406627],
    newsEvents: [{ date: "1992-1995", headline: "Lockport caps its municipal landfill and enters long-term monitoring", summary: "The selected remedy and city planning record document cap construction, substantial completion and continuing maintenance and monitoring—closure by containment rather than removal of the landfill mass.", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/932010/ROD.HW.932010.1992-11-01.ROD.pdf", reach: "Local" }],
    sources: [
      {
        title: "Lockport City Landfill Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932010/",
      },
      {
        title: "Lockport City Landfill Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932010/ROD.HW.932010.1992-11-01.ROD.pdf",
      },
      {
        title: "Old Upper Mountain Road Cleanup Community Update",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932112/Fact%20Sheet.HW.932112.2023-12-21.Old%20Upper%20Mountain%20Road%20Community%20Newsletter.pdf",
      },
    ],
  },
  {
    id: "batavia-iron-and-metal",
    name: "Batavia Iron and Metal",
    municipality: "Batavia",
    county: "Genesee",
    category: "cleanup",
    summary:
      "Former scrap-metal and metal-processing property at 301 Bank Street. The active Class 2 State Superfund site gives Batavia a second major industrial-cleanup story beyond the municipal landfill.",
    evidenceStatus: "well-documented",
    coordinates: [-78.177060007, 43.008938506],
    newsEvents: [
      {
        date: "September 27, 2012",
        headline: "Ton by ton, a former scrapyard is cleared beside Dwyer Stadium",
        summary: "Local coverage followed the visible removal of contaminated material and the city's attempt to return the long-idle Bank Street property to productive use; DEC required community air monitoring during excavation and backfilling.",
        publisher: "The Batavian",
        url: "https://www.thebatavian.com/jfbeck99272012/ton-by-ton-city-brownfield-site-gets-restored-for-future-use/637107",
        reach: "Local",
      },
      {
        date: "2022-2025",
        headline: "Additional field findings reshape the long-planned remedy",
        summary: "DEC construction notices and its later project spotlight document excavation, off-site disposal, groundwater treatment, vapor mitigation, and changes made after investigation refined contamination on and near the property.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/sites/default/files/2025-08/819018spotlight.pdf",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Batavia Iron and Metal Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/819018/",
      },
      {
        title: "Batavia Iron and Metal Explanation of Significant Difference",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/der/factsheet/819018esd.pdf",
      },
      {
        title: "Batavia Iron and Metal Cleanup Project Spotlight",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/sites/default/files/2025-08/819018spotlight.pdf",
      },
    ],
  },
  {
    id: "lehigh-valley-railroad-derailment",
    name: "Lehigh Valley Railroad Derailment",
    municipality: "Le Roy",
    county: "Genesee",
    category: "cleanup",
    summary:
      "December 1970 derailment at Gulf Road where two tank cars released about 30,000 gallons of TCE and another partially released cyanide. TCE entered fractured bedrock, producing an approximately four-mile groundwater plume across parts of Genesee, Livingston, and Monroe counties; EPA selected the remaining multi-media remedy in 2023.",
    evidenceStatus: "research-in-progress",
    coordinates: [-77.93303124, 42.99226538],
    newsEvents: [
      {
        date: "December 6, 1970",
        headline: "A pre-dawn derailment releases TCE and cyanide at Gulf Road",
        summary: "The wreck lasted minutes, but unrecovered solvent entered fractured bedrock and ultimately created an approximately four-mile groundwater plume spanning parts of three counties.",
        publisher: "U.S. Environmental Protection Agency response archive",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/2ca1deede9b93cfd852579ac005eecfc.html",
        reach: "Regional",
      },
      {
        date: "1990s-2015",
        headline: "A hidden plume changes drinking water and household vapor protections",
        summary: "After the solvent plume was identified, affected properties received bottled water and treatment before public-water connections were completed; vapor-mitigation systems were installed where sampling identified a building pathway.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/newsreleases/epa-finalizes-cleanup-plan-lehigh-valley-railroad-derailment-superfund-site-genesee",
        reach: "Local",
      },
      {
        date: "September 2023",
        headline: "EPA finalizes the remaining cleanup more than fifty years later",
        summary: "The remedy addresses source soil, groundwater, Mud Creek, vapor intrusion, monitoring, and institutional controls—evidence of how a transportation accident became a generational water problem.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/newsreleases/epa-finalizes-cleanup-plan-lehigh-valley-railroad-derailment-superfund-site-genesee",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Lehigh Valley Railroad Derailment Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/819014/",
      },
      {
        title: "Lehigh Valley Railroad Derailment 2023 Record of Decision",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P101GB3R.txt",
      },
      {
        title: "EPA Finalizes Lehigh Valley Railroad Cleanup Plan",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/newsreleases/epa-finalizes-cleanup-plan-lehigh-valley-railroad-derailment-superfund-site-genesee",
      },
    ],
  },
  {
    id: "harrison-radiator-lockport",
    name: "Harrison Radiator Division, GMC",
    municipality: "Lockport",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Major automotive-component manufacturing property on Upper Mountain Road. DEC's closed remediation record provides a Lockport counterpart to Buffalo's former GM and American Axle complex and preserves the environmental history behind a major regional employer.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.742012511, 43.165618767],
    newsEvents: [
      {
        date: "1987-1990",
        headline: "Five wastewater-sludge piles undergo hazardous-waste clean closure",
        summary: "DEC records required removal of sludge, waste residues and contaminated soil from five storage piles at the Upper Mountain Road plant, followed by confirmation sampling rather than reliance on surface appearance.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932017/Report.HW.932017.1990-09-20.closure_certification_vol2.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Harrison Radiator Division Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932017/",
      },
      {
        title: "Eighteenmile Creek Stage I and II Remedial Action Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/sites/default/files/2024-07/eighteenmilestagei%26iirap97.pdf",
      },
    ],
  },
  {
    id: "former-electruk-battery",
    name: "Former Electruk Battery",
    municipality: "Lockport",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former battery-related industrial property at 4922 IDA Park Drive. The completed environmental-restoration site remains under an approximately 1.35-acre easement restricting the controlled property to commercial and industrial use.",
    evidenceStatus: "well-documented",
    coordinates: [-78.7466, 43.1677],
    newsEvents: [
      {
        date: "2012",
        headline: "A county-led battery-site cleanup reaches controlled completion",
        summary: "The final engineering record and easement document a completed restoration with commercial and industrial use limits, groundwater restrictions and soil-management duties for future excavation.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/eltrkferr.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Former Electruk Battery Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/E932132/",
      },
      {
        title: "Former Electruk Battery Environmental Easement",
        publisher: "New York State Department of Environmental Conservation",
        url: "http://extapps.dec.ny.gov/docs/remediation_hudson_pdf/e932132e.pdf",
      },
      {
        title: "Former Electruk Battery Final Engineering Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/eltrkferr.pdf",
      },
    ],
  },
  {
    id: "stauffer-chemical-pasny",
    name: "Stauffer Chemical / PASNY",
    municipality: "Lewiston",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former chemical-plant property on Lewiston Road associated with a Power Authority of the State of New York parcel. The closed Class 4 site remains under an environmental easement covering approximately 23 acres.",
    evidenceStatus: "well-documented",
    coordinates: [-79.03306918, 43.14455465],
    newsEvents: [{ date: "Long-term management", headline: "A former chemical parcel remains controlled within a larger power-project landscape", summary: "DEC's Class 4 and easement records preserve approximately 23 acres of use, excavation and management restrictions; those controls apply to the defined Stauffer property rather than the entire Power Authority landscape.", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/932053/", reach: "Local" }],
    sources: [
      {
        title: "Stauffer Chemical / PASNY Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932053/",
      },
      {
        title: "Stauffer Chemical Environmental Easement",
        publisher: "New York State Department of Environmental Conservation",
        url: "http://extapps.dec.ny.gov/docs/remediation_hudson_pdf/e932053stauffer.pdf",
      },
      {
        title: "Stauffer Chemical / PASNY Remediation Database Record",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/cfmx/extapps/derexternal/haz/details.cfm?ProgNo=932053",
      },
    ],
  },
  {
    id: "frontier-chemical-pendleton",
    name: "Frontier Chemical — Pendleton",
    municipality: "Pendleton / North Tonawanda",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Closed Class 4 chemical cleanup site on Townline Road. This property is distinct from Frontier Chemical's Royal Avenue facility in Niagara Falls and is mapped separately to prevent their histories and remedies from being conflated.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.821419444, 43.087527778],
    newsEvents: [
      {
        date: "1992",
        headline: "New York selects removal and treatment for a small chemical-handling property",
        summary: "The state remedy addressed contaminated soil, tanks and containers, and groundwater rather than treating the Townline Road operation as part of Frontier Chemical's separate Niagara Falls facility.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932043/ROD.HW.932043.1992-03-02.frontier_chemical.pdf",
        reach: "Local",
      },
      {
        date: "1990s-present",
        headline: "The visible chemical inventory leaves; groundwater stewardship remains",
        summary: "Long-term reports track the remedy, monitoring, and institutional controls after source removal. The documented human consequence is prolonged uncertainty and land-use management, not a verified finding of illness among neighbors.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932043/",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Frontier Chemical — Pendleton Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932043/",
      },
      {
        title: "Frontier Chemical — Pendleton Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932043/ROD.HW.932043.1992-03-02.frontier_chemical.pdf",
      },
      {
        title: "Frontier Chemical — Pendleton 2025 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932043/Report.HW.932043.2025-11-13.Revised_2025_PRR.pdf",
      },
    ],
  },
  {
    id: "1660-niagara-street-sediment",
    name: "1660 Niagara Street Shoreline",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Niagara River shoreline sediment area associated with the 1660 Niagara Street cleanup record. DEC identifies PCB-affected sediment here; the marker represents the documented sediment boundary and should not be generalized to the entire upper Niagara River shoreline.",
    evidenceStatus: "well-documented",
    coordinates: [-78.8978, 42.9295],
    newsEvents: [
      {
        date: "2015-2017",
        headline: "A planned waterfront park is delayed when industrial contamination complicates construction",
        summary: "Local reporting connected the public-access project to petroleum, PCB, metals, VOC, urban-fill, and shoreline-sediment questions that required phased investigation before redevelopment could proceed.",
        publisher: "Spectrum News",
        url: "https://spectrumlocalnews.com/mo/st-louis/news/2017/09/7/1660-niagara-street-construction-delay",
        reach: "Local",
      },
      {
        date: "Cleanup phase",
        headline: "A Black Rock shoreline parcel becomes both a brownfield and a river-sediment project",
        summary: "The land cleanup and PCB-affected shoreline sediment are related but distinct scopes; park construction does not by itself establish that the adjoining aquatic remedy is complete.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915311/",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "1660 Niagara Street Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915311/",
      },
      {
        title: "DEC Sediment Cap and Contamination Layer",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://gisservices.dec.ny.gov/arcgis/rest/services/dil/dil_clean_up/MapServer/5",
      },
      {
        title: "1660 Niagara Street Remediation Database Record",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/cfmx/extapps/derexternal/haz/details.cfm?ProgNo=C915311",
      },
    ],
  },
  {
    id: "union-ship-canal-hanna-furnace",
    name: "Union Ship Canal / Hanna Furnace",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former Hanna Furnace waterfront where industrial fill, furnace waste, petroleum, groundwater, and canal sediment required cleanup. Crews removed debris, covered surrounding land, and stabilized the canal walls. Contaminated sediment east of Route 5 was isolated beneath geotextile, stone, and gravel. The remediated landscape is now Ship Canal Commons.",
    evidenceStatus: "well-documented",
    coordinates: [-78.8514, 42.835],
    newsEvents: [
      {
        date: "2001-2005",
        headline: "Demolition and cleanup begin turning Hanna Furnace into a controlled waterfront landscape",
        summary: "The remedy removed structures and debris, addressed contaminated soil and groundwater, and tied canal sediment controls to a shallow-water habitat plan rather than treating redevelopment as an ordinary construction project.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/B00164/ROD.ERP.B00164.2005-02-17.Record_of_Decision.pdf",
        reach: "Regional",
      },
      {
        date: "Great Lakes restoration phase",
        headline: "Contaminated canal sediment is capped while habitat is rebuilt above it",
        summary: "The canal demonstrates a containment remedy in public view: dredging, geotextile, stone, gravel, and habitat construction support reuse while long-term controls preserve the barrier.",
        publisher: "Erie County watershed project inventory",
        url: "https://www2.erie.gov/environment/index.php?order=field_wp_category_value&q=watershed-projects&sort=asc",
        reach: "Regional",
      },
    ],
    story: {
      lastReviewed: "July 27, 2026",
      background: [
        "The Union Ship Canal—originally called the Goodyear Canal—was constructed beginning in 1903 to connect Lake Erie shipping with the Buffalo and Susquehanna Iron Company, later Hanna Furnace. Freighters delivered iron ore and limestone to the canal, and bridge cranes transferred those raw materials to the adjoining pig-iron works.",
        "Hanna Furnace operated from 1902 until 1982. Its blast furnaces, rail yard, engine-repair area, waste-disposal areas, and extensive industrial fill left a complex environmental record in the land surrounding the canal and in the canal sediment itself.",
      ],
      timeline: [
        {
          period: "1902–1903",
          event:
            "Pig-iron production began and construction of the ship canal connected the furnace complex to Lake Erie.",
        },
        {
          period: "1910",
          event:
            "The canal was extended to support the growing furnace and bulk-material operation.",
        },
        {
          period: "1982",
          event:
            "Hanna Furnace ended pig-iron production, leaving a large underused industrial property.",
        },
        {
          period: "2001 onward",
          event:
            "Demolition and phased environmental work began across the former furnace property and Buffalo Lakeside Commerce Park.",
        },
        {
          period: "2010–2011",
          event:
            "The Union Ship Canal public-open-space remedy covered contaminated canal sediment, stabilized walls, installed upland covers, and created Ship Canal Commons.",
        },
      ],
      documentedImpacts: [
        "Furnace waste and soil contained elevated metals including lead, copper, chromium, arsenic, and selenium, together with cyanide and other industrial contaminants.",
        "Engine repair in the former rail yard created a documented petroleum-contaminated area.",
        "Canal sediment was contaminated and required an engineered cover rather than unrestricted disturbance or complete removal.",
        "Groundwater and the surrounding filled industrial land were evaluated and managed separately from the sediment remedy.",
      ],
      cleanupAndControls: [
        "Surface debris was removed and the park landscape was regraded beneath an imported clean-soil cover.",
        "Unstable portions of the northern and eastern canal walls were reinforced with an underwater berm.",
        "Sediment east of the Route 5 bridge was covered with geotextile filter fabric and approximately one foot of stone and gravel.",
        "An environmental easement and site-management requirements preserve the public passive-recreation assumptions of the remedy.",
      ],
      presentDay: [
        "Ship Canal Commons provides trails, habitat, fishing access, and public interpretation around the surviving canal. Its public use rests on an engineered brownfield remedy: contaminated sediment and residual upland material remain managed beneath covers and controls.",
      ],
      researchNotes: [
        "Map the sediment-cover boundary east of Route 5 separately from the entire canal waterbody.",
        "Build a parcel crosswalk among Hanna Furnace subparcels, Buffalo Lakeside Commerce Park, and neighboring disposal or industrial sites.",
        "Track current easement inspections, sediment-cover condition, canal-wall maintenance, and any future dredging restrictions.",
      ],
    },
    sources: [
      {
        title: "Union Ship Canal Cleanup Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/usccleanupfs.pdf",
      },
      {
        title: "Hanna Furnace Preliminary Site Assessment",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/E915193/Report.ERP.E915193.1995-11-01.PSA_Vol_I.pdf",
      },
      {
        title: "Hanna Furnace Subparcel 3 Environmental Easement",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/brownfield-and-state-superfund-programs/finalizing-remedial-projects/sites-with-environmental-easements",
      },
    ],
  },
  {
    id: "houdaille-strippit-landfill",
    name: "Houdaille / Strippit Landfill",
    municipality: "Akron / Town of Newstead",
    county: "Erie",
    category: "cleanup",
    summary:
      "Two-acre disposal area behind the Strippit plant. Buffalo Arms used the property during the 1940s for arms testing and scrap disposal; later wastes included coolants, heat-treatment sludge, solvents, drums, and burned refuse. Waste was consolidated beneath a composite cap in 1994, followed by monitoring and maintenance.",
    evidenceStatus: "well-documented",
    coordinates: [-78.50494, 43.0107],
    newsEvents: [
      {
        date: "1940-1950",
        headline: "A machine-gun test property becomes an industrial disposal ground",
        summary: "The official history records Buffalo Arms firing machine guns and discarding scrap before later plant wastes, drums and burned refuse accumulated behind the Strippit factory.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915053/ROD.HW.915053.1995-03-01.Houdaille%20Industrial%20Strippit%20Division.pdf",
        reach: "Local",
      },
      {
        date: "1992-1995",
        headline: "Investigation finds contamination contained within the landfill area",
        summary: "DEC concluded that sampled contamination was not leaving the disposal area and selected consolidation and capping; continuing monitoring remains important because the waste was contained rather than wholly removed.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915053/ROD.HW.915053.1995-03-01.Houdaille%20Industrial%20Strippit%20Division.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Houdaille Industries / Strippit Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915053/Report.HW.915053.2025-02-27.2025_PRR.pdf",
      },
      {
        title: "Houdaille Industrial / Strippit Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915053/ROD.HW.915053.1995-03-01.Houdaille%20Industrial%20Strippit%20Division.pdf",
      },
    ],
  },
  {
    id: "farwell-road-landfill",
    name: "Farwell Road Landfill",
    municipality: "Town of Ischua",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Former county-owned hazardous-waste disposal site where contamination remains under a managed remedy. Engineering controls, deed restrictions, inspections, and a site-management plan govern the closed landfill.",
    evidenceStatus: "well-documented",
    coordinates: [-78.38134867598835, 42.22007775214247],
    newsEvents: [
      {
        date: "1974-1975",
        headline: "Water monitoring begins before the county landfill opens",
        summary: "Because Ischua Creek was both a water-supply source and fishing stream, planners began baseline water monitoring before disposal operations, creating an unusually valuable record for later comparison.",
        publisher: "U.S. Environmental Protection Agency historical planning record",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101LXM5.TXT",
        reach: "Local",
      },
      {
        date: "1975-present",
        headline: "Three landfill phases remain tied to groundwater and creek monitoring",
        summary: "The site-management record documents unlined early phases, municipal refuse, incinerator ash, sewage sludge and approved industrial wastes, with groundwater flowing generally southeast toward Ischua Creek and continuing annual evaluation.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905024/Work%20Plan.HW.905024.2023-04-21.Revised%20Site%20Management%20Plan_Final.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Farwell Road Landfill Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905024/Work%20Plan.HW.905024.2023-04-21.Revised%20Site%20Management%20Plan_Final.pdf",
      },
      {
        title: "Farwell Road Landfill Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905024/",
      },
      {
        title: "Farwell Road Landfill 2022 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905024/Report.HW.905024.2023-02-17.Farwell%20Landfill%202022%20Periodic%20Review%20Report_Final.pdf",
      },
    ],
  },
  {
    id: "carroll-landfill",
    name: "Carroll Landfill",
    municipality: "Frewsburg / Town of Carroll",
    county: "Chautauqua",
    category: "cleanup",
    pfasStatus: "documented",
    pfasEvidence: ["detection", "investigation"],
    pfasCompounds: [
      {
        name: "Perfluorooctanoic acid",
        abbreviation: "PFOA / C8",
        finding: "detected",
        medium: "groundwater monitoring wells",
      },
      {
        name: "Perfluorooctanesulfonic acid",
        abbreviation: "PFOS",
        finding: "detected",
        medium: "groundwater monitoring wells",
      },
    ],
    pfasScopeNote:
      "The 2022 periodic review reported PFOA or PFOS above then-applicable guidance values in two East Landfill Cell wells. Monitoring-well detections do not by themselves establish exposure through a home, public-water supply, wetland, or creek.",
    summary:
      "Former municipal and construction-and-demolition landfill near Conewango Creek, wetlands, and homes. The roughly 25-acre disposal property has required leachate and groundwater controls, treatment, monitoring, and long-term management.",
    evidenceStatus: "well-documented",
    coordinates: [-79.13670584217945, 42.07609437135028],
    newsEvents: [
      {
        date: "Remedy selection",
        headline: "A landfill remedy is designed around Frewsburg's drinking-water setting",
        summary: "Because groundwater near the landfill supplies the Frewsburg water district, the state remedy joined landfill controls, leachate collection, groundwater treatment, monitoring, and contingency planning rather than treating the waste mound alone.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/carrollrod.pdf",
        reach: "Local",
      },
      {
        date: "Long-term phase",
        headline: "Monitoring becomes the continuing protection for nearby homes, wetlands, and Conewango Creek",
        summary: "The human consequence is a durable water-supply and land-management obligation; the historic landfill record does not by itself establish contamination in every current household tap.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907017/",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Carroll Landfill Remedial Design",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907017/Report.HW.907017.2011-09-27.RD%20Specs%20and%20Drawings%20approved%20by%20CCDOH.pdf",
      },
      {
        title: "Carroll Landfill Groundwater Monitoring Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907017/Report.HW.907017.2019-11-27.November%202019%20Groundwater%20Monitoring%20Report.pdf",
      },
      {
        title: "Carroll Town Landfill 2022 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907017/Report.HW.907017.2022-10-25.PRR_Carroll_Landfill_FINAL.pdf",
      },
    ],
  },
  {
    id: "dc-rollforms-proto-tool",
    name: "D.C. Rollforms / Proto Tool",
    municipality: "Jamestown",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former tool-manufacturing complex where forging, machining, heat treating, electroplating, and vapor degreasing left chlorinated solvents, petroleum, metals, and other contaminants. Cleanup included excavation, river-protection barriers, shoreline stabilization, and continuing controls.",
    evidenceStatus: "well-documented",
    coordinates: [-79.2353, 42.0969],
    newsEvents: [
      {
        date: "1984-2009",
        headline: "A closed tool plant becomes a river-edge excavation and stabilization project",
        summary: "After Proto Tool production ended, cleanup removed source material while barriers protected the Chadakoin River; DEC certified the major remedial work complete in July 2009.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/der-success-stories",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "D.C. Rollforms Engineering Construction Completion Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/dcrolltxt.pdf",
      },
      { title: "Region 9 Cleanup Success Stories", publisher: "NYSDEC", url: decSuccessStories },
    ],
  },
  {
    id: "altech-specialty-steel",
    name: "AlTech Specialty Steel",
    municipality: "Dunkirk",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Large former specialty-steel complex with a century-scale manufacturing history. Industrial fill, process wastes, soil, and groundwater have been addressed through phased state investigation, demolition, remediation, and site management.",
    evidenceStatus: "research-in-progress",
    coordinates: [-79.34139486518566, 42.471590931745645],
    sources: [
      {
        title: "AlTech Specialty Steel Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907022/",
      },
      { title: "Sites with Environmental Easements", publisher: "NYSDEC", url: decEasements },
    ],
  },
  {
    id: "former-roblin-steel-dunkirk",
    name: "Former Roblin Steel",
    municipality: "Dunkirk",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Twelve-acre portion of a complex established by the American Locomotive Company in 1910 and later used for steel reclamation. Cleanup, building demolition, groundwater monitoring, and an environmental easement supported industrial reuse.",
    evidenceStatus: "well-documented",
    coordinates: [-79.31917, 42.48612],
    sources: [
      {
        title: "Former Roblin Steel Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/B00173/Report.ERP.B00173.2022-02-24.PRR_and_IC-EC_Certification.pdf",
      },
      {
        title: "Former Roblin Steel Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/robrod.pdf",
      },
      {
        title: "Former Roblin Steel 2024 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/B00173/Report.ERP.B00173.2025-03-03.PRR_and_IC-EC_Certification.pdf",
      },
    ],
  },
  {
    id: "special-metals-dunkirk",
    name: "Special Metals",
    municipality: "Dunkirk",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Aerospace-alloy manufacturing property where petroleum-contaminated soil and an underground tank were discovered during expansion. State-supervised removal and continuing institutional controls manage the affected portion of the active industrial site.",
    evidenceStatus: "well-documented",
    coordinates: [-79.33968, 42.46907],
    newsEvents: [
      {
        date: "2007",
        headline: "Plant expansion uncovers a buried petroleum source",
        summary: "A construction discovery—not a routine closure—brought the localized cleanup into public view: an underground tank and petroleum-affected soil were removed while the larger alloy plant remained active.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907031/Fact%20Sheet.HW.907031.2007-02-23.IRM_Factsheet.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Special Metals Cleanup Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907031/Fact%20Sheet.HW.907031.2007-02-23.IRM_Factsheet.pdf",
      },
      {
        title: "Special Metals 2021 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907031/Report.HW.907031.2022-03-10.2021PRR.pdf",
      },
    ],
  },
  {
    id: "lexington-machining",
    name: "Lexington Machining",
    municipality: "Lakewood",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former die-casting and machining plant operated from the 1950s into 2014. Solvents used for degreasing affected soil and groundwater; active remediation was followed by groundwater monitoring, land-use controls, and site management.",
    evidenceStatus: "well-documented",
    coordinates: [-79.32998896581996, 42.100013659046084],
    newsEvents: [{ date: "2002-2020", headline: "Sampling turns a small machining plant into a long-term solvent-management site", summary: "Investigation traced chlorinated compounds through defined production areas and groundwater, followed by active treatment, monitoring, cover and institutional controls documented in the site-management plan.", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/907044/Work%20Plan.HW.907044.2020-04-24.Revised_SMP.pdf", reach: "Local" }],
    sources: [
      {
        title: "Lexington Machining Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907044/Report.HW.907044.2023-11-10.PRR_and_IC-EC_Certification.pdf",
      },
      {
        title: "Lexington Machining 2022 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907044/Report.HW.907044.2022-11-09.PRR_and_IC-EC_Certification.pdf",
      },
    ],
  },
  {
    id: "former-cb-dry-cleaners",
    name: "Former C&B Dry Cleaners",
    municipality: "Jamestown",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Compact former dry-cleaning property that illustrates how a small business could create a significant solvent cleanup problem. The site is managed separately from Jamestown's much larger industrial complexes.",
    evidenceStatus: "well-documented",
    newsEvents: [
      {
        date: "February 2013",
        headline: "A compact dry-cleaning property requires a public solvent-cleanup plan",
        summary: "DEC's proposed plan brought the former cleaner's chlorinated-solvent source, groundwater and vapor pathways into public review, illustrating how contamination from a small business footprint can require long-term treatment and controls.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/prapcbdc1.pdf",
        reach: "Local",
      },
    ],
    coordinates: [-79.2466826043239, 42.112404952445836],
    sources: [
      {
        title: "Former C&B Dry Cleaners Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907028/",
      },
      {
        title: "Former C&B Dry Cleaners Proposed Remedial Action Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/prapcbdc1.pdf",
      },
      { title: "Sites with Environmental Easements", publisher: "NYSDEC", url: decEasements },
    ],
  },
  {
    id: "essex-hope-site",
    name: "Essex / Hope Site",
    municipality: "Jamestown",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former paint, varnish, coating, and window-manufacturing property where solvents and other industrial chemicals affected soil and groundwater. DEC amended the remedy in 2023 to add thermal and chemical treatment, monitoring, a maintained cover, and continuing land- and groundwater-use controls.",
    evidenceStatus: "well-documented",
    coordinates: [-79.21417629987917, 42.10966403467532],
    newsEvents: [
      {
        date: "September 2023",
        headline: "DEC changes the remedy after decades of treatment and investigation",
        summary: "The amended decision added electrical-resistance heating for a chlorinated-solvent source and chemical oxidation for petroleum-related compounds while preserving cover, monitoring and off-site investigation requirements.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907015/ROD.HW.907015.2023-09-27.Amended%20Record%20of%20Decision%20.pdf",
        reach: "Local",
      },
    ],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "The approximately 4.7-acre state cleanup site covers six industrial parcels around Hopkins and Blackstone avenues. Paints, varnishes, industrial coatings, and related products were manufactured here by a succession of companies beginning in the early twentieth century.",
        "DEC identifies the property as State Superfund site 907015, currently Class 4. That classification means remedial construction has been completed for the earlier remedy but continuing management, monitoring, or operation remains necessary.",
      ],
      timeline: [
        { period: "Early 1900s onward", event: "Successive companies manufactured paints, varnishes, coatings, and related products at the property." },
        { period: "1994", event: "DEC selected a remedy centered on source removal, groundwater recovery and treatment, air sparging, and soil-vapor extraction." },
        { period: "1994–2023", event: "Additional investigations, underground-tank and drywell removals, and treatment pilot programs refined the understanding of on- and off-site conditions." },
        { period: "2023", event: "DEC amended the remedy to use in-situ thermal treatment for chlorinated VOCs, chemical oxidation for petroleum-related VOCs, and continued groundwater monitoring." },
      ],
      documentedImpacts: [
        "DEC documents releases including trichloroethene, petroleum-related volatile compounds, toluene, xylenes, PCBs, and vinyl chloride.",
        "Groundwater flows generally north or northeast toward the Chadakoin River. DEC is handling the incompletely defined downgradient off-site area as a separate operable unit.",
        "The record applies to the defined cleanup site and investigated downgradient area; it does not establish that every nearby parcel shares the same conditions.",
      ],
      cleanupAndControls: [
        "The amended remedy calls for electrical-resistance heating and vapor collection in a chlorinated-solvent source area, chemical oxidation in a petroleum-affected area, and monitored natural attenuation.",
        "A site cover, industrial-use restriction, groundwater-use restriction, excavation controls, vapor-intrusion review provisions, and periodic certification remain part of site management.",
      ],
      presentDay: [
        "Essex / Hope remains a long-term managed cleanup. Its Class 4 status should be read as continuing stewardship, not as an unrestricted or inactive property.",
        "The 2023 amendment changed how remaining source areas will be treated; it did not erase the earlier removals, treatment systems, or off-site investigation history.",
      ],
      researchNotes: [
        "Track DEC's separate decision and future construction records for the downgradient off-site operable unit.",
        "Keep the six-parcel cleanup footprint and the still-developing downgradient operable unit visually distinct on any future detail map.",
      ],
    },
    sources: [
      {
        title: "Essex / Hope 2023 Amended Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907015/ROD.HW.907015.2023-09-27.Amended%20Record%20of%20Decision%20.pdf",
      },
      {
        title: "Essex / Hope Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907015/",
      },
    ],
  },
  {
    id: "dowcraft-south-dow-street",
    name: "Dowcraft — South Dow Street",
    municipality: "Falconer",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former woolen mill and steel-partition factory where a trichloroethene vapor degreaser contributed to a chlorinated-solvent groundwater plume. Source treatment, monitoring, and institutional controls continue under a Class 4 State Superfund remedy.",
    evidenceStatus: "well-documented",
    coordinates: [-79.20193886683256, 42.112150016662],
    newsEvents: [
      {
        date: "2003-2026",
        headline: "A small former factory becomes a decades-long groundwater treatment site",
        summary: "DEC's decision and periodic reviews trace the public consequence of historic degreasing: treatment and monitoring continued long after manufacturing ended, while river sampling in the reviewed record did not demonstrate a site-related Chadakoin River impact.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907020/Report.HW.907020.2026-02-04.PRR_and_IC-EC_Certification.pdf",
        reach: "Local",
      },
    ],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "Industrial use at the approximately 2.2-acre South Dow Street property began with a woolen mill around 1890. From 1939 until 1999, the plant manufactured steel partitions and used a trichloroethene vapor degreaser.",
        "DEC lists Dowcraft as State Superfund site 907020, Class 4, reflecting a constructed remedy that still requires treatment, monitoring, and site management.",
      ],
      timeline: [
        { period: "About 1890–1939", event: "A woolen mill occupied the South Dow Street property." },
        { period: "1939–1999", event: "Steel-partition manufacturing included chlorinated-solvent degreasing." },
        { period: "2003", event: "DEC selected a remedy for contaminated soil and groundwater." },
        { period: "2019 onward", event: "Additional source-area treatment using zero-valent iron and continued groundwater monitoring addressed remaining chlorinated VOCs." },
        { period: "2026 review", event: "DEC reporting documented continuing monitoring and remedy evaluation." },
      ],
      documentedImpacts: [
        "Trichloroethene and its breakdown products affected groundwater beneath and downgradient of the former plant.",
        "DEC records describe the plume extending beneath the neighboring industrial property toward the Chadakoin River area. River sampling cited in the current review did not demonstrate a site-related river impact.",
        "The mapped marker represents the cleanup property and documented plume history, not a claim about every building or parcel in Falconer.",
      ],
      cleanupAndControls: [
        "Cleanup has included source-area excavation or treatment, groundwater treatment, monitoring wells, and injections of zero-valent iron to promote contaminant breakdown.",
        "Land-use and groundwater-use restrictions, excavation procedures, monitoring, and periodic remedy reviews remain in place.",
      ],
      presentDay: [
        "Dowcraft remains a managed groundwater cleanup. The continuing program is why it belongs in the atlas despite the relatively small property footprint.",
      ],
      researchNotes: [
        "Continue checking periodic review reports for plume trends, treatment performance, and any revised assessment of the Chadakoin River.",
        "Do not describe the river as affected by Dowcraft unless later sampling establishes a site-related impact that the reviewed record did not demonstrate.",
      ],
    },
    sources: [
      {
        title: "Dowcraft Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907020/ROD.HW.907020.2003-03-31.dowcraft.pdf",
      },
      {
        title: "Dowcraft 2026 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907020/Report.HW.907020.2026-02-04.PRR_and_IC-EC_Certification.pdf",
      },
    ],
  },
  {
    id: "former-jamestown-city-landfill",
    name: "Former Jamestown City Landfill",
    municipality: "Jamestown",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former municipal landfill used from 1962 to 1974. Historical records identify municipal refuse together with paint, solvent, and degreasing wastes; DEC currently classifies the State Superfund record as Class 3.",
    evidenceStatus: "well-documented",
    coordinates: [-79.24867284195923, 42.108362644867015],
    newsEvents: [
      {
        date: "1962-1974 legacy",
        headline: "A municipal dump also receives Jamestown's industrial wastes",
        summary: "Municipal environmental-review records preserve the lesser-known history that the Washington Street landfill received paint, solvent and degreasing wastes along with ordinary refuse; DEC's present Class 3 status does not erase that disposal record.",
        publisher: "City of Jamestown",
        url: "https://www.jamestownny.gov/wp-content/uploads/2021/04/Part-I_Riverwalk-Community-Skate-Park_Part-58-NEPA-Review-with-attachments.pdf",
        reach: "Local",
      },
    ],
    story: {
      lastReviewed: "August 17, 2026",
      background: [
        "The City of Jamestown operated the Washington Street landfill from 1962 through 1974. It was not only a household-refuse dump: municipal environmental reviews preserve a record of waste paint, solvents, degreaser sludge, and paint liquids placed in defined disposal areas during the operating years.",
        "The site later became part of a park and utility landscape, making buried-waste awareness important even when no emergency was underway. A 2000 DEC operation-and-maintenance visit noted new asphalt, concrete, and stone dumping in the north-central park area and inspected regrading where an eight-inch gas line crossed the landfill's western side; the inspector recorded no indicated problem with that work.",
        "DEC now lists the site as Class 3 and records its legacy vapor-intrusion review as complete with no further action for that pathway. Class 3 means the state does not presently consider the site—or reasonably foresee it—to pose a significant threat. It is a current regulatory conclusion, not a claim that the 1960s waste was excavated or never existed.",
      ],
      timeline: [
        { period: "1962–1974", event: "The City of Jamestown operated the landfill." },
        { period: "Operating period", event: "Records describe disposal of municipal refuse and industrial materials including paint, solvents, degreaser sludge, and paint liquids." },
        { period: "October 2000", event: "A DEC maintenance inspection recorded park-area fill placement and reviewed regrading around a gas-line installation across the landfill." },
        { period: "Legacy review", event: "Because chlorinated hydrocarbons had been disposed, the property entered the statewide reevaluation of older remedies for potential soil-vapor pathways." },
        { period: "Present classification", event: "DEC lists the site as Class 3 and records the legacy vapor review as complete with no further action for that pathway." },
      ],
      documentedImpacts: [
        "The documented industrial materials included paint liquids, solvents, and degreaser sludge in addition to municipal refuse.",
        "Utility construction and later fill placement show why a closed landfill can remain relevant to excavation planning even without a current significant-threat classification.",
        "The reviewed record does not support turning the map marker into a complete waste boundary, a current plume, or a claim about exposure in nearby homes.",
      ],
      cleanupAndControls: [
        "DEC's historical operation-and-maintenance inspections tracked surface condition and work that disturbed or crossed the landfill.",
        "The legacy soil-vapor evaluation was completed with no further action for that pathway, while future excavation or redevelopment still requires current parcel and agency review.",
      ],
      presentDay: [
        "This entry records a municipal landfill that also accepted documented industrial liquids and sludges. Its present Class 3 status prevents the history from being exaggerated into an active emergency, while the park and utility uses explain why the buried-waste record still matters.",
      ],
      researchNotes: [
        "Update the page if DEC publishes a new investigation, reclassification, or site-specific document collection.",
        "Keep the landfill marker distinct from nearby Chadakoin River projects unless an official record documents a direct relationship.",
      ],
    },
    sources: [
      {
        title: "Former Jamestown City Landfill DEC Database Record",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://appfactory.dec.ny.gov/DERExternalSearch/ERDDetails?SiteCode=907009",
      },
      {
        title: "Jamestown Riverwalk Environmental Review",
        publisher: "City of Jamestown",
        url: "https://www.jamestownny.gov/wp-content/uploads/2021/04/Part-I_Riverwalk-Community-Skate-Park_Part-58-NEPA-Review-with-attachments.pdf",
      },
      {
        title: "DEC 2000 Annual Operation and Maintenance Site-Visit Memorandum",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907018/Report.HW.907018.1996-02-02.POST_REMEDIATION_MONITORING.pdf",
      },
      {
        title: "Status of Vapor Intrusion Evaluations at Legacy Sites",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/regulatory/regulations/status-of-vapor-intrusion-evaluations-at-legacy-sites",
      },
    ],
  },
  {
    id: "ellison-bronze-company",
    name: "Ellison Bronze Company",
    municipality: "Falconer",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Long-running bronze-door manufacturer and foundry where metal-bearing foundry material affected soil and sediment. Stabilization, containment, groundwater monitoring, and land-use controls continue under a Class 4 State Superfund record.",
    evidenceStatus: "well-documented",
    coordinates: [-79.19958673235618, 42.11654760374714],
    newsEvents: [
      {
        date: "1996-present",
        headline: "Foundry waste is stabilized rather than treated as a disappearing contaminant",
        summary: "DEC selected stabilization and containment for persistent metal-bearing material. The remedy's human meaning is continuing stewardship: land-use controls, groundwater monitoring and maintenance remain necessary around an operating industrial property.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907018/ROD.HW.907018.1996-03-25.ellison_bronze.pdf",
        reach: "Local",
      },
    ],
    story: {
      lastReviewed: "August 17, 2026",
      background: [
        "Ellison Bronze's West Main Street plant in Falconer has long produced brass and bronze doors and hardware. Like many foundries, it generated sand, metal filings, dust, and other residues; some of that material was historically deposited at the rear of the operating property.",
        "Because the foundry handled brass, portions of the waste contained lead above state criteria. New York's remedy did not try to excavate every grain of foundry material. In 1995 the company blended the defined waste with cement in place, turning a loose, leachable material into a stabilized mass that could be contained and monitored.",
        "Verification testing after stabilization and later groundwater sampling found no lead leaching from the treated waste, according to the 2015–2020 periodic review. That result supports the remedy's performance, while Class 4 status preserves maintenance, groundwater checks, land-use controls, and periodic certification around an operating factory.",
      ],
      timeline: [
        { period: "Historic operating era", event: "Foundry workers produced brass doors and hardware, and metal filings and other residuals were deposited behind the plant." },
        { period: "June 1995", event: "Ellison Bronze and DEC entered a consent order governing remediation of the lead-bearing foundry waste." },
        { period: "1995–1996", event: "The defined waste was stabilized in place with cement, verified by testing, and placed under continuing monitoring and maintenance." },
        { period: "2015–2020 review", event: "Periodic review reported the stabilization remained effective and groundwater testing showed no lead leaching from the treated mass." },
      ],
      documentedImpacts: [
        "Lead-bearing filings and foundry waste exceeded state criteria in the historical rear disposal area.",
        "The remedy was designed around a persistent metal, which does not break down and therefore had to be physically stabilized and isolated.",
        "The cleanup record is specific to the industrial property and evaluated environmental media; it should not be generalized to all of Falconer.",
      ],
      cleanupAndControls: [
        "Cement stabilization bound the lead-bearing waste in place, and verification testing checked the treated material's performance.",
        "Groundwater monitoring, repair as needed, land-use controls, and periodic review preserve the stabilized remedy around an active plant.",
      ],
      presentDay: [
        "Ellison Bronze is both an operating manufacturer and a managed historic disposal site. The record does not accuse current production of causing an uncontrolled release; it documents why a cement-stabilized waste area behind the plant still receives long-term attention.",
      ],
      researchNotes: [
        "Use the latest periodic review report for future changes in monitoring frequency, controls, or classification.",
        "Preserve the distinction between the historic operator, the regulated cleanup property, and any current occupant when describing this site.",
      ],
    },
    sources: [
      {
        title: "Ellison Bronze Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907018/ROD.HW.907018.1996-03-25.ellison_bronze.pdf",
      },
      {
        title: "Ellison Bronze Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907018/",
      },
      {
        title: "Ellison Bronze 2015–2020 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907018/Report.HW.907018.2021-02-18.PRR_and_IC-EC_Certification.pdf",
      },
    ],
  },
  {
    id: "marsh-valve-dunkirk",
    name: "Marsh Valve",
    municipality: "Dunkirk",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former brass-valve and fitting foundry where metal-bearing foundry sand and industrial structures required a federal removal action. Buildings, underground tanks, and foundry material were removed before DEC selected no further remedial action.",
    evidenceStatus: "well-documented",
    coordinates: [-79.34685157550105, 42.48169396687779],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "The Brigham Road property manufactured brass valves and fittings beginning in the 1920s and operated a foundry beginning in 1941. The industrial process left metal-bearing foundry sand and related material at the site.",
        "DEC tracks Marsh Valve as site 907023 with completed Class C status. Class C records a completed remedial program and should not be confused with an active Class 2 State Superfund site.",
      ],
      timeline: [
        { period: "1920s onward", event: "The property manufactured brass valves and fittings." },
        { period: "1941 onward", event: "Foundry operations generated sand and residues containing lead, copper, zinc, and other metals." },
        { period: "EPA removal", event: "A federal removal action demolished the remaining building, removed underground tanks, and excavated foundry sand to native soil." },
        { period: "2003", event: "DEC selected no further remedial action based on the completed removal work and investigation." },
      ],
      documentedImpacts: [
        "Investigations documented lead, copper, and zinc in foundry sand and fill associated with the former operation.",
        "The principal historical concern was the remaining industrial material and structures on the former foundry parcel, rather than a documented community-wide plume.",
        "The historical contamination record applies to the former foundry property; it does not describe the wider Brigham Road area.",
      ],
      cleanupAndControls: [
        "The federal removal addressed the principal remaining industrial structures, tanks, and foundry material.",
        "DEC's no-further-action decision and completed classification distinguish this site from nearby properties with active remedies.",
      ],
      presentDay: [
        "Marsh Valve belongs in the atlas as a completed large-scale foundry removal and redevelopment history, not as an ongoing emergency.",
        "Completed Class C status means the state remedial program is complete; it should not be displayed with the same status language as an active Class 2 cleanup.",
      ],
      researchNotes: [
        "Retain the completed-status language whenever the site is shown in search results or connection groups.",
        "If a future project reopens the property, use its project-specific environmental review rather than assuming the 2003 decision covers newly encountered material.",
      ],
    },
    sources: [
      {
        title: "Marsh Valve Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907023/ROD.HW.907023.2003-03-31.marsh_valve.pdf",
      },
      {
        title: "Marsh Valve Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907023/",
      },
    ],
  },
  {
    id: "bush-industries-cattaraugus",
    name: "Bush Industries",
    municipality: "Village of Cattaraugus",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Property with early Standard Oil and apple-evaporator uses followed by decades of veneer manufacturing. Cleanup removed about 3,400 tons of petroleum-affected soil and demolished asbestos-containing industrial buildings before completion in 2010.",
    evidenceStatus: "well-documented",
    coordinates: [-78.8672, 42.3297],
    newsEvents: [
      {
        date: "2007-2010",
        headline: "A village-led cleanup clears petroleum soil and asbestos buildings",
        summary: "The state restoration removed about 3,400 tons of petroleum-affected soil and demolished asbestos-containing factory structures before DEC certified the property in 2010.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/der-success-stories",
        reach: "Local",
      },
      {
        date: "March 2025",
        headline: "The cleared factory ground is folded into Cattaraugus's One Main vision",
        summary: "Local reporting described plans for a farmers market, affordable space for artists and entrepreneurs, outdoor events and connections to new rail recreation on the former industrial ground.",
        publisher: "Olean Star",
        url: "https://oleanstar.com/blog/2025/03/29/village-of-cattaraugus-wins-10-million-downtown-revitalization-award/",
        reach: "Local",
      },
    ],
    sources: [
      { title: "Region 9 Cleanup Success Stories", publisher: "NYSDEC", url: decSuccessStories },
      {
        title: "Bush Industries Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/E905029/",
      },
      {
        title: "Bush Site Final Engineering Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/bushfer.pdf",
      },
    ],
  },
  {
    id: "former-randolph-foundry",
    name: "Former Randolph Foundry",
    municipality: "Randolph",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Small former foundry and machine-shop property beside a rail corridor. After the foundry closed around 1986, investigations found asbestos, drums, waste foundry sand, and other industrial debris requiring cleanup and long-term management.",
    evidenceStatus: "well-documented",
    coordinates: [-78.98265, 42.15843],
    sources: [
      {
        title: "Former Randolph Foundry Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/E905030/Work%20Plan.ERP.E905030.2011-07-01.SMP.pdf",
      },
      {
        title: "Former Randolph Foundry Cleanup Completion Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/E905030/Fact%20Sheet.ERP.E905030.2012-06-01.COC_issued-FER_approved.pdf",
      },
      {
        title: "Former Randolph Foundry Site Investigation and Alternatives Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/E905030/Report.ERP.E905030.2011-07-22.SI-RAA.pdf",
      },
    ],
  },
  {
    id: "former-signore",
    name: "Former Signore",
    municipality: "Ellicottville",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Former manufacturing property tracked through New York's brownfield program. The eight-acre site adds a smaller southern-tier industrial cleanup to an atlas otherwise dominated by Buffalo and Niagara Falls.",
    evidenceStatus: "well-documented",
    coordinates: [-78.66980735370983, 42.27055940024228],
    newsEvents: [
      {
        date: "2006-2015",
        headline: "An abandoned tool-and-die plant becomes an eight-acre brownfield cleanup",
        summary: "After Signore Tool and Die ceased operations, a new owner removed underground tanks and petroleum soil, investigated off-site vapor and advanced a state-reviewed remedy; monitoring of the interceptor and town wells was reported non-detect or below drinking-water standards.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C905034/Fact%20Sheet.BCP.C905034.2015-04-10.Cleanup%20Proposed%20for%20Former%20Signore%2C%20Inc.%20Site.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Former Signore Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C905034/",
      },
      {
        title: "Former Signore Proposed Cleanup Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C905034/Fact%20Sheet.BCP.C905034.2015-04-10.Cleanup%20Proposed%20for%20Former%20Signore%2C%20Inc.%20Site.pdf",
      },
      { title: "Sites with Environmental Easements", publisher: "NYSDEC", url: decEasements },
    ],
  },
  {
    id: "former-buffalo-china",
    name: "Former Buffalo China",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Historic ceramics-manufacturing property on Hayes Place. Cleanup addressed industrial soil and groundwater impacts; off-site groundwater and soil-vapor controls, including a neighboring residence's sub-slab system, remain part of the management record.",
    evidenceStatus: "well-documented",
    coordinates: [-78.82743, 42.86913],
    newsEvents: [
      {
        date: "2010 remedial investigation",
        headline: "Off-site vapor results require mitigation at a neighboring residence",
        summary: "The investigation identified chlorinated compounds in off-site groundwater and indoor-air-related sampling at one location, leading to a sub-slab depressurization system; this was a specific mitigated pathway, not evidence about every nearby home.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/bchinari.pdf",
        reach: "Local",
      },
      {
        date: "March 17, 2018",
        headline: "New businesses return to the former ceramics complex",
        summary: "Regional reporting documented reuse of the 285,000-square-foot plant after its abrupt 2003 closure, while environmental monitoring and off-site vapor controls continued under the brownfield remedy.",
        publisher: "Spectrum News 1",
        url: "https://spectrumlocalnews.com/nys/buffalo/news/2018/03/17/buffalo-china-factory-hayes-place-management-group",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Former Buffalo China Remedial Investigation",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/bchinari.pdf",
      },
      {
        title: "Former Buffalo China Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915209/Report.BCP.C915209.2024-05-03.PRR_and_IC-EC_Certification.pdf",
      },
    ],
  },
  {
    id: "former-nl-industries-foundry",
    name: "Former NL Industries Foundry",
    municipality: "Cheektowaga",
    county: "Erie",
    category: "cleanup",
    summary:
      "Seven-and-a-half-acre former foundry property carried through New York's Brownfield Cleanup Program. Its story connects metal casting, industrial fill, cleanup controls, and reuse in the Buffalo–Cheektowaga industrial belt.",
    evidenceStatus: "well-documented",
    coordinates: [-78.70027906069848, 42.91119522314418],
    newsEvents: [
      {
        date: "1892-1972",
        headline: "Eighty years of brass foundry work leave a lead-centered cleanup",
        summary: "The final engineering record traces brass foundry operations from 1892 to 1972. Brownfield work later addressed elevated soil contamination—particularly lead—while supporting continued industrial reuse.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915200/Report.BCP.C915200.2009-12-10.Final_Engineering_Report.pdf",
        reach: "Local",
      },
      {
        date: "December 2009",
        headline: "DEC announces completion of the former foundry remedy",
        summary: "The public completion notice documented finished remedial construction and availability of the final engineering record, while institutional controls continued to govern residual conditions and reuse.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915200/Fact%20Sheet.BCP.C915200.2009-12-18.FER.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Former NL Industries Foundry Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915200/",
      },
      {
        title: "Former NL Industries Foundry Final Engineering Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915200/Report.BCP.C915200.2009-12-10.Final_Engineering_Report.pdf",
      },
      { title: "Sites with Environmental Easements", publisher: "NYSDEC", url: decEasements },
    ],
  },
  {
    id: "former-mill-no-2",
    name: "Former Mill No. 2",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former paper-manufacturing complex built in stages from 1923 through 1974 and inactive after 1982. Brownfield redevelopment removed the deteriorated mill, chemically contaminated historic fill, and localized radiologically affected soil; Greenpac now operates on the industrially restricted property.",
    evidenceStatus: "well-documented",
    coordinates: [-79.01326203165878, 43.08822382497429],
    sources: [
      { title: "Region 9 Cleanup Success Stories", publisher: "NYSDEC", url: decSuccessStories },
      {
        title: "Former Mill No. 2 Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C932150/",
      },
      {
        title: "Former Mill No. 2 Decision Document",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/grnpcdd.pdf",
      },
      {
        title: "Former Mill No. 2 Cleanup Completion Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/fsfm2.pdf",
      },
    ],
  },
  {
    id: "remington-rand-north-tonawanda",
    name: "Remington Rand",
    municipality: "North Tonawanda",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former industrial complex where investigations documented petroleum, chlorinated solvents, PAHs, metals, and PCBs. Interim removals and a managed remedy supported restricted-residential redevelopment while preserving soil and groundwater controls.",
    evidenceStatus: "well-documented",
    coordinates: [-78.87387831625173, 43.023181066006856],
    newsEvents: [
      {
        date: "Industrial era-1970s",
        headline: "A canal-side factory moves through trolley, engine, filing-system, and office-equipment production",
        summary: "The long succession of manufacturers explains the mixed petroleum, solvent, PCB, PAH, and metals record better than assigning the property to one product or one owner.",
        publisher: "Lumber City Development Corporation",
        url: "https://www.lumbercitydc.com/remington-lofts-on-the-canal",
        reach: "Local",
      },
      {
        date: "2006-2011",
        headline: "Brownfield cleanup supports 81 canal-side lofts under continuing controls",
        summary: "The reuse brought residents into a former factory complex only after environmental remediation and with restrictions and management suited to controlled residential use.",
        publisher: "Lumber City Development Corporation",
        url: "https://www.lumbercitydc.com/remington-lofts-on-the-canal",
        reach: "Local",
      },
    ],
    sources: [
      { title: "Region 9 Cleanup Success Stories", publisher: "NYSDEC", url: decSuccessStories },
      {
        title: "Remington Rand Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C932142/",
      },
    ],
  },
  {
    id: "tonawanda-plastics",
    name: "Tonawanda Plastics",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "cleanup",
    summary:
      "River Road plastics property within the dense Tonawanda industrial corridor. It is tracked separately from Tonawanda Coke while sharing a landscape shaped by neighboring steel, coke, landfill, and chemical operations.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.93194594688349, 42.9796717028209],
    newsEvents: [
      {
        date: "August 2023",
        headline: "A vacant plastics plant begins a new parcel-specific investigation",
        summary: "The Brownfield Cleanup Program work plan opened a new chapter for the 17.446-acre property, calling for testing of soil, sediment, groundwater, tanks, drums, piping and former process equipment before redevelopment decisions are made.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915003/Work%20Plan.BCP.C915003.2023-08-17.Remedial%20Investigation%20Work%20Plan_Final.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "3821 River Road Brownfield Cleanup Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915003/",
      },
      {
        title: "Legacy Tonawanda Plastics RCRA Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915003/",
      },
      {
        title: "Tonawanda Coke Site 109 Feasibility Study",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915055/Report.HW.915055.2024-02-02.Site%20109%20Feasibility%20Study%20_Final.pdf",
      },
    ],
  },
  {
    id: "roblin-steel-tonawanda",
    name: "Roblin Steel — Tonawanda",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former steel property in the River Road industrial corridor. This is a different cleanup record from Former Roblin Steel in Dunkirk and is presented as its own site to prevent two similarly named histories from being conflated.",
    evidenceStatus: "well-documented",
    coordinates: [-78.9371, 42.9808],
    newsEvents: [{ date: "1908-1964", headline: "An integrated steelworks is dismantled after shutdown", summary: "Industrial history traces blast furnaces, open-hearth steelmaking, wire and nail mills at the former Wickwire property; after closure, Roblin acquired the site and salvaged steel equipment for its Dunkirk operation.", publisher: "Society for Industrial Archeology", url: "https://www.sia-web.org/wordpress/wp-content/uploads/2025/02/SIA-Buffalo-Guidebook-1992.pdf", reach: "Regional" }, { date: "Current remedial record", headline: "Roblin and Envirotek units require boundary-by-boundary interpretation", summary: "Community mapping and state records describe overlapping operable-unit geography and separate responsible parties; the atlas therefore preserves each waste source and remedy rather than presenting a single corridor-wide plume.", publisher: "Clean Air Coalition of Western New York", url: "https://www.cacwny.org/tonawanda-coke-bcp/area-map/", reach: "Local" }],
    sources: [
      {
        title: "Roblin Steel Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915056/",
      },
      {
        title: "Tonawanda Coke Site 109 Feasibility Study",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915055/Report.HW.915055.2024-02-02.Site%20109%20Feasibility%20Study%20_Final.pdf",
      },
      {
        title: "Roblin Steel Remediation Database Record",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/cfmx/extapps/derexternal/haz/details.cfm?ProgNo=915056",
      },
    ],
  },
  {
    id: "batavia-landfill",
    name: "Batavia Landfill",
    municipality: "Town of Batavia",
    county: "Genesee",
    category: "cleanup",
    summary:
      "Thirty-five-acre municipal landfill that received heavy-metal sludges, oils, solvents, and other industrial wastes from the 1960s until 1980. Cleanup removed drums, capped remaining contaminated material, collected leachate, restored wetlands, and extended public water. EPA deleted the site from the National Priorities List in 2005. Monitoring and maintenance continue.",
    evidenceStatus: "well-documented",
    coordinates: [-78.2580713674204, 43.0207424820643],
    newsEvents: [
      {
        date: "1991–1995",
        headline: "Contaminants in nearby wells turn a landfill cleanup into a drinking-water response",
        summary: "After sampling found site-related contaminants in residential wells, the cleanup removed 632 surface drums and extended municipal water to adjacent households rather than asking families to keep relying on threatened private wells.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/b529caed392b807b852570d1005acb68.html",
        reach: "Local",
      },
      {
        date: "December 19, 2024",
        headline: "A sixth five-year review checks the remedy two decades after Superfund deletion",
        summary: "EPA's newest statutory review continued the long-term question at Batavia: whether the cap, water protections, leachate controls, wetlands work, and monitoring remain protective while waste stays buried.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.schedule&id=0201766",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Batavia Landfill Superfund Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/cursites/csitinfo.cfm?id=0201766",
      },
      {
        title: "Superfund Sites in Reuse in New York",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/superfund-redevelopment/superfund-sites-reuse-new-york",
      },
      {
        title: "Batavia Landfill 2024 Groundwater and Surface-Water Sampling Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/819001/Report.HW.819001.2024-08-22.2024%20annual%20sampling%20report.pdf",
      },
    ],
  },
  {
    id: "chaffee-landfill",
    name: "Chaffee Landfill",
    municipality: "Sardinia / Chaffee",
    county: "Erie",
    category: "cleanup",
    summary:
      "Long-running landfill complex on Olean Road containing closed disposal areas alongside an active permitted operation. Unlike the atlas's completed brownfields, Chaffee remains an operating solid-waste facility; its historic cells, current cells, leachate and gas systems, permits, and proposed expansions must be kept distinct.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.48589, 42.58259],
    newsEvents: [
      {
        date: "September 14, 2022",
        headline: "A major expansion proposal enters public permit review",
        summary: "DEC released draft solid-waste and air permits for a proposed 20-acre southern cell, 10 acres of valley fill and vertical expansion, making public comment part of the operating landfill's continuing history.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2022-09-14/completed-application/chaffee-landfill",
        reach: "Regional",
      },
      {
        date: "April–May 2023",
        headline: "Environmental review closes while a renewed air permit governs active landfill gas",
        summary: "DEC accepted the final supplemental environmental impact statement for the Southern Expansion and issued a Title V permit through 2028. The air permit regulates gas collection and energy equipment; it is not by itself proof that every proposed disposal footprint was constructed.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2023-04-19/public-notice/erie-county-the-new-york-state",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Chaffee Landfill Permit Application",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2022-09-14/completed-application/chaffee-landfill",
      },
      {
        title: "New York Issued Title V Permits — Chaffee Landfill",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/dar/afs/issued_atv.html",
      },
      {
        title: "Chaffee Landfill 2024 Annual Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/fs/projects/SWMF/Annual%20Reports_Solid%20Waste%20Management%20Facility/Annual%20Reports_by%20Activity%20Type/Landfill/Landfill%20Annual%20Reports%20-%202024/R9/15S14_Chaffee_Landfill_MSW_R9_2024.2025-02-28.AR.pdf",
      },
      {
        title: "Chaffee Southern Expansion Final Supplemental Environmental Impact Statement Notice",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2023-04-19/public-notice/erie-county-the-new-york-state",
      },
    ],
  },
  {
    id: "olean-well-field-superfund",
    name: "Olean Well Field Superfund Site",
    municipality: "Olean / Portville",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Approximately 800-acre groundwater cleanup involving TCE and other volatile organic compounds beneath portions of Olean and Portville. EPA identified four principal industrial source properties, extended public water to affected homes, treated municipal wells, and continues source-area cleanup and monitoring.",
    evidenceStatus: "well-documented",
    coordinates: [-78.3941234926409, 42.06822415241196],
    newsEvents: [
      {
        date: "January 1981",
        headline: "Routine testing reveals solvents in Olean-area drinking-water wells",
        summary: "The discovery in municipal and private wells changed the investigation from a set of factory properties into a regional aquifer and drinking-water case.",
        publisher: "U.S. Environmental Protection Agency cleanup record",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201877",
        reach: "Regional",
      },
      {
        date: "September 2022",
        headline: "EPA selects additional cleanup for the AVX source area",
        summary: "The later decision shows why the Olean story spans generations: emergency water protection came first, while source-area investigation and groundwater treatment continued decades later.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/newsreleases/epa-finalizes-cleanup-plan-address-additional-contaminated-groundwater-olean-well",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Olean Well Field Superfund Cleanup Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201877",
      },
      {
        title: "Olean Well Field DEC Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905014/",
      },
      {
        title: "EPA Selects Additional Olean Groundwater Cleanup",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/newsreleases/epa-finalizes-cleanup-plan-address-additional-contaminated-groundwater-olean-well",
      },
    ],
  },
  {
    id: "peter-cooper-gowanda",
    name: "Peter Cooper Corporation — Gowanda",
    municipality: "Gowanda",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Former animal-glue and industrial-adhesive works along Cattaraugus Creek. Manufacturing operated from 1904 into the 1980s, and a five-acre elevated area received glue-manufacturing sludge from 1925 to 1970. The closed Class 4 site remains under long-term management.",
    evidenceStatus: "well-documented",
    coordinates: [-78.92805924758444, 42.458173855707706],
    newsEvents: [
      {
        date: "1904–1985",
        headline: "Animal-glue production creates a two-site waste history",
        summary: "The Gowanda works manufactured glue and adhesives and managed sludge on site, while other factory waste was transported to the separate Markhams property in Dayton.",
        publisher: "New York State Department of Environmental Conservation record",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905003A/ROD.HW.905003A.2005-09-30.petercooper_ou1.pdf",
        reach: "Regional",
      },
      {
        date: "August 2005",
        headline: "Residents and the Seneca Nation question the proposed cleanup",
        summary: "About 50 residents, business owners, officials, and a Seneca Nation representative attended EPA's public meeting. The formal record preserves questions about exposure, health effects, remedy scope, effectiveness, and long-term maintenance.",
        publisher: "U.S. Environmental Protection Agency Record of Decision",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905003A/ROD.HW.905003A.2005-09-30.petercooper_ou1.pdf",
        reach: "Local",
      },
      {
        date: "2019-2020",
        headline: "The former glue works leaves Superfund and reopens as Gateway Park",
        summary: "Local redevelopment converted a previously unusable creekfront industrial property into public space, while groundwater monitoring, landfill-gas venting, land restrictions, and five-year reviews continued beneath the reuse story.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://19january2021snapshot.epa.gov/newsreleases/epa-deletes-peter-cooper-superfund-site-gowanda-new-york-federal-superfund-list_.html",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Peter Cooper Gowanda 2021 Annual Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905003A/Report.HW.905003A.2022-10-04.2021_Annual_Report.pdf",
      },
      {
        title: "Peter Cooper Gowanda Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905003A/ROD.HW.905003A.2005-09-30.petercooper_ou1.pdf",
      },
    ],
  },
  {
    id: "peter-cooper-markhams",
    name: "Peter Cooper–Markhams Superfund Site",
    municipality: "Dayton / Markhams",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Former disposal property on Bentley Road that received wastes from the Peter Cooper animal-glue operation in Gowanda. The remedy consolidated and capped waste, added drainage and erosion controls, and requires continuing inspection and land-use controls.",
    evidenceStatus: "well-documented",
    coordinates: [-79.01189213670254, 42.39289274789518],
    newsEvents: [
      {
        date: "2006",
        headline: "Federal remedy contains transported glue-manufacturing waste at Markhams",
        summary: "EPA selected consolidation, a low-permeability cover, drainage and erosion controls, and continuing land-use restrictions for the rural receiving property.",
        publisher: "U.S. Environmental Protection Agency Record of Decision",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905003B/ROD.HW.905003B.2006-12-01.FINAL.pdf",
        reach: "Regional",
      },
      {
        date: "Long-term phase",
        headline: "A rural receiving property remains connected to a factory miles away",
        summary: "The human geography is unusual: Dayton-area land carries waste generated in Gowanda. Inspections, access limits, erosion controls, and deed restrictions remain local obligations even though the manufacturing source closed elsewhere.",
        publisher: "U.S. Environmental Protection Agency Record of Decision",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905003B/ROD.HW.905003B.2006-12-01.FINAL.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Peter Cooper–Markhams Superfund Record of Decision",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905003B/ROD.HW.905003B.2006-12-01.FINAL.pdf",
      },
      {
        title: "Peter Cooper–Markhams DEC Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905003B/",
      },
    ],
  },
  {
    id: "moench-tanning-gowanda",
    name: "Moench Tanning",
    municipality: "Gowanda",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Former chrome-leather tannery and captive industrial landfill on Palmer Street. Historic records document major wastewater loading to Cattaraugus Creek, followed by a 1971 treatment plant, sludge disposal, closure, and continuing groundwater and creek-edge management.",
    evidenceStatus: "well-documented",
    coordinates: [-78.92448493440273, 42.448851221364386],
    newsEvents: [
      {
        date: "1992-present",
        headline: "A creek-edge tannery landfill moves from closure into long-term erosion control",
        summary: "The landfill was capped, but its position beside Cattaraugus Creek made bank stability, storm damage, groundwater monitoring, and repair part of the continuing community record rather than a one-time closure.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905004/Report.HW.905004.2022-02-08.2021%20PRR.pdf",
        reach: "Local",
      },
      {
        date: "2025",
        headline: "Gowanda planning identifies the former tannery as both controlled land and a creekfront reuse question",
        summary: "The state-designated Brownfield Opportunity Area record places the capped tannery beside homes, Cattaraugus Creek, and the Zoar Valley Gateway area, documenting why reuse must preserve the landfill remedy and public access decisions together.",
        publisher: "New York Department of State / Village of Gowanda",
        url: "https://dos.ny.gov/system/files/documents/2025/08/v-gowanda-boa-designation-package1_3_22_final_compressed.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Moench Tanning Closure Work Plan and Company History",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905004/Work%20Plan.HW.905004.1989-08-01.CLOSURE_WORKPLAN_VOL-1.pdf",
      },
      {
        title: "Lake Erie and Tributaries Pollution Report — New York and Pennsylvania Sources",
        publisher: "U.S. Public Health Service",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000TDE4.TXT",
      },
      {
        title: "2023 Moench Tanning Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905004/Report.HW.905004.2024-01-31.2023%20PRR.pdf",
      },
      {
        title: "Moench Tanning Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905004/Report.HW.905004.2021-01-29.2020_PRR.pdf",
      },
      {
        title: "Moench Tanning Erosion-Control Completion Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905004/Report.HW.905004.2022-02-08.2021%20PRR.pdf",
      },
    ],
  },
  {
    id: "standard-portable-mayville",
    name: "Standard Portable",
    municipality: "Mayville",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former metalworking property where TCE was used and spent solvent was stored or disposed in an exterior underground septic tank. Investigations documented affected soil and groundwater extending onto adjacent village property; the cleanup record is separate from Mayville's PFAS investigation.",
    evidenceStatus: "well-documented",
    coordinates: [-79.49778113910106, 42.241675504839904],
    newsEvents: [
      {
        date: "Investigation era",
        headline: "TCE from a metalworking septic system is traced beyond the factory property",
        summary: "Sampling documented affected soil and groundwater extending onto adjacent village land, turning a small industrial disposal feature into a community land-use and monitoring issue.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/standport1109fs.pdf",
        reach: "Local",
      },
      {
        date: "Present",
        headline: "Two separate Mayville investigations require careful public explanation",
        summary: "Standard Portable's chlorinated-solvent cleanup and Mayville's later PFAS investigation occupy the same community but have different sources, compounds, boundaries, and response programs.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/investigation-at-the-mayville-pfas-site",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Standard Portable Cleanup Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/standport1109fs.pdf",
      },
      {
        title: "Standard Portable DEC Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C907030/",
      },
      {
        title: "Mayville PFAS Investigation Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/D907050/Report.DWC.D907050.2021-03-12.InvestigationReport_Public.pdf",
      },
    ],
  },
  {
    id: "anderson-cleaners-jamestown",
    name: "Anderson Cleaners",
    municipality: "Jamestown",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former dry-cleaning property at 5 Hunt Road where chlorinated volatile organic compounds affected soil and groundwater. DEC's Class 2 record calls for source removal or treatment, plume treatment and continuing monitoring.",
    evidenceStatus: "well-documented",
    coordinates: [-79.2663894340612, 42.09214554009021],
    newsEvents: [
      {
        date: "1985",
        headline: "A major fire becomes part of the site's environmental history",
        summary: "The cleanup work plan records that fire destroyed portions of the building and that firefighting water entered the dry-cleaning area. The record treats this as site history, not proof that the fire caused every later subsurface finding.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C907027/Work%20Plan.BCP.C907027.2006-02-14.Anderson_Cleaners_Supplemental_Investigation.pdf",
        reach: "Local",
      },
      {
        date: "2004-2015",
        headline: "Investigation expands from the former cleaner to groundwater and vapor pathways",
        summary: "The public file traces years of borings, monitoring wells, dense-product removal, groundwater treatment and soil-vapor evaluation—showing how a small commercial property produced a much longer stewardship story.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C907027/",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Anderson Cleaners Remedial Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/ac1.pdf",
      },
      {
        title: "Anderson Cleaners DEC Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907027/",
      },
    ],
  },
  {
    id: "keywell-vac-air-frewsburg",
    name: "Keywell / Vac-Air",
    municipality: "Frewsburg / Town of Carroll",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former high-grade scrap-metal processing property where TCE was used for degreasing. The Class 4 remedy includes groundwater treatment, a barrier wall, paved cover, drainage controls, access restrictions, monitoring, and continuing site management near Conewango Creek.",
    evidenceStatus: "well-documented",
    coordinates: [-79.15697445141898, 42.06836344538131],
    newsEvents: [{ date: "1966-1987 operating history", headline: "Court testimony documents TCE sludge pits, ground drying and road spreading", summary: "The federal appellate record describes solvent sludge placed in ponds or pits, spread to dry, and TCE oil used at times for dust suppression, followed by discovery of deteriorated buried drums and groundwater concerns near a public supply.", publisher: "U.S. Court of Appeals for the Second Circuit", url: "https://openjurist.org/33/f3d/159/keywell-corporation-v-c-weinstein", reach: "Regional" }, { date: "February 13, 2020", headline: "Local officials receive permission to pursue controlled redevelopment", summary: "After years of cleanup and monitoring, DEC allowed the town and county to proceed with development planning, while the barrier, cover, treatment and site-management system remained part of any future occupancy.", publisher: "The Post-Journal", url: "https://www.post-journal.com/news/top-stories/2020/02/former-vac-air-property-on-right-track/", reach: "Local" }],
    sources: [
      {
        title: "Keywell / Vac-Air Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907016/Report.HW.907016.2020-07-30.2019%20Periodic%20Review%20Report.pdf",
      },
      {
        title: "Keywell / Vac-Air DEC Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907016/",
      },
    ],
  },
  {
    id: "machias-gravel-pit",
    name: "Machias Gravel Pit",
    municipality: "Machias",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Former gravel-pit storage area where approximately 600 drums of Motorola industrial waste were reportedly placed in 1978. Records describe solvents, acids, epoxy wastes and cutting oils; removal, soil-vapor extraction, groundwater treatment and long-term monitoring followed.",
    evidenceStatus: "well-documented",
    coordinates: [-78.5283532088013, 42.40917081453386],
    newsEvents: [
      {
        date: "1978",
        headline: "An inactive town gravel pit becomes a temporary industrial-drum site",
        summary: "Historical records reported approximately 600 drums from Motorola's Arcade plant, but later documentation accounts for 184 removed drums and does not verify the disposition of the entire estimate.",
        publisher: "New York State Department of Environmental Conservation record",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905013/ROD.HW.905013.1992-11-01.machias_gravel.pdf",
        reach: "Regional",
      },
      {
        date: "1978-1980s",
        headline: "Some waste oil from the drum shipment is reportedly spread on town roads",
        summary: "The site-management record says town personnel reportedly used some received oils for dust control. It also states that available records do not establish how many drums were used this way or the final disposition of every drum in the original estimate.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905013/Work%20Plan.HW.905013.2011-11-21.SiteManagementPlan-FINAL.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Machias Gravel Pit Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905013/Report.HW.905013.2023-07-26.PERIODIC%20REVIEW%20REPORT%202022_Final.pdf",
      },
      {
        title: "Machias Gravel Pit Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905013/ROD.HW.905013.1992-11-01.machias_gravel.pdf",
      },
    ],
  },
  {
    id: "ischua-landfill",
    name: "Ischua Landfill",
    municipality: "Town of Ischua",
    county: "Cattaraugus",
    category: "cleanup",
    pfasStatus: "documented",
    pfasEvidence: ["detection", "investigation"],
    pfasCompounds: [
      {
        name: "Perfluorooctanoic acid",
        abbreviation: "PFOA / C8",
        finding: "detected",
        medium: "groundwater",
      },
      {
        name: "Perfluorooctanesulfonic acid",
        abbreviation: "PFOS",
        finding: "detected",
        medium: "groundwater",
      },
    ],
    pfasScopeNote:
      "These compounds were identified as groundwater contaminants of concern. The record does not establish PFAS production or APFO use at the landfill.",
    summary:
      "Inactive capped landfill that operated from 1972 to 1975 and reportedly received industrial, commercial, medical and household refuse, including TCE-laced sawdust. DEC detected PFOA, PFOS and 1,4-dioxane in groundwater and lists the property as a potential site under characterization.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.3679499897936, 42.247621807867375],
    newsEvents: [
      {
        date: "2020-2022",
        headline: "New sampling reopens questions at a rural landfill closed since the 1970s",
        summary: "New York's inactive-landfill initiative detected PFOA, PFOS, and 1,4-dioxane in groundwater and ordered a fuller characterization of the waste trenches, groundwater, surface water, sediment, and nearby receptor pathways.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905048/Work%20Plan.HW.905048.2022-10-18.Ischua_Landfill_WA.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Ischua Landfill Site-Characterization Scope",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905048/Work%20Plan.HW.905048.2022-10-18.Ischua_Landfill_WA.pdf",
      },
      {
        title: "Ischua Landfill DEC Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905048/",
      },
    ],
  },
  {
    id: "batavia-former-mgp",
    name: "Batavia Former Manufactured Gas Plant",
    municipality: "Batavia",
    county: "Genesee",
    category: "cleanup",
    summary:
      "Former Evans Street gasworks that operated from 1855 until sometime after 1909. DEC investigations documented coal tar, PAHs and volatile compounds in soil or groundwater; the selected remedy combines excavation, a site cover, groundwater monitoring and continuing controls.",
    evidenceStatus: "well-documented",
    coordinates: [-78.18620030566001, 42.99561104424735],
    newsEvents: [
      {
        date: "May 2019-March 2020",
        headline: "Batavia asks cleanup planners to preserve its historic gas holder",
        summary: "The city historian and public comments emphasized the circular 1855-era structure's landmark value. DEC responded that the selected stabilization work would not require demolition and would protect the building's stability.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C819019/ROD.BCP.C819019.2020-09-28.ROD.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Batavia Former MGP Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C819019/ROD.BCP.C819019.2020-09-28.ROD.pdf",
      },
      {
        title: "Batavia Former MGP Site Characterization Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/819019/Report.HW.819019.2012-11-27.Final_SC_Report.pdf",
      },
    ],
  },
  {
    id: "lapp-insulator-company",
    name: "Lapp Insulator Company",
    municipality: "Le Roy",
    county: "Genesee",
    category: "cleanup",
    summary:
      "Approximately 66-acre electrical-insulator manufacturing property active since 1917. DEC records document oils and chlorinated solvents in defined soil and groundwater areas; cleanup has included excavation, in-situ treatment, covers, sub-slab systems and long-term groundwater management.",
    evidenceStatus: "well-documented",
    coordinates: [-78.00613549305518, 42.971070570675444],
    sources: [
      {
        title: "Lapp Insulator Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/819017/Report.HW.819017.2021-03-10.Site_Management_Plan_SMP.pdf",
      },
      {
        title: "Lapp Insulator Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/819017/ROD.HW.819017.2009-03-31.Record_of_Decision_Lapp_Insulator_Site.pdf",
      },
    ],
  },
  {
    id: "old-upper-mountain-road-landfill",
    name: "Old Upper Mountain Road Landfill",
    municipality: "Lockport",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former municipal disposal area reportedly used from 1921 through the 1950s. Municipal refuse, incinerator ash and industrial material were placed in a ravine; the state remedy addresses landfill material together with affected Gulf Creek sediment and floodplain soil.",
    evidenceStatus: "well-documented",
    coordinates: [-78.72441412673288, 43.166278355547604],
    newsEvents: [
      {
        date: "Fall 2022",
        headline: "New York relocates a combined sewer out of the dump and Gulf Creek",
        summary: "Roughly 5,000 feet of the Gulf Interceptor were rerouted before landfill excavation, separating active sewer infrastructure from a ravine filled with waste and opening the creek corridor for remediation.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932112/Fact%20Sheet.HW.932112.2023-01-20.Old%20Upper%20Mountain%20Road%20Community%20Newsletter.pdf",
        reach: "Local",
      },
      {
        date: "March–December 2023",
        headline: "Crews begin excavating the dump, floodplain, and Gulf Creek sediment",
        summary: "DEC reported that ash, glass, slag, municipal and industrial waste, and affected creek material were being excavated and consolidated in an engineered cell; the dated update placed construction at about 60 percent before winter shutdown.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932112/Fact%20Sheet.HW.932112.2023-12-21.Old%20Upper%20Mountain%20Road%20Community%20Newsletter.pdf",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Old Upper Mountain Road Cleanup Newsletter",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932112/Fact%20Sheet.HW.932112.2023-12-21.Old%20Upper%20Mountain%20Road%20Community%20Newsletter.pdf",
      },
      {
        title: "Old Upper Mountain Road Engineering Design Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932112/Report.HW.932112.2022-07-19.Old%20Upper%20MOuntain%20Road%20City%20of%20Lockport%20LF%20ESD.pdf",
      },
      {
        title: "Old Upper Mountain Road Field Investigation Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932112/Report.HW.932112.2010-03-12.FieldIinvestigationReport.pdf",
      },
    ],
  },
  {
    id: "vanchlor-company-landfill",
    name: "Vanchlor Company Landfill",
    municipality: "Lockport",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Approximately five-acre former quarry disposal area used from 1957 to 1982, principally for silicon-tetrachloride manufacturing by-products reportedly placed in drums and trenches with crushed limestone. The landfill was capped in 1988 and remains under monitoring and institutional controls.",
    evidenceStatus: "well-documented",
    coordinates: [-78.70308251398365, 43.18568184822892],
    newsEvents: [{ date: "1957-1988", headline: "A quarry becomes a drum-and-trench chemical landfill and is capped", summary: "Historical records describe silicon-tetrachloride by-products placed with crushed limestone before the five-acre disposal area was closed under a cap; monitoring and institutional controls remain necessary because waste stayed in place.", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/932039/Report.HW.932039.2024-04-02.Revised_Vanchlor_2023_PRR.pdf", reach: "Local" }],
    sources: [
      {
        title: "Vanchlor Landfill 2023 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932039/Report.HW.932039.2024-04-02.Revised_Vanchlor_2023_PRR.pdf",
      },
      {
        title: "Vanchlor Landfill Groundwater Compliance Evaluation",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932039/Report.HW.932039.2019-09-25.RCRA%20GW%20CME.pdf",
      },
    ],
  },
  {
    id: "olean-refinery-river-street",
    name: "Olean Refinery Corridor — 1641 River Street",
    municipality: "Olean",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Approximately 24.7-acre brownfield occupying part of a much larger petroleum refining and storage complex that operated from about 1876 to 1954. Investigations documented petroleum product and affected subsurface soil; state-supervised investigation and cleanup planning continue.",
    evidenceStatus: "well-documented",
    coordinates: [-78.4365298269535, 42.10002812461163],
    newsEvents: [{ date: "May-June 2024", headline: "A 25-acre refinery parcel enters public brownfield review", summary: "DEC accepted the application and opened public comment on investigation and cleanup of one defined piece of Olean's much larger former refinery corridor.", publisher: "New York State Department of Environmental Conservation", url: "https://dec.ny.gov/news/environmental-notice-bulletin/2024-05-08/public-notice/city-of-olean-brownfield-cleanup-program-bcp-application-from-1641-river-street-llc-for-a-site-known-as-1641-river-street-site-site-id-c905049", reach: "Local" }, { date: "March 25, 2026", headline: "A $6 million oil-contamination cleanup receives local tax support", summary: "Local reporting documented a sales-tax abatement for cleanup of the 25-acre property; the environmental work, rather than projected job creation, is the central significance for this history.", publisher: "Olean Star", url: "https://oleanstar.com/blog/2026/03/25/ida-grants-480000-sales-tax-abatement-for-olean-brownfield-cleanup-by-benson/", reach: "Local" }],
    sources: [
      {
        title: "1641 River Street Subsurface Investigation",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C905049/Application.BCP.C905049.2020-01-01.Subsurface%20Environmental%20Investigation%20Report.pdf",
      },
      {
        title: "1641 River Street Brownfield Application",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C905049/Application.BCP.C905049.2024-04-15.Complete%20Application.pdf",
      },
    ],
  },
  {
    id: "olean-refinery-homer-street",
    name: "Olean Refinery Corridor — 251 Homer Street",
    municipality: "Olean",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Former refinery-area brownfield where cleanup removed more than 10,000 feet of abandoned refinery piping, approximately 52,000 tons of petroleum-affected soil and approximately 2,000 tons of arsenic-affected soil before controlled commercial reuse.",
    evidenceStatus: "well-documented",
    coordinates: [-78.44361315236398, 42.096916711459215],
    sources: [
      {
        title: "251 Homer Street Cleanup Completion Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/der/factsheet/c905037coc.pdf",
      },
      {
        title: "251 Homer Street Remedial Investigation Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C905037/Report.BCP.C905037.2016-10-31.RI-IRM-AA%20Report%20-%20FINAL.pdf",
      },
    ],
  },
  {
    id: "former-niagara-motors-dunkirk",
    name: "Former Niagara Motors",
    municipality: "Dunkirk",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former industrial property used from at least 1919 through the 1970s. Later inspections documented drums, petroleum material, lead-affected soil and leaking-tank impacts; cleanup removed source material and placed a cover over residual contamination for commercial reuse.",
    evidenceStatus: "well-documented",
    coordinates: [-79.32285203242971, 42.47637671726439],
    newsEvents: [
      {
        date: "1999-2000",
        headline: "Inspectors find drums and petroleum evidence at an abandoned Dunkirk factory",
        summary: "The discovery led to drum removal and demolition, followed by a broader public brownfield cleanup of petroleum- and lead-affected soil and installation of a controlled cover.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/niamotoprap.pdf",
        reach: "Local",
      },
      {
        date: "November 2024",
        headline: "The remediated property supports temporary industrial project staging",
        summary: "Local reporting documented a lease for project staging, illustrating controlled reuse of the former factory parcel without implying that its land-use and soil-management obligations ended.",
        publisher: "Observer Today",
        url: "https://www.observertoday.com/news/top-stories/2024/11/wells-leasing-brownfield-for-project-staging/",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Former Niagara Motors Proposed Remedial Action Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/niamotoprap.pdf",
      },
      {
        title: "Former Niagara Motors Cleanup Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/regions_pdf/niamotorfs.pdf",
      },
    ],
  },
  {
    id: "tennessee-gas-station-224",
    name: "Tennessee Gas Pipeline Station 224",
    municipality: "French Creek / Clymer",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Natural-gas compressor station where PCB-containing compressor oil affected defined soil, drainage, and tributary-sediment areas. Excavation and containment were completed in 1997; caps, erosion controls, sediment sampling, and annual certification continue.",
    evidenceStatus: "well-documented",
    coordinates: [-79.69702401856698, 42.0549802569183],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "Station 224 has operated along Ravlin Hill Road since 1959 as part of a natural-gas transmission system. Historic starting-air compressors used PCB-containing oil that entered building drains and defined outdoor areas.",
        "DEC lists the 116.3-acre controlled property as State Superfund site 907014, Class 4. Only defined portions of the larger station property contained the documented contamination.",
      ],
      timeline: [
        { period: "1959 onward", event: "The property operated as a natural-gas compressor station." },
        { period: "Historic operating period", event: "PCB-containing starting-air-compressor oil entered building drains and several defined outdoor management areas." },
        { period: "1997", event: "PCB-affected soil and sediment were excavated, a drainline was grouted, and covers and erosion controls were installed." },
        { period: "2025 review", event: "Annual inspection, sediment sampling, and certification found the controls functioning as designed." },
      ],
      documentedImpacts: [
        "PCB-containing oil affected drainline material, localized soil, burn-pit and scrap-yard areas, and sediment in an on-site tributary.",
        "The remedy record does not support treating the entire 206-acre operating station or surrounding farms as one contamination area.",
      ],
      cleanupAndControls: [
        "The remedy removed material above cleanup thresholds, capped defined residual areas, stabilized tributary banks, and established groundwater and sediment monitoring.",
        "Land-use restrictions, excavation procedures, cap maintenance, access controls, and annual certification remain required.",
      ],
      presentDay: [
        "Station 224 is an operating industrial property with a completed remedy under continuing Class 4 management.",
        "Continuing operation does not remove the obligation to protect capped areas, follow excavation procedures, and certify the remedy each year.",
      ],
      researchNotes: [
        "Update sediment trends and control status from future annual periodic-review reports.",
        "Keep the 116.3-acre controlled property and the larger operating-station acreage distinct when describing the site.",
        "Do not treat routine monitoring as evidence of a current off-site exposure; report a completed pathway only if DEC documents one.",
      ],
    },
    sources: [
      {
        title: "Station 224 Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907014/ROD.HW.907014.1997-03-01.tennessee_gas.pdf",
      },
      {
        title: "Station 224 2025 Periodic Review",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907014/Report.HW.907014.2025-12-17.2025%20PRR.pdf",
      },
    ],
  },
  {
    id: "gateway-lofts-chautauqua-hardware",
    name: "Gateway Lofts / Former Chautauqua Hardware",
    municipality: "Jamestown",
    county: "Chautauqua",
    category: "cleanup",
    pfasStatus: "documented",
    pfasEvidence: ["detection", "investigation"],
    pfasCompounds: [
      {
        name: "Perfluorodecanoic acid",
        abbreviation: "PFDA",
        finding: "detected",
        medium: "groundwater",
        note: "DEC reported PFDA up to 41 ppt in the remedial-investigation summary.",
      },
    ],
    pfasScopeNote:
      "PFDA, not generic PFAS alone, is the compound identified as a contaminant of concern. The record does not establish that Chautauqua Hardware was the sole source.",
    summary:
      "Former woolen mill and hardware-manufacturing complex beside the Chadakoin River where electroplating, die-casting, and metal finishing left metals, PCBs, chlorinated solvents, and vapor concerns. DEC determined that the site posed a significant threat and selected a multi-part remedy.",
    evidenceStatus: "well-documented",
    coordinates: [-79.23153119845527, 42.093587178024066],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "A woolen mill began operating here in 1888. Chautauqua Hardware later manufactured furniture hardware using electroplating, die-casting, polishing, anodizing, and numerous metals and industrial compounds.",
        "DEC manages the property as Brownfield Cleanup Program site C907046; the related off-site record is explained here rather than mapped as a duplicate pin.",
      ],
      timeline: [
        { period: "1888–late 1940s", event: "Jamestown Woolen Spinning and Empire Worsted Mills produced yarn and cloth." },
        { period: "By 1963–2005", event: "Chautauqua Hardware conducted metal casting, plating, finishing, and fabrication." },
        { period: "2022", event: "DEC selected excavation, groundwater interception, vapor mitigation, a cover, and long-term controls." },
        { period: "Remedial construction", event: "Cleanup and redevelopment work began implementing the selected restricted-residential remedy while off-site evaluation remained a separate state record." },
      ],
      documentedImpacts: [
        "DEC identified metals, PCBs, PAHs, TCE and breakdown products, PFDA in groundwater, and soil-vapor intrusion concerns.",
        "Investigation included riverbank soil and the adjacent Chadakoin River; the cleanup boundary should not be treated as a complete off-site plume boundary.",
      ],
      cleanupAndControls: [
        "The remedy calls for roughly 14,000 tons of soil removal, PCB-source excavation, a reactive groundwater barrier, vapor systems, clean cover, and hazardous-building-material management.",
        "An easement, groundwater restrictions, excavation controls, monitoring, and periodic certification support restricted-residential reuse.",
      ],
      presentDay: [
        "The redevelopment name does not replace the site's documented woolen-mill and metal-manufacturing history or its continuing cleanup obligations.",
        "Restricted-residential reuse depends on the cover, vapor systems, groundwater barrier, easement, and continuing certification remaining effective.",
      ],
      researchNotes: [
        "Track construction completion and DEC's separately managed off-site investigation.",
        "Do not present PFAS detection as proof that the historic hardware operation was the sole source without a source-specific DEC finding.",
        "Keep the adjacent Chadakoin River investigation linked but separate from the parcel remedy and building controls.",
      ],
    },
    sources: [
      {
        title: "Gateway Lofts 2022 Decision Document",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C907046/Decision%20Document.BCP.C907046.2022-03-08.DD_Final.pdf",
      },
      {
        title: "Gateway Lofts Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C907046/",
      },
    ],
  },
  {
    id: "jamestown-brewery-brownfield",
    name: "Jamestown Brewery Brownfield",
    municipality: "Jamestown",
    county: "Chautauqua",
    category: "cleanup",
    pfasStatus: "documented",
    pfasEvidence: ["detection", "investigation"],
    pfasCompounds: [
      { name: "Perfluorobutanoic acid", abbreviation: "PFBA", finding: "detected", medium: "groundwater" },
      { name: "Perfluoropentanoic acid", abbreviation: "PFPeA", finding: "detected", medium: "groundwater" },
      { name: "Perfluorobutanesulfonic acid", abbreviation: "PFBS", finding: "detected", medium: "groundwater" },
      { name: "Perfluorohexanoic acid", abbreviation: "PFHxA", finding: "detected", medium: "groundwater" },
      { name: "Perfluoroheptanoic acid", abbreviation: "PFHpA", finding: "detected", medium: "groundwater" },
      { name: "Perfluorohexanesulfonic acid", abbreviation: "PFHxS", finding: "detected", medium: "groundwater" },
      { name: "Perfluorooctanoic acid", abbreviation: "PFOA / C8", finding: "detected", medium: "groundwater" },
      { name: "Perfluoroheptanesulfonic acid", abbreviation: "PFHpS", finding: "detected", medium: "groundwater" },
      { name: "Perfluorononanoic acid", abbreviation: "PFNA", finding: "detected", medium: "groundwater" },
      { name: "Perfluorooctanesulfonic acid", abbreviation: "PFOS", finding: "detected", medium: "groundwater" },
      { name: "Perfluorodecanoic acid", abbreviation: "PFDA", finding: "detected", medium: "groundwater" },
    ],
    pfasScopeNote:
      "The listed compounds occurred in particular wells and sampling rounds; they were not uniformly present across the property. The record does not identify APFO as the original material or attribute every PFAS to one former tenant.",
    summary:
      "Downtown property historically used by a photo facility, dry cleaner, taxi company, automotive repair shop, and parking garage. Deep chlorinated-solvent contamination required major excavation, groundwater treatment, vapor mitigation, and continuing controls; recent site-well monitoring also documented benzene, PFOA, and PFOS above applicable groundwater values.",
    evidenceStatus: "well-documented",
    coordinates: [-79.2432394993632, 42.09551127136597],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "The DEC cleanup name reflects a redevelopment proposal, not a documented historic brewery operation. Commercial uses since the 1880s included photography, dry cleaning, vehicle repair, taxi service, and parking.",
        "DEC determined that the site posed a significant threat and created a related off-site record. That investigation is linked to this parent page rather than shown as another pin.",
      ],
      timeline: [
        { period: "1886 onward", event: "Successive commercial uses occupied the downtown parcel." },
        { period: "2018", event: "About 2,014 tons of affected soil and fill were removed and a sub-slab depressurization system was installed." },
        { period: "2021", event: "DEC selected the final brownfield remedy after evaluating the chlorinated-solvent source and off-site migration concerns." },
        { period: "2022–present", event: "DEC selected and oversees groundwater treatment, vapor mitigation, monitoring, and site management." },
      ],
      documentedImpacts: [
        "DEC identified PCE, TCE, dichloroethene, vinyl chloride, petroleum-related compounds, and PFAS in investigated soil, groundwater, or vapor.",
        "Recent periodic-review monitoring documented benzene, PFOA, and PFOS above applicable groundwater standards or guidance values in specific site monitoring wells.",
        "These results describe groundwater monitoring at the cleanup site; they are not evidence of contamination in the public drinking-water supply, which is separate from the site groundwater.",
      ],
      cleanupAndControls: [
        "Removal included approximately 430 tons characterized as hazardous; in-situ injections address the remaining chlorinated-solvent plume.",
        "A cover, active vapor system, easement, groundwater restriction, excavation plan, and periodic review remain part of the remedy.",
      ],
      presentDay: [
        "DEC classifies the brownfield work as completed, while groundwater, vapor, and institutional controls continue under site management.",
        "The project name should not be used as evidence that a brewery historically operated here; the documented uses are the commercial and automotive businesses listed in the record.",
      ],
      researchNotes: [
        "Use future periodic reviews to track plume reduction and the off-site investigation.",
        "Keep groundwater-monitoring detections distinct from finished drinking-water quality and from conditions at neighboring properties.",
      ],
    },
    sources: [
      {
        title: "Jamestown Brewery Decision Document",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C907047/Decision%20Document.BCP.C907047.2021-01-04.Decision%20Document_Jamestown%20Brewery.pdf",
      },
      {
        title: "Jamestown Brewery 2025 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C907047/Report.BCP.C907047.2026-03-03.PRR_and_IC-EC_Certification_4_21_24_to_4_21_25.pdf",
      },
      {
        title: "Jamestown Brewery Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C907047/",
      },
    ],
  },
  {
    id: "closed-alumax-extrusions",
    name: "Closed Alumax Extrusions",
    municipality: "Dunkirk",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former locomotive, heat-exchanger, specialty-steel, and aluminum-extrusion property within Dunkirk's Roberts Road complex. Source treatment was completed, but monitoring continues for chlorinated solvents and benzene in groundwater along with long-term land controls.",
    evidenceStatus: "well-documented",
    coordinates: [-79.31608370183818, 42.486107315578224],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "American Locomotive expanded onto this property around 1918. Later uses included heat-exchanger fabrication, specialty-steel production, and aluminum extrusion before Alumax closed the facility.",
        "DEC tracks the controlled property as completed Voluntary Cleanup Program site V00589, distinct from adjoining Roblin Steel and Edgewood records. That distinction prevents results from one monitoring network from being casually assigned to the entire Roberts Road industrial complex.",
      ],
      timeline: [
        { period: "1918–1962", event: "Locomotive and heat-exchanger manufacturing occupied the property." },
        { period: "1969–1993", event: "Specialty-steel and aluminum-extrusion operations followed." },
        { period: "2004 onward", event: "Source-area treatment using zero-valent iron was followed by long-term groundwater monitoring." },
        { period: "2024–2025 review", event: "DEC-reviewed monitoring continued to evaluate chlorinated compounds, vinyl chloride, and benzene in the remaining well network." },
      ],
      documentedImpacts: [
        "Investigations identified a chlorinated-solvent source near a suspected former tank and TCE-related groundwater contamination.",
        "DEC's 2025 periodic review reported benzene above the state groundwater standard in specific wells sampled during 2024, alongside continuing chlorinated-VOC and vinyl-chloride monitoring.",
        "DEC records distinguish the Alumax groundwater area from the adjoining Roblin Steel property.",
      ],
      cleanupAndControls: [
        "Source treatment, a maintained cover, excavation controls, restricted groundwater use, monitoring wells, and periodic certification manage remaining conditions.",
        "Monitoring continues until the site-specific chlorinated-VOC performance threshold is achieved.",
      ],
      presentDay: [
        "Completed program status records remedial construction; it does not mean that all monitoring and property controls have ended.",
        "The property is part of a larger industrial complex, but the Alumax remedy and monitoring network must remain distinct from neighboring Roblin and Edgewood records.",
      ],
      researchNotes: [
        "Track the annual groundwater threshold and any future DEC approval to close monitoring wells.",
        "Describe individual well results with their sampling year and location rather than generalizing them to the entire Roberts Road corridor.",
      ],
    },
    sources: [
      {
        title: "Closed Alumax Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/V00589/Report.VCP.V00589.2021-11-01.Revised_SMP.pdf",
      },
      {
        title: "Closed Alumax 2025 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/V00589/Report.VCP.V00589.2025-03-03.PRR_and_IC-EC_Certification.pdf",
      },
      {
        title: "Closed Alumax Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/V00589/",
      },
    ],
  },
  {
    id: "pelican-manufacturing-jamestown",
    name: "Pelican Manufacturing",
    municipality: "Jamestown",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former manufacturing property where TCE affected soil, groundwater, and surface-water pathways. Soil-vapor extraction, groundwater recovery, sediment removal, building demolition, and continuing property controls addressed the former Class 2 site.",
    evidenceStatus: "well-documented",
    coordinates: [-79.2464066053872, 42.111760971764355],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "Pelican Manufacturing occupied 2223 Washington Street. DEC's legacy record documents disposal of chlorinated hydrocarbons and confirmed TCE contamination.",
        "DEC now classifies site 907010 as completed Class C; EPA lists the property as a non-NPL CERCLA site. Those labels record completed remedial work and federal evaluation, while the continuing controls explain why the parcel is not equivalent to never-contaminated land.",
      ],
      timeline: [
        { period: "Manufacturing era", event: "Industrial operations at 2223 Washington Street used and disposed of chlorinated compounds associated with the later TCE cleanup." },
        { period: "1995", event: "DEC selected a remedy for TCE-affected soil, groundwater, and related pathways." },
        { period: "1990s–2003", event: "Treatment, sediment removal, building demolition, and additional soil removal were completed." },
        { period: "Present", event: "Engineering and institutional controls remain recorded for the property." },
      ],
      documentedImpacts: [
        "The principal documented contaminant was trichloroethene in soil, groundwater, and surface-water or sediment pathways.",
        "EPA's non-NPL status means the property was evaluated under CERCLA but was not placed on the federal National Priorities List.",
      ],
      cleanupAndControls: [
        "Cleanup included soil-vapor extraction, groundwater extraction and treatment, contaminated-sediment removal, and source-soil removal after demolition.",
        "Use restrictions preserve installed isolation and containment controls.",
        "The sequence of treatment followed by demolition and additional source removal is important: the final response was not limited to one technology or one environmental medium.",
      ],
      presentDay: [
        "Pelican is a completed cleanup with enduring legal and engineering controls, not an active federal NPL site.",
        "Its CERCLA profile and state completed classification describe regulatory history, not evidence that every former industrial parcel along Washington Street shares its conditions.",
      ],
      researchNotes: [
        "Keep Pelican distinct from nearby Former C&B Dry Cleaners and the former city landfill.",
        "Retain the completed-status distinction when grouping Jamestown's multiple chlorinated-solvent sites.",
      ],
    },
    sources: [
      {
        title: "Pelican Manufacturing Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907010/",
      },
      {
        title: "Pelican Manufacturing CERCLA Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0202672",
      },
    ],
  },
  {
    id: "former-dunkirk-steam-station",
    name: "Former Dunkirk Steam Generating Station",
    municipality: "Dunkirk",
    county: "Chautauqua",
    category: "industry",
    summary:
      "Lake Erie coal-fired power station whose generating units shut down between 2012 and 2015. The facility relinquished its major air and acid-rain permits after retirement; its separately located fly-ash landfill remains a distinct regulated solid-waste site.",
    evidenceStatus: "well-documented",
    coordinates: [-79.3516458, 42.4897974],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "The Point Drive station began operating in 1948 with two 100-megawatt coal-fired units. Two additional 200-megawatt units were added in 1959 and 1960, making the waterfront complex a major regional generating station.",
        "The station added or upgraded air-pollution controls over time, including electrostatic precipitators beginning in 1972 and fabric filtration, trona injection, carbon injection, and selective non-catalytic reduction work between 2009 and 2011.",
        "This entry records the retired industrial facility and its air-permit history, not a DEC remediation-site designation.",
        "Coal-combustion residuals were managed at a separate landfill in Pomfret, which has its own map entry and regulatory record.",
      ],
      timeline: [
        { period: "1948–1960", event: "Four coal-fired generating units entered service in two construction phases." },
        { period: "2012–2015", event: "The station's operating units were successively shut down or mothballed." },
        { period: "2019–2022", event: "Formal retirement actions were completed for the generating units." },
        { period: "2022", event: "The facility relinquished its Title V air and Acid Rain permits because of retirement." },
      ],
      documentedImpacts: [
        "DEC's retirement notice documents historical permitted emissions and shutdown credits; it is not a finding that the entire power-station property is a cleanup site.",
        "The retirement record quantified emission-reduction credits for nitrogen oxides and volatile organic compounds from three unit shutdowns, documenting the scale of permitted historical emissions without serving as an exposure study.",
        "The station and fly-ash landfill are linked historically but occupy separate properties and programs.",
      ],
      cleanupAndControls: [
        "Retirement included relinquishment of the Title V air and Acid Rain permits after the generating units ceased operating.",
        "Future demolition, reuse, or environmental work should be described from the applicable permit or cleanup record as it occurs.",
      ],
      presentDay: [
        "The marker preserves a major industrial and energy-history site after retirement.",
        "It should not be displayed as a completed cleanup unless the waterfront property enters and completes a documented remedial program.",
      ],
      researchNotes: [
        "Track formal decommissioning, redevelopment, and any later DEC remediation enrollment.",
        "Keep the station, its permitted emission history, and the separately regulated Pomfret ash landfill as linked but non-duplicate records.",
      ],
    },
    sources: [
      {
        title: "Dunkirk Station Retirement and Air-Permit Notice",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2022-07-27/completed-application/dunkirk-steam-generating-station",
      },
      {
        title: "Dunkirk Fly Ash Landfill Draft SPDES Permit and Station History",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/fs/projects/draftpermits/Region9/DraftPermit.IndSPDES.NY0202711.2025-03-10.pdf",
      },
    ],
  },
  {
    id: "dunkirk-fly-ash-landfill",
    name: "Dunkirk Fly Ash Landfill",
    municipality: "Pomfret",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Separately located industrial ash landfill associated with the retired Dunkirk generating station. DEC records a lined 42-acre disposal cell, leachate collection and recirculation, groundwater monitoring, and continuing solid-waste permitting.",
    evidenceStatus: "well-documented",
    coordinates: [-79.3965225, 42.4455635],
    story: {
      lastReviewed: "August 11, 2026",
      background: [
        "The Van Buren Road facility in Pomfret received coal-combustion ash associated with the Dunkirk power station. It is regulated as industrial solid-waste facility 07N21, not as a State Superfund or federal NPL site.",
        "The landfill is mapped separately because it is several miles from the waterfront generating station.",
        "DEC permit materials connect the site not only to Dunkirk but also to combustion residuals and emission-control byproducts from the Huntley and Oswego generating plants. Permitted streams have included fly ash, bottom ash, pyrites, treatment sludge, trona, grit-blasting waste, demineralizer resin, activated carbon, urea, and coal-yard debris.",
        "A lined disposal footprint, borrow area, leachate systems, monitoring points, and future final-cover area are different features within the property. The pin marks the regulated facility, not an assertion that all land around Van Buren Road contains ash.",
      ],
      timeline: [
        { period: "Power-generation era", event: "The facility managed fly ash and related coal-combustion residuals from Dunkirk generation." },
        { period: "2015", event: "The generating station entered mothballed status, prompting review of the landfill's future." },
        { period: "2022", event: "DEC processed the generating station's permanent-retirement notice, further separating the retired waterfront plant from the landfill's continuing waste-management obligations." },
        { period: "2023 report", event: "The landfill continued regulated operation, leachate management, monitoring, and permit-renewal review." },
        { period: "2024-2025", event: "DEC records continued water-discharge and landfill permit review, while financial-assurance estimates addressed eventual final cover and closure work." },
      ],
      documentedImpacts: [
        "The DEC annual report documents a lined disposal cell, primary and secondary leachate systems, groundwater monitoring, and financial planning for final cover.",
        "Those engineered systems and sampling obligations are safeguards for managing buried ash; their existence alone does not establish an off-site release.",
        "Coal ash should not be labeled radiological or Superfund without a separate site-specific regulatory finding.",
      ],
      cleanupAndControls: [
        "The facility uses double-liner and leachate-management systems and submits monitoring and annual operating information to DEC.",
        "Closure, post-closure care, and financial assurance remain part of the long-term solid-waste framework.",
      ],
      presentDay: [
        "This is continuing waste infrastructure linked to a retired power plant, not a completed brownfield cleanup or a radiological site designation.",
        "The landfill and waterfront station therefore remain separate pins even though one industrial history connects them.",
      ],
      researchNotes: [
        "Update the page when DEC issues a renewed permit or approves a final closure plan.",
        "Use groundwater and leachate results from the relevant reporting year before describing any trend or migration pathway.",
      ],
    },
    sources: [
      {
        title: "NRG Dunkirk Industrial Landfill 2023 Annual Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/fs/projects/SWMF/Annual%20Reports_Solid%20Waste%20Management%20Facility/Annual%20Reports_by%20Activity%20Type/Landfill/Landfill%20Annual%20Reports%20-%202023/R9/07N21_NRG_Dunkirk_Landfill_ind_R9_2023.2024-03-01.AR.pdf",
      },
      {
        title: "Dunkirk Station Retirement and Air-Permit Notice",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2022-07-27/completed-application/dunkirk-steam-generating-station",
      },
    ],
  },
  {
    id: "fmc-dublin-road-landfill",
    name: "FMC Dublin Road Landfill",
    municipality: "Shelby and Ridgeway",
    county: "Orleans",
    category: "cleanup",
    summary:
      "Former federal Superfund landfill used from 1933 to 1968 for wastes from the Niagara Sprayer and FMC pesticide operation in Middleport. DDT, DDD, DDE, lindane-related compounds, metals, and other wastes affected several environmental media; the remedy consolidated and capped waste, treated water, restored wetlands, and established continuing controls.",
    evidenceStatus: "well-documented",
    coordinates: [-78.441212, 43.21636],
    newsEvents: [
      {
        date: "1933-1968",
        headline: "Middleport pesticide waste is transported to a separate rural disposal property",
        summary: "The Dublin Road record documents how production residues, laboratory material, ash, debris, and equipment-cleaning waste extended FMC's environmental footprint beyond the plant community.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/newsreleases/epa-completes-cleanup-fmc-corp-landfill-superfund-site",
        reach: "Regional",
      },
      {
        date: "2020-present",
        headline: "Superfund deletion begins stewardship rather than erasing the landfill",
        summary: "EPA deletion and state Class 4 status followed construction of the remedy. The capped waste, wetland restoration, water restrictions, inspections, and periodic reviews remain part of the neighboring community's land-use record.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/newsreleases/epa-completes-cleanup-fmc-corp-landfill-superfund-site",
        reach: "Local",
      },
    ],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "The 30-acre Dublin Road property lies in the towns of Shelby and Ridgeway. From 1933 through 1968, approximately six acres received coal ash, cinders, laboratory material, building debris, lime-sulfur residues, and residues from pesticide-production areas and equipment associated with the Middleport plant.",
        "EPA and DEC treated Dublin Road as a distinct disposal site. Its history is directly related to FMC Middleport, but its landfill boundary, remedy, and present-day controls are separate.",
      ],
      timeline: [
        { period: "1933-1968", event: "Niagara Sprayer and FMC used part of the property for disposal of pesticide-production residues and other wastes." },
        { period: "1993", event: "EPA and DEC selected a remedy for contaminated soil, sediment, debris, groundwater, and surface water." },
        { period: "Remedial construction", event: "Affected material was consolidated into an engineered on-site containment cell while water treatment and wetland restoration addressed migration pathways." },
        { period: "2015", event: "DEC determined that remedial construction was complete and reclassified the property from Class 2 to Class 4." },
        { period: "2020-present", event: "EPA deleted the site from the National Priorities List; state-supervised monitoring and site management continue." },
      ],
      documentedImpacts: [
        "EPA's remedy records identify DDT, DDD, DDE, alpha-, beta-, and gamma-hexachlorocyclohexane, including lindane, as site contaminants of concern.",
        "Arsenic, copper, lead, mercury, zinc, pesticides, and related wastes affected combinations of soil, sediment, groundwater, and surface water.",
        "A historical cleanup record is not evidence that present-day neighboring drinking water is contaminated; exposure and water-quality conclusions must come from current sampling records.",
      ],
      cleanupAndControls: [
        "The remedy excavated and consolidated affected soil, sediment, debris, and waste into an engineered on-site cell with treatment, leachate controls, and a soil cap.",
        "Groundwater and surface-water treatment, wetland restoration, inspections, monitoring, an environmental easement, and land and groundwater restrictions support the long-term remedy.",
      ],
      presentDay: [
        "Deletion from the federal Superfund list and Class 4 state status mean the remedy was constructed and is being managed; they do not mean the capped waste or long-term obligations disappeared.",
      ],
      researchNotes: [
        "Track DEC periodic reviews and any revisions to monitoring after decommissioning of the former groundwater extraction and treatment equipment.",
        "Keep the documented waste-transfer relationship to FMC Middleport visible while avoiding an unsupported continuous plume between the two properties.",
      ],
    },
    sources: [
      {
        title: "FMC Dublin Road Cleanup and NPL Deletion",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/newsreleases/epa-completes-cleanup-fmc-corp-landfill-superfund-site",
      },
      {
        title: "FMC Dublin Road Superfund Cleanup Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201207",
      },
      {
        title: "FMC Dublin Road 2026 Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/837001/Work%20Plan.HW.837001.2026-01-09.SMP%20Rev.%201.pdf",
      },
      {
        title: "FMC Dublin Road Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/837001/",
      },
    ],
  },
  {
    id: "lyndonville-west-avenue",
    name: "Lyndonville - West Avenue Landfill",
    municipality: "Lyndonville",
    county: "Orleans",
    category: "cleanup",
    summary:
      "Historic landfill and drainage-swale cleanup where DEC records identified arsenic, DDT, DDD, and DDE as constituents requiring control. Stormwater diversion, leachate collection, soil removal, a landfill cap, fencing, and land-use restrictions form the continuing remedy.",
    evidenceStatus: "well-documented",
    coordinates: [-78.39237616, 43.32384815],
    newsEvents: [
      {
        date: "Investigation and remedy design",
        headline: "West Avenue residents report recurring sulfide odors traced to landfill leachate",
        summary: "The focused feasibility record preserves a direct neighborhood observation and the technical follow-up that identified leachate entering the village drainage system as the principal odor source.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/837002/Report.HW.837002.2003-11-05.Revised%20Lyndonville%20Focused%20Feasibility%20Study%20Report.pdf",
        reach: "Local",
      },
      {
        date: "Long-term phase",
        headline: "Public-water extension and landfill controls protect the surrounding residential setting",
        summary: "The remedy combines cap and leachate management with monitoring and water-supply protections; current household-water claims still require current sampling rather than inference from the historic landfill.",
        publisher: "U.S. Environmental Protection Agency five-year review",
        url: "https://semspub.epa.gov/work/HQ/181076.pdf",
        reach: "Local",
      },
    ],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "The West Avenue record covers a historic landfill, an adjoining drainage swale, and landfill leachate that once entered the village industrial storm-sewer system.",
        "Investigations involved several nearby industrial parties. The atlas therefore reports the defined DEC site and remedy without assigning every material in the landfill to one company or operation.",
      ],
      timeline: [
        { period: "1978-1993", event: "State and local investigations examined odors, drainage, soil, surface water, and stormwater along West Avenue." },
        { period: "1994", event: "The property was reclassified as a Class 2 inactive hazardous-waste site." },
        { period: "2000-2001", event: "Stormwater diversion and a leachate collection system stopped landfill leachate from entering the West Avenue storm sewer." },
        { period: "2005 onward", event: "Drainage-swale soil removal, landfill capping, fencing, leachate management, and long-term site controls implemented the remedy." },
      ],
      documentedImpacts: [
        "DEC's site-management plan identifies arsenic, DDT, DDD, and DDE as constituents of potential concern in landfill or drainage-swale soil.",
        "Earlier investigations described pesticide concentrations as relatively low and potentially influenced by the area's agricultural background; the atlas does not infer a specific source beyond the official site record.",
        "Landfill leachate, erosion, and direct contact with remaining material were the principal pathways addressed by the remedy.",
      ],
      cleanupAndControls: [
        "The remedy removed affected drainage-swale soil and installed an asphalt and soil cap with a geosynthetic barrier over the landfill.",
        "Leachate collection and off-site disposal, fencing, inspections, maintenance, access restrictions, and property controls remain part of site management.",
      ],
      presentDay: [
        "DEC continues to list West Avenue as a Class 2 site. The cap and collection system control remaining material rather than documenting unrestricted cleanup.",
        "The continuing Class 2 status makes this an active managed-cleanup record even though major construction components have already been installed.",
      ],
      researchNotes: [
        "Track current periodic-review findings and distinguish this landfill from the nearby Monroe Electronics cleanup, which has its own DEC site number.",
        "Retain the official multi-party attribution and do not assign all pesticide residues to a single company without a source-specific finding.",
      ],
    },
    sources: [
      {
        title: "Lyndonville West Avenue Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/837002/Work%20Plan.HW.837002.2005-04-22.SITE_MANAGEMENT_PLAN.pdf",
      },
      {
        title: "Lyndonville West Avenue Focused Feasibility Study",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/837002/Report.HW.837002.2003-11-05.Revised%20Lyndonville%20Focused%20Feasibility%20Study%20Report.pdf",
      },
      {
        title: "Lyndonville West Avenue Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/837002/",
      },
    ],
  },
  {
    id: "robert-moses-parkway-south",
    name: "Robert Moses Parkway - South Site",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary:
      "State Superfund cleanup within Niagara Falls State Park where buried contaminated fill included an organochlorine-pesticide hazardous-waste area. Roughly 32,000 tons of contaminated soil and waste were removed, including approximately 2,810 tons managed as hazardous pesticide waste; covers and long-term controls remain.",
    evidenceStatus: "well-documented",
    coordinates: [-79.052733333, 43.081777778],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "The approximately 16-acre cleanup area lies between Buffalo Avenue, Riverside Drive, the former Robert Moses Parkway, Fourth Street, and the Niagara River.",
        "DEC records state that the area has been park land since the Niagara Reservation was created in 1885 and did not confirm former mills or factories inside the site boundary. The marker therefore documents buried fill and waste, not a proven on-site manufacturing operation.",
      ],
      timeline: [
        { period: "2010", event: "A preliminary assessment for parkway reconstruction identified the potential for contaminated fill." },
        { period: "2015-2018", event: "State Parks entered a cleanup order, investigations defined affected areas, and interim removals addressed buried waste and contaminated soil." },
        { period: "2019", event: "DEC selected the final State Superfund remedy, incorporating the completed removals, site covers, and long-term management." },
        { period: "2020-present", event: "A certificate documented completion of remedial construction while the site remained subject to covers, restrictions, and management." },
      ],
      documentedImpacts: [
        "Aldrin exceeded the commercial-use soil cleanup objective in a documented hot spot; hexachlorobenzene and additional metals, volatile compounds, and semi-volatile compounds were also reported.",
        "Approximately 2,810 tons of excavated material were managed as organochlorine-pesticide hazardous waste, within roughly 32,000 tons of total contaminated soil and waste removed.",
        "The records establish contamination within the defined cleanup site but do not establish that the surrounding state park or nearby neighborhoods share the same conditions.",
      ],
      cleanupAndControls: [
        "The interim work excavated contaminated soil and buried wastes for permitted off-site disposal or treatment.",
        "Site covers over remaining contamination support passive recreational use; a site-management plan, inspections, maintenance, and recorded restrictions preserve the remedy.",
      ],
      presentDay: [
        "The riverway and park setting can be used subject to the completed remedy and continuing controls. The page should not describe the entire park as contaminated.",
        "The site is an example of contaminated imported fill within historic park land; the reviewed record did not establish a former factory inside the cleanup boundary.",
      ],
      researchNotes: [
        "Update the page when DEC posts a newer periodic review than the currently available site-management record.",
        "Preserve the distinction between the 16-acre managed site, the larger state park, and the surrounding Niagara River shoreline.",
      ],
    },
    sources: [
      {
        title: "Robert Moses Parkway - South Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932166/ROD.HW.932166.2019-03-20.Final%20ROD.pdf",
      },
      {
        title: "Robert Moses Parkway - South Interim Cleanup Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932166/Report.HW.932166.2019-02-07.Final%20IRM_CCR-Part%201.pdf",
      },
      {
        title: "Robert Moses Parkway - South Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932166/Work%20Plan.HW.932166.2020-01-29.Site%20Management%20Plan-Final.pdf",
      },
      {
        title: "Robert Moses Parkway - South Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932166/",
      },
    ],
  },
  {
    id: "former-hooker-main-plant",
    name: "Former Hooker Main Plant / Occidental Niagara Plant",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    pfasStatus: "documented",
    pfasEvidence: ["detection", "investigation"],
    pfasCompounds: [
      {
        name: "Per- and polyfluoroalkyl substances",
        abbreviation: "PFAS - exact analytes pending",
        finding: "compound-not-specified",
        medium: "on-site and off-site monitoring wells",
        note: "The 2022 permit record reports low-level detections slightly above guidance values but the reviewed summary does not identify each compound.",
      },
    ],
    pfasScopeNote:
      "This is a documented monitoring-well finding, not evidence that Hooker manufactured PFAS or used APFO. Compound-level laboratory results remain a research item.",
    summary:
      "Large Buffalo Avenue chemical-manufacturing property where historic operations released chlorinated organics, mercury, dioxin-related compounds, and other materials to soil and groundwater. Caps, groundwater extraction and treatment, non-aqueous-phase-liquid recovery, monitoring, and industrial-use restrictions remain part of the corrective-action program.",
    evidenceStatus: "well-documented",
    coordinates: [-79.00903, 43.07968],
    newsEvents: [
      {
        date: "1944-1948",
        headline: "Hooker workers support atomic-era production later recognized by a federal compensation program",
        summary: "A defined employee class entered the Special Exposure Cohort because radiation dose could not be reconstructed reliably under program rules; eligibility is not a finding that every employee was exposed or became ill.",
        publisher: "U.S. Department of Labor",
        url: "https://www.dol.gov/agencies/owcp/energy/regs/compliance/PolicyandProcedures/finalcircularhtml/EEOICPACircular16-01",
        reach: "National",
      },
      {
        date: "August 2021",
        headline: "Chemical manufacturing ends while groundwater containment and corrective action continue",
        summary: "Plant closure affected 130 employees and 20 contractors, but shutdown did not end the subsurface treatment, monitoring, caps, barriers, or permit obligations.",
        publisher: "Buffalo Toronto Public Media",
        url: "https://www.btpm.org/local/2021-08-19/oxychem-closing-its-niagara-falls-manufacturing-operations-the-company-confirms",
        reach: "Regional",
      },
    ],
    story: {
      lastReviewed: "August 12, 2026",
      background: [
        "Hooker Electrochemical Company began operating its Niagara plant in 1906, using Niagara Falls' abundant hydroelectric power to manufacture caustic soda and co-product chlorine. The modern approximately 113-acre property at 4700 Buffalo Avenue grew from Hooker parcels and neighboring works operated by Niagara Alkali Company and Oldbury Electrochemical Company.",
        "The facility's 1984 historical database records Hooker's acquisition of Niagara Alkali on November 30, 1955 and Oldbury on November 30, 1956. Those acquisitions consolidated several older chemical works and their different manufacturing, drainage, and waste-management areas into the Main Plant.",
        "Chlorine, caustic soda, hydrogen, bleach, and hydrochloric acid formed the basic-product side of the operation. Beginning in the 1920s, the plant also manufactured pesticides and a wide range of chlorinated organic compounds; that production peaked from the 1940s through the 1970s.",
        "Occidental Petroleum acquired Hooker Chemicals and Plastics in 1968. The property continued under the Hooker name until 1982, when it became Occidental Chemical Corporation's Main Plant and later the Niagara or Buffalo Avenue Plant.",
        "This page covers the manufacturing complex and its RCRA corrective-action program. The S-Area landfill lies within the broader plant property but has its own federal Superfund record; Love Canal and the Hooker portions of the 102nd Street landfill are separate disposal sites with separate map entries and remedies.",
      ],
      timeline: [
        { period: "1906", event: "Hooker Electrochemical began Niagara Plant operations producing caustic soda and chlorine." },
        { period: "1920s-1930s", event: "The product line expanded beyond basic chlor-alkali chemicals into chlorinated organic manufacturing." },
        { period: "1940s-1970s", event: "Production of chlorobenzenes, chlorotoluenes, chlorinated phenols, lindane-related compounds, and other organics reached its broadest scale." },
        { period: "1955-1956", event: "Hooker acquired Niagara Alkali and Oldbury Electrochemical, bringing their parcels and operations into the consolidated plant." },
        { period: "1968-1982", event: "Occidental acquired Hooker Chemicals and Plastics; in 1982 the complex became the Occidental Chemical Corporation Main Plant." },
        { period: "1980s-1995", event: "Hydrogeologic studies, historical-data compilation, off-site investigations, and a RCRA Facility Investigation documented soil, sewer, overburden-groundwater, bedrock-groundwater, and NAPL conditions." },
        { period: "1992-1998", event: "NAPL collection, groundwater interception, bedrock extraction, treatment, caps, and other interim corrective measures were installed in stages; the bedrock system began operating in April 1996." },
        { period: "2000", event: "DEC issued the final corrective-action decision and a recorded declaration restricted future property use to commercial or industrial purposes." },
        { period: "2003-2008", event: "Collection systems were upgraded so additional overburden groundwater could be routed to the F-Area treatment plant rather than the sanitary sewer." },
        { period: "August 2021", event: "Chemical manufacturing ceased, beginning full production-area decommissioning while the cleanup systems remained active." },
        { period: "2022-2024", event: "DEC renewed the corrective-action permit and required emerging-contaminant testing, a Flow Zone 1 assessment, and a remedial-system optimization review completed in 2024." },
      ],
      documentedImpacts: [
        "DEC considers the entire facility an Area of Contamination because releases occurred from historical spills, leaks, manufacturing areas, sewers, and waste-management areas over many decades.",
        "The most significant source areas identified by the permit include the C-, D-, F-, M-, N-, and T-Areas and the former Mercury Cell Area. Other remedy areas include U-Area, X-Area, Energy Boulevard, the former elemental-phosphorus area, and the separately regulated S-Area landfill.",
        "Documented constituents include chlorobenzenes, chlorotoluenes, chloroethenes, chlorobenzotrifluorides, hexachlorobutadiene, hexachlorocyclopentadiene, lindane and related BHC compounds, 2,4,5-trichlorophenol, mercury, elemental phosphorus, and dioxin-related contamination.",
        "Groundwater investigations identified both dissolved plumes and dense non-aqueous-phase liquid. NAPL can act as a continuing subsurface source because it occupies fractures or pore spaces and dissolves into groundwater slowly over time.",
        "The historical bedrock plume extended north toward the Falls Street Tunnel and New York Power Authority conduit drains. Overburden groundwater could also enter plant sewers and outfalls, making those utilities part of the investigation and containment strategy.",
        "The 2022 permit briefing reported low-level 1,4-dioxane and PFAS detections slightly above guidance levels in on- and off-site monitoring wells and required treatment-system influent and effluent sampling. That record documents detection and treatment evaluation; it does not establish that Hooker manufactured PFAS at this plant.",
      ],
      cleanupAndControls: [
        "Bedrock extraction wells create hydraulic containment along the western and northwestern plant boundaries. The F-Area treatment plant uses air stripping and activated carbon for groundwater; contaminated stripper air is treated by thermal oxidation and scrubbing.",
        "Overburden collectors, drain tiles, wet wells, converted sewer segments, and force mains intercept groundwater and NAPL before they can migrate through shallow materials or infiltrate utilities.",
        "A plant barrier wall, the adjoining S-Area barrier wall, and the New York Power Authority intake wall form a continuous physical barrier intended to restrict shallow groundwater movement toward the Niagara River.",
        "Asphalt, concrete, gravel, and soil-and-grass caps cover different source areas. NAPL collection wells, trenches, sumps, groundwater monitoring, outfall and sewer monitoring, fence maintenance, and annual cover inspections support the containment remedy.",
        "DEC concluded that restoring the entire property to preindustrial conditions was not technically feasible at the time of remedy selection. The remedy therefore emphasizes containment, mass recovery, treatment, exposure prevention, and long-term performance monitoring.",
        "A recorded declaration restricts future use to commercial or industrial purposes, requires protection of engineering controls, and preserves agency access for oversight.",
      ],
      presentDay: [
        "Manufacturing ended in August 2021, but this is not an unrestricted-use closure. Production buildings and equipment are being decommissioned while groundwater treatment, NAPL recovery, caps, barriers, monitoring, inspections, and permit reporting continue.",
        "EPA reports that the extraction systems restrict off-site groundwater migration and that monitored concentrations have declined. The 2024 optimization review nevertheless continued evaluation of Flow Zone 1 performance and possible operational improvements.",
        "Any future redevelopment must remain compatible with the industrial-use restriction and the buried collection systems, wells, caps, walls, and contaminated media that make the remedy work.",
      ],
      researchNotes: [
        "Treat the facility as one corrective-action complex on the overview map; named source areas belong in this history rather than as a cluster of overlapping pins.",
        "Cross-link S-Area, Love Canal, 102nd Street, Hyde Park, and other Hooker-related disposal sites where records establish a relationship, but do not combine their waste quantities, exposure histories, or cleanup status with the Main Plant.",
        "Continue reviewing the post-shutdown decommissioning record, PFAS and 1,4-dioxane treatment results, Flow Zone 1 studies, and annual performance reports as DEC posts them.",
      ],
    },
    sources: [
      {
        title: "Former Hooker Main Plant Part 373 Corrective-Action Permit",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932019/Permit.HW.932019.2022-09-15.FmrHookerMainPlant_Part373_CA_Permit_Final.pdf",
      },
      {
        title: "Former Hooker Main Plant Record-of-Decision Equivalent",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932019/ROD.HW.932019.2000-02-01.hooker_ou2_ou3.pdf",
      },
      {
        title: "Occidental Niagara Plant Corrective-Action Cleanup",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-occidental-chemical-corporation-niagara-falls",
      },
      {
        title: "Niagara Plant Historical Database, Volume 1",
        publisher: "New York State Department of Environmental Conservation document repository",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932019/Report.HW.932019.1984-08-01.Historical_Data_Base_Vol_1_Text.pdf",
      },
      {
        title: "Buffalo Avenue Plant Final Remedial System Optimization Report",
        publisher: "New York State Department of Environmental Conservation document repository",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932019/Report.HW.932019.2024-08-02.Buffalo_Ave_Plant_Final_RSO_Report.pdf",
      },
      {
        title: "Hooker S-Area Superfund Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/cursites/csitinfo.cfm?id=0202150",
      },
    ],
  },
  {
    id: "olin-buffalo-avenue-plant",
    name: "Olin Buffalo Avenue Plant",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Long-running chlor-alkali and chemical-manufacturing complex where mercury-cell operations, chlorinated-organic production, and historic waste handling affected soil and groundwater. Extraction systems, paving and caps, monitoring, and deed restrictions manage the remaining contamination.",
    evidenceStatus: "well-documented",
    coordinates: [-79.028238889, 43.082105556],
    newsEvents: [
      {
        date: "1981-1992",
        headline: "Olin and DuPont remove contaminated sediment from Gill Creek",
        summary: "The creek work addressed a shared industrial pathway while later groundwater systems remained source-specific, preventing the two companies' plumes and responsibilities from being collapsed into one account.",
        publisher: "Niagara River Toxics Management Plan",
        url: "https://www.epa.gov/sites/default/files/2015-11/documents/niagara-river-reduction-toxics-loadings-report-200306-112pp.pdf",
        reach: "Regional",
      },
      {
        date: "Long-term phase",
        headline: "Hydraulic containment remains necessary beside the creek and Niagara River",
        summary: "Production wells, recovery wells, carbon treatment, monitoring, and deed controls make present operation inseparable from the historic groundwater remedy.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-olin-corporation-niagara-falls-new-york",
        reach: "Regional",
      },
    ],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "The Olin complex at 2400 Buffalo Avenue is part of one of the oldest chlor-alkali manufacturing districts in the United States. EPA and DEC records trace inorganic chemical production on the property to 1897, when Niagara Falls hydropower made the electrolysis of salt commercially attractive.",
        "The modern site includes the roughly six-acre former Plant 1 and the approximately 16-acre Plant 2, separated by Chemical Road and intervening DuPont property. Gill Creek crosses the eastern operating area about 1,000 feet north of the upper Niagara River.",
        "Olin's corporate chlor-alkali lineage combines the former Mathieson chemical business with Olin Industries; the 1954 merger created Olin Mathieson Chemical Corporation, shortened to Olin Corporation in 1969. Site records also describe earlier operators and do not assign every pre-merger release to the same corporate entity.",
        "The plant electrolyzed brine to produce chlorine and caustic soda. Historical mercury-cell technology created mercury-bearing brine muds and wastewater; organic operations later produced chlorinated benzenes, chlorinated phenols, and benzene hexachloride compounds.",
        "This manufacturing-complex page is separate from Olin's nearby Industrial Welding disposal site, parking-lot fill area, deep disposal well, Charles Gibson disposal site, and its portion of the 102nd Street Landfill. Those records document related corporate activity but different waste locations and remedies.",
      ],
      timeline: [
        { period: "1897", event: "Olin predecessors began inorganic chemical production at the Buffalo Avenue complex." },
        { period: "1950-1956", event: "Plant 2 manufactured chlorinated benzenes, trichlorophenol, and BHC compounds until a 1956 production explosion severely damaged the organic-chemical facility." },
        { period: "1954-1969", event: "The broader company became Olin Mathieson Chemical Corporation through a 1954 merger and adopted the Olin Corporation name in 1969." },
        { period: "1970-1981", event: "Mercury-cell wastewater and brine-sludge areas remained environmental concerns; Olin removed lindane-affected sediment from Gill Creek in 1981." },
        { period: "1993", event: "Two reportable chlorine releases later became the subject of a 1998 EPA enforcement settlement concerning delayed federal notification." },
        { period: "1994-1997", event: "A RCRA Facility Investigation and Corrective Measures Study led to an EPA administrative consent order establishing the cleanup program." },
        { period: "Early 1998", event: "The groundwater recovery and treatment system began operating, with paving, caps, monitoring, and institutional controls supporting the remedy." },
        { period: "2008", event: "Olin converted the Niagara Falls chlor-alkali operation from mercury-cell to membrane-cell technology." },
        { period: "2016-present", event: "Olin reduced Niagara Falls chlor-alkali capacity while continuing chlorine, bleach, hydrochloric-acid, and hydrogen operations documented in corporate filings." },
      ],
      documentedImpacts: [
        "EPA reports mercury in soil throughout the plant, with historical concentrations ranging from less than one to 15,600 milligrams per kilogram, and elevated BHC compounds near the former organic-production area.",
        "Historical waste handling included mercury-cell brine muds, wastewater-treatment sludge, coal fines, and organic-process residuals. Some brine sludge containing mercury and possibly PCBs was used as fill or land-spread in designated plant and parking areas.",
        "The Olin-related groundwater plume principally contains benzene and chlorinated benzenes, with lower concentrations of BHC compounds, chlorinated phenols, methanol, and mercury. The highest concentrations were identified between Alundum Road and Gill Creek.",
        "Gill Creek received site-related contamination through shallow groundwater and drainage pathways, but the creek also passes through a multi-company industrial corridor. Contaminant attribution must therefore follow compound patterns and source investigations rather than proximity alone.",
        "Other groundwater beneath the property migrated from the neighboring DuPont and former Solvent Chemical properties. The atlas does not attribute those separate incoming plumes to Olin.",
      ],
      cleanupAndControls: [
        "Recovery wells maintain capture zones in the overburden and multiple bedrock intervals so contaminated groundwater is drawn toward treatment rather than continuing to spread.",
        "The high-capacity Olin production well influences groundwater across the corridor and is operated under the remedy in coordination with DuPont obligations. Pumped groundwater is treated using activated carbon before discharge.",
        "Paving and caps reduce contact, dust, erosion, and rainwater infiltration. Groundwater monitoring checks whether hydraulic containment remains effective and tracks long-term concentration changes.",
        "Deed restrictions and site-management requirements limit use and protect the wells, paved areas, treatment equipment, and remaining contaminated media.",
      ],
      presentDay: [
        "The historic mercury-cell and chlorinated-organic operations have ended. Current corporate filings still identify Niagara Falls production of chlorine, sodium hypochlorite, hydrochloric acid, and hydrogen, while EPA's cleanup profile continues to track the corrective-action systems.",
        "An operating chemical plant and a managed cleanup occupy the same property. Current production does not erase the historical contamination, and the cleanup record does not mean every present-day operation is uncontrolled.",
      ],
      researchNotes: [
        "Keep this plant pin separate from the Olin Industrial Welding disposal site, the Olin deep well, and the Olin portion of the 102nd Street Landfill; each has a different regulatory record and remedy.",
        "Build related-site links for documented Olin disposal destinations without combining their waste quantities or present-day remedy status.",
        "Continue checking current RCRA monitoring, corporate plant-operation disclosures, and any Gill Creek sediment decisions for changes after the latest agency profile.",
      ],
    },
    sources: [
      {
        title: "Olin Corporation Niagara Falls Corrective-Action Cleanup",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-olin-corporation-niagara-falls-new-york",
      },
      {
        title: "Olin Buffalo Avenue Plant Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932051B/",
      },
      {
        title: "Reduction of Toxics Loadings to the Niagara River — Olin Corporation",
        publisher: "U.S. Environmental Protection Agency and New York State Department of Environmental Conservation",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P10041OC.TXT",
      },
      {
        title: "Olin Niagara Falls Chlorine-Release Reporting Settlement",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/61f4181f562bff428525726b006f446a.html",
      },
      {
        title: "Olin Corporation 2025 Annual Report",
        publisher: "U.S. Securities and Exchange Commission",
        url: "https://www.sec.gov/Archives/edgar/data/74303/000007430326000027/oln-20251231.htm",
      },
    ],
  },
  {
    id: "cwm-model-city",
    name: "CWM Chemical Services - Model City Facility",
    municipality: "Porter",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Operating hazardous- and industrial-waste treatment and storage facility on former Lake Ontario Ordnance Works land. Its RMU-1 landfill reached capacity in 2015 and was capped; New York's Facility Siting Board denied the proposed RMU-2 landfill in September 2025.",
    evidenceStatus: "well-documented",
    coordinates: [-78.97852213, 43.22280069],
    newsEvents: [
      {
        date: "2015",
        headline: "The operating RMU-1 hazardous-waste landfill reaches capacity",
        summary: "Waste disposal ended in RMU-1 and the cell moved into closure and post-closure care, while treatment and storage operations continued elsewhere at the permitted facility.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/waste-management/hazardous-waste/cwm-chemical-services",
        reach: "Regional",
      },
      {
        date: "September 2025-February 2026",
        headline: "A decades-long public fight over a second landfill ends in a final siting denial",
        summary: "The Facility Siting Board denied the proposed RMU-2 landfill after an unusually long administrative and public-participation record. The decision concerns the proposed expansion, not closure of every permitted activity at Model City.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/waste-management/hazardous-waste/cwm-chemical-services",
        reach: "Regional",
      },
    ],
    story: {
      lastReviewed: "August 11, 2026",
      background: [
        "The Balmer Road facility occupies land in the towns of Porter and Lewiston that was once part of the federal Lake Ontario Ordnance Works. ChemTrol Pollution Services began commercial hazardous-waste operations there in 1972; the operation later became CWM Chemical Services, a Waste Management subsidiary.",
        "Because the facility is both an operating waste-management property and part of the former LOOW footprint, its story links to LOOW but does not merge the two regulatory histories.",
        "The commercial operation evolved through corporate ownership and name changes after SCA Services acquired ChemTrol in 1973. Facility records describe waste-oil reclamation, spent-solvent distillation, aqueous treatment, stabilization, storage, fuel blending, and secure landfilling as parts of a larger treatment-storage-disposal complex.",
        "RMU-1 itself is an approximately 47-acre, multi-cell engineered landfill with hydraulically separate cells and primary and secondary leachate-collection systems. This operating history is distinct from the proposed RMU-2 expansion, which never became an operating landfill.",
      ],
      timeline: [
        { period: "1940s-1960s", event: "The property formed part of the former federal ordnance complex and was subject to chemical and radiological investigation." },
        { period: "1972", event: "Commercial hazardous-waste treatment, storage, and disposal operations began as ChemTrol Pollution Services." },
        { period: "1973-1980s", event: "Acquisitions and name changes carried the operation from ChemTrol through SCA entities to the later CWM organization." },
        { period: "1992", event: "DOE certified that the majority of the CWM property met the radiological decontamination criteria applicable to its review." },
        { period: "2015", event: "The RMU-1 hazardous-waste landfill reached capacity, stopped receiving waste for disposal, and was subsequently capped." },
        { period: "2025", event: "The Facility Siting Board denied CWM's siting-certificate application for the proposed 43.5-acre RMU-2 landfill." },
      ],
      documentedImpacts: [
        "Historic federal activity left chemically and radiologically affected areas within portions of the broader former LOOW property. The 1992 DOE certification applied to the majority—not necessarily every part—of the CWM property.",
        "DEC records describe corrective actions and a groundwater-monitoring network at the Model City facility. The atlas reports those controls without treating a permit or monitoring well as proof of a present off-site exposure.",
        "The closed RMU-1 cell and the denied RMU-2 proposal are different features: one contains historically disposed waste, while the other was a proposed expansion that did not receive a siting certificate.",
      ],
      cleanupAndControls: [
        "RMU-1 is capped and remains subject to hazardous-waste permit, corrective-action, leachate, monitoring, and post-closure requirements.",
        "The facility also operates under state air and wastewater-discharge permits. Wastes accepted for management may be treated or stored on site or shipped to permitted off-site disposal facilities.",
      ],
      presentDay: [
        "CWM remains a permitted treatment and storage facility, but the proposed RMU-2 landfill cannot proceed under the denied 2025 siting certificate. The related permit decision was described by DEC as moot because of that denial.",
      ],
      researchNotes: [
        "Use one facility-center marker. Do not add individual monitoring wells or imply that the denied RMU-2 proposal is an operating landfill.",
        "Keep commercial hazardous-waste operations, LOOW-era contamination, and federal radiological review separated by source and date even when they overlap geographically.",
      ],
    },
    sources: [
      {
        title: "CWM Chemical Services Hazardous-Waste Facility and RMU-2 Decisions",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/waste-management/hazardous-waste/cwm-chemical-services",
      },
      {
        title: "CWM Model City Facility History and Former LOOW Property Record",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/legal_protection_pdf/cwm00046.pdf",
      },
    ],
  },
  {
    id: "vanadium-corporation-of-america",
    name: "Vanadium Corporation of America Site",
    municipality: "Niagara",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Large former ferroalloy-production and disposal property divided into three cleanup units. Historic slag, dust, ash, cinders, lime-like waste, and related fill were consolidated, capped, collected, treated, or placed under long-term controls according to location.",
    evidenceStatus: "well-documented",
    coordinates: [-79.021394875, 43.124263433],
    newsEvents: [
      {
        date: "2000-2003",
        headline: "Hexavalent-chromium migration leads to collection and treatment beside wetlands",
        summary: "The Airco unit remedy capped the landfill and added groundwater interception after investigation identified affected groundwater moving toward a stream and wetland system.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932001/ROD.HW.932001.2006-03-31.vanadium_corp_ou1_ou2_ou3.pdf",
        reach: "Local",
      },
    ],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "The Vanadium site southeast of Witmer Road originated as an approximately 150-acre ferroalloy operation. DEC divided the cleanup into the SKW/CC Metals parcel, the Airco parcel, and an eastern National Grid/New York Power Authority parcel.",
        "Vanadium Corporation of America and successor operations disposed of wood, brick, ash, lime slag, ferrochromium-silicon slag, ferrochromium-silicon dust, and related manufacturing wastes on portions of the property.",
      ],
      timeline: [
        { period: "1920-1964", event: "Vanadium Corporation operated the broader property and used portions for production-waste disposal." },
        { period: "1998", event: "An interim remedy controlled drainage and runoff on the SKW parcel and supported redefining that unit around its remaining landfill cells." },
        { period: "2000-2003", event: "The Airco landfill was closed and capped; a groundwater collection and treatment system was added after affected groundwater was found discharging toward nearby wetlands." },
        { period: "2006-2014", event: "DEC selected and implemented the final remedy for the eastern unit, including consolidation, grading, covers, drainage, and controls for waste and affected media." },
        { period: "2021-present", event: "Groundwater sampling, inspections, environmental easements, and site-management obligations continued." },
      ],
      documentedImpacts: [
        "DEC records identify ferrochromium dust and slag, ferromanganese slag, calcium hydroxide, fly ash, cinders, and related fill and waste piles.",
        "Hexavalent chromium movement from the Airco landfill toward a nearby stream and wetlands was a stated cleanup objective; collection and treatment were installed to intercept affected groundwater.",
        "The three units have different owners, boundaries, waste areas, and controls. Conditions documented in one unit should not automatically be assigned to the others.",
      ],
      cleanupAndControls: [
        "Landfill closure and caps, consolidation and grading, berms and controlled drainage, groundwater collection and treatment, monitoring, inspections, and environmental easements form the remedy across the separate units.",
        "Some portions were removed from the active hazardous-waste-site boundary after investigation or cleanup, while the remaining controlled areas continue under site management.",
      ],
      presentDay: [
        "The marker represents the historic multi-unit Vanadium complex. It does not mean that all approximately 150 historic acres have the same remaining contamination or access restrictions.",
      ],
      researchNotes: [
        "Use a single overview pin with the three-unit explanation rather than stacking separate unit pins at this scale; retain links to the individual DEC files for parcel-level research.",
        "When parcel-level geometry is added, label each operating unit and its controls separately so users do not read the overview marker as one uniform waste boundary.",
      ],
    },
    sources: [
      {
        title: "Vanadium Corporation Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932001/ROD.HW.932001.2006-03-31.vanadium_corp_ou1_ou2_ou3.pdf",
      },
      {
        title: "Vanadium Corporation Cleanup Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932001C/Fact%20Sheet.HW.932001C.2006-02-23.VanadiumPRAPFactSheet.pdf",
      },
      {
        title: "Vanadium Corporation Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932001/",
      },
    ],
  },
  {
    id: "lake-ontario-ordnance-works-loow",
    name: "Lake Ontario Ordnance Works (LOOW)",
    municipality: "Lewiston and Porter",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former 7,567-acre World War II ordnance complex built for flaked-TNT production. Manufacturing lasted about nine months in 1943, and process wastes were disposed of on site; the Army Corps continues the FUDS decision process for investigated drainage features.",
    evidenceStatus: "well-documented",
    coordinates: [-78.9935, 43.2223],
    newsEvents: [
      {
        date: "1943",
        headline: "A vast wartime TNT complex operates for only about nine months",
        summary: "The short production period left a much longer land-use and investigation history across thousands of acres, including process areas, disposal locations, utilities, and drainage features later divided among many owners.",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Display/Article/3663181/lake-ontario-ordnance-works-loow/",
        reach: "Regional",
      },
      {
        date: "2014-present",
        headline: "Niagara County organizes a community review of decades of overlapping investigations",
        summary: "The Community LOOW Project assembled federal, state, local, and public records so residents could distinguish the former TNT works, the Niagara Falls Storage Site, commercial waste operations, schools, farms, homes, and other present-day properties.",
        publisher: "Niagara County Department of Health",
        url: "https://downloads.niagaracounty.gov/departments/a-f/environmental_health/the_community_loow_project.php",
        reach: "Regional",
      },
      {
        date: "2025-2027",
        headline: "The Army Corps takes public comment on three investigated drainage features",
        summary: "The proposed no-further-action finding is limited to the 30-inch outfall, Six Mile Creek, and Southwest Drainage Ditch; it is not a blanket finding for every property or every separate cleanup program inside the historic LOOW footprint.",
        publisher: "U.S. Army Corps of Engineers Buffalo District",
        url: "https://www.lrd.usace.army.mil/News/News-Releases/Display/Article/4214524/proposed-plan-available-and-public-meeting-former-lake-ontario-ordnance-works/",
        reach: "Regional",
      },
    ],
    story: {
      lastReviewed: "August 4, 2026",
      background: [
        "The federal government acquired the 7,567-acre Lake Ontario Ordnance Works property between 1941 and 1944. Six TNT lines and facilities for acid mixing, recovery, purification, and concentration were concentrated within an approximately 2,500-acre developed area.",
        "LOOW is a Formerly Used Defense Site with many present-day owners. The overview pin represents the historic federal footprint, not a claim that every current parcel was used for TNT production or waste disposal.",
      ],
      timeline: [
        { period: "1941-1943", event: "The government acquired and built a contractor-operated flaked-TNT manufacturing complex." },
        { period: "1943", event: "LOOW produced TNT for about nine months before decommissioning because other federal plants had excess production capacity." },
        { period: "1989-2008", event: "Federal remedial investigations examined the former works, including disposal areas, drainage features, and underground utility lines." },
        { period: "2021", event: "A risk reevaluation supported a proposed no-further-action approach for the 30-inch outfall, Six Mile Creek, and the Southwest Drainage Ditch." },
        { period: "2025-2027", event: "The Army Corps sought public comment on that proposal and scheduled a final decision document for 2027." },
      ],
      documentedImpacts: [
        "The Army Corps states that TNT manufacturing and on-site process-waste disposal potentially affected the former works.",
        "For the three drainage features in the current proposed plan, the federal evaluation reported results below applicable background or screening levels or calculated risk thresholds.",
        "Those findings apply to the named drainage features; they are not a blanket determination for every parcel or every separate cleanup program inside the historic LOOW boundary.",
      ],
      cleanupAndControls: [
        "The Army Corps investigated Six Mile Creek, the Southwest Drainage Ditch, the 30-inch outfall, and former utility corridors under the FUDS program.",
        "No further action for the three drainage features remains a proposed decision until the final decision document is issued.",
      ],
      presentDay: [
        "Local and federal governments, businesses, and private residents now own land within the former footprint. Property-specific conclusions require the corresponding federal, state, or local record.",
      ],
      researchNotes: [
        "Keep this chemical and military FUDS history separate from the Niagara Falls Storage Site, a smaller FUSRAP property inside the former LOOW footprint where radioactive residues remain under a different federal remedy.",
        "The Lewiston-Porter campus is documented by the Army Corps as lying in a former LOOW buffer area rather than the TNT manufacturing area.",
      ],
    },
    sources: [
      {
        title: "Lake Ontario Ordnance Works FUDS Project and Current Status",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Display/Article/3663181/lake-ontario-ordnance-works-loow/",
      },
      {
        title: "Former LOOW Proposed Plan and Public Meeting",
        publisher: "U.S. Army Corps of Engineers Buffalo District",
        url: "https://www.lrd.usace.army.mil/News/News-Releases/Display/Article/4214524/proposed-plan-available-and-public-meeting-former-lake-ontario-ordnance-works/",
      },
    ],
  },
];
