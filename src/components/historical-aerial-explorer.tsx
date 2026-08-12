"use client";

import { useState, type TouchEvent } from "react";

type AerialHighlight =
  | { viewBox: string; path: string; ariaLabel: string }
  | {
      viewBox: string;
      cx: number;
      cy: number;
      rx: number;
      ry: number;
      ariaLabel?: string;
    };

export type AerialExplorerPanel = {
  period: string;
  heading: string;
  imageUrl: string;
  sourceUrl: string;
  sourceLabel: string;
  alt: string;
  note: string;
  matched?: boolean;
  highlight?: AerialHighlight;
};

function SiteHighlight({ highlight }: { highlight: AerialHighlight }) {
  return (
    <svg
      className="historical-aerial-site-highlight"
      viewBox={highlight.viewBox}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={highlight.ariaLabel ?? "Bright yellow outline marking the approximate former site area"}
    >
      {"path" in highlight ? (
        <>
          <path className="historical-aerial-site-halo" d={highlight.path} />
          <path className="historical-aerial-site-outline" d={highlight.path} />
        </>
      ) : (
        <>
          <ellipse className="historical-aerial-site-halo" cx={highlight.cx} cy={highlight.cy} rx={highlight.rx} ry={highlight.ry} />
          <ellipse className="historical-aerial-site-outline" cx={highlight.cx} cy={highlight.cy} rx={highlight.rx} ry={highlight.ry} />
        </>
      )}
    </svg>
  );
}

export function HistoricalAerialExplorer({ panels }: { panels: AerialExplorerPanel[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const panel = panels[activeIndex];

  function selectPanel(index: number) {
    setActiveIndex(Math.max(0, Math.min(index, panels.length - 1)));
  }

  function handleTouchEnd(event: TouchEvent<HTMLElement>) {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 55) {
      selectPanel(distance < 0 ? activeIndex + 1 : activeIndex - 1);
    }
    setTouchStart(null);
  }

  return (
    <div className="historical-aerial-explorer">
      <div className="historical-aerial-years" aria-label="Choose an aerial year">
        {panels.map((item, index) => (
          <button
            type="button"
            className={index === activeIndex ? "is-active" : undefined}
            aria-pressed={index === activeIndex}
            onClick={() => selectPanel(index)}
            key={`${item.period}-${item.heading}`}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.period}
          </button>
        ))}
      </div>

      <figure
        key={`${panel.period}-${panel.heading}`}
        className={panel.matched ? "is-matched" : "is-context"}
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        <a className="historical-aerial-image" href={panel.imageUrl} target="_blank" rel="noreferrer" aria-label={`Open the ${panel.period} aerial image at full size`}>
          {/* Official archive and state GIS imagery is intentionally served from its source. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={panel.imageUrl} alt={panel.alt} loading="lazy" referrerPolicy="no-referrer" />
          {panel.highlight ? <SiteHighlight highlight={panel.highlight} /> : null}
          <span className="historical-aerial-image-label" aria-hidden="true">
            <small>{panel.period}</small>
            <strong>{panel.heading}</strong>
          </span>
        </a>

        <figcaption aria-live="polite">
          <span className="historical-aerial-period">{panel.period}</span>
          <strong>{panel.heading}</strong>
          <p>{panel.note}</p>
          <a href={panel.sourceUrl} target="_blank" rel="noreferrer">{panel.sourceLabel} ↗</a>

          <div className="historical-aerial-controls" aria-label="Aerial navigation">
            <button type="button" disabled={activeIndex === 0} onClick={() => selectPanel(activeIndex - 1)}>← Previous</button>
            <span>{activeIndex + 1} of {panels.length}</span>
            <button type="button" disabled={activeIndex === panels.length - 1} onClick={() => selectPanel(activeIndex + 1)}>Next →</button>
          </div>
        </figcaption>
      </figure>
      <p className="historical-aerial-swipe-note">Choose a year. On touch screens, swipe the image to move through time.</p>
    </div>
  );
}
