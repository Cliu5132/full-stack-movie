const neo4j = require('neo4j-driver');

const {
  NEO4J_CONNECTION_STRING
} = require('../config/dotenv');
console.log(`Neo4j: `, NEO4J_CONNECTION_STRING);
const driver = neo4j.driver(
  NEO4J_CONNECTION_STRING,
  neo4j.auth.basic('neo4j', 'trouble-latitudes-surge'),
  {/* encrypted: 'ENCRYPTION_OFF' */}
);

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
