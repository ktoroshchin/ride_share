/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.post('/', (req, res) => {
    knex("drivers")
      .insert(req.body).returning("*").into("drivers").then(function(data){
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  });
  return router;
};