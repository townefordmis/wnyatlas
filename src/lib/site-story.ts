import type { AtlasSite } from "@/types/site";

const categoryContext: Record<AtlasSite["category"], string> = {
  industry:
    "This entry connects the site's industrial history to the environmental record left by production, material handling, closure, cleanup, or reuse.",
  cleanup:
    "This entry follows a documented cleanup site through investigation, remedy selection, construction, monitoring, and reuse where the public record supports those stages.",
  radiological:
    "This entry separates documented radiological work, material movement, investigation, and cleanup from claims that the available record does not establish.",
  waterway:
    "This entry treats the waterway as both a geographic system and a historical record of documented discharges, sediment management, restoration, and public use.",
  pfas:
    "This entry tracks an emerging contaminant investigation. Findings, boundaries, exposure conclusions, and remedy decisions may change as agencies publish new results.",
};

const evidenceContext: Record<AtlasSite["evidenceStatus"], string> = {
  "well-documented":
    "The founding entry is supported by government records or other primary institutional sources. Additional documents may refine dates, boundaries, quantities, and present-day controls.",
  "research-in-progress":
    "The location and core issue are documented, but the atlas is still assembling a fuller chronology and the most current cleanup or monitoring record.",
  "research-lead":
    "This is a documented research lead, not a completed interpretation. It remains labeled as such until stronger primary evidence supports a fuller account.",
};

export function getSiteStory(site: AtlasSite) {
  return {
    background: site.story?.background ?? [site.summary],
    timeline: site.story?.timeline ?? [],
    documentedImpacts: site.story?.documentedImpacts ?? [],
    cleanupAndControls: site.story?.cleanupAndControls ?? [],
    presentDay: site.story?.presentDay ?? [],
    researchNotes: site.story?.researchNotes ?? [],
    lastReviewed: site.story?.lastReviewed,
    categoryContext: categoryContext[site.category],
    evidenceContext: evidenceContext[site.evidenceStatus],
  };
}
