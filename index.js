'use strict'

const {
    append
} = require('express/lib/response');
// REQUIRES
var mongoose = require('mongoose');
var app = require('./app');

// PUERTO SERVIDOR
var port = process.env.port || 3999;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://enrique2020k:73017920@cluster0.4eout.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(
    () => {
        console.log('La conexión a la base de datos es correcta')
        // CREAR EL SERVIDOR
        app.listen(port, () => {
            console.log('El servidor http://localhost:3999 esta funcionando')
        });
    }
).catch(error => console.log(error));