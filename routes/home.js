/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.post('/', (req, res) => {
    const driverID = [];
    let firstName = "";
    let lastName = "";
    const fullName = req.body.driver_name.split(" ");
    firstName += fullName[0];
    lastName += fullName[1];
    console.log(lastName)
    knex("drivers")
    .where("first_name", `${firstName}`)
    .andWhere("last_name", `${lastName}`)
    .select("id")
    .then((id) => {
      id.map(id => {
        driverID.push(id.id)
      })
      knex("reservations")
      .insert(
        {
          first_name: req.body.first_name,
          leaving_from: req.body.leaving_from,
          going_to: req.body.going_to,
          phone_number: req.body.phone_number,
          email: req.body.email,
          departure_date: req.body.departure_date,
          departure_time: req.body.departure_time,
          number_of_people: req.body.number_of_people,
          message: req.body.message,
          driver_name:req.body.driver_name,
          driver_id: driverID[0],

        }).returning("*").into("reservations").then(function(data){
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
    });

    })
    return router;
};