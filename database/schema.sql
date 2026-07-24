-- Future PostGIS foundation. Run through a migration tool once a database is selected.
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE IF NOT EXISTS atlas_sites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  municipality TEXT,
  county TEXT,
  former_use TEXT,
  current_use TEXT,
  historical_summary TEXT,
  evidence_status TEXT NOT NULL DEFAULT 'research-in-progress',
  location GEOGRAPHY(POINT, 4326),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS atlas_sites_location_gix
  ON atlas_sites USING GIST (location);

CREATE TABLE IF NOT EXISTS sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  publisher TEXT,
  url TEXT,
  published_at DATE,
  accessed_at DATE,
  source_type TEXT,
  notes TEXT
);

CREATE TABLE IF NOT EXISTS site_sources (
  site_id UUID NOT NULL REFERENCES atlas_sites(id) ON DELETE CASCADE,
  source_id UUID NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
  supports TEXT,
  PRIMARY KEY (site_id, source_id)
);
