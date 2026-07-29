import Link from "next/link";

import { BuffaloSchoolsMap } from "@/components/buffalo-schools-map";
import { SiteHeader } from "@/components/site-header";

export default function BuffaloSchoolsResearchPage() {
  return (
    <main>
      <SiteHeader />
      <section className="school-research-hero">
        <p className="eyebrow">WNY Atlas research preview · Buffalo-address campuses</p>
        <h1>Schools, property history, and nearby cleanup records</h1>
        <p className="dek">
          A factual map of current public and charter school campuses, documented
          former property uses, and mapped relationships to DEC remediation sites.
        </p>
        <div className="school-caution">
          <strong>How to read this map</strong>
          <p>
            A nearby site is geographic context. Distance does not establish
            exposure, health effects, responsibility, or present conditions.
            Records describe what agencies and historical sources document; WNY
            Atlas does not make findings beyond those records.
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
            <h3>Nearby</h3>
            <p>
              Reported as a measured map relationship. Proximity is not presented
              as evidence of exposure or causation.
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
