"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

import { chemicalProfiles } from "@/data/chemicals";
import { featuredSites } from "@/data/featured-sites";
import { healthSearchCounties, healthSearchTopics } from "@/data/health-search-catalog";
import { getPublicSiteName } from "@/lib/site-name";

const MAX_RESULTS = 6;

const navigationItems = [
  { href: "/#map", label: "Map", match: "home" },
  { href: "/places", label: "Places", match: "places" },
  { href: "/chemicals", label: "Chemicals", match: "/chemicals" },
  { href: "/research/schools-industrial-sites", label: "Schools", match: "/research/schools-industrial-sites" },
  { href: "/research/former-waterways", label: "Waterways", match: "/research/former-waterways" },
  { href: "/research/radiological-industry-fill", label: "Radiological", match: "/research/radiological-industry-fill" },
  { href: "/risks/airborne-exposure", label: "Airborne risks", match: "/risks/airborne-exposure" },
  { href: "/health", label: "Health", match: "/health" },
  { href: "/enforcement", label: "Enforcement", match: "/enforcement" },
  { href: "/#mission", label: "Mission", match: "" },
  { href: "/#about", label: "About", match: "" },
];

export function SiteHeader() {
  const router = useRouter();
  const pathname = usePathname();
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
        name: getPublicSiteName(site.name),
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
    const healthResults = healthSearchTopics
      .filter((topic) => topic.some((value) => value.toLowerCase().includes(normalizedQuery)))
      .map(([slug, title]) => ({ id: `health-${slug}`, href: `/health/${slug}`, name: title, detail: "Public Health Atlas", image: undefined }));
    const countyHealthResults = healthSearchCounties
      .filter((county) => `${county} county health`.toLowerCase().includes(normalizedQuery))
      .map((county) => ({ id: `health-county-${county}`, href: `/health/county/${county.toLowerCase()}`, name: `${county} County health profile`, detail: "Public Health Atlas · County profile", image: undefined }));
    return [...healthResults, ...countyHealthResults, ...chemicalResults, ...placeResults].slice(0, MAX_RESULTS);
  }, [query]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (results[0]) {
      router.push(results[0].href);
      setIsFocused(false);
      setIsMenuOpen(false);
    }
  }

  function isCurrentSection(match: string) {
    if (match === "home") return pathname === "/";
    if (match === "places") return pathname === "/places" || pathname.startsWith("/sites/");
    return Boolean(match && (pathname === match || pathname.startsWith(`${match}/`)));
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
        {navigationItems.map((item) => {
          const isCurrent = isCurrentSection(item.match);
          return (
            <Link
              className={isCurrent ? "is-active" : undefined}
              href={item.href}
              aria-current={isCurrent ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
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
