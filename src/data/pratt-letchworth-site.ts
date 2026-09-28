import type { AtlasSite } from "@/types/site";

export const prattLetchworthSite: AtlasSite = {
  id: "pratt-letchworth-foundry",
  name: "Pratt & Letchworth — Scajaquada Creek Foundry",
  municipality: "Buffalo",
  county: "Erie",
  category: "industry",
  summary: "An iron foundry at 189 Tonawanda Street placed approximately 19,000 tons of foundry sand and 16,000 tons of slag along Scajaquada Creek or at the end of its property between 1949 and 1965. DEC documented this disposal history and selected No Further Action in 1995 following a separate PCB-soil cleanup.",
  evidenceStatus: "well-documented",
  coordinates: [-78.89436909098703, 42.93502046345742],
  updateNote: "Added documented foundry-waste disposal, PCB cleanup history and the distinction from nearby Pratt & Lambert.",
  sources: [
    { title: "July 1995 Record of Decision — Pratt & Letchworth, site 915045", publisher: "NYSDEC", url: "https://extapps.dec.ny.gov/data/DecDocs/915045/ROD.RCRA.915045.1995-07-01.pratt_letchworth.pdf" },
    { title: "DEC remediation site map — marker and current classification authority: 915045", publisher: "NYSDEC", url: "https://services6.arcgis.com/DZHaqZm9cxOD4CWM/ArcGIS/rest/services/Remediation_Sites/FeatureServer/1" },
    { title: "DEC cleanup site classifications", publisher: "NYSDEC", url: "https://dec.ny.gov/environmental-protection/site-cleanup/database-search/site-classifications" },
  ],
  story: {
    lastReviewed: "September 28, 2026",
    background: [
      "Pratt & Letchworth manufactured iron products at a creekside foundry. Foundry sand is used to form casting molds; slag is a residue of metal processing. This was a different business from nearby paint manufacturer Pratt & Lambert.",
    ],
    timeline: [
      { period: "1949–1965", event: "DEC records disposal of approximately 19,000 tons of foundry sand and 16,000 tons of slag along the creek banks or at the end of the plant property." },
      { period: "1982", event: "Foundry operations ceased." },
      { period: "1993–February 1994", event: "PCB-contaminated soil was excavated and shipped off site." },
      { period: "July 1995", event: "DEC selected No Further Action after the PCB removal." },
    ],
    documentedImpacts: [
      "The record identifies the producer, material, disposal period and approximate quantities. It documents disposal; it does not by itself establish the permits or rules governing that placement.",
      "DEC did not establish a direct link between this site and PCB contamination in Scajaquada Creek. The creek's broader industrial history requires separate source attribution.",
    ],
    cleanupAndControls: [
      "The PCB cleanup removed 49 tons of hazardous soil to CWM in Model City and 934 tons of nonhazardous soil to Lake View Landfill in Erie, Pennsylvania. These quantities describe PCB-soil removal, not removal of all historic foundry fill.",
      "DEC's current map lists site 915045 as Class C, meaning completed, checked September 28, 2026. That classification does not establish that every historical fill deposit was excavated.",
    ],
    presentDay: [
      "Use 189 Tonawanda Street to orient to the former foundry. Observe from lawful public streets or paths; the map marker does not establish public access to the property or creek bank.",
    ],
    researchNotes: [
      "The marker uses DEC's official site 915045 point, retrieved September 28, 2026. It locates the cleanup site rather than a surveyed disposal boundary. Georeferencing the historical disposal plans is needed before drawing fill areas on today's creek landscape.",
    ],
  },
};
