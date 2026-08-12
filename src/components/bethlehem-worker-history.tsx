const workerHistorySources = [
  {
    label: "Buffalo Toronto Public Media: the workers who toiled within",
    url: "https://www.btpm.org/heritage-moments/2018-05-07/heritage-moments-the-immense-constructions-of-the-20th-century-and-the-workers-who-toiled-within",
  },
  {
    label: "1904 newspaper account preserved by the Library of Congress",
    url: "https://tile.loc.gov/storage-services/service/ndnp/mnhi/batch_mnhi_jevne_ver02/data/sn86063381/00206538491/1904022401/0078.pdf",
  },
  {
    label: "OSHA: 1984 Lackawanna coke-oven fatality",
    url: "https://www.osha.gov/ords/imis/accidentsearch.accident_detail?id=14485734",
  },
  {
    label: "Steel Plant Museum of Western New York",
    url: "https://www.steelplantmuseumwny.org/about",
  },
];

export function BethlehemWorkerHistory() {
  return (
    <section
      className="bethlehem-worker-history"
      id="worker-history"
      aria-labelledby="bethlehem-worker-history-title"
    >
      <div className="bethlehem-worker-heading">
        <div>
          <p className="eyebrow">Labor and loss</p>
          <h2 id="bethlehem-worker-history-title">
            The work had a human cost
          </h2>
        </div>
        <div className="bethlehem-worker-tally">
          <strong>171</strong>
          <span>worker deaths recorded, 1924–1956</span>
        </div>
      </div>

      <p className="bethlehem-worker-lead">
        The Lackawanna works was remembered not only through production totals,
        furnaces, and acres of industrial land, but through the people injured
        and killed while making steel. Buffalo Toronto Public Media reports that
        a Bethlehem Steel accident tally now held by the Steel Plant Museum of
        Western New York records 171 worker deaths in the 32 years from 1924
        through 1956 alone.
      </p>

      <div className="bethlehem-worker-records">
        <article>
          <p className="bethlehem-worker-date">February 1904 · predecessor works</p>
          <h3>Three men killed after blast-furnace gas ignited</h3>
          <p>
            A contemporary newspaper account reported that George Reynolds,
            Michael Smith, and Frank Prenatt were killed and several others
            injured in an explosion near a gas reservoir at the Lackawanna Steel
            works. This occurred at the same industrial complex, but 18 years
            before Bethlehem Steel acquired it in 1922.
          </p>
        </article>

        <article>
          <p className="bethlehem-worker-date">1924–1956 · Bethlehem era</p>
          <h3>The tally is broader than explosions</h3>
          <p>
            The preserved total of 171 deaths covers fatal workplace accidents
            of many kinds. It should not be presented as an explosion count.
            Blast furnaces, coke ovens, molten metal, rail equipment, cranes,
            conveyors, falls, and machinery all formed part of the plant&apos;s
            occupational-risk landscape.
          </p>
        </article>

        <article>
          <p className="bethlehem-worker-date">September 20, 1984 · federal record</p>
          <h3>A coke-oven worker was crushed and killed</h3>
          <p>
            OSHA&apos;s Buffalo Area Office recorded a fatality while workers were
            troubleshooting a malfunctioning coke-oven door machine. The record
            is included because it shows that the human toll extended beyond
            spectacular disasters into maintenance and routine plant operations.
          </p>
        </article>
      </div>

      <aside className="bethlehem-worker-note">
        <strong>What the number does—and does not—mean</strong>
        <p>
          The 171-death tally covers only 1924–1956 and is not a complete count
          for the plant&apos;s full operating history. It also does not measure
          disabling injuries, occupational disease, off-site health effects, or
          the economic and family consequences of layoffs and closure. WNYAtlas
          will add individual incidents only when a reliable record identifies
          the event and connects it to the Lackawanna works.
        </p>
      </aside>

      <div className="bethlehem-worker-sources" aria-label="Worker-history sources">
        {workerHistorySources.map((source) => (
          <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
            {source.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
