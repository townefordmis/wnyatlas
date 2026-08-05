"use client";

import { useMemo, useState } from "react";

import {
  allCancerIncidenceTrend,
  cancerMetrics,
} from "@/data/public-health-cancer";

const RATE_MIN = 430;
const RATE_MAX = 600;

export function CancerComparison() {
  const [metricId, setMetricId] = useState(cancerMetrics[0].id);
  const metric = useMemo(
    () => cancerMetrics.find((item) => item.id === metricId) ?? cancerMetrics[0],
    [metricId],
  );
  const maximum = Math.max(
    metric.erie.rate,
    metric.niagara.rate,
    metric.newYork,
    metric.unitedStates,
  );

  const comparisonRows = [
    {
      name: "Erie County",
      rate: metric.erie.rate,
      events: metric.erie.events,
      period: metric.countyPeriod,
      className: "is-erie",
    },
    {
      name: "Niagara County",
      rate: metric.niagara.rate,
      events: metric.niagara.events,
      period: metric.countyPeriod,
      className: "is-niagara",
    },
    {
      name: "New York State",
      rate: metric.newYork,
      period: metric.referencePeriod,
      className: "is-new-york",
    },
    {
      name: "United States",
      rate: metric.unitedStates,
      period: metric.referencePeriod,
      className: "is-us",
    },
  ];

  return (
    <div className="cancer-explorer">
      <div className="cancer-metric-tabs" role="group" aria-label="Choose a cancer measure">
        {cancerMetrics.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === metric.id ? "is-active" : ""}
            aria-pressed={item.id === metric.id}
            onClick={() => setMetricId(item.id)}
          >
            {item.shortLabel}
          </button>
        ))}
      </div>

      <section className="cancer-comparison-panel" aria-live="polite">
        <div className="cancer-panel-heading">
          <div>
            <p className="record-label">Selected measure</p>
            <h3>{metric.label}</h3>
          </div>
          <p>
            Age-adjusted rate per 100,000 {metric.population.toLowerCase()}. County
            and reference periods differ and are printed on every row.
          </p>
        </div>

        <div className="cancer-rate-list">
          {comparisonRows.map((row) => (
            <div className="cancer-rate-row" key={row.name}>
              <div className="cancer-rate-label">
                <strong>{row.name}</strong>
                <span>
                  {row.period}
                  {row.events ? ` · ${row.events.toLocaleString()} events` : " · reference rate"}
                </span>
              </div>
              <div className="cancer-rate-track" aria-hidden="true">
                <span
                  className={row.className}
                  style={{ width: `${Math.max(5, (row.rate / maximum) * 100)}%` }}
                />
              </div>
              <strong className="cancer-rate-value">{row.rate.toFixed(1)}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="cancer-trend-panel">
        <div className="cancer-panel-heading">
          <div>
            <p className="record-label">Historical trend</p>
            <h3>Annual all-cancer incidence, 2011–2020</h3>
          </div>
          <p>
            Age-adjusted annual rates per 100,000. The 2020 decline should be read
            in light of pandemic-related disruptions to screening and diagnosis.
          </p>
        </div>

        <div className="trend-legend" aria-hidden="true">
          <span><i className="is-erie" /> Erie</span>
          <span><i className="is-niagara" /> Niagara</span>
          <span><i className="is-nys" /> NYS excluding NYC</span>
        </div>

        <div className="cancer-trend-chart" role="img" aria-label="Bar chart of annual all-cancer incidence rates for Erie County, Niagara County, and New York State excluding New York City from 2011 through 2020">
          {allCancerIncidenceTrend.map((item) => {
            const height = (value: number) =>
              `${Math.max(8, ((value - RATE_MIN) / (RATE_MAX - RATE_MIN)) * 100)}%`;
            return (
              <div className="trend-year" key={item.year}>
                <div className="trend-bars">
                  <i className="is-erie" style={{ height: height(item.erie) }} title={`Erie ${item.year}: ${item.erie}`} />
                  <i className="is-niagara" style={{ height: height(item.niagara) }} title={`Niagara ${item.year}: ${item.niagara}`} />
                  <i className="is-nys" style={{ height: height(item.nysExcludingNyc) }} title={`NYS excluding NYC ${item.year}: ${item.nysExcludingNyc}`} />
                </div>
                <span>{item.year}</span>
              </div>
            );
          })}
        </div>

        <details className="cancer-data-table">
          <summary>View the exact annual values</summary>
          <div>
            <table>
              <thead>
                <tr><th>Year</th><th>Erie</th><th>Niagara</th><th>NYS excluding NYC</th></tr>
              </thead>
              <tbody>
                {allCancerIncidenceTrend.map((item) => (
                  <tr key={item.year}>
                    <th>{item.year}</th>
                    <td>{item.erie.toFixed(1)}</td>
                    <td>{item.niagara.toFixed(1)}</td>
                    <td>{item.nysExcludingNyc.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </section>
    </div>
  );
}
