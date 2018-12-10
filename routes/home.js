/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.post('/', (req, res) => {
    knex("reservations")
      .insert(req.body).returning("*").into("reservations").then(function(data){
        res.send(data);
      });
    });
      return router;
};