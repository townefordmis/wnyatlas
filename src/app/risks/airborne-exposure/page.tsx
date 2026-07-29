import type { Metadata } from "next";
import Link from "next/link";

import { AirborneRiskMap } from "@/components/airborne-risk-map";

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
    </main>
  );
}
