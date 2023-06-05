const { getSession, closeDriver } = require('../services/neo4jService');

const getPersonsByMovieTitle = async (req, res) => {
  const params = req.query;
  const query = `
    MATCH (p:Person) -[r]-> (m:Movie {title: $movieTitle}) 
    RETURN p.name AS personName, type(r) AS connectionType LIMIT 200
  `;

  try {
    const session = getSession();
    const result = await session.run(query, params);

    const formatedResult = [] // todo: refactor to a function
    result.records.map((record) => {
      const formatedRecord = {
        "personName": record.get("personName"),
        "connectionType": record.get("connectionType")
      }
      formatedResult.push(formatedRecord)
    });

    res.json({
      status: "ok",
      body: formatedResult
    });

    await session.close();
    await closeDriver();
  } catch (e) {
    console.log(`Error in running neo4j driver: `, e);
  }
};

module.exports = {
  getPersonsByMovieTitle,
};
