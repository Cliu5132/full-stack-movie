const { getSession, closeDriver } = require('../services/neo4jService');

const getAllMovies = async (req, res) => {
  const query = `
    MATCH (m:Movie) RETURN distinct m.title as title LIMIT 50
  `;

  try {
    const session = getSession();
    const result = await session.run(query);

    res.json({
      status: "ok",
      body: result.records.map((record) => record.get("title")),
    });

    // console.log(`res`, res)
    
    await session.close();
    await closeDriver();
  } catch (e) {
    console.log(`Error in running neo4j driver: `, e);
  }
}

const getMoviesBetweenYears = async (req, res) => {
  const {
    startYear,
    endYear,
  } = req.query;

  const query = `
    MATCH (m:Movie) WHERE m.released >= $startYear AND m.released <= $endYear RETURN distinct m.title as title LIMIT 50
  `;

  const params = {
    "startYear": parseInt(startYear),
    "endYear": parseInt(endYear)
  }

  try {
    const session = getSession();
    const result = await session.run(query, params);

    res.json({
      status: "ok",
      body: result.records.map((record) => record.get("title")),
    });
    
    await session.close();
    await closeDriver();
  } catch (e) {
    console.log(`Error in running neo4j driver: `, e);
  }
}

module.exports = {
  getAllMovies,
  getMoviesBetweenYears,
};
