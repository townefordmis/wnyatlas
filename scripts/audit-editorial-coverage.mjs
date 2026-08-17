import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const dataFiles = [
  "src/data/featured-sites.ts",
  "src/data/historic-cleanup-expansion.ts",
  "src/data/county-expansion-2026.ts",
];
const storyFields = [
  "background",
  "timeline",
  "documentedImpacts",
  "cleanupAndControls",
  "presentDay",
  "present",
  "researchNotes",
  "note",
];

function parse(file) {
  const absolute = path.join(root, file);
  return ts.createSourceFile(
    absolute,
    fs.readFileSync(absolute, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
}

function property(object, name) {
  return object.properties.find(
    (candidate) =>
      ts.isPropertyAssignment(candidate) &&
      ((ts.isIdentifier(candidate.name) && candidate.name.text === name) ||
        (ts.isStringLiteral(candidate.name) && candidate.name.text === name)),
  );
}

function literal(node) {
  return node &&
    (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node))
    ? node.text
    : "";
}

function unwrapObject(node) {
  if (ts.isObjectLiteralExpression(node)) return node;
  if (ts.isCallExpression(node) && node.arguments[0] && ts.isObjectLiteralExpression(node.arguments[0])) {
    return node.arguments[0];
  }
  return undefined;
}

function strings(node, collected = []) {
  if (!node) return collected;
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    collected.push(node.text);
  }
  ts.forEachChild(node, (child) => {
    strings(child, collected);
  });
  return collected;
}

function fieldStrings(story, name) {
  return strings(property(story, name)?.initializer);
}

function sourceCount(node) {
  if (!node) return 0;
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === "siteSources"
  ) {
    return node.arguments[2]?.kind === ts.SyntaxKind.FalseKeyword ? 2 : 3;
  }
  if (!ts.isArrayLiteralExpression(node)) return 0;
  return node.elements.reduce(
    (count, element) =>
      count + (ts.isSpreadElement(element) ? sourceCount(element.expression) : 1),
    0,
  );
}

function wordCount(text) {
  return (text.match(/[\p{L}\p{N}][\p{L}\p{N}'’.-]*/gu) ?? []).length;
}

function decDocumentCodes(node) {
  const codes = strings(node)
    .flatMap((value) => [
      ...value.matchAll(/DecDocs\/([A-Z]?\d{6}[A-Z]?)/gi),
      ...value.matchAll(/[?&]SiteCode=([A-Z]?\d{6}[A-Z]?)/gi),
    ])
    .map((match) => match[1].toUpperCase());
  return [...new Set(codes)];
}

function externalStories() {
  const source = parse("src/data/site-stories.ts");
  const result = new Map();
  source.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== "siteStories") continue;
      const container = declaration.initializer && unwrapObject(declaration.initializer);
      if (!container) continue;
      for (const entry of container.properties) {
        if (!ts.isPropertyAssignment(entry)) continue;
        const id = ts.isIdentifier(entry.name) || ts.isStringLiteral(entry.name) ? entry.name.text : "";
        const story = unwrapObject(entry.initializer);
        if (id && story) result.set(id, story);
      }
    }
  });
  return result;
}

function imageRecords() {
  const source = parse("src/data/site-images.ts");
  const result = new Map();
  source.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== "siteImages") continue;
      const container = declaration.initializer && unwrapObject(declaration.initializer);
      if (!container) continue;
      for (const entry of container.properties) {
        if (!ts.isPropertyAssignment(entry)) continue;
        const id = ts.isIdentifier(entry.name) || ts.isStringLiteral(entry.name) ? entry.name.text : "";
        const image = unwrapObject(entry.initializer);
        if (!id || !image) continue;
        result.set(id, {
          src: literal(property(image, "src")?.initializer),
          alt: literal(property(image, "alt")?.initializer),
          caption: literal(property(image, "caption")?.initializer),
          credit: literal(property(image, "credit")?.initializer),
          sourceUrl: literal(property(image, "sourceUrl")?.initializer),
          rights: literal(property(image, "rights")?.initializer),
        });
      }
    }
  });
  return result;
}

