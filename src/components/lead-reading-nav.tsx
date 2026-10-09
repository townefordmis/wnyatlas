"use client";

import { useEffect, useRef } from "react";
import styles from "@/app/research/lead/lead.module.css";

const groups = [
  { title: "Know the hazard", links: [["history", "Knowledge and use"], ["children", "Children and lead"], ["one-house", "Household pathways"]] },
  { title: "Paint and homes", links: [["housing", "Existing paint"], ["inspections", "Rental inspections"], ["landlords", "Enforcement"], ["public-housing", "Public housing"], ["justice", "Unequal burdens"]] },
  { title: "Water and soil", links: [["water", "Service lines"], ["gasoline", "Gasoline and soil"], ["garden", "Gardens and farms"]] },
  { title: "Industry and cleanup", links: [["paint-industry", "Elk Street pigment"], ["other-paint", "Pratt & Lambert"], ["industrial-sites", "Property directory"], ["places", "Other investigations"], ["historical-sites", "Historical leads"]] },
  { title: "Explore the record", links: [["timeline", "Timeline"], ["map", "Map"], ["visual-record", "Compare documents"], ["evidence", "Sources and gaps"]] },
];

export function LeadReadingNav() {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const revealTarget = (hash = window.location.hash) => {
      let id: string;
      try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (!target) return;
      let node: HTMLElement | null = target;
      while (node) {
        if (node instanceof HTMLDetailsElement) node.open = true;
        node = node.parentElement;
      }
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    };
    revealTarget();
    const handleHashChange = () => revealTarget();
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      const href = link?.getAttribute("href");
      if (href?.startsWith("#")) revealTarget(href);
    };
    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return <nav className={styles.readingNav} aria-label="On this page">
    <details ref={menu}>
      <summary>Jump to a section <span>Homes · Water · Industry · Policy · Sources</span></summary>
      <div className={styles.navGroups}>{groups.map(group => <div key={group.title}><strong>{group.title}</strong>{group.links.map(([id, label]) => <a href={`#${id}`} key={id} onClick={() => { if (menu.current) menu.current.open = false; }}>{label}</a>)}</div>)}</div>
    </details>
  </nav>;
}
