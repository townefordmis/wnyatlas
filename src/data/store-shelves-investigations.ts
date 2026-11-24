export const groceryEvidenceLabels = {
  "laboratory-detection": "Confirmed laboratory detection",
  "regulatory-violation": "Confirmed regulatory violation",
  "government-enforcement": "Government enforcement action",
  "human-exposure": "Documented human exposure or illness",
  "filed-litigation": "Filed litigation",
  "settled-litigation": "Settled litigation",
  "judgment": "Dismissed claims or judgment",
  "legal-notice": "Pre-litigation legal notice",
  "emerging-research": "Emerging scientific research",
  "research-lead": "Unverified research lead",
} as const;

export type GroceryEvidence = keyof typeof groceryEvidenceLabels;
export type GrocerySource = { title: string; url: string; supports: string; kind: "government" | "court" | "company" | "testing-publisher" | "party-statement" | "discovery" };
export type GroceryMeasurement = {
  chemical: string; value: number; units: "ppb" | "ppm"; sample: string;
  samplingDate: string | null; testingDate: string | null;
  basis: "government-reported laboratory result" | "reported in complaint; original laboratory report not recovered";
  sourceUrl: string;
};
export type GroceryInvestigation = {
  id: string; title: string; product: string; brand: string | null;
  retailers: string[]; manufacturers: string[]; grower: string | null; origin: string | null;
  contaminants: string[]; evidence: GroceryEvidence[]; status: string; summary: string;
  measurements: GroceryMeasurement[]; regulatoryComparison: string | null;
  healthEvidence: string | null; exposurePathway: string | null;
  filingDate: string | null; jurisdiction: string | null; caseNumber: string | null;
  noticeNumber: string | null; outcomeDate: string | null; settlementAmountUSD: number | null;
  manufacturerResponse: string | null; localAvailability: string; limitations: string;
  nextSteps: string[]; sources: GrocerySource[]; related: { label: string; href: string }[];
  events: { date: string; description: string }[]; lastVerified: string;
};

const unknownLocal = "Unknown — a dated Western New York product listing, receipt or store observation has not been verified.";
const tjLocal = "Retailer presence verified: Trader Joe’s Amherst store, 1565 Niagara Falls Blvd. Availability of this exact product, lot or formulation at that store is unknown.";
const tjStore: GrocerySource = { title: "Trader Joe’s official Amherst store page", url: "https://locations.traderjoes.com/ny/buffalo/536/", kind: "company", supports: "Local retailer presence only; does not establish product stock or contamination." };
const wholeFoodsStore: GrocerySource = { title: "Whole Foods official Buffalo/Amherst store page", url: "https://www.wholefoodsmarket.com/stores/buffalo", kind: "company", supports: "Store at 3139 Sheridan Drive, Amherst; exact product stock and lots unknown." };
const source = (title: string, url: string, supports: string, kind: GrocerySource["kind"] = "government"): GrocerySource => ({ title, url, supports, kind });
const record = (input: Pick<GroceryInvestigation, "id" | "title" | "product" | "contaminants" | "evidence" | "status" | "summary" | "sources" | "limitations"> & Partial<GroceryInvestigation>): GroceryInvestigation => ({
  brand: null, retailers: [], manufacturers: [], grower: null, origin: null,
  measurements: [], regulatoryComparison: null, healthEvidence: null, exposurePathway: null,
  filingDate: null, jurisdiction: null, caseNumber: null, noticeNumber: null, outcomeDate: null,
  settlementAmountUSD: null, manufacturerResponse: null, localAvailability: unknownLocal,
  nextSteps: [], related: [], events: [], lastVerified: "2026-11-24", ...input,
});

const dollarAgreement = "https://ag.ny.gov/sites/default/files/settlements-agreements/dollar-tree-inc-assurance-of-discontinuance-2026.pdf";
const driscollComplaint = "https://truthinadvertising.org/wp-content/uploads/2026/08/Washington-v-Driscolls-complaint.pdf";
const nyComplaint = "https://ag.ny.gov/sites/default/files/court-filings/new-york-v-3m-company-eipd-inc-et-al-complaint-2026_0.pdf";
const tjOrder = "https://www.govinfo.gov/content/pkg/USCOURTS-casd-3_23-cv-00061/pdf/USCOURTS-casd-3_23-cv-00061-1.pdf";

