export const birthDefectRegionalLatest = [
  { condition: "Trisomy 21 (Down syndrome)", count: 166, prevalence: 14.47, note: "Extra copy of chromosome 21" },
  { condition: "Deletion 22q11.2", count: 33, prevalence: 2.88, note: "Chromosomal deletion syndrome" },
  { condition: "Turner syndrome", count: 18, prevalence: 1.57, note: "Missing or altered X chromosome" },
  { condition: "Trisomy 18", count: 13, prevalence: 1.13, note: "Extra copy of chromosome 18" },
  { condition: "Trisomy 13", count: 9, prevalence: 0.78, note: "Extra copy of chromosome 13" },
] as const;

export const downSyndromeRegionalTrend = [
  { year: 2018, count: 146, births: 117341, prevalence: 12.44 },
  { year: 2019, count: 147, births: 116242, prevalence: 12.65 },
  { year: 2020, count: 151, births: 112733, prevalence: 13.39 },
  { year: 2021, count: 136, births: 117424, prevalence: 11.58 },
  { year: 2022, count: 166, births: 114718, prevalence: 14.47 },
] as const;

export const downSyndromeWnyCounties = [
  { county: "Allegany", count: 3, births: 1461, prevalence: 20.53 },
  { county: "Cattaraugus", count: 2, births: 2746, prevalence: 7.28 },
  { county: "Chautauqua", count: 3, births: 4223, prevalence: 7.10 },
  { county: "Erie", count: 39, births: 29927, prevalence: 13.03 },
  { county: "Genesee", count: 1, births: 1796, prevalence: 5.57 },
  { county: "Niagara", count: 7, births: 6493, prevalence: 10.78 },
  { county: "Orleans", count: 1, births: 1236, prevalence: 8.09 },
  { county: "Wyoming", count: 1, births: 1153, prevalence: 8.67 },
] as const;

export const birthDefectSources = [
  {
    title: "Birth Defect Prevalence: 1992–2022",
    agency: "New York State Department of Health · Birth Defects Registry",
    url: "https://health.data.ny.gov/Health/Birth-Defect-Prevalence-Beginning-1992/mz8x-255x",
    note: "Current public annual series. The local reference used here is NYS excluding NYC; it is not a WNY estimate.",
  },
  {
    title: "Historical county birth-defects export",
    agency: "New York State Department of Health · Environmental Public Health Tracking",
    url: "https://apps.health.ny.gov/statistics/environmental/public_health_tracking/tracker/files/birthdefects/NYS_BD.csv",
    note: "Official three-year county counts and live-birth denominators covering 2000–2014.",
  },
  {
    title: "About Birth Defects Data",
    agency: "New York State Department of Health",
    url: "https://www.health.ny.gov/statistics/environmental/public_health_tracking/about_pages/birth_defects/about_data",
    note: "Registry definitions, geography, reporting method, and the fewer-than-12 instability rule.",
  },
] as const;
