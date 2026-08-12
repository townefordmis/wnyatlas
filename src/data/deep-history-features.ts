import { deepHistoryBatchTwo } from "@/data/deep-history-batch-two";
import { deepHistoryBatchThree } from "@/data/deep-history-batch-three";
import { deepHistoryBatchFour } from "@/data/deep-history-batch-four";

export type DeepHistoryFeature = {
  eyebrow: string;
  title: string;
  lead: string;
  accent: string;
  stat?: { value: string; label: string };
  chapters: Array<{
    period: string;
    title: string;
    body: string;
  }>;
  caution: { title: string; body: string };
  sources: Array<{ label: string; url: string }>;
};

export const deepHistoryFeatures: Record<string, DeepHistoryFeature> = {
  ...deepHistoryBatchTwo,
  ...deepHistoryBatchThree,
  ...deepHistoryBatchFour,
  "forest-glen-mobile-home-subdivision": {
    eyebrow: "Homes built over an illegal dump",
    title: "A neighborhood was moved so families could leave the contamination behind",
    lead:
      "Forest Glen became a residential subdivision after chemical waste had been illegally disposed on the land. Approximately 150 people—including retired residents and children—lived in 51 mobile homes and two permanent houses before investigation turned ordinary domestic activities into questions about contact with buried waste.",
    accent: "#ff8f54",
    stat: { value: "150", label: "approximately, residents permanently relocated" },
    chapters: [
      {
        period: "1980-1989",
        title: "A complaint exposed what lay beneath the subdivision",
        body: "Niagara County health officials responded after drum tops and resin-like material appeared at a residence; utility workers had also encountered waste, drums, and batteries. In 1989, ATSDR concluded that known conditions and plausible exposure during gardening, play, and lawn care presented a significant health risk and recommended immediate relocation.",
      },
      {
        period: "1989-1992",
        title: "Relocation affected every part of household life",
        body: "EPA and FEMA first offered temporary assistance and then permanently relocated the residents. Federal records describe individual and possible group moves, testing possessions and mobile homes, continued mortgage obligations, pet kenneling, and the practical difficulty of moving heavily altered trailers.",
      },
      {
        period: "During the response",
        title: "Children were taken away from the site during the day",
        body: "EPA's post-remediation account records that older Forest Glen children were bused to day camps when school was out and younger children went to daycare, reducing contact with contaminated areas while relocation and site work proceeded. It is a documented human consequence without requiring a claim about any child's health.",
      },
    ],
    caution: {
      title: "Relocation is the documented outcome",
      body: "The record supports a significant health threat, permanent relocation, and long-term groundwater treatment. It does not support assigning a particular later illness to the site without a separate medical and epidemiological record.",
    },
    sources: [
      { label: "EPA: Forest Glen cleanup and relocation history", url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0202361" },
      { label: "EPA: 1989 relocation decision and resident comments", url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100SBAM.TXT" },
      { label: "EPA: post-remediation human-impact account", url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100P583.TXT" },
      { label: "UPI: residents respond to the relocation plan", url: "https://www.upi.com/Archives/1989/07/26/Forest-Glen-residents-cool-to-relocation-plan/8233617428800/" },
    ],
  },
  "wide-beach-development": {
    eyebrow: "An unintended neighborhood exposure",
    title: "The material used to control dust traveled into homes and yards",
    lead:
      "Wide Beach was a small Lake Erie community where waste oil was applied to unpaved roads for dust control from 1968 to 1978. Neither the road treatment nor residents' later reuse of excavated soil began with knowledge that the material contained PCBs.",
    accent: "#55c8de",
    stat: { value: "60", label: "homes within the 55-acre development" },
    chapters: [
      {
        period: "1968-1980",
        title: "A practical road treatment created a community-wide pathway",
        body: "The homeowners' association applied approximately 155 cubic meters of waste oil to local roads. When sewer construction later excavated road soil, some residents unknowingly used it as fill in yards and a recreation area, moving contamination beyond the original roadbeds.",
      },
      {
        period: "1983-1985",
        title: "Sampling brought the contamination inside the household story",
        body: "Investigators reported PCBs in road dust, soil, air, private-well samples, and vacuum-cleaner dust. EPA's immediate response paved roads, driveways, and ditches, cleaned homes by vacuuming and shampooing rugs, replaced filters, and installed particulate filters on wells.",
      },
      {
        period: "1990-1994",
        title: "The neighborhood remained while the contaminated landscape was rebuilt",
        body: "The long-term remedy excavated and treated contaminated soil from roads, driveways, yards, drainage areas, and wetlands before backfilling and repaving. EPA reports that 36,160 tons were treated; the site was removed from the national Superfund list in 1994.",
      },
    ],
    caution: {
      title: "Residents were not the polluters in this account",
      body: "The official record says residents did not know that the road oil or excavated soil contained PCBs. WNYAtlas does not turn ordinary dust control, gardening, or yard work into blame, and it presents the completed remedy as complete rather than portraying an uncontrolled present-day site.",
    },
    sources: [
      { label: "EPA: Wide Beach site and cleanup history", url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0202151" },
      { label: "EPA: 1985 remedy and community record", url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100SJF8.TXT" },
    ],
  },
  "former-american-axle-east-delavan": {
    eyebrow: "Automaking, bargaining, and closure",
    title: "The last product left with hundreds of working lives attached",
    lead:
      "The East Delavan complex carried Buffalo's automobile history from General Motors into American Axle. Its environmental record matters, but so does the abrupt end of a workplace where industrial knowledge, union bargaining, family income, and neighborhood identity were concentrated.",
    accent: "#f0b93f",
    stat: { value: "653", label: "hourly workers offered buyouts or early retirement in 2007" },
    chapters: [
      {
        period: "1920s-1994",
        title: "A General Motors plant changed with the automobile",
        body: "The complex began with automobile and body assembly and later concentrated on axles, gears, and drivetrain components. Generations of production workers carried skills in machining, heat treatment, painting, welding, maintenance, and material handling through repeated changes in the product line.",
      },
      {
        period: "1994-2008",
        title: "American Axle ownership ended in a regional labor crisis",
        body: "GM sold the plant to American Axle in 1994. As the company prepared to close the Buffalo facility, 653 hourly workers were offered buyouts or early retirement. A companywide UAW strike in 2008 and negotiated plant-closure agreements formed the final labor context for the Buffalo and Tonawanda operations.",
      },
      {
        period: "After manufacturing",
        title: "A closed factory became both a cleanup and an employment loss",
        body: "Manufacturing ceased in 2008 and the property changed hands. Brownfield investigation and controlled redevelopment address the physical inheritance, but those programs do not replace the wages, seniority, and workplace community that ended with production.",
      },
    ],
    caution: {
      title: "Three local plants, separate records",
      body: "American Axle operated facilities in Buffalo, Cheektowaga, and Tonawanda. Employment figures, strike events, closure dates, and contamination findings must be assigned to the correct plant; this chapter uses the East Delavan property as its geographic anchor.",
    },
    sources: [
      { label: "Buffalo Toronto Public Media: 653 Buffalo workers", url: "https://www.btpm.org/2007-08-15/american-axle-offers-buyout-and-early-retirement-to-buffalo-employees" },
      { label: "SEC filing: strike and facility-closure agreements", url: "https://www.sec.gov/Archives/edgar/data/1062231/000106223109000009/form10-k.htm" },
      { label: "NYSDEC American Axle cleanup working group", url: "https://dec.ny.gov/news/press-releases/2021/4/dec-commissioner-seggos-and-erie-county-legislator-baskin-announce-community-working-group-to-support-cleanup-of-former-american-axle-site" },
    ],
  },
  "former-hooker-main-plant": {
    eyebrow: "Workers inside the chemical complex",
    title: "The federal record recognizes an atomic-era workforce",
    lead:
      "The Buffalo Avenue plant is usually introduced through Hooker's products and disposal sites. Its worker history adds a second view: employees performed chemical and atomic-weapons-related work, organized through a plant union, sought recognition of occupational uncertainty, and ultimately experienced the end of manufacturing in 2021.",
    accent: "#e87947",
    stat: { value: "1944-1948", label: "federal Special Exposure Cohort operating period" },
    chapters: [
      {
        period: "World War II and after",
        title: "Some employees supported federal atomic work",
        body: "The Department of Labor recognizes Hooker Electrochemical as an atomic-weapons employer. In 2015, a defined class of employees who worked at the Niagara Falls facility for at least 250 aggregate workdays during the July 1944-December 1948 operating period entered the Special Exposure Cohort under the federal occupational-illness compensation program.",
      },
      {
        period: "Why the designation matters",
        title: "Dose could not be reconstructed reliably for the covered class",
        body: "The federal designation followed a finding that radiation dose could not be reconstructed with sufficient reliability under the program's rules. It creates a compensation pathway for qualifying workers with specified cancers; it does not declare that every employee was exposed or became ill.",
      },
      {
        period: "November 2021",
        title: "Manufacturing ended for another generation",
        body: "OxyChem closed its Niagara Falls manufacturing operations, affecting 130 full-time employees and 20 contractors. The company announced transitional pay and benefits, severance, counseling, outplacement help, and possible relocation—an ending distinct from the site's continuing corrective-action obligations.",
      },
    ],
    caution: {
      title: "Eligibility is not a diagnosis",
      body: "Special Exposure Cohort status applies only to workers meeting federal employment and medical criteria. WNYAtlas reports the program and the historical reason for it without labeling every Hooker or Occidental employee as exposed, compensated, or ill.",
    },
    sources: [
      { label: "U.S. Department of Labor: 2015 cohort designation", url: "https://www.dol.gov/agencies/owcp/energy/regs/compliance/PolicyandProcedures/finalcircularhtml/EEOICPACircular16-01" },
      { label: "U.S. Department of Labor: compensation-program announcement", url: "https://www.dol.gov/newsroom/releases/owcp/owcp20151029" },
      { label: "Buffalo Toronto Public Media: 2021 plant closure", url: "https://www.btpm.org/local/2021-08-19/oxychem-closing-its-niagara-falls-manufacturing-operations-the-company-confirms" },
      { label: "Federal court record: Niagara Hooker Employees Union", url: "https://law.justia.com/cases/federal/appellate-courts/F2/935/1370/282826/" },
    ],
  },
  "niagara-falls-storage-site": {
    eyebrow: "A federal legacy under public watch",
    title: "The strongest human history is collective stewardship",
    lead:
      "No single verified personal account yet represents the Niagara Falls Storage Site. Its defensible human history is the long relationship among wartime workers, federal agencies, nearby towns, libraries, schools, and residents who have asked what is stored there, whether containment works, and where the material should ultimately go.",
    accent: "#d8e04f",
    stat: { value: "10 acres", label: "interim containment structure within the 191-acre federal site" },
    chapters: [
      {
        period: "1943-1952",
        title: "A wartime explosives landscape became an atomic-waste destination",
        body: "The property formed part of the Lake Ontario Ordnance Works, where TNT was produced during World War II. Beginning in 1944, the Manhattan Engineer District used this portion to store radioactive residues and wastes from uranium-ore processing; additional material arrived through 1952.",
      },
      {
        period: "1982-1986",
        title: "Waste from across the property was consolidated",
        body: "The Department of Energy gathered radioactive residues, contaminated soil, rubble, and demolition debris into an engineered earthen containment structure. The work reduced dispersed contamination but also created a long-term federal storage responsibility visible to surrounding communities.",
      },
      {
        period: "2015-present",
        title: "Public review accompanies a decision to remove the cell",
        body: "The Army Corps published alternatives, held meetings, preserved transcripts and comments, and in 2019 selected complete excavation and out-of-state disposal of the containment structure. Project records remain available through Lewiston and Youngstown libraries while design, site work, monitoring, and funding continue.",
      },
    ],
    caution: {
      title: "Concern and monitoring are not proof of present exposure",
      body: "USACE reports that the containment structure is performing as designed and remains protective while the removal remedy advances. Public concern, proximity to schools or homes, and a site's atomic history do not by themselves establish that a particular person received a harmful dose.",
    },
    sources: [
      { label: "U.S. Army Corps: NFSS history, status, and public record", url: "https://www.lrd.usace.army.mil/Missions/Projects/Display/Article/3612360/niagara-falls-storage-site/" },
      { label: "DOE: NFSS vicinity-properties fact sheet", url: "https://www.energy.gov/sites/default/files/2023-08/NiagaraFallsVPFactSheet.pdf" },
      { label: "Niagara County: Community LOOW Project", url: "https://downloads.niagaracounty.gov/departments/a-f/environmental_health/the_community_loow_project.php" },
    ],
  },
  "tonawanda-coke": {
    eyebrow: "Residents, enforcement, and closure",
    title: "A neighborhood challenge became a federal criminal case",
    lead:
      "Tonawanda Coke's history is not only a story of ovens and emissions. Residents pressed regulators to investigate air they had lived beside for years; federal inspectors then documented concealed violations, prosecutors brought the case to trial, and court-ordered money was directed back into community health and environmental research.",
    accent: "#f0b93f",
    stat: { value: "$24.7M", label: "criminal penalty and community service ordered in 2014" },
    chapters: [
      {
        period: "2009-2013",
        title: "Community concern met federal inspection and trial",
        body: "EPA's April 2009 inspection uncovered an unreported coke-oven-gas emission source and hazardous coal-tar sludge practices. A federal jury later convicted the company on 11 Clean Air Act counts and three hazardous-waste counts; its environmental manager was also convicted, including for obstruction of justice.",
      },
      {
        period: "March 2014",
        title: "The sentence acknowledged harm beyond a permit violation",
        body: "The court imposed a $12.5 million penalty and $12.2 million in community-service payments. The Justice Department said the community money would support an epidemiological study and air-and-soil research into the facility's possible health and environmental effects.",
      },
      {
        period: "October 2018 onward",
        title: "Closure ended production, not the work",
        body: "When the 60 ovens permanently shut down, EPA placed air monitors at the plant and five community locations, including an elementary school. Federal and state teams then secured the abandoned process systems, removed or treated hazardous material, and began the longer cleanup and redevelopment phase.",
      },
    ],
    caution: {
      title: "What the record supports",
      body: "The convictions, emissions, shutdown response, and funded studies are documented. They do not prove that the plant caused a particular person's illness. WNYAtlas keeps the community's experience visible while separating population-level concern from individual medical causation.",
    },
    sources: [
      { label: "U.S. Department of Justice: 2014 sentencing", url: "https://www.justice.gov/archives/opa/pr/tonawanda-coke-and-manager-sentenced-violating-clean-air-act-and-resource-conservation-and" },
      { label: "EPA: 2018 shutdown assessment", url: "https://www.epa.gov/archive/epa/newsreleases/epa-begins-assessment-tonawanda-coke-facility-shutdown-operations-wrap.html" },
      { label: "DOJ environmental-crime case summary", url: "https://www.justice.gov/enrd/environmental-crime-victim-assistance/prosecution-federal-pollution-crimes" },
    ],
  },
  "republic-steel": {
    eyebrow: "Work, closure, and reuse",
    title: "The mill disappeared; its labor and landscape did not",
    lead:
      "Republic Steel tied South Buffalo households to an enormous riverfront works for most of the twentieth century. Its closure removed a workplace that once employed about 2,500 people, while the land entered a decades-long path through bankruptcy, cleanup, and controlled reuse.",
    accent: "#f1cf50",
    stat: { value: "2,500", label: "workers at the Buffalo plant at its peak, reported in 1984" },
    chapters: [
      {
        period: "1906-1982",
        title: "Generations worked an integrated industrial landscape",
        body: "Republic's furnaces and mills and the adjoining Donner-Hanna coke operation made the Buffalo River corridor a place of skilled, dangerous, and physically demanding work. The separate plants were operationally linked, but their later cleanup parcels and contamination records remain distinct.",
      },
      {
        period: "June 1982-January 1984",
        title: "An indefinite shutdown became permanent",
        body: "Republic idled the South Buffalo plant in 1982. In January 1984 the company announced it would never reopen, citing weak demand. A contemporary report called the decision another blow to a region already experiencing double-digit unemployment.",
      },
      {
        period: "After closure",
        title: "Industrial knowledge moved with the workers",
        body: "United Steelworkers later recorded that about 100 former Republic employees found work at a nearby copper and brass plant. Their machinery experience became part of the next factory's workforce—a specific example of how industrial skill survived even when the original mill did not.",
      },
    ],
    caution: {
      title: "Keep the people and parcels straight",
      body: "The employment figures describe the Republic plant, while cleanup findings vary among the four Steelfields areas. WNYAtlas does not assign every condition from Republic, Donner-Hanna, or later RiverBend investigations to the entire former complex.",
    },
    sources: [
      { label: "UPI archive: permanent closure announcement", url: "https://www.upi.com/Archives/1984/01/17/The-Republic-Steel-Corp-which-mothballed-steel-making-operations-at/2655443163600/" },
      { label: "United Steelworkers: former Republic workers at Aurubis", url: "https://m.usw.org/act/publications/magazine/archives/2014-summer/USW%40Work-Summer-2014.pdf" },
      { label: "City of Buffalo: South Buffalo historic survey", url: "https://www.buffalony.gov/DocumentCenter/View/9471/SouthBuffaloPhaseI" },
    ],
  },
  "hooker-hyde-park-landfill": {
    eyebrow: "A community contested the remedy",
    title: "Public scrutiny helped shape a containment system built to last",
    lead:
      "Hyde Park's human history includes the people living west of the landfill and the residents and environmental organizations who challenged whether the first federal settlement was adequate. Their participation became part of the formal court and remedy record.",
    accent: "#ff8a48",
    stat: { value: "7 days", label: "of court-ordered evidentiary hearings on the 1981 settlement" },
    chapters: [
      {
        period: "1979-1982",
        title: "A proposed settlement was tested in public and in court",
        body: "After the federal government sued in 1979, the 1981 settlement drew substantial public objections and a request for an evidentiary hearing. The court ordered seven days of testimony in which government, company, local, and Canadian environmental representatives presented and cross-examined witnesses before the agreement was approved in 1982.",
      },
      {
        period: "1985 onward",
        title: "The remedy followed contamination beyond the fence",
        body: "The final system addressed the landfill, fractured-bedrock groundwater, Bloody Run drainage, storm sewers, and Niagara Gorge seeps. A residential community-monitoring program added wells outside the industrial property to check whether contamination was moving toward nearby homes.",
      },
      {
        period: "2003-present",
        title: "Completion means managed protection, not an empty landfill",
        body: "EPA recorded cleanup construction as complete in 2003 and removed Hyde Park from the Superfund list in 2013. The buried waste, caps, pumping, treatment, easement, and monitoring remain; the community's protection depends on those systems continuing to work.",
      },
    ],
    caution: {
      title: "A careful health statement",
      body: "EPA concluded that the completed remedy eliminated the site's threat to public health and the environment. That conclusion rests on continued containment and monitoring. It should not be rewritten as either 'nothing happened' or as proof of a specific resident's illness.",
    },
    sources: [
      { label: "EPA: 1985 enforcement decision document", url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100PYNL.TXT" },
      { label: "EPA: 2013 Superfund deletion and cleanup summary", url: "https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/722b0632baeffc0d85257c19005357a4.html" },
      { label: "EPA: Hyde Park site profile", url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0201306" },
    ],
  },
  "hooker-102nd-street-landfill": {
    eyebrow: "Two companies, one riverfront remedy",
    title: "The quantities tell only part of the story",
    lead:
      "At 102nd Street, Hooker and Olin operated adjoining disposal areas beside the Niagara River. The public record is unusually specific about the waste streams, but its human meaning lies in why the riverward pathway and downstream municipal intake were treated as high-consequence concerns.",
    accent: "#e5d24a",
    stat: { value: "159,000+", label: "tons of industrial waste documented across both owners' areas" },
    chapters: [
      {
        period: "1943-about 1971",
        title: "Adjoining disposal areas received different industrial wastes",
        body: "Hooker's larger parcel received solvents, phosphates, brine sludge, ash, cell equipment, and lindane-process waste. Olin's adjoining parcel received mixed organic and inorganic chemicals and mercury-bearing brine waste. The sitewide total belongs to both operating histories, not to one company alone.",
      },
      {
        period: "1982-1995",
        title: "The river and water-supply pathway drove public concern",
        body: "EPA's original listing narrative identified leaching toward the Niagara River upstream of the city's intake tunnels as a major concern. Investigation and remedy design focused on isolating the waste and stopping outward groundwater movement rather than claiming that every downstream person had been exposed.",
      },
      {
        period: "1996-present",
        title: "A wall, cap, and pumps replaced an open industrial edge",
        body: "Crews installed a circumferential slurry wall, removed affected embayment sediment, built a permanent cap, and sent recovered liquid to treatment. EPA removed the site from the national list in 2004, but access controls, pumping, monitoring, and five-year reviews continue.",
      },
    ],
    caution: {
      title: "Deletion is not unrestricted use",
      body: "Superfund deletion recorded completion of the selected remedy. It did not mean the waste mass was excavated, and it does not make the point marker a claim about every nearby parcel or every person who used the river.",
    },
    sources: [
      { label: "EPA: 102nd Street site profile", url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201706" },
      { label: "EPA: original National Priorities List narrative", url: "https://semspub.epa.gov/work/02/363542.pdf" },
      { label: "EPA: 1995 remedy amendment", url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100PYCP.TXT" },
    ],
  },
  "hooker-s-area-landfill": {
    eyebrow: "A landfill beside essential infrastructure",
    title: "The water plant made containment a public necessity",
    lead:
      "S-Area's defining fact is physical: an eight-acre chemical landfill sits immediately beside the Niagara Falls drinking-water treatment plant. Investigators found chemicals in subsurface intake structures and plant-property soil, forcing the city, regulators, and the responsible company to redesign how critical water infrastructure and the landfill were separated.",
    accent: "#55c8de",
    stat: { value: "63,000", label: "tons of chemical-processing waste estimated by EPA" },
    chapters: [
      {
        period: "1947-1961",
        title: "Chemical disposal grew beside a municipal water facility",
        body: "Hooker disposed of organic and inorganic chemical wastes at S-Area while the neighboring water plant continued serving Niagara Falls. The land-use conflict was not hypothetical: the landfill and plant shared a narrow riverfront setting above fractured bedrock.",
      },
      {
        period: "1969-1983",
        title: "Routine inspection led to a larger investigation",
        body: "A 1969 water-plant inspection found small amounts of chemicals in intake structures. Later sampling found contamination in an intake tunnel and plant-property soil. The Water Authority closed the affected bedrock intake structures in 1983 as the Superfund investigation proceeded.",
      },
      {
        period: "1990-present",
        title: "The remedy protects infrastructure as well as land",
        body: "The selected work capped and contained the landfill, collected contaminated groundwater, treated recovered liquids, and modified or abandoned affected plant structures. Continued sampling and five-year reviews are part of the protection—not an optional epilogue.",
      },
    ],
    caution: {
      title: "Do not overstate the drinking-water finding",
      body: "The historical record documents chemicals in subsurface intake structures and migration near the plant. It does not, by itself, demonstrate contamination of today's treated water or establish illness in a customer. The Atlas states the infrastructure finding and the corrective response without extending it beyond the evidence.",
    },
    sources: [
      { label: "EPA: Niagara River Action Plan, S-Area history", url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101RRSY.TXT" },
      { label: "EPA: S-Area site profile", url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0202150" },
      { label: "EPA: Niagara Falls waste-sites historical overview", url: "https://semspub.epa.gov/work/HQ/174296.pdf" },
    ],
  },
};

export function hasDeepHistoryFeature(siteId: string) {
  return siteId in deepHistoryFeatures;
}
