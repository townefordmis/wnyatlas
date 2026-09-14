"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const eligible = pathname.startsWith("/sites/") || pathname.startsWith("/research/") || pathname.startsWith("/trails/");

  useEffect(() => {
    if (!eligible) return;
    const update = () => setVisible(window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [eligible]);

  if (!eligible || !visible) return null;
  return <button className="back-to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}><span aria-hidden="true">↑</span><span>Back to top</span></button>;
}
