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
    coordinates: [-78.961575, 43.0158],
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
      "Longstanding chemical-operation property on Lee Street listed as an active Class 2 State Superfund site. The record expands the South Buffalo chemical-manufacturing story beyond the better-known Buffalo Color complex.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.84121737, 42.86472756],
    sources: [
      {
        title: "PVS Chemicals Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915004/",
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
      "Inactive disposal property on Rutherford Road classified by New York as a Class 2 site requiring remedial action. It adds a suburban municipal-landfill history outside the region's major waterfront industrial corridors.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.704797222, 42.8979],
    sources: [
      {
        title: "Depew Village Landfill Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915105/",
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
    sources: [
      {
        title: "Lockport City Landfill Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932010/",
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
    evidenceStatus: "research-in-progress",
    coordinates: [-78.177060007, 43.008938506],
    sources: [
      {
        title: "Batavia Iron and Metal Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/819018/",
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
      "Historic railroad-release site at Gulf Road and the former Lehigh Valley Railroad crossing. New York lists it as an active Class 2 State Superfund site, extending the atlas's rail and material-transport history east of Batavia.",
    evidenceStatus: "research-in-progress",
    coordinates: [-77.93303124, 42.99226538],
    sources: [
      {
        title: "Lehigh Valley Railroad Derailment Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/819014/",
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
    sources: [
      {
        title: "Harrison Radiator Division Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932017/",
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
    evidenceStatus: "research-in-progress",
    coordinates: [-79.03306918, 43.14455465],
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
    sources: [
      {
        title: "Frontier Chemical — Pendleton Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932043/",
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
    evidenceStatus: "research-in-progress",
    coordinates: [-78.8978, 42.9295],
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
    ],
  },
  {
    id: "union-ship-canal-hanna-furnace",
    name: "Union Ship Canal / Hanna Furnace",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former Hanna Furnace pig-iron waterfront where industrial fill, furnace waste, petroleum impacts, contaminated groundwater, and canal sediment required a brownfield remedy. Debris was removed, surrounding land was covered, canal walls were stabilized, and contaminated sediment east of Route 5 was isolated beneath geotextile and a stone-and-gravel cover. The remediated landscape is now Ship Canal Commons.",
    evidenceStatus: "well-documented",
    coordinates: [-78.8514, 42.835],
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
    sources: [
      {
        title: "Farwell Road Landfill Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905024/Work%20Plan.HW.905024.2023-04-21.Revised%20Site%20Management%20Plan_Final.pdf",
      },
    ],
  },
  {
    id: "carroll-landfill",
    name: "Carroll Landfill",
    municipality: "Frewsburg / Town of Carroll",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former municipal and construction-and-demolition landfill near Conewango Creek, wetlands, and homes. The roughly 25-acre disposal property has required leachate and groundwater controls, treatment, monitoring, and long-term management.",
    evidenceStatus: "well-documented",
    coordinates: [-79.13670584217945, 42.07609437135028],
    sources: [
      {
        title: "Carroll Landfill Remedial Design",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907017/Report.HW.907017.2011-09-27.RD%20Specs%20and%20Drawings%20approved%20by%20CCDOH.pdf",
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
    sources: [
      {
        title: "Special Metals Cleanup Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907031/Fact%20Sheet.HW.907031.2007-02-23.IRM_Factsheet.pdf",
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
    sources: [
      {
        title: "Lexington Machining Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907044/Report.HW.907044.2023-11-10.PRR_and_IC-EC_Certification.pdf",
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
    evidenceStatus: "research-in-progress",
    coordinates: [-79.2466826043239, 42.112404952445836],
    sources: [
      {
        title: "Former C&B Dry Cleaners Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907028/",
      },
      { title: "Sites with Environmental Easements", publisher: "NYSDEC", url: decEasements },
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
    sources: [
      { title: "Region 9 Cleanup Success Stories", publisher: "NYSDEC", url: decSuccessStories },
      {
        title: "Bush Industries Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/E905029/",
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
    evidenceStatus: "research-in-progress",
    coordinates: [-78.66980735370983, 42.27055940024228],
    sources: [
      {
        title: "Former Signore Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C905034/",
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
    evidenceStatus: "research-in-progress",
    coordinates: [-78.70027906069848, 42.91119522314418],
    sources: [
      {
        title: "Former NL Industries Foundry Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915200/",
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
      "Former paper mill where cleanup encountered both conventional industrial contamination and localized radioactive material. State work removed hot spots, demolished the mill, and completed the environmental-restoration project in 2012.",
    evidenceStatus: "well-documented",
    coordinates: [-79.01326203165878, 43.08822382497429],
    sources: [
      { title: "Region 9 Cleanup Success Stories", publisher: "NYSDEC", url: decSuccessStories },
      {
        title: "Former Mill No. 2 Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C932150/",
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
    evidenceStatus: "research-in-progress",
    coordinates: [-78.9371, 42.9808],
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
    ],
  },
  {
    id: "batavia-landfill",
    name: "Batavia Landfill",
    municipality: "Town of Batavia",
    county: "Genesee",
    category: "cleanup",
    summary:
      "Thirty-five-acre municipal landfill where companies dumped heavy-metal sludges, oils, solvents, and other industrial wastes from the 1960s until 1980. Cleanup removed drums, consolidated contaminated material under a multilayer cap, collected leachate, restored wetlands, and extended public water. EPA deleted the site from the National Priorities List in 2005; monitoring and maintenance continue.",
    evidenceStatus: "well-documented",
    coordinates: [-78.2456, 43.0149],
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
    sources: [
      {
        title: "Chaffee Landfill Permit Application",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2022-09-14/completed-application/chaffee-landfill",
      },
    ],
  },
];
