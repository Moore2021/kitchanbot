import knex from 'knex';
import knexfile from './knexfile.js';
/**
 * @type {Knex}
 */
const db = knex(knexfile);
export default db;