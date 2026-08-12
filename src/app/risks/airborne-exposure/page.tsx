import type { Metadata } from "next";
import Link from "next/link";

import { AirborneRiskMap } from "@/components/airborne-risk-map";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Airborne Exposure & Historic Plumes",
  description:
    "A source-led orientation map of documented historic airborne environmental concerns in Western New York.",
  alternates: {
    canonical: "/risks/airborne-exposure",
  },
  openGraph: {
    type: "article",
    url: "/risks/airborne-exposure",
    title: "Airborne Exposure & Historic Plumes | WNYAtlas",
    description:
      "A source-led orientation map of documented historic airborne environmental concerns in Western New York.",
  },
};

export default function AirborneExposurePage() {
  return (
    <main className="risk-page">
      <SiteHeader />

      <section className="risk-hero">
        <p className="eyebrow">Risk pathway · inhalation</p>
        <h1>Airborne exposure & historic plumes</h1>
        <p className="dek">
          Government monitoring, modeling, and health orders documented airborne
          chemicals in these areas. The map also explains what that evidence cannot
          establish.
        </p>
      </section>

      <section className="risk-warning">
        <strong>Read the shaded areas carefully.</strong>
        <p>
          The shading provides geographic context for documented study and response
          areas. It does not show parcel-level exposure, reconstruct a plume for a
          particular day, or prove that pollution caused an individual illness.
          Historic airborne concentrations changed with wind, weather, distance,
          operating conditions, and time spent in the area.
        </p>
      </section>

      <section className="risk-map-shell">
        <AirborneRiskMap />
      </section>

      <section className="airborne-event-records" aria-labelledby="airborne-events-title">
        <div>
          <p className="eyebrow">Documented events without mapped plume boundaries</p>
          <h2 id="airborne-events-title">Not every airborne record belongs inside a shaded area.</h2>
          <p>
            These incidents involved documented releases, smoke, odors, evacuation,
            or emergency response. The reviewed records do not define a defensible
            historical plume polygon, so WNYAtlas links the event history without
            inventing an impact boundary.
          </p>
        </div>
        <div className="airborne-event-list">
          <article>
            <span>2002 · Orleans County</span>
            <h3>Diaz Chemical release</h3>
            <p>
              A process-vessel release produced odors and community complaints in
              Holley, followed by evacuation, health review, enforcement, and a
              long-running federal and state response.
            </p>
            <Link href="/sites/diaz-chemical">Read the documented event history →</Link>
          </article>
          <article>
            <span>1988 · Erie County</span>
            <h3>Polymer Applications fire</h3>
            <p>
              A major industrial fire prompted emergency response and became part of
              the property’s later cleanup history. Available records support the
              event—not a reconstructed neighborhood exposure zone.
            </p>
            <Link href="/sites/polymer-applications">Read the documented event history →</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
