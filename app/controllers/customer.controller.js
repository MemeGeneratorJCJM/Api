const Customer = require("../models/customer.model.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Save User in the database
  Customer.create(req.body.email,req.body.username,req.body.password,req.body.idMeme, (err, data) => {
    if (err) {
      if (err.kind === "No Content") {
        res.status(204).send({
          message: `OKEI`
        });
      } else {
        res.status(500).send({
          message: "Some error occurred while creating the User."
        });
      }
    } else res.send(data);
  });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  Customer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    else res.send(data);
  });
};

// Find a single User with a email
exports.findOneUserByEmail = (req, res) => {
  Customer.findUserByEmail(req.params.email, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with email ${req.params.email}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with email " + req.params.email
        });
      }
    } else res.send(data);
  });
};

// Find asome memes with a username
exports.findMemeByUsername = (req, res) => {
  Customer.findMemesByUsername(req.params.username, (err, data) => {
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
  Customer.findMemesByCategoryName(req.params.value, (err, data) => {
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
  Customer.findMemesByMemeName(req.params.value, (err, data) => {
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

// Update a User identified by the idUser in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById(
    req.params.idUser,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.idUser}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.idUser
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a User with the specified idUser in the request
exports.delete = (req, res) => {
  Customer.remove(req.params.idUser, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.idUser}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.idUser
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  Customer.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Users."
      });
    else res.send({ message: `All Users were deleted successfully!` });
  });
};

//User login
exports.loginUser = (req,res) =>{
  Customer.login(req.body.email,req.body.password, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found User with email " + req.body.email + " and with password " + req.body.password
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with email " + req.body.email + " and with password " + req.body.password
        });
      }
    } else res.send(data);
  });
}