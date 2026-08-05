import { asthmaZipRecords, perinatalZipRecords } from "@/data/public-health-local";

export type CancerMetric = {
  id: string;
  label: string;
  shortLabel: string;
  kind: "incidence" | "mortality";
  population: string;
  countyPeriod: string;
  referencePeriod: string;
  erie: { rate: number; events: number };
  niagara: { rate: number; events: number };
  newYork: number;
  unitedStates: number;
};

export const cancerMetrics: CancerMetric[] = [
  {
    id: "all-incidence",
    label: "All cancer incidence",
    shortLabel: "All incidence",
    kind: "incidence",
    population: "All persons",
    countyPeriod: "2018–2020",
    referencePeriod: "2018–2022",
    erie: { rate: 525.7, events: 19_415 },
    niagara: { rate: 548.6, events: 4_916 },
    newYork: 467.1,
    unitedStates: 448.6,
  },
  {
    id: "all-mortality",
    label: "All cancer mortality",
    shortLabel: "All mortality",
    kind: "mortality",
    population: "All persons",
    countyPeriod: "2018–2020",
    referencePeriod: "2019–2023",
    erie: { rate: 158.0, events: 6_116 },
    niagara: { rate: 168.8, events: 1_564 },
    newYork: 125.6,
    unitedStates: 145.4,
  },
  {
    id: "lung-incidence",
    label: "Lung and bronchus cancer incidence",
    shortLabel: "Lung incidence",
    kind: "incidence",
    population: "All persons",
    countyPeriod: "2018–2020",
    referencePeriod: "2018–2022",
    erie: { rate: 65.4, events: 2_562 },
    niagara: { rate: 69.7, events: 671 },
    newYork: 52.4,
    unitedStates: 52.5,
  },
  {
    id: "colorectal-incidence",
    label: "Colon and rectum cancer incidence",
    shortLabel: "Colorectal incidence",
    kind: "incidence",
    population: "All persons",
    countyPeriod: "2018–2020",
    referencePeriod: "2018–2022",
    erie: { rate: 36.7, events: 1_334 },
    niagara: { rate: 44.6, events: 373 },
    newYork: 35.8,
    unitedStates: 36.7,
  },
  {
    id: "breast-incidence",
    label: "Female breast cancer incidence",
    shortLabel: "Breast incidence",
    kind: "incidence",
    population: "Female population",
    countyPeriod: "2018–2020",
    referencePeriod: "2018–2022",
    erie: { rate: 139.3, events: 2_648 },
    niagara: { rate: 134.7, events: 617 },
    newYork: 135.6,
    unitedStates: 131.3,
  },
  {
    id: "prostate-incidence",
    label: "Prostate cancer incidence",
    shortLabel: "Prostate incidence",
    kind: "incidence",
    population: "Male population",
    countyPeriod: "2018–2020",
    referencePeriod: "2018–2022",
    erie: { rate: 145.2, events: 2_672 },
    niagara: { rate: 147.9, events: 692 },
    newYork: 135.5,
    unitedStates: 116.4,
  },
];

export const allCancerIncidenceTrend = [
  { year: 2011, erie: 566.4, niagara: 526.2, nysExcludingNyc: 523.3, unitedStates: 472.2 },
  { year: 2012, erie: 563.1, niagara: 504.0, nysExcludingNyc: 505.0, unitedStates: 460.1 },
  { year: 2013, erie: 545.9, niagara: 562.4, nysExcludingNyc: 513.5, unitedStates: 460.5 },
  { year: 2014, erie: 536.2, niagara: 544.6, nysExcludingNyc: 508.4, unitedStates: 458.7 },
  { year: 2015, erie: 549.1, niagara: 550.7, nysExcludingNyc: 511.9, unitedStates: 462.0 },
  { year: 2016, erie: 554.6, niagara: 541.4, nysExcludingNyc: 511.1, unitedStates: 460.4 },
  { year: 2017, erie: 534.1, niagara: 572.9, nysExcludingNyc: 513.6, unitedStates: 460.2 },
  { year: 2018, erie: 539.9, niagara: 545.8, nysExcludingNyc: 507.7, unitedStates: 460.0 },
  { year: 2019, erie: 554.5, niagara: 581.6, nysExcludingNyc: 516.7, unitedStates: 464.7 },
  { year: 2020, erie: 482.8, niagara: 520.3, nysExcludingNyc: 458.4, unitedStates: 423.2 },
];

