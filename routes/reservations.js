const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get('/', (req, res) => {
    knex("reservations")
      .select("*")
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
      });
  });
  return router;
};

