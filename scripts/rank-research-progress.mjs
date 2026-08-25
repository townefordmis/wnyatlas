import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const dataFiles = [
  "src/data/featured-sites.ts",
  "src/data/historic-cleanup-expansion.ts",
  "src/data/county-expansion-2026.ts",
];
const coreSections = [
  "background",
  "timeline",
  "documentedImpacts",
  "cleanupAndControls",
  "presentDay",
];

function parse(file) {
  return ts.createSourceFile(
    path.join(root, file),
    fs.readFileSync(path.join(root, file), "utf8"),
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
  if (node && ts.isObjectLiteralExpression(node)) return node;
  if (node && ts.isCallExpression(node) && ts.isObjectLiteralExpression(node.arguments[0])) {
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

function wordCount(text) {
  return (text.match(/[\p{L}\p{N}][\p{L}\p{N}'’.-]*/gu) ?? []).length;
}

function arrayLength(object, name) {
  const candidate = property(object, name)?.initializer;
  return candidate && ts.isArrayLiteralExpression(candidate) ? candidate.elements.length : 0;
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

function externalStories() {
  const result = new Map();
  const source = parse("src/data/site-stories.ts");
  source.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== "siteStories") continue;
      const container = unwrapObject(declaration.initializer);
      if (!container) continue;
      for (const entry of container.properties) {
        if (!ts.isPropertyAssignment(entry)) continue;
        const id = ts.isIdentifier(entry.name) || ts.isStringLiteral(entry.name)
          ? entry.name.text
          : "";
        const story = unwrapObject(entry.initializer);
        if (id && story) result.set(id, story);
      }
    }
  });
  return result;
}

function imageIds() {
  const result = new Set();
  const source = parse("src/data/site-images.ts");
  source.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== "siteImages") continue;
      const container = unwrapObject(declaration.initializer);
      if (!container) continue;
      for (const entry of container.properties) {
        if (!ts.isPropertyAssignment(entry)) continue;
        const id = ts.isIdentifier(entry.name) || ts.isStringLiteral(entry.name)
          ? entry.name.text
          : "";
        if (id) result.add(id);
      }
    }
  });
  return result;
}

function collectSites(stories, images) {
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
          const inlineStory = unwrapObject(property(node, "story")?.initializer);
          const story = inlineStory ?? stories.get(id);
          const sectionCounts = Object.fromEntries(
            coreSections.map((section) => [section, story ? arrayLength(story, section) : 0]),
          );
          const narrative = story ? strings(story).join(" ") : "";
          const newsNode = property(node, "newsEvents")?.initializer;
          result.push({
            id,
            name,
            municipality: literal(property(node, "municipality")?.initializer),
            county: literal(property(node, "county")?.initializer),
            category,
            summary: literal(property(node, "summary")?.initializer),
            evidenceStatus: literal(property(node, "evidenceStatus")?.initializer),
            sources: sourceCount(property(node, "sources")?.initializer),
            news: newsNode && ts.isArrayLiteralExpression(newsNode) ? newsNode.elements.length : 0,
            hasImage: images.has(id) || Boolean(property(node, "image")),
            hasStory: Boolean(story),
            reviewed: story ? literal(property(story, "lastReviewed")?.initializer) : "",
            researchNotes: story ? arrayLength(story, "researchNotes") : 0,
            narrativeWords: wordCount(narrative),
            summaryWords: wordCount(literal(property(node, "summary")?.initializer)),
            sectionCounts,
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

function score(site) {
  const summary = Math.min(10, Math.round((site.summaryWords / 45) * 10));
  const sources = Math.min(25, site.sources * 6);
  const sections = coreSections.reduce(
    (total, section) => total + (site.sectionCounts[section] > 0 ? 8 : 0),
    0,
  );
  const narrative = Math.min(15, Math.round((site.narrativeWords / 500) * 15));
  const review = site.reviewed ? 3 : 0;
  const researchNotes = site.researchNotes ? 2 : 0;
  const visual = site.hasImage ? 5 : 0;
  return { summary, sources, sections, narrative, review, researchNotes, visual };
}

function gaps(site) {
  return [
    !site.hasStory && "no structured story",
    ...coreSections.filter((section) => !site.sectionCounts[section]).map((section) => `missing ${section}`),
    site.sources < 3 && `only ${site.sources} source${site.sources === 1 ? "" : "s"}`,
    site.narrativeWords < 350 && `only ${site.narrativeWords} narrative words`,
    !site.reviewed && "no review date",
    !site.researchNotes && "no research/uncertainty note",
    !site.hasImage && "no lead image",
    !site.news && "no news timeline",
  ].filter(Boolean);
}

const progress = collectSites(externalStories(), imageIds())
  .filter((site) => site.evidenceStatus === "research-in-progress")
  .map((site) => {
    const parts = score(site);
    return {
      ...site,
      score: Object.values(parts).reduce((total, value) => total + value, 0),
      scoreParts: parts,
      gaps: gaps(site),
    };
  })
  .sort((a, b) => a.score - b.score || a.narrativeWords - b.narrativeWords || a.name.localeCompare(b.name));

const generated = new Date().toISOString();
const report = {
  generated,
  methodology: "100-point editorial completeness score: summary 10, sources 25, five core story sections 40, narrative depth 15, review metadata 5, rights-cleared lead visual 5. News is reported as a gap but is not scored because not every record warrants a news timeline.",
  total: progress.length,
  weakestFive: progress.slice(0, 5).map((site) => site.id),
  records: progress,
};

fs.writeFileSync(
  path.join(root, "research/research-progress-ranking.json"),
  `${JSON.stringify(report, null, 2)}\n`,
);

const markdown = [
  "# Research-in-progress completeness ranking",
  "",
  `Generated ${generated.slice(0, 10)}. This is an editorial completeness queue, not a hazard, exposure, or health-risk ranking.`,
  "",
  `Found **${progress.length}** records marked \`research-in-progress\`. Lower scores should be reviewed first.`,
  "",
  "## Method",
  "",
  report.methodology,
  "",
  "## Ranked queue",
  "",
  "| Rank | Place | County | Score | Words | Sources | Image | Leading gaps |",
  "|---:|---|---|---:|---:|---:|:---:|---|",
  ...progress.map((site, index) =>
    `| ${index + 1} | [${site.name}](https://www.wnyatlas.com/sites/${site.id}) | ${site.county} | ${site.score} | ${site.narrativeWords} | ${site.sources} | ${site.hasImage ? "Yes" : "No"} | ${site.gaps.slice(0, 4).join("; ")} |`,
  ),
  "",
  "## First review batch",
  "",
  ...progress.slice(0, 5).map((site, index) =>
    `${index + 1}. **${site.name}** (${site.score}/100): ${site.gaps.join("; ")}.`,
  ),
  "",
];
fs.writeFileSync(path.join(root, "research/research-progress-ranking.md"), markdown.join("\n"));

console.log(JSON.stringify({
  total: progress.length,
  weakestFive: progress.slice(0, 5).map(({ id, score }) => ({ id, score })),
  output: "research/research-progress-ranking.md",
}));