export type PublicHealthLayerId =
  | "cancer"
  | "birth-defects"
  | "childhood-asthma"
  | "premature-birth"
  | "low-birth-weight"
  | "childhood-lead"
  | "drinking-water";

export type PublicHealthMapRecord = {
  id: string;
  layer: PublicHealthLayerId;
  name: string;
  geography: string;
  coordinates: [number, number];
  value: number;
  displayValue: string;
  period: string;
  detail: string;
  count?: number;
  radius: number;
  related?: string[];
};

export const publicHealthLayerMeta: Record<
  PublicHealthLayerId,
  {
    label: string;
    shortLabel: string;
    unit: string;
    color: string;
    geography: string;
    sourceUrl: string;
    limitation: string;
    mapAvailability: string;
  }
> = {
  cancer: {
    label: "All cancer incidence",
    shortLabel: "Cancer",
    unit: "Age-adjusted rate per 100,000",
    color: "#9f2f45",
    geography: "County",
    sourceUrl:
      "https://health.data.ny.gov/Health/Community-Health-Indicator-Reports-CHIRS-Latest-D/54ci-sdfi/about_data",
    limitation:
      "County residence at diagnosis is not a lifetime residential or occupational exposure history.",
    mapAvailability:
      "Not mapped from county rates. NYSDOH has older 2011–2015 census-block-group counts; those require a separate historical-data review before use.",
  },
  "birth-defects": {
    label: "Selected birth-defect prevalence",
    shortLabel: "Birth defects",
    unit: "Trisomy 21 prevalence per 10,000 live births",
    color: "#7a4f9f",
    geography: "NYS excluding NYC reference",
    sourceUrl:
      "https://health.data.ny.gov/Health/Birth-Defect-Prevalence-1992-2022/mz8x-255x/about_data",
    limitation:
      "The public file does not publish Erie and Niagara county values. This regional reference must not be read as either county's rate.",
    mapAvailability:
      "Not mapped. The current public file reports only New York State, New York City, and New York State excluding NYC—not ZIP code or city.",
  },
  "childhood-asthma": {
    label: "Childhood asthma emergency visits",
    shortLabel: "Asthma ER",
    unit: "Emergency-department visits per 10,000 residents aged 0–17",
    color: "#087f8c",
    geography: "ZCTA internal point",
    sourceUrl:
      "https://apps.health.ny.gov/public/tabvis/PHIG_Public/pa/",
    limitation:
      "These are emergency visits, not unique children. A ZIP pattern can reflect asthma burden, housing, access to routine care, and many other factors; it does not identify a cause.",
    mapAvailability:
      "Mapped from NYSDOH's 2022–2024 ZIP-level export. Suppressed and NYSDOH-labeled unstable estimates are omitted.",
  },
  "premature-birth": {
    label: "Premature births",
    shortLabel: "Premature birth",
    unit: "Percent of live births before 37 weeks",
    color: "#c43d63",
    geography: "ZCTA internal point",
    sourceUrl:
      "https://www.health.ny.gov/statistics/chac/perinatal/",
    limitation:
      "ZIP-level birth outcomes have many clinical, demographic, social, and environmental influences. Geographic overlap does not establish why an outcome occurred.",
    mapAvailability:
      "Mapped from NYSDOH's 2021–2023 ZIP-level perinatal tables. ZIP areas with fewer than 10 births are not published by NYSDOH.",
  },
  "low-birth-weight": {
    label: "Low-birthweight births",
    shortLabel: "Low birth weight",
    unit: "Percent of live births below 2.5 kg",
    color: "#cf6d22",
    geography: "ZCTA internal point",
    sourceUrl:
      "https://www.health.ny.gov/statistics/chac/perinatal/",
    limitation:
      "ZIP-level birth outcomes have many clinical, demographic, social, and environmental influences. Geographic overlap does not establish why an outcome occurred.",
    mapAvailability:
      "Mapped from NYSDOH's 2021–2023 ZIP-level perinatal tables. ZIP areas with fewer than 10 births are not published by NYSDOH.",
  },
  "childhood-lead": {
    label: "Childhood elevated blood-lead incidence",
    shortLabel: "Childhood lead",
    unit: "Confirmed first-time levels ≥10 µg/dL per 1,000 tested children",
    color: "#bd8a16",
    geography: "ZIP-code centroid",
    sourceUrl:
      "https://health.data.ny.gov/Health/Childhood-Blood-Lead-Testing-and-Elevated-Incidenc/d54z-enu8/about_data",
    limitation:
      "Only publishable ZIP records with at least 30 tests are mapped. Suppressed or absent ZIP records are not zero and are not shown.",
    mapAvailability:
      "Mapped at published ZIP-code centroids where the record meets the Atlas minimum and testing threshold.",
  },
  "drinking-water": {
    label: "Public drinking-water systems",
    shortLabel: "Drinking water",
    unit: "Active EPA-regulated public water systems",
    color: "#176b87",
    geography: "County summary marker",
    sourceUrl:
      "https://www.epa.gov/waterdata/safe-drinking-water-information-system",
    limitation:
      "Markers summarize active EPA-regulated systems serving each county, not service-area boundaries. The current federal extract does not populate ZIPs served for these systems.",
    mapAvailability:
      "Mapped as county reference markers. ZIP shading is withheld because EPA's current ZIP_CODES_SERVED field is blank for the active Erie and Niagara systems.",
  },
};

