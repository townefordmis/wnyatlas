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
      "These sites share a historic gas-manufacturing process and recurring contaminant profile; they are a comparative network, not one connected plume.",
    members: [
      {
        siteId: "west-genesee-former-mgp",
        role: "Buffalo MGP",
        connection:
          "A former manufactured-gas property within Buffalo's downtown and waterfront industrial history.",
      },
      {
        siteId: "gastown-former-mgp",
        role: "Tonawanda MGP",
        connection:
          "The Gastown record shows how the same industrial system appeared in the City of Tonawanda.",
      },
      {
        siteId: "lockport-transit-street-former-mgp",
        role: "Lockport MGP",
        connection:
          "Transit Street extends the comparative MGP record to Lockport.",
      },
      {
        siteId: "mineral-springs-road-former-mgp",
        role: "West Seneca MGP",
        connection:
          "Mineral Springs Road documents another separately bounded former gas-manufacturing property.",
      },
      {
        siteId: "buffalo-gas-light-tonawanda-street",
        role: "Gas-holder property",
        connection:
          "The Tonawanda Street holder site represents storage infrastructure within the historic manufactured-gas system.",
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
