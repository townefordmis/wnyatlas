import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { teflonSources as sources } from "@/data/store-shelves";
import styles from "../shelves.module.css";

export const metadata: Metadata = {
  title: "The Teflon Legacy: PFOA, PTFE and Cookware",
  description: "An initial source review distinguishing PFOA manufacturing history, health evidence, PTFE cookware and overheating, with product-specific questions left open.",
  alternates: { canonical: "/research/pollution-on-store-shelves/teflon-legacy" },
};

function Source({ source }: { source: { title: string; url: string } }) {
  return <p><a href={source.url}>{source.title}</a></p>;
}

export default function TeflonLegacyPage() {
  return <main className={styles.page}>
    <SiteHeader />
    <section className={styles.hero}>
      <p className="eyebrow">Pollution on Store Shelves · Processing & food preparation</p>
      <h1>The Teflon Legacy</h1>
      <p className={styles.dek}>Forever chemicals in the kitchen</p>
      <p>A history of PFOA manufacturing, the evidence about modern nonstick coatings, and the questions that remain for a particular pan.</p>
      <p className={styles.reviewed}>Initial source review · November 24, 2026 · No individual cookware model tested by WNY Atlas</p>
      <Link href="/research/pollution-on-store-shelves">Explore Pollution on Store Shelves</Link>
    </section>
    <section className={styles.section}>
      <span className={styles.status}>Established · chemical and use distinction</span>
      <h2>The manufacturing chemical and the finished coating</h2>
      <p>PFOA, also known as C8, was used as an industrial processing aid. PTFE is the polymer used in many nonstick coatings. EPA’s PFOA phaseout record and FDA’s assessment of polymer coatings address different materials and exposure questions.</p>
      <p>FDA describes cookware coatings as large polymer molecules bonded to the surface during high-temperature manufacture, with negligible quantities capable of migrating into food under the evaluated use. That general assessment does not certify a specific old pan or an unidentified coating.</p>
      <Source source={sources.phaseout} /><Source source={sources.fda} />
    </section>
    <section className={styles.section}>
      <span className={styles.status}>Established · dated government records</span>
      <h2>The PFOA record</h2>
      <div className={styles.tableWrap}><table className={styles.table}>
        <thead><tr><th scope="col">Date</th><th scope="col">Documented milestone</th><th scope="col">Evidence limit</th></tr></thead>
        <tbody>
          <tr><th scope="row">2005</th><td>DuPont’s EPA consent agreement provided for a $10.25 million civil penalty to settle alleged violations.</td><td>The agreement states that DuPont did not admit liability. It does not establish harm from a household pan. <a href={sources.settlement.url}>Consent agreement</a></td></tr>
          <tr><th scope="row">2006–2015</th><td>EPA launched a voluntary program with eight companies, seeking a 95% reduction in PFOA emissions and product content by 2010 and elimination by 2015.</td><td>A program milestone is not a manufacturing certificate for every cookware product, country or production date. <a href={sources.phaseout.url}>EPA program record</a></td></tr>
          <tr><th scope="row">2023</th><td>IARC classified PFOA as carcinogenic to humans, Group 1; PFOS was classified as possibly carcinogenic, Group 2B.</td><td>Hazard classification does not quantify exposure or the risk from a particular cookware product. <a href={sources.cancer.url}>IARC evaluation</a></td></tr>
        </tbody>
      </table></div>
    </section>
    <section className={styles.section}>
      <span className={styles.status}>Established · health hazard; product exposure unresolved</span>
      <h2>What the cancer finding establishes</h2>
      <p>IARC’s PFOA evaluation draws on animal, mechanistic and human evidence; it describes limited human evidence for kidney and testicular cancer. It evaluates PFOA’s capacity to cause cancer, rather than showing that ordinary use of PTFE cookware causes those cancers.</p>
      <p>Manufacturing-worker and contaminated-community exposure histories require their own records. Neither can be transferred to a Western New York household without evidence about the substance, exposure route and dose.</p>
      <Source source={sources.cancer} />
    </section>
    <section className={styles.section}>
      <span className={styles.status}>Established · use conditions matter</span>
      <h2>Overheating and damaged coatings</h2>
      <p>Germany’s Federal Institute for Risk Assessment (BfR) warns that strongly heating empty PTFE cookware can produce hazardous gases at around 360°C, approximately 680°F. This is a hazard condition, not a recommended cooking temperature. Follow the product’s instructions and avoid heating an empty coated pan.</p>
      <p>BfR does not expect adverse health effects from proper use without overheating. It also states that accidentally swallowed small PTFE particles from scratches are not expected to harm health because they are not digested. That assessment does not identify other materials in an unknown, badly deteriorated or counterfeit product.</p>
      <Source source={sources.bfr} />
    </section>
    <section className={styles.section}>
      <span className={styles.status}>Research lead · product verification needed</span>
      <h2>Older pans, modern labels and alternatives</h2>
      <p>A PFOA-free claim concerns one substance; it does not by itself identify the full coating. Record a pan’s maker, model, manufacturing period, coating and use instructions before drawing a conclusion. Age alone does not establish a measured exposure.</p>
      <p>The next comparison will cover PTFE, ceramic-coated cookware, stainless steel, cast iron and carbon steel using manufacturer documentation and comparable migration or use-condition testing. No material or brand receives a blanket safety ranking here.</p>
      <p>For Western New York, obtain dated local listings or store observations, packaging claims and any original product-testing reports. No current local inventory or product-specific contamination finding has been verified for this feature.</p>
    </section>
    <section className={styles.section}>
      <h2>Source register</h2>
      <ul className={styles.sources}>{Object.values(sources).map(source => <li key={source.url}><a href={source.url}>{source.title}</a></li>)}</ul>
      <p>Future litigation entries will distinguish complaints, evidence, rulings and settlements. The 2005 agreement above is a historical regulatory record; it is not a tracker of every active PFAS case.</p>
    </section>
  </main>;
}
