import * as dotenv from 'dotenv';
dotenv.config();
export const development = {
  client: process.env.DATABASE_CLIENT,
  connection: {
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
  pool: {
    min: Number(process.env.DATABASE_POOL_MIN),
    max: Number(process.env.DATABASE_POOL_MAX),
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
export default development;