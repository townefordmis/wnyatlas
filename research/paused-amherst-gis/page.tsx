import type { Metadata } from "next";
import Link from "next/link";

import { AmherstFoundationMap } from "@/components/amherst-foundation-map";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Amherst Soils, Wetlands and Foundation Records",
  description:
    "An evidence-led GIS comparison of Amherst soils, current wetlands, surficial geology and privacy-protected foundation-record concentrations from the 2005 Army Corps study.",
  alternates: { canonical: "/research/amherst-soils-foundations" },
  openGraph: {
    type: "article",
    url: "/research/amherst-soils-foundations",
    title: "Amherst Soils, Wetlands and Foundation Records | WNYAtlas",
    description:
      "Official GIS layers and a careful reading of the 2005 Amherst soils and foundation stability study.",
  },
};

const sourceLinks = [
  {
    label: "2005 Amherst Soils and Foundation Stability Study",
    href: "https://amherst.ny.us/pdf/building/soilsstudy/TOA_Soils_Foundation_Study.pdf",
  },
  {
    label: "U.S. Fish and Wildlife Service National Wetlands Inventory",
    href: "https://www.fws.gov/program/national-wetlands-inventory/wetlands-data",
  },
  {
    label: "USDA NRCS SSURGO soil database",
    href: "https://www.nrcs.usda.gov/resources/data-and-reports/soil-survey-geographic-database-ssurgo",
  },
  {
    label: "New York State Museum geology GIS",
    href: "https://nysm.nysed.gov/research-collections/geology/gis",
  },
  {
    label: "Erie County historical aerial photographs",
    href: "https://www3.erie.gov/aerial-photos/aerial-photographs",
  },
  {
    label: "USGS topoView historical maps",
    href: "https://www.usgs.gov/tools/topoview",
  },
];

export default function AmherstSoilsFoundationsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="school-research-hero amherst-research-hero">
        <p className="eyebrow">WNY Atlas GIS investigation · Amherst, New York</p>
        <h1>Soils, wetlands and foundation records</h1>
        <p className="dek">
          Compare documented soil and wetland conditions with the generalized
          pattern of foundation-repair permits and inquiries mapped in the Town&apos;s
          2005 U.S. Army Corps of Engineers study.
        </p>
        <div className="school-caution amherst-caution">
          <strong>What this map can—and cannot—say</strong>
          <p>
            It shows overlapping records and physical context. It does not show
            that wetlands or a soil unit caused damage, that a neighborhood is
            unsafe, or that an individual property has a problem. The report found
            no single cause and said most Amherst homes were performing as expected.
          </p>
        </div>
      </section>

      <AmherstFoundationMap />

      <section className="amherst-method">
        <div>
          <p className="eyebrow">What is published now</p>
          <h2>Official geometry and disclosed approximations</h2>
          <p>
            The town boundary, current NWI wetlands, soil map units and surficial
            geology come from government GIS services. The 2005 foundation layer
            is different: WNY Atlas converted the report&apos;s household symbols into
            coarse relative-density cells to preserve privacy and avoid false precision.
          </p>
        </div>
        <div>
          <p className="eyebrow">What remains open</p>
          <h2>Historic fill needs a second source</h2>
          <p>
            Historical aerials and USGS topographic maps are indexed, but no
            “filled wetland” polygon is published until multiple dated sources can
            support the former boundary and later landscape change. Post-2005
            permits and complaints also require a records request, privacy review,
            deduplication and aggregation.
          </p>
        </div>
      </section>

      <section className="amherst-downloads">
        <div>
          <p className="eyebrow">Download the research package</p>
          <h2>Reusable data with confidence fields</h2>
          <p>
            Every public feature includes a source ID, evidence class, limitation
            or scale note, review date and an explicit no-causation field.
          </p>
          <div className="amherst-download-actions">
            <a href="/data/amherst-foundations/amherst-research-layers.geojson" download>
              Combined GeoJSON
            </a>
            <a href="/data/amherst-foundations/amherst-gis-shapefiles.zip" download>
              Shapefile bundle
            </a>
            <a href="/data/amherst-foundations/sources-and-confidence.csv" download>
              Sources CSV
            </a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Primary sources</p>
          <ul>
            {sourceLinks.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noreferrer">
                  {source.label} ↗
                </a>
              </li>
            ))}
          </ul>
          <Link href="/research/former-waterways">Compare the regional changed-waterways map →</Link>
        </div>
      </section>
    </main>
  );
}
