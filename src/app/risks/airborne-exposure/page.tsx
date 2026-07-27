import type { Metadata } from "next";
import Link from "next/link";

import { AirborneRiskMap } from "@/components/airborne-risk-map";

export const metadata: Metadata = {
  title: "Airborne Exposure & Historic Plumes | WNYAtlas",
  description:
    "A source-led orientation map of documented historic airborne environmental concerns in Western New York.",
};

export default function AirborneExposurePage() {
  return (
    <main className="risk-page">
      <header className="story-header">
        <Link className="brand" href="/" aria-label="WNYAtlas home">
          <span className="brand-mark">WNY</span>
          <span>ATLAS</span>
        </Link>
        <Link href="/">← Return to the atlas</Link>
      </header>

      <section className="risk-hero">
        <p className="eyebrow">Risk pathway · inhalation</p>
        <h1>Airborne exposure & historic plumes</h1>
        <p className="dek">
          Where government monitoring, modeling, or health orders documented airborne
          chemicals—and what the evidence can and cannot tell us.
        </p>
      </section>

      <section className="risk-warning">
        <strong>Read the shaded areas carefully.</strong>
        <p>
          They provide geographic orientation around documented study and response
          areas. They are not parcel-level exposure determinations, daily plume
          reconstructions, or proof that pollution caused an individual illness.
          Historic airborne concentrations changed with wind, weather, distance,
          operating conditions, and time spent in the area.
        </p>
      </section>

      <section className="risk-map-shell">
        <AirborneRiskMap />
      </section>
    </main>
  );
}
