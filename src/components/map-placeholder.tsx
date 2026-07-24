import { featuredSites } from "@/data/featured-sites";

const markerPositions = [
  { left: "33%", top: "24%" },
  { left: "38%", top: "69%" },
  { left: "31%", top: "76%" },
  { left: "35%", top: "52%" },
];

export function MapPlaceholder() {
  return (
    <section className="map-shell" aria-labelledby="map-heading">
      <div className="map-toolbar">
        <div>
          <p className="eyebrow">Phase one map</p>
          <h2 id="map-heading">Explore the region</h2>
        </div>
        <div className="map-actions" aria-label="Map controls coming soon">
          <button type="button">Layers</button>
          <button type="button">Search</button>
        </div>
      </div>

      <div className="map-canvas">
        <div className="lake lake-ontario" aria-hidden="true" />
        <div className="lake lake-erie" aria-hidden="true" />
        <div className="river" aria-hidden="true" />
        <span className="place place-niagara">Niagara Falls</span>
        <span className="place place-tonawanda">Tonawanda</span>
        <span className="place place-buffalo">Buffalo</span>

        {featuredSites.map((site, index) => (
          <button
            className={`map-marker marker-${site.category}`}
            key={site.id}
            style={markerPositions[index]}
            type="button"
            aria-label={`${site.name}, ${site.municipality}`}
            title={site.name}
          >
            <span />
          </button>
        ))}

        <div className="map-note">
          <span className="status-dot" />
          <div>
            <strong>Interactive map foundation</strong>
            <p>MapLibre layers and full site records arrive in the next milestone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
