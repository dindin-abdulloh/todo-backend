const Knex = require('knex')({
        client: 'mysql',
        connection: {
          host : '127.0.0.1',
          user : 'root',
          password : '',
          database : 'todo-app'
        }
      });

module.exports = Knex