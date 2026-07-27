import type { AtlasSite } from "@/types/site";

const decSuccessStories =
  "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/der-success-stories";
const decEasements =
  "https://dec.ny.gov/environmental-protection/site-cleanup/brownfield-and-state-superfund-programs/finalizing-remedial-projects/sites-with-environmental-easements";

export const historicCleanupExpansion: AtlasSite[] = [
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
    coordinates: [-78.4058, 42.2529],
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
    coordinates: [-79.1607, 42.0608],
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
    coordinates: [-79.3415, 42.4789],
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
    coordinates: [-79.3337, 42.0911],
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
    coordinates: [-79.2368, 42.0954],
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
    coordinates: [-78.6672, 42.2797],
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
    coordinates: [-78.8038, 42.8931],
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
    coordinates: [-79.0374, 43.0908],
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
    coordinates: [-78.8732, 43.0326],
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
    coordinates: [-78.93342, 42.97851],
    sources: [
      {
        title: "Tonawanda Plastics Site Documents",
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