function collectSites(stories) {
  const result = [];
  const seen = new Set();
  for (const file of dataFiles) {
    const source = parse(file);
    function visit(node) {
      if (ts.isObjectLiteralExpression(node)) {
        const id = literal(property(node, "id")?.initializer);
        const name = literal(property(node, "name")?.initializer);
        const category = literal(property(node, "category")?.initializer);
        if (id && name && category) {
          if (seen.has(id)) throw new Error(`Duplicate site id: ${id}`);
          seen.add(id);
          const inlineStory = property(node, "story")?.initializer;
          const story = inlineStory ? unwrapObject(inlineStory) : stories.get(id);
          const paragraphs = story
            ? storyFields.flatMap((field) => fieldStrings(story, field))
            : [];
          result.push({
            id,
            name,
            category,
            story,
            paragraphs,
            words: wordCount(paragraphs.join(" ")),
            background: story ? fieldStrings(story, "background").length : 0,
            timeline: story ? fieldStrings(story, "timeline").filter((value) => value.length > 20).length : 0,
            impacts: story ? fieldStrings(story, "documentedImpacts").length : 0,
            controls: story ? fieldStrings(story, "cleanupAndControls").length : 0,
            present: story
              ? fieldStrings(story, "presentDay").length + fieldStrings(story, "present").length
              : 0,
            reviewed: story ? literal(property(story, "lastReviewed")?.initializer) : "",
            sources: sourceCount(property(node, "sources")?.initializer),
            news: property(node, "newsEvents")?.initializer &&
              ts.isArrayLiteralExpression(property(node, "newsEvents").initializer)
              ? property(node, "newsEvents").initializer.elements.length
              : 0,
            decDocumentCodes: decDocumentCodes(node),
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

const stories = externalStories();
const images = imageRecords();
const sites = collectSites(stories);

const findings = {
  missingStory: sites.filter((site) => !site.story).map((site) => site.id),
  missingCoreSection: sites
    .filter(
      (site) =>
        site.story &&
        (!site.background || !site.timeline || !site.impacts || !site.controls || !site.present),
    )
    .map((site) => site.id),
  missingReviewDate: sites.filter((site) => !site.reviewed).map((site) => site.id),
  under250Words: sites.filter((site) => site.words < 250).map((site) => `${site.id}:${site.words}`),
  under350Words: sites.filter((site) => site.words < 350).map((site) => `${site.id}:${site.words}`),
  fewerThanTwoSources: sites.filter((site) => site.sources < 2).map((site) => `${site.id}:${site.sources}`),
  noNewsEvents: sites.filter((site) => site.news === 0).map((site) => site.id),
  multipleDecDocumentCodes: sites
    .filter((site) => site.decDocumentCodes.length > 1)
    .map((site) => ({ id: site.id, codes: site.decDocumentCodes })),
  imagesMissingMetadata: [...images]
    .filter(([, image]) =>
      [image.src, image.alt, image.caption, image.credit, image.sourceUrl, image.rights].some(
        (value) => !value,
      ),
    )
    .map(([id]) => id),
  imagesMissingFiles: [...images]
    .filter(([, image]) => !fs.existsSync(path.join(root, "public", image.src.replace(/^\//, ""))))
    .map(([id]) => id),
  imageForUnknownSite: [...images].filter(([id]) => !sites.some((site) => site.id === id)).map(([id]) => id),
};

const paragraphOwners = new Map();
for (const site of sites) {
  for (const paragraph of site.paragraphs) {
    const normalized = paragraph.replace(/\s+/g, " ").trim().toLowerCase();
    if (normalized.length < 80) continue;
    const owners = paragraphOwners.get(normalized) ?? new Set();
    owners.add(site.id);
    paragraphOwners.set(normalized, owners);
  }
}
findings.duplicateParagraphs = [...paragraphOwners]
  .filter(([, owners]) => owners.size > 1)
  .map(([text, owners]) => ({ sites: [...owners], excerpt: text.slice(0, 180) }));

const report = {
  generated: new Date().toISOString(),
  totals: {
    sites: sites.length,
    stories: sites.filter((site) => site.story).length,
    newsEvents: sites.reduce((sum, site) => sum + site.news, 0),
    images: images.size,
    sitesAtLeast350Words: sites.filter((site) => site.words >= 350).length,
    sitesAtLeastThreeSources: sites.filter((site) => site.sources >= 3).length,
  },
  findings,
  shortest: [...sites]
    .sort((a, b) => a.words - b.words || a.name.localeCompare(b.name))
    .slice(0, 30)
    .map(({ id, name, category, words, sources, news }) => ({ id, name, category, words, sources, news })),
};

const output = path.join(root, "research", "editorial-coverage-audit.json");
fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report.totals));
for (const [name, values] of Object.entries(findings)) {
  console.log(`${name}: ${values.length}`);
}
console.log("Shortest pages:");
for (const site of report.shortest) {
  console.log(`${site.words}\t${site.sources} sources\t${site.news} news\t${site.id}`);
}

const hardFailures = [
  findings.missingStory,
  findings.missingCoreSection,
  findings.missingReviewDate,
  findings.under250Words,
  findings.fewerThanTwoSources,
  findings.imagesMissingMetadata,
  findings.imagesMissingFiles,
  findings.imageForUnknownSite,
  findings.duplicateParagraphs,
];
if (hardFailures.some((items) => items.length)) process.exitCode = 1;
