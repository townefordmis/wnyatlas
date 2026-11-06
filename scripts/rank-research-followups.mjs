import fs from "node:fs";
import path from "node:path";
import Module, { createRequire } from "node:module";
import ts from "typescript";

const root = process.cwd();
const require = createRequire(import.meta.url);
const readJson = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const config = readJson("research/follow-up-priorities.config.json");

// Resolve the same aggregate records the app uses, including imported additions
// and externally stored stories. Regex-only audits miss some of these modules.
const originalResolve = Module._resolveFilename;
const originalTsLoader = require.extensions[".ts"];
let atlas;
let lead;
let radiological;
let amherst;
let schools;
try {
  Module._resolveFilename = function (request, parent, ...rest) {
    const target = request.startsWith("@/")
      ? path.join(root, "src", request.slice(2))
      : request;
    return originalResolve.call(this, target, parent, ...rest);
  };
  require.extensions[".ts"] = (module, file) => {
    const result = ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        esModuleInterop: true,
      },
    });
    module._compile(result.outputText, file);
  };
  atlas = require(path.join(root, "src/data/featured-sites.ts")).featuredSites;
  lead = require(path.join(root, "src/data/lead-investigation.ts"));
  radiological = require(path.join(root, "src/data/radiological-investigation.ts"));
  amherst = require(path.join(root, "src/data/amherst-research-queue.ts"));
  schools = require(path.join(root, "src/data/buffalo-school-research.ts"));
} finally {
  Module._resolveFilename = originalResolve;
  if (originalTsLoader) require.extensions[".ts"] = originalTsLoader;
  else delete require.extensions[".ts"];
}

const priorities = config.items.map((item, index) => ({ rank: index + 1, ...item }));
const byId = new Map(priorities.map((item) => [item.id, item]));
const sitesById = new Map(atlas.map((site) => [site.id, site]));
const fallback = priorities.filter((item) => item.fallback);
if (fallback.length !== 1) throw new Error("Expected exactly one routine-maintenance group");
if (byId.size !== priorities.length) throw new Error("Duplicate priority ID");
if (sitesById.size !== atlas.length) throw new Error("Duplicate Atlas site ID");
for (const [index, item] of priorities.entries()) {
  if (!config.tiers[item.tier]) throw new Error(`Unknown tier: ${item.id}`);
  if (index && item.tier < priorities[index - 1].tier) throw new Error("Tier order must be monotonic");
  for (const id of item.siteIds) {
    if (!sitesById.has(id)) throw new Error(`Unknown site ${id} in ${item.id}`);
  }
  for (const file of item.references) {
    if (!fs.existsSync(path.join(root, file))) throw new Error(`Missing reference: ${file}`);
  }
}

const membershipsForSite = (id) => {
  const matches = priorities.filter((item) => item.siteIds.includes(id));
  return matches.length ? matches : fallback;
};
const noteKind = (text) =>
  /^(do not|keep |separate |treat |preserve |map marker:|map location:|marker:|the marker |the map uses|publish .*only)/i.test(text)
    ? "editorial constraint or location qualification"
    : "follow-up or source question";