export type PublicHealthComparisonRow = {
  name: string;
  value: number;
  period: string;
  className: "is-erie" | "is-niagara" | "is-new-york" | "is-us";
};

export type PublicHealthComparison = {
  title: string;
  unit: string;
  explanation: string;
  rows: PublicHealthComparisonRow[];
  availabilityNote?: string;
};

export const publicHealthComparisons: Partial<Record<PublicHealthLayerId, PublicHealthComparison>> = {
  "birth-defects": {
    title: "Trisomy 21 prevalence",
    unit: "Cases per 10,000 live births",
    explanation:
      "The New York public file does not provide Erie or Niagara County estimates. The chart therefore compares the published New York State excluding NYC reference with CDC's national 2022 estimate.",
    rows: [
      { name: "NYS excluding NYC", value: 14.47, period: "2022", className: "is-new-york" },
      { name: "United States", value: 15.3, period: "2022", className: "is-us" },
    ],
    availabilityNote: "Erie and Niagara County values are not published in the state file and are not estimated here.",
  },
  "childhood-asthma": {
    title: "Childhood asthma emergency-department visits",
    unit: "Crude visits per 10,000 residents aged 0–17",
    explanation:
      "County and New York rates use NYSDOH SPARCS records. The national reference uses CDC's HCUP estimate and covers 2020, so its different period is shown directly on the row.",
    rows: [
      { name: "Erie County", value: 54.2, period: "2020–2022", className: "is-erie" },
      { name: "Niagara County", value: 51.9, period: "2020–2022", className: "is-niagara" },
      { name: "New York State", value: 64.1, period: "2020–2022", className: "is-new-york" },
      { name: "United States", value: 36.4, period: "2020", className: "is-us" },
    ],
  },
  "premature-birth": {
    title: "Premature births before 37 weeks",
    unit: "Percent of live births",
    explanation:
      "Erie, Niagara, and New York use 2021–2023 vital-record totals. The national reference is CDC's final 2023 rate; the definition is the same and the period difference is visible.",
    rows: [
      { name: "Erie County", value: 11.1, period: "2021–2023", className: "is-erie" },
      { name: "Niagara County", value: 10.9, period: "2021–2023", className: "is-niagara" },
      { name: "New York State", value: 9.6, period: "2021–2023", className: "is-new-york" },
      { name: "United States", value: 10.41, period: "2023", className: "is-us" },
    ],
  },
  "low-birth-weight": {
    title: "Low-birthweight births below 2,500 grams",
    unit: "Percent of live births",
    explanation:
      "Erie, Niagara, and New York use 2021–2023 vital-record totals. The national reference is CDC's final 2023 rate; the matching definition and differing period are printed here.",
    rows: [
      { name: "Erie County", value: 9.4, period: "2021–2023", className: "is-erie" },
      { name: "Niagara County", value: 9.3, period: "2021–2023", className: "is-niagara" },
      { name: "New York State", value: 8.5, period: "2021–2023", className: "is-new-york" },
      { name: "United States", value: 8.58, period: "2023", className: "is-us" },
    ],
  },
  "childhood-lead": {
    title: "Childhood blood-lead surveillance",
    unit: "No valid state-to-national comparison",
    explanation:
      "CDC says surveillance testing is targeted, is not population-based, and cannot be accurately compared between states or counties. WNYAtlas keeps the published local ZIP records visible without manufacturing a benchmark chart.",
    rows: [],
    availabilityNote: "A comparable Erie–Niagara–New York–United States chart is withheld by design.",
  },
  "drinking-water": {
    title: "Active public water systems serving each county",
    unit: "Active systems in EPA ECHO's July 2026 SDWA extract",
    explanation:
      "These counts include community and non-community systems. They describe the regulated-system directory—not contaminant levels, violations, or health risk.",
    rows: [
      { name: "Erie County", value: 107, period: "July 2026", className: "is-erie" },
      { name: "Niagara County", value: 21, period: "July 2026", className: "is-niagara" },
    ],
    availabilityNote: "EPA's ZIP_CODES_SERVED field is blank for all 128 active systems in this extract, so ZIP shading and state/national count comparisons are not shown.",
  },
};

