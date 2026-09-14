export type ResearchNavItem = { href: `#${string}`; label: string };
export function ResearchSectionNav({ items }: { items: ResearchNavItem[] }) {
  return <nav className="research-section-nav" aria-label="On this page"><strong>On this page</strong>{items.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>;
}
