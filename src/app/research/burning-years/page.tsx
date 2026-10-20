import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ResearchSectionNav } from "@/components/research-section-nav";
import { burningYearsPlaces, burningYearsSources as sources } from "@/data/burning-years";
import { buffaloAreaDRevised } from "@/data/industrial-history-sources";
import { featuredSites } from "@/data/featured-sites";
import type { AtlasSource } from "@/types/site";
import styles from "./burning-years.module.css";

export const metadata: Metadata = {
  title: "The Burning Years: Waste, Smoke and Buried Ash",
  description: "Follow Western New York's municipal incinerators, industrial waste burning, complaints, ash destinations and continuing cleanup records.",
  alternates: { canonical: "/research/burning-years" },
  openGraph: { type: "article", url: "/research/burning-years", title: "The Burning Years | WNYAtlas", description: "How Western New York burned its waste and buried the ash." },
};

function Citation({ source }: { source: AtlasSource }) {
  return <p className={styles.citation}><a href={source.url} target="_blank" rel="noreferrer">{source.publisher}: {source.title} ↗</a></p>;
}

export default function BurningYearsPage() {
  return <main>
    <SiteHeader />
    <header className={styles.hero}>
      <p className="eyebrow">Historical investigation · Reviewed October 19, 2026</p>
      <h1>The Burning Years</h1>
      <p className={styles.subtitle}>How Western New York burned its waste and buried the ash</p>
      <p>Municipal furnaces, chemical-waste incinerators and burning dumps reduced waste volume while creating emissions and residues. Their histories continue through disposal grounds, cleanup records and questions about what reached surrounding communities.</p>
      <a className={styles.jump} href="#waste-trails">Follow the waste trails ↓</a>
    </header>
    <ResearchSectionNav items={[{ href: "#regional-record", label: "The regional record" }, { href: "#waste-trails", label: "Waste and ash trails" }, { href: "#health", label: "Exposure and health" }, { href: "#places", label: "Explore the places" }, { href: "#open-record", label: "Unanswered questions" }]} />
    <div className={styles.content}>
      <section id="regional-record" className={styles.section}>
        <p className="eyebrow">The 1960s survey</p>
        <h2>Pollution controls were already falling short.</h2>
        <p>The 1970 Public Health Service study, now archived by EPA, counted six Erie County municipal incinerators: two in Buffalo and one each serving Lackawanna, the City of Tonawanda, the Town of Tonawanda and Cheektowaga. It found their air controls inadequate for the county standards then in force, while noting upgrades underway at Buffalo’s West Side plant.</p>
        <div className={styles.tableWrap}>
          <table><caption>Reported 1965 incineration in two Niagara County cities</caption><thead><tr><th scope="col">City</th><th scope="col">Refuse burned</th><th scope="col">Share of reported or surveyed refuse</th></tr></thead><tbody><tr><th scope="row">Niagara Falls</th><td>About 44,400 tons</td><td>96%</td></tr><tr><th scope="row">North Tonawanda</th><td>About 8,000 tons</td><td>39%</td></tr></tbody></table>
        </div>
        <p>The study says incinerated refuse included industrial material hauled by private industry. It does not identify suppliers, chemicals or each plant’s industrial share. Its Niagara disposal inventory also records open burning, smoke, fly ash and rubbish-fire complaints.</p>
        <Citation source={sources.regional} />
      </section>

      <section id="waste-trails" className={styles.section}>
        <p className="eyebrow">From generator to final destination</p>
        <h2>Follow the material after the fire.</h2>
        <figure className={styles.flow}><figcaption>The chain each history needs to establish</figcaption><ol><li>Waste generated</li><li>Burning or treatment</li><li>Air emissions</li><li>Ash and other residues</li><li>Transport and disposal</li></ol><p>Emissions and residues are separate pathways. A named landfill customer does not prove that customer’s material passed through a municipal furnace.</p></figure>
        <article className={styles.record}>
          <p className={styles.status}>Documented historical disposal · Buffalo</p>
          <h3>Unity Island: incinerator residues beside foundry fill</h3>
          <p>The 1985 USGS investigation identifies incinerator residue, foundry sand, street sweepings and general refuse at the island then called Squaw Island. These were different waste streams, accumulated over decades. The report also describes fill moved to Tifft Farm in the mid-1970s, where a contained disposal area became part of the nature preserve.</p>
          <p>That transfer is documented as fill. It does not establish that every load was ash, that the entire island or preserve is contaminated, or that historical conditions describe today’s public-use areas.</p>
          <Citation source={sources.island} />
        </article>
        <article className={styles.record}>
          <p className={styles.status}>Documented ash receipt and complaints · Wheatfield</p>
          <h3>Brzezinski: about 25 loads from a Niagara Falls incinerator</h3>
          <p>An earlier history preserved in DEC’s 1990 investigation file describes the 1965-1972 landfill receiving Carborundum and Bell Aerospace materials, plus roughly 25 loads of City of Niagara Falls incinerator ash. It recounts pond-pumping complaints in 1968, a June 1969 refuse-burning citation, and later 1969 complaints about the ash deliveries.</p>
          <p>These records establish receipt and historical complaints. They do not establish the chemistry of the delivered ash or prove that the named companies’ wastes were burned in the municipal incinerator. Historical screening opinions in the appendix are not a current health determination.</p>
          <Citation source={sources.brzezinski} />
        </article>
        <article className={styles.record}>
          <p className={styles.status}>Documented industrial burning · Buffalo River</p>
          <h3>Buffalo Color: the ash stayed in the pits</h3>
          <p>The revised 1989 investigation describes plant wastes burned at Area D from 1922, first in open pits and after 1954 in the Building 448 incinerator. Ash and chemical residues were left in pits and covered with dirt. This is an identified on-site disposal practice, although the record does not trace individual wartime gas-production wastes into those pits.</p>
          <Link href="/sites/buffalo-color">Read the expanded Buffalo Color story →</Link>
          <Citation source={buffaloAreaDRevised} />
        </article>
        <article className={styles.record}>
          <p className={styles.status}>Court-documented industrial history · Niagara Falls</p>
          <h3>Incineration could fail—and send waste back to landfills</h3>
          <p>A 1994 federal opinion recounts Niagara Falls shutting DuPont’s incinerator in 1942 because particle-control precipitators were missing. It also describes Hooker abandoning an unsuccessful thionyl-chloride-waste incineration effort around 1944. Some of that waste went to Love Canal in 1945-1948; most went to S-Area. These are separate industrial operations, not evidence of a shared municipal ash stream.</p>
          <Citation source={sources.court} />
        </article>
        <article className={styles.record}>
          <p className={styles.status}>Separate processes and properties · Pendleton and Niagara Falls</p>
          <h3>Frontier: burning was one part of hazardous-waste treatment</h3>
          <p>DEC’s 1992 decision identifies incineration among Pendleton’s operations, alongside neutralization, oxidation, recovery and distillation. A 1979 EPA case study specifies flammable-waste incineration and recounts complaints about smoke, odors, noise and trucks. It also reports a June 1973 waste-drum explosion and brief evacuation.</p>
          <p>At the separate Royal Avenue facility, the 1979 account follows treated liquid effluent into municipal sewers and solid residues to area hazardous-waste landfills. Treatment, combustion, storage and disposal must be traced separately; accepting a chemical does not prove it was burned.</p>
          <Citation source={sources.frontier} /><Citation source={sources.siting} />
        </article>
      </section>

      <section id="health" className={styles.section}>
        <p className="eyebrow">What the evidence can establish</p>
        <h2>Hazard, exposure and illness are different findings.</h2>
        <p>New York’s health department describes particles, carbon monoxide, hydrogen chloride, benzene, formaldehyde, metals, dioxins and furans in smoke from uncontrolled trash burning. Chemicals can also remain in ash. Its guidance concerns backyard burning; the pollutant list is not a measurement of every historical municipal furnace.</p>
        <div className={styles.pathways}><article><h3>Air</h3><p>Smoke and particles can travel downwind. Waste composition, controls, wind and time determine potential contact.</p></article><article><h3>Deposited material</h3><p>Dust, soot and ash can create soil, food or indoor-dust pathways where deposition and contact occur.</p></article><article><h3>Buried residues</h3><p>Disturbance and water movement require site-specific investigation, including the effects of later cleanup and cover.</p></article></div>
        <p>Smoke can aggravate asthma and cause other symptoms; people with heart or lung conditions can be more vulnerable. These general hazards do not establish a resident’s historical dose or an incinerator’s role in a particular illness.</p>
        <Citation source={sources.health} />
        <aside className={styles.note}><strong>No neighborhood disease claim is established here.</strong><p>The records reviewed for this feature do not demonstrate that a particular WNY municipal incinerator caused a measured neighborhood increase in cancer, birth defects or other disease. That conclusion would require suitable exposure and health evidence.</p></aside>
      </section>

      <section id="places" className={styles.section}>
        <p className="eyebrow">Continue through the atlas</p><h2>Different places, different waste histories.</h2>
        <div className={styles.places}>{burningYearsPlaces.map(place => {
          const site = featuredSites.find(item => item.id === place.id);
          return <article key={place.id}><p className={styles.status}>{place.role}</p><h3><Link href={`/sites/${place.id}`}>{site?.name ?? place.id}</Link></h3><p>{place.text}</p></article>;
        })}</div>
      </section>
      <section id="open-record" className={styles.section}>
        <p className="eyebrow">The open record</p><h2>What still needs an original document.</h2>
        <details className={styles.record}><summary>The May 1, 1970 Wheatfield complaint</summary><p>The supplied research lead describes night deliveries of smoldering ash and burning particles from trucks. The complete letter, receiving parcel and agency disposition remain unverified. It is not assigned to Brzezinski, Niagara County Refuse or a transportation route here.</p></details>
        <details className={styles.record}><summary>Buffalo’s detailed ash chronology</summary><p>The cited city document is a lead for the early-1950s-to-1979 disposal chronology, settling lagoons and conversion to a transfer station. Its full contents could not be independently retrieved in this review; those details are not used as verified findings here. <a href="https://www.buffalony.gov/DocumentCenter/View/5921" target="_blank" rel="noreferrer">Open the cited city record ↗</a></p></details>
        <p>Priority records include furnace receiving logs, private-hauler invoices, municipal ash contracts, complaint files, inspection reports and historical sampling. They can connect named generators to particular furnaces and connect ash shipments to receiving parcels.</p>
        <p>For present conditions, each property’s latest sampling, remedy and management record matters. Closure alone does not show that every residue was removed.</p>
        <Link href="/risks/airborne-exposure">Explore documented airborne histories →</Link>
      </section>
    </div>
  </main>;
}
