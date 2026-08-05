import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Public Health Atlas",
  description:
    "Traceable public-health statistics and documented environmental history for Western New York, presented without causal claims.",
  alternates: { canonical: "/health" },
};

const modules = [
  {
    title: "Cancer",
    status: "Open first release",
    description: "County rates, mortality, cancer types, historical trends, and state and national context.",
    href: "/health/cancer",
    action: "Open cancer data",
  },
  {
    title: "Neurological conditions",
    status: "County comparison available",
    description: "2023 Parkinson's and parkinsonism prevalence, statewide rank, percentile, and limitations for eight WNY counties.",
    href: "/health/neurological",
    action: "Open neurological data",
  },
  {
    title: "Birth defects",
    status: "Local data withheld",
    description: "Registry prevalence and methods; the current public file does not meet the Atlas local-geography rule.",
    href: "/health/cancer?layer=birth-defects#health-map",
    action: "Open state and national data",
  },
  {
    title: "Birth outcomes",
    status: "ZIP layers available",
    description: "Premature birth and low birth weight from the 2021–2023 NYSDOH ZIP-level perinatal profiles.",
    href: "/health/cancer?layer=premature-birth#health-map",
    action: "Open ZIP map",
  },
  {
    title: "Childhood asthma",
    status: "ZIP layer available",
    description: "Stable published 2022–2024 childhood asthma emergency-department visit rates by ZIP code.",
    href: "/health/cancer?layer=childhood-asthma#health-map",
    action: "Open ZIP map",
  },
  {
    title: "Childhood lead exposure",
    status: "Map layer available",
    description: "Testing coverage, elevated blood lead levels, housing age, and documented industrial context.",
    href: "/health/cancer?layer=childhood-lead#health-map",
    action: "Open ZIP map",
  },
  {
    title: "Drinking water",
    status: "Map layer available",
    description: "Public water-system sources, sampling, compliance history, and consumer reports.",
    href: "/health/cancer?layer=drinking-water#health-map",
    action: "Open county map",
  },
];

export default function PublicHealthAtlasPage() {
  return (
    <main>
      <SiteHeader />
      <section className="health-hero">
        <p className="eyebrow">WNYAtlas · Public Health Atlas</p>
        <h1>Health patterns, shown with their evidence.</h1>
        <p className="dek">
          Explore official public-health data alongside Western New York&apos;s
          documented environmental and industrial history. The Atlas organizes
          records and comparisons; it does not treat proximity or correlation as
          proof that a site caused a health outcome.
        </p>
        <div className="health-principle">
          <strong>Evidence before interpretation</strong>
          <p>
            Every published statistic identifies its source agency, time period,
            geographic resolution, update date, and limitations. Environmental
            records are presented as historical context—not as a diagnosis or a
            causal conclusion.
          </p>
        </div>
      </section>

      <section className="health-module-grid" aria-labelledby="health-modules-title">
        <div className="health-section-heading">
          <p className="eyebrow">Research modules</p>
          <h2 id="health-modules-title">Built one verified dataset at a time</h2>
        </div>
        <div>
          {modules.map((module, index) => {
            const content = (
              <>
                <span>0{index + 1}</span>
                <p>{module.status}</p>
                <h3>{module.title}</h3>
                <small>{module.description}</small>
                <strong className="health-module-action">{module.action} →</strong>
              </>
            );
            return (
              <Link
                className={`health-module ${index < 2 ? "is-live" : "is-available"}`}
                href={module.href}
                key={module.title}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="health-method-summary">
        <p className="eyebrow">How the Atlas will compare communities</p>
        <h2>Comparable geography, comparable years, visible limitations.</h2>
        <div>
          <article><strong>1</strong><h3>Use official records</h3><p>State registries, CDC, NCI, EPA, USGS, Census, and other government custodians come first.</p></article>
          <article><strong>2</strong><h3>Match definitions</h3><p>Rates are compared only when population, measure, period, and age adjustment are made visible.</p></article>
          <article><strong>3</strong><h3>Separate context from cause</h3><p>Environmental layers help users find records. They cannot, by themselves, explain a health pattern.</p></article>
        </div>
      </section>
    </main>
  );
}
