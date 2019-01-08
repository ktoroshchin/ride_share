/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
var bcrypt = require('bcryptjs');
const JWT_SECRET = "rideshare"
const JWT_SECRET2 = "ridesshare"
require('dotenv').config();


var jwt = require('jsonwebtoken');

module.exports = (knex) => {

  router.post('/', (req, res) => {
    knex("drivers")
      .select("*")
      .where({email: req.body.email,})
      .then(function(foundUser){
        if(foundUser[0].email && bcrypt.compareSync(req.body.password, foundUser[0].password) ){
          var token = jwt.sign({id: foundUser[0].id}, JWT_SECRET,{expiresIn: 86400})
          var token2 = jwt.sign({first_name: foundUser[0].first_name}, JWT_SECRET2,{expiresIn:86400})
          res.json({
            user: foundUser,
            token: token,
            token2: token2,
        });
        } else {
          res.sendStatus(404);
        }
      })
      .catch(err => res.sendStatus(404));
  });
  return router;
};

