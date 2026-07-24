# WNYAtlas

**Western New York Industrial & Environmental Atlas**

WNYAtlas is a public, evidence-based atlas connecting Western New York's
industrial history with environmental records, cleanup decisions, long-term
management, and redevelopment.

The project asks a simple question:

> What happened here?

## Editorial standard

- If it is documented, include it.
- If it is uncertain, identify it as a research lead.
- If it is interpretation, do not present it as fact.
- Proximity is context, not proof of causation.
- Every meaningful claim should lead back to a source.

## Current foundation

- Next.js App Router
- TypeScript
- Tailwind CSS
- Typed starter site records
- Responsive map-first homepage
- PostgreSQL/PostGIS-ready connection and draft schema

## Local setup

Requirements: a current Node.js LTS release and npm.

```bash
git clone https://github.com/townefordmis/wnyatlas.git
cd wnyatlas
npm install
copy .env.example .env.local
npm run dev
```

On macOS or Linux, replace the `copy` line with:

```bash
cp .env.example .env.local
```

Open [http://localhost:3000](http://localhost:3000).

## Useful checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Project structure

```text
src/
  app/          Next.js routes, layout, and global styles
  components/   Reusable interface components
  data/         Typed seed data before the database is connected
  lib/          Server-side integrations, including the database client
  types/        Shared TypeScript models
database/
  schema.sql    Draft PostGIS schema
  README.md     Database integration notes
public/         Static assets
```

## Database direction

The starter does not require a database. When PostGIS is introduced:

1. provision PostgreSQL with PostGIS;
2. add `DATABASE_URL` to local and hosted environment settings;
3. select a migration tool;
4. migrate the typed seed records into `atlas_sites` and related evidence tables.

Never commit `.env.local` or production credentials.

## Status

Founding build. See [ROADMAP.md](ROADMAP.md) for planned milestones.
