const knex = require("knex");
const config = require("../knexfile");

const environment = process.env.NODE_ENV || "development";
const environmentConfig = config[environment];

if (!environmentConfig) {
  throw new Error(`Invalid NODE_ENV value: ${environment}`);
}

const connection = knex(environmentConfig);

module.exports = connection;
