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

// Find asome memes with a username
exports.findMemeByUsername = (req, res) => {
  Meme.findMemesByUsername(req.params.username, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found memes with username ${req.params.username}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving memes with username " + req.params.username
        });
      }
    } else res.send(data);
  });
};

// Find some memes with username, category name or meme name 
exports.findMemeByCategoryName = (req, res) => {
  Meme.findMemesByCategoryName(req.params.value, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with value ${req.params.value}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with value " + req.params.value
        });
      }
    } else res.send(data);
  });
};

// Find some memes with username, category name or meme name 
exports.findMemeByMemeName = (req, res) => {
  Meme.findMemesByMemeName(req.params.value, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with value ${req.params.value}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with value " + req.params.value
        });
      }
    } else res.send(data);
  });
};