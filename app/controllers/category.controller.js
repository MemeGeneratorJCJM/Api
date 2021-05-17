const Category = require("../models/category.model.js");

// Create and Save a new category
exports.createcategory = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Save category in the database
  Category.create(req.body.name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the category."
      });
    else res.send(data);
  });
};

// Find a category by Name
exports.findByName = (req, res) => {
  Category.findcategoryByName(req.params.name, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found category with name ${req.params.name}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving category with name " + req.params.name
        });
      }
    } else res.send(data);
  });
};

// Delete a category by Id
exports.deleteById = (req, res) => {
  Category.deletecategoryById(req.params.idcategory, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found category with id ${req.params.idcategory}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete category with id " + req.params.idcategory
        });
      }
    } else res.send({ message: `category was deleted successfully!` });
  });
};