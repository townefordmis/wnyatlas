import { AtlasMap } from "@/components/atlas-map";
import { SiteDirectory } from "@/components/site-directory";
import { SiteHeader } from "@/components/site-header";

const categories = [
  ["Industrial history", "Factories, products, employers, and material flows"],
  ["Environmental legacy", "Documented contaminants, disposal, and waterways"],
  [
    "Waterways transformed",
    "Straightened creeks, filled wetlands, and hardened shorelines",
  ],
  [
    "Recovery & restoration",
    "Cleanup, habitat repair, monitoring, and what returned",
  ],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="mission">
        <div className="hero-copy">
          <p className="eyebrow">Western New York Industrial & Environmental Atlas</p>
          <h1>What happened here?</h1>
          <p className="dek">
            Follow the evidence across factories, waterways, waste sites, cleanup
            projects, and the places Western New Yorkers know today.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#map">Open the map</a>
            <a className="text-action" href="#about">Read our evidence standard →</a>
          </div>
        </div>
        <aside className="field-note">
          <p className="field-label">Our standard</p>
          <blockquote>
            We include what is documented, clearly identify uncertainty, and never
            present interpretation as established fact.
          </blockquote>
          <p>Every atlas entry will show how we know what we know.</p>
        </aside>
      </section>

      <div id="map">
        <AtlasMap />
      </div>

      <section className="category-grid" aria-label="Atlas categories">
        {categories.map(([title, description], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <SiteDirectory />

      <section className="about-panel" id="about">
        <p className="eyebrow">Built as a public record</p>
        <h2>Document the past. Understand the present.</h2>
        <p>
          WNYAtlas connects industrial history with environmental records, cleanup
          decisions, ongoing management, and redevelopment. Proximity is context—not
          proof of causation—and every meaningful claim will lead back to a source.
        </p>
      </section>

      <footer>
        <div className="brand">
          <span className="brand-mark">WNY</span>
          <span>ATLAS</span>
        </div>
        <p>Evidence-based public history for Western New York.</p>
        <p>wnyatlas.com</p>
      </footer>
    </main>
  );
}
