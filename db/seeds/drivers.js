const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE drivers_id_seq RESTART WITH 1"),
    knex("drivers")
      .del()
      .then(function () {
        return Promise.all([
          knex("drivers").insert({
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            password: faker.internet.password(),
            vehicle_type: faker.random.number(),
            email: faker.internet.email()

          }),

          knex("drivers").insert({
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            password: faker.internet.password(),
            vehicle_type: faker.random.number(),
            email: faker.internet.email()
          }),

          knex("drivers").insert({
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            password: faker.internet.password(),
            vehicle_type: faker.random.number(),
            email: faker.internet.email()
          }),

          knex("drivers").insert({
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            password: faker.internet.password(),
            vehicle_type: faker.random.number(),
            email: faker.internet.email()
          })

        ]);
      })
  ]);
};
