/*jshint esversion: 6 */

require('dotenv').config();

const PORT = process.env.PORT || 8000;
// const ENV = process.env.ENV || 'development';
const options = require('./knexfile')

const express = require('express');
const adminRoute = require('./routes/admin');
const homeRoute = require('./routes/home');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const listDriverNames = require('./routes/driverInfo');

const knexConfig = require('./knexfile');
const knexLogger = require('knex-logger');
const knex = require('knex')(options);

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
app.use('/login', loginRoute(knex));
app.use('/driverInfo', listDriverNames(knex));

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});