import Link from "next/link";

import { MaskedContactEmail } from "@/components/masked-contact-email";

const exploreLinks = [
  { href: "/#map", title: "Regional map", description: "Explore documented places across Western New York." },
  { href: "/places", title: "All places", description: "Browse the complete A–Z research collection." },
  { href: "/chemicals", title: "Chemical guide", description: "Separate hazard, detection, exposure, and risk." },
  { href: "/research/schools-industrial-sites", title: "Schools", description: "Review documented property and nearby-site connections." },
  { href: "/research/former-waterways", title: "Changed waters", description: "Follow filled wetlands, altered channels, and reclaimed shores." },
  { href: "/research/radiological-industry-fill", title: "Radiological history", description: "Trace production, storage, surveys, fill, and remediation." },
  { href: "/health", title: "Public Health Atlas", description: "Compare official statistics with visible limitations." },
  { href: "/enforcement", title: "Enforcement", description: "Read major documented penalties and settlements." },
];

export function SiteContactFooter() {
  return (
    <>
      <section className="atlas-explore-footer" aria-labelledby="atlas-explore-title">
        <div>
          <p className="eyebrow">Continue exploring</p>
          <h2 id="atlas-explore-title">Follow another evidence trail.</h2>
          <p>Move between places, materials, landscape history, public data, and government records without losing the wider regional story.</p>
        </div>
        <nav aria-label="Explore WNYAtlas sections">
          {exploreLinks.map((item, index) => (
            <Link href={item.href} key={item.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </Link>
          ))}
        </nav>
      </section>

      <footer className="site-contact-footer" aria-label="Contact WNYAtlas">
        <div>
          <p className="eyebrow">Help strengthen the record</p>
          <strong>Have a correction, document, photograph, or place we should research?</strong>
          <p>Please include the location and a source when possible. Submissions are reviewed before anything is added to the Atlas.</p>
        </div>
        <MaskedContactEmail />
        <div className="site-ai-disclosure">
          <strong>Research transparency</strong>
          <p>
            WNYAtlas is human-directed and human-structured. AI tools assist with locating, organizing, and summarizing research, and they can make mistakes. Readers should follow the cited sources before relying on a claim. This is a living public-history project: documented corrections and stronger evidence are welcomed and incorporated as the Atlas continues to improve.
          </p>
        </div>
      </footer>
    </>
  );
}
