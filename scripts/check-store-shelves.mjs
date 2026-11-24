import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";

const input = readFileSync(new URL("../src/data/store-shelves-investigations.ts", import.meta.url), "utf8");
const code = ts.transpileModule(input, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { groceryInvestigations: records, groceryEvidenceLabels: labels, emptyGroceryFilters: empty, filterGroceryInvestigations: filter } = await import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);

assert.equal(new Set(records.map(item => item.id)).size, records.length, "Record IDs must be unique");
assert.equal(Object.keys(labels).length, 10, "Keep the ten requested evidence distinctions");
for (const record of records) {
  assert.ok(record.sources.length > 0, `${record.id} needs sources`);
  assert.ok(record.evidence.every(value => value in labels), `${record.id} has unknown evidence labels`);
  assert.ok(record.localAvailability && record.limitations, `${record.id} needs local and evidence limits`);
  for (const field of ["grower", "origin", "filingDate", "caseNumber", "settlementAmountUSD", "manufacturerResponse", "healthEvidence", "regulatoryComparison"]) assert.ok(field in record, `${record.id} must explicitly represent ${field}`);
  for (const measurement of record.measurements) {
    assert.ok(Number.isFinite(measurement.value) && measurement.value > 0);
    assert.ok(record.sources.some(source => source.url === measurement.sourceUrl), "Measurement must have a matching source");
    assert.ok(measurement.sample && measurement.basis, "Retain sample identity and evidence basis");
  }
}
assert.equal(filter(records, empty).length, records.length, "Reset shows all records");
const combined = filter(records, { ...empty, retailer: "Trader Joe’s", contaminant: "Cadmium", evidence: "filed-litigation" });
assert.ok(combined.some(item => item.id === "notice-2026-00606"), "Tortellini complaint must be findable with combined filters");
assert.ok(combined.every(item => item.retailers.includes("Trader Joe’s") && item.contaminants.includes("Cadmium") && item.evidence.includes("filed-litigation")), "Filters combine with AND");
assert.equal(filter(records, { ...empty, retailer: "Walmart", contaminant: "Glyphosate" }).length, 0, "Do not manufacture results for unmatched filters");
assert.equal(filter(records, { ...empty, product: "Marketside Mussels Fully Cooked" })[0].id, "notice-2026-04351");
assert.ok(filter(records, { ...empty, manufacturer: "unknown" }).every(item => item.manufacturers.length === 0));
assert.ok(filter(records, { ...empty, query: "559250" }).some(item => item.id === "wanabana-dollar-tree"));
assert.ok(filter(records, { ...empty, manufacturer: "General Mills, Inc." }).some(item => item.id === "nature-valley-glyphosate"));
const mussels = records.find(item => item.id === "notice-2026-04351");
assert.match(mussels.status, /withdrawn/i);
assert.equal(mussels.outcomeDate, "2026-10-20");
const kale = records.find(item => item.id === "notice-2026-03890");
assert.equal(kale.brand, "Simple Truth");
assert.ok(!kale.retailers.includes("Trader Joe’s"), "Correct the handoff’s wrongly attributed notice");
assert.equal(records.find(item => item.id === "notice-2026-03891").product, "Trader Joe’s Peanut Butter with Honey");
const strawberries = records.find(item => item.id === "driscolls-washington");
assert.equal(strawberries.measurements.length, 12);
assert.ok(!strawberries.evidence.includes("laboratory-detection"), "Complaint-reported results are not confirmed laboratory evidence");
assert.ok(strawberries.measurements.every(item => item.basis.includes("original laboratory report not recovered")));
const applesauce = records.find(item => item.id === "wanabana-dollar-tree");
assert.equal(applesauce.measurements[0].value, 2560);
assert.match(applesauce.localAvailability, /378 Main Street, Arcade/);
assert.match(applesauce.measurements[0].sample, /New York City/);
assert.equal(applesauce.measurements[0].testingDate, null, "Collection date must not become an inferred analysis date");
assert.equal(applesauce.evidence.includes("regulatory-violation"), false, "Do not turn an agreement without admission into an adjudicated violation");
const farley = records.find(item => item.id === "driscolls-farley-lead");
assert.equal(farley.caseNumber, "2:26-cv-05950");
assert.equal(farley.filingDate, "2026-09-24");
assert.deepEqual(farley.evidence, ["filed-litigation"]);
assert.equal(farley.measurements.length, 0, "Do not invent a second New York sample from shared testing allegations");
assert.equal(records.find(item => item.id === "notice-2026-03892").product, "Trader Joe’s Crunchy Almond Butter No Salt");
assert.deepEqual(records.find(item => item.id === "notice-2026-03893").contaminants, ["Aflatoxins", "Ochratoxin A"]);
for (const [chemical, ppm, tolerance, section] of [["Fludioxonil", 0.060, 3.0, "180.516"], ["Fluxapyroxad", 0.026, 4.0, "180.666"], ["Flupyradifurone", 0.027, 1.5, "180.679"]]) {
  assert.equal(strawberries.measurements.find(item => item.chemical === chemical).value / 1000, ppm, "ppb to ppm conversion");
  assert.ok(ppm < tolerance);
  assert.ok(strawberries.sources.some(item => item.url.endsWith(`section-${section}`)), "Every tolerance comparison needs its chemical-specific rule");
}
assert.match(strawberries.regulatoryComparison, /not laboratory verification/);
console.log(`Store Shelves checks passed: ${records.length} records; combined filters, source provenance, unknowns and handoff corrections verified.`);
