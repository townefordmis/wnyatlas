export type ChemicalSource = {
  title: string;
  publisher: string;
  url: string;
};

export type ChemicalProfile = {
  id: string;
  name: string;
  aliases: string[];
  family: string;
  overview: string;
  regionalHistory?: string[];
  persistence: string;
  exposureRoutes: string[];
  humanHealth: string[];
  ecologicalHealth: string[];
  evidenceNote: string;
  matchTerms: string[];
  sources: ChemicalSource[];
};

const atsdrProfiles: ChemicalSource = {
  title: "A–Z Index of Toxicological Profiles",
  publisher: "Agency for Toxic Substances and Disease Registry",
  url: "https://www.atsdr.cdc.gov/toxicological-profiles/glossary/index.html",
};

const epaIris: ChemicalSource = {
  title: "Integrated Risk Information System Assessments",
  publisher: "U.S. Environmental Protection Agency",
  url: "https://iris.epa.gov/AtoZ/?list_type=alpha",
};

const epaEcotox: ChemicalSource = {
  title: "Ecotoxicology Knowledgebase",
  publisher: "U.S. Environmental Protection Agency",
  url: "https://www.epa.gov/comptox-tools/ecotoxicology-ecotox-knowledgebase-resource-hub",
};

const standardSources = [atsdrProfiles, epaIris, epaEcotox];

