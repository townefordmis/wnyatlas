export type RadiologicalDisposition =
  | "federal-remediated"
  | "historical-anomaly"
  | "building-material-or-unconfirmed";

export type HistoricalRadiologicalRecord = {
  id: number;
  name: string;
  location: string;
  area: "Pletcher Road" | "Lewiston" | "Town of Niagara" | "Grand Island" | "Niagara Falls";
  coordinates: [number, number];
  coordinatePrecision: "survey-offset-approximate" | "address" | "intersection" | "facility-approximate";
  disposition: RadiologicalDisposition;
  nfssRelated: boolean;
  oneMeterMicroRPerHour?: number;
  surfaceMicroRPerHour?: number;
  scanRangeMicroRPerHour?: [number, number];
  note: string;
};

export type RadiologicalProducer = {
  id: string;
  name: string;
  role: "producer" | "processor" | "storage" | "cleanup" | "reported-distributor";
  county: "Erie" | "Niagara";
  coordinates?: [number, number];
  location: string;
  evidence: "documented" | "reported";
  summary: string;
  relatedSiteId?: string;
  sourceLabel: string;
  sourceUrl: string;
};

export type RadiologicalDocument = {
  id: string;
  title: string;
  agency: string;
  date: string;
  year: number;
  kind: "survey" | "audit-review" | "cleanup-decision" | "worker-record" | "current-assessment";
  geography: "Erie" | "Niagara" | "Erie and Niagara";
  status: "final" | "historical" | "ongoing";
  establishes: string;
  mapConnection: string;
  url: string;
};

export const historicalSurveySource = {
  label: "DOE/ORNL Niagara Falls radiological measurements report (1986)",
  url: "https://lmpublicsearch.lm.doe.gov/LMSites/2726-NY.17-10_NFSS.pdf",
};

const pletcherCreek: [number, number] = [-79.017709977467, 43.209178998698];
const pletcherHarold: [number, number] = [-78.980964719775, 43.208794604618];
const pletcherLengthFeet = 9820;

function between(
  start: [number, number],
  end: [number, number],
  feet: number,
): [number, number] {
  const fraction = Math.min(1, feet / pletcherLengthFeet);
  return [
    start[0] + (end[0] - start[0]) * fraction,
    start[1] + (end[1] - start[1]) * fraction,
  ];
}

const eastFromCreek = [
  2200, 2950, 3950, 4080, 4300, 4880, 5775, 6460, 6875, 7025, 7138,
  7192, 7312, 7340, 7407, 7452, 7525, 7600, 7915, 7927, 8343, 8628, 8960,
];
const westFromHarold = [746, 1169, 1298, 1488, 2333, 2363, 2530, 2768, 2844, 6170];
const pletcherSurface = [
  31, 86, 57, 49, 49, 63, 49, 43, 34, 43, 49, 49, 51, 49, 49, 29, 49, 57,
  71, 49, 49, 57, 230, 33, 29, 31, 46, 57, 33, 34, 33, 33, 57, 33, 77,
];

const pletcherRecords: HistoricalRadiologicalRecord[] = [
  ...eastFromCreek.map((feet, index) => ({
    id: index + 1,
    name: `1984 anomaly ${index + 1}`,
    location: `${feet.toLocaleString()} feet east of Creek Road along Pletcher Road`,
    area: "Pletcher Road" as const,
    coordinates: between(pletcherCreek, pletcherHarold, feet),
    coordinatePrecision: "survey-offset-approximate" as const,
    disposition: "federal-remediated" as const,
    nfssRelated: true,
    surfaceMicroRPerHour: pletcherSurface[index],
    scanRangeMicroRPerHour: index === 22 ? ([11, 230] as [number, number]) : ([11, 86] as [number, number]),
    note: "The federal report attributed this Pletcher Road anomaly to Niagara Falls Storage Site-related material. It was among the 38 locations later remediated under FUSRAP.",
  })),
  ...westFromHarold.map((feet, index) => {
    const id = index + 24;
    return {
      id,
      name: `1984 anomaly ${id}`,
      location: `${feet.toLocaleString()} feet west of Harold Road along Pletcher Road`,
      area: "Pletcher Road" as const,
      coordinates: between(pletcherHarold, pletcherCreek, feet),
      coordinatePrecision: "survey-offset-approximate" as const,
      disposition: "federal-remediated" as const,
      nfssRelated: true,
      surfaceMicroRPerHour: pletcherSurface[id - 1],
      scanRangeMicroRPerHour: [9, 57] as [number, number],
      note: "The federal report attributed this Pletcher Road anomaly to Niagara Falls Storage Site-related material. It was among the 38 locations later remediated under FUSRAP.",
    };
  }),
  {
    id: 34,
    name: "1984 anomaly 34",
    location: "About 490 feet east of the KOA entrance on Old Pletcher Road",
    area: "Pletcher Road",
    coordinates: [-78.98809, 43.20842],
    coordinatePrecision: "survey-offset-approximate",
    disposition: "federal-remediated",
    nfssRelated: true,
    surfaceMicroRPerHour: pletcherSurface[33],
    scanRangeMicroRPerHour: [9, 57],
    note: "The federal report attributed this Old Pletcher Road anomaly to Niagara Falls Storage Site-related material. It was among the 38 locations later remediated under FUSRAP.",
  },
  {
    id: 35,
    name: "1984 anomaly 35",
    location: "About 570 feet east of the KOA entrance on Old Pletcher Road",
    area: "Pletcher Road",
    coordinates: [-78.98779, 43.20842],
    coordinatePrecision: "survey-offset-approximate",
    disposition: "federal-remediated",
    nfssRelated: true,
    surfaceMicroRPerHour: pletcherSurface[34],
    scanRangeMicroRPerHour: [9, 57],
    note: "The federal report attributed this Old Pletcher Road anomaly to Niagara Falls Storage Site-related material. It was among the 38 locations later remediated under FUSRAP.",
  },
];

