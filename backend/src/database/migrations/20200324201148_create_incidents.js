
exports.up = function(knex) {
    return knex.schema.createTable('incident', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('id_ong').notNullable();

        table.foreign('id_ong').references('id').inTable('ong');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incident');
};