const sourceFilesBySite = new Map();
for (const file of fs.readdirSync(path.join(root, "src/data")).filter((name) => name.endsWith(".ts"))) {
  const relative = `src/data/${file}`;
  const source = ts.createSourceFile(relative, fs.readFileSync(path.join(root, relative), "utf8"), ts.ScriptTarget.Latest, true);
  const add = (id) => {
    if (!sitesById.has(id)) return;
    const files = sourceFilesBySite.get(id) ?? new Set();
    files.add(relative);
    sourceFilesBySite.set(id, files);
  };
  const visit = (node) => {
    if (ts.isObjectLiteralExpression(node)) {
      const id = node.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(source) === "id");
      if (id && ts.isStringLiteral(id.initializer)) add(id.initializer.text);
      if (ts.isPropertyAssignment(node.parent) && ts.isStringLiteral(node.parent.name)) add(node.parent.name.text);
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
}

const siteRegister = atlas.map((site) => {
  const memberships = membershipsForSite(site.id);
  return {
    id: site.id,
    name: site.name,
    county: site.county,
    evidenceStatus: site.evidenceStatus,
    publicationStatus: "Already in the Atlas; rank concerns remaining follow-up",
    lastReviewed: site.story?.lastReviewed ?? null,
    primaryPriority: memberships[0].id,
    primaryRank: memberships[0].rank,
    allPriorities: memberships.map((item) => item.id),
    sourceFiles: [...(sourceFilesBySite.get(site.id) ?? [])],
    notes: (site.story?.researchNotes ?? []).map((text, index) => ({ index: index + 1, kind: noteKind(text), text })),
    sources: site.sources ?? [],
  };
}).sort((a, b) => a.primaryRank - b.primaryRank || a.name.localeCompare(b.name));

const leadRows = [...lead.leadPlaceRecords, ...lead.historicalLeadRecords];
const leadIds = new Set(leadRows.map((row) => row.id));
for (const item of priorities) {
  for (const id of item.leadIds ?? []) if (!leadIds.has(id)) throw new Error(`Unknown lead ID: ${id}`);
}
const leadRegister = leadRows.map((row) => {
  const priority = priorities.find((item) => item.leadIds?.includes(row.id))
    ?? (row.siteId ? membershipsForSite(row.siteId)[0] : byId.get("thin-lead-identities"));
  return { ...row, priorityId: priority.id, rank: priority.rank, sourceFile: "src/data/lead-investigation.ts" };
});

// These are campus-level unresolved decisions, separate from the cleanup-site
// records in the two CSV reviews. Already included campuses are not new leads.
const heldCampuses = [
  ["Dr. Lydia T. Wright School", "106 Appenheimer Street"],
  ["Enterprise Charter School", "275 Oak Street"],
  ["Emerson School of Hospitality", "70 West Chippewa Street"],
  ["Charter School for Applied Technologies", "2245 and 2303 Kenmore Avenue"],
  ["Former Buffalo School 26 / Buffalo China relationship", "Address and historical status unresolved"],
];
const screenedOutCampuses = [
  ["WNY Maritime Charter School", "2219 South Park Avenue"],
  ["WNY Maritime Charter Middle School", "102 Buffum Street"],
  ["Health Sciences Charter School", "1140 Ellicott Street"],
  ["Reach Academy Charter School", "115 Ash Street"],
  ["Reach Academy middle-school location", "266 Genesee Street"],
  ["Buffalo Elementary School of Technology", "414 South Division Street"],
  ["Bennett Park Montessori", "342 Clinton Street"],
  ...["24 Agassiz Circle", "100 Poplar Avenue", "335 Doat Street", "89 Clare Street"].map((address) => ["Buffalo Academy of Science location", address]),
];
const schoolRegister = [
  ...heldCampuses.map(([name, address]) => ({ name, address, priorityId: "school-parcel-verification", status: "Parcel/document decision pending in stored queue" })),
  ...screenedOutCampuses.map(([name, address]) => ({ name, address, priorityId: "school-negative-screen", status: "No qualifying relationship in stored screen; hold for specific new evidence" })),
].map((row) => ({ ...row, rank: byId.get(row.priorityId).rank, sourceFile: "research/school-candidate-queue-review.md" }));

function parseCsv(file) {
  const text = fs.readFileSync(path.join(root, file), "utf8").replace(/^\uFEFF/, "");
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') {
      if (quoted && text[i + 1] === '"') { field += '"'; i++; }
      else quoted = !quoted;
    } else if (char === "," && !quoted) { row.push(field); field = ""; }
    else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      if (row.some(Boolean)) rows.push(row);
      row = []; field = "";
    } else field += char;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  if (quoted) throw new Error(`Unclosed CSV quote in ${file}`);
  const headers = rows.shift();
  return rows.map((values) => {
    if (values.length !== headers.length) throw new Error(`CSV width mismatch in ${file}`);
    return Object.fromEntries(headers.map((key, index) => [key, values[index]]));
  });
}