const coreRecords: GroceryInvestigation[] = [
  record({
    id: "wanabana-dollar-tree", title: "Recalled applesauce: New York’s Dollar Tree enforcement",
    product: "WanaBana Apple Cinnamon Fruit Puree pouches", brand: "WanaBana", retailers: ["Dollar Tree", "Family Dollar"],
    manufacturers: ["Austrofood S.A.S."], origin: "Ecuador — finished-pouch manufacturer; individual cinnamon farm unknown",
    contaminants: ["Lead", "Chromium"], evidence: ["laboratory-detection", "government-enforcement", "human-exposure"],
    status: "Assurance of Discontinuance announced January 23, 2026",
    summary: "New York secured $559,250 and recall-process changes. The agreement reports at least 226 three-pack boxes sold after recall notice and 40 elevated-blood-lead cases associated with reported purchases at New York Dollar Tree stores: 17 confirmed and 23 probable links to consumption.",
    measurements: [{ chemical: "Lead", value: 2560, units: "ppb", sample: "One WanaBana pouch collected by NYC health officials from a New York City household; NYS Agriculture and Markets laboratory result reported in the agreement, paragraph 33", samplingDate: "2023-11-06", testingDate: null, basis: "government-reported laboratory result", sourceUrl: dollarAgreement }],
    regulatoryComparison: "The agreement compares this result with FDA’s final January 2025 action level of 10 ppb for covered processed fruits/purees intended for children under two. That guidance is nonbinding, was finalized after the 2023 sampling and is not a universal legal limit or safe-exposure threshold.",
    healthEvidence: "The agreement reports elevated blood lead and distinguishes 17 confirmed from 23 probable consumption links. These are statewide cases; their number is not a Western New York illness count.",
    exposurePathway: "Consumption of recalled cinnamon-containing fruit puree. FDA traced the cinnamon supplier as Negasmart and identified Carlos Aguilera as the processor reported by Ecuadorian authorities as the likely contamination source.",
    outcomeDate: "2026-01-23", settlementAmountUSD: 559250,
    manufacturerResponse: "Dollar Tree neither admits nor denies OAG’s findings; the agreement is not an admission of liability (paragraphs 58 and 73). A manufacturer response specific to this agreement is unknown.",
    localAvailability: "Historical Western New York sale verified: one recalled three-pack box sold October 29, 2023 at 378 Main Street, Arcade, Wyoming County (Family Dollar #5357). The agreement also records 15 three-pack boxes released for online pickup November 5 at 821 Culver Road, Rochester (Dollar Tree #7472). Affected Erie/Niagara stores and local illness counts unknown; this does not describe current inventory.",
    limitations: "226 counts three-pack boxes, not individual pouches. The 2,560 ppb result is one NYC household sample, not a statewide average or a Buffalo store sample. The agreement reports the laboratory result; the original analytical certificate has not been recovered.",
    nextSteps: ["Recover store-level sales and recall records for Erie and Niagara counties.", "Obtain the original sample report, identifiers and quality-control data.", "Trace cinnamon lots through the supplier and manufacturer records."],
    sources: [source("New York Dollar Tree Assurance of Discontinuance", dollarAgreement, "Paragraphs 33–35: sample and cases; 45: Arcade sale; 46: Rochester pickup; 47: three-pack total; 58/73: liability language; 66: monetary relief."), source("New York Attorney General announcement, January 23, 2026", "https://ag.ny.gov/press-release/2026/attorney-general-james-secures-nearly-560000-dollar-tree-selling-recalled-lead", "Announcement date, amount and recall changes."), source("FDA cinnamon applesauce investigation", "https://www.fda.gov/food/outbreaks-foodborne-illness/investigation-elevated-lead-chromium-levels-cinnamon-applesauce-pouches-november-2023", "Manufacturer, supplier and qualified contamination-source account."), source("FDA final lead action-level guidance", "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children", "January 2025 scope, action level and nonbinding status.")],
    related: [{ label: "WNY Atlas lead history", href: "/research/lead" }, { label: "Lead chemical guide", href: "/chemicals/lead" }],
    events: [{ date: "2023-10-29", description: "Dollar Tree received supplier recall notice, according to the agreement." }, { date: "2023-11-06", description: "NYC household sample collected; laboratory analysis date unknown." }, { date: "2026-01-23", description: "OAG announced the agreement; this is not a new 2026 recall." }],
  }),
  record({
    id: "driscolls-washington", title: "Driscoll’s strawberries: what the Washington complaint alleges",
    product: "Conventional strawberries", brand: "Driscoll’s", manufacturers: ["Driscoll’s, Inc. (brand defendant; individual grower unknown)"],
    contaminants: ["Fluorinated pesticides", "PFAS-related compounds"], evidence: ["filed-litigation"],
    status: "Original complaint reviewed; current Washington docket outcome unknown",
    summary: "The complaint cites third-party testing reporting 12 residues, eight described by the plaintiffs as PFAS-related. It challenges marketing and disclosure. The reviewed document establishes allegations, not an agency finding of unsafe berries or an EPA-tolerance violation.",
    filingDate: "2026-07-08", jurisdiction: "U.S. District Court, Northern District of California; removed from Santa Cruz County Superior Court", caseNumber: "5:26-cv-06961-BLF",
    measurements: [["Flonicamid (sum)",32],["Fludioxonil",60],["Flupyradifurone",27],["Fluxapyroxad",26],["Indoxacarb",25],["Novaluron",19],["Tetraconazole",13],["TFNG",35],["Cyprodinil",125],["Pyrimethanil",310],["Quinoxyfen",45],["Tetrahydrophthalimide (THPI)",302]].map(([chemical,value]) => ({ chemical: chemical as string, value: value as number, units: "ppb" as const, sample: "Conventional strawberry sample reported in complaint paragraphs 75–76; Mamavation describes a Southern California purchase", samplingDate: null, testingDate: null, basis: "reported in complaint; original laboratory report not recovered" as const, sourceUrl: driscollComplaint })),
    regulatoryComparison: "Unknown — a matched U.S. EPA tolerance review has not been completed. Foreign-limit comparisons in the complaint are not treated as U.S. violations. A PFAS-related label is not a PFOA/PFOS measurement or a shared toxicity conclusion.",
    healthEvidence: "No product-specific human illness or exposure dose established by the reviewed complaint. Chemical-specific hazard and exposure evidence is still needed.",
    exposurePathway: "Alleged ingestion of residues on conventional strawberries; occupational and neighboring-community exposures are separate questions.",
    manufacturerResponse: "Driscoll’s states on its own food-safety page that its berries are safe to eat and meet applicable regulatory standards. This is the company’s position, not an independent laboratory finding.",
    limitations: "July 8 is the federal docket filing stamp on an attached state complaint, not its original state filing date. Laboratory sampling and analysis dates are unknown; the testing publisher describes submission on May 4, 2026. A separate November 18 Localize order addresses misleading cancer/drift statements and does not resolve the Washington residue-marketing claims.",
    nextSteps: ["Obtain the original analytical report, sample identifiers, methods and detection limits.", "Match residue definitions and commodities to current EPA tolerances.", "Recover the operative amended complaint and a current docket before reporting a present case outcome.", "Verify a dated Western New York product listing and identify individual growers."],
    sources: [source("Washington complaint attached to federal docket", driscollComplaint, "Docket stamp and paragraphs 74–76; PDF page 29 contains the residue list.", "court"), source("Mamavation testing-publisher account", "https://mamavation.com/food/pfas-pesticides-driscolls-strawberries.html", "Publisher’s Southern California sampling account and May 4 submission date; not an original lab certificate.", "testing-publisher"), source("Driscoll’s food-safety response", "https://www.driscolls.com/Article/Driscolls-Strawberries-Safe", "Company’s own safety and regulatory-compliance position.", "company"), source("Driscoll’s v. Localize, November 18, 2026 order", "https://www.govinfo.gov/content/pkg/USCOURTS-cand-3_26-cv-05568/pdf/USCOURTS-cand-3_26-cv-05568-4.pdf", "Separate case: preliminary injunction concerning misleading cancer/drift claims; not a judgment in Washington.", "court"), source("Minnesota pesticide/PFAS classification", "https://www.mda.state.mn.us/environment-sustainability/pfas-pesticide-active-inert-ingredients", "Minnesota’s structural definition; classification depends on the definition."), source("EPA single-fluorinated-carbon pesticide explanation", "https://www.epa.gov/ingredients-used-pesticide-products/pesticides-containing-single-fluorinated-carbon", "EPA’s distinct structural definition and chemical-specific review approach.")],
    related: [{ label: "PFAS chemical guide", href: "/chemicals/pfas" }],
  }),
  record({
    id: "driscolls-farley-lead", title: "Driscoll’s New York litigation: original filing to obtain",
    product: "Strawberries — New York case research lead", brand: "Driscoll’s", contaminants: ["Fluorinated pesticides", "PFAS-related compounds"], evidence: ["research-lead"],
    status: "Original complaint and current docket not recovered",
    summary: "The handoff identifies a second New York case. It remains a research lead here until the original filing is recovered; the California sample results are not assigned to a separate New York product sample.",
    limitations: "Case number, filing date and current status are intentionally unknown in this publication record. A discovery-only docket index is not used as a substitute for the original filing.",
    nextSteps: ["Retrieve the Farley original complaint and current docket from the Eastern District of New York.", "Verify parties, filing date, operative claims and any orders before upgrading this record."],
    sources: [source("Farley docket index — discovery only", "https://dockets.justia.com/docket/new-york/nyedce/2%3A2026cv05950/551696", "Locate primary filings; this record does not assert an independently verified current legal outcome.", "discovery")],
  }),
  record({
    id: "trader-joes-dark-chocolate", title: "Trader Joe’s dark chocolate: summary judgment on disclosure claims",
    product: "Dark chocolate bars addressed in the litigation", brand: "Trader Joe’s", retailers: ["Trader Joe’s"], contaminants: ["Lead", "Cadmium", "Arsenic"], evidence: ["judgment", "filed-litigation"],
    status: "March 27, 2025 summary judgment order reviewed; later appellate history unknown",
    summary: "The court granted Trader Joe’s summary judgment on the remaining New York, Washington and Illinois disclosure claims. The order addressed legal requirements concerning knowledge and omission; it did not certify that chocolate contains no heavy metals.",
    jurisdiction: "U.S. District Court, Southern District of California", caseNumber: "3:23-cv-00061-RBM-DTF", outcomeDate: "2025-03-27",
    manufacturerResponse: "Trader Joe’s argued the potential presence of heavy metals was not exclusively known to it and that Illinois law did not permit the pure-omission claim; see the court’s account of the motion.",
    healthEvidence: "This disclosure ruling does not establish a dose or a product-specific human health effect.",
    localAvailability: tjLocal, limitations: "No concentrations are inferred from a legal ruling. Original product test reports, current local formulations and subsequent appellate history remain unknown.",
    nextSteps: ["Recover product-specific testing, lots and serving assumptions.", "Check subsequent docket/appellate records and current local product listings."],
    sources: [source("March 27, 2025 order, Document 102", tjOrder, "Pages 1–3 define the motion’s scope; page 17 grants summary judgment.", "court"), tjStore],
    related: [{ label: "Cadmium chemical guide", href: "/chemicals/cadmium" }],
  }),
  record({
    id: "nature-valley-glyphosate", title: "Nature Valley: a labeling case and a reported settlement",
    product: "Nature Valley granola products", brand: "Nature Valley", manufacturers: ["General Mills, Inc."], contaminants: ["Glyphosate"], evidence: ["filed-litigation"],
    status: "2017 remand opinion verified; 2018 settlement reported by plaintiffs, original agreement unknown",
    summary: "A federal opinion confirms a challenge to natural-oat labeling based on alleged glyphosate residues and grants remand to D.C. Superior Court. Plaintiffs announced a marketing-language settlement in 2018; its signed agreement has not been recovered for independent review.",
    jurisdiction: "U.S. District Court for the District of Columbia, remanded to D.C. Superior Court", caseNumber: "1:16-cv-01921-ESH",
    limitations: "The handoff’s state case identifier and filing date remain unverified against an original state filing. The federal remand is jurisdictional, not a finding that granola caused cancer. Settlement amount and complete terms unknown.",
    nextSteps: ["Recover the signed state-court settlement and docket.", "Obtain original testing and current product-specific EPA tolerance comparisons."],
    sources: [source("February 22, 2017 federal remand opinion, Document 17", "https://business.cch.com/ald/OrganicConsumersAssociationvGeneralMillsInc2232017.pdf", "Original court opinion mirrored by legal publisher; case caption and jurisdictional disposition.", "court"), source("Plaintiffs’ August 23, 2018 settlement announcement", "https://www.prnewswire.com/news-releases/in-legal-settlement-general-mills-will-remove-100-natural-label-claim-from-product-consumer-groups-announce-300701184.html", "Party statement about removal of challenged natural-oat language; not the signed agreement.", "party-statement")],
  }),
  record({
    id: "new-york-pfas-consumer-products", title: "New York’s PFAS consumer-products complaint",
    product: "PFAS applications in consumer products; no single tested grocery SKU", manufacturers: ["3M Company", "EIDP, Inc.", "The Chemours Company, Inc.", "The Chemours Company FC, LLC", "Corteva, Inc.", "DuPont de Nemours, Inc."], contaminants: ["PFAS"], evidence: ["government-enforcement", "filed-litigation"],
    status: "Filed complaint verified; subsequent merits outcome unknown",
    summary: "New York alleges that the defendants contributed to PFAS pollution through consumer-product applications and seeks cleanup and financial relief. The complaint includes a Chemours subsidiary omitted from the handoff’s short defendant list.",
    filingDate: "2026-07-09", jurisdiction: "New York Supreme Court, Albany County", caseNumber: "907879-26",
    localAvailability: "Statewide New York environmental and consumer-protection action. It does not establish a tested Western New York grocery product or retailer-specific exposure.",
    limitations: "Allegations and requested relief are not a judgment, settlement or confirmed violation. A chemical manufacturer named here is not automatically the manufacturer of any other product in this register.",
    nextSteps: ["Review answers, motions and any later orders in NYSCEF.", "Trace only documented product or supplier relationships; keep local PFAS detections separate from source attribution."],
    sources: [source("New York v. 3M et al., filed complaint", nyComplaint, "Stamped July 9, 2026, NYSCEF Document 2; caption, parties and index number."), source("New York Attorney General announcement", "https://ag.ny.gov/press-release/2026/attorney-general-james-sues-some-nations-largest-chemical-companies-over-toxic", "Date, allegations and requested relief.")],
    related: [{ label: "The Teflon Legacy", href: "/research/pollution-on-store-shelves/teflon-legacy" }, { label: "PFAS chemical guide", href: "/chemicals/pfas" }, { label: "Sinclair: documented PFAS findings, source unresolved", href: "/sites/sinclair-refinery-wellsville" }],
  }),
];

