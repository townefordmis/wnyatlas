export type ParkinsonCountyComparison = {
  county: string;
  cases: number;
  coveredAdults: number;
  ratePer10k: number;
  rank: number;
  higherThanPercent: number;
  versusStatePercent: number;
};

export const parkinsonDataset = {
  year: 2023,
  indicator:
    "Total parkinsonism and Parkinson's disease prevalence among adults aged 18+ years",
  stateCases: 66_139,
  stateCoveredAdults: 15_471_339,
  stateRatePer10k: 42.7,
  rankedCountyCount: 62,
  sourceUpdated: "August 3, 2026",
  sourceUrl: "https://health.data.ny.gov/d/7diz-yqr2",
  dashboardUrl: "https://apps.health.ny.gov/public/tabvis/PHIG_Public/parkinson/",
} as const;

// Calculated from the 62 named county rows in the official 2023 APD release.
// The dataset's separate "Unknown" residence row is excluded from ranks and percentiles.
export const westernNewYorkParkinsonCounties: ParkinsonCountyComparison[] = [
  { county: "Allegany", cases: 161, coveredAdults: 31_147, ratePer10k: 51.7, rank: 15, higherThanPercent: 77, versusStatePercent: 20.9 },
  { county: "Cattaraugus", cases: 307, coveredAdults: 54_297, ratePer10k: 56.5, rank: 5, higherThanPercent: 93, versusStatePercent: 32.3 },
  { county: "Chautauqua", cases: 439, coveredAdults: 91_757, ratePer10k: 47.8, rank: 23, higherThanPercent: 64, versusStatePercent: 11.9 },
  { county: "Erie", cases: 3_098, coveredAdults: 680_225, ratePer10k: 45.5, rank: 33, higherThanPercent: 48, versusStatePercent: 6.5 },
  { county: "Genesee", cases: 220, coveredAdults: 41_083, ratePer10k: 53.6, rank: 7, higherThanPercent: 90, versusStatePercent: 25.3 },
  { county: "Niagara", cases: 742, coveredAdults: 146_811, ratePer10k: 50.5, rank: 18, higherThanPercent: 72, versusStatePercent: 18.2 },
  { county: "Orleans", cases: 135, coveredAdults: 28_394, ratePer10k: 47.5, rank: 25, higherThanPercent: 61, versusStatePercent: 11.2 },
  { county: "Wyoming", cases: 123, coveredAdults: 28_172, ratePer10k: 43.7, rank: 40, higherThanPercent: 36, versusStatePercent: 2.1 },
];

export const parkinsonSources = [
  {
    title: "Parkinson's Disease and Parkinsonism Prevalence, 2019–2023",
    agency: "New York State Department of Health — All-Payer Database",
    url: parkinsonDataset.sourceUrl,
    coverage: "Annual state, region, and county-of-residence claims-based prevalence for insured adults",
    updated: `Data updated ${parkinsonDataset.sourceUpdated}; this page uses 2023`,
  },
  {
    title: "Parkinson's Disease and Parkinsonism Dashboard",
    agency: "New York State Department of Health",
    url: parkinsonDataset.dashboardUrl,
    coverage: "Definitions, inclusion rules, suppression, data-source limitations, and interpretation guidance",
    updated: "Technical notes reviewed August 5, 2026",
  },
  {
    title: "National Neurological Conditions Surveillance System",
    agency: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/nncss/php/about/progress.html",
    coverage: "National and broad regional surveillance work for multiple sclerosis and Parkinson's disease",
    updated: "Used to document why a comparable public county-level MS series is not shown",
  },
  {
    title: "Parkinson's Disease",
    agency: "National Institute of Neurological Disorders and Stroke",
    url: "https://www.ninds.nih.gov/current-research/focus-disorders/parkinsons-disease-research/parkinsons-disease-challenges-progress-and-promise",
    coverage: "Disease overview and established context for age, genetics, family history, and environmental risk factors",
    updated: "Reviewed August 5, 2026",
  },
  {
    title: "Parkinson's Disease and Environmental Exposures",
    agency: "National Institute of Environmental Health Sciences",
    url: "https://www.niehs.nih.gov/health/topics/conditions/parkinson",
    coverage: "Research summary on pesticides, trichloroethylene, head injuries, and gene-environment interactions",
    updated: "Reviewed August 5, 2026",
  },
];
