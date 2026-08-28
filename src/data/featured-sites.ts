import type { AtlasSite } from "@/types/site";
import { siteStories } from "@/data/site-stories";
import { historicCleanupExpansion } from "@/data/historic-cleanup-expansion";
import { countyExpansion2026 } from "@/data/county-expansion-2026";
import { siteImages } from "@/data/site-images";

const featuredSiteRecords: AtlasSite[] = [
  {
    id: "love-canal",
    name: "Love Canal",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary: "Full history of chemical and municipal disposal, the 21,800-ton Hooker inventory, public-health response, cleanup, and continuing site management.",
    evidenceStatus: "well-documented",
    coordinates: [-78.949, 43.08],
    newsEvents: [
      {
        date: "August 1–7, 1978",
        headline: "Love Canal becomes a national environmental emergency",
        summary: "Front-page reporting, New York's health-emergency declaration, and President Carter's approval of federal emergency aid transformed a neighborhood contamination story into a national reckoning over hazardous-waste disposal.",
        publisher: "U.S. Environmental Protection Agency historical archive",
        url: "https://www.epa.gov/archive/epa/aboutepa/love-canal-tragedy.html",
        reach: "National",
      },
      {
        date: "1978–1981",
        headline: "Resident organizing and continuing investigations keep the crisis in public view",
        summary: "Local reporting, resident protests, health debates, relocations, and federal action sustained coverage beyond the first emergency announcement and helped shape the emerging Superfund era.",
        publisher: "University at Buffalo Love Canal chronology",
        url: "https://library.buffalo.edu/archives/lovecanal/about/chronologies.html",
        reach: "National",
      },
    ],
    story: {
      lastReviewed: "August 10, 2026",
      background: [
        "In the 1890s, William T. Love began excavating a canal intended to support a hydroelectric-powered model city. The project failed, leaving a roughly 3,200-foot trench that held water and was used by nearby residents for recreation. Beginning in 1942, that excavation became a disposal site for industrial chemical waste and municipal refuse.",
        "Hooker Electrochemical Company acknowledged placing an estimated 21,800 tons of chemical wastes from its Niagara Falls plants in the canal between 1942 and 1953. NYSDEC also identifies the City of Niagara Falls as a municipal-waste disposer during that period. A later state planning record attributes additional wartime disposal to the U.S. Army, but the quantity and exact composition of that material remain unresolved in the reviewed public record.",
        "Hooker covered the canal and transferred the property to the Niagara Falls Board of Education in 1953. The 99th Street School opened on the middle portion in 1954, and residential construction accelerated around the former landfill. Complaints of odors, residues, minor explosions, and fumes appeared during the 1960s and intensified after heavy precipitation and the 1977 blizzard helped contaminated liquids reach yards, basements, sewers, and nearby creeks.",
        "Residents—most visibly through the Love Canal Homeowners Association and organizer Lois Gibbs—forced sustained public attention on conditions, health concerns, relocation, and government accountability. State and federal emergency actions in 1978 and 1980 ultimately relocated hundreds of families and helped make Love Canal a catalyst for the federal Superfund law.",
      ],
      timeline: [
        {
          period: "1890s–1930s",
          event:
            "William T. Love's power-canal project was excavated and abandoned. A 1938 aerial shows an open, water-filled trench used locally for recreation.",
        },
        {
          period: "1942–1953",
          event:
            "Hooker disposed of an estimated 21,800 tons of chemical wastes. New York records also document municipal-waste disposal by the City of Niagara Falls; other wartime disposal was later attributed to the Army, but its scope was not established.",
        },
        {
          period: "1953–1954",
          event:
            "Hooker installed a clay cover and transferred the property to the Board of Education. The 99th Street School was built on the middle portion of the former canal.",
        },
        {
          period: "1960s–1977",
          event:
            "Neighborhood development surrounded the landfill. Residents reported odors, residues, fumes, and minor explosions; unusually wet conditions culminated in visible migration after the 1977 blizzard.",
        },
        {
          period: "1978",
          event:
            "Investigations documented extensive contamination. New York declared a health emergency on August 7, restricted access, recommended relocation for pregnant residents and young children nearest the canal, and began containment and treatment work.",
        },
        {
          period: "1980",
          event:
            "President Carter's second federal emergency declaration expanded relocation. FEMA ultimately evacuated about 950 of more than 1,050 families in the Emergency Declaration Area. Congress enacted the federal Superfund law that December.",
        },
        {
          period: "1982–1983",
          event:
            "Contaminated homes and the 99th Street School were demolished, and Love Canal entered EPA's first National Priorities List.",
        },
        {
          period: "1985",
          event:
            "The state completed the approximately 40-acre cap and improved the collection and treatment system.",
        },
        {
          period: "1988–2000",
          event:
            "EPA and New York completed habitability decisions, sewer and creek work, the 93rd Street School cleanup, property management, and off-site treatment or disposal of excavated materials. A court held Occidental liable in 1988; later agreements made the corporate successor responsible for cleanup wastes, site management, and substantial government costs. The last waste shipment left in March 2000.",
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
        "Do not combine Hooker's 21,800-ton estimate with municipal or Army-attributed disposal; no reliable quantity for those other streams was found in the reviewed public records.",
        "Treat the historical waste inventory and the longer list of compounds later detected during environmental sampling as different records.",
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
      {
        title: "Love Canal Site History and Remediation",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/love-canal",
      },
      {
        title: "Love Canal: A Special Report to the Governor and Legislature",
        publisher: "New York State Department of Health",
        url: "https://www.health.ny.gov/environmental/investigations/love_canal/lcreport.htm",
      },
      {
        title: "Love Canal Record of Decision (1985)",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://semspub.epa.gov/work/HQ/186263.pdf",
      },
      {
        title: "Love Canal Area Master Plan — Environmental Impact Statement Appendices",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932020/Report.HW.932020.1990-05-30.EIS%20Love%20Canal%20Master%20Plan%20Append.%20B-Z.pdf",
      },
      {
        title: "Occidental to Pay $129 Million in Love Canal Settlement",
        publisher: "U.S. Department of Justice",
        url: "https://www.justice.gov/archive/opa/pr/Pre_96/December95/638.txt.html",
      },
      {
        title: "Occidental Chemical Consent Order for Love Canal Wastes",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/archive/epa/aboutepa/occidental-chemical-signs-consent-order-storage-and-destruction-love-canal-wastes.html",
      },
      {
        title: "New York State Aerial Photographs",
        publisher: "Cornell University Library",
        url: "https://digital.library.cornell.edu/collections/aerialny",
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
    newsEvents: [
      {
        date: "1879-2003",
        headline: "More than a century of dye and organic-chemical production ends on the Buffalo River",
        summary: "The plant's closure left separate cleanup areas, contaminated sewers, groundwater, and a workforce history that cannot be reduced to the later redevelopment parcels.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-buffalo-color-corporation-buffalo-new-york",
        reach: "Regional",
      },
      {
        date: "2018-2026",
        headline: "Athletic reuse exposes the practical importance of neighboring air emissions",
        summary: "Fields on remediated Area E depended on engineered soil controls, while complaints and regulatory action involving nearby PVS emissions raised a separate air-pathway question for athletes and spectators.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/press-releases/2021/5/dec-directs-pvs-chemical-solutions-inc-to-temporarily-cease-operations",
        reach: "Local",
      },
    ],
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
      {
        title: "Looking Out at South Buffalo's National Aniline, 1946 — historical article and photograph (view at source)",
        publisher: "Buffalo Stories Archives & Blog",
        url: "https://blog.buffalostories.com/looking-out-at-south-buffalos-national-aniline-1946/",
      },
      {
        title: "Buffalo Color Corporation Historical Photographs — copyrighted gallery (view at source)",
        publisher: "Abandoned America / Matthew Christopher Photography",
        url: "https://www.abandonedamerica.us/buffalo-color-corp-historical-photos",
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
      "Industrial corridor where an oil-fed 1968 river fire became a stark symbol of severe pollution, followed decades later by contaminated-sediment cleanup, habitat restoration, and long-term recovery work.",
    evidenceStatus: "well-documented",
    coordinates: [-78.873, 42.864],
    newsEvents: [
      {
        date: "January 24, 1968",
        headline: "The Buffalo River burns for nearly three days",
        summary: "Oil and combustible pollution ignited on a river already severely damaged by industrial and municipal waste. The fire became the enduring public image of the river's environmental crisis.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/great-lakes-aocs/buffalo-river-aoc",
        reach: "Regional",
      },
      {
        date: "2013–2015",
        headline: "Large-scale contaminated-sediment cleanup changes the river's trajectory",
        summary: "Federal, state, industrial, and community partners completed major dredging, capping, and habitat work, reframing coverage from industrial decline toward environmental recovery.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/great-lakes-aocs/remediation-and-restoration-projects-buffalo-river-aoc",
        reach: "Regional",
      },
    ],
    story: {
      lastReviewed: "August 12, 2026",
      background: [
        "The Buffalo River became the western terminus of the Erie Canal in 1825. Grain elevators, steel mills, meatpacking, chemical works, petroleum facilities, municipal systems, and other industries concentrated along its banks, using the river as transportation infrastructure and, historically, as a receiving water.",
        "On January 24, 1968, oil and other combustible pollution on the river ignited. EPA records say the fire continued for nearly three days. The event did not create the river's pollution crisis; it made an already severe industrial and municipal waste problem dramatically visible.",
        "By 1987, the United States and Canada had designated the Buffalo River as a Great Lakes Area of Concern because contamination and habitat loss impaired environmental and recreational uses. Its modern story is one of sediment remediation, navigation dredging, shoreline restoration, monitoring, and the gradual removal of formally identified beneficial-use impairments.",
      ],
      timeline: [
        {
          period: "1825",
          event:
            "The opening of the Erie Canal helped establish the Buffalo River as a major industrial and transportation corridor.",
        },
        {
          period: "January 24, 1968",
          event:
            "Oil and combustible pollution on the Buffalo River caught fire. EPA's later recovery record says the fire burned for nearly three days.",
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
        "By the 1950s and 1960s, federal accounts described an oxygen-depleted, nearly sterile river receiving oil, phenols, and other wastes; combustible surface pollution fed the documented 1968 fire.",
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
      {
        title: "Great Lakes Revival: Buffalo River",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/sites/production/files/2019-12/documents/how_restoring_polluted_waters_leads_to_rebirth_of_great_lakes_communities.pdf",
      },
      {
        title: "Buffalo River Degradation of Aesthetics BUI Removal Package",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://19january2021snapshot.epa.gov/sites/static/files/2020-07/documents/aesthetics_bui_removal_package_buffalo.pdf",
      },
      {
        title: "A Retrospective on Stanley Spisiak: A Man with a Mission",
        publisher: "United States Army",
        url: "https://www.army.mil/article/89945/a_retrospective_on_stanley_spisiak_a_man_with_a_mission",
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
      {
        title: "FUSRAP Cleanup Progress — Linde site photographs and diagrams",
        publisher: "Waste Management Symposia proceedings archive",
        url: "https://archivedproceedings.econference.io/wmsym/1998/html/sess28/28-05/28-05.htm",
      },
      {
        title: "Community Relations Plan for the Tonawanda Sites — historical site record",
        publisher: "U.S. Department of Energy Legacy Management",
        url: "https://lmpublicsearch.lm.doe.gov/SiteDocs/Linde_08.06_0001_a.pdf",
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
      "Former integrated steel complex where Seneca Steel began production in 1902 and Bethlehem Steel operated from 1922. About 440 acres of the present property are manmade land built with slag and manufacturing waste. Cleanup, monitoring, groundwater treatment, habitat work, and land-use controls continue across separately managed portions of the site.",
    evidenceStatus: "well-documented",
    coordinates: [-78.85913, 42.82158],
    newsEvents: [
      {
        date: "June 25, 1982",
        headline: "Bethlehem announces a major Lackawanna shutdown",
        summary: "The six-week shutdown affected 1,650 workers while thousands more were already laid off, signaling that the plant's long contraction was entering its decisive final stage.",
        publisher: "United Press International archive",
        url: "https://www.upi.com/Archives/1982/06/25/Bethlehem-Steel-Corp-Friday-said-it-would-shut-down/7289393825600/",
        reach: "National",
      },
      {
        date: "October 1983",
        headline: "Primary steelmaking ends after 83 years",
        summary: "Contemporary coverage described the furnaces going cold and approximately 7,300 jobs disappearing, an economic and cultural turning point for Lackawanna and the Buffalo region.",
        publisher: "United Press International archive",
        url: "https://www.upi.com/Archives/1983/10/15/Steel-mill-closes-after-83-years/6801435038400/",
        reach: "National",
      },
    ],
    story: {
      lastReviewed: "August 12, 2026",
      background: [
        "Seneca Steel began producing iron and steel on the Lackawanna waterfront in 1902. Bethlehem Steel purchased the works in 1922 and developed one of Western New York's defining industrial landscapes: an integrated complex of blast furnaces, steelmaking furnaces, coke ovens and by-product operations, rolling and finishing mills, rail systems, water infrastructure, and waste-management areas.",
        "That scale carried a human cost. A Bethlehem Steel accident tally preserved by the Steel Plant Museum of Western New York records 171 worker deaths from 1924 through 1956 alone. The figure covers fatal accidents of many kinds—not explosions alone—and does not represent the plant's complete operating history.",
        "The plant also changed the shoreline itself. DEC and EPA records describe roughly 440 acres of manmade land created with iron- and steelmaking slag and other manufacturing waste; a DEC community plan says the fill extended the shoreline as much as one-half mile and exceeded 90 feet in thickness in some places.",
        "Today the former works is not one cleanup parcel. State hazardous-waste Site 915009, federal RCRA corrective-action areas, Brownfield Cleanup Program parcels, renewable-energy and industrial redevelopment areas, and shoreline habitat projects overlap the larger industrial footprint but carry different boundaries and obligations.",
      ],
      timeline: [
        {
          period: "February 1904",
          event:
            "At the predecessor Lackawanna Steel works, blast-furnace gas ignited near a reservoir, killing George Reynolds, Michael Smith, and Frank Prenatt and injuring several other workers. Bethlehem did not acquire the plant until 1922.",
        },
        {
          period: "1902–1922",
          event:
            "Seneca Steel began iron and steel production in 1902; Bethlehem Steel purchased the Lackawanna works in 1922.",
        },
        {
          period: "1922–1983",
          event:
            "Bethlehem expanded and operated the integrated works. Ironmaking and steelmaking ended by the close of 1983, although other operations continued.",
        },
        {
          period: "1924–1956",
          event:
            "A preserved Bethlehem Steel accident tally records 171 worker deaths at the Lackawanna plant during these 32 years. The total includes multiple kinds of fatal workplace accidents, not only explosions.",
        },
        {
          period: "September 20, 1984",
          event:
            "OSHA recorded a fatal coke-oven accident in which a worker was crushed between a coke-oven door and its door machine while a malfunction was being investigated.",
        },
        {
          period: "1990–2005",
          event:
            "An EPA corrective-action order began the facility-wide investigation in 1990. The final investigation report was submitted in January 2005 after work on more than 100 solid-waste management units and other areas of concern.",
        },
        {
          period: "1990s–2009",
          event:
            "Most steelmaking structures west of Route 5 were demolished in the mid-1990s. Coke production ended in September 2001, Bethlehem entered bankruptcy that year, and rolling and galvanizing operations elsewhere on the property continued until 2009.",
        },
        {
          period: "2009",
          event:
            "Approximately 40,000 cubic yards of affected sediment were removed from lower Smokes Creek.",
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
        "DEC describes roughly 40 contaminated areas identified in soil, industrial fill, groundwater, sediment, and surface water. Principal cleanup contaminants include arsenic, cadmium, mercury, lead, and semi-volatile organic compounds.",
        "The former Benzol Yard created a groundwater plume containing benzene and related compounds; coke-oven and acid-tar areas required separate source-control and groundwater remedies.",
      ],
      cleanupAndControls: [
        "Corrective-action work is divided into units and phases because of the site's size, operating history, and varied conditions.",
        "At the former Benzol Yard, a groundwater extraction and treatment system has operated since 2005 to control a plume containing benzene and related compounds.",
        "At the Acid Tar Pits and Coke Oven Area, current work includes containment, extraction and treatment, cap construction or improvement, and an expanded groundwater monitoring and treatment network.",
        "Other remedies include excavation, consolidation or containment, covers, monitoring, land-use restrictions, and habitat work. In 2009, approximately 40,000 cubic yards of affected sediment were removed from lower Smokes Creek.",
        "Redevelopment decisions must remain compatible with environmental easements, engineering controls, and site-management requirements.",
      ],
      presentDay: [
        "The former complex is not one uniform brownfield. Some areas support industrial, renewable-energy, trail, or habitat uses; others remain under active cleanup, demolition, monitoring, or site management.",
        "DEC reports that public drinking water is not affected because the surrounding area uses a public supply. Its current exposure summary also says soil vapor is not an issue while the western property remains undeveloped or in outdoor industrial use; future enclosed development requires parcel-specific review.",
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
      {
        title: "Bethlehem Steel Community Liaison Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915009/Work%20Plan.HW.915009.2021-05-05.NYSDEC%20Bethlehem%20Steel%20Community%20Liaison%20Plan.pdf",
      },
      {
        title: "The Immense Constructions of the 20th Century, and the Workers Who Toiled Within",
        publisher: "Buffalo Toronto Public Media / Niagara Frontier Heritage Project",
        url: "https://www.btpm.org/heritage-moments/2018-05-07/heritage-moments-the-immense-constructions-of-the-20th-century-and-the-workers-who-toiled-within",
      },
      {
        title: "Explosion in Steel Plant — Three Men Killed and Several Others Injured",
        publisher: "The Bemidji Daily Pioneer / Library of Congress",
        url: "https://tile.loc.gov/storage-services/service/ndnp/mnhi/batch_mnhi_jevne_ver02/data/sn86063381/00206538491/1904022401/0078.pdf",
      },
      {
        title: "Accident Report 14485734 — Coke Oven Door Machine Fatality",
        publisher: "U.S. Occupational Safety and Health Administration",
        url: "https://www.osha.gov/ords/imis/accidentsearch.accident_detail?id=14485734",
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
    newsEvents: [
      {
        date: "1960s–1980s",
        headline: "Television reporting follows reprocessing, waste, protest, and cleanup debate",
        summary: "Archived WNED and WIVB reports preserve how West Valley was presented during its operating aftermath and the long public argument over radioactive waste and cleanup responsibility.",
        publisher: "NIRS index to WNED and WIVB historical footage",
        url: "https://www.nirs.org/campaigns/west-valley/west-valley-background-and-historical-footage/",
        reach: "Regional",
      },
    ],
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
      {
        title: "West Valley Background and Historical Footage — WNED and WIVB archive links",
        publisher: "Nuclear Information and Resource Service",
        url: "https://www.nirs.org/campaigns/west-valley/west-valley-background-and-historical-footage/",
      },
      {
        title: "Coalition on West Valley Nuclear Wastes archival collection",
        publisher: "SUNY Fredonia Archives and Special Collections",
        url: "https://www.fredonia.edu/news/coalition-west-valley-nuclear-wastes-donates-papers-library",
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
      "Former South Buffalo iron- and steelmaking property within the four-area Steelfields complex. Republic Steel's plant operated from 1906 into the 1980s; later remedies removed contaminated soil and managed petroleum, groundwater, metals, PAHs, and other industrial residues under parcel-specific controls.",
    evidenceStatus: "well-documented",
    coordinates: [-78.83, 42.85],
    newsEvents: [
      {
        date: "January 17, 1984",
        headline: "Republic Steel says its Buffalo plant will never reopen",
        summary: "The company made permanent the shutdown of a plant that once employed about 2,500 people, compounding Western New York's early-1980s steel-industry losses.",
        publisher: "United Press International archive",
        url: "https://www.upi.com/Archives/1984/01/17/The-Republic-Steel-Corp-which-mothballed-steel-making-operations-at/2655443163600/",
        reach: "National",
      },
    ],
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
      {
        title: "Buffalo River Groundwater Injury Determination Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/brr1.pdf",
      },
      {
        title: "RiverBend Area I TENORM Reuse Work Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/V00619/Report.VCP.V00619.2016-05-02.Final%20RiverBend%20TENORM%20Reuse%20Work%20Plan%20.pdf",
      },
      {
        title: "LTV Steel (Former Republic Steel), 8-inch Bar Mill — 1986 photograph",
        publisher: "Historic American Engineering Record / Library of Congress",
        url: "https://www.loc.gov/pictures/item/ny1813.photos.351483p/",
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
    newsEvents: [
      {
        date: "March 28, 2013",
        headline: "Federal jury convicts Tonawanda Coke and its environmental manager",
        summary: "The verdict followed a month-long trial centered on air-pollution violations, hazardous-waste handling, and obstruction, making the case a defining regional environmental-enforcement story.",
        publisher: "Buffalo Toronto Public Media",
        url: "https://www.btpm.org/environment/2013-03-28/federal-jury-convicts-tonawanda-coke-and-top-official-of-polluting-air",
        reach: "Regional",
      },
      {
        date: "October 2018",
        headline: "Coke production ends and emergency site work begins",
        summary: "The plant's closure shifted the story from emissions and prosecution to stabilization, hazardous-material removal, bankruptcy, cleanup, and redevelopment.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/newsreleases/epa-successfully-wraps-activities-tonawanda-coke-facility",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Tonawanda Coke Corporation Site",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/tonawanda-coke-corporation-tcc-site",
      },
      {
        title: "Tonawanda Coke Cleanup and Regional Project History",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9",
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
    newsEvents: [
      {
        date: "1974",
        headline: "Ashland excavation moves uranium-processing residues into the Seaway landfill",
        summary: "Material originating with Linde's wartime uranium work was mixed with soil at Ashland 1 and transported to Seaway, giving an ordinary mixed-waste landfill a second federal radiological history.",
        publisher: "U.S. Army Corps of Engineers project record",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612995/seaway-site/",
        reach: "Regional",
      },
      {
        date: "2009–present",
        headline: "Federal remedy contains the radiological material beneath an engineered cap",
        summary: "The selected remedy consolidated and covered the defined FUSRAP material while preserving inspection, monitoring, and five-year review obligations.",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/News/News-Releases/Display/Article/4396884/fusrap-seaway-site-five-year-review-of-selected-remedy/",
        reach: "Regional",
      },
    ],
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
    newsEvents: [
      {
        date: "1968–1969",
        headline: "A closed Niagara River landfill reopens as a public park",
        summary: "The city covered and seeded the former municipal and industrial disposal area, then opened it for recreation the following year—well before later groundwater and shoreline investigations defined the remedy.",
        publisher: "NYSDEC Gratwick Riverside Park decision archive",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932060/ROD.HW.932060.1991-02-01.gratwick_riverside.pdf",
        reach: "Local",
      },
      {
        date: "1982",
        headline: "Shoreline erosion exposes drums along the public park",
        summary: "Investigators documented and removed 33 drums containing cured phenolic resin after erosion revealed them at the Niagara River edge.",
        publisher: "NYSDEC Gratwick Riverside Park decision archive",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932060/ROD.HW.932060.1991-02-01.gratwick_riverside.pdf",
        reach: "Regional",
      },
    ],
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
      "Ongoing three-phase regional assessment using aerial, roadway, and property-level surveys. Agencies are screening hundreds of locations, conducting soil and laboratory follow-up where warranted, and offering temporary relocation to some households. Contact or screening does not mean a property is confirmed contaminated.",
    evidenceStatus: "research-in-progress",
    coordinates: [-79.035, 43.125],
    newsEvents: [
      {
        date: "July 2026",
        headline: "Property screening expands and several families receive temporary-relocation support",
        summary: "Regional coverage brought the assessment into broad public view as agencies sought hundreds of access agreements, conducted property screening, and offered voluntary temporary relocation while detailed investigation continued.",
        publisher: "Spectrum News 1",
        url: "https://spectrumlocalnews.com/nys/buffalo/news/2026/07/19/community-meeting-set-for-monday-for-radiological-assessment-in-erie--niagara-counties",
        reach: "Regional",
      },
      {
        date: "July 2026",
        headline: "Residents demand clearer answers as property-level surveys begin",
        summary: "Public meetings documented fear, frustration, and requests for relocation and faster testing. Those accounts describe the human burden of uncertainty; confirmation still depends on property access, instrument surveys, soil sampling, and laboratory analysis.",
        publisher: "Niagara Gazette / Niagara Frontier Publications",
        url: "https://www.wnypapers.com/news/article/featured/2026/07/24/166614/epa-state-dec-officials-meet-with-town-of-niagara-residents-to-address-radioactivity",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Niagara and Erie County Radiological Assessment",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/facilities-in-your-neighborhood/niagara-and-erie-county-radiological-assessment",
      },
      {
        title: "ASPECT Radiological Assessment Deployment",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/emergency-response/aspect-program-history",
      },
      {
        title: "July 20, 2026 NECRA Community Meeting Presentation",
        publisher: "NYSDEC, NYSDOH, and U.S. EPA",
        url: "https://dec.ny.gov/sites/default/files/2026-07/FINAL%20Monday%20July%2020%20NECRA%20Community%20Meeting%20Presentation.pdf",
      },
      {
        title: "Toxicological Profile for Thorium — Environmental Fate and Transport",
        publisher: "Agency for Toxic Substances and Disease Registry",
        url: "https://www.atsdr.cdc.gov/toxprofiles/tp147-c5.pdf",
      },
      {
        title: "Environmental Agencies Address Niagara Residents' Concerns",
        publisher: "Buffalo Toronto Public Media",
        url: "https://www.btpm.org/local/2026-07-21/environmental-agencies-address-niagara-residents-concerns-amid-contentious-public-event",
      },
      {
        title: "120 Homes, 40 Years, One Radioactive Story: Niagara County",
        publisher: "AquaDiary Podcast — secondary analysis",
        url: "https://www.youtube.com/watch?v=kESis8bbYn8",
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
      {
        title: "Niagara Falls Boulevard Cleanup Completion Fact Sheet",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/sites/default/files/2020-07/documents/niagara_falls_blvd_rad_fact_sheet_july_2020_final.pdf",
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
    newsEvents: [
      {
        date: "September–December 2021",
        headline: "Playground construction reveals buried radioactive industrial slag",
        summary: "Material encountered during improvements led to a federal survey that identified uranium-bearing slag beneath portions of the outdoor playground and parking area—not inside the Head Start building.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/donovan-head-start-removal-site",
        reach: "Regional",
      },
      {
        date: "2023",
        headline: "Outdoor slag removal is completed under EPA oversight",
        summary: "Children and staff had been moved during the response; excavation, verification, clean backfill, and restoration completed the property-specific removal.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/niagara-county-radiation-removal-sites",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Niagara County Radiation Removal Sites",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/niagara-county-radiation-removal-sites",
      },
      {
        title: "Donovan Head Start Removal Site",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/donovan-head-start-removal-site",
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
    newsEvents: [
      {
        date: "July 2016",
        headline: "A homeowner watches investigators map radioactive hotspots in a driveway",
        summary: "Investigative reporting made the property-level consequence visible years before removal: a residential access road and adjoining yards required federal assessment, while the source and extent still had to be established by sampling.",
        publisher: "Investigative Post / Buffalo Toronto Public Media",
        url: "https://www.btpm.org/investigative-post/2016-07-06/investigative-post-radioactive-hotspots-dot-niagara-county",
        reach: "Local",
      },
      {
        date: "2020-2023",
        headline: "EPA removes radioactive fill from an access road and two residential properties",
        summary: "Excavation, verification sampling, clean replacement material, and restoration addressed the defined removal areas without labeling every neighboring property contaminated.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/niagara-county-radiation-removal-sites",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Niagara County Radiation Removal Sites",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/ny/niagara-county-radiation-removal-sites",
      },
      {
        title: "Upper Mountain Road Residential Removal Community Update",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/system/files/documents/2021-09/upper-mountain-road-community-update-sept-2021-final.pdf",
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
      {
        title: "Holy Trinity Cemetery Radiological Assessment Community Update",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100VY74.txt",
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
    newsEvents: [
      {
        date: "2010–2011",
        headline: "Area E is remediated for controlled reuse rather than unrestricted ground",
        summary: "Engineered soil and pavement covers, sewer work, groundwater monitoring, and institutional controls prepared one portion of the former chemical complex for compatible redevelopment.",
        publisher: "New York State Department of Environmental Conservation site record",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915232/Report.BCP.C915232.2024-03-21.PRR_and_IC-EC_Certification.pdf",
        reach: "Local",
      },
      {
        date: "2019",
        headline: "Athletic fields open on the managed former industrial parcel",
        summary: "The reuse placed fields, a fieldhouse, walks, bleachers, and parking above a remedy that still depends on intact covers, monitoring, and limits on subsurface disturbance.",
        publisher: "New York State Department of Environmental Conservation site-management record",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915232/Report.BCP.C915232.2024-03-21.PRR_and_IC-EC_Certification.pdf",
        reach: "Local",
      },
    ],
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
    newsEvents: [
      {
        date: "1940s-1982",
        headline: "Wartime residues are stored, then moved among Tonawanda industrial properties",
        summary: "Material originating with Linde uranium processing remained at Ashland 1 before later transfers spread part of the cleanup responsibility to Ashland 2 and Seaway Area D.",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612233/ashland-1-site/",
        reach: "Regional",
      },
      {
        date: "1998-2008",
        headline: "Public information sessions accompany removal and federal closeout",
        summary: "The federal community-relations record documents information repositories, comment opportunities, and repeated briefings while contaminated material was excavated and shipped away.",
        publisher: "U.S. Department of Energy / U.S. Army Corps of Engineers",
        url: "https://lmpublicsearch.lm.doe.gov/SiteDocs/T-555.pdf",
        reach: "Local",
      },
    ],
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
    newsEvents: [
      {
        date: "Historic disposal and remedy era",
        headline: "Three disposal areas become one long-term tire-plant stewardship story",
        summary: "EPA and DEC records distinguish three waste areas at the River Road complex. Investigation, capping and groundwater monitoring addressed the disposal history without treating the entire manufacturing property as one uniform waste cell.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0201676",
        reach: "Regional",
      },
    ],
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
      {
        title: "Dunlop Tire and Rubber 2023 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915018/Report.HW.915018.2023-07-24.2023_Periodic_Review_Report.pdf",
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
    newsEvents: [
      {
        date: "October 2023",
        headline: "Army Corps inspection focuses on wave damage and dike repairs",
        summary: "The operating disposal facility is exposed to deep-water wave action, making structural inspection and repair part of the containment story as well as the navigation program.",
        publisher: "U.S. Army Corps of Engineers, Buffalo District",
        url: "https://www.dvidshub.net/image/8095343/buffalo-district-commander-visits-cdf-4",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Buffalo Harbor Confined Disposal Facility No. 4",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://lre-ops.usace.army.mil/OandM/GLNAV/DMMandCDFFS/BuffaloCDFFactSheet.pdf",
      },
      {
        title: "Buffalo Harbor Dredging and CDF Placement",
        publisher: "U.S. Army Corps of Engineers Buffalo District",
        url: "https://www.lrd.usace.army.mil/News/News-Releases/Display/Article/4548641/buffalo-harbor-dredging-starting-supports-safe-navigation-the-economy-and-futur/",
      },
    ],
  },
  {
    id: "pfohl-brothers-landfill",
    name: "Pfohl Brothers Landfill",
    municipality: "Cheektowaga",
    county: "Erie",
    category: "cleanup",
    pfasStatus: "under-review",
    pfasEvidence: ["investigation"],
    pfasCompounds: [
      {
        name: "Per- and polyfluoroalkyl substances",
        abbreviation: "PFAS panel",
        finding: "sampling-planned",
        note: "The operation-and-maintenance record requires PFAS analysis when unexpected material is encountered; it is not a reported detection.",
      },
    ],
    pfasScopeNote:
      "No individual PFAS compound or confirmed PFAS source has been established in the reviewed Pfohl Brothers record.",
    summary:
      "Former municipal and industrial landfill bordering Transit Road where drums and contaminated material were removed, wastes were consolidated beneath engineered caps, and long-term monitoring continues.",
    evidenceStatus: "well-documented",
    coordinates: [-78.70135404543488, 42.94506885094213],
    newsEvents: [
      {
        date: "November 13, 2025",
        headline: "EPA completes the landfill's fifth five-year review",
        summary: "The recurring review exists because contamination remains above levels allowing unlimited use and unrestricted exposure; it tests whether the caps, leachate systems, monitoring, and property restrictions still protect people and the environment.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.schedule&id=0201751",
        reach: "Regional",
      },
    ],
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
      {
        title: "Pfohl Brothers Landfill Cleanup Schedule and Five-Year Reviews",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.schedule&id=0201751",
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
    newsEvents: [
      {
        date: "1950s–1960s",
        headline: "Buffalo uses part of the future preserve for municipal waste",
        summary: "Dumping added another industrial layer to a landscape already transformed by railroads, docks, filling, and the loss of much of the original marsh system.",
        publisher: "City of Buffalo park-history record",
        url: "https://www.buffalony.gov/DocumentCenter/View/9917/Buffalo-Parks-Master-Plan",
        reach: "Local",
      },
      {
        date: "1970s onward",
        headline: "Citizen advocacy helps turn a capped dump landscape into an urban refuge",
        summary: "Preservation, containment, habitat management, and environmental education created the modern refuge without erasing the engineered waste areas beneath portions of it.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/things-to-do/watchable-wildlife/sites/tifft-nature-preserve",
        reach: "Regional",
      },
    ],
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
    newsEvents: [{ date: "March-April 2022", headline: "A former plating property enters public cleanup review before housing construction", summary: "DEC invited comment on the Main and Hertel remedy before the industrial property became The Rails, keeping contamination, vapor protection and controlled residential reuse within one public record.", publisher: "New York State Department of Environmental Conservation", url: "https://content.govdelivery.com/accounts/NYSDEC/bulletins/30ce4c7", reach: "Local" }, { date: "2022-2024", headline: "The remediated site becomes a 312-unit transit-oriented apartment complex", summary: "Construction reporting documented the transformation of the underused brownfield beside LaSalle Station while the brownfield remedy supplied the environmental foundation for residential and commercial use.", publisher: "WKBW", url: "https://www.wkbw.com/news/local-news/construction-begins-on-new-apartment-community-in-buffalo", reach: "Local" }],
    sources: [
      {
        title: "DEC Marks 21st Successful Year for the Brownfield Cleanup Program",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/press-releases/2025/2/dec-marks-21st-successful-year-for-new-york-states-brownfield-cleanup-program",
      },
      {
        title: "Main and Hertel Remedial Investigation and Alternatives Analysis",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/mah1.pdf",
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
      "Five-building Trico complex where windshield-wiper production from 1920 to 1990 included electroplating, smelting, die-casting, rubber extrusion, and metal fabrication. The 2.11-acre brownfield received a Certificate of Completion in 2019 and now operates under cover, vapor-mitigation, groundwater-use, land-use, and site-management controls.",
    evidenceStatus: "well-documented",
    coordinates: [-78.86966826328961, 42.895286241026554],
    sources: [
      {
        title: "Former Trico Plant Site Management Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915281/Work%20Plan.BCP.C915281.2025-03-25.Reivsed_SMP.pdf",
      },
      {
        title: "Former Trico Plant Certificate of Completion Fact Sheet",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915281/Fact%20Sheet.BCP.C915281.2020-01-15.COC%20Issued.pdf",
      },
      {
        title: "Former Trico Plant Decision Document",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915281/Decision%20Document.BCP.C915281.2017-08-03.Decision%20Document%20-%20August%203%2C%202017.pdf",
      },
    ],
  },
  {
    id: "niagara-falls-air-reserve-pfas",
    name: "Niagara Falls Air Reserve Station PFAS Investigation",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "pfas",
    pfasStatus: "documented",
    pfasEvidence: ["use", "detection", "investigation"],
    pfasCompounds: [
      {
        name: "Aqueous film-forming foam",
        abbreviation: "AFFF",
        finding: "documented-use",
        note: "Historical training, testing, emergency response, and release areas were evaluated by the Air Force.",
      },
      {
        name: "Perfluorooctanoic acid",
        abbreviation: "PFOA / C8",
        finding: "detected",
        medium: "soil and groundwater investigation",
      },
      {
        name: "Perfluorooctanesulfonic acid",
        abbreviation: "PFOS",
        finding: "detected",
        medium: "soil and groundwater investigation",
      },
    ],
    pfasScopeNote:
      "Later remedial-investigation work uses a broader PFAS analyte list. The page names only compounds supported as detections by the reviewed results; APFO use has not been established.",
    summary:
      "Federal and state investigations of PFAS associated with historical use and releases of aqueous film-forming firefighting foam at the air station.",
    evidenceStatus: "well-documented",
    coordinates: [-78.93997339520959, 43.11936785737371],
    newsEvents: [
      {
        date: "2018-2023",
        headline: "Firefighting-foam history becomes a multi-media PFAS investigation",
        summary: "Federal work moved from identifying training, testing, and response areas into remedial-investigation sampling of soil, groundwater, sediment, surface water, and migration pathways.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-914th-airlift-wing-afrc-niagara-falls-new-york",
        reach: "Regional",
      },
      {
        date: "Current investigation",
        headline: "Private wells remain a specific question, not a regional drinking-water declaration",
        summary: "The investigation identified private wells within the broader downgradient study area while noting that most surrounding residents use public water. Water conclusions must follow individual sampling and supply records.",
        publisher: "Niagara Falls Air Reserve Station remedial investigation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932106/Work%20Plan.RCRA.932106.2023-09-19.Final%20NFARS%20PFAS%20RI%20UFP-QAPP.pdf",
        reach: "Local",
      },
    ],
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
      {
        title: "Final PFAS Remedial Investigation Work Plan and Quality Assurance Project Plan",
        publisher: "U.S. Air Force / New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932106/Work%20Plan.RCRA.932106.2023-09-19.Final%20NFARS%20PFAS%20RI%20UFP-QAPP.pdf",
      },
    ],
  },
  {
    id: "cayuga-creek-niagara-county",
    name: "Cayuga Creek — Niagara County",
    municipality: "Niagara and Niagara Falls",
    county: "Niagara",
    category: "waterway",
    pfasStatus: "documented",
    pfasEvidence: ["detection", "investigation"],
    pfasCompounds: [
      {
        name: "Perfluorooctanoic acid",
        abbreviation: "PFOA / C8",
        finding: "detected",
        medium: "surface-water sampling",
      },
      {
        name: "Perfluorooctanesulfonic acid",
        abbreviation: "PFOS",
        finding: "detected",
        medium: "surface-water sampling",
      },
    ],
    pfasScopeNote:
      "Buffalo Niagara Waterkeeper's June 2022 samples documented PFAS in Cayuga Creek and higher concentrations downstream of the Niagara Falls airport than upstream. The sampling establishes occurrence and a spatial pattern, not sole-source attribution to the airport or Air Reserve Station.",
    summary:
      "Niagara River tributary that New York lists as impaired for fishing and secondary-contact recreation because of dioxin. Its modern record also includes a 2016 discharge of an estimated 500 gallons of waste oil, PFAS detected in 2022 surface-water sampling upstream and downstream of the Niagara Falls airport, and a major stream-and-floodplain restoration project.",
    evidenceStatus: "well-documented",
    coordinates: [-78.956, 43.104],
    newsEvents: [
      {
        date: "July 2016",
        headline: "An estimated 500 gallons of waste oil enters the creek through a storm pipe",
        summary: "Kayakers observed oil near Niagara Falls Boulevard and Tuscarora Road, and Buffalo Niagara Riverkeeper notified DEC. Officials investigated the source and suspected deliberate dumping; contemporary reporting did not identify a responsible party.",
        publisher: "Buffalo Toronto Public Media",
        url: "https://www.btpm.org/environment/2016-07-20/dec-investigating-oil-spill-in-cayuga-creek",
        reach: "Local",
      },
      {
        date: "June 2022",
        headline: "Waterkeeper sampling finds multiple PFAS compounds downstream of the airport",
        summary: "Paired surface-water sampling found PFAS upstream and downstream of the Niagara Falls airport, with substantially higher downstream results. The comparison flags a migration question but does not by itself assign the creek's PFAS to one facility or release area.",
        publisher: "Buffalo Niagara Waterkeeper",
        url: "https://bnwaterkeeper.org/pfas-pfoa-pfos/",
        reach: "Regional",
      },
      {
        date: "Spring 2022",
        headline: "A reconstructed channel reconnects the creek with part of its historic floodplain",
        summary: "Waterkeeper and project partners built a new channel, vernal pools, riffles, and wooded floodplain habitat on a protected Town of Niagara property to reduce flood energy and improve ecological function.",
        publisher: "Buffalo Niagara Waterkeeper",
        url: "https://bnwaterkeeper.org/cayuga-creek/",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Cayuga Creek and Minor Tributaries Waterbody Segment Assessment",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/WQP/PWL/0101-0001.html",
      },
      {
        title: "Cayuga Creek Stream and Floodplain Restoration Project",
        publisher: "Buffalo Niagara Waterkeeper",
        url: "https://bnwaterkeeper.org/cayuga-creek/",
      },
      {
        title: "PFAS Surface-Water Sampling in Western New York",
        publisher: "Buffalo Niagara Waterkeeper",
        url: "https://bnwaterkeeper.org/pfas-pfoa-pfos/",
      },
      {
        title: "DEC Investigating Oil Spill in Cayuga Creek",
        publisher: "Buffalo Toronto Public Media",
        url: "https://www.btpm.org/environment/2016-07-20/dec-investigating-oil-spill-in-cayuga-creek",
      },
    ],
  },
  {
    id: "bergholtz-creek",
    name: "Bergholtz Creek",
    municipality: "Niagara Falls and Wheatfield",
    county: "Niagara",
    category: "waterway",
    summary:
      "Niagara County tributary linking the Love Canal drainage area to Cayuga Creek. State and federal cleanup removed dioxin-contaminated creek sediment during the late 1980s, while the current state waterbody listing separately identifies fecal coliform and phosphorus impairment associated with urban runoff.",
    evidenceStatus: "well-documented",
    coordinates: [-78.955, 43.084],
    newsEvents: [
      {
        date: "1987–1990",
        headline: "Love Canal remedy removes contaminated sediment from Bergholtz and Black creeks",
        summary: "Creek work excavated approximately 14,000 cubic yards of dioxin-contaminated sediment from the two waterways, placed clean material and riprap in the beds, and restored the banks. The combined volume should not be represented as Bergholtz Creek alone.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201290",
        reach: "Regional",
      },
      {
        date: "Current assessment",
        headline: "The creek remains listed as impaired for pathogens and phosphorus",
        summary: "DEC's waterbody assessment identifies fecal coliform and phosphorus as the current confirmed causes limiting fishing and secondary-contact recreation, distinguishing present urban-runoff impairment from the historical Superfund sediment remedy.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/WQP/PWL/0101-0004.html",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Love Canal Superfund Site Profile",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201290",
      },
      {
        title: "Bergholtz Creek and Tributaries Waterbody Segment Assessment",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/WQP/PWL/0101-0004.html",
      },
      {
        title: "Love Canal Five-Year Review",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://semspub.epa.gov/work/02/139757.pdf",
      },
    ],
  },
  {
    id: "two-mile-creek-tonawanda",
    name: "Two Mile Creek — Tonawanda",
    municipality: "Tonawanda",
    county: "Erie",
    category: "waterway",
    summary:
      "Urban Niagara River tributary running through Sheridan Park. Municipal and stormwater impairments overlap with a separate industrial sediment history: PCB-affected creek sediment and bank soil associated with the former GE transformer facility were removed, while a new living-shoreline project is advancing habitat restoration.",
    evidenceStatus: "well-documented",
    coordinates: [-78.903, 42.986],
    newsEvents: [
      {
        date: "2004–2015",
        headline: "Investigation follows PCB-affected sediment from a storm sewer into Two Mile Creek",
        summary: "Sampling connected affected sediment in defined creek areas with the Oriskany Drive storm-sewer pathway from the former GE transformer facility. Removal during 2008 drainage work and a 2015 bank excavation met the state-approved cleanup objective in confirmation samples.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915244/Report.RCRA.915244.2016-06-03.CM%20Completion%20Final%20report%20text%20%26%20tables.pdf",
        reach: "Local",
      },
      {
        date: "2024–present",
        headline: "Sheridan Park living-shoreline planning connects West Pond and the creek",
        summary: "Waterkeeper secured funding and began design procurement for shoreline planting, lawn-to-meadow conversion, habitat improvements, and a connective corridor between West Pond and Two Mile Creek.",
        publisher: "Buffalo Niagara Waterkeeper",
        url: "https://bnwaterkeeper.org/sheridan-park-living-shoreline-rfp/",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "GE Tonawanda Corrective Measures Completion Final Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915244/Report.RCRA.915244.2016-06-03.CM%20Completion%20Final%20report%20text%20%26%20tables.pdf",
      },
      {
        title: "Sheridan Park Living Shoreline",
        publisher: "Buffalo Niagara Waterkeeper",
        url: "https://bnwaterkeeper.org/sheridan-park-living-shoreline-rfp/",
      },
      {
        title: "2025 Riverwatch Water Quality Report",
        publisher: "Buffalo Niagara Waterkeeper",
        url: "https://bnwaterkeeper.org/wp-content/uploads/2026/01/2025-Riverwatch-Report_FINAL-web.pdf",
      },
    ],
  },
  {
    id: "scajaquada-creek",
    name: "Scajaquada Creek",
    municipality: "Lancaster, Depew, Cheektowaga, and Buffalo",
    county: "Erie",
    category: "waterway",
    summary:
      "Highly altered urban creek crossing a 29-square-mile watershed before reaching the Black Rock Canal. Miles of the channel were buried, sewer infrastructure and runoff impair water quality, and legacy industry affected defined sediment areas. Current work combines sewer-overflow reduction, sediment investigation, community planning, and ecological restoration.",
    evidenceStatus: "well-documented",
    coordinates: [-78.868, 42.925],
    newsEvents: [
      {
        date: "1928",
        headline: "The Scajaquada Drain places miles of the creek underground",
        summary: "The drainage project buried roughly 3.5 to 3.7 miles of channel and tied the creek's hydrology to Buffalo's sewer infrastructure, fundamentally changing habitat, flow, and public access.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/sites/default/files/2024-01/bnrhabreport.pdf",
        reach: "Regional",
      },
      {
        date: "1998–1999",
        headline: "Contaminated sediment is removed near the former Iroquois Gas–Westwood site",
        summary: "A source-specific remedy excavated affected creek sediment and installed recovery systems for nonaqueous-phase liquid beneath the creek bed. It addressed a defined industrial reach, not every sediment condition across the watershed.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1012I3V.txt",
        reach: "Regional",
      },
      {
        date: "2023–2026",
        headline: "A community process develops a watershed-wide restoration plan",
        summary: "Waterkeeper, residents, agencies, and community organizations are developing a restoration and resilience framework while separate sewer, sediment, park-channel, transportation, and habitat projects advance along different reaches.",
        publisher: "Buffalo Niagara Waterkeeper",
        url: "https://bnwaterkeeper.org/scajaquada-restoration-plan/",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Community-Driven Scajaquada Restoration Planning",
        publisher: "Buffalo Niagara Waterkeeper",
        url: "https://bnwaterkeeper.org/scajaquada-restoration-plan/",
      },
      {
        title: "Upper Scajaquada Creek Waterbody Segment Assessment",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/WQP/PWL/0101-0034.html",
      },
      {
        title: "Scajaquada Creek Ecosystem-Restoration Feasibility Study",
        publisher: "Buffalo Niagara Waterkeeper and U.S. Army Corps of Engineers",
        url: "https://bnwaterkeeper.org/scajaquada-feasibility-study/",
      },
      {
        title: "Buffalo and Niagara River Habitat Inventory and Assessment",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/sites/default/files/2024-01/bnrhabreport.pdf",
      },
    ],
  },
  {
    id: "mayville-pfas-site",
    name: "Mayville PFAS Site",
    municipality: "Mayville",
    county: "Chautauqua",
    category: "pfas",
    pfasStatus: "documented",
    pfasEvidence: ["use", "detection", "investigation"],
    pfasCompounds: [
      {
        name: "Aqueous film-forming foam",
        abbreviation: "AFFF",
        finding: "documented-use",
        note: "Firefighting-foam use was reported at the former athletic or training area; DEC continues source investigation.",
      },
      {
        name: "Perfluorononanoic acid",
        abbreviation: "PFNA",
        finding: "detected",
        medium: "public-water wells and environmental media",
        note: "PFNA is the principal compound driving the Mayville investigation.",
      },
      {
        name: "Perfluorooctanoic acid",
        abbreviation: "PFOA / C8",
        finding: "detected",
        medium: "village source water",
        note: "Reported at lower concentrations than PFNA in the cited village sampling.",
      },
      {
        name: "Perfluorooctanesulfonic acid",
        abbreviation: "PFOS",
        finding: "analyzed-not-detected",
        medium: "village public-water wells",
        note: "This statement is limited to the cited village-well sampling and does not describe every environmental sample.",
      },
    ],
    pfasScopeNote:
      "Mayville samples have been analyzed for broader PFAS panels, but the investigation is principally a PFNA record. APFO has not been identified as a site-specific material.",
    summary:
      "Ongoing investigation of PFNA detected in the village water system and in environmental media near a former firefighting-training area; replacement supply and treatment measures were implemented.",
    evidenceStatus: "research-in-progress",
    coordinates: [-79.50940567712935, 42.25236457618568],
    newsEvents: [
      {
        date: "December 2020",
        headline: "Mayville issues a do-not-drink advisory after PFNA is detected",
        summary: "The drinking-water advisory prompted bottled-water distribution, investigation of the contamination source, development of a replacement supply, and carbon treatment for an existing well.",
        publisher: "WKBW 7 News",
        url: "https://www.wkbw.com/news/local-news/do-not-drink-water-advisory-issued-for-village-of-mayville-water-customers",
        reach: "Regional",
      },
      {
        date: "September 2022",
        headline: "The Village of Mayville files suit over PFAS contamination",
        summary: "The litigation moved the story from emergency water response into a dispute over responsibility and the cost of securing a safe long-term municipal supply.",
        publisher: "The Post-Journal",
        url: "https://www.post-journal.com/news/local-news/2022/09/mayville-files-suit-over-water-contamination/",
        reach: "Local",
      },
      {
        date: "2025",
        headline: "State investigation and village water-system work move forward on separate tracks",
        summary: "DEC approved a detailed environmental investigation while Mayville evaluated a replacement source or added carbon treatment for affected municipal wells—exposure control and source cleanup serving related but different purposes.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/news/environmental-notice-bulletin/2025-08-27/seqr/village-of-mayville-water-supply-improvements-project",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Investigation at the Mayville PFAS Site",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/investigation-at-the-mayville-pfas-site",
      },
      {
        title: "Mayville PFAS Investigation Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/D907050/Report.DWC.D907050.2021-03-12.InvestigationReport_Public.pdf",
      },
      {
        title: "2025 Mayville PFAS Remedial Investigation Work Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/D907050/Work%20Plan.DWC.D907050.2025-04-30.FinalRIWP.pdf",
      },
    ],
  },
  {
    id: "marine-drive-apartments-east-pfas",
    name: "Marine Drive Apartments East PFAS Investigation",
    municipality: "Buffalo",
    county: "Erie",
    category: "pfas",
    pfasStatus: "documented",
    pfasEvidence: ["detection", "investigation"],
    pfasCompounds: [
      {
        name: "Perfluorooctanoic acid",
        abbreviation: "PFOA / C8",
        finding: "detected",
        medium: "groundwater",
        note: "DEC considers the low-level groundwater finding likely attributable to an off-site source.",
      },
      {
        name: "Perfluorooctanesulfonic acid",
        abbreviation: "PFOS",
        finding: "detected",
        medium: "groundwater",
        note: "DEC considers the low-level groundwater finding likely attributable to an off-site source.",
      },
    ],
    pfasScopeNote:
      "Soil did not exceed the applicable PFAS criteria. A groundwater detection does not establish that Marine Drive was the source.",
    summary:
      "Brownfield investigation at 90 Erie Street documented PFAS impacts in groundwater alongside contaminants associated with historic fill; remediation planning remains part of the site record.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.87939879828025, 42.87868563473828],
    newsEvents: [
      {
        date: "June 2025",
        headline: "DEC selects a 37,000-cubic-yard excavation beside occupied apartments",
        summary: "The approved remedy targets historic fill for unrestricted-use cleanup while treating low-level groundwater PFAS as a likely off-site condition rather than assigning it to the parking-lot property.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915398/Decision%20Document.BCP.C915398.2025-06-06.Final_Decision_Document.pdf",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Marine Drive Apartments East Remedial Investigation",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915398/Report.BCP.C915398.2024-12-09.Final%20Remedial%20Investigation_Alt.%20Analysis%20.pdf",
      },
      {
        title: "Marine Drive Apartments East Decision Document",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915398/Decision%20Document.BCP.C915398.2025-06-06.Final_Decision_Document.pdf",
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
    newsEvents: [
      {
        date: "2004–present",
        headline: "Groundwater control becomes a decades-long operating system",
        summary: "The remedy moved from construction to operation in July 2004. Collection, pretreatment, NAPL checks and monitoring continue because chlorinated benzenes occupy more than one groundwater zone.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932096/Report.HW.932096.2025-05-12.2025_PRR.pdf",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Solvent Chemical Site Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932096/ROD.HW.932096.1996-12-01.solvent_chem.pdf",
      },
      {
        title: "Solvent Chemical 2024–2025 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932096/Report.HW.932096.2025-05-12.2025_PRR.pdf",
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
    newsEvents: [
      {
        date: "1974-1982",
        headline: "A cleanup attempt at Ashland 1 creates a second radioactive-waste site",
        summary: "Contaminated soil was moved to Ashland 2 over several years, demonstrating how poorly controlled material transfer expanded the geographic legacy rather than ending it.",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612311/ashland-2-site/",
        reach: "Regional",
      },
      {
        date: "2008-present",
        headline: "Federal closeout shifts the sites to records stewardship",
        summary: "DOE reports the Ashland units meet the selected cleanup standard and require no routine monitoring or maintenance; continued records access and stakeholder response remain the present federal role.",
        publisher: "U.S. Department of Energy Office of Legacy Management",
        url: "https://www.energy.gov/lm/articles/tonawanda-north-new-york-sites-units-1-and-2-fact-sheet",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Ashland 2 Site",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612311/ashland-2-site/",
      },
      {
        title: "FUSRAP Stakeholder Report — Tonawanda Sites",
        publisher: "U.S. Department of Energy Office of Legacy Management",
        url: "https://www.energy.gov/sites/default/files/2022-06/_2022FUSRAPStakeholderReportWeb.pdf",
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
    newsEvents: [
      {
        date: "2019-2022",
        headline: "Targeted removal closes the shallow-cleanup phase",
        summary: "Federal crews excavated radiologically contaminated soil to five feet, completed remedial action in 2020, and documented closure in 2022 while deeper material remained subject to long-term review.",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/News/News-Releases/Display/Article/3636932/tonawanda-landfill-vicinity-property-site-closeout-report-available/",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Tonawanda Landfill Vicinity Property",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3613023/tonawanda-landfill-vicinity-property/",
      },
      {
        title: "Tonawanda, New York, Landfill Site",
        publisher: "U.S. Department of Energy Office of Legacy Management",
        url: "https://www.energy.gov/lm/tonawanda-new-york-landfill-site",
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
      "Federal site within the former Lake Ontario Ordnance Works where a 10-acre engineered structure still holds radioactive residues, contaminated soil, and demolition debris. Complete removal and out-of-state disposal were selected, but removal is not complete.",
    evidenceStatus: "well-documented",
    coordinates: [-79.018, 43.228],
    atomicLegacy: {
      era: "Manhattan Project",
      role: "current interim storage of radioactive residues pending complete removal",
    },
    newsEvents: [
      {
        date: "1982-1986",
        headline: "Dispersed radioactive residues are consolidated into an interim containment structure",
        summary: "Federal work reduced scattered contamination but concentrated a long-term storage obligation inside a ten-acre engineered cell that communities continued to monitor and question.",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612360/niagara-falls-storage-site/",
        reach: "Regional",
      },
      {
        date: "2019-present",
        headline: "Complete excavation and out-of-state disposal become the selected remedy",
        summary: "Public review produced a decision to remove the containment structure rather than leave it indefinitely. Design, funding, monitoring, and preparatory work continue; the cell has not yet been fully excavated.",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612360/niagara-falls-storage-site/",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Niagara Falls Storage Site",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612360/niagara-falls-storage-site/",
      },
      {
        title: "Remedial Investigation Report, Niagara Falls Storage Site",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://usace.contentdm.oclc.org/digital/api/collection/p16021coll7/id/27301/download",
      },
      {
        title: "Lake Ontario Ordnance Works",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.lrd.usace.army.mil/Missions/Projects/Display/Article/3663181/lake-ontario-ordnance-works-loow/",
      },
      {
        title: "Niagara Falls Storage Site Vicinity Properties Fact Sheet",
        publisher: "U.S. Department of Energy",
        url: "https://www.energy.gov/sites/default/files/2023-08/NiagaraFallsVPFactSheet.pdf",
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
    evidenceStatus: "well-documented",
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
      {
        title: "Niagara Falls Storage Site Vicinity Properties",
        publisher: "U.S. Department of Energy Office of Legacy Management",
        url: "https://www.energy.gov/lm/niagara-falls-storage-site-vicinity-properties-new-york-site",
      },
      {
        title: "Vicinity Property H Prime Remedial Investigation and Proposed Plan",
        publisher: "U.S. Army Corps of Engineers Buffalo District",
        url: "https://www.lrd.usace.army.mil/News/News-Releases/Display/Article/4303579/niagara-falls-storage-site-vicinity-property-h-prime-remedial-investigation-pro/",
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
      {
        title: "Electro Metallurgical Company Work-Site and Exposure-Cohort Records",
        publisher: "National Institute for Occupational Safety and Health",
        url: "https://www.cdc.gov/niosh/ocas/electromet.html",
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
    newsEvents: [
      {
        date: "1998-1999",
        headline: "Federal crews decontaminate the former finishing area",
        summary: "USACE cleaned the limited area where uranium work occurred and final surveys supported unrestricted release, with no institutional controls or on-site monitoring required.",
        publisher: "U.S. Department of Energy Office of Legacy Management",
        url: "https://www.energy.gov/lm/articles/buffalo-new-york-site-fusrap-site-certification-summary",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Buffalo, New York, Site",
        publisher: "U.S. Department of Energy Office of Legacy Management",
        url: "https://www.energy.gov/lm/buffalo-new-york-site",
      },
      {
        title: "Buffalo FUSRAP Site Certification Summary",
        publisher: "U.S. Department of Energy Office of Legacy Management",
        url: "https://www.energy.gov/sites/default/files/2023-11/Buffalo_FUSRAP_Site_Certification_Summary.pdf",
      },
      {
        title: "Bliss & Laughlin Steel Work-Site and Exposure-Cohort Records",
        publisher: "National Institute for Occupational Safety and Health",
        url: "https://www.cdc.gov/niosh/ocas/blsteel.html",
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
    evidenceStatus: "well-documented",
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
      {
        title: "Record of Decision Published for FUSRAP Guterl Site",
        publisher: "U.S. Army Corps of Engineers Buffalo District",
        url: "https://www.lrd.usace.army.mil/News/News-Releases/Display/Article/3904071/record-of-decision-published-for-fusrap-guterl-site-in-lockport/",
      },
      {
        title: "Guterl Specialty Steel Feasibility Study and Proposed Plan",
        publisher: "U.S. Army Corps of Engineers Buffalo District",
        url: "https://www.lrd.usace.army.mil/News/News-Releases/Display/Article/3637848/usace-releases-feasibility-study-and-proposed-plan-for-former-guterl-specialty/",
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
    newsEvents: [
      {
        date: "July 3–4, 1988",
        headline: "Explosion and chemical fire force a River Road neighborhood emergency",
        summary: "Flames, repeated explosion risk, a large phenol-and-solvent release, and the evacuation of approximately 300 residents transformed an operating resin plant into a federal removal and long-term cleanup site.",
        publisher: "U.S. Environmental Protection Agency and NYSDEC cleanup record",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915044/",
        reach: "Regional",
      },
    ],
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
      {
        title: "DuPont Yerkes Air-Pollution Settlement",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/ddb046c309cbd02085257d1d00535bd5.html",
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
    newsEvents: [
      {
        date: "Regional investigation era",
        headline: "A delisted waste site remains part of Tonawanda's regulated chemical corridor",
        summary: "DEC's southwestern Tonawanda study evaluated the former FMC property alongside neighboring industrial sites. Delisting the historic waste record did not end air, wastewater, hazardous-waste or chemical-release oversight of later operations.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915337/Report.BCP.C915337.2007-04-15.Hydrogeologic_and_Geochemical_Investigation_of_Southwestern_Tonawanda.pdf",
        reach: "Regional",
      },
    ],
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
    newsEvents: [{ date: "March 1993", headline: "Coal tar entering a club's basement sumps reveals a vanished gasworks", summary: "A spill complaint at the Gastown Sportsmen's Club led investigators to coal-tar material associated with the former manufactured-gas plant and turned a buried industrial history into an off-site building concern.", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/915171/Report.HW.915171.2015-04-14.SumpDischargePipeEvaluation-Complete.pdf", reach: "Local" }, { date: "Recent remedial construction", headline: "Cleanup reaches Tonawanda Creek and the Erie Canal bikeway corridor", summary: "Construction combined upland stabilization, sediment dredging, collection trenches and shoreline restoration while maintaining access for site tenants and pedestrian traffic.", publisher: "LAND Remediation, Inc.", url: "https://land-remediation.com/gastown-former-mgp-site-tonawanda-ny/", reach: "Local" }],
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
        title: "Transit Street Former MGP Record of Decision",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932098/ROD.HW.932098.2009-03-30.Signed_with_figures.pdf",
      },
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
    newsEvents: [{ date: "1990-2002", headline: "A working utility service center undergoes phased gasworks cleanup", summary: "Investigations and removals addressed former process areas, separator pits and contaminated soil while portions of the old gas plant remained adapted to new uses; later monitoring carried groundwater, surface-water and vapor questions into site management.", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/V00195/Report.VCP.V00195.2002-06-24.Final_Engineering_Report_-Vol_I.pdf", reach: "Local" }],
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
      {
        title: "2025 Mineral Springs Road Soil Vapor Intrusion Work Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/V00195/Work%20Plan.VCP.V00195.2025-03-21.SVI_WP.pdf",
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
      {
        title: "31 Tonawanda Street Brownfield Certificate of Completion",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915299/Certificate%20of%20Completion.BCP.C915299.2020-12-22.Executed%20COC%20Package.pdf",
      },
      {
        title: "31 Tonawanda Street Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915299/Report.BCP.C915299.2022-04-27.2021_Periodic_Review_Report.pdf",
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
    newsEvents: [{ date: "2016 corridor review", headline: "Historic maps place a gasworks beneath today's tourism and bridge landscape", summary: "State-park screening identified former manufactured-gas structures and gas holders near Prospect Park and the Rainbow Bridge plaza, but the Class P designation means investigation—not a completed contamination finding or remedy—is the correct present status.", publisher: "New York State Office of Parks, Recreation and Historic Preservation", url: "https://parks.ny.gov/documents/inside-our-agency/PublicDocuments/NiagaraFallsStateParkScopingReport/MosesParkwayNorth/AppendixLHazardousWasteJuly2016.pdf", reach: "Regional" }],
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
    newsEvents: [{ date: "2009 records review", headline: "Historical research stops short of proving a manufactured-gas plant", summary: "The state records search found Salamanca Gas Company purification and natural-gas distribution activity at 38 Main Street but did not establish on-site manufactured-gas production; the Class P record therefore remains an investigation question, not a cleanup conclusion.", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/907038/Report.HW.907038.2009-09-30.Records_Search_Reports_Fredonia_Salamanca.pdf", reach: "Local" }],
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
    pfasStatus: "under-review",
    pfasEvidence: ["investigation"],
    pfasCompounds: [
      {
        name: "NYSDEC target-analyte suite",
        abbreviation: "21-compound PFAS panel",
        finding: "sampling-planned",
        medium: "groundwater",
        note: "The work plan and 2024 addendum require PFAS sampling; the plan is not a laboratory result.",
      },
    ],
    pfasScopeNote:
      "No compound-specific detection is presented until laboratory results and DEC interpretation are available. APFO and PFOA use are not inferred from the former manufacturing operations.",
    summary:
      "Former luxury-automobile manufacturing complex around Great Arrow Avenue and Elmwood Avenue. State records identify petroleum impacts, industrial fill, metals, PCBs, solvents, underground tanks, and later hazardous-material storage across separately managed brownfield parcels; investigation at 157 Great Arrow was updated to include PFAS sampling.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.874006, 42.943264],
    newsEvents: [
      {
        date: "1901-1938",
        headline: "Pierce-Arrow turns a North Buffalo complex into a nationally known automobile works",
        summary: "Foundry, machining, painting, fuel, and maintenance operations created the industrial processes that later cleanup investigations had to reconstruct across multiple parcels.",
        publisher: "New York State historic and brownfield records",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915326/",
        reach: "Regional",
      },
      {
        date: "2006-present",
        headline: "Drum removal and phased brownfield investigation follow decades of divided reuse",
        summary: "EPA removed hazardous containers at Great Arrow Plaza, while later state investigations addressed soil, groundwater, vapor, and emerging contaminants parcel by parcel rather than declaring the entire historic factory uniformly contaminated.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/f967face708ce80885257245005d9528.html",
        reach: "Local",
      },
    ],
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
      "A former Gardenville railroad-yard disposal area, remembered locally as the Losson Road tar pit. Tar-like waste and abandoned drums are now managed within a capped, slurry-walled containment cell under long-term monitoring.",
    evidenceStatus: "well-documented",
    coordinates: [-78.74165401790096, 42.87696653934266],
    newsEvents: [
      {
        date: "1982–1986",
        headline: "Investigators find a tar pit and dozens of drums beside a former railyard spur",
        summary: "The documented count changed as investigation progressed—from 56 abandoned drums to 81—while the larger remedy focused on stabilizing and containing waste in a wetland depression.",
        publisher: "New York State Department of Environmental Conservation record",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915128/",
        reach: "Local",
      },
    ],
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
    coordinates: [-79.03666, 43.13111],
    newsEvents: [
      {
        date: "January 19, 1981",
        headline: "Federal settlement makes Hooker responsible for the Hyde Park cleanup",
        summary: "The $16.5 million agreement was described at the time as an unusually comprehensive industrial cleanup settlement and an early model for resolving major toxic-waste cases.",
        publisher: "The Washington Post archive",
        url: "https://www.washingtonpost.com/archive/business/1981/01/20/dump-site-suit-settled-by-hooker/314e66ae-36b7-4513-b4a6-99f5d8b3d304/",
        reach: "National",
      },
    ],
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
    newsEvents: [
      {
        date: "August 8, 1993",
        headline: "State officials warn that 102nd Street chemicals are leaking into the Niagara River",
        summary: "The archived report records the pre-remedy river pathway while agencies and the responsible companies were still developing the containment system. It is historical evidence, not a description of post-construction conditions.",
        publisher: "The Buffalo News archive",
        url: "https://buffalonews.com/news/article_e67b298f-663e-5d9f-92d5-283ed9fac387.html",
        reach: "Regional",
      },
      {
        date: "May 28, 2026",
        headline: "EPA's sixth review finds the remedy protective while identifying monitoring watch items",
        summary: "EPA retained the conclusion that site-related contamination was not migrating toward the river, documented continuing leachate and NAPL recovery, and suggested follow-up for one hydraulic well pair and 1,4-dioxane monitoring.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://semspub.epa.gov/src/document/02/765926",
        reach: "Regional",
      },
    ],
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
      {
        title: "Sixth Five-Year Review — Hooker 102nd Street Landfill",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://semspub.epa.gov/src/document/02/765926",
      },
    ],
  },
  {
    id: "griffon-park-landfill",
    name: "Griffon Park Former Municipal Landfill",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary:
      "A city park and boat launch built over a former municipal disposal area beside the Little Niagara River and immediately west of the 102nd Street chemical landfill. DEC investigated groundwater and the recurring orange seep in 2022 and again in June 2026.",
    evidenceStatus: "well-documented",
    coordinates: [-78.951384, 43.074783],
    newsEvents: [
      {
        date: "May 2, 2024",
        headline: "Orange staining at the boat ramp renews public concern",
        summary: "WKBW documented the visible seep and DEC's conclusion that elevated iron caused the staining. The report preserves what officials said at the time; the underlying state investigation records provide the stronger technical evidence.",
        publisher: "WKBW 7 News",
        url: "https://www.wkbw.com/news/local-news/niagara-orleans/nysdec-says-no-cause-for-concern-after-orange-substance-found-at-boat-ramp-outside-love-canal-community",
        reach: "Regional",
      },
      {
        date: "June-July 2026",
        headline: "Renewed complaints prompt sampling and release of a detailed DEC memo",
        summary: "After residents again documented orange material around the launch, DEC sampled seep material and a nearby monitoring well. Its July 29 memo attributed the staining to iron-rich groundwater and bacteria while reporting the individual detections and noting that laboratory validation was not yet complete.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932081/Report.HW.932081.2026-07-29.GriffonPark_SamplingSummary_Memo.pdf",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Griffon Park Inactive Landfill Initiative Summary Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932081/Report.HW.932081.2023-03-01.ILI_Griffon%20Park%20Summary%20Report.pdf",
      },
      {
        title: "Griffon Park Boat Launch Seep Sampling Summary Memo",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932081/Report.HW.932081.2026-07-29.GriffonPark_SamplingSummary_Memo.pdf",
      },
      {
        title: "Griffon Park DEC Document Repository",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932081/",
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
    newsEvents: [
      {
        date: "September 2014",
        headline: "Plans advance to excavate a buried waste stream at Nash Road",
        summary: "Local reporting explained that material excavated near Love Canal during 1968 highway work had been identified within the Wheatfield landfill and would be isolated and removed.",
        publisher: "Niagara Frontier Publications archive",
        url: "https://www.wnypapers.com/news/article/current/2014/09/13/117571/hearing-set-on-removal-of-love-canal-waste",
        reach: "Local",
      },
      {
        date: "May 10, 2017",
        headline: "State investigators sample yards beside the former landfill",
        summary: "DEC offered surface-soil sampling to immediately adjacent Forbes Street properties after renewed community concern about conditions beyond the landfill boundary.",
        publisher: "Spectrum News archive",
        url: "https://ny1.com/nyc/queens/top-stories/2017/05/10/dec-begins-soil-testing-backyards-bordering-old-landfill-in-north-tonawanda",
        reach: "Regional",
      },
    ],
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
      {
        title: "Supplemental Phase II Investigation — Nash Road Landfill",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/nsc15.pdf",
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
        title: "Niagara County Refuse Fifth Five-Year Review",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://semspub.epa.gov/src/document/02/704689",
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
    newsEvents: [
      {
        date: "1929-1979",
        headline: "Steel pickling waste is discharged to an adjoining industrial pond",
        summary: "The combined cleanup record documents that Ramco's predecessors discharged spent sulfuric-acid pickle liquor and rinse water to a pond, while the adjoining Alltift property accumulated a separate landfill history.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915046B/Report.HW.915046B.2006-04-01.CCR%28FER%29%28Abridged_amended%2011-15-12%29.pdf",
        reach: "Regional",
      },
      {
        date: "2003–2013",
        headline: "Two distinct waste properties are consolidated beneath one managed remedy",
        summary: "Construction consolidated affected material beneath a cap on Alltift, added groundwater collection and replacement wetlands, and ultimately led DEC to classify Alltift for long-term management while delisting Ramco.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915054/Report.HW.915054.2006-04-01.CCR%28FER%29%28Abridged_amended%2011-15-12%29.pdf",
        reach: "Regional",
      },
    ],
    sources: [
      {
        title: "Alltift Landfill Construction Completion Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915054/Report.HW.915054.2006-04-01.CCR%28FER%29%28Abridged_amended%2011-15-12%29.pdf",
      },
      {
        title: "Alltift Landfill / Ramco Steel 2023–2024 Periodic Review Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915054/Report.HW.915054.2024-05-15.PRR_and_IC-EC_Certification.pdf",
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
    newsEvents: [
      {
        date: "1972–1976",
        headline: "Buffalo River dredged sediment forms a new engineered shoreline landscape",
        summary: "The confined disposal facility received navigation-channel sediment during the river's heavily industrial era, then closed when placement shifted elsewhere.",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.usace.army.mil/Media/News/NewsSearch/Article/503312/restoring-quality-habitat-and-combating-invasive-plants-at-times-beach/",
        reach: "Regional",
      },
      {
        date: "After 1976",
        headline: "Plants, birds, and public advocacy transform the closed disposal cell",
        summary: "Natural succession and later habitat work created ecological value above contained dredged material, producing a preserve whose living landscape remains inseparable from its engineered foundation.",
        publisher: "U.S. Army Corps of Engineers",
        url: "https://www.usace.army.mil/Media/News/NewsSearch/Article/503312/restoring-quality-habitat-and-combating-invasive-plants-at-times-beach/",
        reach: "Regional",
      },
      {
        date: "2020–2022",
        headline: "Inspection and repair funding expose the preserve's engineered obligation",
        summary: "Army Corps teams documented wind- and wave-damaged containment features, and federal infrastructure funding later included dike-wall repair—evidence that the nature preserve still depends on functioning disposal-site infrastructure.",
        publisher: "U.S. Army Corps of Engineers, Buffalo District",
        url: "https://www.dvidshub.net/image/6422296/times-beach-confined-disposal-facility",
        reach: "Regional",
      },
    ],
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
    newsEvents: [
      {
        date: "1949-1953",
        headline: "Basement explosions and a fish kill enter the local record along Pettit Flume",
        summary: "Preserved Tonawanda News images document what residents and responders encountered during the Durez operating era; later sampling, not the newspaper accounts alone, identifies particular contaminants and sources.",
        publisher: "North Tonawanda History / Tonawanda News archive",
        url: "https://nthistory.com/collections/show/98",
        reach: "Local",
      },
      {
        date: "1997-2006",
        headline: "Post-remedy mussel and sediment testing finds continuing dioxin availability",
        summary: "Monitoring and maintenance dredging showed why cleaning the sewer and removing cove sediment required follow-up rather than a one-time declaration of completion.",
        publisher: "Niagara River Toxics Management Plan",
        url: "https://www.epa.gov/sites/default/files/2015-11/documents/niagara-river-nrtmp-progress-report-workplan-2007-74pp.pdf",
        reach: "Regional",
      },
    ],
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
    newsEvents: [
      {
        date: "1981-1992",
        headline: "Two chemical companies remove contaminated sediment from a shared creek corridor",
        summary: "Olin and DuPont work proceeded in stages before the joint off-site remediation was completed, reflecting multiple sources and reaches rather than one uniform company plume.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/sites/default/files/2015-11/documents/niagara-river-reduction-toxics-loadings-report-200306-112pp.pdf",
        reach: "Regional",
      },
      {
        date: "Long-term phase",
        headline: "Groundwater capture becomes the continuing barrier protecting Gill Creek and the Niagara River",
        summary: "Recovery wells, treatment, and sediment monitoring remain the less-visible human and ecological protection after the major creek excavation ended.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-olin-corporation-niagara-falls-new-york",
        reach: "Regional",
      },
    ],
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
    newsEvents: [
      {
        date: "2009",
        headline: "About 40,000 cubic yards of contaminated lower-creek sediment are removed",
        summary: "Dredging addressed a major legacy discharge pathway through the former steel property, but continuing sediment, bank, groundwater, flood, and habitat work remained tied to the larger Bethlehem cleanup.",
        publisher: "Former Bethlehem Steel cleanup program",
        url: "https://bethlehemsteelcleanup.com/",
        reach: "Regional",
      },
      {
        date: "2015-present",
        headline: "Residents and local officials debate how cleanup choices shape waterfront reuse",
        summary: "Public meetings and reporting connected Smokes Creek dredging, the acid-tar area, on-site consolidation, habitat, and future waterfront access—documenting community participation without treating redevelopment preference as exposure evidence.",
        publisher: "WKBW",
        url: "https://www.wkbw.com/news/neighbors-in-lackawanna-hear-update-on-brownfield-cleanup",
        reach: "Local",
      },
    ],
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
    newsEvents: [
      {
        date: "May–June 2025",
        headline: "Erie County seeks full removal of the closed ash landfill",
        summary: "The reclamation contract called for excavating the existing ash-landfill contents, testing the material, hauling it to approved disposal, and restoring the former footprint.",
        publisher: "Erie County purchasing archive",
        url: "https://www3.erie.gov/purchasing/sites/www3.erie.gov.purchasing/files/2025-05/stawtf_ashlandfillrec-82_ad.pdf",
        reach: "Local",
      },
    ],
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
    newsEvents: [
      {
        date: "March 2012",
        headline: "Eighteen Mile Creek joins the federal Superfund list",
        summary: "The listing formally joined Lockport source properties with the downstream sediment corridor, setting up a cleanup that would proceed through multiple operable units rather than one construction project.",
        publisher: "U.S. Environmental Protection Agency cleanup record",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0206456",
        reach: "Regional",
      },
      {
        date: "July–September 2013",
        headline: "EPA proposes permanent relocation beside Eighteen Mile Creek",
        summary: "The first major cleanup decision called for purchasing contaminated Water Street properties, permanently relocating residents, demolishing homes, and removing the deteriorated Flintkote building.",
        publisher: "U.S. Environmental Protection Agency news archive",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/5b6bbcdd3847096b85257bc5006dc223.html",
        reach: "Regional",
      },
      {
        date: "2016-2018",
        headline: "Residents describe the burden of living beside excavation and contaminated floodplain soil",
        summary: "Local reporting documented families limiting children's yard use, fearing dust and truck traffic, and learning that additional residential properties required excavation and soil replacement. These are attributed resident experiences, not proof of a particular illness.",
        publisher: "Spectrum News",
        url: "https://ny1.com/nyc/queens/news/2016/09/7/18-mile-creek-cleanup-public-meeting-",
        reach: "Local",
      },
      {
        date: "March 2026",
        headline: "Federal review questions whether fish-advisory signs communicate the risk clearly enough",
        summary: "EPA oversight renewed attention to how anglers receive the creek's PCB fish-consumption advice, showing that risk communication remains part of the remedy while contaminated sediment work continues.",
        publisher: "Lockport Union-Sun & Journal",
        url: "https://www.yahoo.com/news/articles/fish-consumption-concerns-prompt-epa-035900671.html",
        reach: "Regional",
      },
    ],
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
    newsEvents: [
      {
        date: "July 26, 1989",
        headline: "Forest Glen residents are offered emergency relocation",
        summary: "Federal relocation began after chemical waste was documented beneath the subdivision. Contemporary reporting captured residents' demand for permanent—not merely temporary—removal from the site.",
        publisher: "United Press International archive",
        url: "https://www.upi.com/Archives/1989/07/26/Forest-Glen-residents-cool-to-relocation-plan/8233617428800/",
        reach: "National",
      },
      {
        date: "August 7, 1989",
        headline: "Testing finds contamination inside Forest Glen homes",
        summary: "Preliminary dust results intensified concern after the relocation began and reinforced comparisons with the unresolved human consequences of Love Canal.",
        publisher: "United Press International archive",
        url: "https://www.upi.com/amp/Archives/1989/08/07/Preliminary-results-show-toxins-inside-Forest-Glen-homes/7917618465600/",
        reach: "National",
      },
      {
        date: "April 24, 1998",
        headline: "EPA selects the physical cleanup after families have been relocated",
        summary: "The $16.5 million plan addressed contaminated soil and sediment years after the emergency began, showing how resident relocation and environmental construction followed separate timelines.",
        publisher: "U.S. Environmental Protection Agency news archive",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/068e1739e9504ba3852572660072568a.html",
        reach: "National",
      },
    ],
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
      {
        title: "Forest Glen Superfund plans, notes, and news archive finding aid",
        publisher: "Niagara Falls Public Library Local History Department",
        url: "https://nflh.libraryhost.com/repositories/2/archival_objects/12870",
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
    newsEvents: [
      {
        date: "1980–1985",
        headline: "PCB-contaminated road oil turns a lakeside community into a Superfund case",
        summary: "Investigators traced PCB contamination to waste oil applied for dust control. Sampling, temporary protections, and the federal cleanup decision made Wide Beach a prominent example of contamination created by an everyday road-maintenance practice.",
        publisher: "U.S. Environmental Protection Agency Record of Decision",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100SJF8.TXT",
        reach: "Regional",
      },
    ],
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
      {
        title: "Wide Beach PCB Treatment Case Study",
        publisher: "U.S. Federal Remediation Technologies Roundtable",
        url: "https://frtr.gov/costperformance/pdf/wide_bch.pdf",
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
    newsEvents: [
      {
        date: "2015–2020",
        headline: "Arsenic cleanup reaches Royalton-Hartland school property",
        summary: "Phased excavation and restoration addressed defined portions of the school campus, making the village cleanup part of daily life for students, families, and staff while preserving property-specific boundaries.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://dec.ny.gov/environmental-protection/waste-management/hazardous-waste/fmc-middleport-facility/news-updates",
        reach: "Regional",
      },
      {
        date: "Summer 2025",
        headline: "Off-site excavation continues property by property in Middleport",
        summary: "The state community update documented continuing construction and restoration, reinforcing that completed parcels and remaining remediation areas must be reported separately.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/der/factsheet/932014update0725.pdf",
        reach: "Local",
      },
      {
        date: "2003-2004",
        headline: "Community-requested biomonitoring examines arsenic exposure",
        summary: "A study requested through the community advisory process sampled urine and, when requested, toenails, soil, house dust, and produce. It reported no clear evidence that soil arsenic elevated participants' recent arsenic exposure, a finding that must be presented alongside—not as a substitute for—the cleanup record.",
        publisher: "Middleport Environmental Exposure Investigation",
        url: "https://fmc-middleport.com/remediation/health-studies/middleport-environmental-exposure/",
        reach: "Local",
      },
      {
        date: "May 2013",
        headline: "Residents divide over a state-ordered excavation of yards and school property",
        summary: "Contemporary reporting and the formal responsiveness record show disagreement: some residents sought removal, while others questioned the health basis, distrusted agencies, or feared the damage and disruption caused by excavating established properties.",
        publisher: "NYSDEC responsiveness record",
        url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/fmcrs.pdf",
        reach: "Local",
      },
    ],
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
      "Former General Motors automobile, axle, and drivetrain plant operated from the 1920s to 1994, followed by American Axle through 2008. The cleanup property is divided between a 32.88-acre Brownfield Cleanup Program site and an enclosed 2.65-acre state Superfund site addressing petroleum and PCB-impacted oil beneath the former plant.",
    evidenceStatus: "well-documented",
    coordinates: [-78.821, 42.9202],
    newsEvents: [
      {
        date: "2007–2008",
        headline: "American Axle closes the East Delavan plant",
        summary: "The announced shutdown affected roughly 650 hourly workers and ended more than eight decades of automotive and drivetrain manufacturing at the property.",
        publisher: "Buffalo Toronto Public Media",
        url: "https://www.btpm.org/2007-08-15/american-axle-offers-buyout-and-early-retirement-to-buffalo-employees",
        reach: "Regional",
      },
    ],
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
      {
        title: "Former GM-Saginaw Division Buffalo Plant Records Search Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915196/Report.HW.915196.2006-09-19.Records_Search_Report.pdf",
      },
      {
        title: "1001 East Delavan Pre-Design Investigation Work Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915196B/Work%20Plan.BCP.C915196B.2023-08-31.Preliminary%20Design%20Investigation%20-%20FINAL.pdf",
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
    newsEvents: [
      {
        date: "October 1984",
        headline: "Reports of leakage put the CECOS hazardous-waste facility under national scrutiny",
        summary: "Reporting on an internal EPA assessment questioned the performance of a modern lined landfill receiving Superfund waste and intensified debate over how the country should dispose of hazardous material removed from other sites.",
        publisher: "The Washington Post archive",
        url: "https://www.washingtonpost.com/archive/politics/1984/10/30/leaks-reported-in-new-toxic-landfill/9dfeea27-bb57-4716-9959-5b8c5556c063/",
        reach: "National",
      },
    ],
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
    id: "fashion-outlets-sabre-park",
    name: "Fashion Outlets / Former Sabre Park",
    municipality: "Town of Niagara",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former mobile-home community and adjoining shopping-center expansion property with several distinct cleanup chapters. Records document contaminated fill discovered in 1978, removal of about 1,200 cubic yards of mercury-contaminated fill in 1989, buried waste encountered during a 1994 mall expansion, and a separate localized radiological-slag encounter during the 2014 brownfield cleanup. The completed commercial-use remedy relies on removals, a cover system, vapor controls, an environmental easement, and site management.",
    evidenceStatus: "well-documented",
    coordinates: [-78.9817180991722, 43.0946467775443],
    newsEvents: [
      {
        date: "2012-2014",
        headline: "Mall expansion removes the former Sabre Park mobile-home community",
        summary: "The redevelopment required asbestos abatement and demolition of about 170 mobile homes before the brownfield remedy and commercial expansion could proceed, making displacement and land-use change part of the site's human history.",
        publisher: "Mark Cerrone, Inc.",
        url: "https://www.markcerrone.com/fashion-outlets-of-niagara-falls-expansion/",
        reach: "Local",
      },
      {
        date: "April 2014",
        headline: "Storm-sewer work encounters radiologically elevated slag",
        summary: "Construction stopped around a localized trench discovery while radiation-trained personnel characterized, controlled and arranged permitted disposal of the material; the record does not identify its producer or connect it to the earlier mercury episode.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C932162/",
        reach: "Local",
      },
    ],
    sources: [
      {
        title: "Sabre Park Mercury Site Inspection Follow-up",
        publisher: "U.S. Environmental Protection Agency / New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932104/Report.HW.932104.1988-09-28.DataForDelineationOfMercuryInSurfaceSoils.pdf",
      },
      {
        title: "Fashion Outlets / Sabre Park Final Engineering Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C932162/Report.BCP.C932162.2014-11-15.FinalFER-AppendicesA-F.pdf",
      },
      {
        title: "Fashion Outlets / Sabre Park Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C932162/",
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
    newsEvents: [
      {
        date: "2013–2014",
        headline: "On-site thermal treatment replaces a plan to truck VOC soil away",
        summary: "New York's amended remedy treated source soil on site, completed construction and issued a Certificate of Completion, while leachate treatment and deep-groundwater monitoring remained in the long-term plan.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-frontier-chemical-waste-process-incorporated",
        reach: "Regional",
      },
    ],
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
    newsEvents: [
      {
        date: "2005–2008",
        headline: "A former filling station is excavated before commercial redevelopment",
        summary: "Cleanup removed underground tanks, pump equipment, hydraulic lifts, petroleum-affected soil, and historic fill before New York issued a Certificate of Completion with continuing commercial-use controls.",
        publisher: "New York State Department of Environmental Conservation brownfield record",
        url: "https://extapps.dec.ny.gov/data/DecDocs/C915192/",
        reach: "Local",
      },
    ],
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
    newsEvents: [
      {
        date: "March-April 2019",
        headline: "DEC asks the public to review Tract II's completed-cleanup status",
        summary: "After excavation, treatment and cover construction, DEC opened a public-comment period on reclassifying and partially delisting the Highland and Beech Avenue property while long-term controls remained.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://content.govdelivery.com/accounts/NYSDEC/bulletins/235bf5c",
        reach: "Local",
      },
    ],
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
  {
    id: "tam-ceramics-niagara",
    name: "TAM Ceramics / Former NL Industries",
    municipality: "Town of Niagara",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Ceramic- and dielectric-powder manufacturing property at 4511 Hyde Park Boulevard. DEC records document historical on-site waste placement, including ceramic and metallic residues, and radiological investigation of portions of the property. The record also distinguishes material generated on site from organic contamination associated with the adjoining Hyde Park landfill corridor.",
    evidenceStatus: "well-documented",
    coordinates: [-79.03366667, 43.12935381],
    sources: [
      {
        title: "TAM Ceramics Site Investigation and Reclassification Record — 932028",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932028/Report.HW.932028.1995-10-03.reclass_decision_2a_to_3.pdf",
      },
      {
        title: "TAM Ceramics Undeveloped Property Investigation Work Plan",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932028/Report.HW.932028.1996-05-16.UndevelopedPropertyInvestigationWP.pdf",
      },
    ],
  },
  {
    id: "witmer-road-disposal-site",
    name: "Witmer Road Disposal Site",
    municipality: "Town of Niagara",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Historic disposal and burning area at James Avenue and Witmer Road, now associated with salvage-yard use. DEC's 2024 characterization plan describes ash and slag piles, drums, chloropicrin containers, chlorinated compounds and metals in investigated media. The site remains an active characterization record, not a completed-remedy site.",
    evidenceStatus: "research-in-progress",
    coordinates: [-79.033963326, 43.126390205],
    newsEvents: [{ date: "May 2024", headline: "DEC orders a new characterization of a historic burning and disposal area", summary: "The work plan targets ash and slag piles, drums, chloropicrin containers, chlorinated compounds and metals across the James Avenue/Witmer Road property while recognizing that characterization has not yet produced a final remedy.", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/932027/Report.HW.932027.2024-05-30.Final%20Site%20Characterization%20Work%20Plan_2024.pdf", reach: "Local" }],
    sources: [
      {
        title: "Witmer Road Final Site Characterization Work Plan — Site 932027",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932027/Report.HW.932027.2024-05-30.Final%20Site%20Characterization%20Work%20Plan_2024.pdf",
      },
      {
        title: "Witmer Road Site Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932027/",
      },
    ],
  },
  {
    id: "bell-aerospace-impoundment",
    name: "Bell Aerospace / Textron Impoundment",
    municipality: "Town of Wheatfield",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former unlined surface impoundment at the Bell Aerospace/Textron facility near Niagara Falls International Airport. Rocket-test wash water, stormwater and solvent-bearing industrial drainage contributed chlorinated-solvent groundwater contamination. The pond was closed, and groundwater extraction, monitoring and enhanced bioremediation remain part of the long-term corrective-action record.",
    evidenceStatus: "well-documented",
    coordinates: [-78.928361111, 43.102672222],
    sources: [
      {
        title: "Bell Aerospace / Textron Document Collection — Site 932052",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932052/",
      },
      {
        title: "Revised 2024 Annual Site Maintenance and Monitoring Report",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932052/Report.HW.932052.2025-11-05.REVISED_Textron_2024_Annual_Report.pdf",
      },
    ],
  },
  {
    id: "carborundum-globar-site",
    name: "Carborundum Globar Site",
    municipality: "Town of Niagara",
    county: "Niagara",
    category: "cleanup",
    summary:
      "Former silicon-carbide heating-element and electronic-component plant at Hyde Park Boulevard and Rhode Island Street. Spent chlorinated solvents affected soil and groundwater, with TCE and breakdown products central to the remedy. Source soil was removed, while residual groundwater contamination remains under monitoring and site management.",
    evidenceStatus: "well-documented",
    coordinates: [-79.03276872, 43.11925666],
    sources: [
      {
        title: "Carborundum Globar Record of Decision — Site 932036",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932036/ROD.HW.932036.2000-10-27.ROD_carborundum_globar_ous1-2.pdf",
      },
      {
        title: "Carborundum Globar Document Collection",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932036/",
      },
    ],
  },
  {
    id: "diaz-chemical-holley",
    name: "Diaz Chemical Corporation Superfund Site",
    municipality: "Holley",
    county: "Orleans",
    category: "cleanup",
    summary:
      "Former specialty-chemical plant beside a Holley neighborhood. A January 2002 reactor release affected nearby homes and displaced families; the abandoned plant, contaminated soil and groundwater, residential vapor controls, and large thermal-treatment project remain part of a long federal cleanup.",
    evidenceStatus: "well-documented",
    coordinates: [-78.02927, 43.22294],
    newsEvents: [
      {
        date: "January 14, 2002",
        headline: "Residents describe odors and uncertainty after chemicals reach the neighborhood",
        summary: "Contemporary local reporting documented house washing, a crowded village meeting, resident concerns, and the limited toxicological information then available for 2-chloro-6-fluorophenol.",
        publisher: "Westside News archive",
        url: "https://westsidenewsny.com/pastarchives/OldSite/westside/news/2002/0114/features/diazholley.html",
        reach: "Local",
      },
      {
        date: "March 30, 2005",
        headline: "EPA permanently relocates eight families after the 2002 release",
        summary: "EPA's decision funded permanent relocation for eight owner-occupant families and assistance for two tenants, while the Army Corps handled acquisition and relocation work as EPA's agent.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/4f285d55d6ae5f66852570d2003f39ea.html",
        reach: "Regional",
      },
      {
        date: "May 26, 2003",
        headline: "Diaz closes after federal safety demands and mounting local pressure",
        summary: "Local reporting recorded that EPA-required safety improvements were beyond the company's stated means, while Diaz faced a proposed $60 million resident lawsuit and village fines connected to groundwater or sewer-discharge violations. Diaz entered bankruptcy and abandoned the facility weeks later.",
        publisher: "Westside News archive",
        url: "https://westsidenewsny.com/pastarchives/OldSite/westside/news/2003/0526/features/Diazchemical.html",
        reach: "Local",
      },
      {
        date: "June 16, 2026",
        headline: "Federal watchdog reviews treatment safety and community engagement",
        summary: "EPA's Inspector General found that complaints had received swift responses but recommended community interviews during five-year reviews and an updated, publicly available community-involvement plan.",
        publisher: "EPA Office of Inspector General",
        url: "https://www.epa.gov/office-inspector-general/report-inspection-infrastructure-investment-and-jobs-act-funded-activities",
        reach: "National",
      },
    ],
    sources: [
      { title: "Diaz Chemical Superfund Site Profile", publisher: "U.S. Environmental Protection Agency", url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0203341" },
      { title: "First Five-Year Review", publisher: "U.S. Environmental Protection Agency", url: "https://semspub.epa.gov/work/02/609926.pdf" },
      { title: "March 2026 Community Update", publisher: "U.S. Environmental Protection Agency", url: "https://semspub.epa.gov/work/02/762730.pdf" },
      { title: "Diaz Chemical DEC Document Repository", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/837009/" },
    ],
  },
];

export const featuredSites: AtlasSite[] = [
  ...featuredSiteRecords,
  ...historicCleanupExpansion,
  ...countyExpansion2026,
].map((site) => ({
  ...site,
  image: site.image ?? siteImages[site.id],
  story: site.story ?? siteStories[site.id],
}));
