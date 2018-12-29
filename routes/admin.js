/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get('/:id', (req, res) => {
    knex("reservations")
      .select("*")
      .where("driver_id", req.params.id )
      .orderBy("departure_date","asc")
      .then((data) => {
        res.send(data);
      });
  });
  router.post('/:id', (req, res) => {
    knex("reservations")
     .where({ id: req.params.id})
     .del()
     .then((data) => {
       // res.json(data);
     })
     .catch((err) => {
       console.log(err);
       throw err;
     })
     .finally(() => {
     });
  })
  return router;
};