const countyHealthRecords: PublicHealthMapRecord[] = [
  {
    id: "cancer-erie",
    layer: "cancer",
    name: "Erie County",
    geography: "Erie County",
    coordinates: [-78.795544, 42.888143],
    value: 525.7,
    displayValue: "525.7 per 100,000",
    period: "2018–2020",
    count: 19_415,
    radius: 28,
    detail: "Age-adjusted incidence for all invasive cancer sites combined.",
  },
  {
    id: "cancer-niagara",
    layer: "cancer",
    name: "Niagara County",
    geography: "Niagara County",
    coordinates: [-78.856419, 43.134634],
    value: 548.6,
    displayValue: "548.6 per 100,000",
    period: "2018–2020",
    count: 4_916,
    radius: 29,
    detail: "Age-adjusted incidence for all invasive cancer sites combined.",
  },
  {
    id: "birth-defects-nys-excluding-nyc",
    layer: "birth-defects",
    name: "NYS excluding NYC reference",
    geography: "Regional reference—not a county estimate",
    coordinates: [-78.57, 43.01],
    value: 14.47,
    displayValue: "14.47 per 10,000 live births",
    period: "2022",
    count: 166,
    radius: 26,
    detail:
      "Published prevalence of Trisomy 21 (Down syndrome). Individual defect categories cannot be summed because a child may appear in more than one category.",
  },
  {
    id: "water-erie",
    layer: "drinking-water",
    name: "Erie County system records",
    geography: "Systems reported as serving Erie County, New York",
    coordinates: [-78.795544, 42.888143],
    value: 107,
    displayValue: "107 active public water systems",
    period: "EPA ECHO SDWA extract · July 2026",
    radius: 30,
    detail:
      "The current EPA extract lists 107 active systems serving Erie County: 44 community, 60 transient non-community, and 3 non-transient non-community systems. This is a directory count, not a water-quality score.",
    related: [
      "Buffalo Water Authority · NY1400422 · population served 276,000",
      "ECWA Direct · NY1400443 · population served 228,869",
      "ECWA Amherst · NY1400399 · population served 80,228",
      "Town of Tonawanda Water Department · NY1404556 · population served 58,144",
      "ECWA Hamburg (Village) · NY1400515 · population served 41,538",
    ],
  },
  {
    id: "water-niagara",
    layer: "drinking-water",
    name: "Niagara County system records",
    geography: "Systems reported as serving Niagara County, New York",
    coordinates: [-78.856419, 43.134634],
    value: 21,
    displayValue: "21 active public water systems",
    period: "EPA ECHO SDWA extract · July 2026",
    radius: 24,
    detail:
      "The current EPA extract lists 21 active community water systems serving Niagara County. This is a directory count, not a water-quality score.",
    related: [
      "Niagara Falls Water Board · NY3100568 · population served 55,000",
      "North Tonawanda City · NY3100572 · population served 33,262",
      "Lockport City WTP · NY3100564 · population served 22,279",
      "Lockport Water District #3 · NY3100563 · population served 19,864",
      "Wheatfield Water District · NY3100585 · population served 17,075",
    ],
  },
];

