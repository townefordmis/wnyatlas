export const buffaloWaterSources = {
  pipeHistory: { label: "American Journal of Public Health (2008) · The lead industry and lead water pipes", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2509614/" },
  history: { label: "Buffalo Water · Water treatment history", url: "https://buffalowater.org/quality/treatment/watertreatmenthistory/" },
  inventory: { label: "NYSDOH · Buffalo service-line inventory, certified December 11, 2025", url: "https://www.health.ny.gov/environmental/water/drinking/service_line/NY1400422.htm" },
  launch: { label: "City of Buffalo · ROLL launch, July 22, 2019", url: "https://www.buffalony.gov/m/newsflash/home/detail/429" },
  recovery: { label: "City of Buffalo · 2025 recovery report, lead-line project", url: "https://www.buffalony.gov/DocumentCenter/View/15254/2025-SLFRF-Recovery-Plan-Performance-Reportcleaned" },
  minutes: { label: "Buffalo Water Board · November 12, 2025 minutes", url: "https://buffalowater.org/wp-content/uploads/2025/12/Buffalo-Water-Board-Meeting-Minutes-November-12-2025.pdf" },
  grant: { label: "Rep. Timothy Kennedy · February 18, 2026 funding announcement", url: "https://kennedy.house.gov/news/documentsingle.aspx?DocumentID=2367" },
  report: { label: "Buffalo Water · 2025 water-quality report, released 2026", url: "https://buffalowater.org/wp-content/uploads/2026/06/2025-AWQR-Buffalo-Water-Final-5.29.2026.pdf" },
  faq: { label: "Buffalo Water · Get Water Wise FAQ", url: "https://getwaterwisebuffalo.org/en/faq/" },
  epa: { label: "EPA · Lead in drinking water and exposure reduction", url: "https://www.epa.gov/ground-water-and-drinking-water/basic-information-about-lead-drinking-water" },
  cdc: { label: "CDC · Childhood lead exposure and development", url: "https://www.cdc.gov/lead-prevention/about/index.html" },
  symptoms: { label: "CDC · Symptoms, complications and testing", url: "https://www.cdc.gov/lead-prevention/symptoms-complications/index.html" },
} as const;

export const buffaloLineInventory = [
  { label: "Lead", count: 33600, note: "Classified as lead in the published inventory." },
  { label: "Galvanized requiring replacement", count: 120, note: "A separate replacement category; not counted as lead here." },
  { label: "Unknown material", count: 35372, note: "Material remains unresolved; unknown does not mean confirmed lead." },
  { label: "Non-lead", count: 7365, note: "Service-line classification does not assess every fixture inside a home." },
] as const;

export const buffaloReplacementMilestones = [
  { date: "July 2019", title: "ROLL begins", text: "The city formally launched Replace Old Lead Lines after a pilot addressing breaks and leaks. Its announcement reported 30 homes completed since June, with roughly 180 planned for the initial program.", source: buffaloWaterSources.launch },
  { date: "June 2024 · reported in 2025", title: "A funded expansion finishes", text: "The city's recovery report says its $10 million American Rescue Plan initiative replaced lead lines at more than 700 residential properties and finished in June 2024. This is the documented expansion, not a citywide lifetime total.", source: buffaloWaterSources.recovery },
  { date: "November 2025", title: "Work continues, but applications face a cutoff", text: "Board minutes report 25 residential services replaced under ROLL in October. They also state that the board will stop accepting new applications for replacement at no cost to the owner.", source: buffaloWaterSources.minutes },
  { date: "February 2026", title: "New federal funding is announced", text: "Rep. Timothy Kennedy announced $1,092,000 for Buffalo lead service-line replacement, targeting disadvantaged communities. An award is a funding milestone; it is not evidence that those replacements are already complete.", source: buffaloWaterSources.grant },
] as const;