type LaterRecord = Omit<HistoricalRadiologicalRecord, "name" | "note" | "nfssRelated" | "disposition"> & {
  disposition?: RadiologicalDisposition;
  note?: string;
};

const laterRecords: LaterRecord[] = [
  { id:36, location:"961 Ridge Road", area:"Lewiston", coordinates:[-79.008016893178,43.174440033349], coordinatePrecision:"address", surfaceMicroRPerHour:34 },
  { id:37, location:"Between 889 and 913 Ridge Road", area:"Lewiston", coordinates:[-79.011671173563,43.173888602599], coordinatePrecision:"address", surfaceMicroRPerHour:34 },
  { id:38, location:"1084 Ridge Road", area:"Lewiston", coordinates:[-79.000580049586,43.174229270394], coordinatePrecision:"address", surfaceMicroRPerHour:49 },
  { id:39, location:"Ridge and Model City roads", area:"Lewiston", coordinates:[-78.983561014283,43.178836006289], coordinatePrecision:"intersection", surfaceMicroRPerHour:40 },
  { id:40, location:"1011 Upper Mountain Road", area:"Lewiston", coordinates:[-79.005843465685,43.163166122121], coordinatePrecision:"address", surfaceMicroRPerHour:57 },
  { id:41, location:"783 Upper Mountain Road", area:"Lewiston", coordinates:[-79.018868356486,43.156368189098], coordinatePrecision:"address", surfaceMicroRPerHour:43 },
  { id:42, location:"789 Upper Mountain Road", area:"Lewiston", coordinates:[-79.018405423974,43.156376277635], coordinatePrecision:"address", surfaceMicroRPerHour:130 },
  { id:43, location:"738 Upper Mountain Road", area:"Lewiston", coordinates:[-79.022107962064,43.155349494496], coordinatePrecision:"address", surfaceMicroRPerHour:710 },
  { id:44, location:"4977 Creek Road Extension", area:"Lewiston", coordinates:[-79.024898213812,43.168935511806], coordinatePrecision:"address" },
  { id:45, location:"4979 Creek Road Extension", area:"Lewiston", coordinates:[-79.025118993141,43.168886226215], coordinatePrecision:"address", surfaceMicroRPerHour:29 },
  { id:46, location:"4945 Creek Road Extension", area:"Lewiston", coordinates:[-79.021393488637,43.16991246453], coordinatePrecision:"address", surfaceMicroRPerHour:29 },
  { id:47, location:"Former Routes 18 and 104 junction", area:"Lewiston", coordinates:[-78.979203385718,43.179685768645], coordinatePrecision:"intersection", surfaceMicroRPerHour:77, disposition:"federal-remediated" },
  { id:48, location:"4986 Creek Road Extension", area:"Lewiston", coordinates:[-79.026269912266,43.169532848135], coordinatePrecision:"address", surfaceMicroRPerHour:40 },
  { id:49, location:"Opposite 5439–5441 Military Road", area:"Town of Niagara", coordinates:[-79.025346229961,43.149151699828], coordinatePrecision:"address", surfaceMicroRPerHour:29 },
  { id:50, location:"Reservoir State Park, northwest of Military Road and Route 31", area:"Town of Niagara", coordinates:[-79.0111952,43.1323049], coordinatePrecision:"facility-approximate", surfaceMicroRPerHour:46 },
  { id:51, location:"Military and Lockport roads", area:"Town of Niagara", coordinates:[-78.997509004081,43.120337991566], coordinatePrecision:"intersection", surfaceMicroRPerHour:29, disposition:"federal-remediated" },
  { id:52, location:"2924 Military Road", area:"Town of Niagara", coordinates:[-78.989662201605,43.111951897439], coordinatePrecision:"address", surfaceMicroRPerHour:140 },
  { id:53, location:"6560 Niagara Falls Boulevard", area:"Town of Niagara", coordinates:[-78.988587222522,43.089749828488], coordinatePrecision:"address", surfaceMicroRPerHour:71 },
  { id:54, location:"1865 Third Street", area:"Town of Niagara", coordinates:[-78.982371595138,43.098086243392], coordinatePrecision:"address", surfaceMicroRPerHour:86 },
  { id:55, location:"2115 Third Street", area:"Town of Niagara", coordinates:[-78.980493933327,43.099482372947], coordinatePrecision:"address", surfaceMicroRPerHour:43 },
  { id:56, location:"4301 Military Road", area:"Town of Niagara", coordinates:[-79.001631198721,43.124647860839], coordinatePrecision:"address", surfaceMicroRPerHour:43 },
  { id:57, location:"4509 Military Road", area:"Town of Niagara", coordinates:[-79.004477215467,43.12794519734], coordinatePrecision:"address", surfaceMicroRPerHour:26 },
  { id:58, location:"4611–4613 Military Road", area:"Town of Niagara", coordinates:[-79.006385607182,43.128807276082], coordinatePrecision:"address", surfaceMicroRPerHour:43 },
  { id:59, location:"908 North Military Road", area:"Town of Niagara", coordinates:[-78.963555003965,43.084730283862], coordinatePrecision:"address", surfaceMicroRPerHour:77 },
  { id:60, location:"1329 North Military Road", area:"Town of Niagara", coordinates:[-78.968986861988,43.091500371276], coordinatePrecision:"address", surfaceMicroRPerHour:49 },
  { id:61, location:"3121 Grand Island Boulevard", area:"Grand Island", coordinates:[-78.986053959926,43.047026010718], coordinatePrecision:"address", oneMeterMicroRPerHour:21, surfaceMicroRPerHour:49 },
  { id:62, location:"1685 Grand Island Boulevard", area:"Grand Island", coordinates:[-78.948663966241,43.007842457391], coordinatePrecision:"address", oneMeterMicroRPerHour:9, surfaceMicroRPerHour:29 },
  { id:63, location:"3060 Grand Island Boulevard", area:"Grand Island", coordinates:[-78.985238652204,43.044896797764], coordinatePrecision:"address", oneMeterMicroRPerHour:29, surfaceMicroRPerHour:140, scanRangeMicroRPerHour:[29,160], note:"A biased 1984 soil sample was reported at 25 pCi/g Ra-226, 39 pCi/g Th-232, and 26 pCi/g U-238. These are historical measurements, not a statement of current conditions." },
  { id:64, location:"3050 Grand Island Boulevard", area:"Grand Island", coordinates:[-78.984958445181,43.044554858024], coordinatePrecision:"address", oneMeterMicroRPerHour:34, surfaceMicroRPerHour:57 },
  { id:65, location:"3044 Grand Island Boulevard", area:"Grand Island", coordinates:[-78.984753842924,43.044405031504], coordinatePrecision:"address", oneMeterMicroRPerHour:31, surfaceMicroRPerHour:51 },
  { id:66, location:"2570 Grand Island Boulevard", area:"Grand Island", coordinates:[-78.972945585369,43.031279683593], coordinatePrecision:"address", oneMeterMicroRPerHour:13, surfaceMicroRPerHour:17 },
  { id:67, location:"Cudaback Avenue and Portage Road", area:"Niagara Falls", coordinates:[-79.041805015431,43.086052990093], coordinatePrecision:"intersection" },
  { id:68, location:"Between 245 and 257 Portage Road", area:"Niagara Falls", coordinates:[-79.042030234923,43.086460756206], coordinatePrecision:"address" },
  { id:69, location:"Pine Avenue and Portage Road", area:"Niagara Falls", coordinates:[-79.048582035605,43.094790998425], coordinatePrecision:"intersection" },
  { id:70, location:"1318–1324 Portage Road", area:"Niagara Falls", coordinates:[-79.051654159908,43.101415612712], coordinatePrecision:"address" },
  { id:71, location:"Former Harris & Lever Florists, Portage Road", area:"Niagara Falls", coordinates:[-79.04975526491,43.096301040841], coordinatePrecision:"facility-approximate" },
  { id:72, location:"574 Portage Road", area:"Niagara Falls", coordinates:[-79.047625157539,43.092972041617], coordinatePrecision:"address" },
  { id:73, location:"Approximately 504 Portage Road", area:"Niagara Falls", coordinates:[-79.046226720813,43.091385389255], coordinatePrecision:"address" },
  { id:74, location:"Near 434 Portage Road and 1338 Niagara Street", area:"Niagara Falls", coordinates:[-79.044812945204,43.089513291181], coordinatePrecision:"address" },
  { id:75, location:"368 Portage Road", area:"Niagara Falls", coordinates:[-79.04401621605,43.088790965103], coordinatePrecision:"address" },
  { id:76, location:"356 Portage Road", area:"Niagara Falls", coordinates:[-79.04389915012,43.088325449772], coordinatePrecision:"address" },
  { id:77, location:"256 Portage Road", area:"Niagara Falls", coordinates:[-79.042536839397,43.08655443745], coordinatePrecision:"address" },
  { id:78, location:"Between 242 Portage Road and Payne Avenue", area:"Niagara Falls", coordinates:[-79.042433741988,43.086195733904], coordinatePrecision:"address" },
  { id:79, location:"200 Portage Road", area:"Niagara Falls", coordinates:[-79.041568981037,43.08534161797], coordinatePrecision:"address" },
  { id:80, location:"Opposite 5704 Buffalo Avenue", area:"Niagara Falls", coordinates:[-78.998743155505,43.077484547662], coordinatePrecision:"address" },
  { id:81, location:"6901 Buffalo Avenue", area:"Niagara Falls", coordinates:[-78.984351260524,43.074518163968], coordinatePrecision:"address" },
  { id:82, location:"7723 Buffalo Avenue", area:"Niagara Falls", coordinates:[-78.975005521893,43.073837372043], coordinatePrecision:"address" },
  { id:83, location:"5512 Buffalo Avenue", area:"Niagara Falls", coordinates:[-79.000702090096,43.077843879851], coordinatePrecision:"address" },
  { id:84, location:"About 230 feet west of Buffalo Avenue and 53rd Street", area:"Niagara Falls", coordinates:[-79.003542968539,43.078096007499], coordinatePrecision:"survey-offset-approximate" },
  { id:85, location:"Former Occidental/Hooker complex, Buffalo Avenue", area:"Niagara Falls", coordinates:[-79.010492823557,43.07931477813], coordinatePrecision:"facility-approximate" },
  { id:86, location:"Opposite the former ALOX facility on Buffalo Avenue", area:"Niagara Falls", coordinates:[-79.0128,43.0797], coordinatePrecision:"facility-approximate", disposition:"building-material-or-unconfirmed", note:"The 1986 table identifies the location by a former industrial landmark. WNY Atlas shows an approximate facility-area point pending parcel-level verification." },
  { id:87, location:"Buffalo Avenue east of Hyde Park Boulevard", area:"Niagara Falls", coordinates:[-79.018510030126,43.082249994894], coordinatePrecision:"intersection", disposition:"federal-remediated" },
  { id:88, location:"Opposite the former SOHIO facility on Buffalo Avenue", area:"Niagara Falls", coordinates:[-79.000147962477,43.077465017828], coordinatePrecision:"facility-approximate", disposition:"building-material-or-unconfirmed", note:"The historical report identifies this location by a former industrial landmark. The mapped point is approximate pending parcel-level verification." },
  { id:89, location:"1920 Buffalo Avenue", area:"Niagara Falls", coordinates:[-79.038530038222,43.083300792185], coordinatePrecision:"address" },
  { id:90, location:"Opposite the former Carborundum facility, Buffalo Avenue", area:"Niagara Falls", coordinates:[-79.041154747382,43.082387290468], coordinatePrecision:"facility-approximate" },
  { id:91, location:"2434 Willow Avenue", area:"Niagara Falls", coordinates:[-79.032114864808,43.102734192788], coordinatePrecision:"address" },
  { id:92, location:"2430 Willow Avenue", area:"Niagara Falls", coordinates:[-79.03227219313,43.102736288264], coordinatePrecision:"address" },
  { id:93, location:"3017 Lewiston Road", area:"Niagara Falls", coordinates:[-79.056109236114,43.118693545982], coordinatePrecision:"address" },
  { id:94, location:"4831 Lewiston Road", area:"Niagara Falls", coordinates:[-79.046900709647,43.1312512295], coordinatePrecision:"address" },
  { id:95, location:"4842 Lewiston Road", area:"Niagara Falls", coordinates:[-79.047401025448,43.131746725706], coordinatePrecision:"address" },
  { id:96, location:"Rankine and Lewiston roads", area:"Niagara Falls", coordinates:[-79.048202000115,43.129727986236], coordinatePrecision:"intersection" },
  { id:97, location:"McKinley Avenue and Lewiston Road", area:"Niagara Falls", coordinates:[-79.049092996423,43.128340990808], coordinatePrecision:"intersection" },
  { id:98, location:"2919 Porter Road", area:"Niagara Falls", coordinates:[-79.026332273626,43.106933107184], coordinatePrecision:"address" },
  { id:99, location:"2923 Porter Road", area:"Niagara Falls", coordinates:[-79.026174442389,43.106939184064], coordinatePrecision:"address" },
  { id:100, location:"Pine Avenue and 29th Street", area:"Niagara Falls", coordinates:[-79.027011040145,43.097009981562], coordinatePrecision:"intersection" },
];

