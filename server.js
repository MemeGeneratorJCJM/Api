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

// image upload API
app.post("/image-upload", (request, response) => {
    // collected image from a user
    const data = {
      image: request.body.image,
    }

    // upload image here
    cloudinary.uploader.upload(data.image)
    .then((result) => {
      response.status(200).send({
        message: "success",
        result,
      });
    }).catch((error) => {
      response.status(500).send({
        message: "failure",
        error,
      });
    });

});
// persist image
app.post("/persist-image", (request, response) => {
  // collected image from a user
  const data = {
    title: request.body.title,
    image: request.body.image
  }

  // upload image here
  cloudinary.uploader.upload(data.image)
  .then((image) => {
    db.pool.connect((err, client) => {
      // inset query to run if the upload to cloudinary is successful
      const insertQuery = 'INSERT INTO images (title, cloudinary_id, image_url) VALUES($1,$2,$3) RETURNING *';
      const values = [data.title, image.public_id, image.secure_url];

      // execute query
      client.query(insertQuery, values)
      .then((result) => {
        result = result.rows[0];

        // send success response
        response.status(201).send({
          status: "success",
          data: {
            message: "Image Uploaded Successfully",
            title: result.title,
            cloudinary_id: result.cloudinary_id,
            image_url: result.image_url,
          },
        })
      }).catch((e) => {
        response.status(500).send({
          message: "failure",
          e,
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

app.get("/retrieve-image/:cloudinary_id", (request, response) => {
  // data from user
  const { cloudinary_id } = request.params;

  db.pool.connect((err, client) => {
    // query to find image
    const query = "SELECT * FROM images WHERE cloudinary_id = $1";
    const value = [cloudinary_id];

    // execute query
    client
      .query(query, value)
      .then((output) => {
        response.status(200).send({
          status: "success",
          data: {
            id: output.rows[0].cloudinary_id,
            title: output.rows[0].title,
            url: output.rows[0].image_url,
          },
        });
      })
      .catch((error) => {
        response.status(401).send({
          status: "failure",
          data: {
            message: "could not retrieve record!",
            error,
          },
        });
      });
  });
});


module.exports = app;
