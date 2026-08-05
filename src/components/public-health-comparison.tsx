import { publicHealthComparisons, type PublicHealthLayerId } from "@/data/public-health-cancer";

export function PublicHealthComparison({ layer }: { layer: PublicHealthLayerId }) {
  const comparison = publicHealthComparisons[layer];
  if (!comparison) return null;

  const maximum = Math.max(...comparison.rows.map((row) => row.value), 1);

  return (
    <section className="cancer-explorer-shell public-health-active-detail" aria-labelledby={`comparison-${layer}`}>
      <div className="health-section-heading">
        <p className="eyebrow">Community comparison</p>
        <h2 id={`comparison-${layer}`}>{comparison.title}</h2>
        <p>{comparison.explanation}</p>
      </div>

      <div className="cancer-comparison-panel">
        <div className="cancer-panel-heading">
          <div>
            <p className="record-label">Selected measure</p>
            <h3>{comparison.title}</h3>
          </div>
          <p>{comparison.unit}. Every row retains its own reporting period.</p>
        </div>

        {comparison.rows.length > 0 ? (
          <div className="cancer-rate-list">
            {comparison.rows.map((row) => (
              <div className="cancer-rate-row" key={row.name}>
                <div className="cancer-rate-label">
                  <strong>{row.name}</strong>
                  <span>{row.period}</span>
                </div>
                <div className="cancer-rate-track" aria-hidden="true">
                  <span className={row.className} style={{ width: `${Math.max(5, (row.value / maximum) * 100)}%` }} />
                </div>
                <strong className="cancer-rate-value">{row.value.toLocaleString("en-US", { maximumFractionDigits: 2 })}</strong>
              </div>
            ))}
          </div>
        ) : (
          <p className="public-health-comparison-withheld">No responsible benchmark chart is available for this measure.</p>
        )}

        {comparison.availabilityNote && (
          <p className="public-health-comparison-note">{comparison.availabilityNote}</p>
        )}
      </div>
    </section>
  );
}
