import type { AtlasSite } from "@/types/site";

const evidenceLabels: Record<NonNullable<AtlasSite["pfasEvidence"]>[number], string> = {
  production: "documented production",
  use: "documented use",
  detection: "environmental detection",
  investigation: "agency investigation",
};

export function getPfasEvidenceLabel(site: AtlasSite) {
  if (!site.pfasEvidence?.length) return null;
  return site.pfasEvidence.map((item) => evidenceLabels[item]).join(", ");
}