const sourceReviewFile = "research/schools-nearby-site-source-review.csv";
const editorialReviewFile = "research/schools-nearby-site-editorial-review.csv";
const cleanupSourceRows = parseCsv(sourceReviewFile);
const cleanupEditorialRows = parseCsv(editorialReviewFile);
const codeToSites = new Map();
const linkCode = (code, siteId) => {
  const ids = codeToSites.get(code.toUpperCase()) ?? new Set();
  if (sitesById.has(siteId)) ids.add(siteId);
  codeToSites.set(code.toUpperCase(), ids);
};
for (const [code, siteId] of Object.entries(schools.existingAtlasSiteByCleanupCode)) linkCode(code, siteId);
const relatedGroupAliases = {
  "pierce-arrow-complex": "pierce-arrow-manufacturing-complex",
  "main-hertel-corridor": "main-hertel-the-rails",
  "buffalo-service-station-mgp": "west-genesee-former-mgp",
  "buffalo-river-dredging": "buffalo-river",
  "lasalle-reservoir": "lasalle-reservoir-quarry-landfill",
};
for (const [code, group] of Object.entries(schools.cleanupStoryGroupByCode)) {
  if (sitesById.has(group)) linkCode(code, group);
  else if (relatedGroupAliases[group]) linkCode(code, relatedGroupAliases[group]);
}
for (const site of atlas) {
  for (const source of site.sources ?? []) {
    for (const match of source.url.matchAll(/(?:DecDocs\/|SiteCode=)([A-Z]?\d{6}[A-Z]?)/gi)) linkCode(match[1], site.id);
  }
}
const documentedCampusRegister = Object.entries(schools.documentedCampusHistory).map(([address, history]) => ({ address, ...history, priorityId: "documented-campus-followups", sourceFile: "src/data/buffalo-school-research.ts" }));
const directSchoolNarrativeCodes = new Set(Object.keys(schools.nearbySiteHistoryByCode));
for (const history of documentedCampusRegister) {
  const urls = [history.sourceUrl, ...(history.additionalSources ?? []).map((source) => source.url)];
  for (const url of urls) for (const match of url.matchAll(/(?:DecDocs\/|SiteCode=)([A-Z]?\d{6}[A-Z]?)/gi)) directSchoolNarrativeCodes.add(match[1].toUpperCase());
}
const schoolNarrativeGroups = new Set([...directSchoolNarrativeCodes].map((code) => schools.cleanupStoryGroupByCode[code]).filter(Boolean));
const cleanupCandidateRegister = cleanupEditorialRows.map((row) => {
  const existingAtlasIds = [...(codeToSites.get(row.site_code.toUpperCase()) ?? [])];
  const directSchoolNarrative = directSchoolNarrativeCodes.has(row.site_code);
  const relatedSchoolNarrative = schoolNarrativeGroups.has(schools.cleanupStoryGroupByCode[row.site_code]);
  const schoolNarrativePresent = directSchoolNarrative || relatedSchoolNarrative;
  const currentlyHeld = schools.heldCleanupCodes.has(row.site_code);
  const weakSource = row.source_strength === "insufficient_for_launch";
  const priorityId = currentlyHeld || weakSource
    ? "school-cleanup-holds"
    : existingAtlasIds.length ? membershipsForSite(existingAtlasIds[0])[0].id
      : schoolNarrativePresent ? "routine-existing-pages" : "unmapped-dec-candidates";
  const reviewBand = currentlyHeld ? 4 : weakSource ? 3 : schoolNarrativePresent ? 2 : row.source_strength === "strong_primary_record" ? 0 : 1;
  return {
    ...row,
    sourceReview: cleanupSourceRows.find((source) => source.site_code === row.site_code) ?? null,
    existingAtlasIds,
    schoolNarrativePresent,
    schoolNarrativeCoverage: directSchoolNarrative ? "Direct code-specific or campus-source narrative" : relatedSchoolNarrative ? "Related complex narrative; exact parcel findings still require verification" : "No narrative match found",
    currentlyHeld,
    reviewBand,
    coverageMatch: existingAtlasIds.length ? "Related Atlas coverage found; confirm exact parcel and scope" : "No code match found; confirm aliases before calling this a new site",
    priorityId,
    currentDisposition: currentlyHeld ? "Held by the current application code; supersedes older include wording in the CSV"
      : weakSource ? "Primary support remains insufficient in the stored review"
        : schoolNarrativePresent ? "Direct or related-complex school narrative already present; review exact parcel scope before another page"
          : "Review distinct story and aliases before a proposed addition",
    sourceFiles: [editorialReviewFile, sourceReviewFile],
  };
}).sort((a, b) => a.reviewBand - b.reviewBand || a.site_name.localeCompare(b.site_name));
cleanupCandidateRegister.forEach((row, index) => { row.candidateReviewOrder = index + 1; });

