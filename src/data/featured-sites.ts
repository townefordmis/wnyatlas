import type { AtlasSite } from "@/types/site";

export const featuredSites: AtlasSite[] = [
  {
    id: "love-canal",
    name: "Love Canal",
    municipality: "Niagara Falls",
    county: "Niagara",
    category: "cleanup",
    summary: "Chemical disposal, public-health response, containment, and monitoring.",
    evidenceStatus: "well-documented",
    coordinates: [-78.949, 43.08],
  },
  {
    id: "buffalo-color",
    name: "Buffalo Color",
    municipality: "Buffalo",
    county: "Erie",
    category: "industry",
    summary: "A multi-parcel chemical manufacturing and remediation landscape.",
    evidenceStatus: "well-documented",
    coordinates: [-78.854, 42.858],
  },
  {
    id: "buffalo-river",
    name: "Buffalo River",
    municipality: "Buffalo",
    county: "Erie",
    category: "waterway",
    summary: "Industrial corridor, sediment cleanup, habitat restoration, and recovery.",
    evidenceStatus: "well-documented",
    coordinates: [-78.873, 42.864],
  },
  {
    id: "linde-air-products",
    name: "Linde Air Products",
    municipality: "Town of Tonawanda",
    county: "Erie",
    category: "radiological",
    summary: "Manhattan Project uranium processing and the regional FUSRAP story.",
    evidenceStatus: "well-documented",
    coordinates: [-78.911, 42.999],
  },
];
