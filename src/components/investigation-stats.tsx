export type InvestigationStat = { value: string; label: string; asOfDate: string; stage: string };
export function InvestigationStats({ stats }: { stats: InvestigationStat[] }) {
  return <div className="investigation-stats" aria-label="Investigation pipeline statistics">{stats.map((stat) => <article key={`${stat.stage}-${stat.label}`}><span>{stat.stage}</span><strong>{stat.value}</strong><p>{stat.label}</p><small>As of {stat.asOfDate}</small></article>)}</div>;
}
