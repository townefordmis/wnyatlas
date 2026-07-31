"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

import { chemicalProfiles } from "@/data/chemicals";
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

    const placeResults = featuredSites
      .filter((site) =>
        [site.name, site.municipality, site.county, site.summary].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        ),
      )
      .map((site) => ({
        id: `place-${site.id}`,
        href: `/sites/${site.id}`,
        name: site.name,
        detail: `${site.municipality} · ${site.county} County`,
        image: site.image,
      }));
    const chemicalResults = chemicalProfiles
      .filter((chemical) =>
        [
          chemical.name,
          chemical.family,
          chemical.overview,
          ...chemical.aliases,
        ].some((value) => value.toLowerCase().includes(normalizedQuery)),
      )
      .map((chemical) => ({
        id: `chemical-${chemical.id}`,
        href: `/chemicals/${chemical.id}`,
        name: chemical.name,
        detail: `Chemical guide · ${chemical.family}`,
        image: undefined,
      }));

    return [...chemicalResults, ...placeResults].slice(0, MAX_RESULTS);
  }, [query]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (results[0]) {
      router.push(results[0].href);
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
        <Link href="/chemicals" onClick={() => setIsMenuOpen(false)}>
          Chemicals
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
          href="/research/radiological-industry-fill"
          onClick={() => setIsMenuOpen(false)}
        >
          Radiological
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
                results.map((result) => (
                  <Link key={result.id} href={result.href}>
                    {result.image && (
                      <Image
                        src={result.image.src}
                        alt=""
                        aria-hidden="true"
                        width={72}
                        height={72}
                      />
                    )}
                    <strong>{result.name}</strong>
                    <span>{result.detail}</span>
                  </Link>
                ))
              ) : (
                <p>No matching places or chemicals found.</p>
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
