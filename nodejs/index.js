const express = require('express');
const { getMovies } = require('./controllers/movieController');
const { PORT } = require('./config/dotenv');

async function init() {
  const app = express();

  app.get('/get', getMovies);

  app.use(express.static('./static'));

  const nodePort = PORT || 8001;
  app.listen(nodePort, () => {
    console.log(`NodeJS APP Running on Port: ${nodePort}`);
  });
}

init();
