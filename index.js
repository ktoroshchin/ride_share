/*jshint esversion: 6 */

require('dotenv').config();

const PORT = process.env.PORT || 8000;
const ENV = process.env.ENV || 'development';

const express = require('express');
const adminRoute = require('./routes/admin');
const homeRoute = require('./routes/home');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

const knexConfig = require('./knexfile');
const knexLogger = require('knex-logger');
const knex = require('knex')(knexConfig[ENV]);

const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(knexLogger(knex));
// Mount all resource routes
app.use('/admin', adminRoute(knex));
app.use('/home', homeRoute(knex));
app.use('/register', registerRoute(knex));
app.use('/login', loginRoute(knex)),


app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});