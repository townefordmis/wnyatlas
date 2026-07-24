import "server-only";
import postgres from "postgres";

let client: ReturnType<typeof postgres> | undefined;

/**
 * Returns the shared PostgreSQL client when DATABASE_URL is configured.
 * PostGIS can be enabled in the database without changing this connection layer.
 */
export function getDatabase() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  client ??= postgres(connectionString, {
    max: process.env.NODE_ENV === "production" ? 10 : 1,
    prepare: false,
  });

  return client;
}