export const chemicalProfiles: ChemicalProfile[] = [
  {
    id: "pfas",
    name: "PFAS",
    aliases: ["PFOA", "C8", "APFO", "PFOS", "PFNA", "PFDA", "PFHxS", "PFBS", "AFFF"],
    family: "Per- and polyfluoroalkyl substances",
    overview:
      "PFAS are a large family of manufactured chemicals used in firefighting foams, fluoropolymer production, coatings, plating, textiles, paper, and many other applications.",
    regionalHistory: [
      "Western New York records connect PFAS investigation to firefighting-foam use at aviation facilities, industrial handling and manufacturing, landfills, and wastewater pathways.",
      "The Atlas separates confirmed PFAS use or detection from facilities still being researched; an industrial category alone is not evidence that PFAS were released there.",
      "PFOA is often called C8. APFO is the ammonium salt of PFOA, but an environmental PFOA result cannot by itself identify APFO as the original material used or released.",
    ],
    persistence:
      "Many PFAS break down very slowly. Some move readily with water, while others accumulate in sediment, wildlife, fish, or the human body.",
    exposureRoutes: [
      "Drinking contaminated water or consuming food and fish containing PFAS",
      "Occupational contact with PFAS-containing products or processes",
      "Inhalation or ingestion of contaminated dust, soil, or aerosols in some settings",
    ],
    humanHealth: [
      "Studies associate increased exposure to certain PFAS with higher cholesterol and changes in liver enzymes.",
      "Some PFAS are associated with reduced antibody response to vaccines and pregnancy-related effects.",
      "PFOA exposure has been associated with kidney and testicular cancer.",
    ],
    ecologicalHealth: [
      "Some PFAS bioaccumulate in fish, birds, mammals, and other wildlife.",
      "Laboratory and field studies report developmental, reproductive, liver, and immune effects in some species.",
    ],
    evidenceNote:
      "Thousands of PFAS exist, and toxicity information is much stronger for a small number of well-studied compounds than for the family as a whole.",
    matchTerms: [
      "PFAS",
      "PFOA",
      "PFOS",
      "PFNA",
      "PFHxS",
      "PFDA",
      "PFBS",
      "PFBA",
      "PFPeA",
      "PFHxA",
      "PFHpA",
      "PFHpS",
      "APFO",
      "ammonium perfluorooctanoate",
      "C8",
      "perfluoroalkyl",
      "polyfluoroalkyl",
      "aqueous film-forming foam",
      "AFFF",
    ],
    sources: [
      {
        title: "How PFAS Impacts Your Health",
        publisher: "Agency for Toxic Substances and Disease Registry",
        url: "https://www.atsdr.cdc.gov/pfas/about/health-effects.html",
      },
      {
        title: "Current Understanding of PFAS Health and Environmental Risks",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/pfas/our-current-understanding-human-health-and-environmental-risks-pfas",
      },
      {
        title: "PFOA Health Effects Support Document (includes APFO terminology)",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/sites/default/files/2016-05/documents/pfoa_hesd_final_508.pdf",
      },
      {
        title: "PFAS Analytical Methods and Their Limits",
        publisher: "U.S. Environmental Protection Agency",
        url: "https://www.epa.gov/water-research/pfas-analytical-methods-development-and-sampling-research",
      },
      {
        title: "PFAS and Public Drinking Water",
        publisher: "New York State Department of Health",
        url: "https://www.health.ny.gov/environmental/water/drinking/emerging_pfas_publicwater",
      },
      epaEcotox,
    ],
  },
  {
    id: "benzene",
    name: "Benzene",
    aliases: [],
    family: "Volatile organic compound",
    overview:
      "Benzene is a volatile component of gasoline and petroleum and was also used in coke production, chemical manufacturing, solvents, and industrial processes.",
    regionalHistory: [
      "Benzene appears in regional records involving coke production, manufactured-gas plants, petroleum terminals, refineries, and fuel releases.",
      "The Tonawanda community air study is a major local record because DEC used monitoring and dispersion modeling to evaluate hazardous air pollutants associated with the industrial corridor.",
    ],
    persistence:
      "Benzene evaporates readily but can migrate through soil and persist in groundwater where oxygen and microbial breakdown are limited.",
    exposureRoutes: [
      "Breathing contaminated outdoor, indoor, or workplace air",
      "Drinking contaminated water",
      "Skin contact can contribute in occupational or concentrated-release settings",
    ],
    humanHealth: [
      "Long-term exposure can damage bone marrow and reduce blood-cell production.",
      "Benzene is associated with leukemia and other blood-forming-system cancers.",
      "Shorter, higher exposures can affect the central nervous system.",
    ],
    ecologicalHealth: [
      "Benzene can harm aquatic organisms at sufficient concentrations.",
      "Its volatility and biodegradation reduce long-term accumulation compared with persistent compounds such as PCBs.",
    ],
    evidenceNote:
      "Health risk depends strongly on air or water concentration, exposure duration, and route.",
    matchTerms: ["benzene"],
    sources: standardSources,
  },
  {
    id: "trichloroethylene",
    name: "Trichloroethylene",
    aliases: ["TCE"],
    family: "Chlorinated solvent",
    overview:
      "TCE was widely used to degrease metal parts and in other industrial cleaning and manufacturing operations.",
    regionalHistory: [
      "TCE is documented at regional metalworking, manufacturing, and disposal sites where historical degreasing produced soil, groundwater, and vapor-intrusion investigations.",
      "Atlas records keep the source area, mapped groundwater plume, and building-specific vapor findings separate because they are not interchangeable evidence.",
    ],
    persistence:
      "TCE can sink through groundwater as a dense liquid, remain in aquifers, and produce vapors that migrate into buildings.",
    exposureRoutes: [
      "Breathing workplace air or vapors entering buildings from contaminated soil or groundwater",
      "Drinking contaminated water",
      "Skin contact with concentrated products or contaminated water",
    ],
    humanHealth: [
      "Long-term exposure can affect the immune system, liver, kidneys, and nervous system.",
      "Evidence supports increased kidney-cancer risk, with additional cancer concerns evaluated by health agencies.",
      "Developmental effects are an important consideration in exposure assessment.",
    ],
    ecologicalHealth: [
      "TCE can affect aquatic organisms at sufficient water concentrations.",
      "Groundwater plumes may carry TCE and its breakdown products to streams or wetlands.",
    ],
    evidenceNote:
      "TCE may break down into other hazardous chlorinated compounds, including vinyl chloride.",
    matchTerms: ["trichloroethylene", "TCE"],
    sources: standardSources,
  },
  {
    id: "tetrachloroethylene",
    name: "Tetrachloroethylene",
    aliases: ["PCE", "PERC", "Perchloroethylene"],
    family: "Chlorinated solvent",
    overview:
      "PCE has been used extensively in dry cleaning, textile processing, metal degreasing, and industrial cleaning.",
    regionalHistory: [
      "PCE investigations in Western New York commonly trace to former dry-cleaning and industrial-solvent use, including urban properties later converted to different uses.",
      "Linked Atlas records distinguish detections beneath a source property from confirmed impacts in another building.",
    ],
    persistence:
      "PCE can persist in soil and groundwater and can migrate as vapor into overlying buildings.",
    exposureRoutes: [
      "Breathing workplace air, indoor air, or soil vapor",
      "Drinking contaminated water",
      "Contact with solvent or contaminated material",
    ],
    humanHealth: [
      "Long-term exposure may affect the nervous system, liver, kidneys, immune system, and reproduction.",
      "Health agencies evaluate PCE as a cancer hazard based on human and animal evidence.",
    ],
    ecologicalHealth: [
      "PCE can harm aquatic organisms at sufficient concentrations.",
      "Its movement through groundwater can create long-lived subsurface source areas.",
    ],
    evidenceNote:
      "Indoor-air risk requires building-specific vapor data; groundwater detection alone does not establish indoor exposure.",
    matchTerms: ["tetrachloroethylene", "perchloroethylene", "PCE", "PERC"],
    sources: standardSources,
  },
  {
    id: "vinyl-chloride",
    name: "Vinyl chloride",
    aliases: [],
    family: "Volatile chlorinated compound",
    overview:
      "Vinyl chloride is used to manufacture PVC and can also form underground when TCE, PCE, and related solvents break down.",
    persistence:
      "It is highly volatile but can remain in contaminated groundwater and migrate as soil vapor.",
    exposureRoutes: [
      "Breathing contaminated workplace air or vapor intrusion",
      "Drinking contaminated water",
    ],
    humanHealth: [
      "Long-term exposure is associated with liver cancer, including hepatic angiosarcoma.",
      "It can also affect the liver, nervous system, circulation, and other organs.",
    ],
    ecologicalHealth: [
      "Vinyl chloride can harm aquatic organisms at sufficient concentrations.",
      "It usually does not strongly bioaccumulate because it is volatile and metabolized.",
    ],
    evidenceNote:
      "A vinyl-chloride detection may represent either direct historical use or breakdown of another chlorinated solvent.",
    matchTerms: ["vinyl chloride"],
    sources: standardSources,
  },
  {
    id: "pcbs",
    name: "PCBs",
    aliases: ["Polychlorinated biphenyls"],
    family: "Persistent chlorinated compounds",
    overview:
      "PCBs were used in electrical equipment, hydraulic systems, heat-transfer fluids, building materials, and industrial processes before most U.S. uses were banned.",
    regionalHistory: [
      "Western New York cleanup records document PCBs in former industrial properties, electrical-equipment areas, fill, and river or canal sediment.",
      "Buffalo River and Niagara River corridor work shows why upland source control and sediment cleanup are related but separately documented parts of the regional history.",
    ],
    persistence:
      "PCBs resist breakdown, bind strongly to soil and sediment, and bioaccumulate through aquatic and terrestrial food webs.",
    exposureRoutes: [
      "Eating contaminated fish, wildlife, meat, or dairy products",
      "Breathing or ingesting contaminated dust and soil",
      "Occupational contact with PCB-containing equipment or materials",
    ],
    humanHealth: [
      "Long-term exposure can affect the immune, reproductive, nervous, endocrine, and developmental systems.",
      "PCBs are associated with cancer risk.",
    ],
    ecologicalHealth: [
      "PCBs can impair reproduction, development, growth, immunity, and survival in fish, birds, and mammals.",
      "Top predators can receive the highest concentrations through food-web biomagnification.",
    ],
    evidenceNote:
      "PCB mixtures contain many congeners with different environmental behavior and toxicity.",
    matchTerms: ["PCB", "PCBs", "polychlorinated biphenyl"],
    sources: standardSources,
  },
  {
    id: "pahs",
    name: "PAHs",
    aliases: ["Polycyclic aromatic hydrocarbons"],
    family: "Combustion and coal-tar compounds",
    overview:
      "PAHs form during incomplete combustion and occur in coal tar, coke-oven waste, creosote, petroleum, soot, and contaminated sediment.",
    persistence:
      "Heavier PAHs bind to soil and sediment and may persist for decades, while lighter PAHs evaporate or degrade more readily.",
    exposureRoutes: [
      "Breathing smoke, soot, or contaminated dust",
      "Eating contaminated food or ingesting soil",
      "Skin contact with coal tar, creosote, soot, or contaminated sediment",
    ],
    humanHealth: [
      "Some PAHs can damage genetic material and increase cancer risk.",
      "Long-term exposure may also affect reproduction, development, immunity, skin, and lungs depending on the mixture and route.",
    ],
    ecologicalHealth: [
      "PAHs in sediment can affect fish and bottom-dwelling organisms.",
      "Some PAHs become more toxic to aquatic life when exposed to sunlight.",
    ],
    evidenceNote:
      "PAH results should identify the individual compounds or mixture because toxicity varies substantially.",
    matchTerms: ["PAH", "PAHs", "polycyclic aromatic hydrocarbon", "coal tar"],
    sources: standardSources,
  },
  {
    id: "dioxins",
    name: "Dioxins",
    aliases: ["Chlorinated dioxins", "CDDs"],
    family: "Persistent chlorinated byproducts",
    overview:
      "Dioxins can form as unwanted byproducts of combustion and certain chlorine-based industrial processes.",
    persistence:
      "They bind to soil and sediment, persist for long periods, and accumulate in animal fat and food webs.",
    exposureRoutes: [
      "Eating contaminated animal foods or fish is an important general-population pathway",
      "Occupational or community contact with contaminated dust, soil, ash, or sediment",
    ],
    humanHealth: [
      "Long-term exposure can affect reproduction, development, immunity, hormones, and the liver.",
      "The most toxic dioxin is recognized as a human carcinogen.",
    ],
    ecologicalHealth: [
      "Dioxins can cause reproductive, developmental, immune, and population-level effects in wildlife.",
      "Fish-eating birds and mammals can receive elevated doses through biomagnification.",
    ],
    evidenceNote:
      "Dioxin toxicity is commonly expressed using toxic-equivalency methods because congeners differ greatly in potency.",
    matchTerms: ["dioxin", "dioxins", "CDD", "CDDs"],
    sources: standardSources,
  },
  {
    id: "lead",
    name: "Lead",
    aliases: [],
    family: "Toxic metal",
    overview:
      "Lead has been used in paint, batteries, metalworking, fuels, plumbing, pigments, ammunition, and many industrial products.",
    regionalHistory: [
      "Regional lead histories include battery manufacturing, secondary smelting, foundry work, paint, demolition debris, and contaminated urban fill.",
      "The East Ferry former smelter and Highland Avenue battery-property records illustrate different pathways and remedies; neither is generalized to surrounding neighborhoods without property-specific evidence.",
    ],
    persistence:
      "Lead does not break down. It can remain in soil, dust, sediment, buildings, and waste unless removed or contained.",
    exposureRoutes: [
      "Ingesting contaminated dust, soil, paint, food, or water",
      "Breathing lead-containing dust or fumes",
      "Occupational or hobby contact",
    ],
    humanHealth: [
      "Lead damages the nervous system; children and developing fetuses are especially vulnerable.",
      "Long-term exposure can affect learning, behavior, blood, kidneys, cardiovascular function, fertility, and pregnancy.",
    ],
    ecologicalHealth: [
      "Lead can poison birds, mammals, fish, and other organisms.",
      "Wildlife exposure can affect the nervous system, reproduction, growth, and survival.",
    ],
    evidenceNote:
      "There is no known safe blood-lead level in children; environmental detection still requires pathway-specific exposure evaluation.",
    matchTerms: [
      "lead contamination",
      "lead-contaminated",
      "lead in soil",
      "lead and PAH",
      "lead and arsenic",
      "lead compounds",
    ],
    sources: standardSources,
  },
  {
    id: "arsenic",
    name: "Arsenic",
    aliases: [],
    family: "Metalloid",
    overview:
      "Arsenic occurs naturally and has also been used in pesticides, wood treatment, metal production, pigments, and industrial processes.",
    regionalHistory: [
      "The FMC Middleport record is the region's clearest large-scale arsenic-pesticide history, connecting former manufacture and waste practices to facility, neighborhood, and school-property soil investigations.",
      "DEC divided that work into separate operable units and cleanup areas; Atlas descriptions preserve those boundaries rather than treating the village as one condition.",
    ],
    persistence:
      "Arsenic does not break down and can change chemical form as soil, sediment, and groundwater conditions change.",
    exposureRoutes: [
      "Drinking contaminated water",
      "Ingesting contaminated food, soil, or dust",
      "Breathing workplace dust or fumes",
    ],
    humanHealth: [
      "Long-term inorganic-arsenic exposure can affect skin, circulation, nerves, and other organs.",
      "It increases the risk of skin, bladder, and lung cancers.",
    ],
    ecologicalHealth: [
      "Arsenic can reduce survival, growth, and reproduction in aquatic and terrestrial organisms.",
      "Toxicity depends strongly on chemical form and environmental conditions.",
    ],
    evidenceNote:
      "Site interpretation should distinguish naturally occurring background from industrially elevated concentrations.",
    matchTerms: ["arsenic"],
    sources: standardSources,
  },
  {
    id: "mercury",
    name: "Mercury",
    aliases: ["Methylmercury"],
    family: "Toxic metal",
    overview:
      "Mercury has been used in industrial equipment and chemical production and can also enter the environment through combustion and atmospheric deposition.",
    regionalHistory: [
      "Mercury appears in Western New York chemical-manufacturing, chlor-alkali, electrical-equipment, and sediment records.",
      "The Niagara industrial corridor includes documented mercury-waste and remediation histories, but each facility and disposal unit has its own dates, media, and controls.",
    ],
    persistence:
      "Mercury does not break down. Microorganisms can convert it to methylmercury, which strongly bioaccumulates in aquatic food webs.",
    exposureRoutes: [
      "Eating fish or wildlife containing methylmercury",
      "Breathing elemental-mercury vapor in occupational or spill settings",
      "Contact with contaminated material",
    ],
    humanHealth: [
      "Mercury can damage the nervous system and kidneys.",
      "Developing fetuses and young children are particularly sensitive to methylmercury's effects on brain development.",
    ],
    ecologicalHealth: [
      "Methylmercury biomagnifies in fish-eating birds and mammals.",
      "Exposure can impair behavior, reproduction, development, and survival.",
    ],
    evidenceNote:
      "Different mercury forms have different exposure pathways and toxic effects.",
    matchTerms: ["mercury", "methylmercury"],
    sources: standardSources,
  },
  {
    id: "cadmium",
    name: "Cadmium",
    aliases: [],
    family: "Toxic metal",
    overview:
      "Cadmium has been used in batteries, pigments, plating, alloys, plastics, and metal production.",
    persistence:
      "Cadmium does not break down and can remain in soil and sediment or be taken up by plants and organisms.",
    exposureRoutes: [
      "Breathing workplace dust or fumes",
      "Eating contaminated food or ingesting soil and dust",
      "Tobacco smoke is a major non-site exposure source",
    ],
    humanHealth: [
      "Long-term exposure can damage kidneys and weaken bones.",
      "Inhaled cadmium can damage lungs and is associated with cancer.",
    ],
    ecologicalHealth: [
      "Cadmium can harm growth, reproduction, kidneys, and gills in wildlife and aquatic organisms.",
      "It can accumulate in plants, invertebrates, and animals.",
    ],
    evidenceNote:
      "Bioavailability depends on water hardness, pH, soil chemistry, and chemical form.",
    matchTerms: ["cadmium"],
    sources: standardSources,
  },
  {
    id: "chromium",
    name: "Chromium",
    aliases: ["Hexavalent chromium", "Chromium VI"],
    family: "Metal with multiple chemical forms",
    overview:
      "Chromium compounds are used in plating, pigments, leather tanning, corrosion control, alloys, and refractory materials.",
    persistence:
      "Chromium does not break down, but it can change between forms. Hexavalent chromium is generally more mobile and toxic than trivalent chromium.",
    exposureRoutes: [
      "Breathing dust, mist, or fumes in occupational and industrial settings",
      "Drinking contaminated water or ingesting soil",
      "Skin contact with chromium-containing material",
    ],
    humanHealth: [
      "Hexavalent chromium can irritate and damage the respiratory system and skin.",
      "Long-term inhalation exposure increases lung-cancer risk.",
      "Effects differ substantially between chromium forms.",
    ],
    ecologicalHealth: [
      "Chromium can affect survival, growth, and reproduction in aquatic organisms and plants.",
      "Ecological toxicity depends strongly on oxidation state and water or soil chemistry.",
    ],
    evidenceNote:
      "A record stating only 'chromium' should not be interpreted as hexavalent chromium without speciation data.",
    matchTerms: ["chromium", "hexavalent chromium", "chromium VI"],
    sources: standardSources,
  },
  {
    id: "cyanide",
    name: "Cyanide",
    aliases: [],
    family: "Reactive chemical group",
    overview:
      "Cyanide compounds have been used in metal finishing, electroplating, coke production, mining, and chemical manufacturing.",
    persistence:
      "Some cyanide forms degrade or volatilize, while metal-cyanide complexes can persist longer in soil, sediment, or water.",
    exposureRoutes: [
      "Breathing gas, mist, or contaminated workplace air",
      "Drinking or ingesting contaminated water, food, soil, or material",
      "Skin contact with concentrated cyanide compounds",
    ],
    humanHealth: [
      "Cyanide interferes with cells' ability to use oxygen and can be rapidly life-threatening at high doses.",
      "Repeated lower exposure may affect the nervous system and thyroid, depending on compound and route.",
    ],
    ecologicalHealth: [
      "Free cyanide is highly toxic to fish and many aquatic organisms.",
      "Wildlife effects depend on concentration, chemical form, and how quickly the compound degrades.",
    ],
    evidenceNote:
      "Total cyanide results do not by themselves identify the amount present as more toxic free cyanide.",
    matchTerms: ["cyanide"],
    sources: standardSources,
  },
  {
    id: "carbon-disulfide",
    name: "Carbon disulfide",
    aliases: ["CS2"],
    family: "Volatile sulfur compound",
    overview:
      "Carbon disulfide has been used to manufacture rayon, cellophane, rubber chemicals, and sponge or cellulose products.",
    persistence:
      "It evaporates readily but can remain in subsurface source areas or pore water when trapped or continually released.",
    exposureRoutes: [
      "Breathing workplace or contaminated air",
      "Contact with concentrated liquid",
      "Drinking-water exposure is less common but possible near affected groundwater",
    ],
    humanHealth: [
      "Long-term occupational exposure can affect the nervous and cardiovascular systems.",
      "It may also affect vision, mood, coordination, and reproduction at sufficient exposures.",
    ],
    ecologicalHealth: [
      "Carbon disulfide can harm aquatic organisms at sufficient concentrations.",
      "Volatility often limits persistence in surface environments, but enclosed or subsurface settings differ.",
    ],
    evidenceNote:
      "Volatility means air and worker-exposure records may be as important as soil or groundwater data.",
    matchTerms: ["carbon disulfide", "CS2"],
    sources: standardSources,
  },
  {
    id: "1-4-dioxane",
    name: "1,4-Dioxane",
    aliases: [],
    family: "Emerging solvent contaminant",
    overview:
      "1,4-Dioxane has been used as a solvent stabilizer and in manufacturing and may occur with chlorinated-solvent contamination.",
    persistence:
      "It mixes readily with water, moves rapidly through groundwater, and is difficult to remove using conventional carbon treatment.",
    exposureRoutes: [
      "Drinking contaminated water",
      "Breathing contaminated workplace air",
      "Skin contact can contribute in concentrated occupational settings",
    ],
    humanHealth: [
      "Long-term exposure can affect the liver and kidneys.",
      "Health agencies evaluate it as a potential or likely cancer hazard based largely on animal evidence.",
    ],
    ecologicalHealth: [
      "It generally has lower acute aquatic toxicity than many solvents but can persist in contaminated groundwater.",
      "Ecological significance depends on concentration and discharge to surface water.",
    ],
    evidenceNote:
      "Its high water solubility makes plume boundaries and drinking-water pathways particularly important.",
    matchTerms: ["1,4-dioxane", "1,4 dioxane"],
    sources: standardSources,
  },
  {
    id: "ddt",
    name: "DDT",
    aliases: ["DDD", "DDE"],
    family: "Organochlorine pesticide",
    overview:
      "DDT was widely used as an insecticide. DDE and DDD are persistent breakdown products commonly included in environmental investigations.",
    regionalHistory: [
      "Western New York's DDT history is tied to pesticide manufacture, formulation, agricultural handling, and disposal rather than one industry or county.",
      "Atlas records include properties where agency documents name DDT or related organochlorine pesticides; historic agricultural use alone is not mapped as a cleanup site.",
    ],
    persistence:
      "DDT and its breakdown products bind to soil and sediment, persist for decades, and biomagnify through food webs.",
    exposureRoutes: [
      "Eating contaminated food, fish, or wildlife",
      "Ingesting contaminated soil or dust",
      "Occupational contact during historical manufacture or application",
    ],
    humanHealth: [
      "Long-term exposure may affect the liver, nervous system, reproduction, development, and hormones.",
      "Health agencies evaluate DDT for potential cancer risk.",
    ],
    ecologicalHealth: [
      "DDE famously caused eggshell thinning and reproductive failure in birds of prey.",
      "DDT-family compounds can affect reproduction, development, endocrine function, and survival in aquatic and terrestrial wildlife.",
    ],
    evidenceNote:
      "Results should distinguish DDT from DDE and DDD because their proportions help describe weathering and environmental history.",
    matchTerms: ["DDT", "DDE", "DDD", "organochlorine pesticide"],
    sources: standardSources,
  },
  {
    id: "asbestos",
    name: "Asbestos",
    aliases: [],
    family: "Fibrous mineral hazard",
    overview:
      "Asbestos was used in insulation, fireproofing, cement, roofing, flooring, brakes, gaskets, and many industrial buildings and products.",
    persistence:
      "Asbestos fibers do not biodegrade. Risk is greatest when material is disturbed and respirable fibers become airborne.",
    exposureRoutes: [
      "Breathing airborne fibers during work, demolition, deterioration, or improper handling",
      "Household contact with contaminated work clothing historically created secondary exposure",
    ],
    humanHealth: [
      "Long-term inhalation can cause asbestosis, lung cancer, and mesothelioma.",
      "Disease may appear decades after exposure.",
    ],
    ecologicalHealth: [
      "Ecological effects are less extensively characterized than human inhalation hazards.",
      "Airborne fibers and contaminated material can affect animals, but species-specific exposure evidence is limited.",
    ],
    evidenceNote:
      "The presence of intact asbestos-containing material does not equal airborne exposure; condition and disturbance are central.",
    matchTerms: ["asbestos"],
    sources: standardSources,
  },
  {
    id: "uranium",
    name: "Uranium",
    aliases: ["Depleted uranium"],
    family: "Radioactive metal",
    overview:
      "Uranium occurs naturally and has been mined, refined, processed, and used in nuclear fuel and military or industrial applications.",
    persistence:
      "Uranium does not disappear; radioactive isotopes decay over long periods while the metal can move through soil and groundwater depending on chemistry.",
    exposureRoutes: [
      "Inhaling contaminated dust",
      "Ingesting contaminated water, food, or soil",
      "External radiation is generally a secondary concern for many natural and depleted-uranium settings",
    ],
    humanHealth: [
      "The kidney is a principal target of uranium's chemical toxicity.",
      "Radiological risk depends on isotope, activity, route, dose, and how long material remains in the body.",
    ],
    ecologicalHealth: [
      "Uranium can affect growth, reproduction, kidneys, and survival in aquatic and terrestrial organisms.",
      "Chemical toxicity and radiation both require consideration, with importance varying by species and exposure.",
    ],
    evidenceNote:
      "Mass concentration and radiological activity are different measurements and should never be treated as interchangeable.",
    matchTerms: ["uranium", "depleted uranium"],
    sources: standardSources,
  },
  {
    id: "radium",
    name: "Radium",
    aliases: ["Ra-226", "Ra-228"],
    family: "Radioactive alkaline-earth metal",
    overview:
      "Radium occurs naturally in uranium and thorium decay chains and has historical industrial, medical, and luminous-paint uses.",
    persistence:
      "Radium isotopes can remain hazardous for long periods; radium-226 has a half-life of about 1,600 years.",
    exposureRoutes: [
      "Ingesting contaminated water, food, or soil",
      "Inhaling contaminated dust",
      "External gamma radiation may contribute depending on isotope and setting",
    ],
    humanHealth: [
      "The body can handle radium similarly to calcium, allowing it to deposit in bone.",
      "Long-term internal exposure increases the risk of bone cancer and other radiation effects.",
    ],
    ecologicalHealth: [
      "Radium can expose plants and animals through contaminated water, sediment, soil, and food webs.",
      "Effects depend on isotope, activity, uptake, dose rate, and organism lifespan.",
    ],
    evidenceNote:
      "Radiological interpretation requires isotope-specific activity, background comparison, and pathway evaluation.",
    matchTerms: ["radium", "Ra-226", "Ra-228"],
    sources: standardSources,
  },
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function findChemical(id: string) {
  return chemicalProfiles.find((chemical) => chemical.id === id);
}

export function findChemicalsInText(text: string) {
  return chemicalProfiles.filter((chemical) =>
    chemical.matchTerms.some((term) => {
      const escaped = escapeRegExp(term);
      return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(text);
    }),
  );
}
