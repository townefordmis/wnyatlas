import type { AtlasSource } from "@/types/site";

export const earlyIndustrySources = {
  oil: { title: "DEC oil-and-gas history — printed page 4-6; full PDF page 374", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/fs/docs/pdf/geismaster.pdf" },
  cynthia: { title: "Bolivar's First Refinery — historical location and operation", publisher: "Allegany County Historical Society", url: "https://www.alleganyhistory.org/places/towns-and-villages/a-e274/bolivar262/related-articles48/2178-bolivars-first-refinery" },
  mills: { title: "Williamsville historic survey — printed page 3-6 / PDF page 23", publisher: "Village of Williamsville / Clinton Brown Company Architecture, 2013", url: "https://williamsvilleny.gov/wp-content/uploads/2017/01/Intensive-Level-Survey-FULL-FINAL.pdf" },
  landmark: { title: "Williamsville Water Mills — official landmark description", publisher: "Village of Williamsville", url: "https://williamsvilleny.gov/committees/historic-preservation/" },
  raceway: { title: "Williamsville waterfront plan — alternative raceway chronology; indexed text reviewed", publisher: "Village of Williamsville / New York State Department of State", url: "https://dos.ny.gov/system/files/documents/2023/01/williamsville_lwrp_approved_sections_1_7.pdf" },
  cement: { title: "USGS Bulletin 522 — 1913, printed and PDF page 22", publisher: "U.S. Geological Survey", url: "https://pubs.usgs.gov/bul/0522/report.pdf" },
  cementSurvey: { title: "Lime and Cement Industries of New York — printed pages 836–837 and plate 84; PDF pages 377, 387–388", publisher: "Heinrich Ries / New York State Museum Bulletin 44, 1901 volume", url: "https://archive.org/details/limeandcementin00riesgoog" },
  refineries: { title: "The Early and Later History of Petroleum — 1873, printed page 320 / PDF page 336", publisher: "J. T. Henry; University of California Libraries copy", url: "https://archive.org/details/earlylaterhistor00henrrich/page/320/mode/2up" },
  bolivar1891: { title: "Bolivar fire-insurance maps — July 1891, two sheets", publisher: "Sanborn / Library of Congress", url: "https://www.loc.gov/item/sanborn05780_001/" },
  bolivar1897: { title: "Bolivar fire-insurance maps — January 1897, two sheets", publisher: "Sanborn / Library of Congress", url: "https://www.loc.gov/item/sanborn05780_002/" },
  akron: { title: "Akron's separate cement works — transcription of Henry Perry Smith's 1884 history", publisher: "New York Genealogy", url: "https://newyorkgenealogy.org/erie/history-of-akron-and-vicinity.htm" },
  tanning: { title: "Jacob Frederick Schoellkopf — business development and acquisitions", publisher: "German Historical Institute / Immigrant Entrepreneurship", url: "https://www.immigrantentrepreneurship.org/entries/jacob-frederick-schoellkopf/" },
  ledger: { title: "North Evans tannery Hide Book — catalog SCA204-GA528-1-11", publisher: "University of Waterloo Special Collections & Archives", url: "https://archives.uwaterloo.ca/index.php/l-breithaupt-tannery-orders" },
  survey: { title: "Buffalo Preservation Ready Survey — printed pages 3-9, 3-10 and 3-20", publisher: "City of Buffalo / Panamerican Consultants, 2013; public report copy", url: "https://buffaloah.com/surveys/PresReady/PresReady.pdf" },
  foundry: { title: "Hanna Furnace historical summary — regional background, printed page 3 / PDF page 6", publisher: "Panamerican Consultants, 2002; NYSDEC archive", url: "https://extapps.dec.ny.gov/data/DecDocs/915029/Report.HW.915029.2002-11-01.Historical%20Summary%20and%20Archival%20Photographs.pdf" },
  iron: { title: "Industrial Crossroads — 1992, introduction printed page 3 / PDF page 7", publisher: "Society for Industrial Archeology", url: "https://www.sia-web.org/wordpress/wp-content/uploads/2025/02/SIA-Buffalo-Guidebook-1992.pdf" },
  frenchFort: { title: "Fort Little Niagara — 1751 upper-portage post", publisher: "New York State Military Museum", url: "https://museum.dmna.ny.gov/forts/little-niagara" },
  britishFort: { title: "Fort Schlosser — 1760 British fort and separate location", publisher: "New York State Military Museum", url: "https://museum.dmna.ny.gov/forts/schlosser" },
  portage: { title: "National Register documentation — Lower Landing section page 10 / bundle PDF page 63", publisher: "National Park Service", url: "https://npgallery.nps.gov/GetAsset/a177b303-6c93-45ef-9412-2bb19b34ec6d" },
} satisfies Record<string, AtlasSource>;

type EarlyIndustryChapter = {
  id: string;
  period: string;
  location: string;
  title: string;
  paragraphs: string[];
  limit: string;
  nextRecord: string;
  sources: AtlasSource[];
  related?: { href: string; label: string };
  image?: { src: string; alt: string; caption: string; source: AtlasSource };
};

export const earlyIndustryChapters: EarlyIndustryChapter[] = [
  {
    id: "niagara-portage", period: "1751–1760 onward", location: "Niagara Falls · Niagara County",
    title: "Trade, stores and labor at the Niagara portage",
    paragraphs: [
      "The upper landing was part of a transport system that moved people and goods around Niagara Falls. The state museum dates the French Fort Little Niagara post to 1751 and its destruction to 1759. Its British successor, Fort Schlosser, was built in 1760, 40 rods farther upstream. They belong to one landscape but have separate footprints.",
      "National Register documentation describes a planned trading house and guard accommodation, negotiations for Seneca permission, and conflict over the replacement of Seneca porters with horses. The transport story includes Indigenous authority and work as well as colonial fortifications.",
    ],
    limit: "These records establish historical use and location relationships. They do not establish modern contamination. The National Register bundle discusses some additional properties as possibilities for future study; that is not proof that every location mentioned was listed.",
    nextRecord: "Compare public period maps and fort plans, with Seneca-authored historical accounts, before drawing separate fort footprints.",
    sources: [earlyIndustrySources.frenchFort, earlyIndustrySources.britishFort, earlyIndustrySources.portage],
  },
  {
    id: "williams-mills", period: "1811 onward", location: "Williamsville · Erie County",
    title: "A mill district around Ellicott Creek",
    paragraphs: [
      "Williamsville's historic survey records an 1811 permanent gristmill and nearby sawmill, together with Jonas Williams's tannery, distillery, dams and raceways. This was a connected water-powered industrial district, rather than only the mill building that survives today.",
      "The village identifies the Water Mills landmark at 56 Spring Street. The surviving mill provides an address for the Atlas marker; the locations of the other businesses need their own historical map evidence.",
    ],
    limit: "Accounts disagree on whether the raceway that created Island Park dates to 1814 or approximately 1841. The water-power system is documented, but its exact construction sequence remains open. These sources are historical surveys, not contaminant analyses.",
    nextRecord: "Recover early water-rights deeds and maps showing each mill, the tannery, distillery and raceway.",
    sources: [earlyIndustrySources.mills, earlyIndustrySources.landmark, earlyIndustrySources.raceway],
    related: { href: "/sites/williamsville-water-mills", label: "Read the Williamsville place record" },
  },
  {
    id: "beals-mayhew", period: "Late 1820s", location: "Ohio and Indiana streets · Buffalo",
    title: "An early steam-powered foundry, with a disputed start date",
    paragraphs: [
      "Two substantial historical reports place Beals–Mayhew's foundry and machine shop at Ohio and Indiana streets. The Buffalo Preservation Ready Survey gives 1828; the earlier Hanna Furnace historical report gives 1826 in its regional background chapter.",
      "The agreement on the historical intersection makes this a useful place-history lead. The disagreement means an exact founding date, or an unqualified claim to being Buffalo's first foundry, needs further work.",
    ],
    limit: "The Hanna report is held in DEC's 915029 archive. Its regional discussion does not give Beals–Mayhew that cleanup identifier or transfer Hanna's environmental findings to this location.",
    nextRecord: "Find contemporary advertisements, partnership records and early maps to resolve the date and original footprint.",
    sources: [earlyIndustrySources.survey, earlyIndustrySources.foundry],
  },
  {
    id: "akron-cement", period: "1839 onward", location: "Akron / Newstead · Erie County",
    title: "Several cement works, quarries and kiln systems",
    paragraphs: [
      "USGS's 1913 history identifies Jonathan Delano's 1839 cement works at Falkirk, near Akron, followed by Montgomery and Newman interests. It separately records H. Cummings & Son's 1854 plant and a later Cummings operation west of Akron.",
      "The 1884 county history distinguishes the Newman works, Akron Cement Works and Cummings' Akron Cement Works. Its account includes kilns, water and steam power, and limestone extraction by tunneling. These names should be reconciled plant by plant before assigning map markers.",
      "The State Museum's 1901 volume supplies a closer view of the process: Cummings had seventeen kilns, with crushers, pulverizers and millstones preparing cement for the packing house. It identifies Union Akron as another large works and illustrates both operations. These are descriptions from the turn of the century, rather than proof that all this equipment existed in 1839.",
    ],
    limit: "The 1824 cement-production date in USGS's account belongs to Williamsville, not Akron. Sources disagree over an ownership transfer, giving 1869 and 1871. Historical natural-cement production is not evidence of a hazardous-waste site.",
    nextRecord: "Match the 1880 Akron map to quarry deeds, kiln sites and company transfers around 1869–1871.",
    sources: [earlyIndustrySources.cement, earlyIndustrySources.akron, earlyIndustrySources.cementSurvey],
  },
  {
    id: "schoellkopf-tanneries", period: "1840s–1900", location: "Buffalo, Hamburg and North Evans · Erie County",
    title: "A tannery network before the dye works",
    paragraphs: [
      "The German Historical Institute's business history distinguishes Schoellkopf's early tannery acquisition outside Buffalo, a Buffalo sheepskin operation in 1846, North Evans, and the 1877 purchase of Lymburner & Torrey. The later acquisition should not automatically receive the earlier Buffalo operation's founding date.",
      "The Buffalo survey places the later tannery north of Perry Street between Mississippi and Liberty, beside the Clark and Skinner Canal. It reproduces a 1904 newspaper description of refuse-contaminated canal water. That later account documents a nuisance beside the plant, but does not identify the tannery as the source of every deposit.",
      "Waterloo's archives catalog identifies a 1856–1857 Hide Book covering hides from Canada charged to North Evans Tannery, with Schoellkopf-related financial records. The catalog description was checked; the original ledger pages have not yet been reviewed.",
    ],
    limit: "Different acquisitions require separate locations and chronologies. Tannery use alone does not establish chromium use, measured contamination or a particular discharge route. The 1904 canal account is a separately dated follow-up outside this feature's main period.",
    nextRecord: "Read the North Evans ledger and compare contemporary directories, deeds and atlas plates for each tannery.",
    sources: [earlyIndustrySources.tanning, earlyIndustrySources.survey, earlyIndustrySources.ledger],
    related: { href: "/sites/buffalo-color", label: "Read the separate Buffalo Color dye-works history" },
  },
  {
    id: "buffalo-cement", period: "1850–1900; 1901 survey follow-up", location: "Scajaquada Creek and Main Street · Buffalo",
    title: "Cement quarries beneath the city's later landscape",
    paragraphs: [
      "USGS's 1913 history places Warren Granger's 1850 natural-cement plant beside Scajaquada Creek below the Main Street bridge, in what it describes as Forest Lawn Cemetery. It separately records Bennett's 1874 Buffalo Plains enterprise. Those locations and businesses require separate histories.",
      "The State Museum's 1901 volume locates Buffalo Cement Company's quarries on Main Street near the New York Central Belt Line. Its photograph shows the quarry and a railway carrying stone toward the crusher. The survey describes ten firebrick-lined stone kilns in two rows, charged with rock and coke hauled up an incline.",
      "Grinding machinery and screens separated the burned material; harder clinker went to a Griffin mill for a product the survey called Portland cement. The reported plant capacity was about 750 barrels a day. This was an extraction, fuel-burning and manufacturing landscape extending beyond a single quarry pit.",
    ],
    limit: "The 1901 process description is a separately dated follow-up to the nineteenth-century history. It does not establish nineteenth-century emissions, current contamination, filled-quarry contents or exact modern parcel boundaries. Granger's Forest Lawn works should not be merged with the Main Street/Belt Line operation.",
    nextRecord: "Match plate 84 and Sanborn quarry plans to company deeds and cemetery acquisitions before adding a precise marker or tracing later quarry fill.",
    sources: [earlyIndustrySources.cement, earlyIndustrySources.cementSurvey],
    image: { src: "/images/research/buffalo-cement-quarry-1901.jpg", alt: "Historical photograph of Buffalo Cement Company's open quarry, with rail tracks crossing the excavation.", caption: "Buffalo Cement Company quarry, plate 84 in the State Museum's 1901 volume. The original caption identifies the railway as carrying stone to the crusher. Photograph credited to L. P. Bishop. Scan rotated and cropped to the photograph; the publication date is not a verified exposure date.", source: earlyIndustrySources.cementSurvey },
  },
  {
    id: "union-iron", period: "1860–1861 onward", location: "Farmer's Point / Katherine Street · Buffalo",
    title: "Blast furnaces on the Buffalo River",
    paragraphs: [
      "The Society for Industrial Archeology's guide places two blast-furnace ventures at Farmer's Point, where Hamburg and Katherine streets met the Buffalo River. Construction began in 1860–1861; the businesses later merged as Union Iron Works.",
      "This adds an early ironmaking chapter to the existing Katherine Street record. Later fill, waste-oil handling, river sediment remediation and habitat restoration remain separately documented parts of the landscape's history.",
    ],
    limit: "Company-name overlap does not merge Farmer's Point with Hanna Furnace at Union Ship Canal or the Black Rock furnaces. The reviewed history does not establish an off-site slag destination, radioactive material, or responsibility for every later sediment finding.",
    nextRecord: "Reconstruct the furnace and shoreline footprints from nineteenth-century atlases, deeds and company records.",
    sources: [earlyIndustrySources.iron],
    related: { href: "/sites/katherine-street-peninsula", label: "Read the expanded Katherine Street record" },
  },
  {
    id: "buffalo-refineries", period: "Documented in 1873", location: "Hamburg Street and oil-trade routes · Buffalo",
    title: "Two Buffalo refineries in a contemporary petroleum survey",
    paragraphs: [
      "J. T. Henry's 1873 petroleum history lists Star Oil Works, operated by Thayer & Riddell at 385 Hamburg Street, with a still capacity of nearly 200 barrels a day. It also lists Dudley & Co. at 251 barrels a day, while explaining that some refining took place at Miller Farm on Pennsylvania's Oil Creek before shipment to Buffalo.",
      "The account documents Buffalo's place in an interregional refining network by 1873. It also shows why a company's reported capacity cannot automatically be assigned entirely to its Buffalo premises. The Hamburg Street address is a historical listing whose modern parcel and street-number correspondence still need verification.",
    ],
    limit: "These contemporary listings predate Cynthia's 1882 opening. Neither company has been identified as the unnamed Buffalo recipient of oil recovered from Little Genesee Creek. Reported still capacity is not measured output, a spill quantity or a modern environmental finding.",
    nextRecord: "Follow Star and Dudley through 1870s–1880s directories, plant maps and shipping records; distinguish office addresses from refinery locations.",
    sources: [earlyIndustrySources.refineries],
  },
  {
    id: "cynthia-oil-works", period: "1882 onward", location: "Bolivar / Little Genesee Creek · Allegany County",
    title: "A refinery supplied by oil recovered from a creek",
    paragraphs: [
      "DEC's oil-and-gas history recounts oil leaking from early storage tanks into Little Genesee Creek. As much as 90 barrels a day were reportedly recovered behind a dam and sent to an unnamed Buffalo oil works. The account cites John P. Herrick's 1949 Empire Oil.",
      "When Cynthia Oil Works was built in 1882, a reported 10,000 barrels of crude recovered from the creek were in storage. The Allegany County Historical Society places the refinery on the Porter Cowles flats at Bolivar's north end, south of Salt Rising Road on a Bradford, Eldred & Cuba Railroad siding, and dates its first run to September 30, 1882.",
      "The history connects upstream tank losses, creek recovery, local refining and a Buffalo destination. It is a documented historical petroleum-release story, with a material route still to identify.",
      "The Library of Congress holds two-sheet Bolivar fire-insurance maps from 1891 and 1897. Reviewing both editions did not establish Cynthia's location on the northern flats described by the local history. Their village-center coverage leaves a mapping gap; the missing identification does not demonstrate that the refinery had closed or never existed.",
    ],
    limit: "The quantities are historical estimates, not modern measurements. Cynthia recovered oil already in the creek; this does not make it the source of every upstream leak. The Buffalo recipient, exact refinery footprint, current conditions and any cleanup status remain unverified.",
    nextRecord: "Read Herrick's original pages and locate refinery deeds, railroad siding plans and records naming the Buffalo consignee.",
    sources: [earlyIndustrySources.oil, earlyIndustrySources.cynthia, earlyIndustrySources.bolivar1891, earlyIndustrySources.bolivar1897],
  },
];
