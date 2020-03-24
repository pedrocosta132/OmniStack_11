
exports.up = function(knex) {
  return knex.schema.createTable('ong', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('cellphone').notNullable();
      table.string('city').notNullable();
      table.string('postal', 4).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ong');
};
