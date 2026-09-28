import Link from "next/link";

import { bethlehemUraniumSources } from "@/data/bethlehem-uranium-sources";

export function BethlehemUraniumHistory() {
  return (
    <section className="school-method radiological-method" id="bethlehem-uranium">
      <p className="eyebrow">Documented atomic-energy work · reviewed September 28, 2026</p>
      <h2>Bethlehem Steel: uranium rolling at the 10-inch mill, 1949–1952</h2>
      <p>
        <Link href="/sites/bethlehem-steel">Bethlehem&apos;s Lackawanna works</Link> participated
        in the AEC uranium program during 1949–1952. Its 10-inch continuous bar mill
        rolled uranium for reactor fuel supporting plutonium production. Experimental
        and production runs also informed the rolling process at Fernald, Ohio.
        Uranium work generally occupied weekends between ordinary steel shifts.
        This was an occupational radiation history within the larger steel complex.
      </p>
      <p>
        Heating trials used lead and molten-salt baths; salt reduced oxidation and
        airborne dust. NIOSH&apos;s technical basis describes possible resuspension
        of uranium oxide mixed with steel dust on subsequent steel-production days,
        for which it found no air or surface surveys.
        {" "}<a href={bethlehemUraniumSources[0].url}>Read the technical basis, sections 2 and 3.6 ↗</a>
      </p>
      <h3>A documented material route to LOOW</h3>
      <p>
        NIOSH&apos;s 2013 review identifies three barrels at Lake Ontario Ordnance
        Works containing more than 600 pounds of Bethlehem uranium dust and oxides.
        It also cites transfers of rods and scrap. These are recorded movements
        into federal storage, not a reconstruction from geographic proximity.
        {" "}<Link href="/sites/niagara-falls-storage-site">Read the LOOW/Niagara Falls Storage Site history.</Link>
        {" "}<a href={bethlehemUraniumSources[1].url}>Shipment references: Attachment 2 ↗</a>
      </p>
      <h3>Workers, cleanup and the later federal findings</h3>
      <p>
        SC&A&apos;s 2004 review preserves worker accounts of dust remaining for
        weekday shifts, scale washed into pits, pit cleaning and salt-bath work.
        It also records allegations of uranium-bearing material entering furnaces.
        These accounts identify specific work practices and records to investigate;
        they do not independently verify material destinations or uranium in finished steel.
        {" "}<a href={bethlehemUraniumSources[2].url}>Read the attributed accounts and review questions ↗</a>
      </p>
      <p>
        NIOSH&apos;s 2013 conclusion affirms internal and external worker exposure
        during uranium operations. It also concludes that cleanup was effective
        and significant residual radioactive contamination was not present after
        AEC work ended in 1952. The review considered operating records, surveys,
        models and worker affidavits. That conclusion is part of the record alongside
        the testimony.
        {" "}<a href={bethlehemUraniumSources[1].url}>Read the 2013 conclusion ↗</a>
      </p>
      <p>
        DOE&apos;s later surveys of former process areas and remaining equipment
        found no significant residual radioactivity and led to elimination from
        FUSRAP consideration. This site decision addresses residual conditions;
        it does not negate radiation exposures during production.
        {" "}<a href={bethlehemUraniumSources[3].url}>Read the elimination report and survey scope ↗</a>
      </p>
      <p>
        A qualifying class of employees working January 1, 1949–December 31, 1952
        entered the Special Exposure Cohort effective August 13, 2010. The class
        requires at least 250 qualifying workdays, including permitted combinations
        with other SEC employment. Compensation eligibility has additional requirements;
        the designation is not a count of illnesses or a finding of current site contamination.
        {" "}<a href={bethlehemUraniumSources[4].url}>Read the official class definition ↗</a>
      </p>
      <h3>Smokes Creek and shoreline fill: the remaining questions</h3>
      <p>
        The <Link href="/sites/smokes-creek-bethlehem-corridor">Smokes Creek record</Link>{" "}
        documents steelworks discharges and sediment cleanup. The reviewed uranium
        records do not verify a uranium route to the creek, Lake Erie, residential
        fill or a specific slag deposit. The creek sediment project should not be
        described as a uranium cleanup. Nor do the LOOW shipment records place
        those particular barrels in today&apos;s containment structure.
      </p>
      <p>
        Next records: locate the 10-inch mill against surveyed plans; trace its
        drains, scale pits and outfalls; recover the cited shipment and scrap ledgers;
        identify spent-bath disposal records; and compare later sampling locations
        with those process areas. Modern slag radiological results would need both
        location and material identification before linking them to this program.
        A plant-wide map marker does not locate the mill or a release.
      </p>
    </section>
  );
}
