import { MaskedContactEmail } from "@/components/masked-contact-email";

export function SiteContactFooter() {
  return (
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
  );
}
