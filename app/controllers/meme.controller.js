const Meme = require("../models/meme.model.js");

// Create and Save a new Meme
exports.createMeme = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Save Meme in the database
  Meme.create(req.body.name,req.body.route,req.body.idCategory, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Meme."
      });
    else res.send(data);
  });
};

// Find a Meme by Name
exports.findByName = (req, res) => {
  Meme.findMemeByName(req.params.name, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Meme with name ${req.params.name}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Meme with name " + req.params.name
        });
      }
    } else res.send(data);
  });
};

// Delete a Meme by Id
exports.deleteById = (req, res) => {
  Meme.deleteMemeById(req.params.idMeme, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Meme with id ${req.params.idMeme}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Meme with id " + req.params.idMeme
        });
      }
    } else res.send({ message: `Meme was deleted successfully!` });
  });
};