export const historicalRadiologicalRecords: HistoricalRadiologicalRecord[] = [
  ...pletcherRecords,
  ...laterRecords.map((record) => ({
    ...record,
    name: `1984 anomaly ${record.id}`,
    nfssRelated: record.disposition === "federal-remediated",
    disposition: record.disposition ?? "historical-anomaly",
    note:
      record.note ??
      (record.disposition === "federal-remediated"
        ? "This was one of 38 locations the federal report says were later remediated under FUSRAP."
        : "The report generally associated the non-NFSS readings with phosphate slag/cyclowollastonite used beneath pavement or as gravel, but it does not prove a producer or material source for this individual location. This is a historical survey result, not a statement of current conditions."),
  })),
];

export const radiologicalProducers: RadiologicalProducer[] = [
  {
    id: "oldbury-furnace",
    name: "Oldbury Electro-Chemical / former Oldbury Furnace",
    role: "producer",
    county: "Niagara",
    coordinates: [-79.01049, 43.07931],
    location: "Buffalo Avenue industrial complex, Niagara Falls",
    evidence: "documented",
    summary: "The 1986 federal report says the phosphate slag found around Niagara Falls reportedly originated at the former Oldbury Furnace, where elemental phosphorus was produced from uranium-bearing raw material. Hooker acquired Oldbury in 1956; that later ownership does not mean Hooker produced all earlier material.",
    sourceLabel: historicalSurveySource.label,
    sourceUrl: historicalSurveySource.url,
  },
  {
    id: "electro-metallurgical",
    name: "Electro Metallurgical Company / Union Carbide",
    role: "producer",
    county: "Niagara",
    coordinates: [-78.958, 43.103],
    location: "Niagara Falls",
    evidence: "documented",
    summary: "Electro Metallurgical converted uranium tetrafluoride into uranium metal and generated magnesium-fluoride reduction residue known as C-2 slag. This is a separate material stream from the commercial phosphate slag described in the 1986 survey.",
    relatedSiteId: "electro-metallurgical-company",
    sourceLabel: "NIOSH Electro Metallurgical Company site profile",
    sourceUrl: "https://www.cdc.gov/niosh/ocas/electromet.html",
  },
  {
    id: "hooker-c2-processing",
    name: "Hooker Electrochemical C-2 slag processing",
    role: "processor",
    county: "Niagara",
    coordinates: [-79.0095, 43.079],
    location: "Buffalo Avenue complex, Niagara Falls",
    evidence: "documented",
    summary: "Federal worker-health records document Hooker processing Electro Metallurgical C-2 slag to recover residual uranium. This identifies a processor, not necessarily the original producer of material at any individual anomaly.",
    sourceLabel: "NIOSH review of Hooker Electrochemical operations",
    sourceUrl: "https://www.cdc.gov/niosh/ocas/pdfs/abrwh/scarpts/sca-hookersp-r0.pdf",
  },
  {
    id: "linde",
    name: "Linde Air Products / Union Carbide",
    role: "producer",
    county: "Erie",
    coordinates: [-78.911, 42.999],
    location: "Town of Tonawanda",
    evidence: "documented",
    summary: "Linde refined uranium ore and made uranium tetrafluoride for the Manhattan Project. Its residues are connected to the Tonawanda FUSRAP sites, not automatically to the widespread Niagara Falls phosphate-slag anomalies.",
    relatedSiteId: "linde-air-products",
    sourceLabel: "WNY Atlas Linde record and cited federal sources",
    sourceUrl: "/sites/linde-air-products",
  },
  {
    id: "ashland-1",
    name: "Ashland 1 / Former Ashland Oil Refinery",
    role: "cleanup",
    county: "Erie",
    coordinates: [-78.917, 42.993],
    location: "Town of Tonawanda",
    evidence: "documented",
    summary: "Linde uranium-processing residues were historically stored on this River Road property. The federal cleanup was completed in 2003.",
    relatedSiteId: "ashland-1-refinery-site",
    sourceLabel: "U.S. Army Corps of Engineers Ashland 1 record",
    sourceUrl: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612233/ashland-1-site/",
  },
  {
    id: "ashland-2",
    name: "Ashland 2 FUSRAP Site",
    role: "cleanup",
    county: "Erie",
    coordinates: [-78.913, 43.002],
    location: "Town of Tonawanda",
    evidence: "documented",
    summary: "This former industrial landfill received radioactive soil excavated from Ashland 1 in 1974. Federal cleanup removed more than 52,000 tons of material.",
    relatedSiteId: "ashland-2-fusrap-site",
    sourceLabel: "U.S. Army Corps of Engineers Ashland 2 record",
    sourceUrl: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612311/ashland-2-site/",
  },
  {
    id: "seaway",
    name: "Seaway FUSRAP Site / Tonawanda North Unit 3",
    role: "cleanup",
    county: "Erie",
    coordinates: [-78.915, 42.997],
    location: "Town of Tonawanda",
    evidence: "documented",
    summary: "River Road landfill areas received material moved from the former Ashland property, where residues from Linde uranium processing had been stored.",
    relatedSiteId: "seaway-site",
    sourceLabel: "U.S. Army Corps of Engineers Seaway record",
    sourceUrl: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612995/seaway-site/",
  },
  {
    id: "tonawanda-landfill",
    name: "Tonawanda Landfill FUSRAP Vicinity Property",
    role: "cleanup",
    county: "Erie",
    coordinates: [-78.895, 42.984],
    location: "Town of Tonawanda",
    evidence: "documented",
    summary: "Federal records found radioactive material resembling other Tonawanda FUSRAP material, while also stating that no record ties the property to Manhattan Engineer District or Atomic Energy Commission operations.",
    relatedSiteId: "tonawanda-landfill-fusrap-vicinity",
    sourceLabel: "U.S. Army Corps of Engineers Tonawanda Landfill vicinity record",
    sourceUrl: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3613023/tonawanda-landfill-vicinity-property/",
  },
  {
    id: "nfss",
    name: "Niagara Falls Storage Site",
    role: "storage",
    county: "Niagara",
    coordinates: [-79.018, 43.228],
    location: "Lewiston",
    evidence: "documented",
    summary: "Beginning in 1944, the federal government used this former ordnance property to store radioactive residues and uranium-processing wastes. The 1986 report distinguished NFSS-related roadside material from the commercial phosphate-slag pattern.",
    relatedSiteId: "niagara-falls-storage-site",
    sourceLabel: "U.S. Army Corps of Engineers NFSS record",
    sourceUrl: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3612360/niagara-falls-storage-site/",
  },
  {
    id: "friona-trucking",
    name: "Friona Trucking",
    role: "reported-distributor",
    county: "Niagara",
    location: "Niagara County; facility point not mapped",
    evidence: "reported",
    summary: "A 1979 investigation reported that Friona Trucking distributed Union Carbide slag. Union Carbide disputed parts of that account, and WNY Atlas has not found evidence tying the company to every mapped property. It is listed as a research lead, not a confirmed source for a specific anomaly.",
    sourceLabel: "Investigative Post summary of historical investigation records",
    sourceUrl: "https://investigativepost.org/2017/02/09/paying-price-for-radioactive-hotspots-in-niagara/",
  },
];

