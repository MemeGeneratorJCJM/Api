module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // Create a new User ✔️
  app.post("/signup", customers.create);

  // Retrieve all Users ✔️
  app.get("/users", customers.findAll);

  // Retrieve a single User with email ✔️
  app.get("/users/:email", customers.findOne);

  // Update a User with idUser ✔️
  app.put("/users/:idUser", customers.update);

  // Delete a User with idUser ✔️
  app.delete("/users/:idUser", customers.delete);

  // Delete all users ✔️
  app.delete("/users", customers.deleteAll);

  //Login User
  app.post("/login", customers.loginUser);
};
