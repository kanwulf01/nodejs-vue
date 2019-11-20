const express = require('express')
const app = express()
const cors = require('cors');

//error solucionado
const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
}}

//middlewares
//funciones que se ejecutan antes de llegar a la ruta
app.use(cors(config.application.cors.server
    ));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
//traduce lo que se envie del fronten json a la api en objetos



//routes

const ruta = require('./routes/index.js')
app.use(ruta);

app.listen(8000)
console.log('inicio')