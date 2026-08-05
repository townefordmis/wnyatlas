import countyRecordsJson from "./health-county-records.json";
import trendRecordsJson from "./health-trend-records.json";

export const wnyCountyNames = [
  "Allegany",
  "Cattaraugus",
  "Chautauqua",
  "Erie",
  "Genesee",
  "Niagara",
  "Orleans",
  "Wyoming",
] as const;

export type WnyCountyName = (typeof wnyCountyNames)[number];

export type HealthCountyRecord = {
  indicatorId: string;
  indicator: string;
  county: string;
  value: number | null;
  eventCount: number | null;
  denominator: number | null;
  unit: string;
  period: string;
  source: string;
  latitude: number | null;
  longitude: number | null;
  suppressed: boolean;
};

export type HealthTrendRecord = {
  indicatorId: string;
  county: string;
  year: string;
  value: number;
  stateValue: number | null;
  threeYearAverage: number | null;
  source: string;
};

export type HealthTopic = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  caution: string;
  color: string;
  indicatorIds: string[];
  localLayer?: "childhood-asthma" | "premature-birth" | "low-birth-weight" | "childhood-lead" | "drinking-water" | "birth-defects";
  sourceNote?: string;
};

export const cancerHealthTopic: HealthTopic = {
  slug: "cancer",
  title: "Cancer",
  shortTitle: "Cancer",
  eyebrow: "Cancer surveillance",
  description: "Age-adjusted incidence and mortality comparisons for all cancers and selected cancer sites across eight WNY counties and New York State.",
  caution: "Cancer rates describe where a person lived at diagnosis or death. They do not establish where an exposure occurred or what caused an individual cancer.",
  color: "#b65031",
  indicatorIds: ["cancer-incidence", "cancer-mortality", "lung-cancer-incidence", "colorectal-cancer-incidence", "breast-cancer-incidence", "prostate-cancer-incidence"],
};

export const healthCountyRecords = countyRecordsJson as HealthCountyRecord[];
export const healthTrendRecords = trendRecordsJson as HealthTrendRecord[];

