
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const ENV = process.env.ENV || 'development';

const express = require('express');
const reservationRoute = require('./routes/reservations')

const knexConfig = require('./knexfile');
const knexLogger = require('knex-logger');
const knex = require('knex')(knexConfig[ENV]);

const app = express();



app.use(knexLogger(knex));
// Mount all resource routes
app.use('/reservations', reservationRoute(knex));


app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});