const reviewLedgers = [];
const openKey = /^(openQuestions|remainingQueue|nextRecords|notEstablished|unresolved|nextEvidence|publicationGate|policyConflict|existingCoordinateReviewQueue|researchAttemptsAndLimits|researchGaps|healthLimits|limits)$/;
for (const file of fs.readdirSync(path.join(root, "research")).filter((name) => /review.*\.json$/.test(name) && !name.startsWith("editorial"))) {
  const relative = `research/${file}`;
  const scan = (value, locator = "") => {
    if (!value || typeof value !== "object") return;
    for (const [key, child] of Object.entries(value)) {
      const pointer = `${locator}/${key}`;
      if (openKey.test(key)) reviewLedgers.push({ sourceFile: relative, pointer, value: child });
      else scan(child, pointer);
    }
  };
  scan(readJson(relative));
}

const amherstRegister = amherst.amherstResearchQueue.map((row) => {
  const priorityId = row.id === "morris-reimann-wrecking" ? "morris-reimann" : "army-reserve-listing";
  return { ...row, priorityId, rank: byId.get(priorityId).rank, sourceFile: "src/data/amherst-research-queue.ts" };
});
const radiologicalRegister = {
  producersAndReportedLocations: radiological.radiologicalProducers,
  testimony: radiological.probeTestimonyRecords,
  corroborationFindings: radiological.probeCorroborationFindings,
  followUps: radiological.latestRadiologicalFollowUps,
  documents: radiological.radiologicalDocuments,
  historicalReferencePoints: radiological.historicalRadiologicalRecords.map(({ id, name, disposition }) => ({ id, name, disposition })),
  treatment: "Existing evidence and attributed leads, not one new investigation ticket per point or witness. Use the named radiological workstreams; historical points and completed removals are not automatically active contamination cases.",
  sourceFile: "src/data/radiological-investigation.ts",
};

