import type { AtlasSite } from "@/types/site";

export const waterwayHubSites: AtlasSite[] = [
  {
    id: "black-rock-canal",
    name: "Black Rock Canal",
    municipality: "Buffalo",
    county: "Erie",
    category: "waterway",
    summary:
      "Federal navigation channel between Buffalo's west side and Unity Island. The canal receives Scajaquada Creek and urban drainage, and a 2014–15 Great Lakes project removed more than 180,000 cubic yards of contaminated legacy sediment from the Black Rock Channel and Tonawanda Harbor navigation corridor.",
    evidenceStatus: "well-documented",
    coordinates: [-78.9035, 42.9286],
    story: {
      lastReviewed: "August 28, 2026",
      background: [
        "The Black Rock Canal is an engineered federal navigation channel along the east side of the Niagara River, separated from the main river by Unity Island and connected through the Black Rock Lock. It is both transportation infrastructure and part of the Niagara River Area of Concern.",
        "Scajaquada Creek enters the canal after crossing a highly altered urban watershed. Historic industry, municipal discharges, combined-sewer overflows, tributary inputs, and navigation activity contributed to degraded sediment and water quality, but their histories and present controls differ by reach and source.",
        "EPA identifies the Black Rock Channel and Tonawanda Harbor dredging as a strategic navigation project: sediment that ordinary navigation maintenance was not scheduled to remove was addressed to advance Great Lakes beneficial-use restoration.",
      ],
      timeline: [
        { period: "Nineteenth–twentieth centuries", event: "Navigation works, shoreline industry, railroads, sewers, and the altered Scajaquada outlet reshaped the canal corridor." },
        { period: "1987", event: "The Niagara River was designated a Great Lakes Area of Concern, bringing the canal into a binational restoration framework." },
        { period: "2014–2015", event: "A strategic dredging project removed contaminated legacy sediment from the Black Rock Channel and Tonawanda Harbor navigation corridor." },
        { period: "2016", event: "EPA records the project as complete, with 181,532 cubic yards removed to advance benthos, dredging, and wildlife-related beneficial-use goals." },
        { period: "Present", event: "Navigation, tributary water quality, sewer-overflow reduction, habitat restoration, and AOC monitoring continue as separate but connected programs." },
      ],
      documentedImpacts: [
        "EPA describes the removed material as contaminated legacy sediment containing industrial contaminants from earlier activity.",
        "The removal volume applies to the combined Black Rock Channel and Tonawanda Harbor project; it should not be presented as a canal-only parcel or as the quantity remaining today.",
        "Scajaquada Creek is a documented urban inflow, but its site-specific coal-tar investigations must not be generalized to the whole canal.",
      ],
      cleanupAndControls: [
        "Federal and state partners removed 181,532 cubic yards of contaminated sediment through strategic navigation dredging.",
        "The project supported removal of beneficial-use impairments involving benthic degradation, dredging restrictions, and wildlife effects.",
        "Buffalo sewer-overflow controls, Scajaquada investigations, navigation maintenance, and Unity Island habitat projects operate under separate authorities and schedules.",
      ],
      presentDay: [
        "The canal remains active navigation infrastructure and receiving water. Completed sediment removal is a major restoration milestone, not evidence that every contaminant source or water-quality impairment throughout the corridor has disappeared.",
      ],
      researchNotes: [
        "Add an agency-defined dredging footprint if USACE or EPA publishes reusable project geometry.",
        "Keep Black Rock Canal, Tonawanda Harbor, Scajaquada Creek, and Unity Island project boundaries visually distinct.",
      ],
    },
    sources: [
      {
        title: "Remediation and Restoration Projects for the Niagara River Area of Concern",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/great-lakes-aocs/remediation-and-restoration-projects-niagara-river-aoc",
      },
      {
        title: "Niagara River Area of Concern",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/great-lakes-aocs/niagara-river-aoc",
      },
    ],
  },
  {
    id: "niagara-river-waterway",
    name: "Niagara River Environmental Record",
    municipality: "Western New York river corridor",
    county: "Niagara",
    category: "waterway",
    summary:
      "Umbrella record for the Niagara River Area of Concern: a binational river corridor shaped by navigation, power, chemical and metallurgical industry, municipal discharges, hazardous-waste sites, contaminated embayments, tributaries, and major habitat and sediment-restoration projects.",
    evidenceStatus: "well-documented",
    coordinates: [-78.9605, 43.076],
    story: {
      lastReviewed: "August 28, 2026",
      background: [
        "The Niagara River carries Lake Erie water north to Lake Ontario and forms the international boundary between New York and Ontario. Its environmental record cannot be reduced to one contaminated site: tributaries, embayments, industrial properties, municipal systems, navigation channels, wetlands, islands, and shoreline-fill landscapes each have distinct evidence and remedies.",
        "The river was designated a Great Lakes Area of Concern in 1987. Historical municipal and industrial discharges and hazardous-waste disposal contributed PCBs, PAHs, pesticides, metals, and other contaminants to particular water, sediment, groundwater, and biological pathways.",
        "WNY Atlas uses this page as a navigation hub. Cayuga Island, Griffon Park, 102nd Street, Gill Creek, Pettit Flume, Black Rock Canal, Scajaquada Creek, Two Mile Creek, Rattlesnake Creek, Tonawanda Creek, and restored island or wetland projects remain separate records with separate boundaries.",
      ],
      timeline: [
        { period: "Industrial expansion", event: "Hydropower, navigation, chemical production, steelmaking, municipal growth, and shoreline filling transformed the river corridor and many tributary mouths." },
        { period: "1970s–1980s", event: "Binational investigations documented toxic loadings, contaminated waste sites and embayments, fish and wildlife effects, and impaired beneficial uses." },
        { period: "1987", event: "The Niagara River was designated a Great Lakes Area of Concern under the Great Lakes Water Quality Agreement." },
        { period: "1990s–present", event: "Source control, Superfund and state cleanups, contaminated-sediment work, wastewater improvements, and habitat projects reduced particular loadings and restored defined reaches." },
        { period: "2018–2019", event: "USGS and DEC used passive samplers at 29 sites in Two Mile, Rattlesnake, and Tonawanda creeks to investigate incompletely resolved tributary PCB sources." },
        { period: "Present", event: "AOC monitoring evaluates beneficial-use recovery while individual cleanup sites retain their own long-term controls and review cycles." },
      ],
      documentedImpacts: [
        "Historical records identify industrial and municipal discharges and hazardous-waste sites as important contaminant sources, with effects varying by reach, medium, period, and pathway.",
        "Several nearshore embayments and tributary mouths accumulated contaminated sediment associated with defined source areas; those findings do not make the entire riverbed one uniform cleanup site.",
        "Fish-tissue and passive-sampler investigations show why water-column concentration, sediment concentration, and biological accumulation must be interpreted separately.",
      ],
      cleanupAndControls: [
        "Federal, state, local, responsible-party, and binational programs have addressed landfills, industrial sites, tributaries, embayments, navigation sediment, wastewater, and habitat.",
        "Black Rock Channel dredging, Gill Creek and 102nd Street work, tributary investigations, wetland restoration, and shoreline projects are individual actions—not one riverwide remedy.",
        "The AOC program measures recovery through beneficial uses and coordinates with, but does not replace, Superfund, state cleanup, wastewater, navigation, or habitat authorities.",
      ],
      presentDay: [
        "The Niagara River is a working, inhabited, internationally managed waterway with documented restoration progress and continuing impairments. This hub provides spatial context without assigning one source, contaminant mixture, or current condition to the full corridor.",
      ],
      researchNotes: [
        "Build a river-corridor index organized by upper river, lower river, tributary, embayment, island/wetland, and source-site records.",
        "Publish AOC, cleanup-site, and habitat-project boundaries as separate layers when authoritative reusable geometry is available.",
        "Keep the 2018–19 PCB tributary study labeled as source tracking; do not name a local source without a later agency conclusion.",
      ],
    },
    sources: [
      {
        title: "Niagara River Area of Concern",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/great-lakes-aocs/niagara-river-aoc",
      },
      {
        title: "Remediation and Restoration Projects for the Niagara River Area of Concern",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/great-lakes-aocs/remediation-and-restoration-projects-niagara-river-aoc",
      },
      {
        title: "Track-Down Survey of PCBs in Three Niagara River Tributaries",
        publisher: "U.S. Geological Survey",
        url: "https://www.usgs.gov/centers/new-york-water-science-center/science/track-down-survey-pcbs-three-tributaries-niagara",
      },
      {
        title: "PCBs Measured in Three Niagara River Tributaries, 2018–2019",
        publisher: "U.S. Geological Survey",
        url: "https://www.usgs.gov/data/pcbs-measured-three-tributaries-niagara-river-area-concern-aoc-2018-2019",
      },
    ],
  },
];
