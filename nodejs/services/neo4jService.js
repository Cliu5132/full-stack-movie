const neo4j = require('neo4j-driver');

const {
  NEO4J_URI,
  NEO4J_USERNAME,
  NEO4J_PASSWORD,
} = require('../config/dotenv');

const driver = neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD));

const getSession = () => {
  let session = {};
  try {
    session = driver.session();
  }
  catch(e){
    console.log(`Neo4j session failed: `, e);
  }
  console.log(`Neo4j session started...`);
  return session;
}

const closeDriver = async () => {
  await driver.close();
  console.log(`Neo4j session closed...`);
};

module.exports = { getSession, closeDriver };
