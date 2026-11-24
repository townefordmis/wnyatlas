import { groceryEvidenceLabels, groceryInvestigations } from "@/data/store-shelves-investigations";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    title: "WNY Atlas Pollution on Store Shelves investigation register",
    lastReviewed: "2026-11-24",
    limitations: [
      "Unknown fields are null or empty arrays; they are not zeros or negative findings.",
      "Evidence classifications describe what a record establishes, not a product safety ranking.",
      "Complaint-reported measurements are distinct from confirmed government-reported laboratory results.",
      "Local retailer presence does not establish local availability of a tested product or lot.",
      "Case outcomes are limited to the dated documents reviewed; later docket activity may be unknown.",
    ],
    evidenceClassifications: groceryEvidenceLabels,
    investigations: groceryInvestigations,
  }, { headers: { "Content-Disposition": 'attachment; filename="wnyatlas-store-shelves-research.json"' } });
}
