import { AtlasMap } from "@/components/atlas-map";
import { featuredSites } from "@/data/featured-sites";

const categories = [
  ["Industrial history", "Factories, products, employers, and material flows"],
  ["Environmental legacy", "Documented contaminants, disposal, and waterways"],
  ["Cleanup & controls", "Removal, caps, treatment, monitoring, and restrictions"],
  ["Then & now", "What occupied each place and what is there today"],
];

const evidenceLabels = {
  "well-documented": "Documented",
  "research-in-progress": "Research in progress",
  "research-lead": "Research lead",
};

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="WNYAtlas home">
          <span className="brand-mark">WNY</span>
          <span>ATLAS</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#map">Map</a>
          <a href="#mission">Mission</a>
          <a href="#sites">Sites</a>
          <a href="#about">About</a>
        </nav>
        <span className="edition">Founding edition · 2026</span>
      </header>

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
            If it is documented, include it. If it is uncertain, label it. If it is
            interpretation, do not present it as fact.
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

      <section className="featured" id="sites">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Starting collection</p>
            <h2>{featuredSites.length} anchor stories</h2>
          </div>
          <p>
            These first records establish the model for hundreds of sourced places
            across Erie, Niagara, and neighboring counties.
          </p>
        </div>
        <div className="site-list">
          {featuredSites.map((site, index) => (
            <article key={site.id}>
              <span className="site-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="site-meta">{site.category} · {site.county} County</p>
                <h3>{site.name}</h3>
                <p>{site.summary}</p>
                {site.atomicLegacy && (
                  <p className="site-meta">
                    {site.atomicLegacy.era} · {site.atomicLegacy.role}
                  </p>
                )}
              </div>
              <span className="evidence-pill">
                {evidenceLabels[site.evidenceStatus]}
              </span>
            </article>
          ))}
        </div>
      </section>

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
