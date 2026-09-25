export type TrailPlace = { slug: string; blurb?: string };
export type Trail = { title: string; slug: string; intro: string; places: TrailPlace[] };

export const trails: Trail[] = [
  {
    title: "Dry Cleaning & Chlorinated Solvents",
    slug: "dry-cleaning-chlorinated-solvents",
    intro: "Small businesses left lasting solvent-cleanup obligations across Western New York. Explore separate groundwater and vapor histories, from neighborhood storefronts to shopping centers. This is a thematic reading trail; it does not imply a shared plume or public access to the properties.",
    places: [
      { slug: "peters-dry-cleaning", blurb: "Follow a Lockport plume from source excavation to continuing groundwater management." },
      { slug: "time-one-hour-cleaners", blurb: "See how building foundations, sewers and subsurface water complicate vapor controls." },
      { slug: "bestway-cleaners" },
      { slug: "northtown-plaza-former-dry-cleaner" },
      { slug: "starlite-dry-cleaners" },
      { slug: "former-cb-dry-cleaners" },
      { slug: "anderson-cleaners-jamestown" },
    ],
  },
  {
    title: "The Hooker Chemical landfill network",
    slug: "hooker-chemical-landfill-network",
    intro: "Love Canal is the best-known name, but it was one part of a larger, separately managed disposal landscape. This trail follows distinct sites and remedies without collapsing their histories into one story.",
    places: [
      { slug: "love-canal", blurb: "Begin with the neighborhood emergency that reshaped national hazardous-waste policy." },
      { slug: "hooker-hyde-park-landfill", blurb: "Follow disposal, groundwater control, and long-term remedy management at Hyde Park." },
      { slug: "hooker-102nd-street-landfill", blurb: "Read the record for the adjoining industrial landfill on the Niagara River." },
      { slug: "hooker-s-area-landfill", blurb: "End at the separate S-Area record within the broader chemical-manufacturing landscape." },
    ],
  },
  {
    title: "Cayuga Island and the Little Niagara landscape",
    slug: "cayuga-island-little-niagara",
    intro: "A guided route through altered shorelines, connected waterways, disposal sites, and cleanup records in eastern Niagara Falls.",
    places: [
      { slug: "cayuga-island-industrial-fill" },
      { slug: "hooker-102nd-street-landfill" },
      { slug: "bergholtz-creek" },
      { slug: "cayuga-creek-niagara-county" },
      { slug: "love-canal" },
    ],
  },
  {
    title: "Steel, coke, and the Lake Erie shore",
    slug: "steel-coke-lake-erie-shore",
    intro: "Trace the industrial systems that joined furnaces, coke production, labor, slag, waterways, air pollution, cleanup, and reuse along the region's waterfront.",
    places: [
      { slug: "bethlehem-steel" },
      { slug: "tonawanda-coke" },
      { slug: "buffalo-river" },
    ],
  },
];

export function findTrail(slug: string) { return trails.find((trail) => trail.slug === slug); }