export const healthTopics: HealthTopic[] = [
  {
    slug: "heart-disease",
    title: "Heart disease and stroke",
    shortTitle: "Heart disease",
    eyebrow: "Cardiovascular health",
    description: "Age-adjusted mortality comparisons for heart disease, cardiovascular disease, coronary heart disease, and stroke.",
    caution: "Mortality rates describe deaths among residents. They do not identify an individual cause or exposure pathway.",
    color: "#b5422b",
    indicatorIds: ["heart-disease-mortality", "cardiovascular-mortality", "coronary-heart-disease-mortality", "stroke-mortality"],
  },
  {
    slug: "diabetes",
    title: "Diabetes",
    shortTitle: "Diabetes",
    eyebrow: "Chronic disease",
    description: "County mortality, diagnosed prevalence, and hospitalization measures from the NYSDOH Community Health Indicator Reports.",
    caution: "Survey, death-record, and hospitalization measures describe different populations and should not be combined into one score.",
    color: "#9b5c22",
    indicatorIds: ["diabetes-mortality", "diagnosed-diabetes", "diabetes-hospitalization"],
  },
  {
    slug: "respiratory",
    title: "Respiratory health",
    shortTitle: "Respiratory",
    eyebrow: "Respiratory health",
    description: "Chronic lower-respiratory mortality, asthma mortality, adult asthma, and childhood asthma hospitalization measures.",
    caution: "Asthma care use reflects disease burden, triggers, access to care, and disease management; it is not a direct exposure measurement.",
    color: "#197b83",
    indicatorIds: ["respiratory-mortality", "asthma-mortality", "adult-asthma", "child-asthma-hospitalization"],
    localLayer: "childhood-asthma",
  },
  {
    slug: "mental-health",
    title: "Mental health and suicide",
    shortTitle: "Mental health",
    eyebrow: "Behavioral health",
    description: "County comparisons for frequent poor mental health, suicide mortality, and self-inflicted-injury hospitalizations.",
    caution: "These indicators measure different events and populations. High values require context and must never be treated as a diagnosis of a community.",
    color: "#6e5794",
    indicatorIds: ["poor-mental-health", "suicide-mortality", "self-inflicted-injury"],
  },
  {
    slug: "substance-use",
    title: "Substance use",
    shortTitle: "Substance use",
    eyebrow: "Behavioral health",
    description: "Smoking, binge-drinking, and alcohol-related injury measures, with the NYSDOH opioid dashboard linked for deeper overdose surveillance.",
    caution: "This first release does not merge provisional overdose records with final annual measures. They remain separately labeled.",
    color: "#7c4b32",
    indicatorIds: ["adult-smoking", "adult-binge-drinking", "alcohol-related-injury"],
    sourceNote: "Dedicated opioid and overdose measures remain a high-priority second-source integration because their update schedules and provisional status differ from CHIRS.",
  },
  {
    slug: "birth-outcomes",
    title: "Birth outcomes",
    shortTitle: "Birth outcomes",
    eyebrow: "Maternal and infant health",
    description: "County and available ZIP-level measures for prematurity, birthweight, infant mortality, and prenatal care.",
    caution: "Small ZIP populations can change sharply with only a few births. ZIP values describe maternal residence at birth, not a causal exposure location.",
    color: "#a0486b",
    indicatorIds: ["premature-birth", "low-birthweight", "very-low-birthweight", "infant-mortality", "late-prenatal-care"],
    localLayer: "premature-birth",
  },
  {
    slug: "maternal-child",
    title: "Maternal and child health",
    shortTitle: "Maternal and child",
    eyebrow: "Maternal and child health",
    description: "A broader county view of infant mortality, prenatal care, prematurity, and low birthweight.",
    caution: "Maternal and infant indicators use different denominators and cannot responsibly be combined into one grade.",
    color: "#b04f76",
    indicatorIds: ["infant-mortality", "late-prenatal-care", "premature-birth", "low-birthweight", "very-low-birthweight"],
    localLayer: "low-birth-weight",
  },
  {
    slug: "mortality",
    title: "Mortality and premature death",
    shortTitle: "Mortality",
    eyebrow: "Population health",
    description: "Age-adjusted all-cause mortality, premature-death percentage, and years of potential life lost.",
    caution: "Population age, deprivation, access to care, and many disease-specific factors shape mortality. County placement is descriptive.",
    color: "#324c58",
    indicatorIds: ["total-mortality", "premature-deaths", "potential-life-lost"],
  },
  {
    slug: "healthcare-access",
    title: "Healthcare access",
    shortTitle: "Healthcare access",
    eyebrow: "Access and capacity",
    description: "Cost barriers, regular-provider access, and provider availability by county.",
    caution: "Provider counts measure reported capacity, not appointment availability, travel time, insurance acceptance, or quality of care.",
    color: "#246a73",
    indicatorIds: ["care-cost-barrier", "regular-provider", "primary-care-physicians", "mental-health-providers", "dentists"],
  },
  {
    slug: "social-determinants",
    title: "Social determinants of health",
    shortTitle: "Social determinants",
    eyebrow: "Community conditions",
    description: "Poverty, food access, household income, and social vulnerability measures that shape health opportunity.",
    caution: "These measures describe community conditions. They are not individual traits and should not be used to stigmatize places or residents.",
    color: "#596b2f",
    indicatorIds: ["poverty", "child-poverty", "food-insecurity", "median-household-income", "social-vulnerability", "low-food-access"],
  },
  {
    slug: "obesity",
    title: "Weight status and physical activity",
    shortTitle: "Obesity and activity",
    eyebrow: "Chronic-disease context",
    description: "Adult obesity, overweight, physical activity, and school weight-status indicators.",
    caution: "Body-mass-index measures have important limitations and should be interpreted with behavioral, economic, clinical, and built-environment context.",
    color: "#81702b",
    indicatorIds: ["adult-obesity", "adult-overweight-obese", "physical-activity", "student-obesity"],
  },
  {
    slug: "environmental-health",
    title: "Environmental and occupational health",
    shortTitle: "Environmental health",
    eyebrow: "Documented health indicators",
    description: "Mesothelioma, occupational lead, and work-related hospitalization measures linked to the Atlas environmental record.",
    caution: "County health statistics and mapped industrial history are separate evidence streams. Their overlap does not establish exposure or causation.",
    color: "#8a5529",
    indicatorIds: ["mesothelioma", "occupational-lead", "work-related-hospitalization"],
  },
  {
    slug: "childhood-asthma",
    title: "Childhood asthma",
    shortTitle: "Childhood asthma",
    eyebrow: "Local respiratory data",
    description: "County hospitalizations and stable ZIP-level emergency-department visit rates for children.",
    caution: "Emergency visits reflect asthma severity, triggers, primary-care access, and management. ZIP points are geographic references, not patient addresses.",
    color: "#008d95",
    indicatorIds: ["child-asthma-hospitalization", "adult-asthma", "asthma-mortality"],
    localLayer: "childhood-asthma",
  },
  {
    slug: "childhood-lead",
    title: "Childhood lead exposure",
    shortTitle: "Childhood lead",
    eyebrow: "Environmental health",
    description: "Published ZIP-level testing and elevated blood-lead records with documented industrial and housing context.",
    caution: "Testing coverage varies. A ZIP rate describes tested children and should not be read as the prevalence among every child living there.",
    color: "#db7b13",
    indicatorIds: ["occupational-lead"],
    localLayer: "childhood-lead",
    sourceNote: "The county comparison is occupational adult lead and is not interchangeable with the childhood ZIP layer; both are labeled separately.",
  },
  {
    slug: "drinking-water",
    title: "Public drinking water",
    shortTitle: "Drinking water",
    eyebrow: "Environmental health",
    description: "Public-water-system sources, selected monitoring records, compliance context, and links to consumer confidence reports.",
    caution: "Water-system boundaries do not follow ZIP or county lines. Source-water results may not represent treated water delivered to a tap.",
    color: "#1267a5",
    indicatorIds: [],
    localLayer: "drinking-water",
    sourceNote: "This page is intentionally system-first rather than ranking counties using mismatched water-service geography.",
  },
  {
    slug: "birth-defects",
    title: "Birth defects",
    shortTitle: "Birth defects",
    eyebrow: "Registry surveillance",
    description: "Chromosomal conditions, recent regional trends, historical WNY county records, registry methods, and current local-data limitations.",
    caution: "Current public values use NYS-excluding-NYC geography, while the county series ends in 2014. WNYAtlas keeps them separate and never ranks rates based on fewer than 12 cases.",
    color: "#98618b",
    indicatorIds: [],
    localLayer: "birth-defects",
    sourceNote: "The latest public file is statewide/regional. Historical county counts remain available through 2014 and are explicitly labeled when statistically unstable.",
  },
];

