export type EvidenceStatus =
  | "well-documented"
  | "research-in-progress"
  | "research-lead";

export type AtlasSource = {
  title: string;
  publisher: string;
  url: string;
};

export type AtlasSite = {
  id: string;
  name: string;
  municipality: string;
  county: "Erie" | "Niagara" | "Cattaraugus" | "Chautauqua";
  category: "industry" | "cleanup" | "radiological" | "waterway" | "pfas";
  summary: string;
  evidenceStatus: EvidenceStatus;
  coordinates: [longitude: number, latitude: number];
  sources?: AtlasSource[];
  atomicLegacy?: {
    era:
      | "Manhattan Project"
      | "Early Atomic Energy Commission"
      | "Manhattan Project-derived material"
      | "FUSRAP — origin unconfirmed";
    role: string;
  };
};
