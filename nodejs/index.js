const express = require('express');
const { 
  getAllMovies,
  getMoviesBetweenYears,
} = require('./controllers/movieController');
const {
  getPersonsByMovieTitle
} = require('./controllers/personController');
const { PORT } = require('./config/dotenv');

async function init() {
  const app = express();

  app.get('/movies', getAllMovies);
  app.get('/movies-btw-years', getMoviesBetweenYears);
  app.get('/persons-by-title', getPersonsByMovieTitle);

  app.use(express.static('./static'));

  const nodePort = PORT || 8001;
  app.listen(nodePort, () => {
    console.log(`NodeJS APP Running on Port: ${nodePort}`);
  });
}

init();
