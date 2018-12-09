/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get('/', (req, res) => {
    knex("reservations")
      .select("*")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  });
  return router;
};
