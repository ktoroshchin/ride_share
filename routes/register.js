/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET;
const JWT_SECRET2 = process.env.SECRET2;



module.exports = (knex) => {

  router.post('/', (req, res) => {
    knex("drivers")
      .insert(req.body)
      .returning("*")
      .into("drivers")
      .then(function(data){
        console.log(data)
        var token = jwt.sign({id: data[0].id}, JWT_SECRET,{expiresIn: 86400} )
        var token2 = jwt.sign({first_name: data[0].first_name}, JWT_SECRET2,{expiresIn:86400})

        res.json({
          data: data,
          token: token,
          token2: token2
          });
      })
      .catch(err => res.sendStatus(404));
  });
  return router;
};