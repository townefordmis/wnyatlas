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
  source: { title: string; publisher: string; url: string };
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
    source: {
      title: "Tonawanda Community Air Quality Study",
      publisher: "NYSDEC / U.S. EPA",
      url: "https://www.epa.gov/sites/default/files/2020-01/documents/tonawanda.pdf",
    },
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
    source: {
      title: "Love Canal Chemical Waste Landfill Health Order",
      publisher: "New York State Department of Health",
      url: "https://www.health.ny.gov/environmental/investigations/love_canal/docs/lctimbmb.pdf",
    },
  },
];