export const healthTopicBySlug = Object.fromEntries(healthTopics.map((topic) => [topic.slug, topic])) as Record<string, HealthTopic>;

export const indicatorLabel = (indicatorId: string) =>
  healthCountyRecords.find((record) => record.indicatorId === indicatorId)?.indicator ?? indicatorId;

export function recordsForIndicator(indicatorId: string) {
  return healthCountyRecords.filter((record) => record.indicatorId === indicatorId);
}

export function countyRecord(indicatorId: string, county: string) {
  return healthCountyRecords.find((record) => record.indicatorId === indicatorId && record.county === county);
}

export function rankedCountyRecords(indicatorId: string) {
  return recordsForIndicator(indicatorId)
    .filter((record) => record.county !== "New York State" && record.value !== null)
    .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
}

export function stateRecord(indicatorId: string) {
  return countyRecord(indicatorId, "New York State");
}

export function wnyRecords(indicatorId: string) {
  return wnyCountyNames
    .map((county) => countyRecord(indicatorId, county))
    .filter((record): record is HealthCountyRecord => Boolean(record));
}

export function rankForRecord(record: HealthCountyRecord) {
  if (record.value === null) return null;
  const ranked = rankedCountyRecords(record.indicatorId);
  const index = ranked.findIndex((candidate) => candidate.county === record.county);
  return index === -1 ? null : { rank: index + 1, denominator: ranked.length };
}

export function trendsFor(indicatorId: string, county: string) {
  return healthTrendRecords
    .filter((record) => record.indicatorId === indicatorId && record.county === county)
    .sort((a, b) => a.year.localeCompare(b.year));
}

export const healthPlatformSources = [
  {
    title: "Community Health Indicator Reports — Latest Data",
    agency: "New York State Department of Health",
    url: "https://health.data.ny.gov/Health/Community-Health-Indicator-Reports-CHIRS-Latest-D/54ci-sdfi",
    note: "County values, counts, denominators, reporting periods, and source descriptions used by the standardized comparison system.",
  },
  {
    title: "Community Health Indicator Reports dashboard",
    agency: "New York State Department of Health",
    url: "https://apps.health.ny.gov/public/tabvis/PHIG_Public/chirs/",
    note: "Official visualization, definitions, and interpretation context.",
  },
  {
    title: "Prevention Agenda subcounty data",
    agency: "New York State Department of Health",
    url: "https://apps.health.ny.gov/public/tabvis/PHIG_Public/pa/",
    note: "Official ZIP and other subcounty records where the source supports local geography.",
  },
  {
    title: "New York State Opioid Data Dashboard",
    agency: "New York State Department of Health",
    url: "https://apps.health.ny.gov/public/tabvis/PHIG_Public/opioid/",
    note: "Separate annual and provisional opioid surveillance; not silently merged with CHIRS periods.",
  },
];