const leadZipValues = [
  ["14001", "Erie", -78.510497, 43.016719, 81, 0],
  ["14004", "Erie", -78.524759, 42.901992, 109, 0],
  ["14006", "Erie", -79.051514, 42.634072, 61, 0],
  ["14025", "Erie", -78.720978, 42.626575, 36, 0],
  ["14031", "Erie", -78.617411, 42.982268, 113, 0],
  ["14032", "Erie", -78.631521, 43.045445, 110, 0],
  ["14043", "Erie", -78.706762, 42.902602, 298, 0],
  ["14047", "Erie", -78.987802, 42.69462, 42, 0],
  ["14051", "Erie", -78.69326, 43.033131, 193, 0],
  ["14052", "Erie", -78.563272, 42.771162, 212, 0],
  ["14057", "Erie", -78.871317, 42.64529, 86, 0],
  ["14059", "Erie", -78.639808, 42.831055, 94, 0],
  ["14072", "Erie", -78.958496, 43.013771, 190, 0],
  ["14080", "Erie", -78.538651, 42.640921, 53, 0],
  ["14085", "Erie", -78.934684, 42.719062, 90, 0],
  ["14086", "Erie", -78.627625, 42.905877, 365, 0],
  ["14111", "Erie", -78.908047, 42.58351, 40, 0],
  ["14141", "Erie", -78.704161, 42.521734, 85, 0],
  ["14170", "Erie", -78.670831, 42.704094, 31, 0],
  ["14206", "Erie", -78.796792, 42.869763, 303, 26],
  ["14207", "Erie", -78.896412, 42.945566, 361, 28],
  ["14208", "Erie", -78.851613, 42.912922, 171, 58],
  ["14211", "Erie", -78.82294, 42.909859, 580, 69],
  ["14212", "Erie", -78.81858, 42.86202, 303, 89],
  ["14214", "Erie", -78.836451, 42.941449, 241, 25],
  ["14215", "Erie", -78.81184, 42.933454, 700, 23],
  ["14221", "Erie", -78.734894, 42.980183, 574, 0],
  ["14222", "Erie", -78.876334, 42.919299, 82, 0],
  ["14228", "Erie", -78.79536, 43.02588, 307, 0],
  ["14092", "Niagara", -79.018833, 43.171111, 93, 0],
  ["14132", "Niagara", -78.872724, 43.147891, 62, 0],
  ["14174", "Niagara", -79.02603, 43.249215, 51, 0],
] as const;

export const publicHealthMapRecords: PublicHealthMapRecord[] = [
  ...countyHealthRecords.filter((record) => record.layer === "drinking-water"),
  ...asthmaZipRecords.map((record) => ({
    id: `asthma-${record.zip}-${record.county.toLowerCase()}`,
    layer: "childhood-asthma" as const,
    name: `ZIP ${record.zip}`,
    geography: `${record.county} County ZIP Code Tabulation Area`,
    coordinates: record.coordinates,
    value: record.rate,
    displayValue: `${record.rate} visits per 10,000`,
    period: "2022–2024",
    count: record.visits,
    radius: Math.min(23, 7 + record.rate / 15),
    detail: `${record.visits} asthma emergency-department visits among residents aged 0–17 were included in this three-year ZIP-level rate. The record counts visits, not unique children.`,
  })),
  ...perinatalZipRecords.flatMap((record) => [
    {
      id: `premature-${record.zip}-${record.county.toLowerCase()}`,
      layer: "premature-birth" as const,
      name: `ZIP ${record.zip}`,
      geography: `${record.county} County ZIP Code Tabulation Area`,
      coordinates: record.coordinates,
      value: record.prematurePercent,
      displayValue: `${record.prematurePercent}% of live births`,
      period: "2021–2023",
      count: record.births,
      radius: Math.min(22, 8 + record.prematurePercent / 1.4),
      detail: `${record.births.toLocaleString()} live births were recorded in the three-year denominator. Premature birth means birth before 37 completed weeks of gestation.`,
    },
    {
      id: `low-birth-weight-${record.zip}-${record.county.toLowerCase()}`,
      layer: "low-birth-weight" as const,
      name: `ZIP ${record.zip}`,
      geography: `${record.county} County ZIP Code Tabulation Area`,
      coordinates: record.coordinates,
      value: record.lowBirthWeightPercent,
      displayValue: `${record.lowBirthWeightPercent}% of live births`,
      period: "2021–2023",
      count: record.births,
      radius: Math.min(22, 8 + record.lowBirthWeightPercent / 1.15),
      detail: `${record.births.toLocaleString()} live births were recorded in the three-year denominator. Low birth weight means 100–2,499 grams.`,
    },
  ]),
  ...leadZipValues.map(([zip, county, longitude, latitude, tests, rate]) => ({
    id: `lead-${zip}-${county.toLowerCase()}`,
    layer: "childhood-lead" as const,
    name: `ZIP ${zip}`,
    geography: `${county} County ZIP-code centroid`,
    coordinates: [longitude, latitude] as [number, number],
    value: rate,
    displayValue: `${rate} per 1,000 tested`,
    period: "2024",
    count: tests,
    radius: rate === 0 ? 7 : Math.min(22, 8 + rate / 7),
    detail:
      rate === 0
        ? `No first-time confirmed blood lead levels ≥10 µg/dL were reported among ${tests} tested children in this published ZIP record.`
        : `${tests} children were tested; the published first-time confirmed elevated incidence was ${rate} per 1,000 tested children.`,
  })),
];

