'use strict'

// REQUIRES
var express = require('express');
var bodyParser = require('body-parser');

// USANDO EXPRESS
var app = express()


// CARGA DE ARCHIVOS DE RUTAS
var publicaciones_routes = require('./routes/publicaciones');

// MIDDLEWARES
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// CONFIGURACION DE CABECERAS Y CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    req.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// REESCRIBIR RUTAS
app.use('/api', publicaciones_routes);

// EXPORTAR MODULO
module.exports = app;

// http://localhost:3999/api/publicaciones                  GET
// http://localhost:3999/api/publicaciones/1                GET
// http://localhost:3999/api/publicaciones/save             POST


// BASE DE DATOS:

// 

/*


Nombre de la base de datos: "otakumon" 
Coleccion: "publicaciones"

La base de datos tiene la siguiente forma:
{
    publicacionId: 1                                --> Int32
    descripcion: ":) BIENVENIDO A OTAKUMON :)"      --> String
}


*/

// MI BASE DE DATOS
// https://cloud.mongodb.com/v2/6151c4383910b57106231e37#metrics/replicaSet/629b749853edfc0092f80d84/explorer/otakumon/publicaciones/find