const summary = {
  rankedWorkstreams: priorities.length,
  tierCounts: Object.fromEntries(Object.keys(config.tiers).map((tier) => [tier, priorities.filter((item) => item.tier === Number(tier)).length])),
  atlasSites: siteRegister.length,
  sourceResearchNotes: siteRegister.reduce((total, site) => total + site.notes.length, 0),
  siteNotesClassifiedAsFollowUps: siteRegister.reduce((total, site) => total + site.notes.filter((note) => note.kind === "follow-up or source question").length, 0),
  atlasResearchInProgress: atlas.filter((site) => site.evidenceStatus === "research-in-progress").length,
  atlasResearchLeads: atlas.filter((site) => site.evidenceStatus === "research-lead").length,
  leadInvestigationRecords: leadRegister.length,
  heldOrScreenedOutCampusGroups: schoolRegister.length,
  documentedCampusHistories: documentedCampusRegister.length,
  cleanupCandidateCodes: cleanupCandidateRegister.length,
  cleanupCandidatesWithoutAtlasCodeMatch: cleanupCandidateRegister.filter((row) => !row.existingAtlasIds.length).length,
  cleanupCandidatesWithSchoolNarrative: cleanupCandidateRegister.filter((row) => row.schoolNarrativePresent).length,
  cleanupCandidatesExplicitlyHeld: cleanupCandidateRegister.filter((row) => row.currentlyHeld).length,
  cleanupCandidatesForFreshStoryReview: cleanupCandidateRegister.filter((row) => row.priorityId === "unmapped-dec-candidates").length,
  amherstLeads: amherstRegister.length,
  historicalRadiologicalReferencePoints: radiologicalRegister.historicalReferencePoints.length,
  reviewLedgerSections: reviewLedgers.length,
};
const register = {
  reviewed: config.reviewed,
  basis: config.basis,
  summary,
  priorities,
  siteRegister,
  leadRegister,
  schoolRegister,
  documentedCampusRegister,
  cleanupCandidateRegister,
  amherstRegister,
  radiologicalRegister,
  reviewLedgers,
  exclusions: [
    "Completed additions and custom history features are not active tasks merely because an old queue called them candidates.",
    "Location notes, evidence limits, historical points and source documents are preserved as context, not counted as independent investigations.",
    "The paused Amherst GIS experience stays paused. Software infrastructure and speculative product features in ROADMAP.md are outside this research-evidence ranking.",
  ],
};

