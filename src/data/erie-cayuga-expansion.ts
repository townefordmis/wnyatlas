import type { AtlasSite } from "@/types/site";

export const erieCayugaExpansion: AtlasSite[] = [
  {
    id: "cayuga-creek-erie-county",
    name: "Cayuga Creek — Erie County",
    municipality: "Lancaster / Depew / Cheektowaga",
    county: "Erie",
    category: "waterway",
    summary:
      "Erie County tributary of the Buffalo River whose Depew–Cheektowaga corridor intersects former municipal landfills, foundry-waste disposal areas, floodplain fill, and later creek restoration. This watershed hub keeps those source sites distinct while tracing their shared downstream setting.",
    evidenceStatus: "well-documented",
    coordinates: [-78.716, 42.894],
    story: {
      lastReviewed: "September 14, 2026",
      background: [
        "This is the Cayuga Creek that rises in eastern Erie County, passes through Lancaster, Depew, and Cheektowaga, and joins Buffalo Creek before the Buffalo River reaches Lake Erie. It is distinct from the Niagara County Cayuga Creek that flows toward the Niagara River.",
        "The 1989 Buffalo River Remedial Action Plan identified a chain of waste sites in this watershed, including the Town of Marilla and Lancaster landfills, Stocks Pond, Dresser Industries, Depew Village Landfill, Land Reclamation, Old Land Reclamation, and Union Road. That list is a historical screening framework, not proof that every site contributed the same contaminants or remains in the same condition today.",
        "The strongest documented creek connection is at Depew Village Landfill, where lead-bearing ash and fill eroded into sediment. Land Reclamation and Old Land Reclamation occupy the floodplain farther downstream. Separate site records are necessary because ownership, waste streams, remedy boundaries, and present controls differ.",
      ],
      timeline: [
        { period: "Industrial and disposal era", event: "Municipal refuse, incinerator ash, foundry residuals, and other industrial wastes were placed at separate facilities along the watershed." },
        { period: "1989", event: "The Buffalo River Remedial Action Plan organized eight Cayuga Creek watershed sites as potential contaminant-source concerns requiring site-specific investigation." },
        { period: "2001", event: "A streambank project at Depew Village Landfill encountered exceptionally lead-rich fill and stopped, prompting expanded state investigation." },
        { period: "2008–2009", event: "New York selected separate remedies for the Depew landfill source area and affected creek bank, floodplain, and sediment." },
        { period: "Present", event: "Cleanup stewardship, water-quality work, floodplain restoration, and habitat projects continue under different programs and boundaries." },
      ],
      documentedImpacts: [
        "At Depew Village Landfill, DEC documented lead-bearing soil and ash, bank erosion, and contaminated Cayuga Creek sediment over a defined study reach.",
        "At Land Reclamation, records document municipal and industrial waste disposal in the floodplain and groundwater movement toward the creek.",
        "The watershed-wide list identifies sites for investigation; it does not establish one continuous contaminated corridor or assign all downstream conditions to a single source.",
      ],
      cleanupAndControls: [
        "The Depew remedy included excavation, creek-bank stabilization, a landfill cover, gas controls, monitoring, and institutional controls.",
        "Land Reclamation was closed with a cap and drainage, leachate, gas, monitoring, and access controls under its own decision record.",
        "Other watershed sites must be evaluated from their current individual records before their historic RAP status is presented as a present-day condition.",
      ],
      presentDay: [
        "Cayuga Creek remains a living waterway and a useful organizing spine for environmental history. This page connects verified records geographically while preserving the difference between a source site, a sampled creek reach, and the watershed as a whole.",
      ],
      researchNotes: [
        "Complete individual record reviews for Old Land Reclamation, Stocks Pond, Dresser Industries, Lancaster Reclamation, Union Road, and the Town of Marilla landfill.",
        "Add agency-defined cleanup and restoration geometry when reusable spatial data are available.",
      ],
    },
    sources: [
      { title: "Buffalo River Remedial Action Plan, Stage I and II", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/docs/water_pdf/buffsg1and2rap89.pdf" },
      { title: "Depew Village Landfill OU-2 Proposed Remedial Action Plan", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/docs/regions_pdf/depewou2prap.pdf" },
      { title: "Depew Village Landfill OU-2 Remedial Investigation and Feasibility Study", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/915105/Report.HW.915105.2009-06-22.OU2%20RI%20and%20Feasibility%20Study.pdf" },
    ],
  },
  {
    id: "land-reclamation-landfill",
    name: "Land Reclamation Landfill",
    municipality: "Cheektowaga",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former municipal and industrial landfill at Indian Road and Broadway beside Cayuga Creek. State records document hazardous industrial wastes, a 20-to-50-foot waste mass, groundwater flow toward the creek, closure deficiencies, and a later cap-and-control remedy.",
    evidenceStatus: "well-documented",
    coordinates: [-78.694, 42.898],
    story: {
      lastReviewed: "September 14, 2026",
      background: [
        "The approximately 40-acre Land Reclamation site lies in the Cayuga Creek floodplain at Indian Road and Broadway. The regulated site includes an approximately 33-acre landfill and a transfer-station area; Old Land Reclamation is a separate adjoining site to the east.",
        "Municipal and industrial disposal occurred from about 1950 to 1983. Land Reclamation, Inc. operated it beginning in 1965, NEWCO followed, and BFI acquired the property in 1982. DEC's decision record identifies more than 2,500 cubic yards of industrial waste, including oil sludge, acids, pine-tar pitch, inks, paint wastes, incinerator ash, and phenolic materials.",
      ],
      timeline: [
        { period: "1950–1983", event: "Municipal and industrial wastes were disposed at the floodplain landfill; operating complaints included leachate, odors, inadequate cover, and prohibited industrial disposal." },
        { period: "1983–1985", event: "Landfilling stopped and BFI performed an initial clay-cap closure that DEC found deficient." },
        { period: "1995–1998", event: "A consent order and state remedy required completion of closure and long-term environmental controls." },
        { period: "Long-term management", event: "The closed waste mass remains in place under a cap with drainage, leachate, gas, access, and monitoring provisions." },
      ],
      documentedImpacts: [
        "Some documented industrial wastes met New York hazardous-waste definitions.",
        "Groundwater in the shallow alluvial unit moves south toward Cayuga Creek; the decision record evaluated groundwater, leachate, surface-water, and sediment pathways.",
        "The site is separate from Old Land Reclamation and nearby construction-and-demolition disposal areas even though the properties form one visually continuous landfill landscape.",
      ],
      cleanupAndControls: [
        "Closure work included a full low-permeability cap, stormwater controls, leachate collection, landfill-gas management, fencing, monitoring, and institutional restrictions.",
        "The remedy contains waste rather than removing the entire landfill, so cover integrity and water controls remain part of the site's protection.",
      ],
      presentDay: [
        "Land Reclamation is a managed closed landfill beside Cayuga Creek. Its historic Class 3 designation and containment remedy should not be read as unrestricted cleanup or as a description of the adjoining Old Land Reclamation site.",
      ],
      researchNotes: [
        "Review the most recent periodic monitoring package and confirm current transfer-station operations independently from the closed landfill remedy.",
        "Build a separate Old Land Reclamation record after its sparse public repository is reconciled with archived investigation material.",
      ],
    },
    sources: [
      { title: "Land Reclamation Record of Decision", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/915070/ROD.HW.915070.1998-03-01.land_reclamation.pdf" },
      { title: "Land Reclamation Preliminary Assessment", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/915070/Report.HW.915070.1986-03-13.Preliminary_Assessment.pdf" },
      { title: "Land Reclamation Site Documents", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/915070/" },
    ],
  },
  {
    id: "former-buffalo-forge-property",
    name: "Former Buffalo Forge Property",
    municipality: "Buffalo",
    county: "Erie",
    category: "cleanup",
    summary:
      "Former Broadway foundry, blacksmith, and machine-manufacturing complex remediated for The Forge redevelopment. Cleanup removed source areas and black foundry sand while retaining other contamination beneath covers and long-term land-use controls.",
    evidenceStatus: "well-documented",
    coordinates: [-78.8537, 42.8868],
    story: {
      lastReviewed: "September 14, 2026",
      background: [
        "Buffalo Forge's former plant occupied seven adjacent parcels totaling 12.48 acres around 490 Broadway. Manufacturing continued until the early 1990s and included blacksmithing, foundry work, and machine-shop operations; the buildings were demolished in 2006–2007.",
        "Investigations found black foundry sand mixed with fill and contamination associated with historic manufacturing and underground storage systems. The Brownfield Cleanup Program tied remediation to redevelopment while preserving different cleanup standards for residential and commercial portions.",
      ],
      timeline: [
        { period: "Late nineteenth century–early 1990s", event: "Buffalo Forge operated a major manufacturing complex centered on foundry, blacksmith, and machine work." },
        { period: "2006–2007", event: "Plant buildings were demolished and identified underground tanks were removed with limited contaminated soil." },
        { period: "2018", event: "DEC selected a restricted-use remedy integrated with the proposed mixed-use redevelopment." },
        { period: "Redevelopment era", event: "Excavation, imported clean material, buildings, pavement, soil covers, an environmental easement, and site management supported The Forge redevelopment." },
      ],
      documentedImpacts: [
        "DEC identified metals in soil and black foundry sand as principal concerns; groundwater exceedances were also evaluated.",
        "The remedy called for removal of about 23,184 cubic yards of contaminated soil and source structures, including encountered tanks and piping.",
        "Public water serves the area; the groundwater restriction concerns use of site groundwater and does not indicate contamination of the municipal supply.",
      ],
      cleanupAndControls: [
        "Source-area excavation and off-site disposal addressed grossly contaminated soil, black sand, and soil exceeding site-specific thresholds.",
        "Buildings, pavement, and soil cover isolate remaining contamination. An environmental easement restricts land and groundwater use.",
        "A Site Management Plan governs inspections, future excavation, cover maintenance, and periodic certification.",
      ],
      presentDay: [
        "The property has been redeveloped for housing and associated uses under a restricted-use remedy. Redevelopment is compatible with the controls; it does not mean every historic industrial residue was removed.",
      ],
      researchNotes: [
        "Add the Certificate of Completion and latest periodic-review filing to the source set when their stable document links are confirmed.",
        "Treat the Buffalo Forge waste allegation at the separate LaSalle quarry as its own evidentiary question rather than extending this site's boundary.",
      ],
    },
    sources: [
      { title: "Former Buffalo Forge Property Decision Document", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/C915280/Decision%20Document.BCP.C915280.2018-08-31.Final%20DD_Buffalo%20Forge.pdf" },
      { title: "Former Buffalo Forge Property Site Documents", publisher: "New York State Department of Environmental Conservation", url: "https://extapps.dec.ny.gov/data/DecDocs/C915280/" },
      { title: "Buffalo Forge Co. Plant No. 1 Superfund Site Profile", publisher: "U.S. Environmental Protection Agency", url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0201398" },
    ],
  },
  {
    id: "hamburg-landfill-former-nike-launch-area",
    name: "Hamburg Landfill / Former Nike Launch Area",
    municipality: "Hamburg",
    county: "Erie",
    category: "cleanup",
    summary:
      "Lakeview Road landscape containing a former municipal landfill and the former Nike BU-51/52 launch area. Their footprints and histories overlap geographically, but federal Nike investigation and landfill monitoring are separate records and do not justify combining contaminant sources.",
    evidenceStatus: "research-in-progress",
    coordinates: [-78.868, 42.743],
    story: {
      lastReviewed: "September 14, 2026",
      background: [
        "The Lakeview Road municipal property preserves two distinct histories: a Town of Hamburg refuse-disposal landscape and the launch portion of the former Nike BU-51/52 antiaircraft missile installation. The Nike installation operated from 1956 to 1961 and also included control and easement areas outside the launch footprint.",
        "Army Corps mapping places the former launch area within the larger modern municipal-property complex. That spatial relationship is historically important, but it does not establish that landfill waste and former defense operations produced the same contamination or share one remedy.",
        "The landfill has its own federal identity: Hamburg LF, EPA ID NYD980506737. USACE's later bibliography identifies a May 1987 NUS preliminary assessment, a 1999 GZA Final Nike Base/Hamburg Landfill Report, and a separate 1999 investigation of neighboring Lakeview properties. Those citations establish a substantial earlier investigation trail, but the underlying reports must be reviewed before their findings can be summarized.",
      ],
      timeline: [
        { period: "1956–1961", event: "The Army operated the BU-51/52 Nike installation, including missile assembly, testing, maintenance, storage, and launch functions." },
        { period: "By 1972", event: "Town law documents municipal dump operations on Lakeview Road." },
        { period: "1987–1988", event: "NUS prepared an EPA preliminary assessment for Hamburg LF; a later EPA transmittal identifies inorganic laboratory data for six water and eight soil samples under CLP Case 9906." },
        { period: "1999", event: "GZA completed a report specifically addressing the Nike Base/Hamburg Landfill, while a separate investigation examined soil and groundwater on bordering Lakeview properties." },
        { period: "2007", event: "Hamburg authorized GZA test pits and water sampling along the landfill's western boundary to identify buried material, estimate relocation costs, and revise closure and wetland-permit designs." },
        { period: "April–October 2008", event: "Modern Construction performed the Hamburg Landfill Closure Maintenance Project. GZA certified completion to the plans and specifications; the final construction cost was $877,259." },
        { period: "2008–2013", event: "Town records describe a DEC-required five-year groundwater and surface-water monitoring program for the former landfill." },
        { period: "2020–2023", event: "The Army Corps completed historical review and remedial investigation and proposed a federal decision for the former launch area." },
      ],
      documentedImpacts: [
        "USACE investigated the former launch area under the Formerly Used Defense Sites program to determine whether chemicals from military use posed unacceptable risk.",
        "The Town separately monitored groundwater and surface water associated with the closed landfill under DEC oversight.",
        "The 2007 Town authorization proves that buried material along the western landfill boundary required additional characterization. It does not, by itself, establish that drums or hazardous waste were found; that question depends on the missing test-pit logs and analytical results.",
        "No atlas statement should transfer a finding, contaminant, or remedy from one program boundary to the other without a document explicitly making that connection.",
      ],
      cleanupAndControls: [
        "The landfill monitoring program and the federal Nike investigation were administered by different authorities and must remain separately attributed.",
        "The 2008 closure-maintenance project was designed and inspected by GZA and constructed by Modern Construction. The Town accepted it as complete after GZA certified conformance with the plans and specifications; additional off-site topsoil was the principal stated reason for the final cost increase.",
        "Town records confirm that closure plans, specifications, construction-quality records, and closeout submittals existed. They do not confirm that a separately labeled as-built drawing set is publicly available.",
        "The Army Corps' proposed plan and final decision record should govern any statement about whether further defense-site action is required.",
      ],
      presentDay: [
        "The property is a layered municipal and military landscape. This entry is marked research in progress until current landfill closure controls and the final federal Nike decision are reconciled parcel by parcel.",
      ],
      researchNotes: [
        "Obtain the May 1987 NUS preliminary assessment and the associated EPA site-inspection file for NYD980506737, including CLP Case 9906.",
        "Obtain and review the 1999 GZA Final Nike Base/Hamburg Landfill Report and Thomas Hellert's 1999 neighboring-property investigation before characterizing buried material or off-site impacts.",
        "Request the June 29, 2007 GZA scope and resulting test-pit logs, sampling data, photographs, boundary revisions, wetland materials, and design changes.",
        "Confirm the exact landfill boundary, closure system, current monitoring obligations, and the 2008 project's final drawings or record plans.",
        "Extract the final USACE risk conclusions and selected decision for the launch area; map the former control area separately.",
      ],
    },
    sources: [
      { title: "Former Nike Site — Hamburg, New York", publisher: "U.S. Army Corps of Engineers", url: "https://www.nae.usace.army.mil/Missions/Projects-Topics/Former-NIKE-Site-Hamburg-New-York/" },
      { title: "Nike BU-51/52 Historical Photographic Analysis", publisher: "U.S. Army Corps of Engineers", url: "https://www.nae.usace.army.mil/Portals/74/docs/Topics/NIKEBU5152/NIKE_BU5152_NY_HPA_Final_April2020.pdf" },
      { title: "Nike BU-51/52 Final Remedial Investigation Report", publisher: "U.S. Army Corps of Engineers", url: "https://www.nae.usace.army.mil/Portals/74/docs/Topics/NIKEBU5152/NIKE-BU-51-52-Final-RI-Report-Aug-2022-Submittal.pdf" },
      { title: "EPA Hamburg Landfill Site Investigation Laboratory Data Transmittal", publisher: "U.S. Environmental Protection Agency", url: "https://semspub.epa.gov/work/02/549728.pdf" },
      { title: "Town Board Minutes — 2007 Western-Boundary Test-Pit Authorization", publisher: "Town of Hamburg", url: "https://www.townofhamburgny.gov/Archive/ViewFile/Item/2868" },
      { title: "Town Board Minutes — 2008 Closure-Maintenance Construction Award", publisher: "Town of Hamburg", url: "https://www.townofhamburgny.gov/Archive/ViewFile/Item/2905" },
      { title: "Town Board Minutes — 2008 Closure-Maintenance Completion", publisher: "Town of Hamburg", url: "https://www.townofhamburgny.gov/Archive/ViewFile/Item/2922" },
      { title: "Town Board Minutes — Former Landfill Monitoring", publisher: "Town of Hamburg", url: "https://www.townofhamburgny.gov/Archive/ViewFile/Item/3073" },
    ],
  },
];