type NoticeInput = { number: string; date: string; product: string; brand: string; retailers: string[]; contaminants: string[]; namedParties: string; withdrawn?: boolean; complaint?: boolean; correction?: string };
const notices: NoticeInput[] = [
  { number: "2026-04351", date: "2026-09-11", product: "Marketside Mussels Fully Cooked", brand: "Marketside", retailers: ["Walmart"], contaminants: ["Lead", "Cadmium"], namedParties: "Walmart Inc.", withdrawn: true },
  { number: "2026-04349", date: "2026-09-11", product: "Great Value Raw Argentine Red Shrimp", brand: "Great Value", retailers: ["Walmart"], contaminants: ["Cadmium"], namedParties: "Walmart Inc." },
  { number: "2026-04348", date: "2026-09-11", product: "Trader Joe’s Dark Chocolate Almond Butter Filled Pretzel Nuggets", brand: "Trader Joe’s", retailers: ["Trader Joe’s"], contaminants: ["Ochratoxin A"], namedParties: "Trader Joe’s Company" },
  { number: "2026-05120", date: "2026-10-30", product: "Trader Joe’s Baby Pak Choi", brand: "Trader Joe’s", retailers: ["Trader Joe’s"], contaminants: ["Cadmium"], namedParties: "Trader Joe’s Company" },
  { number: "2026-00606", date: "2026-02-06", product: "Trader Joe’s Spinach Tortellini", brand: "Trader Joe’s", retailers: ["Trader Joe’s"], contaminants: ["Lead", "Cadmium"], namedParties: "Trader Joe’s Company; later complaint also names Nuovo Pasta Productions, Ltd.", complaint: true },
  { number: "2026-03891", date: "2026-08-07", product: "Trader Joe’s Peanut Butter with Honey", brand: "Trader Joe’s", retailers: ["Trader Joe’s"], contaminants: ["Aflatoxins"], namedParties: "Trader Joe’s Company", correction: "The handoff attached this identifier to crunchy almond butter; the official notice identifies peanut butter with honey." },
  { number: "2026-03890", date: "2026-08-07", product: "Simple Truth Organic Baby Kale", brand: "Simple Truth", retailers: ["Kroger", "Ralphs"], contaminants: ["Cadmium"], namedParties: "The Kroger Co.; Ralphs Grocery Company", correction: "The handoff attached this identifier to Trader Joe’s peanut butter; the official notice concerns Kroger/Ralphs baby kale. No Trader Joe’s allegation is assigned to this identifier." },
  { number: "2026-04347", date: "2026-09-11", product: "365 by Whole Foods Market Organic Creamy Almond Butter", brand: "365 by Whole Foods Market", retailers: ["Whole Foods Market"], contaminants: ["Aflatoxins"], namedParties: "Mrs. Gooch’s Natural Food Markets, Inc.; Amazon.com Services LLC" },
  { number: "2026-04352", date: "2026-09-11", product: "Manitoba Harvest Hemp Yeah Superseed Granola Blueberry", brand: "Manitoba Harvest", retailers: ["Amazon.com"], contaminants: ["Lead"], namedParties: "Fresh Hemp Foods Ltd.; Manitoba Harvest USA, LLC; Amazon.com Services LLC" },
  { number: "2026-04350", date: "2026-09-11", product: "Sunwarrior Protein Warrior Blend Vanilla Flavor", brand: "Sunwarrior", retailers: ["Raley’s"], contaminants: ["Lead"], namedParties: "Sunwarrior Ventures, LLC; Growve Group, LLC; Raley’s" },
];

