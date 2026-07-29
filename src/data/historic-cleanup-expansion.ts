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
      "Former Hanna Furnace waterfront where industrial fill, furnace waste, petroleum, groundwater, and canal sediment required cleanup. Crews removed debris, covered surrounding land, and stabilized the canal walls. Contaminated sediment east of Route 5 was isolated beneath geotextile, stone, and gravel. The remediated landscape is now Ship Canal Commons.",
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
    id: "essex-hope-site",
    name: "Essex / Hope Site",
    municipality: "Jamestown",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former paint, varnish, coating, and window-manufacturing property where solvents and other industrial chemicals affected soil and groundwater. DEC amended the remedy in 2023 to add thermal and chemical treatment, monitoring, a maintained cover, and continuing land- and groundwater-use controls.",
    evidenceStatus: "well-documented",
    coordinates: [-79.21417629987917, 42.10966403467532],
    story: {
      lastReviewed: "July 29, 2026",
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
      ],
      researchNotes: [
        "Track DEC's separate decision and future construction records for the downgradient off-site operable unit.",
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
    story: {
      lastReviewed: "July 29, 2026",
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
    story: {
      lastReviewed: "July 29, 2026",
      background: [
        "The City of Jamestown operated the Washington Street disposal area from 1962 until 1974. Municipal environmental-review records identify the location as a former landfill that also received documented industrial wastes.",
        "DEC tracks the property as State Superfund site 907009, Class 3. Class 3 means DEC does not presently consider the site, or reasonably foresee it, to constitute a significant threat; it does not erase the landfill's history.",
      ],
      timeline: [
        { period: "1962–1974", event: "The City of Jamestown operated the landfill." },
        { period: "Operating period", event: "Records describe disposal of municipal refuse and industrial materials including paint, solvents, degreaser sludge, and paint liquids." },
        { period: "Legacy review", event: "The property entered the state inactive hazardous-waste site record and was evaluated for potential vapor concerns." },
        { period: "Present classification", event: "DEC lists the site as Class 3 and records the legacy vapor review as complete with no further action for that pathway." },
      ],
      documentedImpacts: [
        "The historical record documents waste disposal; the Class 3 designation does not support describing the site as a current significant threat.",
        "No atlas boundary or proximity line should be interpreted as a complete subsurface-contamination boundary.",
      ],
      cleanupAndControls: [
        "The atlas preserves the operating and disposal history while deferring current risk and management conclusions to DEC's Class 3 determination.",
        "Future construction or redevelopment review should use current DEC and municipal records rather than the map marker alone.",
      ],
      presentDay: [
        "This entry is included because it was a city landfill with documented industrial-waste disposal, not because it represents a routine spill or an unverified report.",
      ],
      researchNotes: [
        "Update the page if DEC publishes a new investigation, reclassification, or site-specific document collection.",
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
    story: {
      lastReviewed: "July 29, 2026",
      background: [
        "Ellison Bronze manufactured bronze doors and related products at its West Main Street property in Falconer. Casting and finishing operations generated foundry sands, dusts, and other metal-bearing materials.",
        "DEC identifies the property as State Superfund site 907018, Class 4, meaning the constructed remedy remains subject to monitoring or management.",
      ],
      timeline: [
        { period: "Industrial operating era", event: "Bronze casting, machining, and finishing generated metal-bearing foundry residuals." },
        { period: "Investigation", event: "State work evaluated foundry material, affected soil and sediment, and groundwater conditions." },
        { period: "1996", event: "DEC selected a remedy based on stabilization, containment, and continuing monitoring." },
        { period: "Present", event: "The property remains under Class 4 site management." },
      ],
      documentedImpacts: [
        "DEC documents metals associated with foundry waste in on-site soil and sediment.",
        "The cleanup record is specific to the industrial property and evaluated environmental media; it should not be generalized to all of Falconer.",
      ],
      cleanupAndControls: [
        "The selected remedy stabilized metal-affected material and placed it under managed containment.",
        "Groundwater monitoring, maintenance of the remedy, land-use controls, and periodic review preserve the remedy's protectiveness.",
      ],
      presentDay: [
        "Ellison Bronze is included as a durable foundry-cleanup history with continuing stewardship, not as an allegation about present manufacturing operations.",
      ],
      researchNotes: [
        "Use the latest periodic review report for future changes in monitoring frequency, controls, or classification.",
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
      lastReviewed: "July 29, 2026",
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
        "The historical contamination record applies to the former foundry property; it does not describe the wider Brigham Road area.",
      ],
      cleanupAndControls: [
        "The federal removal addressed the principal remaining industrial structures, tanks, and foundry material.",
        "DEC's no-further-action decision and completed classification distinguish this site from nearby properties with active remedies.",
      ],
      presentDay: [
        "Marsh Valve belongs in the atlas as a completed large-scale foundry removal and redevelopment history, not as an ongoing emergency.",
      ],
      researchNotes: [
        "Retain the completed-status language whenever the site is shown in search results or connection groups.",
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
      "Thirty-five-acre municipal landfill that received heavy-metal sludges, oils, solvents, and other industrial wastes from the 1960s until 1980. Cleanup removed drums, capped remaining contaminated material, collected leachate, restored wetlands, and extended public water. EPA deleted the site from the National Priorities List in 2005. Monitoring and maintenance continue.",
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
      "Former leather-tanning operation at 265 Palmer Street that operated for about 120 years, including Moench operations from 1900 to 1983. Its closed landfill and creek-edge controls remain subject to groundwater monitoring, inspections, and erosion management.",
    evidenceStatus: "well-documented",
    coordinates: [-78.92448493440273, 42.448851221364386],
    sources: [
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
    summary:
      "Inactive capped landfill that operated from 1972 to 1975 and reportedly received industrial, commercial, medical and household refuse, including TCE-laced sawdust. DEC detected PFOA, PFOS and 1,4-dioxane in groundwater and lists the property as a potential site under characterization.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.3679499897936, 42.247621807867375],
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
    sources: [
      {
        title: "Old Upper Mountain Road Cleanup Newsletter",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932112/Fact%20Sheet.HW.932112.2023-12-22.Old%20Upper%20Mountain%20Road%20Community%20Newsletter%20Winter%20Shutdown.pdf",
      },
      {
        title: "Old Upper Mountain Road Engineering Design Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932112/Report.HW.932112.2022-07-19.Old%20Upper%20MOuntain%20Road%20City%20of%20Lockport%20LF%20ESD.pdf",
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
];
