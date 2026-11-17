import type { AtlasSite, AtlasSource } from "@/types/site";

export const gibsonReviewSource: AtlasSource = {
  title: "2024 Periodic Review Report, revised submission August 19, 2025 — sections 1–4, printed pages 1-1–4-3 (PDF pages 7–15)",
  publisher: "WSP USA for Olin Corporation, in NYSDEC archive",
  url: "https://extapps.dec.ny.gov/data/DecDocs/932063/Report.HW.932063.2025-08-19.PRR_and_IC-EC_Certification.pdf",
};

export const dibaccoPhaseIISource: AtlasSource = {
  title: "February 1992 Phase II Investigation — executive summary, printed pages 1-1–1-5 (PDF pages 10–14)",
  publisher: "Ecology and Environment Engineering, P.C., for NYSDEC",
  url: "https://extapps.dec.ny.gov/data/DecDocs/932056A/Report.HW.932056A.1992-02-01.PHASEIIINVESTIGATIONS.pdf",
};

export const dibaccoFollowupSource: AtlasSource = {
  title: "March 1998 Preliminary Site Investigation — history, printed pages 1–3; results and qualifications, pages 4–7; conclusions, page 8 (PDF page 16)",
  publisher: "Malcolm Pirnie, Inc., for NYSDEC",
  url: "https://extapps.dec.ny.gov/data/DecDocs/932056A/Report.HW.932056A.1998-03-01.PRELIMINARYSITEINVESTIGATIONREPORT.pdf",
};

const coordinateSource: AtlasSource = {
  title: "NYSDEC Remediation Sites GIS — official orientation points and classification fields, retrieved November 16, 2026",
  publisher: "New York State Department of Environmental Conservation",
  url: "https://services6.arcgis.com/DZHaqZm9cxOD4CWM/ArcGIS/rest/services/Remediation_Sites/FeatureServer/1/query?where=SITECODE%20IN%20(%27932063%27,%27932056A%27)&outFields=*&returnGeometry=true&outSR=4326&f=pjson",
};

