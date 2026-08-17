import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const dataFiles = [
  "src/data/featured-sites.ts",
  "src/data/historic-cleanup-expansion.ts",
  "src/data/county-expansion-2026.ts",
];
const firstBatch = new Set([
  "tonawanda-coke",
  "republic-steel",
  "hooker-hyde-park-landfill",
  "hooker-102nd-street-landfill",
  "hooker-s-area-landfill",
]);
const completedFeatures = new Set([
  "love-canal",
  "buffalo-river",
  "bethlehem-steel",
  "forest-glen-mobile-home-subdivision",
  "wide-beach-development",
  "former-american-axle-east-delavan",
  "former-hooker-main-plant",
  "niagara-falls-storage-site",
  "niagara-erie-radiological-assessment",
  "griffon-park-landfill",
  "fashion-outlets-sabre-park",
  "tonawanda-plastics",
  "anderson-cleaners-jamestown",
  "batavia-iron-and-metal",
  "dowcraft-south-dow-street",
  "ellison-bronze-company",
  "former-jamestown-city-landfill",
  "special-metals-dunkirk",
  "tennessee-gas-station-229",
  "bengart-memel",
  "diaz-chemical-holley",
  "eighteenmile-creek-superfund",
  "fmc-middleport",
  "olean-well-field-superfund",
  "lehigh-valley-railroad-derailment",
  "remington-rand-north-tonawanda",
  "electro-metallurgical-company",
  "cecos-international",
  "niagara-falls-air-reserve-pfas",
  "durez-occidental-north-tonawanda",
  "west-valley",
  "lake-ontario-ordnance-works-loow",
  "buffalo-color",
  "huntley-generating-station",
  "linde-air-products",
  "donovan-head-start-radiation-site",
  "union-ship-canal-hanna-furnace",
  "tifft-nature-preserve",
  "pierce-arrow-manufacturing-complex",
  "former-trico-plant",
  "polymer-applications",
  "mayville-pfas-site",
  "former-roblin-steel-dunkirk",
  "closed-alumax-extrusions",
  "altech-specialty-steel",
  "former-dunkirk-steam-station",
  "guterl-specialty-steel",
  "former-mill-no-2",
  "times-beach-disposal-site",
  "union-road-gardenville-yard",
  "olin-buffalo-avenue-plant",
  "cwm-model-city",
  "dupont-yerkes",
  "gratwick-riverside-park",
  "peter-cooper-markhams",
  "robert-moses-parkway-south",
  "fmc-dublin-road-landfill",
  "motor-frog-islands-restoration",
  "gill-creek-chemical-corridor",
  "pettit-flume-durez-outfall",
  "jamestown-former-mgp",
  "ashland-1-refinery-site",
  "ashland-2-fusrap-site",
  "upper-mountain-road-radiation-site",
  "pvs-chemicals-buffalo",
  "smokes-creek-bethlehem-corridor",
  "buffalo-gas-light-tonawanda-street",
  "lockport-transit-street-former-mgp",
  "vanadium-corporation-of-america",
  "strawberry-island-restoration",
  "niagara-falls-boulevard-radiation-site",
  "holy-trinity-radiation-site",
  "seaway-site",
  "tonawanda-landfill-fusrap-vicinity",
  "cherry-farm",
  "jamestown-brewery-brownfield",
  "katherine-street-peninsula",
  "standard-portable-mayville",
  "solvent-chemical-niagara-falls",
  "buffalo-harbor-cdf-4",
  "5565-river-road",
  "lyndonville-west-avenue",
  "carroll-landfill",
  "1660-niagara-street-sediment",
  "lancaster-sanitary-landfill",
  "marsh-valve-dunkirk",
  "pelican-manufacturing-jamestown",
  "former-randolph-foundry",
  "frontier-chemical-pendleton",
  "1827-fillmore-former-quarry",
  "exxonmobil-former-buffalo-terminal",
  "olean-refinery-homer-street",
  "batavia-landfill",
  "bliss-laughlin-steel",
  "niagara-sanitation-nash-road-landfill",
  "gateway-lofts-chautauqua-hardware",
  "lasalle-reservoir-quarry-landfill",
  "tam-ceramics-niagara",
  "bell-aerospace-impoundment",
  "west-genesee-former-mgp",
  "niagara-county-refuse",
  "peter-cooper-gowanda",
  "chemical-leaman-tank-lines",
  "depew-village-landfill",
  "southtowns-awtf-ash-landfill",
  "marine-drive-apartments-east-pfas",
  "niagara-falls-storage-site-vicinity-properties",
  "outer-harbor-greenbelt",
  "tennessee-gas-station-224",
  "woodlawn-beach",
  "byron-barrel-site",
  "dunkirk-fly-ash-landfill",
  "dunkirk-former-mgp",
  "dupont-necco-park-landfill",
  "carborundum-globar-site",
  "morgan-materials",
  "michael-heyman-east-ferry",
  "pfohl-brothers-landfill",
  "old-upper-mountain-road-landfill",
  "machias-gravel-pit",
  "buffalo-color-area-e-field",
  "3m-o-cel-o-tonawanda",
  "iroquois-gas-westwood",
  "moench-tanning-gowanda",
  "lapp-insulator-company",
]);
const aerialSites = new Set([
  "republic-steel",
  "bethlehem-steel",
  "tonawanda-coke",
  "hooker-hyde-park-landfill",
  "hooker-102nd-street-landfill",
  "hooker-s-area-landfill",
]);

