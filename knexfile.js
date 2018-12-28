// Update with your config settings.
require('dotenv').config();

const options = process.env.NODE_ENV === 'production' ?

module.exports = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL, searchPath: ['public']
} :
module.exports = {
    client: 'postgresql',
    connection: {
      host    : process.env.DB_HOST,
      database: process.env.DB_NAME,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
      },
    }
  


  module.exports = options;

