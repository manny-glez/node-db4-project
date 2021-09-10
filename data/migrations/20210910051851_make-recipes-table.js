
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', table => {
    table.increments()
    table.text('recipe_name', 128)
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipes')  
};