const escape = (value) => String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
const localLink = (file) => file.startsWith("research/") ? `./${file.slice(9)}` : `../${file}`;
const lines = [
  "# WNY Atlas research follow up priorities", "",
  `Reviewed ${config.reviewed}. Start with the first twelve workstreams, choosing two or three at a time. The highest return comes from answering a specific open question with identifiable records, then updating the existing Atlas story or adding a genuinely distinct place.`, "",
  config.basis, "",
  "The order weighs reader value, strength of the starting evidence, realistic access to the next record, added knowledge beyond existing coverage, and effort. It is an editorial judgment rather than a scientific score. Lower rank means lower expected return from the next research session, not lower importance of a community or less contamination.", "",
  `This consolidates **${summary.rankedWorkstreams} workstreams**, all **${summary.atlasSites} mapped records and ${summary.sourceResearchNotes} research notes**, **${summary.leadInvestigationRecords} lead-investigation records**, **${summary.cleanupCandidateCodes} cleanup-code candidates from the school reviews**, **${summary.heldOrScreenedOutCampusGroups} held or screened-out campus groups**, the **${summary.amherstLeads} Amherst leads**, historical radiological evidence, and the dated source-review backlogs. These counts overlap and must not be added into a count of sites or investigations.`, "",
  "## How to use the order", "",
  "For a low-effort session, check Industrial Welding agency follow-up, Necco Park's named milestone, Exchange Street completion records, or the Buffalo lead-water policy conflict. For deeper work, choose Bell/Olin waste tracing or a small extraction batch from the 1979 inventory. If the named record is unavailable, record the gap and move on; do not repeatedly reread the same plan.", "",
  "An existing public entry can still rank highly because an unanswered outcome matters. Publication is not completion of research. Conversely, 619 Exchange, Curtiss, Main Street, River Road, Industrial Welding and Durez are already added; their remaining tasks concern results or status, not creating those pages again.", "",
  "## Ranked workstreams", "",
];
for (const tier of Object.keys(config.tiers).map(Number)) {
  lines.push(`### ${config.tiers[tier]}`, "", "| Rank | Follow-up | Why it earns this place | First useful action | Effort |", "|---:|---|---|---|---|");
  for (const item of priorities.filter((row) => row.tier === tier)) {
    const refs = item.references.map((file) => `[${path.basename(file)}](${localLink(file)})`).join("; ");
    lines.push(`| ${item.rank} | **${escape(item.title)}** — ${refs} | ${escape(item.why)} | ${escape(item.nextAction)} | ${escape(item.effort)} |`);
  }
  lines.push("");
}
lines.push(
  "## Full register and coverage", "",
  "The [complete JSON register](./research-follow-up-register.json) preserves every site's original research notes and citations, lead records, campus decisions, cleanup-code crosswalks, radiological evidence, and source-review open questions. The [editable priority configuration](./follow-up-priorities.config.json) controls the order. Run `node scripts/rank-research-followups.mjs` after changing it or updating the underlying records.", "",
  `The school cleanup-code crosswalk finds **${summary.cleanupCandidatesWithoutAtlasCodeMatch} records without a current Atlas code match**. This is a deduplication lead, not proof of a new property, an unpublished story, or a school exposure. Related source folders can refer to neighboring or off-site land.`, "",
  `Across the ${summary.cleanupCandidateCodes} reviewed codes, ${summary.cleanupCandidatesWithSchoolNarrative} already have direct or related-complex narrative records in the school history data and ${summary.cleanupCandidatesExplicitlyHeld} are explicitly held by the current application. Only ${summary.cleanupCandidatesForFreshStoryReview} land in the fresh-story review batch after this cross-check; even those require alias and footprint verification. Records with strong primary support and no matched narrative come first; existing narratives, weak files and explicit holds follow.`, "",
  "Older research-completeness and site-history rankings remain useful for editing depth and feature planning. They do not override this follow-up order: a missing image or short article is not automatically a better investigation than an active, well-sourced question.", "",
  `The full app aggregate contains ${summary.atlasResearchInProgress} records labeled research-in-progress. Older completeness reports scan a smaller module list, so their totals may differ. This register follows the aggregate actually used by the app.`, "",
  "### Published site crosswalk", "",
  "Every mapped record is listed below. The first rank is its highest-priority matching workstream; secondary memberships and the complete original notes are retained in the JSON register. Within one workstream, alphabetical order does not imply a hazard or urgency ranking. Routine-maintenance placement is a default, not a finding that all source questions have been resolved.", "",
  "| Workstream rank | Existing Atlas record | County | Stored evidence stage | Source notes |", "|---:|---|---|---|---:|",
);
for (const site of siteRegister) lines.push(`| ${site.primaryRank} | [${escape(site.name)}](https://www.wnyatlas.com/sites/${site.id}) | ${site.county} | ${site.evidenceStatus} | ${site.notes.length} |`);
lines.push("", "### Lead records outside the mapped-site crosswalk", "", "| Workstream rank | Lead record | Stored status |", "|---:|---|---|");
for (const row of leadRegister.filter((row) => !row.siteId).sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name))) lines.push(`| ${row.rank} | ${escape(row.name)} | ${escape(row.status)} |`);
lines.push("", "### Held school groups", "", "| Workstream rank | Campus or historical-school question | Location |", "|---:|---|---|");
for (const row of schoolRegister) lines.push(`| ${row.rank} | ${escape(row.name)} | ${escape(row.address)} |`);
lines.push("", "### Cleanup records without an Atlas code match", "", "Order within this batch reflects available source support and existing narrative coverage, not environmental severity. Confirm aliases, parcels and the original records before a new entry. Existing school narratives and current holds take precedence over stale pending-review labels.", "", "| Review order | Code | Stored candidate name | Current research disposition |", "|---:|---|---|---|");
for (const [index, row] of cleanupCandidateRegister.filter((row) => !row.existingAtlasIds.length).entries()) lines.push(`| ${index + 1} | ${row.site_code} | ${escape(row.site_name)} | ${escape(row.currentDisposition)} |`);
lines.push("", "## When to change a priority", "",
  "Move a topic up when a new primary record answers the question, a completed investigation or remedy changes the public account, a reliable boundary resolves a misleading map, or one source unlocks several sites. Move it down when the work duplicates an existing entry, repeatedly returns the same undated lead, depends only on proximity, or lacks an identifiable next record. Keep speculative source and health claims on hold until their evidence changes.", "");

fs.writeFileSync(path.join(root, "research/research-follow-up-register.json"), `${JSON.stringify(register, null, 2)}\n`);
fs.writeFileSync(path.join(root, "research/follow-up-priorities.md"), lines.join("\n"));
console.log(JSON.stringify(summary, null, 2));
