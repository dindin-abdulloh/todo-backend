'use strict';
const Joi = require('joi')
const Hapi = require('@hapi/hapi');
const TaskController = require('./controllers/TaskController');
const init = async () => {

    const server = Hapi.server({
        port: 3000,
       host: 'localhost'
    });

    server.route({
        method: 'GET',	
        path: '/',
        handler: TaskController.taskList
    });

    server.route({
        method: 'POST',	
        path: '/create',
        handler: TaskController.taskCreate, 
    });

    server.route({
        method: 'PUT',	
        path: '/{id}',
        handler: TaskController.taskUpdate, 
    });

    server.route({
        method: 'DELETE',	
        path: '/{id}',
        handler: TaskController.taskDelete, 
    });
    



    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();