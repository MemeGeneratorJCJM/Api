// ======== Const ======== //
const express = require("express");
const app = express();
const cloudinary = require('cloudinary').v2;
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
var cors = require('cors');
//var crypto = require('crypto');
//const upload = require('express-fileupload');

// ======== App ======== //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ======== Cloudinary ======== //
cloudinary.config({
	cloud_name: "memegenerator",
	api_key: "247763431775767",
	api_secret: "1KXRrFi3N877fBy0xuLEUiR35SA"
});

// Enrutamiento para todas las peticiones que lleguen, prepara el header de la response para evitar errores
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, DELETE');
    next();
});

// ======== Basic Endpoint ======== //
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API de MemeGenerator" });
});

// ======== MySQL ======== //
require("./app/routes/meme.routes.js")(app);
require("./app/routes/customer.routes.js")(app);

// ======== Listener ======== //
app.listen(PORT, () => {console.log(`Server started at PORT:${PORT}`)});

