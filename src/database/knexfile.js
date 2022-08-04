// Update with your config settings.

module.exports = {
    development: {
      client: process.env.DATABASE_CLIENT,
      connection: {
        // TODO change to your db name
        database: process.env.DATABASE_NAME,
  
        // change to your db user
        user: process.env.DATABASE_USER,
        password: null,
      },
      pool: {
        min: Number(process.env.DATABASE_POOL_MIN),
        max: Number(process.env.DATABASE_POOL_MAX),
      },
      migrations: {
        tableName: `knex_migrations`,
      },
    },
  };