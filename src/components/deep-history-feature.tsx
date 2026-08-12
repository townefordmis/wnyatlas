import type { CSSProperties } from "react";

import { deepHistoryFeatures } from "@/data/deep-history-features";

export function DeepHistoryFeature({ siteId }: { siteId: string }) {
  const feature = deepHistoryFeatures[siteId];
  if (!feature) return null;

  return (
    <section
      className="deep-history-feature"
      id="deep-history"
      aria-labelledby="deep-history-title"
      style={{ "--history-accent": feature.accent } as CSSProperties}
    >
      <div className="deep-history-heading">
        <div>
          <p className="eyebrow">{feature.eyebrow}</p>
          <h2 id="deep-history-title">{feature.title}</h2>
        </div>
        {feature.stat && (
          <div className="deep-history-stat">
            <strong>{feature.stat.value}</strong>
            <span>{feature.stat.label}</span>
          </div>
        )}
      </div>

      <p className="deep-history-lead">{feature.lead}</p>

      <div className="deep-history-chapters">
        {feature.chapters.map((chapter) => (
          <article key={`${chapter.period}-${chapter.title}`}>
            <p className="deep-history-period">{chapter.period}</p>
            <h3>{chapter.title}</h3>
            <p>{chapter.body}</p>
          </article>
        ))}
      </div>

      <aside className="deep-history-caution">
        <strong>{feature.caution.title}</strong>
        <p>{feature.caution.body}</p>
      </aside>

      <div className="deep-history-sources" aria-label="Deep-history sources">
        {feature.sources.map((source) => (
          <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
            {source.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
