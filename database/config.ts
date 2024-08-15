import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import knex, { Knex } from 'knex';
import { DB_CLIENT } from '../constants/database';

dotenvExpand.expand(dotenv.config());

export const dbConfig: Knex.Config = {
  client: DB_CLIENT,
  connection: process.env.DB_CONNECTION_STRING,
  pool: { min: 2, max: 10 },
};

let dbConnection: Knex;
export function getDBConnection() {
  if (dbConnection) return dbConnection;
  dbConnection = knex(dbConfig);

  return dbConnection;
}

export function closeDBConnection() {
  if (dbConnection) {
    dbConnection.destroy();
  }
}