function parse(file) {
  const absolute = path.join(root, file);
  return ts.createSourceFile(absolute, fs.readFileSync(absolute, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
}

function property(object, name) {
  return object.properties.find((candidate) =>
    ts.isPropertyAssignment(candidate) &&
    ((ts.isIdentifier(candidate.name) && candidate.name.text === name) ||
      (ts.isStringLiteral(candidate.name) && candidate.name.text === name)),
  );
}

function literal(node) {
  return node && (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) ? node.text : "";
}

function strings(node, collected = []) {
  if (!node) return collected;
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) collected.push(node.text);
  ts.forEachChild(node, (child) => strings(child, collected));
  return collected;
}

function arrayLength(object, name) {
  const candidate = property(object, name);
  return candidate && ts.isArrayLiteralExpression(candidate.initializer) ? candidate.initializer.elements.length : 0;
}

function sourceCount(node) {
  if (!node) return 0;
  if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === "siteSources") {
    return node.arguments[2]?.kind === ts.SyntaxKind.FalseKeyword ? 2 : 3;
  }
  if (!ts.isArrayLiteralExpression(node)) return 0;
  return node.elements.reduce((count, element) => count + (ts.isSpreadElement(element) ? sourceCount(element.expression) : 1), 0);
}

function externalStories() {
  const source = parse("src/data/site-stories.ts");
  const result = new Map();
  source.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== "siteStories") continue;
      if (!declaration.initializer || !ts.isObjectLiteralExpression(declaration.initializer)) continue;
      for (const entry of declaration.initializer.properties) {
        if (!ts.isPropertyAssignment(entry) || !ts.isObjectLiteralExpression(entry.initializer)) continue;
        const id = ts.isIdentifier(entry.name) || ts.isStringLiteral(entry.name) ? entry.name.text : "";
        if (id) result.set(id, entry.initializer);
      }
    }
  });
  return result;
}

