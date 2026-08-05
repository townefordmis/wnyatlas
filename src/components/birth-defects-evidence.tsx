import {
  birthDefectRegionalLatest,
  birthDefectSources,
  downSyndromeRegionalTrend,
  downSyndromeWnyCounties,
} from "@/data/birth-defects";

export function BirthDefectsEvidence() {
  const trendMaximum = Math.max(...downSyndromeRegionalTrend.map((record) => record.prevalence));

  return (
    <section className="birth-defects-evidence" aria-labelledby="birth-defects-evidence-title">
      <div className="health-section-heading">
        <p className="eyebrow">Official registry evidence</p>
        <h2 id="birth-defects-evidence-title">Chromosomal conditions are documented—but the local and current releases use different geographies.</h2>
        <p>
          NYSDOH publishes recent annual values for New York State excluding New York City and an older county file through 2014.
          WNYAtlas keeps those evidence streams separate rather than presenting the regional series as a Western New York estimate.
        </p>
      </div>

      <div className="birth-defects-status" aria-label="Birth defects data coverage">
        <div><span>Current series</span><strong>1992–2022</strong><small>NYS excluding NYC</small></div>
        <div><span>Historical county series</span><strong>2000–2014</strong><small>Three-year periods</small></div>
        <div><span>Conditions in registry</span><strong>49</strong><small>Selected major defects</small></div>
        <div><span>Unstable threshold</span><strong>&lt;12 cases</strong><small>Do not rank</small></div>
      </div>

      <div className="health-section-heading birth-defects-subheading">
        <p className="eyebrow">Latest regional record · 2022</p>
        <h2>Selected chromosomal conditions</h2>
        <p>Counts are children recorded by the registry; prevalence is per 10,000 live births in NYS excluding NYC.</p>
      </div>
      <div className="birth-defects-condition-grid">
        {birthDefectRegionalLatest.map((record) => (
          <article key={record.condition}>
            <p>{record.note}</p>
            <h3>{record.condition}</h3>
            <strong>{record.prevalence.toFixed(2)}</strong>
            <span>per 10,000 live births</span>
            <small>{record.count.toLocaleString()} reported children{record.count < 12 ? " · small count" : ""}</small>
          </article>
        ))}
      </div>

      <div className="birth-defects-two-column">
        <div>
          <div className="health-section-heading birth-defects-subheading">
            <p className="eyebrow">Recent trend · regional</p>
            <h2>Down syndrome, 2018–2022</h2>
            <p>Annual NYS-excluding-NYC prevalence. Year-to-year movement is descriptive and is not evidence of an environmental cause.</p>
          </div>
          <div className="birth-defects-trend" aria-label="Down syndrome prevalence trend from 2018 through 2022">
            {downSyndromeRegionalTrend.map((record) => (
              <div key={record.year}>
                <i style={{ height: `${(record.prevalence / trendMaximum) * 100}%` }} />
                <strong>{record.year}</strong>
                <span>{record.prevalence.toFixed(2)}</span>
                <small>{record.count} cases</small>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="health-section-heading birth-defects-subheading">
            <p className="eyebrow">Historical county record · 2012–2014</p>
            <h2>Down syndrome in WNY counties</h2>
            <p>Every rate based on fewer than 12 cases is marked unstable and intentionally left unranked.</p>
          </div>
          <div className="health-table-scroll birth-defects-table">
            <table>
              <thead><tr><th>County</th><th>Cases</th><th>Live births</th><th>Per 10,000</th><th>Status</th></tr></thead>
              <tbody>
                {downSyndromeWnyCounties.map((record) => (
                  <tr key={record.county}>
                    <th>{record.county}</th>
                    <td>{record.count}</td>
                    <td>{record.births.toLocaleString()}</td>
                    <td>{record.prevalence.toFixed(2)}</td>
                    <td><span className={record.count < 12 ? "is-unstable" : "is-stable"}>{record.count < 12 ? "Unstable" : "Reportable"}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="birth-defects-interpretation">
        <article><strong>Residence at birth</strong><p>Geography comes from the mother&apos;s residence at the time of birth. It does not reconstruct pregnancy exposures or earlier addresses.</p></article>
        <article><strong>Counts can overlap</strong><p>A child with more than one reported defect may appear in more than one condition category. Categories must not be added together.</p></article>
        <article><strong>Reporting changed</strong><p>Registry completeness improved over time, including web reporting and linkage with hospital billing records. Apparent trends may partly reflect ascertainment.</p></article>
        <article><strong>No causal ranking</strong><p>Maternal age, genetics, diagnosis, reporting, and many other factors shape these records. County differences do not identify a cause.</p></article>
      </div>

      <div className="birth-defects-sources">
        {birthDefectSources.map((source) => (
          <article key={source.title}>
            <p>{source.agency}</p><h3>{source.title}</h3><p>{source.note}</p>
            <a href={source.url} target="_blank" rel="noreferrer">Open official source ↗</a>
          </article>
        ))}
      </div>
    </section>
  );
}