export const currentAssessmentSources = [
  {
    label: "2025 U.S. Census Bureau TIGERweb county boundaries",
    url: "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/82",
  },
  {
    label: "NYSDEC Niagara and Erie County Radiological Assessment",
    url: "https://dec.ny.gov/environmental-protection/facilities-in-your-neighborhood/niagara-and-erie-county-radiological-assessment",
  },
  {
    label: "July 2026 NECRA community presentation",
    url: "https://dec.ny.gov/sites/default/files/2026-07/FINAL%20Monday%20July%2020%20NECRA%20Community%20Meeting%20Presentation.pdf",
  },
  {
    label: "Official Phase II roadway survey map",
    url: "https://dec.ny.gov/sites/default/files/2026-07/necraophase11roadwaysurvey.pdf",
  },
];

export const radiologicalDocuments: RadiologicalDocument[] = [
  {
    id: "doe-aerial-1979",
    title: "Summary Report: Aerial Radiological Survey, Niagara Falls Area",
    agency: "U.S. Department of Energy",
    date: "November 30, 1979",
    year: 1979,
    kind: "survey",
    geography: "Niagara",
    status: "historical",
    establishes: "Documents the September 1979 aerial survey that identified elevated gamma-radiation locations for follow-up work.",
    mapConnection: "Predecessor survey to the 100-location ground investigation.",
    url: "https://lmpublicsearch.lm.doe.gov/SitePages/ConsideredSites.aspx",
  },
  {
    id: "ornl-100-anomalies-1986",
    title: "Results of Radiological Measurements Taken in the Niagara Falls, New York, Area (ORNL/TM-10076)",
    agency: "U.S. Department of Energy / Oak Ridge National Laboratory",
    date: "November 1986",
    year: 1986,
    kind: "survey",
    geography: "Niagara",
    status: "final",
    establishes: "Reports the mobile and ground investigation of 100 elevated gamma anomalies, measurement tables, sample results, and the distinction between NFSS-related material and other slag or building materials.",
    mapConnection: "Primary source for every numbered historical dot on this map.",
    url: historicalSurveySource.url,
  },
  {
    id: "nfss-post-remedial-1986",
    title: "Post-Remedial Action Report for NFSS Vicinity Properties, 1983–1984",
    agency: "U.S. Department of Energy",
    date: "December 1986",
    year: 1986,
    kind: "audit-review",
    geography: "Niagara",
    status: "final",
    establishes: "Provides post-remediation sampling results for the Niagara Falls Storage Site vicinity properties addressed during the 1983–1986 work.",
    mapConnection: "Supports the remediation history behind NFSS-related green-ring locations and vicinity properties.",
    url: "https://www.energy.gov/sites/default/files/2023-03/NiagaraFallsSSVP_FUSRAP_Site_Certification_Summary_0.pdf",
  },
  {
    id: "nfss-certification-1992",
    title: "NFSS Vicinity Properties Certification Docket and Data Summary",
    agency: "U.S. Department of Energy Office of Legacy Management",
    date: "Certification docket: July 1992; summary updated 2023",
    year: 1992,
    kind: "audit-review",
    geography: "Niagara",
    status: "final",
    establishes: "Summarizes the evidence and post-remedial sampling tables used to certify completed vicinity-property work against federal criteria.",
    mapConnection: "Verification record for completed federal vicinity-property remediation.",
    url: "https://www.energy.gov/sites/default/files/2023-03/NiagaraFallsSSVP_FUSRAP_Site_Certification_Summary_0.pdf",
  },
  {
    id: "nfss-usace-record",
    title: "Niagara Falls Storage Site Administrative Record and Remedy",
    agency: "U.S. Army Corps of Engineers",
    date: "Current federal project record",
    year: 2026,
    kind: "cleanup-decision",
    geography: "Niagara",
    status: "ongoing",
    establishes: "Collects the decision documents supporting the NFSS remedy and explains active removal, off-site disposal, land-use assumptions, and future five-year reviews.",
    mapConnection: "Primary cleanup and storage-site record for the NFSS marker.",
    url: "https://www.lrd.usace.army.mil/Missions/Projects/Display/Article/3612360/niagara-falls-storage-site/",
  },
  {
    id: "epa-niagara-removals",
    title: "Niagara County Radiation Removal Sites",
    agency: "U.S. Environmental Protection Agency",
    date: "Updated March 10, 2026",
    year: 2026,
    kind: "cleanup-decision",
    geography: "Niagara",
    status: "ongoing",
    establishes: "Records cleanup at Niagara Falls Boulevard, Upper Mountain Road, Holy Trinity-area residences, and Donovan Head Start, with activity dates and completion descriptions.",
    mapConnection: "Supports the later EPA removal-site layer and its cleanup dates.",
    url: "https://www.epa.gov/ny/niagara-county-radiation-removal-sites",
  },
  {
    id: "epa-nfb-2020",
    title: "EPA Completes Cleanup Activities at the Niagara Falls Boulevard Site",
    agency: "U.S. Environmental Protection Agency",
    date: "July 2020",
    year: 2020,
    kind: "audit-review",
    geography: "Niagara",
    status: "final",
    establishes: "Summarizes the 2015 assessment and completion of the four-year removal at four Niagara Falls Boulevard properties and an adjoining wooded area.",
    mapConnection: "Completion record for the Niagara Falls Boulevard cleanup marker.",
    url: "https://www.epa.gov/sites/default/files/2020-07/documents/niagara_falls_blvd_rad_fact_sheet_july_2020_final.pdf",
  },
  {
    id: "necra-epa-profile",
    title: "Niagara & Erie Counties Radiological Assessment CERCLA Site Profile",
    agency: "U.S. Environmental Protection Agency",
    date: "Current CERCLA record",
    year: 2026,
    kind: "current-assessment",
    geography: "Erie and Niagara",
    status: "ongoing",
    establishes: "Provides the federal site identifier, program status, administrative-record access, reports, and documents for the two-county assessment.",
    mapConnection: "Federal umbrella record for the current assessment layer.",
    url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0206750",
  },
  {
    id: "necra-dec-overview",
    title: "Niagara and Erie County Radiological Assessment",
    agency: "New York State Department of Environmental Conservation",
    date: "Current program record",
    year: 2026,
    kind: "current-assessment",
    geography: "Erie and Niagara",
    status: "ongoing",
    establishes: "Explains the phased aerial, vehicle, and ground-survey program and publishes current project documents.",
    mapConnection: "Primary state source for the generalized assessment overlay.",
    url: "https://dec.ny.gov/environmental-protection/facilities-in-your-neighborhood/niagara-and-erie-county-radiological-assessment",
  },
  {
    id: "necra-july-2026",
    title: "NECRA Community Meeting Presentation",
    agency: "NYSDEC and U.S. EPA",
    date: "July 20, 2026",
    year: 2026,
    kind: "current-assessment",
    geography: "Erie and Niagara",
    status: "ongoing",
    establishes: "Reports approximately 380 areas of interest, about 220 cleared from additional testing, and about 160 advancing through ground surveys as of the presentation.",
    mapConnection: "Source for the current assessment counts displayed below the map.",
    url: "https://dec.ny.gov/sites/default/files/2026-07/FINAL%20Monday%20July%2020%20NECRA%20Community%20Meeting%20Presentation.pdf",
  },
  {
    id: "necra-roadway-2026",
    title: "Phase II Roadway Survey Map",
    agency: "NYSDEC and U.S. EPA",
    date: "July 2026",
    year: 2026,
    kind: "survey",
    geography: "Erie and Niagara",
    status: "ongoing",
    establishes: "Shows the published roadway-survey coverage used in Phase II of the current assessment.",
    mapConnection: "Authoritative roadway reference; WNY Atlas does not convert it into property-level contamination points.",
    url: "https://dec.ny.gov/sites/default/files/2026-07/necraophase11roadwaysurvey.pdf",
  },
  {
    id: "tonawanda-certification",
    title: "Tonawanda North Units 1 and 2 FUSRAP Site Certification Summary",
    agency: "U.S. Department of Energy Office of Legacy Management",
    date: "Federal certification summary",
    year: 2023,
    kind: "audit-review",
    geography: "Erie",
    status: "final",
    establishes: "Documents the movement of Linde residues to the former Haist/Ashland properties, later transfers to Ashland 2 and Seaway, completed remediation, and federal certification.",
    mapConnection: "Core audit record for the Erie County Linde–Ashland–Seaway network.",
    url: "https://www.energy.gov/sites/default/files/2023-11/TonawandaNorth_FUSRAP_Site_Certification_Summary.pdf",
  },
  {
    id: "tonawanda-landfill-closeout",
    title: "Tonawanda Landfill Vicinity Property Site Closeout Report",
    agency: "U.S. Army Corps of Engineers",
    date: "January 2022",
    year: 2022,
    kind: "audit-review",
    geography: "Erie",
    status: "final",
    establishes: "Records completion of response actions under the 2008 Mudflats and 2017 Landfill records of decision and describes long-term review responsibilities.",
    mapConnection: "Closeout record for the Tonawanda Landfill vicinity marker.",
    url: "https://www.lrd.usace.army.mil/News/News-Releases/Article/3636932/tonawanda-landfill-vicinity-property-site-closeout-report-available/",
  },
  {
    id: "seaway-five-year-review",
    title: "Seaway Site Five-Year Review of Selected Remedy",
    agency: "U.S. Army Corps of Engineers",
    date: "Review initiated 2026; final report scheduled for 2027",
    year: 2026,
    kind: "audit-review",
    geography: "Erie",
    status: "ongoing",
    establishes: "Announces the statutory review of whether the selected Seaway remedy remains protective; the final review is not yet available.",
    mapConnection: "Ongoing audit status for the Seaway marker—not a completed finding.",
    url: "https://www.lrd.usace.army.mil/News/News-Releases/Display/Article/4396884/fusrap-seaway-site-five-year-review-of-selected-remedy/",
  },
  {
    id: "hooker-niosh-tbd",
    title: "Technical Basis Document for the Hooker Electrochemical Company",
    agency: "CDC/NIOSH",
    date: "Revised September 13, 2016",
    year: 2016,
    kind: "worker-record",
    geography: "Niagara",
    status: "final",
    establishes: "Documents the federal-contract operating period and methods used for reconstructing worker radiation dose at Hooker Electrochemical.",
    mapConnection: "Supports Hooker’s documented role processing uranium-bearing C-2 slag from Electro Metallurgical.",
    url: "https://www.cdc.gov/niosh/ocas/hooker.html",
  },
  {
    id: "hooker-independent-review",
    title: "Review of the NIOSH Site Profile for Hooker Electrochemical",
    agency: "Advisory Board contractor review (SC&A) / CDC docket",
    date: "September 9, 2010",
    year: 2010,
    kind: "audit-review",
    geography: "Niagara",
    status: "historical",
    establishes: "Independently reviews the technical basis used for Hooker worker-dose reconstruction and documents the C-2 slag recovery process and transfer from Electro Metallurgical.",
    mapConnection: "Government-docketed technical review of the producer/processor relationship.",
    url: "https://www.cdc.gov/niosh/ocas/pdfs/abrwh/scarpts/sca-hookersp-r0.pdf",
  },
  {
    id: "electromet-niosh",
    title: "Electro Metallurgical Company Technical and Worker-Exposure Record",
    agency: "CDC/NIOSH",
    date: "Federal work-site document archive",
    year: 2023,
    kind: "worker-record",
    geography: "Niagara",
    status: "final",
    establishes: "Collects the technical basis, dose-reconstruction material, program evaluations, and advisory review record for uranium-metal production at Electro Metallurgical.",
    mapConnection: "Primary worker-history record for the Electro Metallurgical producer marker.",
    url: "https://www.cdc.gov/niosh/ocas/electromet.html",
  },
  {
    id: "linde-niosh",
    title: "Linde Air Products Occupational Energy Research Record",
    agency: "CDC/NIOSH",
    date: "Federal research archive",
    year: 2009,
    kind: "worker-record",
    geography: "Erie",
    status: "historical",
    establishes: "Identifies Linde’s Manhattan Project uranium-processing history and links federal occupational research concerning the workforce.",
    mapConnection: "Worker-research record for the Erie County Linde facility.",
    url: "https://archive.cdc.gov/www_cdc_gov/niosh/oerp/linde.html",
  },
];

export const generalizedAssessmentAreas = [
  { name: "Lewiston survey area", coordinates: [[[-79.09,43.13],[-78.95,43.13],[-78.95,43.25],[-79.09,43.25],[-79.09,43.13]]] },
  { name: "Niagara Falls and Town of Niagara survey area", coordinates: [[[-79.09,43.06],[-78.93,43.06],[-78.93,43.16],[-79.09,43.16],[-79.09,43.06]]] },
  { name: "Grand Island survey area", coordinates: [[[-79.04,42.96],[-78.90,42.96],[-78.90,43.08],[-79.04,43.08],[-79.04,42.96]]] },
];
