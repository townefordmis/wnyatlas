"use client";

const mailbox = ["research"].join("");
const domain = ["wnyatlas", "com"].join(".");

export function MaskedContactEmail() {
  function openEmail() {
    const subject = encodeURIComponent("WNYAtlas suggestion or correction");
    window.location.href = `mailto:${mailbox}@${domain}?subject=${subject}`;
  }

  return (
    <button type="button" className="masked-contact-email" onClick={openEmail}>
      <span>Email suggestions, corrections, or research leads</span>
      <strong>research <i>[at]</i> wnyatlas <i>[dot]</i> com</strong>
    </button>
  );
}
