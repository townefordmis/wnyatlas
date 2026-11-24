import {
  currentAssessmentSources,
  historicalRadiologicalRecords,
  historicalSurveySource,
  latestRadiologicalFollowUps,
  probeCorroborationFindings,
  probeTestimonyRecords,
  radiologicalDocuments,
  radiologicalProducers,
} from "@/data/radiological-investigation";

export const dynamic = "force-static";

export function GET() {
  return Response.json(
    {
      title: "WNY Atlas Radiological Industry, Fill, Surveys & Cleanup research dataset",
      generatedForEdition: "2026 founding edition",
      lastReviewed: "2026-11-24",
      currentAssessmentTimeline: [
        {
          date: "2026-10-23",
          event: "NYSDEC reported more than 1,100 access agreements, more than 1,080 screenings, approximately 900 no-additional-investigation notifications, 37 EPA referrals and more than 150 results under review. These are overlapping stages, not confirmed contamination totals.",
          sourceUrl: "https://content.govdelivery.com/accounts/NYSDEC/bulletins/42f64bd",
        },
        {
          date: "2026-11-06",
          event: "EPA reported 41 referrals and scheduled cleanup at two homes for the week of November 9, including excavation, screening and off-site disposal. The announcement does not verify work performed or completion and does not establish a particular industrial source.",
          sourceUrl: "https://response.epa.gov/site/site_profile.aspx?site_id=17492",
        },
      ],
      limitations: [
        "Historical survey points reproduce or approximate locations described in government records and do not establish current conditions.",
        "Current assessment coverage is generalized because agencies have not published property-level coordinates for every active review.",
        "A producer or handler relationship is not assigned to an individual anomaly unless the cited record supports that connection.",
        "Later EPA removal sites are not matched to a numbered 1984 anomaly unless the current public record supports that match.",
        "Scheduled residential removals are not counted as completed cleanups or mapped to private addresses without a public agency record.",
      ],
      primaryHistoricalSurvey: historicalSurveySource,
      historicalSurveyRecords: historicalRadiologicalRecords,
      latestDocumentedFollowUps: latestRadiologicalFollowUps,
      producersProcessorsStorageAndCleanup: radiologicalProducers,
      probe1979WitnessAccounts: probeTestimonyRecords,
      probe1979IndependentResearch: probeCorroborationFindings,
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
