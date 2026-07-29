import type { AtlasSite } from "@/types/site";
import { siteStories } from "@/data/site-stories";
import { historicCleanupExpansion } from "@/data/historic-cleanup-expansion";
import { siteImages } from "@/data/site-images";

const featuredSiteRecords: AtlasSite[] = [
  {
    id: "love-canal",
    name: "Love Canal",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary: "Chemical disposal, public-health response, containment, and monitoring.",
    evidenceStatus: "well-documented",
    coordinates: [-78.949, 43.08],
    story: {
      lastReviewed: "July 26, 2026",
      background: [
        "Love Canal began as an unfinished canal project and was later used for chemical-waste disposal. Residential development and a school were subsequently built around the disposal area, turning a buried industrial-waste site into a national test of how government responds when contamination and community life overlap.",
        "The public record is also a history of residents organizing, government investigation, emergency relocation, litigation, and the creation of the modern federal Superfund program. WNYAtlas treats those events as connected but distinct parts of the story.",
      ],
      timeline: [
        {
          period: "1978",
          event:
            "New York began collecting contaminated liquids, covering and fencing the landfill, and responding to conditions in the surrounding neighborhood.",
        },
        {
          period: "1980",
          event:
            "Federal and state actions included temporary relocation and an expanded emergency response as the national significance of the site grew.",
        },
        {
          period: "1985",
          event:
            "The state completed the approximately 40-acre cap and improved the collection and treatment system.",
        },
        {
          period: "2004",
          event:
            "EPA removed Love Canal from the National Priorities List after completion of the required cleanup actions.",
        },
        {
          period: "Today",
          event:
            "The containment, collection, treatment, inspection, and groundwater-monitoring systems remain under long-term operation and review.",
        },
      ],
      documentedImpacts: [
        "Chemical wastes were disposed in the former canal and later enclosed by residential development.",
        "New York's public-health orders documented pervasive chemical vapors and fumes affecting ambient air and conditions inside some nearby buildings during the emergency period.",
        "Contaminated liquids, nearby sewers, creek sediment, and portions of the surrounding built environment became part of the cleanup record.",
        "The site prompted demolition of contaminated houses and the former school within the remedy area.",
      ],
      cleanupAndControls: [
        "A synthetic cap limits rainwater contact with buried material.",
        "Barrier drains, wells, and the Love Canal Treatment Facility collect and treat contaminated liquids and groundwater.",
        "The cap, treatment plant, collection systems, and monitoring wells receive continuing inspections, maintenance, and five-year reviews.",
      ],
      presentDay: [
        "EPA reports that construction of the cleanup is complete and that the remedy continues to protect people and the environment. That conclusion depends on the continued operation, maintenance, monitoring, and inspection of the containment systems.",
      ],
      researchNotes: [
        "Separate the documented remedy boundary from broader claims about all of Niagara Falls.",
        "Add resident oral histories only with clear attribution and without converting personal experience into unsupported medical causation.",
      ],
    },
    sources: [
      {
        title: "Love Canal Superfund Cleanup Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201290",
      },
      {
        title: "EPA History: Love Canal",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/history/epa-history-love-canal",
      },
      {
        title: "Love Canal Chemical Waste Landfill Health Order",
        publisher: "New York State Department of Health",
        url: "https://www.health.ny.gov/environmental/investigations/love_canal/docs/lctimbmb.pdf",
      },
    ],
  },
  {
    id: "buffalo-color",
    name: "Buffalo Color",
    municipality: "Buffalo",
    county: "Erie",
    category: "industry",
    summary:
      "Former dye and chemical-manufacturing complex beside the Buffalo River. Investigations documented metals, volatile and semi-volatile compounds in plant sewer sediment, including storm sewers leading to river Outfalls 006 and 011; remedies included measures to address contaminated sewer sediment and limit migration toward the river.",
    evidenceStatus: "well-documented",
    coordinates: [-78.84472385396359, 42.863843134660996],
    story: {
      lastReviewed: "July 26, 2026",
      background: [
        "Chemical and dye manufacturing began on this Buffalo River property in 1879 under the Schoellkopf Aniline and Dye Company. Later owners included National Aniline, Allied Chemical, and Buffalo Color. EPA reports that the complex produced more than 1,000 dyes and organic chemicals based on aniline and related compounds.",
        "The site's long operating history created multiple cleanup areas rather than one simple event. Plant sections, sewers, soil, groundwater, shoreline, and the adjacent river have been investigated through different state and federal programs.",
      ],
      timeline: [
        {
          period: "1879",
          event:
            "Schoellkopf Aniline and Dye Company established the dye and chemical works beside the Buffalo River.",
        },
        {
          period: "1916–1920",
          event:
            "The property became part of National Aniline and then Allied Chemical.",
        },
        {
          period: "1977",
          event:
            "Buffalo Color purchased the plant and focused later production on indigo dye and related materials.",
        },
        {
          period: "2003",
          event:
            "Manufacturing ended after Buffalo Color ceased operations and entered bankruptcy.",
        },
        {
          period: "2000s–present",
          event:
            "State brownfield and inactive-hazardous-waste programs, together with federal corrective-action oversight, addressed the complex in separate areas and phases.",
        },
      ],
      documentedImpacts: [
        "Historic wastes included off-specification dye, process tars and residues, spent catalysts, and waste solvents.",
        "Investigations documented metals, volatile compounds, and semi-volatile compounds in parts of the plant system, including sewer sediment.",
        "Plant sewers leading toward Buffalo River outfalls became part of the investigation and remedy.",
      ],
      cleanupAndControls: [
        "The large complex was divided into Areas A through E because conditions, ownership, and cleanup programs varied across the property.",
        "New York reports that Area C was remediated through the Brownfield Cleanup Program and that Area D is capped and secured; work in Areas A, B, and E has proceeded through separate state programs and site-management requirements.",
        "EPA's RCRA corrective-action record separately describes proposed measures for remaining portions of the former facility, including contaminated-material removal, sewer work, groundwater controls, and long-term monitoring. That federal record should not be read as a single status statement for every parcel.",
        "Shoreline habitat restoration at the Buffalo Color peninsula complemented—but did not replace—the industrial-site cleanup programs.",
      ],
      presentDay: [
        "Former plant areas have moved through cleanup and redevelopment at different rates. The correct present-day account therefore depends on the specific parcel and cleanup program rather than treating the entire former complex as one uniform condition.",
      ],
      researchNotes: [
        "Build a parcel-by-parcel crosswalk for Areas A through E and identify the current owner, remedy, and land-use controls for each.",
        "Distinguish Buffalo Color plant contamination from the separate Buffalo River sediment-remediation program.",
      ],
    },
    sources: [
      {
        title: "Buffalo Color Remedial Investigation Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915230/Report.BCP.C915230.2008-08-29.Area-ABCE_Remedial_Investigation_Report.pdf",
      },
      {
        title: "Buffalo Color Corporation Hazardous-Waste Cleanup",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-buffalo-color-corporation-buffalo-new-york",
      },
      {
        title: "Frequently Asked Questions About Restoring the Buffalo River",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/restoring-buffalo-river-faq",
      },
    ],
  },
  {
    id: "buffalo-river",
    name: "Buffalo River",
    municipality: "Buffalo",
    county: "Erie",
    category: "waterway",
    summary:
      "Industrial corridor where navigational and remedial dredging removed legacy-contaminated sediment alongside habitat restoration and long-term recovery work.",
    evidenceStatus: "well-documented",
    coordinates: [-78.873, 42.864],
    story: {
      lastReviewed: "July 26, 2026",
      background: [
        "The Buffalo River became the western terminus of the Erie Canal in 1825. Grain elevators, steel mills, meatpacking, chemical works, petroleum facilities, municipal systems, and other industries concentrated along its banks, using the river as transportation infrastructure and, historically, as a receiving water.",
        "By 1987, the United States and Canada had designated the Buffalo River as a Great Lakes Area of Concern because contamination and habitat loss impaired environmental and recreational uses. Its modern story is one of sediment remediation, navigation dredging, shoreline restoration, monitoring, and the gradual removal of formally identified beneficial-use impairments.",
      ],
      timeline: [
        {
          period: "1825",
          event:
            "The opening of the Erie Canal helped establish the Buffalo River as a major industrial and transportation corridor.",
        },
        {
          period: "1987",
          event:
            "The river was designated a Great Lakes Area of Concern under the binational Great Lakes Water Quality Agreement.",
        },
        {
          period: "2013–2015",
          event:
            "EPA and Honeywell completed major dredging and capping work on contaminated sediment outside and below the navigation channel.",
        },
        {
          period: "2020–2021",
          event:
            "Strategic navigation dredging and final cleanup work addressed remaining targeted sediment areas.",
        },
        {
          period: "Present",
          event:
            "Monitoring and habitat work continue as agencies evaluate the remaining beneficial-use impairments required for eventual delisting.",
        },
      ],
      documentedImpacts: [
        "Historic industrial and municipal activity introduced pollutants to the river and contributed to contaminated sediment.",
        "The Area of Concern record identified restrictions involving dredging, fish and wildlife, degraded benthic communities, habitat loss, aesthetics, and other uses.",
        "Contamination and physical alteration of the shoreline affected ecological function as well as navigation and recreation.",
      ],
      cleanupAndControls: [
        "Nearly 500,000 cubic yards of contaminated sediment outside and below the navigation channel were remediated through dredging and capping.",
        "Additional navigation dredging targeted residual contamination in five channel areas.",
        "Multiple projects restored in-water, riparian, wetland, and upland habitat along former industrial shorelines.",
      ],
      presentDay: [
        "EPA reports substantial environmental recovery and the removal of multiple beneficial-use impairments. The river remains an Area of Concern until all required impairment-removal criteria are met and the formal delisting process is completed.",
      ],
      researchNotes: [
        "Connect individual shoreline projects to the industrial parcels and waste pathways documented elsewhere in the atlas.",
        "Keep navigational dredging, remedial dredging, and habitat restoration distinct in future maps and timelines.",
      ],
    },
    sources: [
      {
        title: "Remediation and Restoration Projects for the Buffalo River AOC",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/great-lakes-aocs/remediation-and-restoration-projects-buffalo-river-aoc",
      },
      {
        title: "Buffalo River Area of Concern",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/great-lakes-aocs/buffalo-river-aoc",
      },
    ],
  },
  {
    id: "linde-air-products",
    name: "Linde Air Products",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "radiological",
    summary: "Manhattan Project uranium processing and the regional FUSRAP story.",
    evidenceStatus: "well-documented",
    coordinates: [-78.911, 42.999],
    atomicLegacy: {
      era: "Manhattan Project",
      role: "uranium-ore refining and uranium tetrafluoride production",
    },
    story: {
      lastReviewed: "July 26, 2026",
      background: [
        "Between 1942 and 1946, the Manhattan Engineer District contracted with the Linde Air Products Division of Union Carbide to process uranium ore at this Town of Tonawanda industrial facility. Work included separating uranium dioxide from ores and converting uranium dioxide to uranium tetrafluoride.",
        "Processing affected portions of the property, buildings, infrastructure, sediment, soil, and groundwater. Later handling and disposal also moved Linde-related material to other Tonawanda locations, making the site central to understanding the region's connected FUSRAP landscape.",
      ],
      timeline: [
        {
          period: "1942–1946",
          event:
            "Linde performed uranium-processing work for the Manhattan Engineer District.",
        },
        {
          period: "1980",
          event:
            "The Department of Energy designated the property for remediation under FUSRAP.",
        },
        {
          period: "1996–1997",
          event:
            "DOE began investigation and removal work; Congress then transferred FUSRAP cleanup execution to the U.S. Army Corps of Engineers.",
        },
        {
          period: "1997–2013",
          event:
            "USACE excavated contaminated soil and removed affected building surfaces and infrastructure for licensed off-site disposal.",
        },
        {
          period: "Present",
          event:
            "The property remains an active industrial-gas facility under long-term stewardship for the completed FUSRAP remedy.",
        },
      ],
      documentedImpacts: [
        "The contaminants of concern included radium-226, thorium-230, uranium isotopes, and associated decay products.",
        "Contamination was documented in surface and subsurface soil, sediment, structural surfaces, and groundwater.",
        "Waste relocation linked the Linde history to the Ashland, Seaway, and Tonawanda Landfill FUSRAP records.",
      ],
      cleanupAndControls: [
        "Remedial work removed affected soil, building surfaces, and infrastructure for disposal at licensed facilities.",
        "Cleanup criteria were based on the site's anticipated commercial and industrial use.",
        "Long-term stewardship preserves records and verifies that the completed remedy remains protective for the intended land use.",
      ],
      presentDay: [
        "The privately owned property continues to operate as an industrial-gas facility. A completed FUSRAP cleanup does not erase the site's Manhattan Project history; it changes the story from active remediation to stewardship and land-use context.",
      ],
      researchNotes: [
        "Create a material-movement diagram connecting Linde, Ashland 1, Ashland 2, Seaway, and Tonawanda Landfill.",
        "Document which remedy areas support unrestricted use and which were evaluated for commercial or industrial use.",
      ],
    },
    sources: [
      {
        title: "Tonawanda, New York, Site",
        publisher: "U.S. Department of Energy Office of Legacy Management",
        url: "https://www.energy.gov/lm/tonawanda-new-york-site",
      },
      {
        title: "Tonawanda, New York, Site Fact Sheet",
        publisher: "U.S. Department of Energy Office of Legacy Management",
        url: "https://www.energy.gov/lm/articles/tonawanda-new-york-site-fact-sheet",
      },
    ],
  },
  {
    id: "bethlehem-steel",
    name: "Former Bethlehem Steel",
    municipality: "Lackawanna",
    county: "Erie",
    category: "industry",
    summary:
      "Former Lake Erie steelmaking complex with about 440 acres of manmade shoreline built from slag and plant waste. Its HWM-2 landfill held about 118,000 cubic yards of coke- and primary-metalmaking waste. Cleanup, monitoring, and land-use controls continue across the larger property.",
    evidenceStatus: "well-documented",
    coordinates: [-78.85913, 42.82158],
    story: {
      lastReviewed: "July 26, 2026",
      background: [
        "The former Bethlehem Steel complex in Lackawanna was one of Western New York's defining industrial landscapes. Ironmaking, steelmaking, coke production, finishing operations, rail systems, water use, and waste management reshaped a long section of the Lake Erie shoreline.",
        "The environmental record is correspondingly large. It includes plant-wide corrective action, individual waste-management units, extensive slag and industrial fill, shoreline and creek restoration, demolition, groundwater and soil work, long-term controls, and redevelopment proposals across differently managed portions of the property.",
      ],
      timeline: [
        {
          period: "Industrial era",
          event:
            "The integrated steel complex expanded production and created extensive industrial infrastructure and filled shoreline land.",
        },
        {
          period: "1980s–2000s",
          event:
            "Federal and state programs investigated waste units, soil, groundwater, shoreline areas, and off-site migration pathways as steel operations contracted and ended.",
        },
        {
          period: "2009",
          event:
            "A major sediment-removal project addressed affected material in lower Smokes Creek.",
        },
        {
          period: "Present",
          event:
            "Cleanup, monitoring, demolition, habitat restoration, renewable-energy use, and industrial redevelopment proceed across separate portions of the former complex.",
        },
      ],
      documentedImpacts: [
        "Approximately 440 acres of the western property consist of manmade land formed with iron- and steelmaking slag and other plant waste.",
        "The HWM-2 landfill was documented as containing coke-making and primary-metals wastes.",
        "Investigations and remedies have addressed soil, groundwater, waste units, shoreline areas, and Smokes Creek sediment.",
      ],
      cleanupAndControls: [
        "Corrective-action work is divided into units and phases because of the site's size, operating history, and varied conditions.",
        "At the former Benzol Yard, a groundwater extraction and treatment system has operated since 2005 to control a plume containing benzene and related compounds.",
        "At the Acid Tar Pits and Coke Oven Area, current work includes containment, extraction and treatment, cap construction or improvement, and an expanded groundwater monitoring and treatment network.",
        "Other remedies include excavation, consolidation or containment, covers, monitoring, land-use restrictions, and habitat work. In 2009, approximately 40,000 cubic yards of affected sediment were removed from lower Smokes Creek.",
        "Redevelopment decisions must remain compatible with environmental easements, engineering controls, and site-management requirements.",
      ],
      presentDay: [
        "The former complex is not one uniform brownfield. Some areas support new industrial or energy uses, some remain under active cleanup or management, and restored shoreline and creek habitats coexist with controlled industrial land.",
      ],
      researchNotes: [
        "Build a map of the major corrective-action units, HWM-2, slag-fill areas, Smokes Creek, and redevelopment parcels.",
        "Separate Buffalo Harbor dredged-material disposal records from Bethlehem's own industrial waste units unless a primary source documents a connection.",
      ],
    },
    sources: [
      {
        title: "Environmental Cleanup at Former Bethlehem Steel Site",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/environmental-cleanup-at-former-bethlehem-steel-site",
      },
      {
        title: "Tecumseh Redevelopment Hazardous-Waste Cleanup",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-tecumseh-redevelopment-incorporated-lackawanna",
      },
      {
        title: "40 CFR Part 261, Appendix IX — Bethlehem Steel HWM-2 Exclusion",
        publisher: "U.S. Government Publishing Office",
        url: "https://www.govinfo.gov/content/pkg/CFR-2013-title40-vol27/pdf/CFR-2013-title40-vol27-part261-appIX.pdf",
      },
    ],
  },
  {
    id: "west-valley",
    name: "West Valley Demonstration Project",
    municipality: "Ashford",
    county: "Cattaraugus",
    category: "radiological",
    summary:
      "Federal cleanup and decommissioning project at the former commercial nuclear fuel reprocessing facility.",
    evidenceStatus: "well-documented",
    coordinates: [-78.647, 42.451],
    sources: [
      {
        title: "About the West Valley Demonstration Project",
        publisher: "U.S. Department of Energy",
        url: "https://www.energy.gov/wvdp/about-wvdp",
      },
      {
        title: "West Valley Begins Demolishing Legacy Fuel Reprocessing Facility",
        publisher: "U.S. Department of Energy Office of Environmental Management",
        url: "https://www.energy.gov/em/articles/west-valley-begins-demolishing-legacy-fuel-reprocessing-facility",
      },
    ],
  },
  {
    id: "republic-steel",
    name: "Former Republic Steel",
    municipality: "Buffalo",
    county: "Erie",
    category: "industry",
    summary:
      "Former South Buffalo steel and coke complex remediated in phases as the Steelfields and RiverBend properties.",
    evidenceStatus: "well-documented",
    coordinates: [-78.83, 42.85],
    sources: [
      {
        title: "Restoring the Buffalo River: Frequently Asked Questions",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/restoring-buffalo-river-faq",
      },
      {
        title: "Steelfields Area I Revised Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/V00619/Report.VCP.V00619.2021-09-20.Area_I_Revised_SMP.pdf",
      },
    ],
  },
  {
    id: "tonawanda-coke",
    name: "Former Tonawanda Coke",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "industry",
    summary:
      "Former coke manufacturing facility documented as a major historical benzene source, where shutdown response, removal work, state cleanup, and redevelopment followed the 2018 closure.",
    evidenceStatus: "well-documented",
    coordinates: [-78.92593, 42.98318],
    sources: [
      {
        title: "Tonawanda Coke Corporation Site",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/tonawanda-coke-corporation-tcc-site",
      },
    ],
  },
  {
    id: "woodlawn-beach",
    name: "Woodlawn Beach",
    municipality: "Blasdell",
    county: "Erie",
    category: "waterway",
    summary:
      "Lake Erie public beach where swimming decisions use a water-quality model and restoration work addresses the adjacent wetland and Blasdell Creek.",
    evidenceStatus: "well-documented",
    coordinates: [-78.864, 42.79],
    sources: [
      {
        title: "Beaches and Pools: Beach Water Quality",
        publisher: "Erie County Department of Health",
        url: "https://www3.erie.gov/envhealth/beaches-and-pools",
      },
      {
        title: "Woodlawn Beach Wetland Restoration",
        publisher: "New York State Parks",
        url: "https://parks.ny.gov/news/press-releases/woodlawn-beach-state-park-wetland-restoration-project-slated-fall",
      },
    ],
  },
  {
    id: "seaway-site",
    name: "Seaway FUSRAP Site / Tonawanda North Unit 3",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "radiological",
    summary:
      "River Road landfill areas containing material moved from the former Ashland property, where residues from Linde uranium processing had been stored.",
    evidenceStatus: "well-documented",
    coordinates: [-78.915, 42.997],
    atomicLegacy: {
      era: "Manhattan Project-derived material",
      role: "later disposal of residues moved from the Ashland property",
    },
    sources: [
      {
        title: "Seaway Site",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612995/seaway-site/",
      },
      {
        title: "Seaway Site Five-Year Review",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/News/News-Releases/Display/Article/4396884/fusrap-seaway-site-five-year-review-of-selected-remedy/",
      },
    ],
  },
  {
    id: "gratwick-riverside-park",
    name: "Gratwick Riverside Park",
    municipality: "North Tonawanda",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Niagara River park established on a former municipal and industrial landfill, with a documented remedial program and long-term site management.",
    evidenceStatus: "well-documented",
    coordinates: [-78.899038, 43.054331],
    sources: [
      {
        title: "Gratwick Riverside Park Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932060/ROD.HW.932060.1991-02-01.gratwick_riverside.pdf",
      },
      {
        title: "Gratwick Riverside Park Trail Excavation Work Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932060/Work%20Plan.HW.932060.2024-08-14.Trail_Excavation_Notification.pdf",
      },
    ],
  },
  {
    id: "cherry-farm",
    name: "Niagara Mohawk–Cherry Farm",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former Niagara River landfill containing foundry sand, slag, cinders, and other fill, later remediated with habitat-oriented cover and plantings.",
    evidenceStatus: "well-documented",
    coordinates: [-78.918, 43.012],
    sources: [
      {
        title: "Niagara Mohawk–Cherry Farm Site Summary",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1012HVJ.txt",
      },
      {
        title: "Niagara Mohawk Cherry Farm Superfund Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0201480",
      },
    ],
  },
  {
    id: "niagara-erie-radiological-assessment",
    name: "Niagara–Erie Residential Radiological Assessment",
    municipality: "Town of Niagara",
    county: "Niagara",
    category: "radiological",
    summary:
      "Ongoing regional investigation in which 121 property owners were contacted for access to conduct more detailed testing. Contact or screening does not mean every property contains radioactive fill.",
    evidenceStatus: "research-in-progress",
    coordinates: [-79.035, 43.125],
    sources: [
      {
        title: "Niagara and Erie County Radiological Assessment Project",
        publisher: "Office of the Governor of New York",
        url: "https://www.governor.ny.gov/news/governor-hochuls-letter-epa-administrator-protect-new-yorkers-and-accelerate-niagara-and-erie",
      },
      {
        title: "ASPECT Radiological Assessment Deployment",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/emergency-response/aspect-program-history",
      },
      {
        title: "DEC Officials Report 121 Property-Access Letters",
        publisher: "Niagara Action",
        url: "https://www.niagaraaction.com/radioactive-contamination-fears-grow-in-niagara-county-as-residents-demand-answers-cleanup-and-superfund-designation/",
      },
    ],
  },
  {
    id: "niagara-falls-boulevard-radiation-site",
    name: "Niagara Falls Boulevard Radiation Site",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "radiological",
    summary:
      "Radioactive slag fill was removed from parking lots and interior areas at the documented 9512–9626 Niagara Falls Boulevard properties.",
    evidenceStatus: "well-documented",
    coordinates: [-78.949, 43.101],
    sources: [
      {
        title: "Niagara County Radiation Removal Sites",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/niagara-county-radiation-removal-sites",
      },
    ],
  },
  {
    id: "donovan-head-start-radiation-site",
    name: "Donovan Head Start Slag Removal",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "radiological",
    summary:
      "Radioactive industrial slag fill was removed from playground and parking areas in 2023; EPA reports that the building itself was not contaminated.",
    evidenceStatus: "well-documented",
    coordinates: [-79.054, 43.106],
    sources: [
      {
        title: "Niagara County Radiation Removal Sites",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/niagara-county-radiation-removal-sites",
      },
    ],
  },
  {
    id: "upper-mountain-road-radiation-site",
    name: "Upper Mountain Road Radiation Site",
    municipality: "Lewiston",
    county: "Niagara",
    category: "radiological",
    summary:
      "Radioactive fill was removed from an access road and portions of two adjacent residential properties between 2020 and 2023.",
    evidenceStatus: "well-documented",
    coordinates: [-79.01842, 43.15618],
    sources: [
      {
        title: "Niagara County Radiation Removal Sites",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/niagara-county-radiation-removal-sites",
      },
    ],
  },
  {
    id: "holy-trinity-radiation-site",
    name: "Holy Trinity Cemetery Vicinity",
    municipality: "Lewiston",
    county: "Niagara",
    category: "radiological",
    summary:
      "EPA removed radioactive material from a garage and driveway at one nearby residence and from a driveway and patio at another.",
    evidenceStatus: "well-documented",
    coordinates: [-79.03242, 43.1484],
    sources: [
      {
        title: "Niagara County Radiation Removal Sites",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/niagara-county-radiation-removal-sites",
      },
    ],
  },
  {
    id: "michael-heyman-east-ferry",
    name: "Michael Heyman / 858 East Ferry",
    municipality: "Buffalo",
    county: "Erie",
    category: "industry",
    summary:
      "Former zinc and lead smelting and refining area where cleanup removed 136,234 tons of lead-contaminated soil from the site and surrounding properties.",
    evidenceStatus: "well-documented",
    coordinates: [-78.83169297049032, 42.915597320172324],
    sources: [
      {
        title: "East Ferry Street Cleanup Success Story",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/der-success-stories",
      },
      {
        title: "858 East Ferry Final Remediation Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915175/Report.HW.915175.2009-03-26.Final_Remediation_Report..pdf",
      },
    ],
  },
  {
    id: "buffalo-color-area-e-field",
    name: "Buffalo Color Area E / Former Medaille Field",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former Buffalo Color chemical-manufacturing parcel remediated under the Brownfield Cleanup Program and redeveloped in 2019 as the Medaille athletic complex at Buffalo Color Park.",
    evidenceStatus: "well-documented",
    coordinates: [-78.84111274948687, 42.86634334494757],
    sources: [
      {
        title: "Buffalo Color Area E Site Management and Periodic Review",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915232/Report.BCP.C915232.2024-03-21.PRR_and_IC-EC_Certification.pdf",
      },
      {
        title: "2021 Athletic Field Air-Monitoring Action",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/press-releases/2021/5/dec-directs-pvs-chemical-solutions-inc-to-temporarily-cease-operations",
      },
    ],
  },
  {
    id: "ashland-1-refinery-site",
    name: "Ashland 1 / Former Ashland Oil Refinery",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "radiological",
    summary:
      "Former River Road refinery property where Linde uranium-processing residues had been stored before Ashland Oil acquired the land; federal cleanup was completed in 2003.",
    evidenceStatus: "well-documented",
    coordinates: [-78.917, 42.993],
    atomicLegacy: {
      era: "Manhattan Project-derived material",
      role: "wartime Linde residues stored on the property",
    },
    sources: [
      {
        title: "Ashland 1 FUSRAP Site",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612233/ashland-1-site/",
      },
      {
        title: "Tonawanda North Unit 1",
        publisher: "U.S. Department of Energy Office of Legacy Management",
        url: "https://www.energy.gov/lm/tonawanda-north-new-york-site-unit-1",
      },
    ],
  },
  {
    id: "huntley-generating-station",
    name: "Former Huntley Generating Station",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "industry",
    summary:
      "Coal-fired Niagara River power station retired in 2016, with a separately managed industrial fly-ash landfill and a history extending to the River Station era.",
    evidenceStatus: "well-documented",
    coordinates: [-78.927, 42.975],
    sources: [
      {
        title: "Huntley Generating Station Coal-Impoundment Assessment",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www3.epa.gov/epawaste/coal/pdf/nrg_huntley_final.pdf",
      },
      {
        title: "NRG Huntley Industrial Landfill Annual Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/fs/projects/SWMF/Annual%20Reports_Solid%20Waste%20Management%20Facility/Annual%20Reports_by%20Activity%20Type/Landfill/Landfill%20Annual%20Reports%20-%202023/R9/15N24_NRG_Huntley_Landfill_ind_R9_2022.2023-03-01.AR.pdf",
      },
    ],
  },
  {
    id: "dunlop-disposal-sites",
    name: "Dunlop Tire Disposal Sites",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "cleanup",
    summary:
      "Three historical waste-disposal areas at the River Road tire plant were investigated, capped, and placed under long-term groundwater monitoring and site management.",
    evidenceStatus: "well-documented",
    coordinates: [-78.91895772323295, 42.97036356877955],
    sources: [
      {
        title: "Dunlop Site 2 Superfund Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0201676",
      },
      {
        title: "Dunlop Tire Corporation Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915018/",
      },
    ],
  },
  {
    id: "buffalo-harbor-cdf-4",
    name: "Buffalo Harbor CDF No. 4",
    municipality: "Buffalo",
    county: "Erie",
    category: "waterway",
    summary:
      "A 107-acre Outer Harbor confined disposal facility constructed in 1977 beside the former Bethlehem Steel property. It receives dredged material from Buffalo Harbor, the Buffalo River, Black Rock Channel, and Tonawanda Harbor, but is distinct from Bethlehem’s HWM-2 industrial landfill and the steel plant’s slag-fill area.",
    evidenceStatus: "well-documented",
    coordinates: [-78.869, 42.8],
    sources: [
      {
        title: "Buffalo Harbor Confined Disposal Facility No. 4",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://lre-ops.usace.army.mil/OandM/GLNAV/DMMandCDFFS/BuffaloCDFFactSheet.pdf",
      },
    ],
  },
  {
    id: "pfohl-brothers-landfill",
    name: "Pfohl Brothers Landfill",
    municipality: "Cheektowaga",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former municipal and industrial landfill bordering Transit Road where drums and contaminated material were removed, wastes were consolidated beneath engineered caps, and long-term monitoring continues.",
    evidenceStatus: "well-documented",
    coordinates: [-78.70135404543488, 42.94506885094213],
    sources: [
      {
        title: "Pfohl Brothers Landfill Superfund Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/cursites/csitinfo.cfm?id=0201751",
      },
      {
        title: "Pfohl Brothers Landfill Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915043/ROD.HW.915043.1994-01-01.pfohl_brothers_ou2.pdf",
      },
    ],
  },
  {
    id: "tifft-nature-preserve",
    name: "Tifft Nature Preserve",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "A 264-acre former dockland and city-dump landscape transformed through capping and habitat work into an urban nature preserve with trails, wetlands, and environmental education.",
    evidenceStatus: "well-documented",
    coordinates: [-78.862, 42.847],
    sources: [
      {
        title: "Tifft Nature Preserve",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/things-to-do/watchable-wildlife/sites/tifft-nature-preserve",
      },
      {
        title: "Buffalo Parks Master Plan",
        publisher: "City of Buffalo",
        url: "https://www.buffalony.gov/DocumentCenter/View/9917/Buffalo-Parks-Master-Plan",
      },
    ],
  },
  {
    id: "main-hertel-the-rails",
    name: "Main & Hertel / The Rails",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former manufacturing and electroplating property cleaned through the Brownfield Cleanup Program and redeveloped as apartments with commercial space.",
    evidenceStatus: "well-documented",
    coordinates: [-78.836, 42.947],
    sources: [
      {
        title: "DEC Marks 21st Successful Year for the Brownfield Cleanup Program",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/press-releases/2025/2/dec-marks-21st-successful-year-for-new-york-states-brownfield-cleanup-program",
      },
    ],
  },
  {
    id: "former-trico-plant",
    name: "Former Trico Plant",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former windshield-wiper manufacturing complex remediated under the Brownfield Cleanup Program and converted primarily to residential apartments with commercial space.",
    evidenceStatus: "well-documented",
    coordinates: [-78.86966826328961, 42.895286241026554],
    sources: [
      {
        title: "Former Trico Plant Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915281/Work%20Plan.BCP.C915281.2025-03-25.Reivsed_SMP.pdf",
      },
    ],
  },
  {
    id: "niagara-falls-air-reserve-pfas",
    name: "Niagara Falls Air Reserve Station PFAS Investigation",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "pfas",
    summary:
      "Federal and state investigations of PFAS associated with historical use and releases of aqueous film-forming firefighting foam at the air station.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.93997339520959, 43.11936785737371],
    sources: [
      {
        title: "Final Site Inspection Report of Firefighting Foam Usage",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932106/Report.RCRA.932106.2019-01-10.Final_Site_Inspection_Report_AFFF_at_NFARS.pdf",
      },
      {
        title: "Hazardous Waste Cleanup: 914th Airlift Wing-AFRC",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-914th-airlift-wing-afrc-niagara-falls-new-york",
      },
    ],
  },
  {
    id: "mayville-pfas-site",
    name: "Mayville PFAS Site",
    municipality: "Mayville",
    county: "Chautauqua",
    category: "pfas",
    summary:
      "Ongoing investigation of PFNA detected in the village water system and in environmental media near a former firefighting-training area; replacement supply and treatment measures were implemented.",
    evidenceStatus: "research-in-progress",
    coordinates: [-79.505, 42.254],
    sources: [
      {
        title: "Investigation at the Mayville PFAS Site",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/investigation-at-the-mayville-pfas-site",
      },
    ],
  },
  {
    id: "marine-drive-apartments-east-pfas",
    name: "Marine Drive Apartments East PFAS Investigation",
    municipality: "Buffalo",
    county: "Erie",
    category: "pfas",
    summary:
      "Brownfield investigation at 90 Erie Street documented PFAS impacts in groundwater alongside contaminants associated with historic fill; remediation planning remains part of the site record.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.87939879828025, 42.87868563473828],
    sources: [
      {
        title: "Marine Drive Apartments East Remedial Investigation",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915398/Report.BCP.C915398.2024-12-09.Final%20Remedial%20Investigation_Alt.%20Analysis%20.pdf",
      },
    ],
  },
  {
    id: "iroquois-gas-westwood",
    name: "Iroquois Gas / Westwood Pharmaceutical",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former manufactured-gas plant at Dart and Bradley Streets. Long-term terrestrial and creek remedies remain under management, while DEC continues investigating historic coal-tar impacts in the lower Scajaquada Creek area.",
    evidenceStatus: "well-documented",
    coordinates: [-78.89891900618512, 42.92937998910184],
    sources: [
      {
        title: "Gaslight Lane and Scajaquada Creek Site Characterization",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915351/Report.HW.915351.2022-10-20.Site%20Characterization%20Report%20.pdf",
      },
      {
        title: "Iroquois Gas / Westwood Riparian Periodic Review",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915141B/Report.HW.915141B.2025-09-12.Revised_2024_Periodic_Review_Report.pdf",
      },
    ],
  },
  {
    id: "west-genesee-former-mgp",
    name: "Former Buffalo Service Station / Blue Cross–HealthNow Site",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former West Genesee manufactured-gas property where coal-gas wastes affected soil and groundwater. Cleanup was completed in 2006 and the property was redeveloped for the former HealthNow/Blue Cross headquarters, which Highmark vacated as its headquarters in 2024.",
    evidenceStatus: "well-documented",
    coordinates: [-78.88303247319787, 42.885725283841616],
    sources: [
      {
        title: "Region 9 Environmental Cleanup Success Stories",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/der-success-stories",
      },
      {
        title: "Former Buffalo Service Station DEC Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915194/",
      },
    ],
  },
  {
    id: "solvent-chemical-niagara-falls",
    name: "Solvent Chemical Site",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former Buffalo Avenue chemical-manufacturing and disposal site where benzene and chlorinated benzenes affected multiple groundwater zones; containment, treatment, and monitoring remain part of the remedy.",
    evidenceStatus: "well-documented",
    coordinates: [-79.02291556938837, 43.08187274370253],
    sources: [
      {
        title: "Solvent Chemical Site Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932096/ROD.HW.932096.1996-12-01.solvent_chem.pdf",
      },
      {
        title: "Solvent Chemical Site Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932096/Report.HW.932096.2022-04-21.2021_Periodic_Review_Report.pdf",
      },
    ],
  },
  {
    id: "ashland-2-fusrap-site",
    name: "Ashland 2 FUSRAP Site",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "radiological",
    summary:
      "Former industrial landfill that received radioactive soil excavated from Ashland 1 in 1974; federal cleanup removed more than 52,000 tons of material.",
    evidenceStatus: "well-documented",
    coordinates: [-78.913, 43.002],
    atomicLegacy: {
      era: "Manhattan Project-derived material",
      role: "later disposal of contaminated soil moved from Ashland 1",
    },
    sources: [
      {
        title: "Ashland 2 Site",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612311/ashland-2-site/",
      },
    ],
  },
  {
    id: "tonawanda-landfill-fusrap-vicinity",
    name: "Tonawanda Landfill FUSRAP Vicinity Property",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "radiological",
    summary:
      "Town landfill and mudflats vicinity property where radioactive material resembled material at other FUSRAP sites, although no record ties the property to Manhattan Engineer District or Atomic Energy Commission operations.",
    evidenceStatus: "well-documented",
    coordinates: [-78.895, 42.984],
    atomicLegacy: {
      era: "FUSRAP — origin unconfirmed",
      role: "radiological vicinity property; no documented MED/AEC activity",
    },
    sources: [
      {
        title: "Tonawanda Landfill Vicinity Property",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3613023/tonawanda-landfill-vicinity-property/",
      },
    ],
  },
  {
    id: "niagara-falls-storage-site",
    name: "Niagara Falls Storage Site",
    municipality: "Lewiston",
    county: "Niagara",
    category: "radiological",
    summary:
      "Former Lake Ontario Ordnance Works property used beginning in 1944 to store Manhattan Engineer District radioactive residues and uranium-processing wastes; active federal remediation continues.",
    evidenceStatus: "well-documented",
    coordinates: [-79.018, 43.228],
    atomicLegacy: {
      era: "Manhattan Project",
      role: "radioactive-residue and uranium-processing-waste storage",
    },
    sources: [
      {
        title: "Niagara Falls Storage Site",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612360/niagara-falls-storage-site/",
      },
    ],
  },
  {
    id: "niagara-falls-storage-site-vicinity-properties",
    name: "Niagara Falls Storage Site Vicinity Properties",
    municipality: "Lewiston and Porter",
    county: "Niagara",
    category: "radiological",
    summary:
      "Properties surrounding the federal storage site that have been investigated or remediated individually for material associated with the Niagara Falls Storage Site.",
    evidenceStatus: "research-in-progress",
    coordinates: [-79.026, 43.235],
    atomicLegacy: {
      era: "Manhattan Project-derived material",
      role: "vicinity-property investigation and cleanup",
    },
    sources: [
      {
        title: "Niagara Falls Storage Site",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612360/niagara-falls-storage-site/",
      },
    ],
  },
  {
    id: "electro-metallurgical-company",
    name: "Electro Metallurgical Company",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "radiological",
    summary:
      "Union Carbide subsidiary that converted Linde uranium tetrafluoride into uranium metal, producing more than one-third of the Manhattan Project’s uranium-metal requirement.",
    evidenceStatus: "well-documented",
    coordinates: [-78.958, 43.103],
    atomicLegacy: {
      era: "Manhattan Project",
      role: "uranium-metal production",
    },
    sources: [
      {
        title: "Manhattan Project Uranium Milling and Processing Facilities",
        publisher: "U.S. Department of Energy Office of Scientific and Technical Information",
        url: "https://www.osti.gov/opennet/manhattan-project-history/Places/Other/uranium-production.html",
      },
    ],
  },
  {
    id: "bliss-laughlin-steel",
    name: "Bliss & Laughlin Steel",
    municipality: "Buffalo",
    county: "Erie",
    category: "radiological",
    summary:
      "Steel facility where uranium rods were machined and straightened in 1952 for an Atomic Energy Commission contractor; the affected area was remediated under FUSRAP.",
    evidenceStatus: "well-documented",
    coordinates: [-78.823, 42.846],
    atomicLegacy: {
      era: "Early Atomic Energy Commission",
      role: "uranium-rod machining and straightening",
    },
    sources: [
      {
        title: "Buffalo, New York, Site",
        publisher: "U.S. Department of Energy Office of Legacy Management",
        url: "https://www.energy.gov/lm/buffalo-new-york-site",
      },
    ],
  },
  {
    id: "guterl-specialty-steel",
    name: "Guterl Specialty Steel / Former Simonds Saw and Steel",
    municipality: "Lockport",
    county: "Niagara",
    category: "radiological",
    summary:
      "Former specialty-steel complex where Atomic Energy Commission work left uranium and thorium impacts in buildings, soil, and groundwater; federal remediation is active.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.69, 43.171],
    atomicLegacy: {
      era: "Early Atomic Energy Commission",
      role: "uranium rolling and specialty-metal work",
    },
    sources: [
      {
        title: "Guterl Steel Site",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Display/Article/3612330/guterl-steel-site/",
      },
    ],
  },
  {
    id: "katherine-street-peninsula",
    name: "Katherine Street Peninsula",
    municipality: "Buffalo",
    county: "Erie",
    category: "waterway",
    summary:
      "Former industrial Buffalo River peninsula with compacted fill and a documented waste-oil handling history nearby, where contaminated river sediment was addressed and multiple shoreline and habitat-restoration projects were completed. Sources reviewed do not establish the peninsula as a former municipal landfill.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.855204, 42.857583],
    sources: [
      {
        title: "Remediation and Restoration Projects for the Buffalo River AOC",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/great-lakes-aocs/remediation-and-restoration-projects-buffalo-river-aoc",
      },
      {
        title: "Buffalo River Habitat Restoration Completed at Katherine Street",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/News/News-Releases/Article/3652617/buffalo-river-habitat-restoration-completed-at-katherine-street/",
      },
      {
        title: "Buffalo River Corridor Brownfield Opportunity Area",
        publisher: "University at Buffalo Regional Institute",
        url: "https://regional-institute.buffalo.edu/wp-content/uploads/sites/155/2021/07/Buffalo-River-Corridor-BOA-Nomination-Document.pdf",
      },
    ],
  },
  {
    id: "exxonmobil-former-buffalo-terminal",
    name: "Former ExxonMobil Buffalo Terminal",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Large former petroleum refinery, lubricant plant, and terminal at Elk and Babcock Streets, divided into multiple state brownfield cleanup units addressing petroleum-impacted soil, groundwater, infrastructure, and riverfront conditions.",
    evidenceStatus: "well-documented",
    coordinates: [-78.83719331140942, 42.86557967382599],
    sources: [
      {
        title: "Babcock Street Properties Area Investigation",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915201C/Report.BCP.C915201C.2001-06-05.BSPA_Investigation.pdf",
      },
      {
        title: "Former Buffalo Terminal OU-2 Cleanup Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915201B/Fact%20Sheet.BCP.C915201B.2017-05-03.ExxonMobil_Former_Buffalo_Terminal_OU-2_Cleanup_Proposed.pdf",
      },
      {
        title: "Former Buffalo Terminal OU-3 Brownfield Cleanup Agreement",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915201D/Agreement.BCP.C915201D.2017-10-02.Executed_BCA_OU-3.pdf",
      },
    ],
  },
  {
    id: "polymer-applications",
    name: "Former Polymer Applications",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former phenolic-resin and rubber-products plant at 3445 River Road where a 1988 fire left drums, tanks, laboratory chemicals, and contaminated media requiring federal removal and state remediation.",
    evidenceStatus: "well-documented",
    coordinates: [-78.92503206804305, 42.970463759085646],
    sources: [
      {
        title: "Polymer Applications Site Documents",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915044/",
      },
      {
        title: "Polymer Applications Superfund Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0201544",
      },
    ],
  },
  {
    id: "3m-o-cel-o-tonawanda",
    name: "3M O-Cel-O Sponge Site",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "cleanup",
    summary:
      "Sponge-manufacturing property where interim controls addressed carbon-disulfide handling and drainage areas; the closed state site remains subject to controls, inspections, and monitoring.",
    evidenceStatus: "well-documented",
    coordinates: [-78.91726673086372, 42.97616585704152],
    sources: [
      {
        title: "3M O-Cel-O Sponge Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915148/ROD.HW.915148.1999-03-30.3M_O-Cel-O.pdf",
      },
      {
        title: "3M O-Cel-O Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915148/Report.HW.915148.2022-03-09.2021_Periodic_Review_Report.pdf",
      },
    ],
  },
  {
    id: "dupont-yerkes",
    name: "DuPont Yerkes Plant",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "industry",
    summary:
      "Long-running chemical and polymer-products facility at 3115 River Road, included in the state’s southwestern Tonawanda groundwater study and subject to wastewater, hazardous-air-pollutant, and emissions controls.",
    evidenceStatus: "well-documented",
    coordinates: [-78.924, 42.955],
    sources: [
      {
        title: "Southwestern Tonawanda Hydrogeologic Study",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915337/Report.BCP.C915337.2007-04-15.Hydrogeologic_and_Geochemical_Investigation_of_Southwestern_Tonawanda.pdf",
      },
      {
        title: "DuPont Yerkes Wastewater Permit Review",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2025-07-09/completed-application/town-of-tonawanda-dupont-specialty-products-usa-llc",
      },
    ],
  },
  {
    id: "fmc-peroxychem-evonik-tonawanda",
    name: "Former FMC Tonawanda Plant",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "industry",
    summary:
      "River Road and Sawyer Avenue chemical-manufacturing property included in the southwestern Tonawanda groundwater study; its former state waste-site listing was delisted while regulated operations continued under later owners.",
    evidenceStatus: "well-documented",
    coordinates: [-78.92, 42.961],
    sources: [
      {
        title: "Southwestern Tonawanda Hydrogeologic Study",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915337/Report.BCP.C915337.2007-04-15.Hydrogeologic_and_Geochemical_Investigation_of_Southwestern_Tonawanda.pdf",
      },
      {
        title: "Toxic Chemical Releases in Tonawanda Community Snapshot",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/sites/default/files/2014-09/documents/r2_tonawanda_tri_comm_snapshot-final.pdf",
      },
    ],
  },
  {
    id: "gastown-former-mgp",
    name: "Gastown Former Manufactured-Gas Plant",
    municipality: "City of Tonawanda",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former manufactured-gas plant at 126 East Niagara Street where coal-tar liquid and contaminated groundwater affected the property and nearby basement sumps. DEC classifies the closed site as Class 4 because recovery, monitoring, and continuing site management remain necessary.",
    evidenceStatus: "well-documented",
    coordinates: [-78.873, 43.022],
    sources: [
      {
        title: "Gastown Treatment System Semiannual Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915171/Report.HW.915171.2002-08-15.Treatment_System-1st_Semi_Report_2002.pdf",
      },
      {
        title: "Gastown MGP DEC Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915171/",
      },
    ],
  },
  {
    id: "lockport-transit-street-former-mgp",
    name: "Transit Street Former Manufactured-Gas Plant",
    municipality: "Lockport",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Gasworks operated on Transit Street from 1851 to 1927. Most of the selected cleanup was constructed from 2014 through 2016, but DEC continues to classify the non-registry program as active rather than complete.",
    evidenceStatus: "well-documented",
    coordinates: [-78.69624555259125, 43.16692913716765],
    sources: [
      {
        title: "Transit Street Former MGP Remediation Request for Proposals",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932098/Report.HW.932098.2013-07-08.RFP_for_Remediation_from_NYSEG.pdf",
      },
      {
        title: "36 South Transit Street Approved Work Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932098/Work%20Plan.HW.932098.2015-12-16.36%20S%20Transit%20Work%20Plan%20-%20approved.pdf",
      },
      {
        title: "Transit Street MGP Cleanup Update",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/der/factsheet/932098update.pdf",
      },
    ],
  },
  {
    id: "mineral-springs-road-former-mgp",
    name: "Mineral Springs Road Former Manufactured-Gas Plant",
    municipality: "West Seneca",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former manufactured-gas plant built in the 1920s and operated into the 1960s. DEC classifies the voluntary cleanup as complete, while groundwater, surface-water, and soil-vapor evaluation continue under site management.",
    evidenceStatus: "well-documented",
    coordinates: [-78.807, 42.878],
    sources: [
      {
        title: "Mineral Springs Road Final Engineering Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/V00195/Report.VCP.V00195.2002-06-24.Final_Engineering_Report_-Vol_I.pdf",
      },
      {
        title: "Mineral Springs Road DEC Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/V00195/",
      },
    ],
  },
  {
    id: "buffalo-gas-light-tonawanda-street",
    name: "Buffalo Gas Light Gas Holder / 31 Tonawanda Street",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former gas-holder property near Scajaquada Creek. State investigation documents the historic gasometer and evaluates coal-tar impacts associated with the adjoining former Westwood manufactured-gas plant area.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.89686994667213, 42.92980676363506],
    sources: [
      {
        title: "31 Tonawanda Street Off-Site Remedial Investigation Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915299A/Report.BCP.C915299A.2023-08-02.Off-Site%20RI%20Report%20-%20Text-Figures-Tables.pdf",
      },
    ],
  },
  {
    id: "jamestown-former-mgp",
    name: "Jamestown Former Manufactured-Gas Plant",
    municipality: "Jamestown",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former water-gas plant at 208 East First Street that operated from 1881 until an explosion destroyed structures around 1900–1901. DEC documented coal-tar liquid and contaminants above standards in soil and groundwater and classifies the property as a Class 2 State Superfund site requiring action.",
    evidenceStatus: "well-documented",
    coordinates: [-79.23710236, 42.095189055],
    sources: [
      {
        title: "Jamestown Former MGP Class 2 Notice",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/der/factsheet/907036class2.pdf",
      },
      {
        title: "Jamestown Former MGP Site Characterization Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907036/Report.HW.907036.2017-07-05.Site%20Characterization%20Report.pdf",
      },
    ],
  },
  {
    id: "dunkirk-former-mgp",
    name: "Dunkirk Former Manufactured-Gas Plant",
    municipality: "Dunkirk",
    county: "Chautauqua",
    category: "cleanup",
    summary:
      "Former three-acre gasworks at 31 West Second Street that operated from the late 1800s to about 1910. Investigation documented a source area and affected groundwater extending beyond the property. DEC classifies the cleanup program as active and incomplete.",
    evidenceStatus: "well-documented",
    coordinates: [-79.337186744, 42.48551081],
    sources: [
      {
        title: "Dunkirk Former MGP Remedial Investigation Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/dfmgpfs.pdf",
      },
      {
        title: "Dunkirk Former MGP DEC Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907035/",
      },
    ],
  },
  {
    id: "niagara-falls-former-mgp",
    name: "Niagara Falls Former Manufactured-Gas Plant",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Potential DEC site in the Rainbow Bridge and former Prospect Park area. Historic maps document a Niagara Falls Gas and Electric manufactured-gas plant and large gas holders, but the Class P designation means further investigation is required before cleanup needs can be determined.",
    evidenceStatus: "research-in-progress",
    coordinates: [-79.066273224, 43.088691577],
    sources: [
      {
        title: "Niagara Gorge Corridor Hazardous-Waste Screening",
        publisher: "New York State Office of Parks, Recreation and Historic Preservation",
        url: "https://parks.ny.gov/documents/inside-our-agency/PublicDocuments/NiagaraFallsStateParkScopingReport/MosesParkwayNorth/AppendixLHazardousWasteJuly2016.pdf",
      },
      {
        title: "Niagara Falls Former MGP DEC Record — 932147",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932147/",
      },
    ],
  },
  {
    id: "salamanca-former-mgp",
    name: "Salamanca Former Gas Property",
    municipality: "Salamanca",
    county: "Cattaraugus",
    category: "cleanup",
    summary:
      "Potential DEC site at 38 Main Street on the Seneca Nation's Allegany Territory. The available records link the property to Salamanca Gas Company and document gas purification and natural-gas distribution, but do not yet establish on-site manufactured-gas production or a required remedy.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.715378774, 42.156053639],
    sources: [
      {
        title: "Salamanca Former MGP DEC Record — 905035",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/905035/",
      },
      {
        title: "Fredonia and Salamanca Historical Records Search",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/907038/Report.HW.907038.2009-09-30.Records_Search_Reports_Fredonia_Salamanca.pdf",
      },
    ],
  },
  {
    id: "pierce-arrow-manufacturing-complex",
    name: "Former Pierce-Arrow Manufacturing Complex",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former luxury-automobile manufacturing complex around Great Arrow Avenue and Elmwood Avenue. State records identify petroleum impacts, industrial fill, metals, PCBs, solvents, underground tanks, and later hazardous-material storage across separately managed brownfield parcels; investigation at 157 Great Arrow was updated to include PFAS sampling.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.874006, 42.943264],
    sources: [
      {
        title: "Former Pierce Arrow Manufacturing Site Brownfield Application",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915220/Application.BCP.C915220.2007-08-23.BCP_Application.pdf",
      },
      {
        title: "157 Great Arrow Avenue Remedial Investigation Work Plan Addendum",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915326/Work%20Plan.BCP.C915326.2024-03-15.RIWP%20Addendum%20-%20FINAL.pdf",
      },
      {
        title: "Federal Superfund Drum Removal at Great Arrow Plaza",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/f967face708ce80885257245005d9528.html",
      },
    ],
  },
  {
    id: "union-road-gardenville-yard",
    name: "Union Road Site / Losson Road Tar Pit",
    municipality: "Cheektowaga",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former Gardenville railroad yard where a spur led to a wetland depression used for waste disposal. The location became known locally as the Losson Road tar pit. Investigators found tar-like material and dozens of abandoned drums. The waste was consolidated in a slurry-walled containment cell, capped, and placed under long-term monitoring.",
    evidenceStatus: "well-documented",
    coordinates: [-78.74165401790096, 42.87696653934266],
    sources: [
      {
        title: "Union Road Site Health and Safety Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915128/Report.HW.915128.2023-09-07.HASP.pdf",
      },
      {
        title: "Union Road Site 2024 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915128/Report.HW.915128.2025-03-14.PRR.pdf",
      },
      {
        title: "Union Road Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0202408",
      },
      {
        title: "Idylwoods Associates v. Mader Capital",
        publisher: "United States District Court, Western District of New York",
        url: "https://law.justia.com/cases/federal/district-courts/FSupp/915/1290/1618926/",
      },
    ],
  },
  {
    id: "hooker-hyde-park-landfill",
    name: "Hooker / Hyde Park Landfill",
    municipality: "Town of Niagara",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former Hooker Chemical landfill that received about 80,000 tons of chemical waste, including dioxin-bearing material. The landfill and perimeter are capped, contaminated groundwater is hydraulically contained and treated, and community monitoring wells remain in use.",
    evidenceStatus: "well-documented",
    coordinates: [-79.019, 43.119],
    sources: [
      {
        title: "Hooker / Hyde Park Superfund Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201306",
      },
      {
        title: "EPA Removes Hyde Park Landfill from Superfund List",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/722b0632baeffc0d85257c19005357a4.html",
      },
    ],
  },
  {
    id: "hooker-102nd-street-landfill",
    name: "Hooker / 102nd Street Landfill",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former industrial landfill where Occidental/Hooker and Olin deposited at least 159,000 tons of liquid and solid chemical waste. The remedy consolidated waste beneath a lined cap, added a slurry wall and recovery systems, and requires long-term groundwater and NAPL monitoring.",
    evidenceStatus: "well-documented",
    coordinates: [-78.951, 43.083],
    sources: [
      {
        title: "Hooker / 102nd Street Superfund Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/cursites/csitinfo.cfm?id=0201706",
      },
      {
        title: "102nd Street Long-Term Cleanup Systems",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/2fd830188d5d707c8525725800716b7d.html",
      },
    ],
  },
  {
    id: "hooker-s-area-landfill",
    name: "Hooker / S-Area Landfill",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Eight-acre former chemical-waste landfill beside the Niagara Falls drinking-water treatment plant. The remedy includes a final landfill cap, source containment, groundwater collection and treatment, and continuing monitoring.",
    evidenceStatus: "well-documented",
    coordinates: [-79.0054, 43.0757],
    sources: [
      {
        title: "Hooker S-Area Record of Decision",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100PZCV.TXT",
      },
      {
        title: "Niagara River Hazardous-Waste Site Progress Report",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1010FPR.txt",
      },
    ],
  },
  {
    id: "dupont-necco-park-landfill",
    name: "DuPont / Necco Park Landfill",
    municipality: "Niagara Falls and Town of Niagara",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former DuPont disposal area containing an estimated 93,000 tons of industrial process waste. A clay cap, groundwater and dense non-aqueous-phase-liquid recovery, treatment systems, and a large monitoring-well network manage contamination in fractured bedrock.",
    evidenceStatus: "well-documented",
    coordinates: [-78.956, 43.112],
    sources: [
      {
        title: "DuPont / Necco Park Superfund Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.Cleanup&id=0201992",
      },
      {
        title: "DuPont / Necco Park Record of Decision",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1002O4B.TXT",
      },
    ],
  },
  {
    id: "niagara-sanitation-nash-road-landfill",
    name: "Niagara Sanitation / Nash Road Landfill",
    municipality: "Wheatfield",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former landfill that accepted municipal refuse and industrial wastes, including caustic material and sludges, from regional manufacturers and the former air base. The site remains under an approved operation, maintenance, and monitoring program.",
    evidenceStatus: "well-documented",
    coordinates: [-78.856, 43.069],
    sources: [
      {
        title: "Niagara Sanitation Company Project Summary",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9",
      },
      {
        title: "Niagara Sanitation Remedial Investigation",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/nsc11.pdf",
      },
    ],
  },
  {
    id: "lancaster-sanitary-landfill",
    name: "Lancaster Sanitary Landfill",
    municipality: "Lancaster and Clarence",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former sanitary landfill that also accepted industrial waste, including sludges, waste ink, chemical drums, and PCB-containing equipment. The landfill was capped under a state-approved closure plan and remains subject to post-closure groundwater monitoring and maintenance.",
    evidenceStatus: "well-documented",
    coordinates: [-78.62055360422367, 42.95326587141351],
    sources: [
      {
        title: "Lancaster Landfill Site Classification Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915068/Report.HW.915068.1994-03-24.reclass_decision_2a_to_4.pdf",
      },
      {
        title: "Lancaster Landfill Post-Closure Monitoring and Maintenance Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915068/Work%20Plan.HW.915068.2021-08-31.Post_Closure_Monitoring_and_Maintenance_Plan.pdf",
      },
    ],
  },
  {
    id: "niagara-county-refuse",
    name: "Niagara County Refuse Site",
    municipality: "Wheatfield",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former municipal and industrial landfill that accepted solid and chemical wastes from 1969 to 1976. About 3.1 million tons of material remain contained beneath a cap with leachate collection and gas venting; cleanup construction was completed in 2000 and long-term groundwater and surface-water monitoring continues.",
    evidenceStatus: "well-documented",
    coordinates: [-78.90641356469966, 43.066200238910234],
    sources: [
      {
        title: "Niagara County Refuse Superfund Cleanup Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201266",
      },
      {
        title: "Niagara County Refuse Fourth Five-Year Review",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932026/Report.HW.932026.2019-07-18.EPA_Fourth_5%20Year_Review.pdf",
      },
    ],
  },
  {
    id: "alltift-landfill-ramco-steel",
    name: "Alltift Landfill / Ramco Steel",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former disposal and industrial property where the remedy consolidated waste and contaminated soil beneath an engineered cover. The completed cleanup is maintained through institutional controls, inspections, and long-term operation and maintenance.",
    evidenceStatus: "well-documented",
    coordinates: [-78.83915543575709, 42.84547102465679],
    sources: [
      {
        title: "Alltift Landfill Construction Completion Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915054/Report.HW.915054.2006-04-01.CCR%28FER%29%28Abridged_amended%2011-15-12%29.pdf",
      },
      {
        title: "Alltift Landfill Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915054/Report.HW.915054.2014-05-12.Periodic%20Review%20Report%202014.pdf",
      },
    ],
  },
  {
    id: "outer-harbor-greenbelt",
    name: "Outer Harbor Greenbelt",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Public waterfront land formed in part from dredged sediment, construction debris, and a former municipal dump that received ash and incinerator residue. Remediation included soil removal, a protective cover, and shoreline stabilization; New York issued a Certificate of Completion in 2012 and the property now supports recreation.",
    evidenceStatus: "well-documented",
    coordinates: [-78.869, 42.834],
    sources: [
      {
        title: "Region 9 Remediation Success Stories: Outer Harbor Greenbelt",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/der-success-stories",
      },
      {
        title: "Buffalo Outer Harbor Redevelopment Request for Proposals",
        publisher: "Empire State Development",
        url: "https://esd.ny.gov/sites/default/files/rfp/RFP%20Document_Outer%20Harbor%202020_FINAL.pdf",
      },
    ],
  },
  {
    id: "times-beach-disposal-site",
    name: "Times Beach Confined Disposal Site",
    municipality: "Buffalo",
    county: "Erie",
    category: "waterway",
    summary:
      "Former confined disposal area used from 1972 to 1976 for contaminated sediment dredged from the Buffalo River federal navigation channel. The 45-acre containment site later became a nature preserve; habitat restoration and invasive-species work continue around the contained dredged material.",
    evidenceStatus: "well-documented",
    coordinates: [-78.8818, 42.872],
    sources: [
      {
        title: "Restoring Habitat at Times Beach",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.usace.army.mil/Media/News/NewsSearch/Article/503312/restoring-quality-habitat-and-combating-invasive-plants-at-times-beach/",
      },
      {
        title: "Times Beach Disposal Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0202103",
      },
    ],
  },
  {
    id: "pettit-flume-durez-outfall",
    name: "Pettit Flume / Durez Outfall",
    municipality: "North Tonawanda",
    county: "Niagara",
    category: "waterway",
    summary:
      "Contaminants from the former Durez chemical site affected a storm-sewer route and Niagara River cove. Cleanup included plant containment and cleaning about 22,000 feet of sewers. Crews also removed roughly 25,000 cubic yards of contaminated sediment, restored wetlands, and later performed maintenance dredging.",
    evidenceStatus: "well-documented",
    coordinates: [-78.918, 43.055],
    sources: [
      {
        title: "Reduction of Toxics Loadings to the Niagara River",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1010FSX.txt",
      },
      {
        title: "Durez North Tonawanda Facility",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9",
      },
      {
        title: "Durez North Tonawanda 2023 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932018/Report.HW.932018.2024-05-20.Revised%202023%20PRR%20Durez%20NT.pdf",
      },
    ],
  },
  {
    id: "gill-creek-chemical-corridor",
    name: "Gill Creek / DuPont–Olin Chemical Corridor",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "waterway",
    summary:
      "Creek flowing past the DuPont and Olin chemical plants to the Niagara River. Historic plant-related contaminants affected creek sediment and groundwater; joint cleanup removed about 8,020 cubic yards of contaminated sediment by 1992, while groundwater collection, treatment, and monitoring continued to control migration toward the creek and river.",
    evidenceStatus: "well-documented",
    coordinates: [-78.989, 43.074],
    sources: [
      {
        title: "Olin Corporation Hazardous-Waste Cleanup",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-olin-corporation-niagara-falls-new-york",
      },
      {
        title: "Reduction of Toxics Loadings to the Niagara River",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1010FSX.txt",
      },
      {
        title: "Gill Creek Investigation and Cleanup History",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932013/Report.HW.932013.1991-03-13.GILL_CREEK_WELL_BORINGS.pdf",
      },
    ],
  },
  {
    id: "smokes-creek-bethlehem-corridor",
    name: "Smokes Creek / Bethlehem Steel Discharge Corridor",
    municipality: "Lackawanna",
    county: "Erie",
    category: "waterway",
    summary:
      "Lake Erie tributary crossing the former Bethlehem Steel property. Historical plant discharges contaminated the lower creek; approximately 40,000 cubic yards of affected sediment were removed in 2009. Current planning focuses on bank stabilization, habitat connectivity, flood resilience, and restoration from the creek corridor to its Lake Erie mouth.",
    evidenceStatus: "well-documented",
    coordinates: [-78.863012, 42.811638],
    sources: [
      {
        title: "Tecumseh Redevelopment Hazardous-Waste Cleanup",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-tecumseh-redevelopment-incorporated-lackawanna",
      },
      {
        title: "Environmental Cleanup at Former Bethlehem Steel Site",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/environmental-cleanup-at-former-bethlehem-steel-site",
      },
      {
        title: "Smokes Creek Habitat Opportunity Assessment",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/fs/programs/press/R9/12572245-Smokes%20Creek-Final%20Report_DRAFT%205-15-2024.pdf",
      },
    ],
  },
  {
    id: "southtowns-awtf-ash-landfill",
    name: "Southtowns AWTF Ash Landfill",
    municipality: "Hamburg",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former disposal area for sewage-sludge incinerator ash at the Southtowns Advanced Wastewater Treatment Facility beside Woodlawn Beach State Park. Erie County removed and tested the landfill contents, disposed of them off-site, and restored the area. The record does not identify the natural beach or dune system as a landfill.",
    evidenceStatus: "well-documented",
    coordinates: [-78.8465, 42.78875],
    sources: [
      {
        title: "Southtowns AWTF Ash Landfill Reclamation Bid Documents",
        publisher: "Erie County Division of Sewerage Management",
        url: "https://www3.erie.gov/dsm/sites/www3.erie.gov.dsm/files/2025-05/d3c82_ashland-notice.pdf",
      },
      {
        title: "Southtowns AWTF Ash Landfill Reclamation Closeout",
        publisher: "Erie County Division of Sewerage Management",
        url: "https://www3.erie.gov/dsm/sites/www3.erie.gov.dsm/files/2026-04/item5c_closeout82.pdf",
      },
      {
        title: "Southtowns Advanced Wastewater Treatment Facility Permit Review",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2025-12-17/completed-application/town-of-hamburg-southtowns-advanced-wastewater-treatment-facility",
      },
    ],
  },
  {
    id: "lasalle-reservoir-quarry-landfill",
    name: "LaSalle Reservoir / Former Quarry Landfill",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former roughly 50-acre limestone quarry later filled with municipal refuse, incinerator ash, demolition debris, appliances, vegetation, and documented Buffalo Forge waste. Portions became McCarthy Park and nearby development. The remaining quarry serves as a stormwater-retention basin, and state investigation supported removing the site from the hazardous-waste registry.",
    evidenceStatus: "well-documented",
    coordinates: [-78.82590193043687, 42.9431559910684],
    sources: [
      {
        title: "LaSalle Reservoir Phase II Investigation",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915033/Report.HW.915033.1991-04-01.Phase_II_Investigation.pdf",
      },
      {
        title: "Legacy LaSalle Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915283/Work%20Plan.BCP.C915283.2025-08-05.Revised_SMP.pdf",
      },
    ],
  },
  {
    id: "1827-fillmore-former-quarry",
    name: "1827 Fillmore Avenue Former Quarry",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former stone quarry backfilled during the 1940s and 1950s with material of unknown origin and later developed as the Kensington Heights apartment complex. Investigations found PAHs and metals in soil and fill; excavation, cover, and institutional controls supported completion of the state brownfield cleanup in 2019.",
    evidenceStatus: "well-documented",
    coordinates: [-78.83710443432456, 42.926038168218604],
    sources: [
      {
        title: "1827 Fillmore Avenue Cleanup Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/der/factsheet/c915279cubegins.pdf",
      },
      {
        title: "1827 Fillmore Avenue Cleanup Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915279/Decision%20Document.BCP.C915279.2019-03-27.signed_Decision_Document.pdf",
      },
      {
        title: "1827 Fillmore Avenue Certificate of Completion",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915279/Certificate%20of%20Completion.BCP.C915279.2019-12-23.Executed_COC.pdf",
      },
    ],
  },
  {
    id: "eighteenmile-creek-superfund",
    name: "Eighteen Mile Creek Superfund Site",
    municipality: "Lockport and Newfane",
    county: "Niagara",
    category: "waterway",
    summary:
      "Active federal Superfund site covering roughly 15 miles of Eighteen Mile Creek, from Lockport toward Lake Ontario. Historic industry contaminated soil, groundwater, and creek sediment with PCBs, lead, and other pollutants. Investigation and cleanup are proceeding in stages. Fish-consumption advisories remain in effect.",
    evidenceStatus: "well-documented",
    coordinates: [-78.691, 43.171],
    sources: [
      {
        title: "Eighteen Mile Creek Superfund Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0206456",
      },
      {
        title: "Eighteenmile Creek Area of Concern",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/nature/waterbodies/lakes-rivers/great-lakes/areas-of-concern/eighteenmile-creek-area-of-concern",
      },
    ],
  },
  {
    id: "forest-glen-mobile-home-subdivision",
    name: "Forest Glen Mobile Home Subdivision",
    municipality: "Town of Niagara",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Federal Superfund site where a residential development was built over an inadequately covered chemical-waste dump. EPA permanently relocated residents, excavated contaminated soil, and consolidated it beneath an engineered cap. Long-term controls continue. The record applies to the former subdivision and capped disposal area, not the wider neighborhood.",
    evidenceStatus: "well-documented",
    coordinates: [-78.965, 43.119],
    sources: [
      {
        title: "Forest Glen Mobile Home Subdivision Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0202361",
      },
      {
        title: "Forest Glen Cleanup and Reuse Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.redevelop&id=0202361",
      },
    ],
  },
  {
    id: "wide-beach-development",
    name: "Wide Beach Development",
    municipality: "Brant",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former federal Superfund site where PCB-contaminated waste oil was spread on dirt roads for dust control. Later road excavation moved contaminated soil into residential yards. Cleanup treated about 36,160 tons of soil and sediment and restored wetlands. EPA deleted the site from the National Priorities List in 1994.",
    evidenceStatus: "well-documented",
    coordinates: [-79.12796715865463, 42.58686971771397],
    sources: [
      {
        title: "Wide Beach Development Cleanup Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0202151",
      },
      {
        title: "Wide Beach Development Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915119/ROD.HW.915119.1985-09-01.Wide_Beach_OU1.pdf",
      },
    ],
  },
  {
    id: "fmc-middleport",
    name: "FMC Middleport Facility and Off-Site Cleanup",
    municipality: "Middleport",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Pesticide plant that began manufacturing arsenic-based and other products in the 1920s. Historic releases affected the facility and nearby properties through runoff and air deposition. State-supervised work has removed contaminated soil from residential, commercial, and Royalton-Hartland school properties. The off-site cleanup remained active in 2025.",
    evidenceStatus: "well-documented",
    coordinates: [-78.4758, 43.211],
    sources: [
      {
        title: "FMC Middleport Facility",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/waste-management/hazardous-waste/fmc-middleport-facility",
      },
      {
        title: "FMC Middleport Summer 2025 Community Update",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/der/factsheet/932014update0725.pdf",
      },
    ],
  },
  {
    id: "former-american-axle-east-delavan",
    name: "Former GM / American Axle Plant",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former automotive-parts manufacturing complex at 1001 East Delavan Avenue, operated by General Motors and later American Axle. Investigations documented petroleum impacts associated with plant operations and underground tanks, along with possible PCB releases from electrical equipment. The property is divided between state Superfund and Brownfield Cleanup Program areas, with phased investigation, oil recovery, demolition, and remediation.",
    evidenceStatus: "well-documented",
    coordinates: [-78.821, 42.9202],
    sources: [
      {
        title: "American Axle Cleanup Community Working Group",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/press-releases/2021/4/dec-commissioner-seggos-and-erie-county-legislator-baskin-announce-community-working-group-to-support-cleanup-of-former-american-axle-site",
      },
      {
        title: "1001 East Delavan Brownfield Cleanup Application",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915196B/Application.BCP.C915196B.2017-09-29.Complete%20BCP%20Application.pdf",
      },
    ],
  },
  {
    id: "cecos-international",
    name: "CECOS International Waste Facility",
    municipality: "Town of Niagara / Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Large waste-management property used for disposal since 1897 and for hazardous-waste treatment, storage, and disposal beginning in 1977. Investigations found releases to fill, soil, and groundwater from historic waste-management units. Closed units are capped and maintained, contaminated groundwater is recovered and treated, and long-term monitoring and corrective-action controls continue under state and federal hazardous-waste permits.",
    evidenceStatus: "well-documented",
    coordinates: [-78.98965269272462, 43.10158803773757],
    sources: [
      {
        title: "CECOS International Hazardous-Waste Cleanup",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-cecos-international-incorporated-niagara-falls",
      },
      {
        title: "CECOS Corrective-Action Documents",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/documents-cecos-international-incorporated-niagara-falls-new-york",
      },
    ],
  },
  {
    id: "frontier-chemical-royal-avenue",
    name: "Frontier Chemical — Royal Avenue",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former hazardous-waste treatment and storage facility at 4626 Royal Avenue, on property with earlier chlor-alkali manufacturing and sludge-disposal history. VOCs and other contaminants remain concentrated in deep soil and groundwater. Major corrective work is complete, while a pump-and-treat system, groundwater monitoring, an industrial-use restriction, and site-management controls continue.",
    evidenceStatus: "well-documented",
    coordinates: [-79.011194, 43.087472],
    sources: [
      {
        title: "Frontier Chemical Royal Avenue Hazardous-Waste Cleanup",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-frontier-chemical-waste-process-incorporated",
      },
      {
        title: "Frontier Chemical EPA Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0201541",
      },
    ],
  },
  {
    id: "jonnies-porta-signs",
    name: "Jonnie's Porta Signs / CVS Blasdell",
    municipality: "Blasdell",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former gasoline filling station at 3734 South Park Avenue. A 2005 brownfield cleanup removed underground tanks, hydraulic lifts, petroleum-affected soil, and historic fill. DEC issued a Certificate of Completion in 2008; commercial-use controls remain documented.",
    evidenceStatus: "well-documented",
    coordinates: [-78.82350365111772, 42.79674903091646],
    sources: [
      {
        title: "Certificate of Completion Fact Sheet — C915192",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915192/Fact%20Sheet.BCP.C915192.2008-09-11.COC.pdf",
      },
      {
        title: "Jonnie's Porta Signs Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915192/",
      },
    ],
  },
  {
    id: "tract-ii-highland-avenue",
    name: "Tract II Highland Avenue",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former manufacturing and waste-fill property at Highland and Beech Avenues. DEC records document lead and PAHs in soil, excavation and treatment, a site-wide cover, and continuing land-use and site-management controls. A Certificate of Completion was issued in 2018.",
    evidenceStatus: "well-documented",
    coordinates: [-79.0458346421931, 43.115498326035414],
    sources: [
      {
        title: "Record of Decision Amendment — Site 932136",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932136/ROD.HW.932136.2012-03-28.ROD_AMENDMENT.pdf",
      },
      {
        title: "Certificate of Completion — Site 932136",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932136/Certificate%20of%20Completion.HW.932136.2018-11-08.COC.pdf",
      },
    ],
  },
];

export const featuredSites: AtlasSite[] = [
  ...featuredSiteRecords,
  ...historicCleanupExpansion,
].map((site) => ({
  ...site,
  image: site.image ?? siteImages[site.id],
  story: site.story ?? siteStories[site.id],
}));
