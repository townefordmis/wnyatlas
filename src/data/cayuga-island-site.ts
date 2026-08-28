import type { AtlasSite } from "@/types/site";

export const cayugaIslandSite: AtlasSite = {
  id: "cayuga-island-industrial-fill",
  name: "Cayuga Island Industrial Fill Investigation",
  municipality: "Niagara Falls",
  county: "Niagara",
  category: "cleanup",
  summary:
    "Residential portions of Cayuga Island were built on documented man-made extensions. A separate 1991 case traced contaminated residential fill to Occidental Chemical, and a renewed 2025–26 state investigation is evaluating mercury, BHC pesticides, soil vapor, indoor air, sump water, and possible exposure along West Rivershore Drive.",
  evidenceStatus: "well-documented",
  coordinates: [-78.9709, 43.0729],
  newsEvents: [
    {
      date: "October 2025–June 2026",
      headline: "Water-main borings trigger a renewed residential investigation",
      summary:
        "Utility contractors reported foul odors from West Rivershore Drive borings. DEC sampling subsequently identified mercury, lead, BHC pesticides, and other organic chemicals, leading DEC and Health Department staff to seek access for residential soil, sump-water, sub-slab-vapor, and indoor-air testing.",
      publisher: "CNHI / Niagara Gazette",
      url: "https://www.cnhi.com/rss_feed/dec-chemical-sampling-underway-on-west-end-of-cayuga-island/",
      reach: "Regional",
    },
  ],
  story: {
    lastReviewed: "August 28, 2026",
    background: [
      "Cayuga Island is a residential island between the Little Niagara River and the Niagara River. NYSDEC's 1991 fact sheet defines Site 9-32-008 as two man-made extensions: the western tip and portions of the southern shore. The western tip was extended about 250 yards before 1930 and widened again between 1958 and 1962; comparison of 1927 and 1980 maps showed sections of the south shoreline extending outward by as much as 100 feet.",
      "DEC said chemical and other companies were suspected of supplying fill. Current reporting based on the state database names Carborundum, Union Carbide, Hooker Chemical, Olin, and Pittsburgh Metallurgical in connection with the 1958–62 expansion. That company list is a documented investigative lead, not proof that every company supplied every material or that every part of the island has the same contamination.",
      "The island-wide registry site must be kept separate from 9353 Hennepin Avenue. At that property, the homeowner used fill obtained from Occidental Chemical's Niagara Falls plant while building the house in the 1950s. After chemically odorous black soil was encountered during later yard work, Occidental installed four borings in January 1991. DEC reported subsurface material typically associated with the Occidental plant, beginning about 1.6 feet below grade and overlying native soil around three feet deep.",
      "Cayuga Island also sits beside Griffon Park and the Hooker/Olin 102nd Street landfill complex. Their locations matter for understanding the altered Little Niagara River landscape, but proximity does not prove that those sites contaminated Cayuga Island. Each property, sample, pathway, and remedy must remain separate in the atlas.",
    ],
    timeline: [
      {
        period: "Before 1930",
        event:
          "The western tip of Cayuga Island was extended approximately 250 yards with fill.",
      },
      {
        period: "1950s",
        event:
          "A homeowner used fill obtained from Occidental Chemical's Niagara Falls plant while constructing the separate 9353 Hennepin Avenue residence.",
      },
      {
        period: "1958–1962",
        event:
          "Additional fill widened the western end. DEC's historical record associated several Niagara Falls industrial companies with material used during this expansion.",
      },
      {
        period: "Early 1980s",
        event:
          "Two USGS test borings at the western tip produced limited soil and water results showing high iron and zinc and traces of organic compounds.",
      },
      {
        period: "1985",
        event:
          "EPA's preliminary migration evaluation classified Cayuga Island's contaminant-migration potential as indeterminate. The same table classified nearby Griffon Park as major; WNY Atlas does not transfer the Griffon Park finding to Cayuga Island.",
      },
      {
        period: "1991–1992",
        event:
          "DEC announced a Preliminary Site Assessment with approximately 19 planned borings—11 at the western tip and eight along the south shore—generally to about eight feet with samples collected at two-foot intervals. The Hennepin Avenue case proceeded as a separate matter.",
      },
      {
        period: "1995",
        event:
          "Recent reporting says the western-end site was moved to Class N, meaning no further action at that time. WNY Atlas has not yet recovered the original classification memorandum and treats the rationale as an open document request.",
      },
      {
        period: "2024",
        event:
          "Before the later utility discovery, DEC's statewide Inactive Landfill Initiative ranked Cayuga Island at 36 and recommended initiating an investigation in 2026.",
      },
      {
        period: "October–December 2025",
        event:
          "Foul odors reported during West Rivershore Drive water-main borings prompted DEC sampling. Results received in December showed several contaminants above residential screening or cleanup values.",
      },
      {
        period: "2026 investigation",
        event:
          "DEC and NYSDOH sought access from 22 property owners for surface-soil, sump-water, sub-slab-vapor, and indoor-air work. Six owners had granted access when the June reporting was published; the investigation and exposure evaluation remained active.",
      },
    ],
    documentedImpacts: [
      "DEC's 1991 record establishes that residential land at the western tip and along portions of the south shore is man-made fill, but it does not support labeling the whole island as filled or contaminated.",
      "The separate Hennepin Avenue investigation directly traced residential fill to Occidental's Niagara Falls plant and reported subsurface material typically associated with that plant.",
      "June 2026 reporting based on DEC data gave West Rivershore Drive subsurface maxima of 28 ppm alpha-BHC, 210 ppm beta-BHC, and 1,120 ppm mercury. The corresponding reported residential soil cleanup objectives were 0.042 ppm, 0.042 ppm, and 0.3 ppm. These are maximum sample concentrations—not neighborhood averages and not direct measures of individual health risk.",
      "The same reported dataset gave mercury an average of 92.8 ppm and median of 6.6 ppm, and beta-BHC an average of 12.3 ppm and median of 0.52 ppm. Most high concentrations were reported below the surface, making depth, digging, foundation pathways, sump water, vapor movement, and actual contact central to exposure assessment.",
      "A cleanup-objective exceedance is a regulatory screening and remedy-planning fact. A concentration being thousands of times an objective does not by itself mean thousands of times the health risk; exposure route, duration, frequency, depth, and concentrations in accessible soil, water, or indoor air determine risk.",
    ],
    cleanupAndControls: [
      "The 1991 fact sheet anticipated removal of contaminated soil at 9353 Hennepin Avenue through a separate Occidental matter. The final order, excavation record, and closure documentation remain priority records to recover.",
      "Residents with known subsurface contamination were historically advised not to disturb affected soil through digging or excavation. Where surface or garden soil raised possible repeated-exposure concerns, DEC reported providing exposure-reduction advice.",
      "The 2026 investigation expands beyond subsurface soil to potential exposure media, including surface soil, sump water, sub-slab vapor, and indoor air. Any health conclusion or remedy must follow validated results from those media rather than the subsurface maxima alone.",
      "One residence reportedly received a sub-slab mitigation system during the current work. Broader cleanup, cover, removal, monitoring, or responsible-party action had not been finalized in the public sources reviewed for this update.",
    ],
    presentDay: [
      "Cayuga Island is an active residential investigation. The mapped orange areas show reconstructed land additions, not contamination, exposure, parcel, or cleanup boundaries.",
      "The 2024 Inactive Landfill Initiative schedule shows that renewed state interest preceded the October 2025 utility borings. The utility work exposed a current problem, but it was not the first government recognition of the island's fill history.",
      "No reviewed evidence ties radioactive material to Cayuga Island. Union Carbide's separate Niagara Falls uranium-processing history makes this a records-research question only; it must not be displayed as a radiological finding.",
      "No reviewed Cayuga Island result establishes PFAS or 1,4-dioxane contamination. The statewide landfill initiative evaluates emerging-contaminant concerns, but program participation is not a site-specific detection.",
    ],
    researchNotes: [
      "Obtain the original 1978 disposal questionnaires reportedly submitted by Olin, Hooker, Carborundum, and other companies; do not convert press summaries into confirmed quantities or waste descriptions.",
      "Recover the complete early-1980s USGS boring logs, the 1991–95 Preliminary Site Assessment analytical tables and maps, and the original 1995 Class N decision memorandum.",
      "Request CPL's 2025 water-main boring coordinates, depths, field notes, and laboratory packages, then publish sample points only if addresses and resident privacy can be protected.",
      "Track validated 2026 surface-soil, sump-water, sub-slab-vapor, and indoor-air results and distinguish detections, screening exceedances, exposure conclusions, and mitigation decisions.",
      "Keep potential corporate source attribution, the nearby Griffon Park and 102nd Street sites, possible emerging contaminants, and the radiological records lead in separate evidence lanes unless a primary document establishes a Cayuga Island connection.",
    ],
  },
  sources: [
    {
      title: "Cayuga Island Fact Sheet and Data Collection Program — Site 9-32-008",
      publisher: "New York State Department of Environmental Conservation",
      url: "https://extapps.dec.ny.gov/data/DecDocs/932008/Work%20Plan.HW.932008.1991-10-28.DATA_COLLECTION_PROGRAM.pdf",
    },
    {
      title: "New York State Inactive Landfill Initiative 2024",
      publisher: "New York State Department of Environmental Conservation",
      url: "https://dec.ny.gov/sites/default/files/2024-07/inactivelandfillrpt2024.pdf",
    },
    {
      title: "Preliminary Evaluation of Chemical Migration from Selected Niagara River Waste-Disposal Sites",
      publisher: "U.S. Environmental Protection Agency",
      url: "https://bnwaterkeeper.org/wp-content/uploads/2009/09/16-US-EPA-1985_NiagaraRiverWasteSites.pdf",
    },
    {
      title: "DEC Chemical Sampling Underway on West End of Cayuga Island",
      publisher: "CNHI / Niagara Gazette",
      url: "https://www.cnhi.com/rss_feed/dec-chemical-sampling-underway-on-west-end-of-cayuga-island/",
    },
    {
      title: "Cayuga Island Landfill Superfund Site Profile",
      publisher: "U.S. Environmental Protection Agency",
      url: "https://cumulis.epa.gov/supercpad/CurSites/csitinfo.cfm?id=0201785",
    },
  ],
};
