const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE reservations_id_seq RESTART WITH 1"),
    knex("reservations")
      .del()
      .then(function () {
        return Promise.all([
          knex("reservations").insert({
            first_name: faker.name.firstName(),
            leaving_from: faker.address.city(),
            going_to: faker.address.city(),
            phone_number: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            departure_date: faker.date.future(),
            departure_time: Math.round(faker.random.number()/1000),
            number_of_people: Math.round(faker.random.number()/1000),
            driver_id: 1
          }),

          knex("reservations").insert({
            first_name: faker.name.firstName(),
            leaving_from: faker.address.city(),
            going_to: faker.address.city(),
            phone_number: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            departure_date: faker.date.future(),
            departure_time: Math.round(faker.random.number()/1000),
            number_of_people: Math.round(faker.random.number()/1000),
            driver_id: 2
          }),

          knex("reservations").insert({
            first_name: faker.name.firstName(),
            leaving_from: faker.address.city(),
            going_to: faker.address.city(),
            phone_number: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            departure_date: faker.date.future(),
            departure_time: Math.round(faker.random.number()/1000),
            number_of_people: Math.round(faker.random.number()/1000),
            driver_id: 3
          }),

          knex("reservations").insert({
            first_name: faker.name.firstName(),
            leaving_from: faker.address.city(),
            going_to: faker.address.city(),
            phone_number: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            departure_date: faker.date.future(),
            departure_time: Math.round(faker.random.number()/1000),
            number_of_people: Math.round(faker.random.number()/1000),
            driver_id: 4
          })

        ]);
      })
  ]);
};