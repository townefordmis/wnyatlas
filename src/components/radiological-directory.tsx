"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type RadiologicalDirectoryEntry = {
  name: string;
  href: string;
  location: string;
  description: string;
};

export function RadiologicalDirectory({ entries }: { entries: RadiologicalDirectoryEntry[] }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const revealTarget = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (!target) return;
      let parent: HTMLElement | null = target;
      while (parent) {
        if (parent instanceof HTMLDetailsElement) parent.open = true;
        parent = parent.parentElement;
      }
      target.scrollIntoView();
    };
    revealTarget();
    window.addEventListener("hashchange", revealTarget);
    return () => window.removeEventListener("hashchange", revealTarget);
  }, []);
  const filtered = entries.filter((entry) =>
    `${entry.name} ${entry.location} ${entry.description}`.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const groups = Object.groupBy(filtered, (entry) => entry.name.charAt(0).toUpperCase());

  return (
    <section className="places-index radiological-directory" aria-labelledby="radiological-directory-title">
      <div className="places-index-heading">
        <div><p className="eyebrow">Places & research</p><h1 id="radiological-directory-title">Radiological places</h1></div>
        <p>Find a place, read its story, and follow the evidence. This collection includes industrial history, completed cleanups and unresolved investigations. Inclusion does not mean a place presents a current radiation risk.</p>
      </div>
      <nav className="radiological-directory-tools" aria-label="Radiological research tools">
        <Link className="radiological-news-button" href="/research/radiological/news">Latest radiological news →</Link>
        <Link className="radiological-news-button" href="/research/radiological/1979-pine-bowl-dossier">Pine Bowl / bowling alley →</Link>
        <a href="#radiological-map">Explore the map →</a>
        <a href="#current-status">Investigation updates →</a>
        <a href="#radiological-archive">Browse source documents →</a>
        <Link href="/places">All Atlas places →</Link>
      </nav>
      <label className="radiological-directory-search">Search places and research
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Linde, Niagara, uranium or slag" />
      </label>
      <p role="status">{filtered.length} of {entries.length} records</p>
      <nav className="places-alphabet" aria-label="Radiological index letters">
        {Object.keys(groups).map((letter) => <a key={letter} href={`#radiological-letter-${letter}`}>{letter}</a>)}
      </nav>
      {filtered.length === 0 && <p>No matching records. Try another place or topic, or <button type="button" onClick={() => setQuery("")}>clear your search</button>.</p>}
      <div className="places-groups">
        {Object.entries(groups).map(([letter, records]) => (
          <section key={letter} id={`radiological-letter-${letter}`}>
            <h2>{letter}</h2><div>{records?.map((entry) => (
              <Link key={entry.href} href={entry.href}><strong>{entry.name}</strong><span>{entry.location}</span><p>{entry.description}</p></Link>
            ))}</div>
          </section>
        ))}
      </div>
    </section>
  );
}
