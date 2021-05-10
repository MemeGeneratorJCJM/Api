// ======== Const ======== //
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();
var cors = require('cors');
var crypto = require('crypto');
//const upload = require('express-fileupload');

// ======== App ======== //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ======== Basic Endpoint ======== //
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API de MemeGenerator" });
});

// Enrutamiento para todas las peticiones que lleguen, prepara el header de la response para evitar errores
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// ======== MySQL ======== //
require("./app/routes/meme.routes.js")(app);
require("./app/routes/customer.routes.js")(app);

// ======== Listener ======== //
app.listen(PORT, () => {console.log(`Server started at http://localhost:${PORT}`)});

