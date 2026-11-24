"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  emptyGroceryFilters, filterGroceryInvestigations, groceryEvidenceLabels,
  type GroceryFilters, type GroceryInvestigation,
} from "@/data/store-shelves-investigations";
import styles from "./store-shelves-register.module.css";

const display = (value: string | null) => value ?? "Unknown — not established by the reviewed sources";
const choices = (values: string[]) => [...new Set(values)].sort((a, b) => a.localeCompare(b));

export function StoreShelvesRegister({ records }: { records: GroceryInvestigation[] }) {
  const [filters, setFilters] = useState<GroceryFilters>(emptyGroceryFilters);
  const results = useMemo(() => filterGroceryInvestigations(records, filters), [records, filters]);
  const options = useMemo(() => ({
    contaminant: choices(records.flatMap(item => item.contaminants)),
    retailer: choices(records.flatMap(item => item.retailers)),
    manufacturer: choices(records.flatMap(item => item.manufacturers)),
    product: choices(records.map(item => item.product)),
  }), [records]);
  function setFilter(key: keyof GroceryFilters, value: string) {
    setFilters(current => ({ ...current, [key]: value }));
  }
  return <div className={styles.register}>
    <form className={styles.filters} onSubmit={event => event.preventDefault()} aria-label="Filter grocery investigations">
      <label className={styles.search}>Search the records<input type="search" value={filters.query} onChange={event => setFilter("query", event.target.value)} placeholder="Product, company, chemical, case or source" /></label>
      {(["contaminant", "retailer", "manufacturer", "product"] as const).map(key => <label key={key}>
        {key === "manufacturer" ? "Manufacturer / named producer" : `${key[0].toUpperCase()}${key.slice(1)}`}
        <select aria-label={key === "manufacturer" ? "Manufacturer / named producer" : `${key[0].toUpperCase()}${key.slice(1)}`} value={filters[key]} onChange={event => setFilter(key, event.target.value)}>
          <option value="">All {key === "product" ? "products" : `${key}s`}</option>
          {key === "manufacturer" && <option value="unknown">Unknown manufacturer</option>}
          {options[key].map(value => <option key={value} value={value}>{value}</option>)}
        </select>
      </label>)}
      <label>Evidence classification<select aria-label="Evidence classification" value={filters.evidence} onChange={event => setFilter("evidence", event.target.value)}>
        <option value="">All evidence classifications</option>
        {Object.entries(groceryEvidenceLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
      </select></label>
      <button type="button" onClick={() => setFilters({ ...emptyGroceryFilters })}>Reset filters</button>
    </form>
    <div className={styles.resultBar}><p role="status" aria-live="polite">{results.length} of {records.length} investigation records shown</p><a href="/data/store-shelves-research.json" download>Download research data</a></div>
    <p className={styles.explanation}>One record can have several evidence labels. Counts describe records, not unsafe products, confirmed violations or illnesses. Search and filters combine; “Unknown” means the evidence has not been recovered.</p>
    {results.length === 0 && <p className={styles.empty}>No records match these filters. Try another term or reset the filters.</p>}
    <div className={styles.records}>{results.map(item => <article className={styles.record} id={`investigation-${item.id}`} key={item.id}>
      <div className={styles.labels}>{item.evidence.map(evidence => <span key={evidence}>{groceryEvidenceLabels[evidence]}</span>)}</div>
      <h3><a href={`#investigation-${item.id}`}>{item.title}</a></h3>
      <p className={styles.status}>{item.status}</p>
      <p>{item.summary}</p>
      <p><strong>Chemicals:</strong> {item.contaminants.join(" · ")}</p>
      <p><strong>Retailer named in record:</strong> {item.retailers.join(" · ") || "Unknown"}</p>
      <p><strong>Western New York connection:</strong> {item.localAvailability}</p>
      <details>
        <summary>Read product details, evidence and original sources</summary>
        <div className={styles.detail}>
          <h4>Product and supply chain</h4>
          <dl className={styles.facts}>
            <dt>Product</dt><dd>{item.product}</dd><dt>Brand</dt><dd>{display(item.brand)}</dd>
            <dt>Manufacturer / producer</dt><dd>{item.manufacturers.join(" · ") || "Unknown — brand ownership is not proof of manufacture"}</dd>
            <dt>Agricultural grower</dt><dd>{display(item.grower)}</dd><dt>Manufacturing / growing location</dt><dd>{display(item.origin)}</dd>
            <dt>Exposure pathway</dt><dd>{display(item.exposurePathway)}</dd>
            <dt>Health evidence</dt><dd>{display(item.healthEvidence)}</dd>
          </dl>
          <h4>Measurements and comparisons</h4>
          {item.measurements.length ? <div className={styles.tableWrap}><table>
            <caption>Sample-specific results; read the evidence basis before comparing values</caption>
            <thead><tr><th scope="col">Chemical</th><th scope="col">Reported concentration</th><th scope="col">Sample and dates</th><th scope="col">Evidence basis</th></tr></thead>
            <tbody>{item.measurements.map(measurement => <tr key={measurement.chemical}><th scope="row">{measurement.chemical}</th><td>{measurement.value.toLocaleString("en-US")} {measurement.units}</td><td>{measurement.sample}<p>Sampling: {measurement.samplingDate ?? "Unknown"}<br />Laboratory analysis: {measurement.testingDate ?? "Unknown"}</p></td><td>{measurement.basis}<p><a href={measurement.sourceUrl}>Read the source</a></p></td></tr>)}</tbody>
          </table></div> : <p>Concentration, units and laboratory testing date: unknown. A legal notice or complaint is not substituted for an analytical result.</p>}
          <p><strong>Regulatory comparison:</strong> {display(item.regulatoryComparison)}</p>
          <h4>Legal and regulatory record</h4>
          <dl className={styles.facts}>
            <dt>Lawsuit filing date</dt><dd>{display(item.filingDate)}</dd><dt>Court / jurisdiction</dt><dd>{display(item.jurisdiction)}</dd>
            <dt>Case number</dt><dd>{display(item.caseNumber)}</dd><dt>Notice number</dt><dd>{display(item.noticeNumber)}</dd>
            <dt>Reviewed outcome date</dt><dd>{display(item.outcomeDate)}</dd>
            <dt>Settlement amount</dt><dd>{item.settlementAmountUSD === null ? "Unknown / not established" : `$${item.settlementAmountUSD.toLocaleString("en-US")}`}</dd>
            <dt>Company response</dt><dd>{display(item.manufacturerResponse)}</dd>
          </dl>
          {item.events.length > 0 && <><h4>Dated record</h4><ul>{item.events.map(event => <li key={`${event.date}-${event.description}`}><time dateTime={event.date}>{event.date}</time> — {event.description}</li>)}</ul></>}
          <p className={styles.limit}><strong>Evidence limits:</strong> {item.limitations}</p>
          <h4>Next research steps</h4><ul>{item.nextSteps.map(step => <li key={step}>{step}</li>)}</ul>
          <h4>Source register</h4><ul className={styles.sources}>{item.sources.map(source => <li key={source.url}><a href={source.url}>{source.title}</a><p>{source.kind} · {source.supports}</p></li>)}</ul>
          {item.related.length > 0 && <p className={styles.related}>{item.related.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</p>}
          <p>Source review: <time dateTime={item.lastVerified}>{item.lastVerified}</time>. This is a dated editorial review, not a live court-docket feed.</p>
        </div>
      </details>
    </article>)}</div>
  </div>;
}
