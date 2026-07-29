import Link from "next/link";

import { BuffaloSchoolsMap } from "@/components/buffalo-schools-map";
import { SiteHeader } from "@/components/site-header";

export default function BuffaloSchoolsResearchPage() {
  return (
    <main>
      <SiteHeader />
      <section className="school-research-hero">
        <p className="eyebrow">WNY Atlas research preview · Western New York campuses</p>
        <h1>Schools with documented cleanup-property and nearby-site connections</h1>
        <p className="dek">
          A focused map of campuses that occupy part of a documented cleanup
          property, sit directly beside one, or whose current county parcel
          intersects a mapped DEC cleanup boundary. A separate category includes
          official school points within 500 feet of a mapped DEC boundary.
        </p>
        <div className="school-caution">
          <strong>How to read this map</strong>
          <p>
            Rust pins show a documented property, adjacency, or parcel-boundary
            relationship. Blue pins show only that the official school location
            point is within 500 feet of a mapped DEC boundary. Proximity is not
            evidence that contamination reached a school. The map does not
            establish exposure, health effects, responsibility, or present
            conditions.
          </p>
        </div>
      </section>

      <BuffaloSchoolsMap />

      <section className="school-method">
        <p className="eyebrow">Evidence standard</p>
        <h2>Different kinds of evidence stay separate.</h2>
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
            <h3>Within 500 feet</h3>
            <p>
              Used when the official school point is no more than 500 feet from
              the nearest mapped DEC cleanup boundary. It is a proximity measure,
              not a parcel survey, contaminant pathway, exposure finding, or risk
              assessment.
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
          Campus identities are verified against NYSED records. Locations are
          derived from the NYS Schools GIS service and current NCES EDGE school
          data. Candidate screening uses the live NYSDEC Remediation Site Borders
          layer, whose boundary accuracy varies by site.
        </p>
        <Link href="/">Return to the regional atlas →</Link>
      </section>
    </main>
  );
}
