const { getSession } = require('../services/neo4jService');

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
    "startYear": parseInt(startYear), //#Why ParseInt?// This step is essential cause otherwise it is a string, 
    "endYear": parseInt(endYear) //then query will miss the param and thus won't work in neo4j. #Why ParseInt?//
  }

  try {
    const session = getSession();
    const result = await session.run(query, params);

    res.json({
      status: "ok",
      body: result.records.map((record) => record.get("title")),
    });
    
    await session.close();
  } catch (e) {
    console.log(`Error in running neo4j driver: `, e);
  }
}

const getMoviesByPersonName = async (req, res) => {
  const params = req.query;
  const query = `
    MATCH (m:Movie) <-[r]- (p:Person {name: $personName}) 
    RETURN m.title AS movieName, type(r) AS connectionType, m.released AS releasedYear 
    LIMIT 50
  `;

  try {
    const session = getSession();
    const result = await session.run(query, params);

    const formatedResult = [] // todo: refactor to a function
    result.records.map((record) => {
      const formatedRecord = {
        "movieName": record.get("movieName"),
        "connectionType": record.get("connectionType"),
        "releasedYear": record.get("releasedYear").low
      }
      formatedResult.push(formatedRecord)
    });

    res.json({
      status: "ok",
      body: formatedResult
    });
    
    await session.close();
  } catch (e) {
    console.log(`Error in running neo4j driver: `, );
  }
}

module.exports = {
  getAllMovies,
  getMoviesBetweenYears,
  getMoviesByPersonName,
};
