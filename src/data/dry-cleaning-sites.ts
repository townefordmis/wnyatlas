import type { AtlasSite } from "@/types/site";

const publisher = "New York State Department of Environmental Conservation";
const mapUrl = "https://services6.arcgis.com/DZHaqZm9cxOD4CWM/ArcGIS/rest/services/Remediation_Sites/FeatureServer/1";

export const dryCleaningSites: AtlasSite[] = [
  {
    id: "peters-dry-cleaning",
    name: "Peters Dry Cleaning",
    municipality: "Lockport",
    county: "Niagara",
    category: "cleanup",
    summary: "A 0.41-acre neighborhood dry cleaner at 316 Willow Street left a chlorinated-solvent plume requiring soil removal, demolition, groundwater treatment and vapor mitigation at a neighboring home. DEC now lists site 932128 as Class 4, with continuing site management.",
    evidenceStatus: "well-documented",
    coordinates: [-78.6926898821538, 43.16004696983677],
    updateNote: "Added the neighborhood solvent-plume history, 2025 monitoring findings and verified current Class 4 status.",
    sources: [
      { title: "March 2015 Record of Decision — history and findings, printed pages 6–11", publisher, url: "https://extapps.dec.ny.gov/docs/remediation_hudson_pdf/pdc5.pdf" },
      { title: "July 2025 Site Management Plan — sections 2.3, 2.5 and 3; Table 2.2", publisher, url: "https://extapps.dec.ny.gov/data/DecDocs/932128/Report.HW.932128.2025-07-31.Site%20Management%20Plan%20SMP.pdf" },
      { title: "DEC site 932128 — current site record", publisher, url: "https://appfactory.dec.ny.gov/DERExternalSearch/ERDDetails?SiteCode=932128" },
      { title: "DEC remediation map — coordinates and Class 04 checked September 25, 2026", publisher, url: mapUrl },
      { title: "DEC definitions of Registry classes", publisher, url: "https://dec.ny.gov/environmental-protection/site-cleanup/database-search/site-classifications" },
    ],
    story: {
      lastReviewed: "September 25, 2026",
      background: [
        "Dry cleaning began in the late 1930s or early 1940s on a small residential-neighborhood parcel near a city park. Tetrachloroethylene (PCE), a dry-cleaning solvent, and its breakdown products became the focus of the cleanup.",
        "The 2015 decision describes shallow groundwater approximately 3.5–5.5 feet below ground, flowing northwest, with bedrock about 10–15 feet down. The site's environmental footprint extends beyond the former business building.",
      ],
      timeline: [
        { period: "2005", event: "An early excavation removed approximately 30 tons of chlorinated-solvent soil as hazardous waste under DEC Spill 0475193." },
        { period: "2009–2013", event: "Vapor mitigation was installed at the cleaner and an adjacent home in December 2009. The cleaner's building was demolished in October 2013 to permit investigation beneath it." },
        { period: "2014", event: "A much larger excavation removed contaminated soil and six underground tanks. The 2015 decision reports 4,447 cubic yards; the 2025 plan instead records 462 tons of hazardous soil plus 3,985 tons of non-hazardous soil. These differently reported quantities are not a unit conversion." },
        { period: "2015", event: "DEC selected enhanced biodegradation followed by monitored natural attenuation, with groundwater-use restrictions and continued vapor mitigation." },
        { period: "2023–2025", event: "Biological amendments were injected in September 2023. The July 2025 management plan includes subsequent monitoring and December 2024 groundwater results." },
      ],
      documentedImpacts: [
        "Historical soil PCE reached 1,900 mg/kg. The 2015 decision reports maximum total groundwater VOCs of 84,353 µg/L before excavation and 11,549 µg/L afterward in August 2014. These are historical monitoring results. DEC reported that the public water supply used a different, unaffected source.",
        "The 2025 plan reports December 2024 selected chlorinated VOCs totaling 1,936.6 µg/L at MW-101. Residual groundwater contamination remained primarily west and north of the excavation. The selected-compound sum should not be treated as identical to every earlier total-VOC measure.",
      ],
      cleanupAndControls: [
        "Excavation addressed source soil; groundwater treatment promotes microbial breakdown of chlorinated solvents. An environmental easement restricts untreated groundwater use, and site management includes monitoring and maintenance of the neighboring home's vapor system.",
        "The 2025 plan reports that April 2025 vapor-intrusion sampling at four nearby residential properties did not warrant further action or additional sampling. This finding does not end the site's groundwater management obligations.",
      ],
      presentDay: [
        "DEC's map record, checked September 25, 2026, lists Peters as Class 4. This means remedial construction is complete with continuing operation, maintenance or monitoring. The Class 2 designation in the 2015 decision describes an earlier stage.",
        "Field stop: view the 316 Willow Street frontage from a public sidewalk. The former building and subsurface plume cannot be read from surface appearance alone; respect nearby residents' privacy.",
      ],
      researchNotes: [
        "The marker uses DEC's official 932128 site point, not a plume boundary. Resolve the excavation-volume versus disposal-weight discrepancy against the original completion records before using a single definitive quantity.",
        "Keep sample dates and analyte totals attached to concentration comparisons. Review later monitoring reports as they become available.",
      ],
    },
  },
  {
    id: "time-one-hour-cleaners",
    name: "Time 1-Hour Cleaners",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary: "Dry cleaning at 2526–2532 Pine Avenue left PCE contamination and documented off-site soil-vapor impacts. Cleanup at this 0.24-acre site includes air purification, sewer replacement, basement sealing and vapor extraction. DEC site 932158 remains Class 2.",
    evidenceStatus: "well-documented",
    coordinates: [-79.03084855777972, 43.095263119486056],
    updateNote: "Added the Pine Avenue vapor-intrusion history and corrected the system construction dates using the 2025 completion report.",
    sources: [
      { title: "May 2012 Class 2 public notice — contamination and off-site vapor findings", publisher, url: "https://extapps.dec.ny.gov/data/DecDocs/932158/Report.HW.932158.2012-05-17.2526PineAve__NewClass2PublicNotice.pdf" },
      { title: "February 2025 SVE construction completion report — sections 1–3, especially 3.2–3.5", publisher, url: "https://extapps.dec.ny.gov/data/DecDocs/932158/Report.HW.932158.2025-02-12.Final%20Construction%20Completion%20Report%20CCR%20SVE%20System%20.pdf" },
      { title: "DEC site 932158 — current site record", publisher, url: "https://appfactory.dec.ny.gov/DERExternalSearch/ERDDetails?SiteCode=932158" },
      { title: "DEC remediation map — coordinates and Class 02 checked September 25, 2026", publisher, url: mapUrl },
    ],
    story: {
      lastReviewed: "September 25, 2026",
      background: [
        "The 2025 construction report places dry cleaning at 2532 Pine Avenue by 1969, relocation next door to 2526 in 1982, and the end of active cleaning there in 1988. Garment pressing and drop-off/pickup continued afterward.",
        "The two small parcels sit in a densely populated residential and commercial neighborhood. A small business footprint can leave contamination requiring controls within buildings and beyond its property lines.",
      ],
      timeline: [
        { period: "2012", event: "DEC's Class 2 notice reported PCE and breakdown products in soil and soil vapor above applicable criteria, with off-site vapor impacts requiring further investigation." },
        { period: "2015–2016", event: "Air-purification units were installed at 2532 Pine Avenue." },
        { period: "2019–2021", event: "Vapor-extraction installation finished in September 2019; startup followed in January 2021. Sewer replacement and basement sealing also occurred in 2021." },
        { period: "February 2025", event: "The construction report documents the system at 2532 Pine Avenue; its publication date is not the installation date or sitewide cleanup completion." },
      ],
      documentedImpacts: [
        "The 2012 notice establishes off-site soil-vapor impacts, while calling for additional sampling to define extent and potential exposure. It does not establish effects throughout the surrounding neighborhood.",
        "A 2020 sewer inspection found cracked piping. Air screening identified drains and the sewer vent as likely major contributors to indoor-air impacts.",
      ],
      cleanupAndControls: [
        "Three extraction wells and two passive air intakes serve the basement. The old sub-slab sewer was grouted and capped, with a replacement above the slab. Sealing addressed cracks and utility penetrations.",
        "Water buildup in extraction wells complicates operation and requires dewatering; the report calls for evaluating performance improvements.",
      ],
      presentDay: [
        "DEC's map record, checked September 25, 2026, lists site 932158 as Class 2. A completed interim system does not mean all site investigation, remedy selection or management is finished.",
        "Field stop: view the 2526–2532 Pine Avenue frontage from the public sidewalk. Subsurface equipment and building interiors are not public exhibits; do not enter to inspect the remedy.",
      ],
      researchNotes: [
        "Use the 2025 report's operating chronology; the earlier public notice describes the business differently. Confirm later system performance and remedy decisions before updating current conditions.",
        "The map point represents DEC's site record, not the off-site vapor footprint. The reviewed evidence does not establish a release from this site to Gill Creek.",
      ],
    },
  },
];