export const publicHealthSources = [
  {
    title: "New York State Cancer Registry",
    agency: "New York State Department of Health",
    url: "https://www.health.ny.gov/statistics/cancer/registry/",
    coverage: "County and state cancer incidence, mortality, stage, survival, and trends",
    updated: "April 2026; registry data currently available through 2023",
  },
  {
    title: "Community Health Indicator Reports: Latest Data",
    agency: "New York State Department of Health",
    url: "https://health.data.ny.gov/Health/Community-Health-Indicator-Reports-CHIRS-Latest-D/54ci-sdfi/about_data",
    coverage: "Reproducible Erie and Niagara County rates and event counts used in this first release",
    updated: "Dataset updated March 25, 2026; cancer extract is 2018–2020, registry data as of October 2022",
  },
  {
    title: "Community Health Indicator Reports: Trend Data",
    agency: "New York State Department of Health",
    url: "https://health.data.ny.gov/Health/Community-Health-Indicator-Reports-CHIRS-Trend-/jb5s-mei3/about_data",
    coverage: "Annual county and New York State excluding New York City trend series",
    updated: "Cancer trend extract covers 2011–2020, registry data as of October 2022",
  },
  {
    title: "State Cancer Profiles: New York",
    agency: "National Cancer Institute and Centers for Disease Control and Prevention",
    url: "https://statecancerprofiles.cancer.gov/quick-profiles/index.php?statename=newyork",
    coverage: "New York and United States reference rates by cancer site, including the annual U.S. all-cancer trend",
    updated: "Incidence references through 2022; this page displays the comparable 2011–2020 observed trend",
  },
  {
    title: "Historical Trends: United States, All Cancer Sites",
    agency: "National Cancer Institute and Centers for Disease Control and Prevention",
    url: "https://www.statecancerprofiles.cancer.gov/historicaltrend/index.php?age=001&cancer=001&datatype=1&displayCI=false&graph=2&output=4&race=00&ruralurban=0&sex=0&stage=999&statefips=00&year=0",
    coverage: "Annual observed U.S. incidence rates for all cancer sites, all races, all ages, and both sexes",
    updated: "The WNYAtlas historical chart uses observed rates for 2011–2020",
  },
  {
    title: "About age-adjusted rates and confidence intervals",
    agency: "New York State Department of Health",
    url: "https://www.health.ny.gov/statistics/cancer/registry/age.htm",
    coverage: "Methodology, 2000 U.S. standard population, confidence intervals, and unstable-rate guidance",
    updated: "Methodology reference",
  },
  {
    title: "United States Cancer Statistics",
    agency: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/united-states-cancer-statistics/",
    coverage: "Official federal cancer incidence and mortality data and visualization tools",
    updated: "Incidence through 2022; mortality through 2023",
  },
  {
    title: "Birth Defect Prevalence: 1992–2022",
    agency: "New York State Department of Health Birth Defects Registry",
    url: "https://health.data.ny.gov/Health/Birth-Defect-Prevalence-1992-2022/mz8x-255x/about_data",
    coverage: "Selected major birth defects by year, sex, and statewide region",
    updated: "Updated May 18, 2026; data through 2022",
  },
  {
    title: "U.S. Birth Defects Prevalence Estimates, 2018–2022",
    agency: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/birth-defects/media/pdfs/2026/04/Data-Brief-Birth-Defects-National-Estimates-2018-2022.pdf",
    coverage: "National annual and pooled prevalence estimates for selected defects, including Trisomy 21",
    updated: "Published April 2026; the comparison uses the 2022 Trisomy 21 estimate",
  },
  {
    title: "Prevention Agenda Tracking Indicators: Subcounty Data",
    agency: "New York State Department of Health",
    url: "https://apps.health.ny.gov/public/tabvis/PHIG_Public/pa/",
    coverage: "ZIP-level childhood asthma emergency-department visit rates and event counts",
    updated: "Current public export; mapped period 2022–2024",
  },
  {
    title: "New York State Asthma Dashboard",
    agency: "New York State Department of Health",
    url: "https://apps.health.ny.gov/public/tabvis/PHIG_Public/asthma/",
    coverage: "County and statewide childhood asthma emergency-department visit rates",
    updated: "Comparison period 2020–2022; SPARCS data as of July 2024",
  },
  {
    title: "Most Recent National Asthma Data",
    agency: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/asthma-data/about/most-recent-asthma-data.html",
    coverage: "National childhood asthma emergency-department visit rate from HCUP",
    updated: "National comparison year 2020",
  },
  {
    title: "County/ZIP Code Perinatal Data Profile",
    agency: "New York State Department of Health Vital Statistics Program",
    url: "https://www.health.ny.gov/statistics/chac/perinatal/",
    coverage: "ZIP-level premature-birth and low-birthweight percentages with three-year birth denominators",
    updated: "Revised February 2026; mapped period 2021–2023",
  },
  {
    title: "County Health Indicators by Race and Ethnicity",
    agency: "New York State Department of Health",
    url: "https://www.health.ny.gov/community/health_equity/reports/",
    coverage: "Published Erie, Niagara, and statewide premature-birth and low-birthweight totals",
    updated: "Comparison period 2021–2023",
  },
  {
    title: "Birthweight and Gestation",
    agency: "Centers for Disease Control and Prevention, National Center for Health Statistics",
    url: "https://www.cdc.gov/nchs/fastats/birthweight.htm",
    coverage: "Final national premature-birth and low-birthweight percentages",
    updated: "National comparison year 2023",
  },
  {
    title: "2025 ZIP Code Tabulation Areas Gazetteer",
    agency: "United States Census Bureau",
    url: "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    coverage: "Representative ZCTA internal points used to place ZIP-area records on the map",
    updated: "2025 Gazetteer release",
  },
  {
    title: "Childhood Blood Lead Testing and Elevated Incidence",
    agency: "New York State Department of Health",
    url: "https://health.data.ny.gov/Health/Childhood-Blood-Lead-Testing-and-Elevated-Incidenc/d54z-enu8/about_data",
    coverage: "ZIP-level testing and first-time confirmed elevated blood-lead incidence",
    updated: "Updated May 14, 2026; mapped year 2024",
  },
  {
    title: "Childhood Blood Lead Surveillance: National Data",
    agency: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/lead-prevention/php/data/national-surveillance-data.html",
    coverage: "National surveillance methods and the warning against state or county comparisons",
    updated: "Reviewed August 2026",
  },
  {
    title: "Safe Drinking Water Information System",
    agency: "United States Environmental Protection Agency",
    url: "https://www.epa.gov/waterdata/safe-drinking-water-information-system",
    coverage: "Public water-system identity, population served, compliance, violations, and enforcement records",
    updated: "EPA ECHO system-search extract published July 21, 2026",
  },
  {
    title: "SDWA Data Download Summary and Data Element Dictionary",
    agency: "United States Environmental Protection Agency ECHO",
    url: "https://echo.epa.gov/tools/data-downloads/sdwa-download-summary",
    coverage: "Definitions for active-system status, system type, service areas, and compliance fields",
    updated: "Current federal data dictionary reviewed August 2026",
  },
];
