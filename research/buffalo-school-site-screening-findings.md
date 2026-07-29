# Buffalo school / remediation-site screening

Working research only. Not approved for publication.

Screened: 2026-07-29

## Scope and method

- 93 current public and charter institution records with Buffalo postal addresses were consolidated into 90 address-based campuses.
- The initial count was 91 because two records at 75 W Huron Street carry different ZIP codes in the source inventory. They share the same address and coordinates and are treated as one physical campus.
- Each campus point was queried against the live NYSDEC Remediation Site Borders layer.
- Relationships were screened in three mutually exclusive bands: point inside a DEC boundary, within 500 feet, and within 1,000 feet.
- A point-in-polygon result is a lead, not final parcel proof. School point placement, multi-parcel campuses, rights-of-way, and DEC boundary accuracy must be checked before publishing a same-property or adjacency statement.
- The DEC boundary dataset cannot be redistributed. WNY Atlas should store citations and independently derived relationship findings, not republish the source geometry.

## Screening totals

- 90 Buffalo-address campuses represented on the research map
- 41 campuses had at least one DEC remediation boundary within 1,000 feet
- 66 distinct DEC sites were returned
- 2 campuses had their school point inside a DEC boundary
- 30 relationships were in the 500-foot band
- 68 relationships were in the 500-to-1,000-foot band

Counts are screening relationships, not counts of contaminated schools. A campus can be near more than one DEC site.

## High-confidence same-site findings

### South Buffalo Charter School — 154 South Ogden Street

Status: **same cleanup property confirmed by DEC records**

- The current school is documented at 154 South Ogden Street.
- NYSDEC Brownfield Cleanup Program site C915268 is the 154 South Ogden Street Site.
- The 2012 Brownfield Cleanup Agreement describes an approximately 21-acre site at 154 South Ogden Street.
- DEC's July 2014 Decision Document says the property was being developed with a school building.
- DEC records say the property had not previously been developed. The previous contaminating use was solid-waste disposal over much of the site; part of the former Buffalo River channel was filled after the river was straightened.
- The record describes fill containing ash, black sand, brick, wood, and glass.
- DEC selected a restricted-residential remedy with a cover system and ongoing institutional/engineering controls.
- DEC issued a Certificate of Completion on 2014-12-18. The DEC document index also lists a Final Engineering Report, Site Management Plan, and periodic-review certifications through 2019.

Public wording should explain that this is a school built on a documented remediated brownfield with continuing controls—not simply label it an active contaminated school.

Key official records:

- DEC site code: C915268
- Decision Document: https://extapps.dec.ny.gov/data/DecDocs/C915268/Decision%20Document.BCP.C915268.2014-07-22.Final%20Decision%20Doccument.pdf
- DEC document index: https://extapps.dec.ny.gov/data/DecDocs/C915268/
- School confirmation: https://www.newyorkcharters.org/charter-schools/south-buffalo-charter-school/

### Buffalo School of Culinary Arts and Hospitality Management / PS 42 — 75 W Huron Street

Status: **school building lies within the documented cleanup-site address range; current parcel crosswalk still needs final reconciliation**

- Both NYSED-derived institution records share the 75 W Huron Street campus.
- NYSDEC Brownfield Cleanup Program site C915282 covers 73-79 W Huron Street.
- The BCP application states that 73 and 75 historically formed one six-story building and identifies the subject building parcel as 73-75 W Huron.
- Documented prior uses include a horse stable, automotive garage/rental operations, Huron Street Garage, Cyphers Incubator Co., and Cyphers Card Co. The 77-79 W Huron portion had an automotive fueling station with underground storage tanks.
- The site record also describes investigation and remediation associated with petroleum/VOC impacts and the adjacent former Sunoco property.
- DEC issued a Certificate of Completion on 2017-12-28. The document index lists a Final Engineering Report, revised Site Management Plan, annual periodic-review records through 2026, and a 2025 DEC inspection.

The current Erie parcel hit from the NYSED point does not match the historical BCP tax parcels, so parcel consolidation/re-numbering must be reconciled before a public parcel-boundary graphic is drawn. The address and DEC site documents nevertheless provide strong same-building evidence.

Key official records:

- DEC site code: C915282
- BCP application and historical-use attachments: https://extapps.dec.ny.gov/data/DecDocs/C915282/Application.BCP.C915282.2013-10-02.BCP%20Application%20and%20Attachments%20A%20-%20F.pdf
- DEC document index: https://extapps.dec.ny.gov/data/DecDocs/C915282/
- Current school confirmation: https://nces.ed.gov/ccd/schoolsearch/school_detail.asp?ID=360585006643

## Next verification queue

1. Correct and validate every Buffalo campus point against the actual school footprint and campus parcels.
2. Reconcile current parcel identifiers for the two confirmed same-site campuses.
3. Review all 500-foot candidates to distinguish shared boundary, across a right-of-way, and merely nearby.
4. Review the remaining 500-to-1,000-foot candidates only after the closer group.
5. For each verified relationship, extract prior site use, contaminant source, cleanup dates, remedy status, remaining controls, and the newest periodic review from official records.
6. Maintain separate fields for on-property history and nearby-site history so proximity is never presented as evidence of exposure.
