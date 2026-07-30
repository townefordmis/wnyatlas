"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

import { featuredSites } from "@/data/featured-sites";

const MAX_RESULTS = 6;

export function SiteHeader() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false);
    }
  }

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsMenuOpen(false);
      }}
    >
      <Link className="brand" href="/" aria-label="WNYAtlas home">
        <span className="brand-mark">WNY</span>
        <span>ATLAS</span>
      </Link>

      <nav
        id="main-navigation"
        className={`main-nav${isMenuOpen ? " is-open" : ""}`}
        aria-label="Main navigation"
      >
        <Link href="/#map" onClick={() => setIsMenuOpen(false)}>
          Map
        </Link>
        <Link href="/places" onClick={() => setIsMenuOpen(false)}>
          Places
        </Link>
        <Link
          href="/research/schools-industrial-sites"
          onClick={() => setIsMenuOpen(false)}
        >
          Schools
        </Link>
        <Link
          href="/research/former-waterways"
          onClick={() => setIsMenuOpen(false)}
        >
          Waterways
        </Link>
        <Link
          href="/risks/airborne-exposure"
          onClick={() => setIsMenuOpen(false)}
        >
          Airborne risks
        </Link>
        <Link href="/enforcement" onClick={() => setIsMenuOpen(false)}>
          Enforcement
        </Link>
        <Link href="/#mission" onClick={() => setIsMenuOpen(false)}>
          Mission
        </Link>
        <Link href="/#about" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
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
            onFocus={() => {
              setIsFocused(true);
              setIsMenuOpen(false);
            }}
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

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => {
          setIsFocused(false);
          setIsMenuOpen((value) => !value);
        }}
      >
        <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
        {isMenuOpen ? "Close" : "Menu"}
      </button>
    </header>
  );
}
