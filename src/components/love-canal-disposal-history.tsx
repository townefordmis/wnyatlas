const disposalParties = [
  {
    party: "Hooker Electrochemical Company",
    dates: "1942–1953",
    status: "Documented company disposal",
    detail:
      "Hooker, later Hooker Chemical & Plastics and now associated with Occidental Chemical, acknowledged using the canal for wastes from its Niagara Falls plants. EPA records sometimes describe active dumping as ending in 1952; New York records use 1942–1953.",
    quantity: "21,800 tons estimated",
    quantityNote:
      "This is Hooker's reported chemical-waste total. It does not include a defensible quantity for municipal refuse or other attributed disposal.",
  },
  {
    party: "City of Niagara Falls",
    dates: "During the disposal period; ending in 1953",
    status: "Documented municipal disposal",
    detail:
      "NYSDEC and NYSDOH records state that the city also used the canal for municipal waste. A 1990 state planning record describes municipal refuse being regularly unloaded into the canal.",
    quantity: "Quantity not established",
    quantityNote:
      "The reviewed public records do not provide a reliable municipal-waste tonnage, so it is not added to Hooker's 21,800-ton estimate.",
  },
  {
    party: "United States Army",
    dates: "During and after World War II, historically attributed",
    status: "Attributed in state records; scope unresolved",
    detail:
      "A 1990 New York State master-plan appendix says other agencies, including the Army, disposed of toxic chemical waste during and after World War II. Earlier NYSDOH orders directed the Army to continue investigating the extent of its involvement.",
    quantity: "Quantity and composition unknown",
    quantityNote:
      "This entry preserves the official historical attribution without treating an unresolved investigation as a complete disposal manifest. NYSDOH reported that claims of radioactive disposal at Love Canal were not substantiated.",
  },
];

const hookerWasteInventory = [
  ["Miscellaneous acid chlorides other than benzoyl", "Liquid and solid", "400", "Drums"],
  ["Thionyl chloride and miscellaneous sulfur/chlorine compounds", "Liquid and solid", "500", "Drums"],
  ["Miscellaneous chlorination wastes, including waxes, oils, naphthalenes and aniline", "Liquid and solid", "1,000", "Drums"],
  ["Dodecyl mercaptans, chlorides and miscellaneous organic sulfur compounds", "Liquid and solid", "2,400", "Drums"],
  ["Trichlorophenol (TCP)", "Liquid and solid", "200", "Drums"],
  ["Benzoyl chlorides and benzotrichlorides", "Liquid and solid", "800", "Drums"],
  ["Metal chlorides", "Solid", "400", "Drums"],
  ["Liquid disulfides and chlorotoluenes", "Liquid", "700", "Drums"],
  ["Hexachlorocyclohexane (BHC/lindane)", "Solid", "6,900", "Drums and nonmetallic containers"],
  ["Chlorobenzenes", "Liquid and solid", "2,000", "Drums and nonmetallic containers"],
  ["Benzyl chlorides, including benzyl chloride, benzyl alcohol and benzyl thiocyanate", "Solid", "2,400", "Drums"],
  ["Sodium sulfide/sulfhydrates", "Solid", "2,000", "Drums"],
  ["Miscellaneous — reported as 10% of the categories above", "Not specified", "2,000", "Not specified"],
];

export function LoveCanalDisposalHistory() {
  return (
    <section className="love-canal-disposal" aria-labelledby="love-canal-disposal-title">
      <p className="eyebrow">Disposal record</p>
      <h2 id="love-canal-disposal-title">Who dumped here, when, and how much?</h2>
      <p>
        The records do not support one combined total for everything placed in the canal. The
        most complete quantity is Hooker&apos;s own estimated chemical-waste inventory. Municipal
        refuse and historically attributed Army disposal are shown separately because their
        quantities are not established in the reviewed public files.
      </p>

      <div className="love-canal-party-list">
        {disposalParties.map((entry, index) => (
          <article key={entry.party}>
            <div className="love-canal-party-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <p className="love-canal-party-status">{entry.status}</p>
              <h3>{entry.party}</h3>
              <p className="love-canal-party-dates">{entry.dates}</p>
              <p>{entry.detail}</p>
              <div className="love-canal-quantity">
                <strong>{entry.quantity}</strong>
                <span>{entry.quantityNote}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="love-canal-inventory-heading">
        <div>
          <p className="eyebrow">Hooker inventory</p>
          <h3>Estimated chemical wastes, 1942–1953</h3>
        </div>
        <strong>Reported total: 21,800 tons</strong>
      </div>

      <div className="love-canal-inventory" role="region" aria-label="Hooker chemical waste inventory" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th scope="col">Reported waste category</th>
              <th scope="col">Physical state</th>
              <th scope="col">Estimated tons</th>
              <th scope="col">Container</th>
            </tr>
          </thead>
          <tbody>
            {hookerWasteInventory.map(([waste, state, tons, container]) => (
              <tr key={waste}>
                <th scope="row">{waste}</th>
                <td>{state}</td>
                <td className="love-canal-tons">{tons}</td>
                <td>{container}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan={2}>Total reported by New York State</th>
              <td className="love-canal-tons">21,800</td>
              <td>Drummed and undrummed wastes</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="love-canal-record-note">
        <strong>How to read the numbers</strong>
        <p>
          These are historical estimates reproduced from the 1981 NYSDOH report and its
          cited 1979 interagency draft. The category figures are rounded, and their displayed
          arithmetic does not exactly reproduce the published 21,800-ton total. WNYAtlas
          preserves the official table as reported instead of silently changing a historical
          source. The list is a disposal estimate—not a complete list of every compound later
          detected in soil, air, water, sewers, or creek sediment.
        </p>
      </div>

      <div className="love-canal-primary-links" aria-label="Primary disposal-history sources">
        <a href="https://www.health.ny.gov/environmental/investigations/love_canal/lcreport.htm" target="_blank" rel="noreferrer">
          NYSDOH 1981 report and waste table ↗
        </a>
        <a href="https://semspub.epa.gov/work/HQ/186263.pdf" target="_blank" rel="noreferrer">
          EPA 1985 Record of Decision ↗
        </a>
        <a href="https://dec.ny.gov/environmental-protection/site-cleanup/regional-remediation-project-information/region-9/love-canal" target="_blank" rel="noreferrer">
          NYSDEC site history ↗
        </a>
        <a href="https://extapps.dec.ny.gov/data/DecDocs/932020/Report.HW.932020.1990-05-30.EIS%20Love%20Canal%20Master%20Plan%20Append.%20B-Z.pdf" target="_blank" rel="noreferrer">
          1990 NYS master-plan appendix ↗
        </a>
      </div>
    </section>
  );
}