const noticeRecords = notices.map(item => {
  const detailUrl = `https://oag.ca.gov/prop65/60-day-notice-${item.number}`;
  const noticeUrl = `https://oag.ca.gov/system/files/prop65/notices/${item.number}.pdf`;
  return record({
    id: `notice-${item.number}`, title: item.product,
    product: item.product, brand: item.brand, retailers: item.retailers, contaminants: item.contaminants,
    evidence: item.complaint ? ["legal-notice", "filed-litigation"] : ["legal-notice"],
    status: item.withdrawn ? "Notice withdrawn October 20, 2026" : item.complaint ? "Civil complaint filed October 15, 2026; outcome unknown" : "60-day notice verified; subsequent outcome unknown",
    summary: item.withdrawn ? "The official record includes the original warning allegation and an express withdrawal. It must not be presented as an active, unqualified notice." : item.complaint ? "The official notice record now links a filed failure-to-warn complaint against Nuovo Pasta Productions and Trader Joe’s; no merits outcome has been verified." : `A private noticing party alleges a Proposition 65 warning issue involving ${item.contaminants.join(" and ")}. The original notice is verified; laboratory concentration and a confirmed violation are not established here.`,
    manufacturers: item.complaint ? ["Nuovo Pasta Productions, Ltd. (named defendant; product relationship alleged)"] : [],
    filingDate: item.complaint ? "2026-10-15" : null,
    jurisdiction: item.complaint ? "San Francisco Superior Court, California" : "California Proposition 65 notice process; no court case verified",
    caseNumber: item.complaint ? "CGC-26-641988" : null,
    noticeNumber: item.number, outcomeDate: item.withdrawn ? "2026-10-20" : null,
    exposurePathway: "Alleged ingestion associated with the named product; dose and serving assumptions unknown.",
    localAvailability: item.retailers.includes("Trader Joe’s") ? tjLocal : item.retailers.includes("Whole Foods Market") ? "Retailer presence verified: Whole Foods, 3139 Sheridan Drive, Amherst. Availability of the named almond butter or tested lot at this store is unknown." : unknownLocal,
    limitations: `Named parties: ${item.namedParties}. A notice is a private pre-litigation allegation, not an FDA recall, agency laboratory confirmation or court finding. Unknown measurements are not zeros. ${item.correction || "The brand is not assumed to identify the actual manufacturer or grower."}`,
    nextSteps: ["Recover original laboratory reports, lot identifiers, serving assumptions and exposure calculations.", "Check later complaints, settlements, withdrawals or judgments before describing current legal status.", "Verify dated Western New York availability and the actual manufacturer."],
    sources: [source(`California DOJ record ${item.number}`, detailUrl, "Official product, chemical, named parties, filing date and linked procedural documents."), source(`Original notice ${item.number}`, noticeUrl, "Private notice allegations and certificate; not an agency finding."), ...(item.withdrawn ? [source("Withdrawal letter, October 20, 2026", "https://oag.ca.gov/system/files/prop65/withdrawals/2026-04351W2799.pdf", "Express withdrawal of notice 2026-04351; see linked official record.")] : []), ...(item.complaint ? [source("Civil complaint filed October 15, 2026", "https://oag.ca.gov/system/files/prop65/complaints/2026-00606C1325.pdf", "Caption, parties, case number and failure-to-warn allegations.", "court")] : []), ...(item.retailers.includes("Trader Joe’s") ? [tjStore] : item.retailers.includes("Whole Foods Market") ? [wholeFoodsStore] : [])],
    events: [{ date: item.date, description: "60-day notice filed; not a lawsuit filing date." }, ...(item.withdrawn ? [{ date: "2026-10-20", description: "Noticing party withdrew the notice." }] : []), ...(item.complaint ? [{ date: "2026-10-15", description: "Civil complaint filed according to official DOJ attachment." }] : [])],
  });
});

export const groceryInvestigations: GroceryInvestigation[] = [...coreRecords, ...noticeRecords];

export type GroceryFilters = { query: string; contaminant: string; retailer: string; manufacturer: string; product: string; evidence: string };
export const emptyGroceryFilters: GroceryFilters = { query: "", contaminant: "", retailer: "", manufacturer: "", product: "", evidence: "" };

export function filterGroceryInvestigations(records: GroceryInvestigation[], filters: GroceryFilters) {
  const terms = filters.query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return records.filter(item => {
    const text = JSON.stringify(item).toLocaleLowerCase();
    return terms.every(term => text.includes(term)) &&
      (!filters.contaminant || item.contaminants.includes(filters.contaminant)) &&
      (!filters.retailer || item.retailers.includes(filters.retailer)) &&
      (!filters.manufacturer || (filters.manufacturer === "unknown" ? item.manufacturers.length === 0 : item.manufacturers.includes(filters.manufacturer))) &&
      (!filters.product || item.product === filters.product) &&
      (!filters.evidence || item.evidence.includes(filters.evidence as GroceryEvidence));
  });
}
