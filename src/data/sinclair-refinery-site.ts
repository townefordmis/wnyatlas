import type { AtlasSite } from "@/types/site";

export const sinclairRefinerySite: AtlasSite = {
  id: "sinclair-refinery-wellsville",
  name: "Sinclair Refinery — Landfill and Genesee River Remedy",
  municipality: "Wellsville",
  county: "Allegany",
  category: "cleanup",
  pfasStatus: "documented",
  pfasEvidence: ["detection", "investigation"],
  pfasCompounds: [
    {
      name: "Perfluorooctanoic acid",
      abbreviation: "PFOA",
      finding: "detected",
      medium: "Groundwater monitoring wells",
      note: "Detected in 2019; the highest reported result was 12 ng/L. The historical source was not established.",
    },
    {
      name: "Perfluorooctanesulfonic acid",
      abbreviation: "PFOS",
      finding: "detected",
      medium: "Groundwater monitoring wells",
      note: "Detected in 2019; the highest reported result was 39 ng/L. The historical source was not established.",
    },
  ],
  pfasScopeNote:
    "EPA detected PFAS in all five monitoring wells sampled in 2019, with PFOA or PFOS above New York's 10 ng/L drinking-water standard in two landfill wells. These results do not identify Sinclair's refinery operations as the PFAS source.",
  summary:
    "A 100-acre former refinery and hazardous-waste landfill beside the Genesee River. Cleanup moved Wellsville's drinking-water intake upstream, reconfigured part of the river, capped approximately 230,000 cubic yards of refinery waste, treated groundwater through a 3,300-foot collection system and constructed wetlands, and left long-term controls over contamination that remains.",
  evidenceStatus: "well-documented",
  coordinates: [-77.9475, 42.112],
  newsEvents: [
    {
      date: "1981–1988",
      headline: "River erosion and drinking-water concern force a regional response",
      summary:
        "After flooding and erosion carried landfill debris toward the Genesee River, agencies stabilized the bank and ultimately moved Wellsville's municipal intake from downstream of the landfill to a location upstream of the site.",
      publisher: "U.S. Environmental Protection Agency",
      url: "https://www.epa.gov/superfund-redevelopment/superfund-sites-reuse-new-york",
      reach: "Regional",
    },
    {
      date: "2017",
      headline: "Proposed natural-resource settlement directs $264,500 toward restoration",
      summary:
        "A federal notice proposed a $275,000 Atlantic Richfield settlement, including $264,500 for projects intended to restore, replace, rehabilitate, or acquire the equivalent of natural resources injured at the site.",
      publisher: "U.S. Department of the Interior / Federal Register",
      url: "https://www.federalregister.gov/documents/2017/01/11/2017-00416/proposed-settlement-agreement-under-environmental-protection-statutes",
      reach: "Regional",
    },
  ],
  story: {
    lastReviewed: "August 28, 2026",
    background: [
      "Sinclair is both an industrial site and a changed-river story. The approximately 100-acre Superfund site lies between South Brooklyn Avenue and the Genesee River, about one-half mile south of downtown Wellsville. EPA divides it into a roughly 90-acre former refinery and a 10-acre landfill operable unit; the river forms its eastern and southern boundaries.",
      "A refinery began processing Pennsylvania-grade crude oil in 1901. Sinclair acquired it in 1919 and operated it until a 1958 fire ended refining. Products included heavy lubricating oils and grease, fuel oils, naphtha, gasoline, aniline, lighter fluid, and paraffin. Waste handling contaminated refinery soil and groundwater, while the southern property became a disposal ground for approximately 230,000 cubic yards of refinery waste.",
      "EPA's waste inventory includes oil-straining cloth, oil/water-separator sludge, solvent-plant and other tank sludge, off-specification products, daily loads of oil-soaked soil and sludge, burned Fuller's earth, acid spills, boiler ash and cinders, tetraethyl lead, pesticides, waste oil, and heavy metals. Investigators described about 300 deteriorating surface drums, believed hundreds more were buried, and found an oily pool interpreted as the remains of a lagoon.",
      "Aerial photographs show that physical disposal activity did not simply end with the refinery fire. EPA documented lagoon dredging, trench backfilling, additional landfilling, and grading from 1964 through 1982, with the most extensive apparent additional filling in the South Landfill Area between 1970 and 1974. The reviewed sources do not identify every post-1958 disposer or waste stream, so WNY Atlas treats that ownership and disposal history as an open research question.",
    ],
    timeline: [
      { period: "1901", event: "A refinery began processing Pennsylvania-grade crude oil beside the Genesee River." },
      { period: "1919–1958", event: "Sinclair operated the refinery until a major fire halted production. Refinery wastes were disposed in the southern landfill areas." },
      { period: "1964–1982", event: "EPA's aerial-photo review documented continued lagoon dredging, trench filling, additional landfilling, and grading after refining ended; the responsible parties and full waste inventory remain incompletely resolved in the reviewed record." },
      { period: "1981–1983", event: "Heavy rain, flooding, and riverbank erosion exposed landfill debris and prompted investigation. The state diverted the river away from the eroding landfill face and stabilized the bank as an interim measure." },
      { period: "1983–1988", event: "EPA listed Sinclair on the National Priorities List. Wellsville's surface-water intake, formerly downstream of the landfill, was relocated about one-quarter mile upstream of the site." },
      { period: "1985 health investigation", event: "NYSDOH found overall cancer incidence comparable to similar communities but a statistically significant excess of leukemia among men. The agency concluded the pattern did not support a drinking-water association and considered occupational or lifestyle exposure more suggestive." },
      { period: "1990–1994", event: "Cleanup partially channelized the Genesee River, consolidated the South Landfill Area into the central landfill, removed drums, installed a cutoff wall and cap, fenced the landfill, and excavated refinery surface soil exceeding arsenic or lead criteria." },
      { period: "1995–2002", event: "Air sparging and soil-vapor extraction removed approximately 160,000 pounds of subsurface contamination but had little effect on the groundwater plumes. EPA told ARCO in 2002 that the system had not met the remedy's performance requirements." },
      { period: "2007–2012", event: "A 3,300-foot collection trench and constructed-wetland treatment system began intercepting contaminated shallow groundwater. Crews also removed LNAPL-affected sediment and soil from the riverbank, riverbed, and drainage swale." },
      { period: "2017", event: "A federal notice proposed a $275,000 natural-resource-damage settlement, reserving $264,500 for restoration, replacement, rehabilitation, acquisition, planning, and oversight. The final agreement and project record remain to be recovered." },
      { period: "2019–2022", event: "PFAS were detected in all five groundwater monitoring wells sampled. EPA's 2022 review nevertheless found the implemented remedy protective while calling for coordination with DEC on future PFAS sampling." },
    ],
    documentedImpacts: [
      "The former refinery shallow aquifer contained northern, central, and southern plumes with benzene, toluene, ethylbenzene, xylenes, nitrobenzene, naphthalene, arsenic, chromium, and lead above site action levels.",
      "Groundwater generally moved toward and discharged to the Genesee River. The 1985 landfill study estimated that groundwater from the central landfill could reach the river in about 1.2 years under the evaluated conditions.",
      "NYSDOH records reproduced in EPA's 1985 decision report one benzene detection in treated Wellsville water above the state guideline through December 1984. Benzene was not detected on other sampling occasions, and the agency concluded average exposure was low and unlikely to explain the observed male leukemia excess.",
      "DOCUMENTED HEALTH INVESTIGATION — ASSOCIATION WITH REFINERY CONTAMINATION NOT ESTABLISHED: NYSDOH found overall 1973–1982 cancer incidence essentially comparable with similar New York communities. The male leukemia excess was statistically significant, but there was no corresponding female or childhood excess; six of ten men had potentially relevant occupational exposures, and only two had the leukemia subtype more commonly associated with occupational benzene exposure.",
      "Residual LNAPL produced seasonal sheens in surface-water areas, leading to excavation of contaminated riverbank soil and riverbed and drainage-swale sediment rather than reliance on groundwater treatment alone.",
      "In 2019, PFAS were detected in all five sampled monitoring wells. The highest results were 12 ng/L PFOA and 39 ng/L PFOS; two landfill wells exceeded New York's 10 ng/L PFOA or PFOS drinking-water standard. No reviewed document establishes the historical source of those PFAS, and 1,4-dioxane was not detected in the same wells.",
    ],
    cleanupAndControls: [
      "The municipal intake was moved upstream to remove the possibility that landfill releases would contaminate Wellsville's drinking-water source. This was a protective infrastructure decision, not proof that the refinery had caused every taste, odor, or detected compound in treated water.",
      "The landfill remedy removed surface drums, excavated and consolidated the South Landfill Area, stabilized soft sludge, surrounded the consolidated waste with a soil-bentonite cutoff wall, installed a multilayer cap and passive gas vents, and established long-term monitoring and fencing.",
      "Partial channelization of the Genesee River protected the landfill against bank erosion and inundation during a 100-year flood and improved flow approaching the downstream weir. This cleanup-driven river alteration is mapped separately in Changed Waters and is not presented as the earlier regional flood-control work.",
      "The current groundwater remedy uses a 3,300-foot collection trench tied into clay, eight pumping manholes, and a constructed system of sedimentation, sludge-drying beds, surface- and vertical-flow wetlands, and a cascade aerator before monitored discharge. EPA separately describes a 1,300-foot trench that polishes landfill and wetland water downstream of the containment pond.",
      "Environmental easements and restrictive covenants preserve remedy components, prohibit groundwater use, regulate disturbance, and require vapor evaluation or controls for new construction. The protectiveness finding depends on continuing industrial/recreational use and maintenance of these controls.",
    ],
    presentDay: [
      "Much of the former refinery now supports Alfred State's Wellsville campus, a manufacturing/technology business, a truck depot, utility infrastructure, and a public trail. Reuse occurs on a managed remedy, not an unrestricted site.",
      "EPA's April 2022 review found the remedy protective and identified no formal remedy issue or recommendation. The same report states that hazardous substances remain above levels allowing unlimited use and unrestricted exposure and notes that low-level PFAS require continued coordination with New York.",
      "The site remains on the National Priorities List. EPA records construction completion in 2012 and sitewide readiness for anticipated reuse in 2018; neither milestone means the cap, groundwater system, covenants, monitoring, or future five-year reviews can end.",
    ],
    researchNotes: [
      "Identify the owners, tenants, haulers, and disposal practices responsible for the post-1958 filling visible in 1964, 1970, 1974, and 1982 aerial photographs. Do not assign this disposal to Sinclair or later occupants without documentary support.",
      "Recover the final settlement, natural-resource restoration plan, and spending record following the 2017 proposed agreement to identify which injured resources and restoration projects were ultimately selected.",
      "Track post-2019 PFAS sampling, including analyte lists, field and laboratory quality-control data, trends, and DEC's interpretation. Detection alone does not identify a refinery-era source.",
      "Digitize the agency-approved 1990 channelization design and final survey before replacing the current generalized Changed Waters line with engineering-grade geometry.",
    ],
  },
  sources: [
    { title: "Sinclair Refinery Superfund Site Profile", publisher: "U.S. Environmental Protection Agency", url: "https://cumulis.epa.gov/supercpad/cursites/csitinfo.cfm?id=0202093" },
    { title: "1985 Record of Decision — Landfill and River Remedy", publisher: "U.S. Environmental Protection Agency", url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=91000FBM.TXT" },
    { title: "1991 Record of Decision — Refinery Soil and Groundwater", publisher: "U.S. Environmental Protection Agency", url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100OLEM.TXT" },
    { title: "2022 Sixth Five-Year Review", publisher: "U.S. Environmental Protection Agency", url: "https://semspub.epa.gov/work/02/609934.pdf" },
    { title: "Sinclair Refinery Site Documents — Site 902003", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/902003/" },
    { title: "2017 Proposed Natural Resource Damage Settlement", publisher: "U.S. Department of the Interior", url: "https://www.federalregister.gov/documents/2017/01/11/2017-00416/proposed-settlement-agreement-under-environmental-protection-statutes" },
  ],
};
