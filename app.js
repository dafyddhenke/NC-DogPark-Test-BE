const express = require('express');
const cors = require("cors");

const { getParks } = require('./controllers/parks.controllers');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Firebase!');
});

app.get('/parks', getParks);

module.exports = app;