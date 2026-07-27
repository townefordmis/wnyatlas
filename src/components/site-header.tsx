"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

import { featuredSites } from "@/data/featured-sites";

const MAX_RESULTS = 6;

export function SiteHeader() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];

    return featuredSites
      .filter((site) =>
        [site.name, site.municipality, site.county, site.summary].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        ),
      )
      .slice(0, MAX_RESULTS);
  }, [query]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (results[0]) {
      router.push(`/sites/${results[0].id}`);
      setIsFocused(false);
    }
  }

  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="WNYAtlas home">
        <span className="brand-mark">WNY</span>
        <span>ATLAS</span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#map">Map</a>
        <a href="#mission">Mission</a>
        <a href="#sites">Sites</a>
        <Link href="/enforcement">Enforcement</Link>
        <a href="#about">About</a>
      </nav>

      <div className="header-tools">
        <form className="header-search" role="search" onSubmit={submitSearch}>
          <label className="visually-hidden" htmlFor="site-search">
            Search the atlas
          </label>
          <input
            id="site-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => window.setTimeout(() => setIsFocused(false), 120)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setIsFocused(false);
            }}
            placeholder="Search the atlas"
            autoComplete="off"
          />
          <button type="submit" disabled={results.length === 0}>
            Search
          </button>

          {isFocused && query.trim() && (
            <div className="header-search-results" aria-live="polite">
              {results.length > 0 ? (
                results.map((site) => (
                  <Link key={site.id} href={`/sites/${site.id}`}>
                    {site.image && (
                      <Image
                        src={site.image.src}
                        alt=""
                        aria-hidden="true"
                        width={72}
                        height={72}
                      />
                    )}
                    <strong>{site.name}</strong>
                    <span>
                      {site.municipality} · {site.county} County
                    </span>
                  </Link>
                ))
              ) : (
                <p>No matching places found.</p>
              )}
            </div>
          )}
        </form>
        <span className="edition">Founding edition · 2026</span>
      </div>
    </header>
  );
}
