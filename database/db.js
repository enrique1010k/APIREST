const {
    MongoClient
} = require("mongodb");
const client = new MongoClient("mongodb+srv://enrique2020k:73017920@cluster0.4eout.mongodb.net/?retryWrites=true&w=majority");

client.connect().then(
    (response) => {
        console.log('La conexion a la base de datos es correcta - url:' + response.url);
    },
    (error) => {
        console.log('error:' + error)
    }
)

module.exports = client;