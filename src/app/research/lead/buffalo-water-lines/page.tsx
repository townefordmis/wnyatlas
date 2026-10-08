import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ResearchSectionNav } from "@/components/research-section-nav";
import { buffaloLineInventory, buffaloReplacementMilestones, buffaloWaterSources as sources } from "@/data/buffalo-lead-water";
import styles from "../lead.module.css";

export const metadata: Metadata = {
  title: "Buffalo’s Lead Water Lines: Progress and the Work Ahead",
  description: "Buffalo's water-system history, dated lead-line inventory, replacement progress, funding setbacks, and what lead exposure means for children's development.",
  alternates: { canonical: "/research/lead/buffalo-water-lines" },
  openGraph: { type: "article", url: "/research/lead/buffalo-water-lines", title: "Buffalo’s Lead Water Lines | WNYAtlas", description: "Real replacement progress, tens of thousands of unresolved lines, and the work ahead." },
};

function Source({ source }: { source: { label: string; url: string } }) {
  return <a className={styles.source} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>;
}

export default function BuffaloWaterLinesPage() {
  return <main>
    <SiteHeader />
    <header className={styles.hero}>
      <p className="eyebrow">Buffalo · Water infrastructure · Lead investigation</p>
      <h1>Buffalo’s lead water lines</h1>
      <p className={styles.dek}>Replacement is making headway. The work ahead is still substantial.</p>
      <p>Buffalo has removed lead service lines from hundreds of homes through a documented program expansion. Yet the state’s published inventory still lists 33,600 lead lines and 35,372 lines of unknown material. Progress is real; so are the scale of the remaining work and uncertainty over who can get help.</p>
      <p className={styles.reviewed}>Sources checked October 7, 2026 · Inventory certified December 11, 2025 · Milestones dated below</p>
      <Source source={sources.inventory} /><Source source={sources.recovery} />
      <aside className={styles.caution}><strong>A pipe inventory is not a water test.</strong><p>These numbers classify service-line material. They do not count exposed children, establish lead levels at every tap, or provide a live tally of replacements completed since certification.</p></aside>
    </header>
    <ResearchSectionNav items={[{ href: "#history", label: "History" }, { href: "#remaining", label: "Remaining lines" }, { href: "#progress", label: "Progress and setbacks" }, { href: "#children", label: "Children's development" }, { href: "#home", label: "Check your home" }]} />
    <div className={styles.content}>
      <section id="history" className={styles.section}>
        <p className="eyebrow">The infrastructure we inherited</p>
        <h2>A modern treatment plant can still feed an old pipe.</h2>
        <p>Buffalo Water traces the system’s beginnings to 1827, when well and spring water traveled through wooden pipes. A second company began pumping Niagara River water in 1852; the city bought both companies in 1868. The Lake Erie intake followed in 1913, chlorination in 1914, and a treatment plant using coagulation, filtration and disinfection in 1926.</p>
        <Source source={sources.history} />
        <p>Why did lead remain in water systems? A historical study in the American Journal of Public Health describes engineers’ preference for its durability and practical advantages, industry promotion, and disagreement over the danger even as medical evidence accumulated. That is a national history explaining how the material persisted; it does not establish Buffalo’s installation practices at a particular address.</p>
        <Source source={sources.pipeHistory} />
        <p>Those milestones describe the growth of the water system, not the installation date of any particular lead service line. The service line is the connection between the street main and a building. EPA says lead pipes are more common in older cities and homes built before 1986; corrosion can release lead into water as it passes through plumbing.</p>
        <Source source={sources.epa} />
        <p>Buffalo’s 2025 water-quality report describes phosphate treatment to control corrosion. That treatment manages the interaction between water and pipe material. Replacing a lead line removes the lead pipe itself. Both the treatment process and the final connection to the home matter.</p>
        <Source source={sources.report} />
        <p className={styles.limit}>The historical lead manufacturers in the Atlas establish a local industrial history. The sources reviewed do not identify which company supplied a particular Buffalo service line.</p>
        <Link className={styles.source} href="/research/lead#historical-sites">Explore Buffalo’s earlier lead industries →</Link>
      </section>
      <section id="remaining" className={styles.section}>
        <p className="eyebrow">The published inventory</p>
        <h2>33,600 lead lines. Another 35,372 still unknown.</h2>
        <p>NYSDOH publishes 76,457 total service lines for Buffalo’s system, PWS NY1400422. The inventory certification is dated December 11, 2025. These categories sum to the reported total; portions on either side of a property boundary are not added together as separate lines.</p>
        <div className={styles.inventoryWrap}>
          <table className={styles.inventory}>
            <caption>Buffalo service-line classifications · certified December 11, 2025</caption>
            <thead><tr><th scope="col">Material category</th><th scope="col">Lines</th><th scope="col">What the category means</th></tr></thead>
            <tbody>{buffaloLineInventory.map((row) => <tr key={row.label}><th scope="row">{row.label}</th><td>{row.count.toLocaleString("en-US")}</td><td>{row.note}</td></tr>)}</tbody>
            <tfoot><tr><th scope="row">Total</th><td>76,457</td><td>Published inventory, not a current completion estimate.</td></tr></tfoot>
          </table>
        </div>
        <Source source={sources.inventory} />
        <p>The unknown category is a major part of the task ahead: identify the material, then establish the appropriate response. It cannot be treated as entirely lead or entirely safe. Earlier replacement milestones cannot simply be subtracted from this later inventory.</p>
        <p className={styles.limit}>This story concerns Buffalo Water. Replacement totals from the Erie County Water Authority describe a different utility and are not included in Buffalo’s progress figures.</p>
      </section>
      <section id="progress" className={styles.section}>
        <p className="eyebrow">Headway, with interruptions</p>
        <h2>Completed work matters. So does a dependable path to the next home.</h2>
        <div className={styles.records}>{buffaloReplacementMilestones.map((item) => <article className={styles.record} key={item.date}><p className={styles.status}>{item.date}</p><h3>{item.title}</h3><p>{item.text}</p><Source source={item.source} /></article>)}</div>
        <aside className={styles.caution}><strong>Public guidance needs clarification.</strong><p>The undated Get Water Wise FAQ describes free replacement in certain circumstances, including qualifying tap-test results and work during main replacement. The November 2025 board minutes announce a cutoff for new no-cost ROLL applications. The 2026 award does not establish that general applications reopened. Residents should confirm current eligibility and cost coverage directly with Buffalo Water.</p><Source source={sources.faq} /><Source source={sources.minutes} /></aside>
        <p>Monitoring also needs attention. The 2025 water-quality report says only 82 of the required 100 approved samples were submitted for the January–June 2025 lead-and-copper monitoring period, a monitoring violation. That shortfall is not itself proof of a lead action-level exceedance, but it limits the required evidence available for that period.</p>
        <Source source={sources.report} />
        <p>To assess future headway, the useful measures are dated completed replacements, fewer unknown lines, reliable sampling, and clear information about which homes qualify and when work will happen. Announced dollars and completed pipe removal answer different questions. The sources here do not establish a current citywide lifetime replacement total or a verified completion date for all remaining lines.</p>
      </section>
      <section id="children" className={`${styles.section} ${styles.health}`}>
        <p className="eyebrow">Why removal matters</p>
        <h2>Children’s development cannot wait for symptoms.</h2>
        <p>CDC identifies no safe blood-lead level in children. Even low levels are associated with developmental delays, learning difficulties and behavioral problems; effects can be lasting. Preventing exposure before harm occurs is the goal.</p>
        <Source source={sources.cdc} />
        <p>Most children exposed to lead have no obvious immediate symptoms. CDC describes possible damage to the brain and nervous system, slowed growth, and hearing and speech problems. A blood lead test is the best way to assess exposure; families with concerns should speak with their child’s healthcare provider.</p>
        <Source source={sources.symptoms} />
        <p>Water is one potential pathway alongside paint, dust and soil. Removing a lead service line addresses an important source, while other household sources still need attention. A pipe classification cannot predict a particular child’s blood-lead level or developmental outcome.</p>
        <Source source={sources.cdc} />
        <Link className={styles.source} href="/chemicals/lead">Read the Lead Exposure &amp; Effects profile →</Link>
      </section>
      <section id="home" className={styles.section}>
        <p className="eyebrow">From the citywide story to your address</p>
        <h2>Check the line, test the water, confirm the replacement plan.</h2>
        <p>Buffalo Water’s FAQ says residential service lines are privately owned by the property owner. It also directs tenants and homeowners to call 311 for free tap-water testing. Ask about your address’s line material, the sampling instructions, and current replacement eligibility, costs and scope.</p>
        <Source source={sources.faq} />
        <ol className={styles.steps}>
          <li><strong>Identify your service line.</strong> Ask the utility to confirm the material and how an unknown listing can be verified.</li>
          <li><strong>Use cold water for drinking, cooking and formula.</strong> Boiling does not remove lead.</li>
          <li><strong>Use a filter certified to remove lead.</strong> Follow its installation and cartridge-replacement directions. Ask the utility for local flushing guidance and precautions around construction.</li>
          <li><strong>Get a clear work plan.</strong> Confirm which portions will be replaced, who pays, the schedule, and follow-up water testing.</li>
        </ol>
        <Source source={sources.epa} />
        <p className={styles.limit}>Source links sit beside the claims they support. Inventory certification, program completion, board decisions and funding announcements retain separate dates. This story can be updated as new inventory and completion records become available.</p>
        <Link className={styles.source} href="/research/lead">Return to Lead in Western New York →</Link>
      </section>
    </div>
  </main>;
}
