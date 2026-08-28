import type { AtlasSite } from "@/types/site";

export const littleValleySite: AtlasSite = {
  id: "little-valley-superfund",
  name: "Little Valley Superfund Site — Eight-Mile TCE Plume",
  municipality: "Little Valley–Salamanca corridor",
  county: "Cattaraugus",
  category: "cleanup",
  summary:
    "An approximately eight-mile trichloroethylene groundwater plume follows the valley from Little Valley toward northern Salamanca. EPA installed treatment on 91 private wells, investigated five current or likely historical source areas, mitigated vapor intrusion at five homes, and left a continuing system of monitoring, treatment, and groundwater-use controls.",
  evidenceStatus: "well-documented",
  coordinates: [-78.8048, 42.2516],
  newsEvents: [
    {
      date: "1996–1997",
      headline: "Federal remedy brings treated water to affected private wells",
      summary:
        "EPA selected an alternate-water remedy and installed air-stripper treatment units on 91 private wells; the systems were later converted to paired granular-activated-carbon units.",
      publisher: "U.S. Environmental Protection Agency",
      url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1002FLT.TXT",
      reach: "Regional",
    },
    {
      date: "2005–2014",
      headline: "Source treatment and vapor protections address the plume beyond drinking water",
      summary:
        "EPA selected source control, monitored natural attenuation, and vapor evaluation; later work treated Cattaraugus Cutlery soil, removed the remaining contaminated soil, and installed mitigation systems at five residences.",
      publisher: "U.S. Environmental Protection Agency",
      url: "https://extapps.dec.ny.gov/data/DecDocs/905026/Report.HW.905026.2022-02-08.report.hw.905026.2022-02-08.FiveYearReportEPA.pdf",
      reach: "Regional",
    },
  ],
  story: {
    lastReviewed: "August 28, 2026",
    background: [
      "The Little Valley Superfund site is not a single fenced parcel. It is an approximately eight-mile plume of trichloroethylene, or TCE, in valley-fill groundwater extending southeast from the Village of Little Valley to the northern edge of Salamanca. The study area contains more than 200 residential properties and, outside the Village of Little Valley public-water district, historically depended on private wells.",
      "TCE was found in private wells in 1982. Sampling from 1989 through 1995 established a long groundwater problem rather than an isolated bad well: EPA's 1996 decision recorded 74 sampled wells, with TCE detected in 55 and concentrations at or above the federal five-microgram-per-liter drinking-water standard in 42.",
      "EPA investigated ten potential source areas from 1997 through 2005. Five were classified as current or likely past sources: Bush Industries, Cattaraugus Cutlery, the Great Triangle/Drum Storage Area, Luminite, and the Ninth Street Landfill. That wording matters. The investigation identified Cattaraugus Cutlery as a current localized source and described Great Triangle, Luminite, and Ninth Street as likely historical sources no longer acting as current sources; the five should not be presented as equally proven or equally active.",
      "The map pin marks the plume's Little Valley end near the EPA-listed site location. It is a representative point, not a plume boundary, source-area boundary, affected-well location, or statement about any individual property.",
    ],
    timeline: [
      {
        period: "1982",
        event:
          "Cattaraugus County and New York State investigators identified TCE contamination in private drinking-water wells.",
      },
      {
        period: "1989–1995",
        event:
          "Agency sampling documented TCE in 55 of 74 wells tested; 42 were at or above the federal drinking-water standard of 5 µg/L.",
      },
      {
        period: "1996–1997",
        event:
          "EPA placed Little Valley on the National Priorities List, selected an interim alternate-water remedy, and installed treatment on 91 of approximately 200 private wells in the study area.",
      },
      {
        period: "1997–2005",
        event:
          "A remedial investigation evaluated ten potential source areas and identified five as current or likely past sources of the plume.",
      },
      {
        period: "2002",
        event:
          "EPA replaced aging air strippers with paired granular-activated-carbon treatment units after contaminant concentrations declined enough for carbon alone to provide equivalent protection.",
      },
      {
        period: "2005–2006",
        event:
          "EPA selected source control, monitored natural attenuation, vapor-intrusion evaluation, and institutional controls. When Cattaraugus Cutlery soil requiring treatment proved far greater than the approximately 220 cubic yards first estimated—about 3,000 cubic yards—EPA amended the remedy to in-situ soil-vapor extraction.",
      },
      {
        period: "2006–2012",
        event:
          "A broad soil-vapor investigation sampled residences and other structures over the plume. Subslab depressurization systems were installed at two residences in 2006, one in 2010, and two in 2012.",
      },
      {
        period: "2006–2014",
        event:
          "Soil-vapor extraction reduced the estimated Cattaraugus Cutlery soil volume above the cleanup objective to about 20 cubic yards. A 2014 excavation removed approximately 25 cubic yards, or 37 tons, and confirmation samples met the selected soil objective.",
      },
      {
        period: "October 2017",
        event:
          "After ten years of long-term federal response work, groundwater monitoring, vapor-system maintenance, and institutional-control verification transferred to NYSDEC for operation and maintenance.",
      },
      {
        period: "2019 emerging-contaminant sampling",
        event:
          "Monitoring wells were analyzed for PFAS and 1,4-dioxane. The published table reports low-level PFAS detections in two wells, with some qualified results also appearing in field blanks; 1,4-dioxane was not detected in the submitted samples.",
      },
      {
        period: "2022–2027",
        event:
          "EPA's fifth review found both remedies and the sitewide cleanup protective. EPA lists the next five-year review for fiscal year 2027, with the site schedule estimating January through March 2027.",
      },
    ],
    documentedImpacts: [
      "The approximately eight-mile plume affected the principal drinking-water aquifer used by homes outside the Village of Little Valley water district. It should be mapped and understood as a groundwater system, not reduced to one factory parcel.",
      "EPA installed treatment on 91 private wells in 1997. The number documents the scale of the protective response; it is not a current count of contaminated or occupied homes.",
      "The vapor-intrusion program provided information and access agreements to more than 300 homeowners or tenants. Through 2017, EPA had sampled 139 residences, a manufacturing facility, and a DEC facility; five residences received subslab mitigation systems.",
      "Cattaraugus Cutlery was confirmed as a localized soil source to groundwater. EPA's later characterization increased the estimated affected-soil volume from about 220 to about 3,000 cubic yards, leading to a change from excavation alone to in-situ treatment followed by a smaller final excavation.",
      "The 2019 emerging-contaminant table reports PFOS at an estimated 0.84 ng/L in one Cattaraugus Cutlery well and PFPeA, PFOA, and PFOS at 1.8, 1.6, and 2.3 ng/L in a Bush-area well. Because some PFAS were also reported in field blanks and the Superfund remedy is for TCE, these results are presented as qualified monitoring data—not as a separate PFAS source finding. No 1,4-dioxane was detected in that sampling round.",
    ],
    cleanupAndControls: [
      "Point-of-entry carbon systems protect drinking water at properties that remain in the treatment program. The systems, sampling, maintenance, and changing number of active units must be understood together; a treated well is not evidence that untreated groundwater meets drinking-water standards.",
      "Monitored natural attenuation is the selected sitewide groundwater remedy. Agencies track TCE and breakdown products over time rather than claiming the plume was physically removed.",
      "Five subslab depressurization systems interrupt the vapor pathway at residences where mitigation was required. Continued operation and maintenance are part of the remedy.",
      "Annual notices advise local governments that groundwater beneath unimproved parcels over the plume should not be used without appropriate treatment. New buildings over the plume require vapor mitigation or a property-specific evaluation showing vapor intrusion is not a concern.",
      "EPA reported construction complete and found the remedy protective in 2022. In Superfund usage, those findings mean the installed remedy and controls prevent unacceptable exposure; they do not mean the aquifer is restored everywhere or that institutional controls can end.",
    ],
    presentDay: [
      "The corridor remains residential and commercial. EPA reports human exposure and contaminated-groundwater migration under control, while NYSDEC continues groundwater monitoring, well-treatment work, mitigation-system maintenance, and institutional-control verification.",
      "Little Valley is still on the National Priorities List and has not been deleted. EPA's current schedule places its next five-year review in January–March 2027.",
      "Bush Industries is also an individual Atlas cleanup record for its separate petroleum and industrial-property history. Its inclusion among Little Valley's investigated TCE source areas does not erase the different site numbers, contaminants, remedies, or boundaries.",
    ],
    researchNotes: [
      "Recover and map agency-approved plume contours by monitoring year. A defensible time series would show the plume's changing interpreted extent without turning a representative pin or generalized corridor into a parcel-level claim.",
      "Build separate, evidence-ranked records for Cattaraugus Cutlery, Great Triangle/Drum Storage, Luminite, and Ninth Street Landfill only after their operating histories, coordinates, source conclusions, and remedy boundaries are verified from primary files.",
      "Track the fiscal-year 2027 review for updated treatment-system counts, groundwater trends, vapor-system status, institutional-control performance, and any revised protectiveness findings.",
      "Retain the 2019 PFAS qualifiers and blank information with any future emerging-contaminant update. Do not infer a PFAS source or plume from isolated low-level monitoring results.",
    ],
  },
  sources: [
    {
      title: "Little Valley Superfund Site Profile",
      publisher: "U.S. Environmental Protection Agency",
      url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0204016",
    },
    {
      title: "1996 Record of Decision — Alternate Water Supply",
      publisher: "U.S. Environmental Protection Agency",
      url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1002FLT.TXT",
    },
    {
      title: "2005 Record of Decision — Source Control and Groundwater",
      publisher: "U.S. Environmental Protection Agency / NYSDEC",
      url: "https://extapps.dec.ny.gov/data/DecDocs/905026/ROD.HW.905026.2005-08-19.littlevalley.pdf",
    },
    {
      title: "2022 Fifth Five-Year Review",
      publisher: "U.S. Environmental Protection Agency",
      url: "https://extapps.dec.ny.gov/data/DecDocs/905026/Report.HW.905026.2022-02-08.report.hw.905026.2022-02-08.FiveYearReportEPA.pdf",
    },
    {
      title: "2019 Groundwater Monitoring Report — PFAS and 1,4-Dioxane Table",
      publisher: "New York State Department of Environmental Conservation",
      url: "https://extapps.dec.ny.gov/data/DecDocs/905026/Report.HW.905026.2019-10-18.Littlevalley_GroundwaterMNA_WattsEng.pdf",
    },
    {
      title: "Little Valley Cleanup Schedule",
      publisher: "U.S. Environmental Protection Agency",
      url: "https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.schedule&id=0204016",
    },
    {
      title: "Little Valley Site Document Repository",
      publisher: "New York State Department of Environmental Conservation",
      url: "https://extapps.dec.ny.gov/data/DecDocs/905026/",
    },
  ],
};
