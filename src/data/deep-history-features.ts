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
