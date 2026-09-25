import type { AtlasSite } from "@/types/site";

const publisher = "New York State Department of Environmental Conservation document archive";

export const paintIndustrySites: AtlasSite[] = [
  {
    id: "pratt-lambert-scajaquada",
    name: "Pratt & Lambert — Scajaquada Creek Plants",
    municipality: "Buffalo",
    county: "Erie",
    category: "industry",
    summary: "Paint, solvent and lacquer manufacturing at 75 Tonawanda Street and 1451 West Avenue provides a two-property field stop along Scajaquada Creek. Records identify spills and potential creek impacts; they do not assign particular creek sediment contamination to these plants.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.89545155852386, 42.93168762195347],
    updateNote: "Added a sourced paint-industry field stop with public-viewing guidance and separate off-site waste evidence.",
    sources: [
      { title: "2021 Scajaquada characterization work plan — neighboring industries, printed page 14", publisher, url: "https://extapps.dec.ny.gov/data/DecDocs/915351/Work%20Plan.HW.915351.2021-10-05.Site%20Characterization%20Work%20Plan.pdf" },
      { title: "1988 Pratt & Lambert facility report — facility description, section 2", publisher, url: "https://extapps.dec.ny.gov/data/DecDocs/915251/Report.RCRA.915251.1988-11-23.FinalRpt_EPA_WA_R02002-934.pdf" },
      { title: "2000 Newstead EPA sampling report — background, page 2", publisher, url: "https://extapps.dec.ny.gov/data/DecDocs/915139/Report.HW.915139.2000-07-01.EPA_Sampling.pdf" },
      { title: "DEC remediation site map — marker authority: 915251", publisher: "NYSDEC", url: "https://services6.arcgis.com/DZHaqZm9cxOD4CWM/ArcGIS/rest/services/Remediation_Sites/FeatureServer/1" },
    ],
    story: {
      lastReviewed: "September 25, 2026",
      background: [
        "The 1988 facility report describes paint and resin production at 75 Tonawanda Street, with equipment cleaning and discarded products generating solvent and paint wastes.",
        "The 2021 creek work plan identifies more than 100 historical petroleum and chemical tanks at 75 Tonawanda Street. It separately describes lacquer production and above- and below-ground solvent and petroleum storage at 1451 West Avenue.",
      ],
      timeline: [
        { period: "1901", event: "The 1988 facility report dates the beginning of operations at 75 Tonawanda Street to January 1901." },
        { period: "1988", event: "A facility assessment documents paint, resin and cleaning waste streams." },
        { period: "2021", event: "The Scajaquada work plan includes both former Pratt & Lambert properties in its review of possible industrial sources." },
      ],
      documentedImpacts: [
        "The 2021 work plan records spills and soil cleanups at both addresses and identifies the West Avenue operation as a potential creek-impact source. Potential contribution is not a demonstrated assignment of individual sediment contaminants.",
        "Separate off-site evidence: EPA's 2000 Newstead report describes excavated paint/solvent containers bearing Pratt & Lambert labels at 8471 Fletcher Road. It reports earlier soil findings including lead and chromium and shallow-groundwater metals and volatile organics. Those findings belong to Newstead, not these creekside properties, and do not identify the source of every detected compound.",
      ],
      cleanupAndControls: [
        "The creek work plan characterizes soil cleanup at 75 Tonawanda as limited. That historical description does not establish a current sitewide cleanup status for either property.",
      ],
      presentDay: [
        "Field stop: use 75 Tonawanda Street as the first navigation address, then orient toward 1451 West Avenue. Observe only from lawful public streets or paths; confirm access on arrival.",
        "Photograph industrial edges, creek banks, bridges and visible drainage structures from public viewpoints. Record location and viewing direction. A visible pipe or stain alone does not establish a historic discharge or its source.",
      ],
      researchNotes: [
        "The map uses DEC's 915251 site point at 75 Tonawanda Street, retrieved September 25, 2026. It represents the first property, not both plant footprints or an outfall location. The 915351 work-plan archive belongs to a separate creek investigation.",
        "Recover parcel-level historical maps, operating dates for West Avenue, discharge records and later cleanup documents. Verify the proposed Buffalo-to-Newstead hauling history before naming a hauler, disposal period or specific originating plant.",
      ],
    },
  },
  {
    id: "mcdougall-kellogg-elk-street",
    name: "McDougall White Lead & Kellogg — Elk Street",
    municipality: "Buffalo",
    county: "Erie",
    category: "industry",
    summary: "Historic paint industries near Elk and Babcock Streets are linked in a cleanup report to buried pigment waste. This field stop examines the white-lead history within and beside the later refinery complex covered by the atlas's broader Buffalo Terminal entry.",
    evidenceStatus: "well-documented",
    coordinates: [-78.83404887239743, 42.865046515782545],
    updateNote: "Added the historic white-lead evidence and field guidance, linked to the broader refinery record.",
    sources: [
      { title: "OU-2 Alternatives Analysis Report — printed page 3-33 and Plate 6 (text revised May 2018)", publisher, url: "https://extapps.dec.ny.gov/data/DecDocs/C915201B/Report.BCP.C915201B.2017-11-15.Alternatives_Analysis_Report-OU%202-Final-Rev1.pdf" },
      { title: "2024 OU-2 East periodic review — executive summary, page 4", publisher, url: "https://extapps.dec.ny.gov/data/DecDocs/C915201B/Report.BCP.C915201B.2024-08-13.PRR_and_IC-EC_Certification.pdf" },
      { title: "DEC remediation site map — marker authority: C915201B", publisher: "NYSDEC", url: "https://services6.arcgis.com/DZHaqZm9cxOD4CWM/ArcGIS/rest/services/Remediation_Sites/FeatureServer/1" },
    ],
    story: {
      lastReviewed: "September 25, 2026",
      background: [
        "The alternatives analysis reads 1900/1917 Sanborn maps as showing McDougall White Lead, McDougall Paint, McDougall Varnish, Buffalo Oil Paint & Varnish and Kellogg Paint & Varnish within or beside the investigated northern area. It describes white-lead production as conversion of metallic lead into lead-carbonate pigment.",
        "OU-2 East covers approximately 33.45 acres across all or portions of 503/623/625/635/677 Elk Street. This modern cleanup boundary is not the footprint of a single historic paint factory.",
      ],
      timeline: [
        { period: "1892", event: "Standard Oil acquired most of the wider refinery operation, according to the periodic review." },
        { period: "1981–2005", event: "Refining had ended by 1981; ExxonMobil terminal use continued until 2005, when Buckeye acquired the remaining active facilities." },
      ],
      documentedImpacts: [
        "At SB-107, investigators recovered predominantly white paint-like material with broken wooden casks, rubber plugs and metal cans. Laboratory microscopy and elemental analysis identified lead oxide and lead carbonate, matching the pigment produced by the historic white-lead industry. Together with the mapped manufacturing locations and documented production process, this physical and chemical evidence supports the alternatives analysis report's conclusion that wastes from the historic paint industries were the most likely source.",
        "Keep the paint-pigment evidence distinct from the site's petroleum history; overlapping industrial footprints do not establish a common source for all contaminants.",
      ],
      cleanupAndControls: [
        "The 2024 review reports an intact cover and groundwater results supporting effective in-place stabilization. Remaining contamination requires site management and an environmental easement. These are dated findings, not a new inspection or unrestricted-use clearance.",
      ],
      presentDay: [
        "Field stop: navigate to the 500–600 block of Elk Street near Babcock Street. Document frontage and the scale of the industrial landscape from public streets. Do not enter industrial property; river access is not established by this entry.",
        "Historical-map overlays will be more informative than expecting buried waste or former production rooms to remain visible.",
      ],
      researchNotes: [
        "The marker is DEC's C915201B OU-2 East point, retrieved September 25, 2026. It is not SB-107, the McDougall corroding house or a suggested parking location. Georeference the historical maps and boring plans before placing those features on a modern aerial.",
        "Review subsequent periodic reports for later conditions. The related Former ExxonMobil Buffalo Terminal entry covers the larger complex and other cleanup units; these are overlapping histories, not two independent cleanup properties.",
      ],
    },
  },
];
