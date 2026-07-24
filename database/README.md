# Database foundation

WNYAtlas will use PostgreSQL with the PostGIS extension when persistent site
records and spatial querying are introduced.

The starter keeps the public site data in typed TypeScript files so the first
map can be built and reviewed without requiring a database. `schema.sql`
documents the initial spatial model without committing the project to an ORM or
hosting vendor.

Before connecting a database:

1. Select the production PostgreSQL/PostGIS provider.
2. Choose and configure a migration tool.
3. Review the schema and add controlled vocabularies for categories, evidence
   status, contaminants, remedies, and land-use restrictions.
4. Store the real `DATABASE_URL` only in local or hosted environment settings.
