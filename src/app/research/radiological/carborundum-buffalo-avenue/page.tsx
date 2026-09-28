import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { EvidenceStatusBadge } from "@/components/evidence-status-badge";

export const metadata: Metadata = {
  title: "Carborundum Buffalo Avenue — Nuclear Fuel Research",
  description: "Building 1 nuclear-fuel research, the Globar location correction, and unresolved demolition and waste records.",
  alternates: { canonical: "/research/radiological/carborundum-buffalo-avenue" },
};

export default function CarborundumBuffaloAvenuePage() {
  return <main className="index-page"><SiteHeader /><article className="radiological-subpage">
    <Link href="/research/radiological-industry-fill">← Radiological investigation hub</Link>
    <header><EvidenceStatusBadge status="documented" /><p className="eyebrow">Historic operation · reviewed September 28, 2026</p>
      <h1>Carborundum Buffalo Avenue — Nuclear Fuel Research</h1>
      <p>NIOSH locates the 1959–1967 uranium and plutonium fuel work in Buffalo Avenue Building 1, separate from the Hyde Park Boulevard Globar plant.</p>
    </header>
    <section><h2>The research building and two operational periods</h2>
      <p>Building 1 opened in 1953, with four stories and more than 60,000 square feet. Its fourth-floor Central Laboratory housed a ventilated plutonium facility with six gloveboxes. This was experimental nuclear-fuel work; the facility description does not establish an off-site release.</p>
      <p>The location of Carborundum’s smaller 1943 uranium-grinding experiment remains unresolved between Buffalo Avenue and Globar. The 2026 presentation also distinguishes the covered 1959–1967 period from broader Building 1 work dates of 1957–1968.</p>
      <p><a href="https://www.cdc.gov/niosh/ocas/pdfs/abrwh/pres/2026/dc-carborundum-status-061626-508.pdf">NIOSH June 2026 presentation, slides 8–13 ↗</a> · <a href="https://www.cdc.gov/niosh/ocas/pdfs/tbd/carbco-r0-508.pdf">2020 site profile ↗</a></p>
    </section>
    <section><h2>The decontamination record</h2>
      <p>The November 2017 HHS determination states that NIOSH did not find evidence of decontamination after the atomic-weapons-employer operational periods, and therefore evaluated residual exposure periods. This is a records finding, not proof that no cleanup occurred or that contamination exists today.</p>
      <p>HHS declined to add the petitioned employee class to the Special Exposure Cohort because doses could be reconstructed with sufficient accuracy. That compensation decision is not environmental clearance; qualifying claims could still proceed through dose reconstruction.</p>
      <a href="https://www.cdc.gov/niosh/ocas/pdfs/sec/carbco/carbcohhsdet-223-508.pdf">HHS determination, sections IV–V ↗</a>
    </section>
    <section><h2>Nash Road: company named, material unresolved</h2>
      <p>DEC names Carborundum among multiple users of <Link href="/sites/niagara-sanitation-nash-road-landfill">Niagara Sanitation / Nash Road Landfill</Link>. Its notice does not identify Building 1 as the origin or establish uranium/plutonium waste disposal.</p>
      <a href="https://extapps.dec.ny.gov/data/der/factsheet/932054class2.pdf">DEC’s 2015 landfill notice ↗</a>
    </section>
    <section><h2>Records still needed</h2>
      <ul>
        <li>Verify Building 1’s footprint against campus plans before assigning coordinates. Nearby historical survey anomalies are not a Building 1 location or source attribution.</li>
        <li>Check the proposed 1993 demolition-film lead against permits, building numbers, pre-demolition surveys, release documents and disposal manifests.</li>
        <li>Recover 1943 work orders and later fuel-program material and waste ledgers.</li>
        <li>Research Building 82 (DEC 932048B), the Walmore Road abrasives landfill (932007) and Globar (932036) separately; common ownership does not establish a common radioactive-waste stream.</li>
      </ul>
      <p>No precise Building 1 map pin is assigned while the footprint remains unverified.</p>
    </section>
    <section><h2>Related histories</h2><p><Link href="/sites/carborundum-globar-site">Globar’s solvent cleanup</Link> is a distinct property record. <Link href="/sites/bethlehem-steel">Bethlehem Steel</Link> and <Link href="/sites/bliss-laughlin-steel">Bliss &amp; Laughlin</Link> document parallel regional uranium operations; these links assert no shipments between them and Carborundum.</p></section>
  </article></main>;
}

