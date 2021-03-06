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
app.use(bodyParser.json({
  limit: "1gb"
}));
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

// ======== Routes ======== //
require("./app/routes/meme.routes.js")(app);
require("./app/routes/customer.routes.js")(app);

// ======== Listener ======== //
app.listen(PORT, () => {console.log(`Server started at PORT:${PORT}`)});



// ======== Image API ======== //
app.post("/image-upload", (req, res) => {
    // collected image from a user
    const data = {
    	title: req.body.title,
		  image: req.body.image,
    }
    var a;
    // upload image here
    cloudinary.uploader.upload(data.image)
    .then((result) => {
    a = result.url;
      res.status(200).send({
        message: "success",
        result,
      });
    }).catch((error) => {
      res.status(500).send({
        message: "failure",
        error,
      });
    });
});


app.post("/persist-image", (request, response) => {
  const data = {
    title: request.body.title,
    image: request.body.image
  }
  cloudinary.uploader.upload(data.image)
  .then((image) => {
    db.pool.connect((err, client) => {
      //const insertQuery = 'select * from memes;';
      //const values = [data.title, image.public_id, image.secure_url];

      client.query('select * from memes;')
      .then((result) => {
		response.status(201).send({
        	message: "success",
        	result,
      	});
      }).catch((e) => {
        response.status(500).send({
          message: "failure",
          error,
        });
      })
    })  
  }).catch((error) => {
    response.status(500).send({
      message: "failure",
      error,
    });
  });
});






module.exports = app;
