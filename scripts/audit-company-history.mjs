import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const dataFiles = [
  "src/data/featured-sites.ts",
  "src/data/historic-cleanup-expansion.ts",
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

function literalValue(node) {
  if (!node) return undefined;
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  return undefined;
}

function arrayLength(object, name) {
  const candidate = property(object, name);
  return candidate && ts.isArrayLiteralExpression(candidate.initializer)
    ? candidate.initializer.elements.length
    : 0;
}

function storyMetrics(story) {
  if (!story || !ts.isObjectLiteralExpression(story)) {
    return {
      hasStory: false,
      background: 0,
      timeline: 0,
      impacts: 0,
      controls: 0,
      presentDay: 0,
      researchNotes: 0,
      depth: 0,
    };
  }

  const metrics = {
    hasStory: true,
    background: arrayLength(story, "background"),
    timeline: arrayLength(story, "timeline"),
    impacts: arrayLength(story, "documentedImpacts"),
    controls: arrayLength(story, "cleanupAndControls"),
    presentDay: arrayLength(story, "presentDay"),
    researchNotes: arrayLength(story, "researchNotes"),
  };

  return {
    ...metrics,
    depth:
      metrics.background +
      metrics.timeline +
      metrics.impacts +
      metrics.controls +
      metrics.presentDay +
      metrics.researchNotes,
  };
}

function collectExternalStories() {
  const source = parse("src/data/site-stories.ts");
  const stories = new Map();

  source.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== "siteStories") {
        continue;
      }
      if (!declaration.initializer || !ts.isObjectLiteralExpression(declaration.initializer)) {
        continue;
      }
      for (const entry of declaration.initializer.properties) {
        if (!ts.isPropertyAssignment(entry)) continue;
        const id = ts.isIdentifier(entry.name)
          ? entry.name.text
          : ts.isStringLiteral(entry.name)
            ? entry.name.text
            : undefined;
        if (id && ts.isObjectLiteralExpression(entry.initializer)) {
          stories.set(id, entry.initializer);
        }
      }
    }
  });

  return stories;
}

function collectSites(externalStories) {
  const sites = [];

  for (const file of dataFiles) {
    const source = parse(file);
    function visit(node) {
      if (ts.isObjectLiteralExpression(node)) {
        const idProperty = property(node, "id");
        const nameProperty = property(node, "name");
        const categoryProperty = property(node, "category");
        const id = literalValue(idProperty?.initializer);
        const name = literalValue(nameProperty?.initializer);
        const category = literalValue(categoryProperty?.initializer);

        if (id && name && category) {
          const inlineStory = property(node, "story")?.initializer;
          const story =
            inlineStory && ts.isObjectLiteralExpression(inlineStory)
              ? inlineStory
              : externalStories.get(id);
          const sources = property(node, "sources")?.initializer;
          sites.push({
            id,
            name,
            category,
            file,
            sourceCount: ts.isArrayLiteralExpression(sources)
              ? sources.elements.length
              : 0,
            ...storyMetrics(story),
          });
          return;
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  }

  return sites;
}

const externalStories = collectExternalStories();
const sites = collectSites(externalStories);
const companyPattern =
  /\b(company|chemical|chemicals|corporation|corp\.?|inc\.?|industr(?:y|ial|ies)|plant|works|steel|alloy|foundry|forge|manufactur|refin|plating|petroleum|oil|gas|railroad|battery|aerospace|mill|tannery|service station|utilities|power|landfill|disposal|waste|terminal|mine|quarry)\b/i;

const candidates = sites
  .filter((site) => companyPattern.test(site.name))
  .sort(
    (left, right) =>
      Number(left.hasStory) - Number(right.hasStory) ||
      left.depth - right.depth ||
      left.sourceCount - right.sourceCount ||
      left.name.localeCompare(right.name),
  );

const needsStrengthening = sites
  .filter((site) => !site.hasStory || site.depth < 15 || site.sourceCount < 2)
  .sort(
    (left, right) =>
      Number(left.hasStory) - Number(right.hasStory) ||
      left.depth - right.depth ||
      left.sourceCount - right.sourceCount ||
      left.name.localeCompare(right.name),
  );

const totals = {
  sites: sites.length,
  withStory: sites.filter((site) => site.hasStory).length,
  withoutStory: sites.filter((site) => !site.hasStory).length,
  companyCandidates: candidates.length,
  companyWithoutStory: candidates.filter((site) => !site.hasStory).length,
  companyThinStory: candidates.filter(
    (site) => site.hasStory && site.depth < 12,
  ).length,
  allNeedsStrengthening: needsStrengthening.length,
  allBelowDepthStandard: sites.filter(
    (site) => site.hasStory && site.depth < 15,
  ).length,
  allBelowSourceStandard: sites.filter((site) => site.sourceCount < 2).length,
};

console.log(JSON.stringify(totals));
console.log(
  "status\tdepth\tsources\tid\tname\tfile",
);
for (const site of candidates) {
  console.log(
    [
      site.hasStory ? "story" : "missing",
      site.depth,
      site.sourceCount,
      site.id,
      site.name,
      site.file,
    ].join("\t"),
  );
}

console.log("\nneeds-strengthening");
console.log("status\tdepth\tsources\tid\tname\tfile");
for (const site of needsStrengthening) {
  console.log(
    [
      site.hasStory ? "story" : "missing",
      site.depth,
      site.sourceCount,
      site.id,
      site.name,
      site.file,
    ].join("\t"),
  );
}
