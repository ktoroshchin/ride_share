/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get('/', (req, res) => {
    knex("reservations")
      .select("*")
      .orderBy("departure_date","asc")
      .then((data) => {
        res.send(data);
      });
  });
  router.post('/:id', (req, res) => {
    console.log("deleting...")
    knex("reservations")
     .where({ id: req.params.id})
     .del()
     .then((data) => {
       console.log("LOGGGING DATA:" + data);
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