export const cayugaCreekDisposalSites: AtlasSite[] = [
  {
    id: "charles-gibson-site",
    name: "Charles Gibson Site",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    coordinates: [-78.9636653548925, 43.09302566297977],
    evidenceStatus: "research-in-progress",
    summary: "Chemical-waste fill beside Cayuga Creek, managed under a cap, slurry wall and groundwater collection system. The 2024 monitoring report found containment effective during that year, with sampling gaps and hydraulic qualifications that require follow-up.",
    sources: [gibsonReviewSource, coordinateSource],
    story: {
      lastReviewed: "November 16, 2026",
      background: [
        "NYSDEC site 932063 occupies approximately two acres beside Tuscarora Road, with Cayuga Creek on its north and east sides. The 2024 Periodic Review Report describes a capped and fenced landfill; the map point is DEC's orientation point, not a disposal or contamination boundary.",
        "The report's historical summary records disposal in 1957 of approximately 400 drums containing hexachlorobenzene (HCB) and approximately 100 tons of hexachlorocyclohexane (BHC/HCH) manufacturing residue, together with soil and building debris. These are historical inventory estimates, not present-day analytical measurements (section 1.1).",
        "The same summary identifies shallow groundwater discharge toward Cayuga Creek as the principal historical exposure pathway considered in remedy planning. The later creek relocation, slurry wall, cap and collection system addressed that site-specific pathway; this history does not establish current uncontrolled discharge.",
      ],
      timeline: [
        { period: "1957", event: "Chemical manufacturing wastes, soil and building debris were placed at the site, according to the historical account in the 2024 review." },
        { period: "1989–1990", event: "Remediation relocated Cayuga Creek, stabilized the former bed, and installed a surrounding soil-bentonite slurry wall, cap, leachate collection system and access controls (section 1.2)." },
        { period: "1993", event: "The report records reclassification from Class 2 to Class 4 and the start of long-term operation and monitoring." },
        { period: "1997", event: "A direct discharge line routed collected leachate to the local sanitary sewer for treatment at the Niagara Falls wastewater treatment facility." },
        { period: "2024 monitoring / August 19, 2025 revised submission", event: "WSP's report for Olin evaluated quarterly water levels and annual water and sediment sampling. Its effectiveness conclusion applies to the 2024 certifying period." },
      ],
      documentedImpacts: [
        "Historical soil and groundwater impacts are documented in the review's account of the investigation. Remaining contamination requires continuing engineering and institutional controls (sections 1 and 3).",
        "Section 4.2.1 reports delta-BHC at 1.8 µg/L in water collected from Manhole B in fall 2024. This is captured water within the remedy, not a creek sample or proof of off-site migration.",
        "The report describes a small qualified September 2024 detection at off-site well MW-4. MW-A3 could not be sampled because it lacked sufficient water. Upstream sediment had no reported BHC detections, while the downstream sample lacked sufficient material for analysis (section 4.2). Missing samples are not nondetections; some laboratory reporting limits also exceeded screening criteria.",
      ],
      cleanupAndControls: [
        "The 1989–1990 remedy combined a new creek channel, stabilization of the former bed, a soil-bentonite wall keyed into clay, a multilayer cap, perimeter collection, fencing and long-term monitoring (section 1.2).",
        "WSP concluded that the remedy remained effective during 2024 and that manhole drawdown was maintained. This is the consultant's assessment submitted for Olin, not an independently verified 2026 condition (section 2).",
        "Section 4.2.3 identifies a historically outward gradient at piezometer pair P-1/P-2, while interpreting nearby Manhole A levels as supporting collection. An anomalous September P-2 reading was replaced with a historical seasonal average for contouring. Those qualifications must accompany the overall containment conclusion.",
      ],
      presentDay: [
        "DEC's GIS returned Class 04 on November 16, 2026, consistent with a closed site requiring continued management. The newest monitoring report inspected in this review covers 2024; no present-day uncontrolled off-site migration has been established by the reviewed evidence.",
      ],
      researchNotes: [
        "Obtain subsequent monitoring, any DEC response to the revised 2024 review, downstream sediment resampling and a successful MW-A3 sample. Check whether HCB sampling anticipated for 2026 occurred.",
        "Review original water-level records and the P-2 substitution with seasonal/high-water conditions before making a stronger hydraulic-containment claim. Reconcile original investigation/feasibility-study dates and differing drum counts; do not publish the proposed 20-gallon-per-day estimate without its original model and assumptions.",
        "Historical creek alignment, disposal footprint and well coordinates require source-map verification before GIS tracing. Do not infer additional waste shipments or reduced monitoring requirements without records.",
      ],
    },
  },
  {
    id: "dibacco-old-creek-site",
    name: "Dibacco No. 1 / Old Creek Site",
    municipality: "Town of Niagara",
    county: "Niagara",
    category: "cleanup",
    coordinates: [-78.958337588218868, 43.100217676059493],
    evidenceStatus: "research-in-progress",
    summary: "Industrial and demolition debris was placed beside and within a former Cayuga Creek channel in 1977–1978. Historical sampling found PAHs and groundwater metals; a later soil investigation recommended delisting. Present-day buried-channel flow and contaminant migration remain unverified.",
    sources: [dibaccoPhaseIISource, dibaccoFollowupSource, coordinateSource],
    story: {
      lastReviewed: "November 16, 2026",
      background: [
        "The February 1992 Phase II report identifies site 932056A as an approximately half-acre disposal area behind 9115 Porter Road in the Town of Niagara. It describes Cayuga Creek displaced southeast during berm construction around 1969, leaving a low wetland in the old bed (printed page 1-1).",
        "Apex Salvage used the site in 1977–1978 for approximately 3,300 cubic yards of mostly demolition material. The report names fire-damaged Carborundum warehouse products and International Paper building debris. It also recounts a historical report of Hooker fly ash and spent C-56 catalyst disposal; that reported inventory does not establish the quantity or composition of every deposit (printed page 1-2).",
        "The 1998 investigation describes a main debris pile, waste in the old bed, a 6-to-8-foot embankment and a berm between the old and active channels. Its figure is an historical site plan, not a verified present-day disposal boundary. This site has a separate waste history from Charles Gibson.",
      ],
      timeline: [
        { period: "Around 1969", event: "Berm construction displaced the creek southeast, leaving an old-channel wetland, according to the 1992 report." },
        { period: "1977–1978", event: "Apex Salvage deposited industrial products and demolition debris. The 1998 history says further dumping was prohibited in 1978 and the area was graded and covered with clay." },
        { period: "April 1990–February 1992", event: "Phase II fieldwork began in April 1990; the February 1992 report evaluated soil, groundwater, surface water and sediment." },
        { period: "July 1997 / March 1998 report", event: "Six surface and subsurface soil samples supported a recommendation for no further work and removal from the inactive hazardous waste site list. The report is a recommendation, not the final delisting order." },
        { period: "November 16, 2026 GIS check", event: "DEC's GIS returned classification N. The final regulatory decision, effective date and meaning of that code for this site's history remain follow-up items." },
      ],
      documentedImpacts: [
        "The 1992 executive summary reports PAHs in all sampled soils, PAHs in four of five sediment samples, and low cyanide in one sediment sample. It does not place that cyanide finding in soil (printed page 1-4 / PDF page 13).",
        "Three historical groundwater samples contained inorganic parameters above the NYSDEC Class GA standards used by the study, including lead, chromium, iron, manganese and zinc in one or more samples. This summarizes the study's historical comparison, not current concentrations or a present exposure assessment (printed page 1-4).",
        "The 1998 report concluded that none of its six July 1997 soil samples exceeded the applicable cleanup guidelines and that hexachlorocyclopentadiene was not detected in those samples. Its data-usability section records rejected silver TCLP and reactive-cyanide results in three of four analyses. The soil conclusion cannot establish current groundwater or creek conditions (printed pages 7–8).",
      ],
      cleanupAndControls: [
        "The 1998 history records grading and clay cover after disposal ceased. The reviewed reports do not establish a Gibson-style operating slurry-wall and groundwater collection remedy at Dibacco.",
        "Malcolm Pirnie recommended no further work and removal from the inactive hazardous waste list in March 1998, based on its soil investigation. The recommendation and current GIS code do not prove that all waste was removed or that the old channel is hydraulically inactive.",
      ],
      presentDay: [
        "The reviewed evidence establishes historical disposal, sampling findings and a later soil-based delisting recommendation. It does not establish present-day groundwater quality, continuous flow through the former channel, or active contaminant migration from that channel to Cayuga Creek.",
        "The 1992 report identified an intermittent ditch, erosion, runoff and groundwater as potential pathways. Those are historical site observations and interpretations, not a demonstrated present-day buried-channel plume (printed page 1-4).",
      ],
      researchNotes: [
        "Obtain the final delisting decision and effective date; explain DEC's current N code from the authoritative site record. The 1998 report places the site in Niagara Falls, while the 1992 report and current GIS identify Niagara; reconcile the historical municipal description.",
        "Retrieve relocation plans and verify the proposed 1,500-foot channel length, historical alignment, disposal footprint, drainage connections, boring logs and seasonal groundwater gradients before mapping them.",
        "Retrieve the original USGS old-creek-bed station observations, dates, methods and coordinates; station names alone do not establish groundwater seepage or continuous subsurface flow. Search for post-1998 monitoring and distinguish it from the historical sample sets.",
        "Review original laboratory tables before publishing concentrations, sample identifiers, filtration status or modern standards comparisons. Treat the possible buried-channel migration mechanism as an unverified research question.",
      ],
    },
  },
];
