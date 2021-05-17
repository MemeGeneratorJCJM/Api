module.exports = app => {
  const category = require("../controllers/category.controller.js");

  //Create a new category
  app.post("/category/create", category.createCategory);

  //Find a category by Name
  app.get("/category/findByName/:name", category.findByName);

  // Delete by idcategory
  app.delete("/category/deleteById/:idcategory", category.deleteById);
}