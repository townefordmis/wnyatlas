"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { chemicalProfiles } from "@/data/chemicals";

export function ChemicalDirectory() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      chemicalProfiles.filter((chemical) =>
        [
          chemical.name,
          chemical.family,
          chemical.overview,
          ...chemical.aliases,
        ].some((value) => value.toLowerCase().includes(normalizedQuery)),
      ),
    [normalizedQuery],
  );

  return (
    <>
      <label className="chemical-search">
        <span>Search chemicals, abbreviations, or uses</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try PFAS, benzene, solvent, metal..."
        />
      </label>
      <p className="chemical-result-count" aria-live="polite">
        {results.length} of {chemicalProfiles.length} profiles
      </p>
      <div className="chemical-directory">
        {results.map((chemical) => (
          <article key={chemical.id}>
            <p>{chemical.family}</p>
            <h2>
              <Link href={`/chemicals/${chemical.id}`}>{chemical.name}</Link>
            </h2>
            {chemical.aliases.length > 0 && (
              <p className="chemical-aliases">
                Also known as {chemical.aliases.join(", ")}
              </p>
            )}
            <p>{chemical.overview}</p>
            <Link className="chemical-profile-link" href={`/chemicals/${chemical.id}`}>
              Read exposure and effects profile →
            </Link>
          </article>
        ))}
      </div>
      {results.length === 0 && (
        <p className="chemical-empty">
          No profile matches that search. The guide will expand as additional
          chemicals are documented in atlas records.
        </p>
      )}
    </>
  );
}
