export type EnforcementAction = {
  rank: number;
  name: string;
  place: string;
  year: number;
  amount: string;
  numericAmount: number;
  type: string;
  note: string;
  source: { title: string; url: string; publisher: string };
};

export const enforcementActions: EnforcementAction[] = [
  {
    rank: 1,
    name: "Love Canal cost recovery",
    place: "Niagara Falls · Niagara County",
    year: 1995,
    amount: "$129 million + interest",
    numericAmount: 129_000_000,
    type: "Cleanup-cost recovery",
    note: "Occidental agreed to reimburse federal response costs. This was a cost-recovery settlement, not a civil fine.",
    source: {
      title: "Love Canal Five-Year Review",
      url: "https://semspub.epa.gov/work/02/139757.pdf",
      publisher: "U.S. EPA",
    },
  },
  {
    rank: 2,
    name: "Tonawanda Coke criminal sentence",
    place: "Town of Tonawanda · Erie County",
    year: 2014,
    amount: "$12.5 million",
    numericAmount: 12_500_000,
    type: "Criminal penalty",
    note: "Federal sentence following convictions under the Clean Air Act and Resource Conservation and Recovery Act; separate from $12.2 million in community-service payments.",
    source: {
      title: "Tonawanda Coke and Manager Sentenced",
      url: "https://www.justice.gov/archives/opa/pr/tonawanda-coke-and-manager-sentenced-violating-clean-air-act-and-resource-conservation-and",
      publisher: "U.S. Department of Justice",
    },
  },
  {
    rank: 3,
    name: "102nd Street Landfill settlement",
    place: "Niagara Falls · Niagara County",
    year: 1999,
    amount: "$7.1 million",
    numericAmount: 7_100_000,
    type: "Cost recovery & damages",
    note: "Combined federal and state cleanup reimbursements and natural-resource damages; the agreement also required wetlands restoration.",
    source: {
      title: "Occidental Chemical and Olin to Pay $7.1 Million",
      url: "https://www.justice.gov/archive/opa/pr/1999/July/312enr.htm",
      publisher: "U.S. Department of Justice",
    },
  },
  {
    rank: 4,
    name: "Buffalo River natural-resource settlement",
    place: "Buffalo · Erie County",
    year: 2021,
    amount: "$6.25 million",
    numericAmount: 6_250_000,
    type: "Natural-resource settlement",
    note: "A settlement valued at $6.25 million for habitat preservation and restoration along the Buffalo River.",
    source: {
      title: "Buffalo River NRDAR",
      url: "https://www.fws.gov/media/buffalo-river-nrdar",
      publisher: "U.S. Fish & Wildlife Service",
    },
  },
  {
    rank: 5,
    name: "Tonawanda Coke civil settlement",
    place: "Town of Tonawanda · Erie County",
    year: 2015,
    amount: "$2.75 million",
    numericAmount: 2_750_000,
    type: "Civil penalties",
    note: "Federal and New York civil penalties within a broader $12 million settlement that also funded controls and environmental projects.",
    source: {
      title: "Tonawanda Coke to Pay $12 Million",
      url: "https://www.justice.gov/usao-wdny/pr/tonawanda-coke-pay-12-million-civil-penalties-facility-improvements-and-environmental",
      publisher: "U.S. Department of Justice",
    },
  },
  {
    rank: 6,
    name: "Battaglia Demolition",
    place: "Buffalo · Erie County",
    year: 2022,
    amount: "Up to $1.05 million",
    numericAmount: 1_050_000,
    type: "Contingent civil penalty",
    note: "The court-ordered agreement set a minimum $50,000 payment and liability up to $1.05 million depending on compliance.",
    source: {
      title: "State Shuts Down Battaglia Demolition",
      url: "https://dec.ny.gov/news/press-releases/2022/8/dec-commissioner-seggos-and-attorney-general-james-shut-down-lawless-south-buffalo-demolition-debris-processing-facility",
      publisher: "NYSDEC",
    },
  },
  {
    rank: 7,
    name: "Allied Waste Niagara Falls Landfill",
    place: "Niagara Falls · Niagara County",
    year: 2024,
    amount: "$671,000",
    numericAmount: 671_000,
    type: "Civil penalty",
    note: "Clean Air Act settlement addressing landfill-gas controls and methane and organic-compound emissions.",
    source: {
      title: "Allied Waste Resolves Clean Air Act Violations",
      url: "https://www.epa.gov/newsreleases/allied-waste-resolves-clean-air-act-violations-its-niagara-falls-landfill",
      publisher: "U.S. EPA",
    },
  },
  {
    rank: 8,
    name: "Great Lakes Cheese / Ischua Creek",
    place: "Franklinville · Cattaraugus County",
    year: 2025,
    amount: "$475,000",
    numericAmount: 475_000,
    type: "Penalty & benefit project",
    note: "$250,000 payable, $75,000 suspended, and a $150,000 environmental-benefit project after a discharge and wildlife die-off.",
    source: {
      title: "DEC Orders Great Lakes Cheese to Pay $475,000",
      url: "https://dec.ny.gov/news/press-releases/2025/10/dec-orders-great-lakes-cheese-to-pay-475000-in-penalties-and-take-corrective-actions-related-to-ischua-creek-discharge",
      publisher: "NYSDEC",
    },
  },
  {
    rank: 9,
    name: "Cascades Containerboard",
    place: "Niagara Falls · Niagara County",
    year: 2021,
    amount: "$375,000",
    numericAmount: 375_000,
    type: "Civil penalty",
    note: "State enforcement addressed persistent odors plus air- and water-quality violations at the Packard Road facility.",
    source: {
      title: "DEC Enforcement Action Against Cascades",
      url: "https://dec.ny.gov/news/press-releases/2021/9/dec-announces-enforcement-action-against-cascades-containerboard-packaging-inc-to-correct-persistent-odors-and-air-pollution-violations",
      publisher: "NYSDEC",
    },
  },
  {
    rank: 10,
    name: "Buffalo Municipal Housing Authority",
    place: "Buffalo · Erie County",
    year: 2023,
    amount: "$252,000",
    numericAmount: 252_000,
    type: "Conditionally waived penalty",
    note: "EPA assessed the amount for lead-paint rule violations, then waived it after the housing authority completed required corrective actions.",
    source: {
      title: "Consent Agreement and Final Order",
      url: "https://docs.publicnow.com/viewDoc?filename=65037%5CEXT%5C30F425A9B9CAD216358DFA560A9706E547E144F0_F7B4C058D7AC80FA06ED63C1BD851A4FA9FF0799.PDF",
      publisher: "U.S. EPA",
    },
  },
];
