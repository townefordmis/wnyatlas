import Link from "next/link";

import { FormerWaterwaysMap } from "@/components/former-waterways-map";
import { SiteHeader } from "@/components/site-header";

export default function FormerWaterwaysResearchPage() {
  return (
    <main>
      <SiteHeader />
      <section className="school-research-hero">
        <p className="eyebrow">WNY Atlas research map · Buffalo waterways</p>
        <h1>Where water became land—and what the records say was placed there</h1>
        <p className="dek">
          A separate map for filled channels, reclaimed waterfront land, disposal
          fill, and contaminated sediment. It keeps this layered history readable
          without crowding the main regional map.
        </p>
        <div className="school-caution">
          <strong>How to read this map</strong>
          <p>
            Markers identify documented evidence locations, not the full historic
            outline of a canal, slip, river channel, fill deposit, or cleanup
            boundary. A former waterway is not automatically a waste site. The
            description states exactly what each reviewed source supports.
          </p>
        </div>
      </section>

      <FormerWaterwaysMap />

      <section className="school-method">
        <p className="eyebrow">Evidence standard</p>
        <h2>Waterway history and contamination are separate facts.</h2>
        <div>
          <article>
            <h3>Documented waterway</h3>
            <p>
              Historical or agency records must establish the former channel,
              slip, canal, sediment area, or reclaimed shoreline.
            </p>
          </article>
          <article>
            <h3>Documented material</h3>
            <p>
              Waste, ash, dredged sediment, demolition debris, or contaminated
              material is named only when the reviewed source identifies it.
            </p>
          </article>
          <article>
            <h3>No inferred boundaries</h3>
            <p>
              The first release uses evidence-location markers. Historic traces
              and fill polygons will be added only from defensible mapped sources.
            </p>
          </article>
        </div>
        <Link href="/">Return to the regional atlas →</Link>
      </section>
    </main>
  );
}
