import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { storeShelvesEvidence, storeShelvesTopics } from "@/data/store-shelves";
import { groceryEvidenceLabels, groceryInvestigations } from "@/data/store-shelves-investigations";
import { StoreShelvesRegister } from "@/components/store-shelves-register";
import styles from "./shelves.module.css";

export const metadata: Metadata = {
  title: "Pollution on Store Shelves",
  description: "A WNY Atlas investigation into food, beverages, packaging, cookware and household chemicals, with findings separated from open research questions.",
  alternates: { canonical: "/research/pollution-on-store-shelves" },
};

export default function StoreShelvesPage() {
  return <main className={styles.page}>
    <SiteHeader />
    <section className={styles.hero}>
      <p className="eyebrow">Western New York · Consumer exposure</p>
      <h1>Pollution on Store Shelves</h1>
      <p className={styles.dek}>What are we bringing into our homes, and what does the evidence say?</p>
      <p>Food, drinks, packaging and household cleaners connect everyday purchases to agriculture, manufacturing and waste. This investigation follows scientific studies, original testing, government records and court documents to examine those connections.</p>
      <p className={styles.reviewed}>Source review · November 24, 2026. Explore {groceryInvestigations.length} records spanning government findings, court decisions, private legal notices and unresolved leads. Local product availability and laboratory details remain unknown where not verified.</p>
      <nav className={styles.nav} aria-label="Store Shelves topics">
        <a href="#investigations">Search investigations</a>
        {storeShelvesTopics.map(topic => <a key={topic.id} href={`#${topic.id}`}>{topic.title}</a>)}
        <Link href="/research/pollution-on-store-shelves/teflon-legacy">The Teflon Legacy</Link>
      </nav>
    </section>
    <section className={styles.feature} aria-labelledby="teflon-feature">
      <p>Processing, packaging & food preparation · First source review</p>
      <h2 id="teflon-feature">The Teflon Legacy</h2>
      <p>Forever chemicals in the kitchen: PFOA history, modern PTFE coatings, overheating and the evidence needed to evaluate older cookware.</p>
      <Link href="/research/pollution-on-store-shelves/teflon-legacy">Read the investigation</Link>
    </section>
    <section className={styles.section} id="investigations">
      <p className="eyebrow">Products, companies & original records</p>
      <h2>Follow a finding back to its evidence.</h2>
      <p>Filter by product, chemical, retailer, manufacturer or evidence. The register includes a recalled applesauce enforcement action, a chocolate disclosure judgment, strawberry allegations and California warning notices. They answer different questions.</p>
      <StoreShelvesRegister records={groceryInvestigations} />
    </section>
    <section className={styles.section} id="evidence">
      <h2>Every finding needs a scope.</h2>
      <div className={styles.grid}>{storeShelvesEvidence.map(item => <article key={item.label}><h3>{item.label}</h3><p>{item.description}</p></article>)}</div>
      <p>The register uses more specific labels so a filed complaint, a settlement, a judgment, a private notice and a laboratory finding remain distinguishable. A record may carry more than one label; none automatically establishes the others.</p>
      <ul>{Object.values(groceryEvidenceLabels).map(label => <li key={label}>{label}</li>)}</ul>
    </section>
    <section className={styles.section} id="mycotoxins">
      <p className="eyebrow">Chemical guide · Findings require product-specific testing</p>
      <h2>Aflatoxins and ochratoxin A</h2>
      <p>These are toxins produced by moulds. WHO identifies aflatoxins in crops including nuts and cereals, with liver toxicity and evidence of human liver cancer. For ochratoxin A, animal kidney toxicity and kidney cancer evidence are clearer than the human cancer association. A toxin’s hazard does not establish its presence, dose or health effect in a named grocery product.</p>
      <p><a href="https://www.who.int/news-room/fact-sheets/detail/mycotoxins">WHO mycotoxins fact sheet</a></p>
    </section>
    {storeShelvesTopics.map(topic => <section className={styles.section} id={topic.id} key={topic.id}>
      <span className={styles.status}>{topic.status}</span>
      <h2>{topic.title}</h2><h3>{topic.question}</h3>
      <p>{topic.scope}</p><p><strong>Next evidence to obtain:</strong> {topic.next}</p>
      {topic.id === "processing" && <p><Link href="/research/pollution-on-store-shelves/teflon-legacy">Explore the Teflon cookware feature</Link></p>}
    </section>)}
    <section className={styles.section} id="western-new-york">
      <h2>Follow the product into Western New York.</h2>
      <p>The reporting scope includes products sold at Wegmans, Tops, Aldi, Walmart, Trader Joe’s, Whole Foods, Dollar Tree, Target and other regional grocery retailers, wherever those products originate. Naming a retailer defines the investigation’s scope; it does not establish a product finding or current stock.</p>
      <p>Each product investigation should identify the store and location, observation date, exact product and lot, supplier or grower, original test and method, and the route by which the product reaches local consumers. Regional distribution, local agriculture or manufacturing can also establish the connection.</p>
      <p>Food preparation includes older and modern cookware. Toys, furniture and unrelated general merchandise are outside this project.</p>
      <p><Link href="/methodology">Read the Atlas evidence standard</Link></p>
    </section>
  </main>;
}
