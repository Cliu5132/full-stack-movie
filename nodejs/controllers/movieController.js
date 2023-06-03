const { getSession, closeDriver } = require('../services/neo4jService');

const getMovies = async (req, res) => {
  const query = `
    MATCH (movie:Movie {title:$favorite})<-[:ACTED_IN]-(actor)-[:ACTED_IN]->(rec:Movie)
    RETURN distinct rec.title as title LIMIT 20
  `;
  const params = { "favorite": "The Matrix" };

  try {
    const session = getSession();
    const result = await session.run(query, params);

    res.json({
      status: "ok",
      path: result.records.map((record) => record.get("title")),
    });

    // console.log(`res`, res)
    
    await session.close();
    await closeDriver();
  } catch (e) {
    console.log(`Error in running neo4j driver: `, e);
  }
};

module.exports = {getMovies};
