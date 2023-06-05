const express = require('express');
const { 
  getAllMovies,
  getMoviesBetweenYears,
  getMoviesByPersonName,
} = require('./controllers/movieController');
const {
  getPersonsByMovieTitle
} = require('./controllers/personController');
const { PORT } = require('./config/dotenv');

async function init() {
  const app = express();

  app.get('/movies', getAllMovies); // Pure Get, no params required
  app.get('/movies-btw-years', getMoviesBetweenYears); // Send variables `startYear` and `endYear` with Get
  app.get('/movies-by-person-name', getMoviesByPersonName); //Send variable `personName` with Get
  app.get('/persons-by-movie-title', getPersonsByMovieTitle); //Send variable `movieTitle` with Get

  app.use(express.static('./static'));

  const nodePort = PORT || 8001;
  app.listen(nodePort, () => {
    console.log(`NodeJS APP Running on Port: ${nodePort}`);
  });
}

init();
