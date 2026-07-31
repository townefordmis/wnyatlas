import {
  currentAssessmentSources,
  historicalRadiologicalRecords,
  historicalSurveySource,
  radiologicalDocuments,
  radiologicalProducers,
} from "@/data/radiological-investigation";

export const dynamic = "force-static";

export function GET() {
  return Response.json(
    {
      title: "WNY Atlas Radiological Industry, Fill, Surveys & Cleanup research dataset",
      generatedForEdition: "2026 founding edition",
      lastReviewed: "2026-07-31",
      limitations: [
        "Historical survey points reproduce or approximate locations described in government records and do not establish current conditions.",
        "Current assessment coverage is generalized because agencies have not published property-level coordinates for every active review.",
        "A producer or handler relationship is not assigned to an individual anomaly unless the cited record supports that connection.",
      ],
      primaryHistoricalSurvey: historicalSurveySource,
      historicalSurveyRecords: historicalRadiologicalRecords,
      producersProcessorsStorageAndCleanup: radiologicalProducers,
      governmentResearchArchive: radiologicalDocuments,
      currentAssessmentSources,
    },
    {
      headers: {
        "Content-Disposition": 'attachment; filename="wnyatlas-radiological-research.json"',
      },
    },
  );
}
