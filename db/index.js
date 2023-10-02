import path from "path";
import pg from "pg";
import { migrate } from "postgres-migrations";

const Pool = pg.Pool;

console.log("POSTGRES_USER:", process.env.POSTGRES_USER);
console.log("POSTGRES_PASSWORD:", process.env.POSTGRES_PASSWORD);

const pgconfig = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT || 5432,
  max: process.env.POSTGRES_MAX || 2,
  idleTimeoutMillis: process.env.POSTGRES_IDLE_TIMEOUT || 10000,
  connectionTimeoutMillis: process.env.POSTGRES_CONNECTION_TIMEOUT || 2000,
};

const pool = new Pool(pgconfig);

const db = {
  runMigrations: async function () {
    const client = await pool.connect();
    try {
      const currentModuleUrl = new URL(import.meta.url);
      const currentModuleDirectory = path.dirname(currentModuleUrl.pathname);
      await migrate(
        { client },
        path.resolve(currentModuleDirectory, "migrations/sql")
      );
    } catch (err) {
      console.error("migration failed: ", err);
    } finally {
      client.release();
    }
  },
};

export { db, pool };
