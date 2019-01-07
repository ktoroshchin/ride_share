/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const JWT_SECRET = 'rideshare'
var jwt = require('jsonwebtoken');



module.exports = (knex) => {

  router.post('/', (req, res) => {
    knex("drivers")
      .insert(req.body)
      .returning("*")
      .into("drivers")
      .then(function(data){
        console.log(data)
        // var token = jwt.sign({id: data[0].id}, JWT_SECRET,{expiresIn: 86400} )
        res.json({
          data: data,
          });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  });
  return router;
};