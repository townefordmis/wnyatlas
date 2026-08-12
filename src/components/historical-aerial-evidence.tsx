type AerialPanel = {
  period: string;
  heading: string;
  imageUrl: string;
  sourceUrl: string;
  sourceLabel: string;
  alt: string;
  note: string;
  matched?: boolean;
  highlight?:
    | {
        viewBox: string;
        path: string;
        ariaLabel: string;
      }
    | {
        viewBox: string;
        cx: number;
        cy: number;
        rx: number;
        ry: number;
        ariaLabel?: string;
      };
};

type AerialHistory = {
  eyebrow: string;
  title: string;
  introduction: string;
  interpretation: string;
  panels: AerialPanel[];
  recordLinks: { label: string; url: string }[];
};

const bethlehemBounds =
  "bbox=-78.900%2C42.775%2C-78.825%2C42.860&bboxSR=4326&imageSR=4326&size=1200%2C1200&format=jpg&f=image";

const tonawandaCokeBounds =
  "bbox=-78.950%2C42.960%2C-78.900%2C43.010&bboxSR=4326&imageSR=4326&size=1200%2C1200&format=jpg&f=image";

const hydeParkBounds =
  "bbox=-79.055%2C43.115%2C-79.015%2C43.145&bboxSR=4326&imageSR=4326&size=1200%2C1200&format=jpg&f=image";

const hooker102Bounds =
  "bbox=-78.965%2C43.073%2C-78.938%2C43.093&bboxSR=4326&imageSR=4326&size=1200%2C1200&format=jpg&f=image";

const sAreaBounds =
  "bbox=-79.018%2C43.068%2C-78.993%2C43.084&bboxSR=4326&imageSR=4326&size=1200%2C1200&format=jpg&f=image";

const republicSteelBounds =
  "bbox=-78.850%2C42.850%2C-78.832%2C42.8655&bboxSR=4326&imageSR=4326&size=1200%2C1200&format=jpg&f=image";

const republicSteelAreaIPath =
  "M 177.1 628.9 L 214.8 660.5 L 409.6 723.5 L 427.8 717.7 L 431.4 696.9 L 389.2 477.8 L 326.6 392.7 L 348.2 334.0 L 362.7 316.9 L 477.2 226.5 L 499.2 216.5 L 506.0 216.5 L 753.7 416.5 L 970.5 499.7 L 938.6 521.7 L 870.7 539.6 L 874.3 557.5 L 794.2 601.4 L 686.9 678.3 L 572.4 730.3 L 572.3 738.3 L 396.8 789.1 L 320.7 818.4 L 290.4 820.0 L 257.5 814.6 L 235.5 802.0 L 218.8 771.1 L 179.2 655.7 L 177.1 628.9 Z";

