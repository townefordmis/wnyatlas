# Erie County Schools Inventory — Research Notes

## Current baseline

The initial inventory contains current public and charter K–12 institution
records associated with Erie County in the New York State Schools GIS service.

| Scope | Public | Charter | Total |
| --- | ---: | ---: | ---: |
| Buffalo | 65 | 28 | 93 |
| Erie County outside Buffalo | 130 | 2 | 132 |
| Total | 195 | 30 | 225 |

The working inventory is:

`research/erie-county-current-public-charter-schools.csv`

## Primary source

- Service: New York State Education Department Data — NYS Schools
- Publisher: NYS ITS Geospatial Services, based on NYSED data
- Service publication date observed during import: July 17, 2026
- Combined service:
  https://gisservices.its.ny.gov/arcgis/rest/services/NYS_Schools/MapServer
- Public K–12 layer:
  https://gisservices.its.ny.gov/arcgis/rest/services/NYS_Schools/MapServer/2
- Charter K–12 layer:
  https://gisservices.its.ny.gov/arcgis/rest/services/NYS_Schools/MapServer/4

## Included fields

The CSV preserves the NYSED/SEDREF identifiers, official and display names,
physical address, city, ZIP code, district information, institution type,
mapped longitude and latitude, source layer, source publication date, and
inventory status.

## Important limitations

- This is an institution inventory, not yet a verified facility or parcel
  inventory.
- A single building can host more than one institution or program.
- An institution can move while retaining its SED code.
- City names in the source are mailing or physical-address labels and are not
  substitutes for municipal-boundary or parcel verification.
- Coordinates are suitable for initial inventory review but must be checked
  against official facility addresses and parcels before proximity,
  intersection, or bordering calculations.
- Inclusion does not indicate an environmental concern.

## Deliberately excluded from this first baseline

- Nonpublic/private schools
- BOCES programs and facilities
- Other schools serving students with disabilities
- Non-IMF institutions
- Schools for at-risk youth
- Preschools, colleges, libraries, district offices, and feeding sites
- Former or closed school buildings

These groups should be imported as separate research inventories because they
have different verification requirements and can introduce duplicate programs
at shared facilities.

## Next verification pass

1. Cross-check the 65 Buffalo public records against the current Buffalo Public
   Schools directory.
2. Cross-check charter records against NYSED charter-school records and each
   operator’s current campus list.
3. Normalize addresses without discarding the source values.
4. Group institutions that occupy the same physical building.
5. Flag coordinates that differ from verified building locations.
6. Assign stable WNY Atlas facility IDs separately from SED institution IDs.
7. Acquire parcel and building-footprint geometry before calculating overlap,
   bordering, or proximity relationships.