function collectSites(stories) {
  const result = [];
  for (const file of dataFiles) {
    const source = parse(file);
    function visit(node) {
      if (ts.isObjectLiteralExpression(node)) {
        const id = literal(property(node, "id")?.initializer);
        const name = literal(property(node, "name")?.initializer);
        const category = literal(property(node, "category")?.initializer);
        if (id && name && category) {
          const story = property(node, "story")?.initializer ?? stories.get(id);
          result.push({
            id,
            name,
            category,
            county: literal(property(node, "county")?.initializer),
            summary: literal(property(node, "summary")?.initializer),
            sources: sourceCount(property(node, "sources")?.initializer),
            depth: story && ts.isObjectLiteralExpression(story)
              ? ["background", "timeline", "documentedImpacts", "cleanupAndControls", "presentDay", "researchNotes"]
                .reduce((total, field) => total + arrayLength(story, field), 0)
              : 0,
            text: strings(story).join(" "),
          });
          return;
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  }
  return result;
}

const humanTerms = /\b(worker|workers|resident|residents|family|families|neighborhood|community|school|student|employee|employees|home|homes|evacuat|relocat|displac|activist|organizing|lawsuit|hearing|union|injur|death|died|killed|fatal)\w*/gi;
const eventTerms = /\b(fire|explosion|collapse|spill|release|convict|indict|trial|sentence|strike|shutdown|closure|emergency|evacuat|flood|disaster|removal|demolition)\w*/gi;
const scaleTerms = /\b(superfund|national priorities list|npl|federal|state superfund|great lakes|niagara river|buffalo river|lake erie|lake ontario|drinking water|radiological|radioactive|uranium|plutonium|dioxin|pcb|pfas|benzene)\b/gi;

function countDistinctMatches(text, pattern) {
  return new Set((text.match(pattern) ?? []).map((match) => match.toLowerCase())).size;
}

function score(site) {
  const text = `${site.name} ${site.summary} ${site.text}`;
  const sourceStrength = Math.min(15, site.sources * 4);
  const historyFoundation = Math.min(10, Math.round(site.depth / 2));
  const humanStory = Math.min(22, countDistinctMatches(text, humanTerms) * 3);
  const definingEvent = Math.min(18, countDistinctMatches(text, eventTerms) * 3);
  const regionalConsequence = Math.min(20, countDistinctMatches(text, scaleTerms) * 3);
  const visualEvidence = aerialSites.has(site.id) ? 10 : 0;
  return { sourceStrength, historyFoundation, humanStory, definingEvent, regionalConsequence, visualEvidence };
}

function csv(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

const candidates = collectSites(externalStories())
  .filter((site) => !firstBatch.has(site.id))
  .map((site) => {
    const parts = score(site);
    return { ...site, ...parts, priorityScore: Object.values(parts).reduce((sum, value) => sum + value, 0) };
  })
  .sort((a, b) => b.priorityScore - a.priorityScore || b.humanStory - a.humanStory || a.name.localeCompare(b.name));

const rows = candidates.map((site, index) => {
  const status = completedFeatures.has(site.id) ? "feature complete" : "queued";
  const tier = completedFeatures.has(site.id)
    ? "Complete"
    : index < 25 ? "A - next" : index < 75 ? "B - high" : index < 125 ? "C - develop" : "D - maintain";
  const reasons = [
    site.humanStory >= 12 && "strong human-story signal",
    site.definingEvent >= 9 && "defining event documented",
    site.regionalConsequence >= 12 && "regional consequence",
    site.visualEvidence > 0 && "historical aerials available",
    site.sources >= 3 && "strong source base",
  ].filter(Boolean).join("; ") || "solid baseline; additional primary research needed";
  return { rank: index + 1, ...site, status, tier, reasons };
});

const headers = ["rank", "site_id", "name", "county", "category", "status", "tier", "priority_score", "source_strength", "history_foundation", "human_story", "defining_event", "regional_consequence", "visual_evidence", "reason"];
const csvRows = rows.map((row) => [row.rank, row.id, row.name, row.county, row.category, row.status, row.tier, row.priorityScore, row.sourceStrength, row.historyFoundation, row.humanStory, row.definingEvent, row.regionalConsequence, row.visualEvidence, row.reasons].map(csv).join(","));
fs.writeFileSync(path.join(root, "research/site-history-ranking.csv"), `${headers.join(",")}\n${csvRows.join("\n")}\n`);

const active = rows.filter((row) => row.status === "queued");
const markdown = [
  "# WNYAtlas site-history priority ranking",
  "",
  `Generated ${new Date().toISOString().slice(0, 10)}. This is an editorial work queue, not a hazard or health-risk ranking.`,
  "",
  "## Method",
  "",
  "Each place receives up to 95 points for existing source strength (15), history foundation (10), possible human-story signals (22), defining-event signals (18), regional consequence (20), and available historical aerial evidence (10). Keyword signals identify where deeper primary-source review may be productive; they do not establish causation, severity, or that a publishable human story exists.",
  "",
  `The accompanying CSV ranks all ${rows.length} places outside the first five-site feature batch. ${completedFeatures.size} already have custom flagship chapters and remain in the file as \`feature complete\`; ${active.length} remain in the active queue.`,
  "",
  "## Next 30 active histories",
  "",
  "| Queue | Place | County | Score | Why next |",
  "|---:|---|---|---:|---|",
  ...active.slice(0, 30).map((row, index) => `| ${index + 1} | ${row.name} | ${row.county || "—"} | ${row.priorityScore} | ${row.reasons} |`),
  "",
  "## Editorial rule",
  "",
  "Before publication, every human account must be tied to the correct property and supported by a primary government, court, archival, labor, institutional, or reliable contemporary source. Population concern, an exposure pathway, and individual medical causation must remain separate claims. If the review finds no well-supported human account, none will be added; a technical or landscape history can stand on its own.",
  "",
];
fs.writeFileSync(path.join(root, "research/site-history-ranking.md"), markdown.join("\n"));
console.log(JSON.stringify({ ranked: rows.length, active: active.length, complete: rows.length - active.length, output: "research/site-history-ranking.csv" }));
