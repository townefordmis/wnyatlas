import type { AtlasImage } from "@/types/site";

export const siteImages: Partial<Record<string, AtlasImage>> = {
  "1660-niagara-street-sediment": {
    src: "/historical/1660-niagara-street-aerial-2024.jpg",
    alt: "New York State orthophoto showing the Niagara Street transportation corridor and Niagara River shoreline in Buffalo",
    caption:
      "The Niagara Street shoreline corridor in 2024 state orthoimagery. This geographic view does not delineate the brownfield parcel, PCB-affected sediment, or the status of either remedy.",
    date: "2024",
    credit: "New York State GIS Program Office",
    sourceUrl: "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
    rights: "New York State public orthoimagery",
  },
  "batavia-iron-and-metal": {
    src: "/historical/batavia-iron-and-metal-aerial-napp.jpg",
    alt: "Color-infrared federal aerial mosaic showing the Bank Street and Dwyer Stadium area in Batavia",
    caption:
      "The Bank Street setting in the federal NAPP-era aerial mosaic. Color differences reflect infrared imagery and land cover; they do not identify contamination, cleanup limits, or affected neighboring parcels.",
    date: "1994–1998 federal mosaic",
    credit: "U.S. Geological Survey / New York State GIS Program Office",
    sourceUrl: "https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer",
    rights: "Public federal and New York State orthoimagery",
  },
  "former-signore": {
    src: "/historical/former-signore-aerial-2021.jpg",
    alt: "New York State orthophoto showing the Jefferson Street industrial property and surrounding Ellicottville landscape",
    caption:
      "The former Signore area and surrounding Ellicottville landscape in 2021. The aerial provides geographic context only and does not map groundwater, vapor pathways, or the environmental-easement boundary.",
    date: "2021",
    credit: "New York State GIS Program Office",
    sourceUrl: "https://orthos.its.ny.gov/arcgis/rest/services/wms/2021/MapServer",
    rights: "New York State public orthoimagery",
  },
  "roblin-steel-tonawanda": {
    src: "/historical/roblin-steel-tonawanda-aerial-2024.jpg",
    alt: "New York State orthophoto showing the River Road industrial corridor and Niagara River shoreline in Tonawanda",
    caption:
      "The River Road industrial corridor in 2024. The aerial does not identify the Roblin boundary or assign conditions from neighboring cleanup sites to this property.",
    date: "2024",
    credit: "New York State GIS Program Office",
    sourceUrl: "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
    rights: "New York State public orthoimagery",
  },
  "stauffer-chemical-pasny": {
    src: "/historical/stauffer-chemical-pasny-aerial-2024.jpg",
    alt: "New York State orthophoto showing the Niagara Power Project landscape and Lewiston Road area",
    caption:
      "The Niagara Power Project landscape near the controlled Stauffer parcel in 2024. This view does not delineate the 23-acre easement or attribute site conditions to the larger Power Authority property.",
    date: "2024",
    credit: "New York State GIS Program Office",
    sourceUrl: "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
    rights: "New York State public orthoimagery",
  },
  "former-cb-dry-cleaners": {
    src: "/historical/former-cb-dry-cleaners-aerial-2021.jpg",
    alt: "New York State orthophoto showing the Jamestown neighborhood and commercial corridor around the former C&B Dry Cleaners property",
    caption:
      "The former cleaner's Jamestown setting in 2021 state orthoimagery. This view provides geographic context only; it does not show a solvent plume, vapor-mitigation area, or cleanup boundary.",
    date: "2021",
    credit: "New York State GIS Program Office",
    sourceUrl:
      "https://orthos.its.ny.gov/arcgis/rest/services/wms/2021/MapServer",
    rights: "New York State public orthoimagery",
  },
  "former-nl-industries-foundry": {
    src: "/historical/former-nl-industries-foundry-aerial-2024.jpg",
    alt: "New York State orthophoto showing the Walden Avenue industrial corridor around the former NL Industries Foundry property",
    caption:
      "The Walden Avenue industrial corridor in 2024 state orthoimagery. The photograph documents present land use and surrounding context, not contamination extent or the legal environmental-easement boundary.",
    date: "2024",
    credit: "New York State GIS Program Office",
    sourceUrl:
      "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
    rights: "New York State public orthoimagery",
  },
  "guterl-specialty-steel": {
    src: "/historical/guterl-specialty-steel-aerial-2024.jpg",
    alt: "New York State orthophoto showing the former Guterl and Simonds industrial complex within Lockport",
    caption:
      "The Lockport industrial landscape around the former Guterl and Simonds complex in 2024. The aerial supplies geographic context; it does not delineate the former AEC work areas or radiological conditions.",
    date: "2024",
    credit: "New York State GIS Program Office",
    sourceUrl:
      "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
    rights: "New York State public orthoimagery",
  },
  "niagara-falls-air-reserve-pfas": {
    src: "/historical/niagara-air-reserve-aerial-2024.jpg",
    alt: "New York State orthophoto showing the Niagara Falls Air Reserve Station runways, facilities, and surrounding land",
    caption:
      "The active Niagara Falls Air Reserve Station and surrounding landscape in 2024 state orthoimagery. The aerial does not depict PFAS detections, release areas, groundwater migration, or drinking-water conclusions.",
    date: "2024",
    credit: "New York State GIS Program Office",
    sourceUrl:
      "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
    rights: "New York State public orthoimagery",
  },
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
  "linde-air-products": {
    src: "/historical/linde-air-products-2017.jpg",
    alt: "Brick buildings of the former Linde Air Products factory on Chandler Street in Buffalo",
    caption:
      "The former Linde Air Products factory complex on Chandler Street. The photograph documents the Buffalo property in 2017, not its wartime operations or radiological conditions.",
    date: "July 20, 2017",
    credit: "Pubdog / Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Linde_Air_Products_Factory_Jul_17.JPG",
    rights: "CC0 1.0 public-domain dedication",
  },
  "west-valley": {
    src: "/historical/west-valley-treatment-wall-2010.jpg",
    alt: "Construction equipment installing a permeable treatment wall at the West Valley Demonstration Project",
    caption:
      "Construction of the 850-foot permeable treatment wall designed to slow migration of strontium-90 in groundwater at West Valley.",
    date: "2010 project; published June 22, 2012",
    credit: "U.S. Department of Energy",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Recovery_Act_Funds_Construction_of_Trench_to_Mitigate_Groundwater_Contamination_(7419747360).jpg",
    rights: "Public domain — official U.S. Department of Energy work",
  },
  "huntley-generating-station": {
    src: "/historical/huntley-generating-station-2023.jpg",
    alt: "The closed Huntley Generating Station viewed from River Road in Tonawanda",
    caption:
      "The former Huntley coal-fired generating station viewed from River Road after the plant closed. This 2023 view documents the property, not operating-era emissions.",
    date: "July 28, 2023",
    credit: "Mr. Matté / Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Huntley_Generating_Station,_Tonawanda,_NY,_July_2023.jpg",
    rights: "Creative Commons Attribution-ShareAlike 4.0",
  },
  "bethlehem-steel": {
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
  "union-ship-canal-hanna-furnace": {
    src: "/historical/hanna-furnace-process-context.jpg",
    alt: "Two workers supervising coke ovens at a Hanna furnace operation in Detroit during 1942",
    caption:
      "Hanna furnace workers supervising coke ovens in Detroit. This is company and process context, not a photograph of Buffalo's Union Ship Canal plant.",
    date: "1942",
    credit: "Arthur S. Siegel / U.S. Office of War Information, Library of Congress",
    sourceUrl: "https://www.loc.gov/pictures/item/2017840024/",
    rights: "No known restrictions",
  },
  "remington-rand-north-tonawanda": {
    src: "/historical/remington-rand-company-context.jpg",
    alt: "James H. Rand Junior meeting with U.S. Labor Secretary Frances Perkins during the 1937 Remington Rand strike",
    caption:
      "Remington Rand president James H. Rand Jr. meeting with Labor Secretary Frances Perkins during the national 1937 strike. This is corporate and labor context, not the North Tonawanda plant.",
    date: "March 18, 1937",
    credit: "Harris & Ewing Collection, Library of Congress",
    sourceUrl: "https://www.loc.gov/pictures/item/2016871380/",
    rights: "No known restrictions on Harris & Ewing collection images",
  },
  "batavia-landfill": {
    src: "/historical/batavia-landfill.png",
    alt: "U.S. Environmental Protection Agency photograph of the capped Batavia Landfill Superfund site",
    caption:
      "The Batavia Landfill after Superfund remedial construction and capping.",
    date: "Post-cleanup site photograph",
    credit: "U.S. Environmental Protection Agency",
    sourceUrl:
      "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.photovideoaudio&id=0201766",
    rights: "U.S. government image",
  },
  "tonawanda-coke": {
    src: "/historical/tonawanda-coke-epa-2020.jpg",
    alt: "The deactivated coke oven battery and coal charging building at the former Tonawanda Coke facility",
    caption:
      "The 60-oven coke battery beside the coal charging building after the ovens were deactivated in October 2018.",
    date: "Published March 27, 2020; capture date not stated",
    credit: "U.S. Environmental Protection Agency",
    sourceUrl:
      "https://www.epa.gov/newsreleases/epa-successfully-wraps-activities-tonawanda-coke-facility",
    rights: "U.S. EPA photograph",
  },
  "tonawanda-landfill-fusrap-vicinity": {
    src: "/historical/tonawanda-landfill-fusrap-2019.jpg",
    alt: "Excavator and field crew removing shallow contaminated soil at the Tonawanda Landfill FUSRAP vicinity property",
    caption:
      "Targeted shallow excavation at the Tonawanda Landfill vicinity property. Field scanning and laboratory analysis guided the 2019 removal; radioactive material below five feet was managed under the selected land-use remedy.",
    date: "July 29, 2019",
    credit: "Emily Shoffstall / U.S. Army Corps of Engineers, Buffalo District",
    sourceUrl:
      "https://www.dvidshub.net/image/7176742/fusrap-tonawanda-landfill-vicinity-property",
    rights: "Public domain — official U.S. Army photograph",
  },
  "niagara-falls-storage-site": {
    src: "/historical/niagara-falls-storage-site-aerial-2023.jpg",
    alt: "Annotated aerial view outlining the Niagara Falls Storage Site and its interim waste containment structure",
    caption:
      "The 191-acre federal site outlined in yellow, with the approximately 10-acre Interim Waste Containment Structure labeled IWCS. The adjoining quarry is outside the outlined federal property.",
    date: "August 8, 2023",
    credit: "U.S. Army Corps of Engineers, Buffalo District",
    sourceUrl:
      "https://www.dvidshub.net/image/7959257/niagara-falls-storage-site-aerial-diagram",
    rights: "Public domain — official U.S. Army illustration",
  },
  "niagara-falls-storage-site-vicinity-properties": {
    src: "/historical/niagara-falls-storage-site-aerial-2023.jpg",
    alt: "Annotated aerial view of the Niagara Falls Storage Site and surrounding landscape associated with its vicinity-property program",
    caption:
      "The federal storage site and Interim Waste Containment Structure provide geographic context for the separate vicinity properties investigated around it. The outline does not represent one continuous vicinity-property contamination boundary.",
    date: "August 8, 2023",
    credit: "U.S. Army Corps of Engineers, Buffalo District",
    sourceUrl:
      "https://www.lrd.usace.army.mil/News/Multimedia/igphoto/2003370682/",
    rights: "Public domain — official U.S. Army illustration",
  },
  "seaway-site": {
    src: "/historical/seaway-fusrap-site-2021.jpg",
    alt: "U.S. Army Corps team surveying the grassy Seaway FUSRAP landfill site in Tonawanda",
    caption:
      "A federal survey team at the Seaway Site before construction of the engineered cap. The view documents the landfill setting and investigation work, not the buried material itself.",
    date: "April 27, 2021",
    credit: "U.S. Army Corps of Engineers, Buffalo District",
    sourceUrl: "https://www.dvidshub.net/image/8028649/fusrap-seaway-site",
    rights: "Public domain — official U.S. Army photograph",
  },
  "forest-glen-mobile-home-subdivision": {
    src: "/historical/forest-glen-redevelopment.jpg",
    alt: "Distribution building and landscaped grounds constructed over part of the capped Forest Glen Superfund site",
    caption:
      "A distribution facility built over part of the completed Forest Glen cap. The photograph shows post-cleanup reuse; groundwater extraction, monitoring, and land-use controls remain part of the remedy.",
    date: "November 20, 2003",
    credit: "U.S. Environmental Protection Agency",
    sourceUrl:
      "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.photovideoaudio&id=0202361",
    rights: "U.S. government image",
  },
  "katherine-street-peninsula": {
    src: "/historical/katherine-street-restoration-2022.jpg",
    alt: "Stone, anchored wood, and aquatic plants along the restored Buffalo River shoreline at Katherine Street",
    caption:
      "Anchored logs, stone, and aquatic planting along the restored Katherine Street shoreline. The work rebuilt habitat after river-sediment remediation; it does not establish the composition of every upland fill area on the peninsula.",
    date: "August 11, 2022",
    credit: "Joshua Unghire / U.S. Army Corps of Engineers, Buffalo District",
    sourceUrl:
      "https://www.dvidshub.net/image/8206512/buffalo-river-habitat-restoration-completed-katherine-street",
    rights: "Public domain — official U.S. Army photograph",
  },
  "times-beach-disposal-site": {
    src: "/historical/times-beach-cdf-inspection-2020.jpg",
    alt: "Displaced concrete armor blocks along the vegetated edge of the Times Beach confined disposal facility",
    caption:
      "Army Corps inspection of the former confined-disposal structure shows displaced shoreline armor among dense vegetation. Habitat value and containment maintenance occupy the same landscape at Times Beach.",
    date: "September 4, 2020",
    credit: "Jess Levenson / U.S. Army Corps of Engineers, Buffalo District",
    sourceUrl:
      "https://www.dvidshub.net/image/6422296/times-beach-confined-disposal-facility",
    rights: "Public domain — official U.S. Army photograph",
  },
  "buffalo-harbor-cdf-4": {
    src: "/historical/buffalo-harbor-cdf4-2023.jpg",
    alt: "West shoreline of Buffalo Harbor Confined Disposal Facility Number 4 with Lake Erie and the Buffalo skyline beyond",
    caption:
      "The west shore of CDF No. 4, an operating dredged-material facility exposed to Lake Erie wave action. Its dike and shoreline require inspection and repair to maintain containment.",
    date: "October 26, 2023",
    credit: "Ryan Campbell / U.S. Army Corps of Engineers, Buffalo District",
    sourceUrl:
      "https://www.dvidshub.net/image/8095343/buffalo-district-commander-visits-cdf-4",
    rights: "Public domain — official U.S. Army photograph",
  },
  "republic-steel": {
    src: "/historical/republic-steel-buffalo-bar-mill-1986.jpg",
    alt: "Black-and-white east elevation of the former Republic Steel eight-inch bar mill in Buffalo",
    caption:
      "The Buffalo plant's 8-inch bar mill, photographed from the northeast during federal industrial documentation. The mill was built in 1919–1920 and was part of LTV Steel's former Republic Steel complex.",
    date: "1986",
    credit: "Jet Lowe / Historic American Engineering Record, Library of Congress",
    sourceUrl: "https://www.loc.gov/pictures/item/ny1813.photos.351483p/",
    rights: "No known restrictions on U.S. government HAER image",
  },
};
