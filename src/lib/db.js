import { Pool } from 'pg';

let pool;

if (!pool) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // Required for Render Postgres connections
    },
    max: 1, // Limit connections per serverless function instance to prevent overloading Render
  });
}

export default pool;