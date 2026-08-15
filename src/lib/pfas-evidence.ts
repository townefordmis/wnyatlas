import type { AtlasSite } from "@/types/site";

const evidenceLabels: Record<NonNullable<AtlasSite["pfasEvidence"]>[number], string> = {
  production: "documented production",
  use: "documented use",
  detection: "environmental detection",
  investigation: "agency investigation",
};

const findingLabels: Record<NonNullable<AtlasSite["pfasCompounds"]>[number]["finding"], string> = {
  detected: "Detected",
  "documented-use": "Documented use",
  "analyzed-not-detected": "Analyzed; not detected in the cited sample set",
  "sampling-planned": "Sampling planned or required; no result established",
  "compound-not-specified": "PFAS reported; exact compound not specified",
};

export function getPfasEvidenceLabel(site: AtlasSite) {
  if (!site.pfasEvidence?.length) return null;
  return site.pfasEvidence.map((item) => evidenceLabels[item]).join(", ");
}

export function getPfasFindingLabel(
  finding: NonNullable<AtlasSite["pfasCompounds"]>[number]["finding"],
) {
  return findingLabels[finding];
}

export function getPfasSearchText(site: AtlasSite) {
  return [
    site.pfasScopeNote,
    ...(site.pfasCompounds ?? []).flatMap((compound) => [
      compound.name,
      compound.abbreviation,
      compound.medium,
      compound.note,
    ]),
  ]
    .filter(Boolean)
    .join(" ");
}

export function getPfasCompoundSummary(site: AtlasSite) {
  return (site.pfasCompounds ?? [])
    .filter((compound) => compound.finding === "detected" || compound.finding === "documented-use")
    .map((compound) => compound.abbreviation)
    .join(", ");
}