const histories: Record<string, AerialHistory> = {
  "republic-steel": {
    eyebrow: "Historical aerial evidence · sixth release",
    title: "From operating steelworks to the managed RiverBend landscape",
    introduction:
      "The 1951 Erie County photograph records the Republic Steel and neighboring South Buffalo industrial landscape during the plant's long operating period. Four later state orthophotos use one fixed geographic window around Area I, the former Republic/LTV steel parcel, to show shutdown-era remains, cleanup, redevelopment, and the present managed property.",
    interpretation:
      "The bright yellow line follows the current NYSDEC V00619 Area I remediation-site polygon on the matched state orthophotos. Its placement on the 1951 archive frame is an approximate transfer to a scanned, differently scaled photograph. The line identifies the former Republic/LTV steel cleanup parcel; it is not a contamination, exposure, or original ownership boundary, and it does not include the separately documented Donner-Hanna coke plant and storage parcels. DEC records - not aerial appearance - establish operating history, environmental conditions, cleanup work, and continuing site-management requirements.",
    panels: [
      {
        period: "1951",
        heading: "Republic Steel during full operation",
        imageUrl:
          "https://www3.erie.gov/sites/default/files/images/aerialphotos/1951/51_5H106.jpg",
        sourceUrl:
          "https://www3.erie.gov/sites/default/files/images/aerialphotos/1951/51_5H106.jpg",
        sourceLabel: "Erie County frame 51_5H106",
        alt: "Erie County 1951 aerial photograph showing the operating Republic Steel complex, Buffalo River, rail corridors, and surrounding South Buffalo neighborhoods",
        note:
          "DEC's 1997 historical review reported no significant plant change between the 1950 Sanborn map and this 1951 aerial. The yellow trace approximately transfers the later Area I boundary onto the archival frame; scan distortion and the frame's different scale prevent survey-level alignment.",
        highlight: {
          viewBox: "0 0 1620 1622",
          path: "M 300.0 828.3 L 321.9 865.0 L 434.8 938.1 L 445.4 931.3 L 447.4 907.2 L 423.0 653.1 L 386.7 554.4 L 399.2 486.3 L 407.6 466.5 L 474.0 361.6 L 486.7 350.0 L 490.7 350.0 L 634.3 582.0 L 760.0 678.5 L 741.5 704.0 L 702.1 724.8 L 704.2 745.5 L 657.8 796.4 L 595.6 885.6 L 529.2 946.0 L 529.1 955.2 L 427.4 1014.2 L 383.3 1048.1 L 365.7 1050.0 L 346.6 1043.7 L 333.9 1029.1 L 324.2 993.3 L 301.2 859.4 L 300.0 828.3 Z",
          ariaLabel: "Bright yellow approximate transfer of the DEC Area I boundary onto the 1951 aerial",
        },
      },
      {
        period: "1994-1998",
        heading: "Shutdown and cleared industrial ground",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer/export?${republicSteelBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer",
        sourceLabel: "USGS NAPP / NYS GIS",
        alt: "Color infrared orthophoto showing the former Republic Steel Area I parcel after steelmaking operations were suspended",
        note:
          "This federal mosaic records the former steel parcel after operations had been suspended and major structures were being removed. Color differences, bare soil, debris, and remaining buildings are visual context rather than measurements of contamination or cleanup completion.",
        matched: true,
        highlight: {
          viewBox: "0 0 1200 1200",
          path: republicSteelAreaIPath,
          ariaLabel: "Bright yellow line tracing the NYSDEC Area I remediation-site boundary",
        },
      },
      {
        period: "2002",
        heading: "Bankruptcy, transfer, and cleanup planning",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer/export?${republicSteelBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer",
        sourceLabel: "2002 NYS orthophoto",
        alt: "New York State 2002 orthophoto showing the former Republic Steel Area I parcel before extensive cleanup and RiverBend redevelopment",
        note:
          "In 2002 Steelfields acquired former Republic Steel and Donner-Hanna properties through the LTV and National Steel bankruptcy estates and entered a state voluntary-cleanup agreement. The yellow line isolates Area I from the adjoining cleanup areas.",
        matched: true,
        highlight: {
          viewBox: "0 0 1200 1200",
          path: republicSteelAreaIPath,
          ariaLabel: "Bright yellow line tracing the NYSDEC Area I remediation-site boundary",
        },
      },
      {
        period: "2008",
        heading: "Cleanup completion and RiverBend transition",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2008/MapServer/export?${republicSteelBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2008/MapServer",
        sourceLabel: "2008 NYS orthophoto",
        alt: "New York State 2008 orthophoto showing the remediated former Republic Steel Area I parcel during its transition to RiverBend",
        note:
          "Area I remedial work conducted from 2003 through 2008 included soil removal and management, covers, and groundwater controls. RiverBend purchased Area I in 2008; the photograph supplies surface context but does not demonstrate performance of subsurface systems.",
        matched: true,
        highlight: {
          viewBox: "0 0 1200 1200",
          path: republicSteelAreaIPath,
          ariaLabel: "Bright yellow line tracing the NYSDEC Area I remediation-site boundary",
        },
      },
      {
        period: "2024",
        heading: "Modern manufacturing on a managed brownfield",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer/export?${republicSteelBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
        sourceLabel: "2024 NYS orthophoto",
        alt: "New York State 2024 orthophoto showing modern manufacturing and managed open land within the former Republic Steel Area I boundary",
        note:
          "The latest view shows the large modern manufacturing building and surrounding managed land within Area I. Redevelopment did not erase the environmental record: DEC's revised plan requires continuing inspection, reporting, groundwater work, and controlled handling of subsurface soil or fill.",
        matched: true,
        highlight: {
          viewBox: "0 0 1200 1200",
          path: republicSteelAreaIPath,
          ariaLabel: "Bright yellow line tracing the NYSDEC Area I remediation-site boundary",
        },
      },
    ],
    recordLinks: [
      {
        label: "NYSDEC Area I revised site-management plan",
        url: "https://extapps.dec.ny.gov/data/DecDocs/V00619/Report.VCP.V00619.2021-09-20.Area_I_Revised_SMP.pdf",
      },
      {
        label: "NYSDEC 1997 Steelfields historical assessment",
        url: "https://extapps.dec.ny.gov/data/DecDocs/V00619/Report.VCP.V00619.1997-09-01.Voluntary_Cleanup_Site_Assessment_Report_Vol-I%20-Text.pdf",
      },
      {
        label: "NYSDEC remediation-site boundary data",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/database-search/remediation-site-boundaries-downloadable-gis-files",
      },
      {
        label: "Erie County historical aerial archive",
        url: "https://www3.erie.gov/aerial-photos/aerial-photographs",
      },
    ],
  },
  "bethlehem-steel": {
    eyebrow: "Historical aerial evidence · first release",
    title: "The steel works, slag-built shoreline, and post-industrial landscape",
    introduction:
      "These photographs make the physical scale of the Lackawanna works visible. The 1926 and 1951 archive frames provide period context but cover different extents and are not precisely aligned. The three later state orthophotos use one shared geographic window, allowing a closer comparison of the property after primary steelmaking ended.",
    interpretation:
      "EPA and DEC records—not the photographs alone—document approximately 440 acres of manmade land formed with iron- and steelmaking slag and other plant waste. Aerials can show shoreline position, structures, roads, rail lines, cleared ground, and redevelopment. They cannot identify the contents of fill, establish contamination, or show present exposure.",
    panels: [
      {
        period: "1926",
        heading: "Early Bethlehem-era waterfront",
        imageUrl:
          "https://www3.erie.gov/sites/default/files/images/aerialphotos/1920s/b5_g18.jpg",
        sourceUrl:
          "https://www3.erie.gov/sites/default/files/images/aerialphotos/1920s/b5_g18.jpg",
        sourceLabel: "Erie County plate G18",
        alt: "Erie County 1926 aerial plate showing the Lackawanna waterfront, early steel facilities, rail corridors, neighborhoods, and Lake Erie shoreline",
        note:
          "The county plate shows the early industrial waterfront and adjoining community shortly after Bethlehem Steel acquired the works. Plate seams and historical markings are part of the archive image.",
      },
      {
        period: "1951",
        heading: "Integrated works at industrial scale",
        imageUrl:
          "https://www3.erie.gov/sites/default/files/images/aerialphotos/1951/51_2H111.jpg",
        sourceUrl:
          "https://www3.erie.gov/sites/default/files/images/aerialphotos/1951/51_2H111.jpg",
        sourceLabel: "Erie County frame 51_2H111",
        alt: "Erie County 1951 aerial photograph showing Bethlehem Steel facilities and the industrial Lake Erie shoreline in Lackawanna",
        note:
          "By 1951 the shoreline and plant were dominated by large industrial structures, rail infrastructure, process areas, and made land. This frame is not the same extent as the 1926 plate.",
      },
      {
        period: "1994–1998",
        heading: "After primary steelmaking",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer/export?${bethlehemBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer",
        sourceLabel: "USGS NAPP / NYS GIS",
        alt: "Color infrared orthophoto from the 1994 to 1998 NAPP program showing the former Bethlehem Steel property and Lackawanna shoreline",
        note:
          "The color-infrared mosaic records the property after ironmaking and steelmaking ended and during the major demolition era. Irregular offshore shapes and seams are imagery artifacts or ice, not mapped waste boundaries.",
        matched: true,
      },
      {
        period: "2002",
        heading: "Bankruptcy and transition",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer/export?${bethlehemBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer",
        sourceLabel: "2002 NYS orthophoto",
        alt: "New York State 2002 orthophoto showing the former Bethlehem Steel complex, Lackawanna shoreline, Smokes Creek, rail yards, and remaining buildings",
        note:
          "The 2002 view follows the end of coke production and Bethlehem's 2001 bankruptcy. Large cleared areas coexist with remaining mills, rail corridors, waterways, and waste-management areas.",
        matched: true,
      },
      {
        period: "2024",
        heading: "Cleanup, reuse, and residual industrial land",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer/export?${bethlehemBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
        sourceLabel: "2024 NYS orthophoto",
        alt: "New York State 2024 orthophoto showing the former Bethlehem Steel property and modern Lackawanna shoreline",
        note:
          "The latest panel shows extensive cleared and reused land, remaining industrial structures, renewable-energy areas, habitat, and active cleanup landscapes. White blocks at the image edge are no-data gaps in the state mosaic.",
        matched: true,
      },
    ],
    recordLinks: [
      {
        label: "Erie County historical aerial archive",
        url: "https://www3.erie.gov/aerial-photos/aerial-photographs",
      },
      {
        label: "NYSDEC Bethlehem Steel cleanup record",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/environmental-cleanup-at-former-bethlehem-steel-site",
      },
      {
        label: "EPA Tecumseh / Bethlehem corrective-action record",
        url: "https://www.epa.gov/hwcorrectiveactioncleanups/hazardous-waste-cleanup-tecumseh-redevelopment-incorporated-lackawanna",
      },
    ],
  },
  "tonawanda-coke": {
    eyebrow: "Historical aerial evidence · second release",
    title: "A century of coke making, shutdown, and cleanup along River Road",
    introduction:
      "The first two county photographs place the coke works in its wider riverfront setting, but they cover different areas and are not precisely aligned. The three later state orthophotos use one shared geographic window around the former plant and the adjoining Niagara River corridor, making the operating and post-shutdown landscapes easier to compare.",
    interpretation:
      "EPA and DEC records - not the photographs alone - establish the site's operating history, environmental violations, 2018 shutdown, emergency work, material removals, and continuing state cleanup programs. Aerials can show the coke-oven complex, buildings, rail lines, storage areas, cleared ground, and changes after shutdown. They cannot identify benzene, coal tar, ammonia, contaminated soil or groundwater, exposure, or completion of cleanup. The main plant east of River Road and the riverfront parcel known as Site 108 are separately tracked cleanup areas.",
    panels: [
      {
        period: "1927",
        heading: "Early coke works in the river corridor",
        imageUrl:
          "https://www3.erie.gov/sites/default/files/images/aerialphotos/1920s/b7_e25.jpg",
        sourceUrl:
          "https://www3.erie.gov/sites/default/files/images/aerialphotos/1920s/b7_e25.jpg",
        sourceLabel: "Erie County plate E25",
        alt: "Erie County 1927 aerial plate showing Grand Island, the Niagara River, and the early industrial River Road corridor in Tonawanda",
        note:
          "Coke manufacturing had begun on the property in 1917. This county plate supplies broad period context for the river, islands, transportation corridor, and early industrial development; it is not a surveyed site-boundary map.",
        highlight: { viewBox: "0 0 2306 1561", cx: 2035, cy: 235, rx: 245, ry: 185 },
      },
      {
        period: "1951",
        heading: "The mature industrial riverfront",
        imageUrl:
          "https://www3.erie.gov/sites/default/files/images/aerialphotos/1951/51_5H221.jpg",
        sourceUrl:
          "https://www3.erie.gov/sites/default/files/images/aerialphotos/1951/51_5H221.jpg",
        sourceLabel: "Erie County frame 51_5H221",
        alt: "Erie County 1951 aerial photograph of the Niagara River, Grand Island, and the Tonawanda industrial riverfront",
        note:
          "The 1951 flight records the wider River Road industrial landscape decades before Tonawanda Coke Corporation took over operations in 1978. Its extent and orientation differ from the later matched views.",
        highlight: { viewBox: "0 0 1620 1622", cx: 1390, cy: 665, rx: 205, ry: 360 },
      },
      {
        period: "1994-1998",
        heading: "Tonawanda Coke in operation",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer/export?${tonawandaCokeBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer",
        sourceLabel: "USGS NAPP / NYS GIS",
        alt: "Color infrared orthophoto from the 1994 to 1998 NAPP program showing the operating Tonawanda Coke complex and Niagara River corridor",
        note:
          "The color-infrared mosaic shows the operating plant, riverfront industry, rail and road connections, and open storage or process areas. Dark surfaces and color differences are visual features, not contamination measurements.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 500, cy: 650, rx: 285, ry: 195 },
      },
      {
        period: "2002",
        heading: "Operating complex before federal enforcement",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer/export?${tonawandaCokeBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer",
        sourceLabel: "2002 NYS orthophoto",
        alt: "New York State 2002 orthophoto showing the operating Tonawanda Coke property and surrounding Tonawanda industrial corridor",
        note:
          "This matched view predates the major federal criminal case and the 2018 shutdown. It records the physical operating landscape, but the image alone does not establish what materials were present or where releases occurred.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 500, cy: 650, rx: 285, ry: 195 },
      },
      {
        period: "2024",
        heading: "Post-shutdown removal and state cleanup",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer/export?${tonawandaCokeBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
        sourceLabel: "2024 NYS orthophoto",
        alt: "New York State 2024 orthophoto showing the former Tonawanda Coke property after shutdown and emergency removal work",
        note:
          "The latest panel shows the altered property after the October 2018 shutdown and EPA-led removal work. Visible clearing does not mean the entire property is clean; DEC continues to track the main plant and Site 108 through separate state cleanup records.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 500, cy: 650, rx: 285, ry: 195 },
      },
    ],
    recordLinks: [
      {
        label: "Erie County historical aerial archive",
        url: "https://www3.erie.gov/aerial-photos/aerial-photographs",
      },
      {
        label: "EPA Tonawanda Coke site record",
        url: "https://www.epa.gov/ny/tonawanda-coke-corporation-tcc-site",
      },
      {
        label: "EPA 2020 emergency-work closeout",
        url: "https://www.epa.gov/newsreleases/epa-successfully-wraps-activities-tonawanda-coke-facility",
      },
      {
        label: "NYSDEC Region 9 cleanup record",
        url: "https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9",
      },
    ],
  },
  "hooker-hyde-park-landfill": {
    eyebrow: "Historical aerial evidence · third release",
    title: "From the operating landfill to the long-term remedy",
    introduction:
      "A newly verified USGS frame records the Hyde Park Landfill area in 1958, five years after disposal began. Four later New York State orthophotos then use one fixed geographic window around the landfill, adjoining industrial properties, the Niagara Power Project, nearby neighborhoods, and the Niagara Gorge. No pre-1953 Hyde Park frame was available from the online USGS catalog; New York State's 1938 Niagara County photographs remain an archive lead rather than a published comparison image.",
    interpretation:
      "The bright yellow oval is an approximate visual guide derived from the landfill property shown in the official operation-and-maintenance map; it is not a surveyed boundary. The 1958 frame is a regional, non-orthorectified photograph and is not pixel-aligned with the later views. EPA and DEC records - not color, vegetation, or visible surface change - establish the waste history, groundwater and sediment contamination, Bloody Run pathway, hydraulic containment, treatment, monitoring, and deletion from the National Priorities List. The photographs cannot show buried waste, NAPL, groundwater capture, dioxin, present exposure, or whether an engineered system is performing as designed.",
    panels: [
      {
        period: "1958",
        heading: "Early operating period",
        imageUrl: "/historical/hyde-park-1958-usgs.jpg",
        sourceUrl:
          "https://ims.cr.usgs.gov/browse/aircraft/phoenix/aerial/7KRD/7KRD05031/7KRD05031_077.jpg",
        sourceLabel: "USGS frame ARA550340100933",
        alt: "USGS aerial photograph acquired June 3, 1958, covering northern Niagara Falls and the Hyde Park Landfill area",
        note:
          "USGS acquired this 1:60,000-scale frame on June 3, 1958. Its recorded footprint contains EPA's published Hyde Park site coordinate, placing the photograph within the documented 1953-1975 disposal period. The yellow guide locates the property approximately; the photograph alone does not identify waste or contamination.",
        highlight: { viewBox: "0 0 800 755", cx: 275, cy: 327, rx: 38, ry: 14 },
      },
      {
        period: "1994-1998",
        heading: "Active construction and operating remedy era",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer/export?${hydeParkBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer",
        sourceLabel: "USGS NAPP / NYS GIS",
        alt: "Color infrared aerial showing the Hyde Park Landfill area, Niagara Power Project, Niagara Gorge, industry, and nearby neighborhoods in the 1994 to 1998 period",
        note:
          "The color-infrared mosaic records the area while the multi-part containment and treatment remedy was operating and construction was still being completed. Image seams and unusual colors are photographic artifacts or vegetation response, not contamination boundaries.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 745, cy: 555, rx: 245, ry: 88 },
      },
      {
        period: "2002",
        heading: "Near the construction-completion milestone",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer/export?${hydeParkBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer",
        sourceLabel: "2002 NYS orthophoto",
        alt: "New York State 2002 orthophoto showing the capped Hyde Park Landfill and surrounding Niagara Falls and Town of Niagara landscape",
        note:
          "EPA records construction completion in July 2003. This 2002 view provides surface context immediately before that milestone; it does not demonstrate completion or protectiveness by itself.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 745, cy: 555, rx: 245, ry: 88 },
      },
      {
        period: "2021",
        heading: "Long-term remedy and five-year review",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2021/MapServer/export?${hydeParkBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2021/MapServer",
        sourceLabel: "2021 NYS orthophoto",
        alt: "New York State 2021 orthophoto showing the Hyde Park Landfill area during long-term operation and monitoring",
        note:
          "EPA completed its sixth five-year review in 2021, eight years after deleting the site from the National Priorities List. Deletion recognized the completed remedy; it did not remove the buried waste or end required operation and monitoring.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 745, cy: 555, rx: 245, ry: 88 },
      },
      {
        period: "2024",
        heading: "Managed cap and surrounding landscape today",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer/export?${hydeParkBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
        sourceLabel: "2024 NYS orthophoto",
        alt: "New York State 2024 orthophoto showing the managed Hyde Park Landfill, nearby industry and neighborhoods, and the Niagara Gorge corridor",
        note:
          "The latest matched view shows the maintained surface and surrounding land uses. EPA's community monitoring wells, groundwater-control wells, treatment, cap care, and periodic reviews - not appearance in the aerial - are the evidence used to evaluate the remedy.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 745, cy: 555, rx: 245, ry: 88 },
      },
    ],
    recordLinks: [
      {
        label: "EPA Hyde Park cleanup record",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201306",
      },
      {
        label: "EPA cleanup milestones",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.schedule&id=0201306",
      },
      {
        label: "DEC operation-and-maintenance manual and site map",
        url: "https://extapps.dec.ny.gov/data/DecDocs/932021/Work%20Plan.HW.932021.2011-05-17.OM_Manual.pdf",
      },
      {
        label: "New York State Archives 1938 Niagara County aerial collection",
        url: "https://iarchives.nysed.gov/xtf/view?docId=ead%2Ffindingaids%2FB1936.xml",
      },
      {
        label: "EPA 2013 NPL deletion announcement",
        url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/722b0632baeffc0d85257c19005357a4.html",
      },
    ],
  },
  "hooker-102nd-street-landfill": {
    eyebrow: "Historical aerial evidence · fourth release",
    title: "Industrial disposal beside the Niagara River and the contained site today",
    introduction:
      "The earliest verified public frame covering the 102nd Street Landfill is a June 1958 USGS photograph, acquired while both company-owned portions were operating. Four later New York State orthophotos use one fixed geographic window to show the river-edge property during remedy construction, after construction completion, and under long-term management. A 1938 Niagara County archive collection exists, but no exact reproducible frame was available for this release.",
    interpretation:
      "The bright yellow oval is an approximate location guide centered on the mapped site; it is not a surveyed property or waste boundary. The 1958 regional frame is not orthorectified or pixel-aligned with the later views. EPA records - not visible tone, vegetation, bare ground, or shoreline appearance - document operation of the two landfill portions from the 1940s into the early 1970s, the disposed materials, contamination, the 1972 cap and bulkhead, and the later slurry wall, cap, collection systems, monitoring, and deletion from the National Priorities List. Aerial photographs cannot reveal buried waste, groundwater conditions, DNAPL, current exposure, or remedy performance.",
    panels: [
      {
        period: "1958",
        heading: "Both landfill portions operating",
        imageUrl: "/historical/hyde-park-1958-usgs.jpg",
        sourceUrl:
          "https://ims.cr.usgs.gov/browse/aircraft/phoenix/aerial/7KRD/7KRD05031/7KRD05031_077.jpg",
        sourceLabel: "USGS frame ARA550340100933",
        alt: "USGS aerial photograph acquired June 3, 1958, covering eastern Niagara Falls and the 102nd Street Landfill area beside the Niagara River",
        note:
          "USGS acquired this 1:60,000-scale frame on June 3, 1958. EPA records say the larger landfill portion operated from 1943 to 1971 and the smaller portion from 1948 to about 1970, placing this photograph within both operating periods. The image provides landscape context; it does not identify individual wastes or disposal events.",
        highlight: { viewBox: "0 0 800 755", cx: 613, cy: 578, rx: 40, ry: 20 },
      },
      {
        period: "1994-1998",
        heading: "Remedy design and construction period",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer/export?${hooker102Bounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer",
        sourceLabel: "USGS NAPP / NYS GIS",
        alt: "Color infrared orthophoto showing the 102nd Street Landfill and Niagara River shoreline during the 1990s remedy period",
        note:
          "EPA selected the remedy in 1990, updated it in 1995, and began construction in 1996. Because the statewide NAPP layer spans several acquisition years, this panel should be read as period context rather than the image of one precisely dated construction event.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 622, cy: 600, rx: 128, ry: 72 },
      },
      {
        period: "2002",
        heading: "After construction completion",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer/export?${hooker102Bounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer",
        sourceLabel: "2002 NYS orthophoto",
        alt: "New York State 2002 orthophoto showing the capped 102nd Street Landfill beside the Niagara River",
        note:
          "EPA records construction completion in 1999 and steady-state leachate pumping by November 2000. This view shows the managed surface soon afterward, but the photograph alone cannot establish containment or cleanup performance.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 622, cy: 600, rx: 128, ry: 72 },
      },
      {
        period: "2021",
        heading: "Long-term monitoring and five-year review",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2021/MapServer/export?${hooker102Bounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2021/MapServer",
        sourceLabel: "2021 NYS orthophoto",
        alt: "New York State 2021 orthophoto showing the managed 102nd Street Landfill and Niagara River shoreline",
        note:
          "EPA completed the site's sixth five-year review in 2021. The landfill had been deleted from the National Priorities List in 2004, but engineered controls, pumping, monitoring, maintenance, and land-use restrictions continued.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 622, cy: 600, rx: 128, ry: 72 },
      },
      {
        period: "2024",
        heading: "Contained river-edge property today",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer/export?${hooker102Bounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
        sourceLabel: "2024 NYS orthophoto",
        alt: "New York State 2024 orthophoto showing the current 102nd Street Landfill property beside the Niagara River",
        note:
          "The latest matched view records the present surface, shoreline and surrounding land uses. EPA's monitoring data and periodic reviews - not the site's appearance - determine whether the remedy continues to protect people and the environment.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 622, cy: 600, rx: 128, ry: 72 },
      },
    ],
    recordLinks: [
      {
        label: "EPA 102nd Street cleanup record",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201706",
      },
      {
        label: "EPA cleanup milestones",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.schedule&id=0201706",
      },
      {
        label: "EPA 1995 Record of Decision amendment",
        url: "https://semspub.epa.gov/work/02/67467.pdf",
      },
      {
        label: "New York State Archives 1938 Niagara County aerial collection",
        url: "https://iarchives.nysed.gov/xtf/view?docId=ead%2Ffindingaids%2FB1936.xml",
      },
    ],
  },
  "hooker-s-area-landfill": {
    eyebrow: "Historical aerial evidence · fifth release",
    title: "Before disposal, during operation, and under long-term containment",
    introduction:
      "EPA's historical-photo analysis supplies two unusually strong views of S-Area: a September 25, 1938 vertical photograph showing the earlier shoreline and future site boundary, and an annotated August 9, 1958 oblique view acquired while chemical-waste disposal was documented. Three later New York State orthophotos use one fixed geographic window to show the property during remedy construction, shortly after completion, and under current long-term management.",
    interpretation:
      "The black boundary and feature labels in the 1938 and 1958 images are reproduced directly from EPA Figure 2-6. WNY Atlas added a bright yellow trace over EPA's printed site-boundary line so it remains legible at smaller screen sizes; it is not a newly surveyed property line. EPA described the sequence as illustrating substantial change and development, but interpreted photo labels are not sampling results and do not independently establish the contents of a particular trench or drum. The bright yellow ovals on the later orthophotos are approximate location guides, not surveyed boundaries. EPA and DEC records - not aerial appearance - establish the disposal history, contaminants, migration investigations, containment systems, treatment, monitoring, and current remedy status. Proximity to the former water-treatment plant does not by itself establish a drinking-water exposure.",
    panels: [
      {
        period: "1938",
        heading: "Earlier shoreline and future site boundary",
        imageUrl: "/historical/s-area-1938-epa.jpg",
        sourceUrl:
          "https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=9101SE0X.PDF",
        sourceLabel: "EPA Figure 2-6",
        alt: "EPA reproduction of a September 25, 1938 vertical aerial photograph showing the future Hooker S-Area boundary and the earlier Niagara River shoreline",
        note:
          "EPA dated this vertical aerial September 25, 1938 and printed it at an approximate scale of 1:3,100. The bright yellow trace follows the agency's overlaid future S-Area boundary. Because EPA records place chemical-processing-waste disposal beginning in 1947, this photograph provides a pre-disposal baseline for the shoreline and industrial landscape.",
        highlight: {
          viewBox: "0 0 1975 2020",
          path: "M 526 716 L 1515 1128 L 1902 1137 L 1904 1813 L 423 1190 Z",
          ariaLabel: "Bright yellow line tracing EPA's printed future S-Area boundary",
        },
      },
      {
        period: "1958",
        heading: "EPA-annotated operating-period view",
        imageUrl: "/historical/s-area-1958-epa.jpg",
        sourceUrl:
          "https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=9101SE0X.PDF",
        sourceLabel: "EPA Figure 2-6 continued",
        alt: "EPA annotated August 9, 1958 oblique aerial photograph of Hooker S-Area identifying the site boundary, land reclamation, trenches, drums, debris, and intake construction",
        note:
          "EPA dated this oblique view August 9, 1958. The bright yellow trace follows its printed site boundary; the original interpretation also labels land reclamation, trenches, drums, debris, a possible drum-burial area, and industrial-intake construction. Those labels are EPA's historical remote-sensing interpretation; WNY Atlas presents them as recorded rather than independently confirming every feature.",
        highlight: {
          viewBox: "0 0 2000 2015",
          path: "M 190 400 L 805 402 L 1782 1200 L 525 1517 C 478 1496 431 1463 407 1412 C 386 1367 386 1304 349 1247 C 313 1190 284 1150 269 1090 C 253 1026 240 973 214 917 C 186 855 162 801 153 735 C 143 663 130 600 119 550 C 111 501 137 451 190 400 Z",
          ariaLabel: "Bright yellow line tracing EPA's printed 1958 S-Area site boundary",
        },
      },
      {
        period: "1994-1998",
        heading: "Containment construction and plant transition",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer/export?${sAreaBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/napp/MapServer",
        sourceLabel: "USGS NAPP / NYS GIS",
        alt: "Color infrared orthophoto showing the S-Area Landfill, Niagara River shoreline, and water-treatment-plant corridor during the 1990s remedy period",
        note:
          "The statewide NAPP layer spans several acquisition years that overlap construction of S-Area containment and treatment systems, replacement of the water-treatment plant, and work involving the old intake structures. It provides period context rather than a photograph of one precisely dated construction event.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 605, cy: 622, rx: 112, ry: 68 },
      },
      {
        period: "2002",
        heading: "After major remedial construction",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer/export?${sAreaBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2002/MapServer",
        sourceLabel: "2002 NYS orthophoto",
        alt: "New York State 2002 orthophoto showing the managed S-Area Landfill and Niagara River shoreline",
        note:
          "EPA records describe major S-Area remedial construction as completed by 2000. This 2002 view supplies surface context soon afterward; the photograph does not show whether subsurface collection, treatment, or hydraulic containment is performing as designed.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 605, cy: 622, rx: 112, ry: 68 },
      },
      {
        period: "2024",
        heading: "Long-term managed property today",
        imageUrl: `https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer/export?${sAreaBounds}`,
        sourceUrl:
          "https://orthos.its.ny.gov/arcgis/rest/services/wms/2024/MapServer",
        sourceLabel: "2024 NYS orthophoto",
        alt: "New York State 2024 orthophoto showing the current managed S-Area Landfill property and Niagara River corridor",
        note:
          "The latest matched view records the present surface and surrounding riverfront. EPA reports that long-term groundwater treatment and monitoring continue. Monitoring data and periodic reviews - not vegetation or surface appearance - are the evidence used to evaluate the remedy.",
        matched: true,
        highlight: { viewBox: "0 0 1200 1200", cx: 605, cy: 622, rx: 112, ry: 68 },
      },
    ],
    recordLinks: [
      {
        label: "EPA S-Area cleanup record",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0202150",
      },
      {
        label: "EPA historical-photo sequence, Figure 2-6",
        url: "https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=9101SE0X.PDF",
      },
      {
        label: "EPA S-Area cleanup milestones",
        url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.schedule&id=0202150",
      },
      {
        label: "EPA S-Area remedy record",
        url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100PZCV.TXT",
      },
    ],
  },
};

export function HistoricalAerialEvidence({ siteId }: { siteId: string }) {
  const history = histories[siteId];
  if (!history) return null;

  return (
    <section className="historical-aerial-evidence" aria-labelledby={`${siteId}-aerial-title`}>
      <p className="eyebrow">{history.eyebrow}</p>
      <h2 id={`${siteId}-aerial-title`}>{history.title}</h2>
      <p>{history.introduction}</p>

      <div className="historical-aerial-grid">
        {history.panels.map((panel) => (
          <figure className={panel.matched ? "is-matched" : "is-context"} key={`${panel.period}-${panel.heading}`}>
            <a href={panel.imageUrl} target="_blank" rel="noreferrer" aria-label={`Open the ${panel.period} aerial image at full size`}>
              {/* Official archive and state GIS imagery is intentionally served from its source. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={panel.imageUrl} alt={panel.alt} loading="lazy" referrerPolicy="no-referrer" />
              {panel.highlight ? (
                <svg
                  className="historical-aerial-site-highlight"
                  viewBox={panel.highlight.viewBox}
                  preserveAspectRatio="xMidYMid meet"
                  role="img"
                  aria-label={panel.highlight.ariaLabel ?? "Bright yellow outline marking the approximate former site area"}
                >
                  {"path" in panel.highlight ? (
                    <>
                      <path className="historical-aerial-site-halo" d={panel.highlight.path} />
                      <path className="historical-aerial-site-outline" d={panel.highlight.path} />
                    </>
                  ) : (
                    <>
                      <ellipse
                        className="historical-aerial-site-halo"
                        cx={panel.highlight.cx}
                        cy={panel.highlight.cy}
                        rx={panel.highlight.rx}
                        ry={panel.highlight.ry}
                      />
                      <ellipse
                        className="historical-aerial-site-outline"
                        cx={panel.highlight.cx}
                        cy={panel.highlight.cy}
                        rx={panel.highlight.rx}
                        ry={panel.highlight.ry}
                      />
                    </>
                  )}
                </svg>
              ) : null}
            </a>
            <figcaption>
              <span className="historical-aerial-period">{panel.period}</span>
              <strong>{panel.heading}</strong>
              <p>{panel.note}</p>
              <a href={panel.sourceUrl} target="_blank" rel="noreferrer">{panel.sourceLabel} ↗</a>
            </figcaption>
          </figure>
        ))}
      </div>

      <aside className="historical-aerial-reading-note">
        <strong>How to read this comparison</strong>
        <p>{history.interpretation}</p>
      </aside>

      <div className="historical-aerial-sources" aria-label="Historical aerial interpretation sources">
        {history.recordLinks.map((link) => (
          <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label} ↗</a>
        ))}
      </div>
    </section>
  );
}
