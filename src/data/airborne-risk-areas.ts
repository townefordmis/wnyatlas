export type AirborneRiskArea = {
  id: string;
  name: string;
  sourcePeriod: string;
  documentedAirPeriod: string;
  status: string;
  description: string;
  center: [number, number];
  sourcePoint: [number, number];
  orientationPolygon: [number, number][];
  timeline: { period: string; event: string }[];
  presentStatus: string;
  sources: { title: string; publisher: string; url: string }[];
};

export const airborneRiskAreas: AirborneRiskArea[] = [
  {
    id: "tonawanda-industrial-study-area",
    name: "Tonawanda industrial air-study area",
    sourcePeriod:
      "Coke production occurred on the property from 1917 until permanent shutdown in October 2018. This operating span is not presented as a continuous exposure period.",
    documentedAirPeriod:
      "Community monitoring began in July 2007; the principal DEC study covered July 2007–June 2008, with follow-up measurements and facility testing continuing through 2010 and later regulatory work.",
    status: "Documented monitoring and modeled community impact",
    description:
      "DEC monitoring and dispersion modeling identified elevated hazardous air pollutants, including benzene linked to Tonawanda Coke. The shaded area is an atlas orientation area around the communities studied—not a regulatory exposure boundary or a reconstruction of conditions on any particular day.",
    center: [-78.902, 42.997],
    sourcePoint: [-78.92593, 42.98318],
    orientationPolygon: [
      [-78.966, 42.958],
      [-78.846, 42.958],
      [-78.846, 43.042],
      [-78.966, 43.042],
      [-78.966, 42.958],
    ],
    timeline: [
      { period: "1917", event: "Coke manufacturing began on the River Road property." },
      { period: "July 2007–June 2008", event: "DEC conducted the principal year-long community air-quality study." },
      { period: "2008–2010", event: "Follow-up monitoring and facility testing tracked benzene and other hazardous air pollutants." },
      { period: "October 2018", event: "The plant permanently shut down; DEC and EPA monitored the shutdown and purging of the coke ovens." },
      { period: "2020 onward", event: "The main plant entered New York's Brownfield Cleanup Program; remaining areas were addressed through federal and state oversight." },
    ],
    presentStatus:
      "This layer documents the historic study area and findings. It is not a current air-quality forecast. EPA reported that its October 2018 shutdown monitoring did not exceed the contaminant levels used to protect the public; property cleanup and redevelopment are separate from the 2007–2008 community study.",
    sources: [
      {
        title: "Tonawanda Community Air Quality Study",
        publisher: "NYSDEC / U.S. EPA",
        url: "https://www.epa.gov/sites/default/files/2020-01/documents/tonawanda.pdf",
      },
      {
        title: "Community Air Quality — Tonawanda study archive",
        publisher: "NYSDEC",
        url: "https://dec.ny.gov/environmental-protection/air-quality/community-air-quality",
      },
      {
        title: "Tonawanda Coke Corporation site history and response",
        publisher: "U.S. EPA",
        url: "https://www.epa.gov/ny/tonawanda-coke-corporation-tcc-site",
      },
    ],
  },
  {
    id: "love-canal-emergency-area",
    name: "Love Canal emergency-response neighborhood",
    sourcePeriod:
      "Chemical disposal occurred approximately 1942–1953; residential development followed. These dates alone do not establish when or how much any person was exposed.",
    documentedAirPeriod:
      "Chemical vapors and fumes were formally documented during New York's 1978 emergency investigation and health orders. The available record does not support one uniform exposure start and end date for every nearby property.",
    status: "Documented vapors, fumes, and emergency public-health action",
    description:
      "New York documented chemical vapors and fumes affecting ambient air and buildings near the landfill. The shaded area provides neighborhood-scale orientation only; it does not assert that every property experienced the same chemical, concentration, duration, or exposure.",
    center: [-78.949, 43.08],
    sourcePoint: [-78.949, 43.08],
    orientationPolygon: [
      [-78.9615, 43.069],
      [-78.9365, 43.069],
      [-78.9365, 43.091],
      [-78.9615, 43.091],
      [-78.9615, 43.069],
    ],
    timeline: [
      { period: "1942–1953", event: "Chemical wastes were disposed in the unfinished canal; the landfill was covered in 1953." },
      { period: "1950s–1970s", event: "A school and homes were built next to the covered landfill." },
      { period: "August 1978", event: "New York declared a public-health emergency after investigation documented chemical migration, odors, vapors, and other evidence." },
      { period: "1978–1980", event: "State and federal emergency actions relocated residents and established the larger Emergency Declaration Area." },
      { period: "1978–1985", event: "Containment, drainage, treatment, cap, sewer, and creek work formed the central remedy." },
      { period: "2004–present", event: "EPA deleted the site from the Superfund list in 2004; operation, maintenance, and monitoring continue." },
    ],
    presentStatus:
      "The shaded neighborhood is historical orientation for the emergency-response record, not a statement of present exposure. EPA reports that the containment remedy remains under operation, maintenance, and monitoring.",
    sources: [
      {
        title: "Love Canal Chemical Waste Landfill Health Order",
        publisher: "New York State Department of Health",
        url: "https://www.health.ny.gov/environmental/investigations/love_canal/docs/lctimbmb.pdf",
      },
      {
        title: "Love Canal investigation and follow-up health-study archive",
        publisher: "New York State Department of Health",
        url: "https://www.health.ny.gov/environmental/investigations/love_canal/index.htm",
      },
      {
        title: "Love Canal Superfund site profile and current status",
        publisher: "U.S. EPA",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201290",
      },
    ],
  },
];
