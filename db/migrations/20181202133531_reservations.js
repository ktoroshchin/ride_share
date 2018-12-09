

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("reservations", function(table) {
      table.increments();
      table.string("first_name").notNullable();
      table.string("leaving_from").notNullable();
      table.string("going_to").notNullable();
      table.string("phone_number").notNullable();
      table.string("email").notNullable();
      table.string("departure_date").notNullable();
      table.string("departure_time").notNullable();
      table.string("number_of_people").notNullable();
      table.boolean('is_confirmed').notNullable().defaultTo(false);
      table.string("message", 1000);
      table.string("driver_name", 1000);
      table.integer("driver_id");
      table.timestamp('created_at').defaultTo(knex.fn.now());

      table
        .foreign("driver_id")
        .references("id")
        .on("drivers")
        .onDelete("cascade");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("reservations")
  ]);
};