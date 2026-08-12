const fireSources = [
  {
    label: "EPA: Great Lakes Revival",
    url: "https://www.epa.gov/sites/production/files/2019-12/documents/how_restoring_polluted_waters_leads_to_rebirth_of_great_lakes_communities.pdf",
  },
  {
    label: "EPA: aesthetics impairment removal record",
    url: "https://19january2021snapshot.epa.gov/sites/static/files/2020-07/documents/aesthetics_bui_removal_package_buffalo.pdf",
  },
  {
    label: "U.S. Army: Stanley Spisiak retrospective",
    url: "https://www.army.mil/article/89945/a_retrospective_on_stanley_spisiak_a_man_with_a_mission",
  },
];

export function BuffaloRiverFireHistory() {
  return (
    <section
      className="buffalo-river-fire-history"
      id="river-fire"
      aria-labelledby="buffalo-river-fire-title"
    >
      <div className="buffalo-river-fire-heading">
        <div>
          <p className="eyebrow">January 24, 1968</p>
          <h2 id="buffalo-river-fire-title">When the Buffalo River burned</h2>
        </div>
        <strong>Nearly three days</strong>
      </div>

      <p className="buffalo-river-fire-lead">
        EPA records say a fire ignited on the Buffalo River on January 24,
        1968. It was the oil and other combustible pollution on the water that
        burned—not the water itself. An EPA review of the river&apos;s recovery
        says the fire continued for nearly three days.
      </p>

      <div className="buffalo-river-fire-facts">
        <article>
          <span>01</span>
          <h3>Conditions before the fire</h3>
          <p>
            Industrial and municipal discharges had overwhelmed the river by
            the 1950s and 1960s. A 1968 federal assessment described an
            oxygen-depleted, almost sterile river receiving oil, phenols, and
            other wastes in large amounts.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>What the fire established</h3>
          <p>
            The event made extreme surface pollution impossible to ignore. It
            remains a stark local marker of the river&apos;s industrial condition,
            but the fire alone does not describe the full sediment, habitat,
            sewer, or shoreline contamination record.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>What followed</h3>
          <p>
            The fire occurred amid years of local advocacy and expanding state
            and federal pollution controls. Later Area of Concern work addressed
            contaminated sediment, degraded habitat, aesthetics, and other
            documented impairments through cleanup, restoration, and monitoring.
          </p>
        </article>
      </div>

      <aside className="buffalo-river-fire-note">
        <strong>A symbol, not a boundary</strong>
        <p>
          A surface fire does not show how far contamination extended or prove
          exposure at a particular property. WNYAtlas uses the event as one
          documented chapter in the larger Buffalo River record.
        </p>
      </aside>

      <div className="buffalo-river-fire-sources" aria-label="River fire sources">
        {fireSources.map((source) => (
          <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
            {source.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
