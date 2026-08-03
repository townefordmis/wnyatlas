import type {
  LandscapeEvidenceConfidence,
  WaterwayEvidenceType,
} from "@/data/former-waterways";

type LandscapeChangeGeometryBase = {
  id: string;
  recordId: string;
  name: string;
  evidenceType: WaterwayEvidenceType;
  sourceYear: string;
  sourceUrl: string;
  sourceLabel: string;
  confidence: LandscapeEvidenceConfidence;
  boundaryNote: string;
  mapLabel?: string;
};

export type LandscapeChangeGeometry = LandscapeChangeGeometryBase &
  (
    | {
        geometryType: "Polygon";
        coordinates: [number, number][][];
      }
    | {
        geometryType: "LineString";
        coordinates: [number, number][];
      }
  );

/**
 * Atlas research geometries are visual reconstructions from cited agency maps.
 * They are deliberately separate from parcel, cleanup, and exposure boundaries.
 */
export const landscapeChangeGeometries: LandscapeChangeGeometry[] = [
  {
    id: "cayuga-island-western-tip-extension",
    recordId: "cayuga-island-manmade-extensions",
    name: "Cayuga Island western-tip extension",
    geometryType: "Polygon",
    coordinates: [[
      [-78.9771627, 43.0720914],
      [-78.9768618, 43.072814],
      [-78.9757151, 43.0729446],
      [-78.9742881, 43.0731327],
      [-78.9733011, 43.0732345],
      [-78.97298, 43.07289],
      [-78.97312, 43.07242],
      [-78.9734431, 43.0718922],
      [-78.9755658, 43.0719192],
      [-78.9770155, 43.0719489],
      [-78.9771627, 43.0720914],
    ]],
    evidenceType: "documented_reclaimed_land",
    sourceYear: "1991 agency sketch; change documented before 1930 and 1958–1962",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/932008/Work%20Plan.HW.932008.1991-10-28.DATA_COLLECTION_PROGRAM.pdf",
    sourceLabel: "NYSDEC Cayuga Island data-collection record — Site 932008",
    confidence: "agency_mapped_approximation",
    boundaryNote:
      "Approximate Atlas reconstruction of the western hatched area on the DEC sketch, aligned to the modern island shoreline. It is not a surveyed site or parcel boundary.",
  },
  {
    id: "cayuga-island-south-shore-extension",
    recordId: "cayuga-island-manmade-extensions",
    name: "Cayuga Island south-shore extension",
    geometryType: "Polygon",
    coordinates: [[
      [-78.96532, 43.07275],
      [-78.96395, 43.07252],
      [-78.96255, 43.07249],
      [-78.96068, 43.07173],
      [-78.95802, 43.07148],
      [-78.95564, 43.07131],
      [-78.95431, 43.07142],
      [-78.95364, 43.07172],
      [-78.9543694, 43.07098],
      [-78.955636, 43.0710324],
      [-78.9579968, 43.071212],
      [-78.9594979, 43.0712515],
      [-78.9606902, 43.0714503],
      [-78.9608174, 43.0717529],
      [-78.9618775, 43.0716487],
      [-78.9618173, 43.0719712],
      [-78.9623439, 43.0721916],
      [-78.9639208, 43.0722564],
      [-78.9645995, 43.0722712],
      [-78.96532, 43.07275],
    ]],
    evidenceType: "documented_reclaimed_land",
    sourceYear: "1991 agency sketch; shoreline comparison documented for 1927–1980",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/932008/Work%20Plan.HW.932008.1991-10-28.DATA_COLLECTION_PROGRAM.pdf",
    sourceLabel: "NYSDEC Cayuga Island data-collection record — Site 932008",
    confidence: "agency_mapped_approximation",
    boundaryNote:
      "Approximate Atlas reconstruction of the south-shore hatched area on the DEC sketch, aligned to modern shoreline controls. It does not include the separately discussed Hennepin Avenue property.",
  },
  {
    id: "south-ogden-circa-1927-channel",
    recordId: "south-ogden-former-river-channel",
    name: "Approximate Buffalo River channel, circa 1927",
    geometryType: "Polygon",
    coordinates: [[
      [-78.80835, 42.86413],
      [-78.80778, 42.86363],
      [-78.80712, 42.86299],
      [-78.80605, 42.86255],
      [-78.80472, 42.86246],
      [-78.80365, 42.86262],
      [-78.80242, 42.86268],
      [-78.80235, 42.86318],
      [-78.80363, 42.86302],
      [-78.80479, 42.86284],
      [-78.80583, 42.86289],
      [-78.80674, 42.86322],
      [-78.80738, 42.86382],
      [-78.80786, 42.86427],
      [-78.80835, 42.86413],
    ]],
    evidenceType: "documented_disposal_fill",
    sourceYear: "2012 work-plan Figure 2, depicting the approximate circa-1927 channel",
    sourceUrl:
      "https://extapps.dec.ny.gov/data/DecDocs/C915268/Work%20Plan.BCP.C915268.2012-12-28.Final_RI_WP.pdf",
    sourceLabel: "NYSDEC Remedial Investigation Work Plan — C915268, Figure 2",
    confidence: "agency_mapped_approximation",
    boundaryNote:
      "Approximate Atlas trace of the historic-channel band shown on the agency figure. It is not the BCP boundary, a parcel line, or a uniform contamination boundary.",
  },
  {
    id: "fern-brook-1926-open-channel",
    recordId: "fern-brook-managed-outlet",
    name: "Approximate Fern Brook open channel, circa 1926",
    mapLabel: "Possible circa-1926 Fern Brook course",
    geometryType: "LineString",
    coordinates: [
      [-79.06504, 42.64311],
      [-79.06555, 42.64295],
      [-79.06586, 42.64234],
      [-79.06572, 42.6417],
      [-79.06608, 42.64105],
      [-79.06602, 42.64043],
      [-79.06647, 42.63972],
      [-79.06672, 42.63895],
      [-79.06708, 42.63812],
      [-79.06722, 42.63735],
    ],
    evidenceType: "documented_engineered_waterway",
    sourceYear:
      "1926 Erie County plates B3-B10 and B3-B9, checked against 1951 photograph 6H20 and present USGS hydrography",
    sourceUrl:
      "https://www3.erie.gov/sites/default/files/images/aerialphotos/1920s/b3_b10.jpg",
    sourceLabel: "Erie County 1926 aerial photograph B3-B10",
    confidence: "agency_mapped_approximation",
    boundaryNote:
      "Approximate Atlas alignment of the visible open drainage corridor, anchored to surviving roads, the lake outlet and present USGS hydrography. The county scans are not georeferenced, so this is not a surveyed centerline. It does not claim the exact route of the later abandoned culvert.",
  },
];
