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
    </footer>
  );
}
