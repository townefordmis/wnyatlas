import type { AtlasImage } from "@/types/site";

export const siteImages: Partial<Record<string, AtlasImage>> = {
  "love-canal": {
    src: "/historical/love-canal-pre-1978.jpg",
    alt: "Aerial view of the Love Canal neighborhood before the 1978 emergency declaration",
    caption: "Love Canal area before the 1978 emergency declaration.",
    date: "Before 1978",
    credit: "U.S. Environmental Protection Agency",
    sourceUrl:
      "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.photovideoaudio&id=0201290",
    rights: "U.S. government image",
  },
  "former-bethlehem-steel": {
    src: "/historical/bethlehem-steel-blowing-engine-house.jpg",
    alt: "Black-and-white interior view of Bethlehem Steel blowing engine house number two in Lackawanna",
    caption:
      "Inside blowing engine house no. 2 at the Lackawanna plant, documented by the Historic American Engineering Record.",
    date: "HAER documentation, after 1968",
    credit: "Jet Lowe / Historic American Engineering Record, Library of Congress",
    sourceUrl: "https://www.loc.gov/pictures/item/ny1584.photos.191322p/",
    rights: "No known restrictions on U.S. government HAER image",
  },
  "buffalo-river": {
    src: "/historical/buffalo-river-elevators.jpg",
    alt: "Black-and-white general view of historic grain elevators along the Buffalo River",
    caption: "General view of Buffalo's grain-elevator landscape along the river.",
    date: "HAER documentation, after 1968",
    credit: "Jet Lowe / Historic American Engineering Record, Library of Congress",
    sourceUrl: "https://www.loc.gov/item/ny1667/",
    rights: "No known restrictions on U.S. government HAER image",
  },
  "lehigh-valley-railroad-derailment": {
    src: "/historical/lehigh-valley-black-diamond.jpg",
    alt: "Historic Lehigh Valley Railroad Black Diamond express train beside the Lehigh River",
    caption:
      "The Lehigh Valley Railroad's Black Diamond express, shown as company context rather than the 1970 Le Roy derailment scene.",
    date: "Between 1895 and 1910",
    credit: "Detroit Publishing Company / Library of Congress",
    sourceUrl: "https://www.loc.gov/pictures/item/2016811560/",
    rights: "No known restrictions on publication",
  },
};
