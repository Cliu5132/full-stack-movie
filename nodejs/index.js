require('dotenv').config();
const express = require("express");
const neo4j = require("neo4j-driver");

const CONNECTION_STRING = process.env.NEO4J_CONNECTION_STRING;
const NODE_LISTEN_PORT = process.env.PORT

const driver = neo4j.driver(CONNECTION_STRING,
                  neo4j.auth.basic('neo4j', 'trouble-latitudes-surge'), 
                  {/* encrypted: 'ENCRYPTION_OFF' */});

async function init() {
  const app = express();

  app.get("/get", async (req, res) => {
    const query =
    `
    MATCH (movie:Movie {title:$favorite})<-[:ACTED_IN]-(actor)-[:ACTED_IN]->(rec:Movie)
     RETURN distinct rec.title as title LIMIT 20
    `;
    const params = {"favorite": "The Matrix"};

    try{
      const session = driver.session();
      const result = await session.run(query, params);
  
      res.json({
        status: "ok",
        path: result.records.map((record) => record.get("title")),
      });
  
      await session.close();
      await driver.close();
    }
    catch(e) {
      console.log(`Error in running neo4j driver: `, e)
    }
  });

  app.use(express.static("./static"));
  app.listen(NODE_LISTEN_PORT || 8000);
  console.log(`NodeJS APP Running on Port: `, NODE_LISTEN_PORT)
}
init();