"use client";

const mailbox = ["robert", "129999"].join("");
const domain = ["yahoo", "com"].join(".");

export function MaskedContactEmail() {
  function openEmail() {
    const subject = encodeURIComponent("WNYAtlas suggestion or correction");
    window.location.href = `mailto:${mailbox}@${domain}?subject=${subject}`;
  }

  return (
    <button type="button" className="masked-contact-email" onClick={openEmail}>
      <span>Email suggestions, corrections, or research leads</span>
      <strong>robert129999 <i>[at]</i> yahoo <i>[dot]</i> com</strong>
    </button>
  );
}
