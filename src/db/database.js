require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// exports a query function that can be used to run queries on database.
module.exports.query = (text, params) => {
  return pool.query(text, params);
};
