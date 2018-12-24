/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.get('/',(req, res) => {
    knex('drivers')
    .select('*')
    .then(data => {
      res.send(data)
    });
  });
  return router;
}