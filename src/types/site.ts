export type EvidenceStatus =
  | "well-documented"
  | "research-in-progress"
  | "research-lead";

export type AtlasSite = {
  id: string;
  name: string;
  municipality: string;
  county: "Erie" | "Niagara" | "Cattaraugus";
  category: "industry" | "cleanup" | "radiological" | "waterway";
  summary: string;
  evidenceStatus: EvidenceStatus;
  coordinates: [longitude: number, latitude: number];
};
