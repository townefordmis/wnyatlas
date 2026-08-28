import type { AtlasSite } from "@/types/site";

export type SiteConnectionMember = {
  siteId: string;
  role: string;
  connection: string;
};

export type SiteConnectionGroup = {
  id: string;
  name: string;
  summary: string;
  members: SiteConnectionMember[];
};

export type ResolvedSiteConnectionGroup = Omit<SiteConnectionGroup, "members"> & {
  members: Array<SiteConnectionMember & { site: AtlasSite }>;
};

export const siteConnectionGroups: SiteConnectionGroup[] = [
  {
    id: "fmc-middleport-dublin-road",
    name: "FMC Middleport production and Dublin Road disposal",
    summary:
      "The Middleport manufacturing facility and Dublin Road landfill share a documented pesticide-production and waste-disposal history, but each has its own boundary, remedy, and present-day obligations.",
    members: [
      {
        siteId: "fmc-middleport",
        role: "Manufacturing facility and off-site cleanup",
        connection:
          "The Middleport plant manufactured pesticides; releases and deposition led to separate facility and off-site cleanup areas.",
      },
      {
        siteId: "fmc-dublin-road-landfill",
        role: "Pesticide-production waste landfill",
        connection:
          "Dublin Road received residues and other waste associated with the Middleport operation from 1933 through 1968.",
      },
    ],
  },
  {
    id: "tonawanda-fusrap-network",
    name: "Tonawanda FUSRAP material network",
    summary:
      "Uranium-processing residues and related material moved among industrial properties, storage areas, landfills, and vicinity properties in the Town of Tonawanda.",
    members: [
      {
        siteId: "linde-air-products",
        role: "Source facility",
        connection:
          "Linde processed uranium ores for the Manhattan Engineer District, creating residues later addressed at multiple Tonawanda properties.",
      },
      {
        siteId: "ashland-1-refinery-site",
        role: "Interim storage property",
        connection:
          "The former refinery property received Linde-related residues before portions of the material were moved again.",
      },
      {
        siteId: "ashland-2-fusrap-site",
        role: "Related cleanup property",
        connection:
          "Ashland 2 forms part of the federal Tonawanda FUSRAP cleanup record and its connected material history.",
      },
      {
        siteId: "seaway-site",
        role: "Landfill containment site",
        connection:
          "Material moved from Ashland 1 in 1974 became part of the radiological remedy at the Seaway landfill.",
      },
      {
        siteId: "tonawanda-landfill-fusrap-vicinity",
        role: "Vicinity property",
        connection:
          "The landfill vicinity record tracks qualifying material outside the principal federal cleanup boundaries.",
      },
      {
        siteId: "cherry-farm",
        role: "Related disposal property",
        connection:
          "Cherry Farm belongs to the broader Tonawanda record of industrial disposal and radiological investigation.",
      },
    ],
  },
  {
    id: "niagara-radiological-record",
    name: "Niagara regional radiological record",
    summary:
      "Federal storage, industrial processing, vicinity-property cleanup, and later residential or public-property investigations form a connected regional research record.",
    members: [
      {
        siteId: "niagara-falls-storage-site",
        role: "Federal storage site",
        connection:
          "The storage site is the principal federal property in a wider network of material handling, containment, and vicinity-property work.",
      },
      {
        siteId: "niagara-falls-storage-site-vicinity-properties",
        role: "Vicinity properties",
        connection:
          "These properties are managed separately where eligible material lies beyond the principal storage-site boundary.",
      },
      {
        siteId: "electro-metallurgical-company",
        role: "Wartime industrial facility",
        connection:
          "Electro Metallurgical represents a separate Manhattan Project-era industrial operation within the Niagara record.",
      },
      {
        siteId: "niagara-falls-boulevard-radiation-site",
        role: "Investigated property",
        connection:
          "This location was identified through later radiological investigation rather than treated as part of the NFSS parcel itself.",
      },
      {
        siteId: "donovan-head-start-radiation-site",
        role: "Public-property response",
        connection:
          "The Head Start response documents investigation and removal at a public-use property.",
      },
      {
        siteId: "upper-mountain-road-radiation-site",
        role: "Investigated property",
        connection:
          "Upper Mountain Road is one of several separately bounded locations in the regional assessment record.",
      },
      {
        siteId: "holy-trinity-radiation-site",
        role: "Vicinity investigation",
        connection:
          "The cemetery vicinity record is linked by regional radiological assessment, not by a claim that every property shares one source.",
      },
      {
        siteId: "niagara-erie-radiological-assessment",
        role: "Regional assessment",
        connection:
          "The assessment provides the umbrella research context for evaluating multiple residential and public locations.",
      },
    ],
  },
  {
    id: "hooker-chemical-landfills",
    name: "Hooker Chemical landfill network",
    summary:
      "Several Niagara Falls disposal sites share a corporate and chemical-manufacturing history while retaining separate boundaries, remedies, and present-day controls.",
    members: [
      {
        siteId: "love-canal",
        role: "Disposal site and neighborhood response",
        connection:
          "Love Canal is the best-known Hooker disposal site, but its remedy and neighborhood history are site-specific.",
      },
      {
        siteId: "hooker-hyde-park-landfill",
        role: "Industrial landfill",
        connection:
          "Hyde Park is a separately managed landfill with its own migration pathways and remedy.",
      },
      {
        siteId: "hooker-102nd-street-landfill",
        role: "Niagara River landfill",
        connection:
          "The 102nd Street site connects Hooker disposal history directly to the Niagara River shoreline.",
      },
      {
        siteId: "hooker-s-area-landfill",
        role: "Industrial disposal area",
        connection:
          "S-Area is another distinct Hooker disposal property governed by its own cleanup record.",
      },
      {
        siteId: "pettit-flume-durez-outfall",
        role: "Facility-to-river pathway",
        connection:
          "The Pettit Flume record follows a documented industrial drainage and outfall pathway associated with the Durez operation.",
      },
    ],
  },
  {
    id: "cayuga-island-little-niagara-landscape",
    name: "Cayuga Island and the Little Niagara River waste-site landscape",
    summary:
      "Cayuga Island, Griffon Park, and the 102nd Street landfill occupy one altered river-edge landscape, but government records define separate disposal histories, boundaries, pathways, and investigations.",
    members: [
      {
        siteId: "cayuga-island-industrial-fill",
        role: "Residential industrial-fill investigation",
        connection:
          "The island record covers man-made residential extensions, the separate Hennepin Avenue fill case, and the renewed West Rivershore Drive investigation.",
      },
      {
        siteId: "griffon-park-landfill",
        role: "Former municipal disposal area",
        connection:
          "Griffon Park lies directly across the Little Niagara River and has its own municipal-landfill and groundwater-seep record.",
      },
      {
        siteId: "hooker-102nd-street-landfill",
        role: "Adjoining industrial landfill complex",
        connection:
          "The Hooker/Olin landfill lies beside Griffon Park along the Niagara River and is governed by a separate federal containment and monitoring remedy.",
      },
      {
        siteId: "love-canal",
        role: "Nearby but separate disposal site",
        connection:
          "Love Canal provides essential regional history but does not establish the source or extent of fill beneath Cayuga Island.",
      },
    ],
  },
  {
    id: "buffalo-color-system",
    name: "Buffalo Color facility and river system",
    summary:
      "Plant parcels, sewer pathways, shoreline areas, and Buffalo River sediment records overlap geographically but are governed through different cleanup programs.",
    members: [
      {
        siteId: "buffalo-color",
        role: "Principal manufacturing complex",
        connection:
          "The main record covers the former dye and organic-chemical plant and its parcel-specific cleanup history.",
      },
      {
        siteId: "buffalo-color-area-e-field",
        role: "Plant-area record",
        connection:
          "Area E is tracked separately so conditions on one portion of the former complex are not generalized to every parcel.",
      },
      {
        siteId: "buffalo-river",
        role: "Receiving water and sediment remedy",
        connection:
          "The river record provides the larger sediment-remediation and habitat-restoration context for shoreline industries.",
      },
    ],
  },
  {
    id: "bethlehem-smokes-creek",
    name: "Bethlehem Steel and Smokes Creek",
    summary:
      "The former steel complex and its watercourse are linked by documented industrial use, discharge history, cleanup, and shoreline restoration.",
    members: [
      {
        siteId: "bethlehem-steel",
        role: "Principal industrial complex",
        connection:
          "The Bethlehem record covers the former steelmaking property, waste areas, parcel cleanups, and redevelopment.",
      },
      {
        siteId: "smokes-creek-bethlehem-corridor",
        role: "Watercourse and discharge corridor",
        connection:
          "Smokes Creek carries the connected waterway story while remaining distinct from the land-based facility remedies.",
      },
    ],
  },
  {
    id: "manufactured-gas-network",
    name: "Manufactured-gas plant network",
    summary:
      "These sites share a historic gas-manufacturing system and recurring contaminant profile. Their classifications range from active cleanup to completed management and preliminary investigation; they are a comparative network, not one connected plume.",
    members: [
      {
        siteId: "west-genesee-former-mgp",
        role: "Completed Buffalo cleanup",
        connection:
          "The former Buffalo Service Station / Blue Cross–HealthNow property is a completed cleanup and redevelopment example.",
      },
      {
        siteId: "iroquois-gas-westwood",
        role: "Managed remedy and active creek investigation",
        connection:
          "The former Iroquois Gas source area and lower Scajaquada Creek show how coal tar can require both constructed controls and continuing downstream investigation.",
      },
      {
        siteId: "gastown-former-mgp",
        role: "Class 4 Tonawanda site",
        connection:
          "The Gastown record shows how the same industrial system appeared in the City of Tonawanda.",
      },
      {
        siteId: "lockport-transit-street-former-mgp",
        role: "Active Lockport program",
        connection:
          "Transit Street extends the comparative MGP record to Lockport.",
      },
      {
        siteId: "mineral-springs-road-former-mgp",
        role: "Completed West Seneca cleanup",
        connection:
          "Mineral Springs Road documents another separately bounded former gas-manufacturing property.",
      },
      {
        siteId: "buffalo-gas-light-tonawanda-street",
        role: "Gas-holder property",
        connection:
          "The Tonawanda Street holder site represents storage infrastructure within the historic manufactured-gas system.",
      },
      {
        siteId: "jamestown-former-mgp",
        role: "Class 2 State Superfund site",
        connection:
          "Jamestown is an action-required site with documented coal-tar liquid and possible migration toward the Chadakoin River.",
      },
      {
        siteId: "dunkirk-former-mgp",
        role: "Active Dunkirk program",
        connection:
          "Dunkirk remains under active investigation and cleanup review, including off-property and bedrock groundwater work.",
      },
      {
        siteId: "niagara-falls-former-mgp",
        role: "Potential Niagara Falls site",
        connection:
          "Historic maps establish the gasworks near the Rainbow Bridge area, while DEC's Class P status preserves uncertainty about current cleanup needs.",
      },
      {
        siteId: "salamanca-former-mgp",
        role: "Potential Salamanca gas property",
        connection:
          "The Salamanca record documents gas purification and distribution history but does not yet establish on-site manufactured-gas production or a required remedy.",
      },
    ],
  },
  {
    id: "western-new-york-pfas",
    name: "Western New York PFAS investigations",
    summary:
      "These records share an emerging contaminant and evolving agency investigation framework; they do not imply a common source or connected groundwater plume.",
    members: [
      {
        siteId: "niagara-falls-air-reserve-pfas",
        role: "Federal-facility investigation",
        connection:
          "The air reserve station record follows PFAS investigation associated with federal facility operations.",
      },
      {
        siteId: "mayville-pfas-site",
        role: "Community investigation",
        connection:
          "Mayville is a separate Chautauqua County investigation with its own sources, boundaries, and response decisions.",
      },
      {
        siteId: "marine-drive-apartments-east-pfas",
        role: "Residential-area investigation",
        connection:
          "Marine Drive represents a distinct Buffalo investigation and should not be read as physically connected to the other PFAS locations.",
      },
    ],
  },
  {
    id: "buffalo-river-industrial-corridor",
    name: "Buffalo River industrial corridor",
    summary:
      "Industrial parcels, former disposal areas, sediment remedies, and restored habitats form a shared river corridor while retaining separate ownership and cleanup records.",
    members: [
      {
        siteId: "buffalo-river",
        role: "Waterway and sediment record",
        connection:
          "The river is the organizing environmental system for this collection.",
      },
      {
        siteId: "buffalo-color",
        role: "Chemical-manufacturing shoreline",
        connection:
          "Buffalo Color represents a major industrial parcel with documented sewer and shoreline pathways.",
      },
      {
        siteId: "republic-steel",
        role: "Steel and coke landscape",
        connection:
          "The former Republic Steel landscape links heavy industry, managed brownfields, and riverfront redevelopment.",
      },
      {
        siteId: "iroquois-gas-westwood",
        role: "Former industrial property",
        connection:
          "This property adds a distinct industrial and cleanup history within the broader river corridor.",
      },
      {
        siteId: "katherine-street-peninsula",
        role: "Peninsula cleanup area",
        connection:
          "The peninsula record connects upland contamination, shoreline conditions, and river restoration.",
      },
      {
        siteId: "alltift-landfill-ramco-steel",
        role: "Landfill and steel property",
        connection:
          "Alltift links filled industrial land to the river corridor's disposal history.",
      },
      {
        siteId: "tifft-nature-preserve",
        role: "Recovered landscape",
        connection:
          "Tifft shows the corridor's transition from industrial and filled land to habitat and public use.",
      },
      {
        siteId: "times-beach-disposal-site",
        role: "Confined-disposal and habitat site",
        connection:
          "Times Beach connects dredged-material management with later habitat value.",
      },
    ],
  },
  {
    id: "river-road-industrial-corridor",
    name: "River Road industrial and disposal corridor",
    summary:
      "Coke, plastics, steel, landfills, and material-transfer histories overlap along River Road. These records are geographically related but retain separate cleanup boundaries and responsible-party histories.",
    members: [
      {
        siteId: "tonawanda-coke",
        role: "Coke-manufacturing complex",
        connection:
          "The former coke plant anchors the corridor's heavy-industrial and air-emissions history.",
      },
      {
        siteId: "tonawanda-plastics",
        role: "Plastics property",
        connection:
          "The plastics site is a separately regulated industrial property within the same River Road landscape.",
      },
      {
        siteId: "roblin-steel-tonawanda",
        role: "Steel property",
        connection:
          "This Tonawanda steel site is distinct from the former Roblin Steel cleanup in Dunkirk.",
      },
      {
        siteId: "chemical-leaman-tank-lines",
        role: "Chemical tank-truck terminal",
        connection:
          "Chemical Leaman adds chemical transport, tank cleaning, and a managed environmental easement to the corridor.",
      },
      {
        siteId: "5565-river-road",
        role: "Upland and sediment cleanup",
        connection:
          "The 5565 River Road record connects a Class 2 upland site with separately mapped PCB-affected sediment.",
      },
      {
        siteId: "cherry-farm",
        role: "Industrial landfill",
        connection:
          "Cherry Farm connects the corridor's manufacturing history to documented disposal and long-term containment.",
      },
      {
        siteId: "seaway-site",
        role: "Mixed landfill and FUSRAP site",
        connection:
          "Seaway adds municipal, industrial, and radiological material histories to the corridor.",
      },
    ],
  },
  {
    id: "dunkirk-metals-corridor",
    name: "Dunkirk metals and manufacturing corridor",
    summary:
      "Former locomotive, steel-reclamation, specialty-metal, and related industrial properties form a connected manufacturing landscape whose individual remedies and present uses differ.",
    members: [
      {
        siteId: "altech-specialty-steel",
        role: "Specialty-steel complex",
        connection:
          "AlTech represents the corridor's largest and longest-running steelmaking cleanup record.",
      },
      {
        siteId: "former-roblin-steel-dunkirk",
        role: "Locomotive and steel-reclamation property",
        connection:
          "The property began within the American Locomotive Company complex and later supported steel reclamation.",
      },
      {
        siteId: "special-metals-dunkirk",
        role: "Aerospace-alloy manufacturing",
        connection:
          "Special Metals shows continued industrial use alongside a separately managed cleanup area.",
      },
      {
        siteId: "marsh-valve-dunkirk",
        role: "Brass foundry removal",
        connection:
          "Marsh Valve adds a completed federal removal and state no-further-action record to the Dunkirk metals corridor.",
      },
      {
        siteId: "closed-alumax-extrusions",
        role: "Locomotive, steel, and aluminum property",
        connection:
          "Alumax shares the Roberts Road industrial landscape while retaining its own chlorinated-solvent remedy and monitoring record.",
      },
    ],
  },
  {
    id: "dunkirk-power-and-ash",
    name: "Dunkirk power generation and ash management",
    summary:
      "The retired Lake Erie generating station and its separately located Pomfret fly-ash landfill are historically connected but regulated as different facilities.",
    members: [
      {
        siteId: "former-dunkirk-steam-station",
        role: "Retired generating station",
        connection:
          "The waterfront station produced the coal-combustion residuals and relinquished its major air permits after retirement.",
      },
      {
        siteId: "dunkirk-fly-ash-landfill",
        role: "Industrial ash landfill",
        connection:
          "The Van Buren Road landfill has its own liner, leachate, monitoring, permitting, and eventual closure obligations.",
      },
    ],
  },
  {
    id: "southern-tier-small-industry",
    name: "Southern Tier small-industry cleanups",
    summary:
      "Foundries, furniture and veneer works, machining plants, dry cleaners, and rural disposal sites show that Western New York's cleanup history extends well beyond its largest waterfront factories.",
    members: [
      {
        siteId: "farwell-road-landfill",
        role: "Rural disposal site",
        connection:
          "Farwell Road represents a managed hazardous-waste landfill outside the major urban industrial corridors.",
      },
      {
        siteId: "carroll-landfill",
        role: "Municipal landfill",
        connection:
          "Carroll connects local waste disposal to wetlands, Conewango Creek, and long-term treatment.",
      },
      {
        siteId: "dc-rollforms-proto-tool",
        role: "Tool-manufacturing complex",
        connection:
          "Proto Tool brings electroplating, heat treatment, degreasing, and river-edge remediation into the collection.",
      },
      {
        siteId: "former-cb-dry-cleaners",
        role: "Small solvent site",
        connection:
          "The dry cleaner demonstrates how a very small parcel can create a consequential subsurface cleanup.",
      },
      {
        siteId: "essex-hope-site",
        role: "Coatings and solvent site",
        connection:
          "Essex / Hope documents a long-running coatings property with an amended remedy and a separately investigated downgradient area.",
      },
      {
        siteId: "dowcraft-south-dow-street",
        role: "Chlorinated-solvent groundwater cleanup",
        connection:
          "Dowcraft connects former manufacturing and vapor degreasing to continuing groundwater treatment and monitoring.",
      },
      {
        siteId: "former-jamestown-city-landfill",
        role: "Municipal and industrial-waste landfill",
        connection:
          "The former city landfill preserves Jamestown's documented municipal and industrial-disposal history while clearly stating its current Class 3 status.",
      },
      {
        siteId: "ellison-bronze-company",
        role: "Bronze foundry cleanup",
        connection:
          "Ellison Bronze adds metal-bearing foundry material, stabilization, containment, and continuing management to the Falconer record.",
      },
      {
        siteId: "bush-industries-cattaraugus",
        role: "Petroleum and veneer works",
        connection:
          "Bush Industries layers early petroleum use with later wood-products manufacturing.",
      },
      {
        siteId: "former-randolph-foundry",
        role: "Foundry and machine shop",
        connection:
          "Randolph adds discarded foundry sand, drums, and asbestos to the southern-tier industrial record.",
      },
      {
        siteId: "lexington-machining",
        role: "Die-casting and machining plant",
        connection:
          "Lexington documents solvent use and long-term groundwater management at a smaller manufacturing plant.",
      },
    ],
  },
  {
    id: "outer-harbor-industrial-recovery",
    name: "Outer Harbor industrial recovery landscape",
    summary:
      "Canals, filled shoreline, disposal areas, steel and iron facilities, and restored habitat form a connected Outer Harbor landscape. Each location retains its own contamination record, remedy boundary, and present-day controls.",
    members: [
      {
        siteId: "union-ship-canal-hanna-furnace",
        role: "Pig-iron canal and remediated park",
        connection:
          "The canal and Ship Canal Commons preserve Hanna Furnace history while containing contaminated sediment and residual upland material.",
      },
      {
        siteId: "outer-harbor-greenbelt",
        role: "Covered shoreline brownfield",
        connection:
          "The Greenbelt adds a separately managed filled shoreline and public-open-space remedy.",
      },
      {
        siteId: "times-beach-disposal-site",
        role: "Dredged-material site and habitat",
        connection:
          "Times Beach shows another Outer Harbor transition from disposal infrastructure to ecological value.",
      },
      {
        siteId: "alltift-landfill-ramco-steel",
        role: "Landfill and steel property",
        connection:
          "Alltift connects historic filling and steel operations to the broader South Buffalo waterfront.",
      },
      {
        siteId: "bethlehem-steel",
        role: "Adjacent steelmaking landscape",
        connection:
          "The former Bethlehem complex extends the heavy-industrial shoreline south into Lackawanna.",
      },
    ],
  },
  {
    id: "lockport-industrial-cleanups",
    name: "Lockport industrial and disposal history",
    summary:
      "Automotive manufacturing, battery production, chemical processing, municipal disposal, and canal-side industry created several separately managed cleanup sites around Lockport.",
    members: [
      {
        siteId: "lockport-city-landfill",
        role: "Municipal landfill",
        connection:
          "The closed landfill represents the city's long-term disposal and containment history.",
      },
      {
        siteId: "harrison-radiator-lockport",
        role: "Automotive manufacturing",
        connection:
          "Harrison Radiator preserves the environmental record of a major regional automotive employer.",
      },
      {
        siteId: "former-electruk-battery",
        role: "Battery manufacturing",
        connection:
          "Electruk adds a smaller controlled industrial property with an environmental easement.",
      },
      {
        siteId: "lockport-transit-street-former-mgp",
        role: "Manufactured-gas plant",
        connection:
          "Transit Street represents the city's earlier gas-manufacturing infrastructure and recurring MGP contaminants.",
      },
      {
        siteId: "eighteenmile-creek-superfund",
        role: "Creek and sediment corridor",
        connection:
          "Eighteenmile Creek links multiple Lockport source areas to a much longer sediment-cleanup record.",
      },
      {
        siteId: "old-upper-mountain-road-landfill",
        role: "Ravine landfill and creek cleanup",
        connection:
          "The former municipal disposal area connects Lockport's waste history with documented Gulf Creek sediment, floodplain and sewer-infrastructure work.",
      },
      {
        siteId: "vanchlor-company-landfill",
        role: "Former quarry landfill",
        connection:
          "The capped Mill Street landfill adds a separately managed chemical-manufacturing waste record within the broader Lockport industrial corridor.",
      },
    ],
  },
  {
    id: "genesee-county-industrial-cleanups",
    name: "Genesee County industrial and disposal sites",
    summary:
      "Municipal disposal, scrap-metal processing, and railroad transport provide three different views of Genesee County's documented cleanup history.",
    members: [
      {
        siteId: "batavia-landfill",
        role: "Municipal and industrial landfill",
        connection:
          "The landfill received industrial wastes before its federal cleanup, deletion, and continuing stewardship.",
      },
      {
        siteId: "batavia-iron-and-metal",
        role: "Scrap and metal processing",
        connection:
          "The Bank Street site adds a Class 2 industrial cleanup within the City of Batavia.",
      },
      {
        siteId: "lehigh-valley-railroad-derailment",
        role: "Railroad release",
        connection:
          "The Le Roy site shows how rail transport created a different kind of historical contamination record.",
      },
      {
        siteId: "batavia-former-mgp",
        role: "Manufactured-gas plant",
        connection:
          "The Evans Street gasworks adds Batavia's nineteenth-century energy infrastructure and its coal-tar cleanup record.",
      },
      {
        siteId: "lapp-insulator-company",
        role: "Electrical-insulator manufacturing",
        connection:
          "The large Le Roy property documents a separate history of ceramic manufacturing, chlorinated solvents and long-term groundwater management.",
      },
    ],
  },
  {
    id: "olean-groundwater-and-refinery-history",
    name: "Olean groundwater and refinery history",
    summary:
      "Olean's regional TCE cleanup and its historic petroleum-refinery corridor are geographically related research stories with different sources, contaminants, boundaries, and remedies.",
    members: [
      {
        siteId: "olean-well-field-superfund",
        role: "Regional groundwater cleanup",
        connection:
          "The Superfund site coordinates multiple industrial source properties and municipal or private water-supply actions across a broad groundwater study area.",
      },
      {
        siteId: "olean-refinery-river-street",
        role: "Active refinery-area brownfield",
        connection:
          "River Street preserves the history of the larger former refinery and remains under Brownfield Cleanup Program investigation.",
      },
      {
        siteId: "olean-refinery-homer-street",
        role: "Completed refinery-area cleanup",
        connection:
          "Homer Street documents large-scale piping and contaminated-soil removal within the same broader historic refinery corridor.",
      },
    ],
  },
  {
    id: "gowanda-animal-products-waste-network",
    name: "Gowanda animal-products and waste network",
    summary:
      "Glue production, leather tanning, creek-edge disposal, and the transport of glue waste to Markhams form a connected industrial history. Each cleanup retains its own official boundary and remedy.",
    members: [
      {
        siteId: "peter-cooper-gowanda",
        role: "Glue and adhesive works",
        connection:
          "The Gowanda plant generated animal-glue waste and managed an on-site sludge-disposal area.",
      },
      {
        siteId: "moench-tanning-gowanda",
        role: "Leather tannery and landfill",
        connection:
          "The neighboring tannery adds a separate century-scale leather-waste and creek-management history.",
      },
      {
        siteId: "peter-cooper-markhams",
        role: "Off-site disposal property",
        connection:
          "Markhams received waste transported from the Peter Cooper operation in Gowanda and is managed as a separate Superfund site.",
      },
    ],
  },
  {
    id: "jamestown-chlorinated-solvent-sites",
    name: "Jamestown chlorinated-solvent cleanup sites",
    summary:
      "Dry cleaning, tool production, and other industrial degreasing created separate chlorinated-solvent cleanups around Jamestown. This collection compares processes and remedies; it does not assert one shared plume.",
    members: [
      {
        siteId: "anderson-cleaners-jamestown",
        role: "Dry-cleaning cleanup",
        connection:
          "Anderson Cleaners is a Class 2 soil and groundwater cleanup at Hunt Road.",
      },
      {
        siteId: "former-cb-dry-cleaners",
        role: "Separate dry-cleaning cleanup",
        connection:
          "C&B is a separate compact dry-cleaning site with its own investigated area and controls.",
      },
      {
        siteId: "dc-rollforms-proto-tool",
        role: "Tool-manufacturing cleanup",
        connection:
          "Proto Tool used vapor degreasing alongside forging, plating, machining, and heat-treatment processes.",
      },
      {
        siteId: "keywell-vac-air-frewsburg",
        role: "Scrap-metal degreasing cleanup",
        connection:
          "The nearby Frewsburg property used TCE in high-grade scrap-metal processing and has a separate managed groundwater remedy.",
      },
    ],
  },
  {
    id: "southern-tier-landfills-and-disposal",
    name: "Southern-tier landfills and disposal sites",
    summary:
      "These rural and small-community properties show different waste-disposal histories and cleanup stages. They are a comparative collection, not evidence of a shared waste stream.",
    members: [
      {
        siteId: "machias-gravel-pit",
        role: "Industrial-drum storage and disposal",
        connection:
          "The gravel pit received an estimated 600 drums from an industrial plant and later required solvent-source and groundwater remediation.",
      },
      {
        siteId: "ischua-landfill",
        role: "Landfill under characterization",
        connection:
          "The former landfill's mixed waste history and emerging-contaminant findings remain under state investigation.",
      },
      {
        siteId: "farwell-road-landfill",
        role: "Managed hazardous-waste landfill",
        connection:
          "Farwell Road is a closed county disposal site governed by engineering and institutional controls.",
      },
      {
        siteId: "carroll-landfill",
        role: "Municipal and construction landfill",
        connection:
          "Carroll adds a separate leachate, groundwater, wetland, and long-term management record near Frewsburg.",
      },
    ],
  },
  {
    id: "mayville-separate-investigations",
    name: "Mayville's separate environmental investigations",
    summary:
      "The village contains two nearby but distinct records. Their connection is geography and public interest, not a finding that one site caused the other's contamination.",
    members: [
      {
        siteId: "standard-portable-mayville",
        role: "TCE cleanup",
        connection:
          "Standard Portable concerns metalworking solvents in soil and groundwater.",
      },
      {
        siteId: "mayville-pfas-site",
        role: "PFAS investigation",
        connection:
          "The PFAS investigation concerns PFNA in the village water system and a former firefighting-training area; DEC did not identify Standard Portable as its source.",
      },
    ],
  },
  {
    id: "dunkirk-industrial-redevelopment",
    name: "Dunkirk industrial cleanup and redevelopment",
    summary:
      "Steel, alloy, locomotive, petroleum, manufactured-gas, and other industrial properties form a layered Dunkirk cleanup history. Each marker represents its own official record.",
    members: [
      {
        siteId: "former-niagara-motors-dunkirk",
        role: "Completed brownfield cleanup",
        connection:
          "Niagara Motors documents drums, petroleum and lead-affected soil on a former industrial property.",
      },
      {
        siteId: "former-roblin-steel-dunkirk",
        role: "Locomotive and steel-reclamation property",
        connection:
          "Roblin occupies part of the former American Locomotive industrial landscape.",
      },
      {
        siteId: "altech-specialty-steel",
        role: "Large specialty-steel cleanup",
        connection:
          "AlTech represents a century-scale manufacturing and phased-remediation property.",
      },
      {
        siteId: "special-metals-dunkirk",
        role: "Active alloy facility cleanup",
        connection:
          "Special Metals is a defined cleanup area within an active manufacturing property.",
      },
      {
        siteId: "dunkirk-former-mgp",
        role: "Manufactured-gas plant",
        connection:
          "The former gasworks adds a coal-tar and groundwater cleanup near Dunkirk's downtown industrial waterfront.",
      },
    ],
  },
  {
    id: "western-new-york-sediment-controls",
    name: "Western New York sediment controls",
    summary:
      "These sites contain documented sediment remedies or affected sediment areas. They are a comparative research collection, not evidence of a shared source or connected plume.",
    members: [
      {
        siteId: "union-ship-canal-hanna-furnace",
        role: "Installed sediment cover",
        connection:
          "A geotextile and stone cover isolates PAHs, PCBs, and metals in part of the former industrial canal.",
      },
      {
        siteId: "weber-knapp-company",
        role: "Chlorinated-solvent sediment cover",
        connection:
          "DEC records a clean-stone cover at this Jamestown manufacturing cleanup.",
      },
      {
        siteId: "tennessee-gas-station-229",
        role: "PCB-affected sediment area",
        connection:
          "The Eden compressor-station record extends sediment concerns into a rural drainage setting.",
      },
      {
        siteId: "5565-river-road",
        role: "PCB-affected shoreline sediment",
        connection:
          "The River Road entry connects an upland Class 2 site with Niagara River-edge sediment.",
      },
      {
        siteId: "1660-niagara-street-sediment",
        role: "PCB-affected shoreline sediment",
        connection:
          "The Niagara Street marker represents a bounded sediment record rather than the entire river shoreline.",
      },
      {
        siteId: "durez-occidental-north-tonawanda",
        role: "Dioxin- and furan-affected sediment",
        connection:
          "The Durez record adds a distinct chemical-manufacturing and sediment-contaminant history.",
      },
      {
        siteId: "gratwick-riverside-park",
        role: "Riprap and habitat cover",
        connection:
          "Gratwick combines landfill containment, shoreline protection, and present-day park use.",
      },
    ],
  },
];

export function getConnectionGroupsForSite(
  siteId: string,
  sites: AtlasSite[],
): ResolvedSiteConnectionGroup[] {
  const sitesById = new Map(sites.map((site) => [site.id, site]));

  return siteConnectionGroups
    .filter((group) => group.members.some((member) => member.siteId === siteId))
    .map((group) => ({
      ...group,
      members: group.members.flatMap((member) => {
        const site = sitesById.get(member.siteId);
        return site ? [{ ...member, site }] : [];
      }),
    }));
}
