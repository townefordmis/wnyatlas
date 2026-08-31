import type { AtlasSite } from "@/types/site";

export const regionalWasteNetworkSites: AtlasSite[] = [
  {
    id: "niagara-transformer-cheektowaga",
    name: "Niagara Transformer",
    municipality: "Cheektowaga",
    county: "Erie",
    category: "cleanup",
    summary:
      "Active transformer works at 1747–1755 Dale Road where historic PCB-oil handling contaminated soil, groundwater, buried drains, and a downstream ditch system leading toward the Buffalo River. DEC also records a carefully qualified reported connection between Niagara Transformer waste oil and the Wide Beach cleanup.",
    evidenceStatus: "well-documented",
    coordinates: [-78.766667, 42.904167],
    newsEvents: [
      {
        date: "April 10, 1990",
        headline: "An oily ditch seep exposes a buried PCB pathway",
        summary: "Town highway workers reported oil seeping near the rail yard. Investigation found PCB-contaminated oil, sediment, groundwater, and old subsurface drain tiles that helped explain movement away from disposal areas.",
        publisher: "New York State Department of Environmental Conservation",
        url: "https://extapps.dec.ny.gov/data/DecDocs/915146/ROD.HW.915146.1993-12-30.niagara_transformer.pdf",
        reach: "Regional",
      },
    ],
    story: {
      lastReviewed: "August 31, 2026",
      background: [
        "Niagara Transformer traces its corporate history to Erie Electric Corporation, founded by John H. Darby in 1924. The business built its first Niagara industrial transformer in 1933 and later became Niagara Power Transformer. The environmental record centers on the Dale Road property that Niagara Transformer purchased and developed in 1958.",
        "Until 1980, the plant stored or used PCB-containing oils as insulating fluid in some liquid-filled transformers. Former employees told investigators that waste transformer oil was spread on the formerly unpaved parking lot and driveway for dust suppression and used along the fence beside St. Adalbert's Cemetery for weed control.",
        "The site's importance extends beyond its property line. DEC documented movement through soil, shallow and deeper groundwater, buried drainage tiles, ditches, a retention pond, and a storm-sewer route that ultimately discharged to the Buffalo River.",
      ],
      timeline: [
        { period: "1924–1958", event: "The transformer business developed from Erie Electric Corporation; Niagara Transformer acquired the Dale Road property and built the plant in 1958." },
        { period: "1958–1980", event: "PCB-containing transformer oils were handled at the plant. Employee accounts described waste oil spread for dust and weed control until the early 1970s." },
        { period: "1971", event: "Reports described a tank rupture that released an estimated 2,000–4,000 gallons of non-PCB mineral transformer oil in the parking-lot area." },
        { period: "April 1990", event: "Workers reported an oily seep in the ditch south of the property. The seep contained approximately 57,000 ppm PCBs, prompting a detailed investigation." },
        { period: "1990s", event: "Investigators found highly contaminated soil, oily product, groundwater impacts, and PCB sediment in the downstream drainage system. Cleanup addressed source areas and approximately 11,500 cubic yards of contaminated drainage sediment." },
        { period: "Long-term management", event: "The operating industrial property remains subject to containment, monitoring, inspection, and maintenance requirements." },
      ],
      documentedImpacts: [
        "DEC reported roughly 10,000–280,000 ppm PCBs in surface soil between the plant and cemetery fence, with contamination extending onto part of the adjoining cemetery.",
        "A ditch seep contained approximately 57,000 ppm PCBs; one sample of dense oily product contained approximately 140,000 ppm, or 14 percent, PCBs.",
        "Old subsurface tile drains contained oily product and provided a preferential route through otherwise low-permeability clay from source areas toward the southern drainage ditch.",
        "PCBs and chlorinated benzenes affected groundwater. DEC reported no private drinking-water wells within one mile and did not document this as a municipal drinking-water contamination incident.",
        "Contaminated sediment moved through upper and lower drainage features to a storm sewer at Harlem Road whose drainage ultimately reached the Buffalo River.",
      ],
      cleanupAndControls: [
        "The remedy removed or contained heavily contaminated source soil and oily material and addressed affected drainage sediment beyond the factory parcel.",
        "Long-term management uses cover systems, collection or drainage controls, groundwater monitoring, inspections, and maintenance to preserve the remedy on an active industrial property.",
        "The downstream drainage cleanup was substantially completed in the 1990s; present conditions should be described from the newest periodic review rather than inferred from the original concentrations.",
      ],
      presentDay: [
        "Transformer manufacturing continues at Dale Road. The historical release is a managed cleanup record, not evidence that today's production repeats the former PCB-oil practices.",
      ],
      researchNotes: [
        "DEC's Wide Beach delisting record says the road oil was reported to have come from Niagara Transformer and was allegedly PCB-contaminated. Preserve those qualifiers; the reviewed record does not justify stating the source as an uncontested fact.",
        "Show Wide Beach as a reported waste-network connection and the Buffalo River route as a separately documented on-site and drainage pathway.",
      ],
    },
    sources: [
      { title: "Niagara Transformer Record of Decision — Site 915146", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/915146/ROD.HW.915146.1993-12-30.niagara_transformer.pdf" },
      { title: "Niagara Transformer Site Management Plan", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/915146/Report.HW.915146.2012-03-23.SiteManagementPlanFINAL.pdf" },
      { title: "Wide Beach Approved Delisting Package", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/915119/Report.HW.915119.2012-05-21.Approved_Delist_Package.pdf" },
      { title: "Niagara Transformer and Wide Beach Consent-Order Memorandum", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/915146/Consent%20Order.HW.915146.1995-12-15.Untitled_20140827150902.pdf" },
    ],
  },
  {
    id: "clean-harbors-bdt-clarence",
    name: "Clean Harbors BDT / Battery Disposal Technology",
    municipality: "Clarence",
    county: "Erie",
    category: "industry",
    summary:
      "Former commercial hazardous-waste treatment facility at 4255 Research Parkway that specialized early in reactive lithium-battery destruction, later received off-site waste mainly from Canada, and closed after a major 2002 fire. Investigation and soil removal ended with no further RCRA corrective action required in 2008.",
    evidenceStatus: "well-documented",
    coordinates: [-78.614, 42.974],
    newsEvents: [
      {
        date: "August 14, 2002",
        headline: "A major fire ends hazardous-waste operations in Clarence",
        summary: "The fire consumed much of the stored waste and created a firefighting-water response. Remaining waste, affected soil, and water were removed while investigators evaluated the slab, hydrolysis sump, and groundwater.",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-clean-harbors-btd-llc-clarence-new-york",
        reach: "Regional",
      },
    ],
    story: {
      lastReviewed: "August 31, 2026",
      background: [
        "Battery Disposal Technology became an unusually specialized hazardous-waste operation early in the lithium-battery era. An EPA study described it as the only surveyed organization devoted solely to waste-lithium-battery disposal, using a mechanical and chemical process to break batteries open while an aqueous spray reacted with lithium and other reactive material.",
        "The facility later operated as a commercial treatment, storage, and disposal facility for reactive and ignitable wastes, pressurized containers, pharmaceuticals, and packaged laboratory chemicals. EPA says off-site generators supplied the waste, mainly from Canada; treatment residues then went to other off-site disposal facilities.",
        "The ownership sequence—Wilson-Greatbatch, Laidlaw Environmental Services, Safety-Kleen, and Clean Harbors BDT—describes successive operators of one hazardous-waste facility rather than four separate sites.",
      ],
      timeline: [
        { period: "Early 1980s", event: "Battery Disposal Technology operated a specialized lithium-battery destruction process in Clarence." },
        { period: "1986–2002", event: "The facility operated under the RCRA hazardous-waste system, treating reactive and ignitable off-site waste and shipping treatment residues elsewhere." },
        { period: "August 14, 2002", event: "A major fire consumed substantial stored waste and ended operations." },
        { period: "2002–2003", event: "Remaining waste was removed. Approximately 80,000 gallons of collected firefighting water and about 260 cubic yards of affected soil were taken off-site, with additional work around the former hydrolysis sump." },
        { period: "December 28, 2008", event: "After investigation, soil removal, and groundwater evaluation, regulators terminated RCRA corrective action with no further action required." },
      ],
      documentedImpacts: [
        "The 2002 fire and firefighting response created defined soil and water-management areas requiring sampling and removal.",
        "Investigators sampled ponding areas and beneath the operating slab, evaluated the former hydrolysis sump, and installed overburden and bedrock groundwater wells.",
        "EPA's final account does not document an uncontrolled continuing plume; regulators concluded that the completed work did not require further RCRA corrective action.",
      ],
      cleanupAndControls: [
        "All remaining waste was removed by March 2003, along with collected firefighting water and affected soil.",
        "Soil and groundwater investigations tested whether fire response or earlier treatment areas had created continuing releases.",
        "RCRA corrective action ended in 2008, and EPA reports no active hazardous-waste management permit for the former facility.",
      ],
      presentDay: [
        "The strongest continuing historical question is the waste network: which Canadian and U.S. generators shipped material to Clarence, how it crossed the border, and where treatment residues ultimately went. Those flows require manifest research rather than assumptions about present contamination.",
      ],
      researchNotes: [
        "Do not describe the former operation as a current hazardous-waste facility or imply that regulators found a continuing groundwater threat after corrective action ended.",
        "Future manifest work can add named generators, quantities, border routes, and residue destinations only where records support them.",
      ],
    },
    sources: [
      { title: "Hazardous Waste Cleanup: Clean Harbors BDT, LLC", publisher: "U.S. Environmental Protection Agency", url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-clean-harbors-btd-llc-clarence-new-york" },
      { title: "Current Human Exposures Under Control Determination", publisher: "U.S. Environmental Protection Agency", url: "https://www.epa.gov/sites/default/files/2017-08/documents/harbors725.pdf" },
      { title: "Hazard Assessment of Management of Waste Lithium Batteries", publisher: "U.S. Environmental Protection Agency", url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101PQHX.TXT" },
      { title: "Niagara River Action Plan — August 1987 Update", publisher: "U.S. Environmental Protection Agency", url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000SL6C.TXT" },
    ],
  },
];
