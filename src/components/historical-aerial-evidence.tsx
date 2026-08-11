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
