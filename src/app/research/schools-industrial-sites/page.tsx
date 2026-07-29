import Link from "next/link";

import { BuffaloSchoolsMap } from "@/components/buffalo-schools-map";
import { SiteHeader } from "@/components/site-header";

export default function BuffaloSchoolsResearchPage() {
  return (
    <main>
      <SiteHeader />
      <section className="school-research-hero">
        <p className="eyebrow">WNY Atlas research preview · Buffalo-address campuses</p>
        <h1>Schools with documented cleanup-property connections</h1>
        <p className="dek">
          A focused map of campuses that occupy part of a documented cleanup
          property, sit directly beside one, or whose current county parcel
          intersects a mapped DEC cleanup boundary. Ordinary proximity is excluded.
        </p>
        <div className="school-caution">
          <strong>How to read this map</strong>
          <p>
            Inclusion requires a documented property relationship, direct
            adjacency, or an intersection between the current county parcel and a
            mapped DEC boundary. Boundary intersections may be an overlap or a
            shared edge. The map does not establish exposure, health effects,
            responsibility, or present conditions.
          </p>
        </div>
      </section>

      <BuffaloSchoolsMap />

      <section className="school-method">
        <p className="eyebrow">Evidence standard</p>
        <h2>Facts are kept in their proper lane.</h2>
        <div>
          <article>
            <h3>On the property</h3>
            <p>
              Used only when an address, parcel, cleanup agreement, or agency
              document establishes the relationship.
            </p>
          </article>
          <article>
            <h3>Directly adjacent</h3>
            <p>
              Used only when an agency or property record identifies the cleanup
              site as directly beside the campus. General proximity is excluded.
            </p>
          </article>
          <article>
            <h3>Mapped parcel intersection</h3>
            <p>
              Used when the current county parcel geometry intersects a mapped DEC
              cleanup boundary. It is labeled separately because agency boundary
              accuracy varies and the intersection alone does not establish site
              conditions at a school building.
            </p>
          </article>
          <article>
            <h3>Not yet reviewed</h3>
            <p>
              Means research remains incomplete. It never means that no earlier
              use, release, or record exists.
            </p>
          </article>
        </div>
        <p>
          Campus locations are derived from NYSED data published through the NYS
          Schools GIS service. “Buffalo-address” follows the physical city/address
          field in that source and is not a municipal-boundary determination.
          Nearby screening uses the live NYSDEC Remediation Site Borders layer,
          whose boundary accuracy varies by site.
        </p>
        <Link href="/">Return to the regional atlas →</Link>
      </section>
    </main>
  );
}
