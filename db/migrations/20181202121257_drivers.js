
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("drivers", function(table) {
      table.increments();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("password").notNullable();
      table.string("vehicle_type");
      table.string("email").notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("drivers")
  ]);
};

