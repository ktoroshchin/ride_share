require('dotenv').config();

const PORT = process.env.PORT || 8000;
const ENV = process.env.ENV || 'development';

const express = require('express');
const apiRoute = require('./routes/api')

const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);

const app = express();

app.use('/api', apiRoute)


app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});