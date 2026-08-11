type AerialPanel = {
  period: string;
  heading: string;
  imageUrl: string;
  sourceUrl: string;
  sourceLabel: string;
  alt: string;
  note: string;
  matched?: boolean;
  highlight?: {
    viewBox: string;
    cx: number;
    cy: number;
    rx: number;
    ry: number;
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

const histories: Record<string, AerialHistory> = {
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
                  aria-label="Bright yellow outline marking the approximate former site area"
                >
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
