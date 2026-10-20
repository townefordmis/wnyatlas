import type { AtlasSource } from "@/types/site";

export const burningYearsSources = {
  regional: {
    title: "Systems Analysis of Regional Solid Waste Handling (1970), Appendix C, pages C-9 to C-12",
    publisher: "Cornell Aeronautical Laboratory for the U.S. Public Health Service / EPA archive",
    url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101U1O3.TXT",
  },
  brzezinski: {
    title: "Brzezinski Phase II investigation file (1990), earlier site-history appendix, PDF pages 56-60 and 74",
    publisher: "New York State Department of Environmental Conservation document repository",
    url: "https://extapps.dec.ny.gov/data/DecDocs/932006/Report.HW.932006.1990-03-31.PHASE_II_INVESTIGATION_REPORT_VOL_2.pdf",
  },
  island: {
    title: "Preliminary Evaluation of Chemical Migration to Groundwater and the Niagara River (1985), Squaw Island and Tifft Farm, printed pages 145-150",
    publisher: "U.S. Geological Survey / EPA document archive",
    url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000E55V.TXT",
  },
  court: {
    title: "United States v. Hooker Chemicals & Plastics, 850 F. Supp. 993 (1994), incineration discussion at page 1017",
    publisher: "U.S. District Court, Western District of New York / Justia",
    url: "https://law.justia.com/cases/federal/district-courts/FSupp/850/993/2132540/",
  },
  frontier: {
    title: "Frontier Chemical Pendleton Record of Decision (1992), section 2, PDF page 5",
    publisher: "New York State Department of Environmental Conservation",
    url: "https://extapps.dec.ny.gov/data/DecDocs/932043/ROD.HW.932043.1992-03-02.frontier_chemical.pdf",
  },
  siting: {
    title: "Siting of Hazardous Waste Management Facilities and Public Opposition (1979), Frontier case study, printed pages 46-50",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=10003J1L.TXT",
  },
  health: {
    title: "Does Burning Trash Make It Disappear?",
    publisher: "New York State Department of Health",
    url: "https://www.health.ny.gov/environmental/outdoors/air/trash.htm",
  },
} satisfies Record<string, AtlasSource>;

export const burningYearsPlaces = [
  { id: "lackawanna-incinerator", role: "Municipal incineration", text: "The 1927-1980 South Park Avenue operation left ash-related lead and arsenic requiring investigation, removal and continuing controls." },
  { id: "depew-village-landfill", role: "Incinerator and creek-side disposal", text: "A village incinerator and landfill beside Cayuga Creek became a source-area, creek-bank and sediment cleanup." },
  { id: "lasalle-reservoir-quarry-landfill", role: "Mixed fill including ash", text: "The former quarry received municipal refuse, incinerator ash and other fill. Its individual incinerator suppliers remain a separate question." },
  { id: "buffalo-color", role: "Chemical-waste burning", text: "Area D records describe open pits, a later incinerator, and ash and chemical residues buried beneath soil." },
  { id: "frontier-chemical-pendleton", role: "Commercial industrial-waste treatment", text: "Incineration was one process alongside neutralization, oxidation, recovery and distillation." },
  { id: "frontier-chemical-royal-avenue", role: "A separate treatment and disposal history", text: "The 1979 account follows treated liquids to municipal sewers and solid residues to area hazardous-waste landfills." },
  { id: "former-hooker-main-plant", role: "Industrial incineration and landfill alternatives", text: "The court record describes an unsuccessful 1940s incineration effort and subsequent thionyl-chloride-waste disposal." },
  { id: "tifft-nature-preserve", role: "Fill transfer and later reuse", text: "USGS documented fill moved from Squaw Island in the mid-1970s; it did not identify every transferred load as incinerator ash." },
  { id: "griffon-park-landfill", role: "A separate municipal-landfill record", text: "Compare its own disposal and seep-investigation history without assuming a supplier or ash route shared with the other places." },
] as const;
