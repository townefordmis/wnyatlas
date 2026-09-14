export type EvidenceBadgeStatus = "documented" | "research-in-progress" | "research-lead" | "active-government-investigation";

const labels: Record<EvidenceBadgeStatus, string> = {
  documented: "Documented",
  "research-in-progress": "Research in progress",
  "research-lead": "Research lead",
  "active-government-investigation": "Active government investigation",
};

export function EvidenceStatusBadge({ status, detail }: { status: EvidenceBadgeStatus; detail?: string }) {
  return <span className={`shared-evidence-badge is-${status}`} title={detail}>{labels[status]}{detail ? ` · ${detail}` : ""}</span>;
}
