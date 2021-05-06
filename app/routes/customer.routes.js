module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // Signup User ✔️
  app.post("/user/signup", customers.create);

  // Signin User ✔️
  app.post("/user/signin", customers.loginUser);

  // Retrieve all Users ✔️
  app.get("/user/getAll", customers.findAll);

  // Retrieve a single User with email ✔️
  app.get("/user/findByEmail/:email", customers.findOne);

  // Update a User with idUser ✔️
  app.put("/user/update/:idUser", customers.update);

  // Delete a User with idUser ✔️
  app.delete("/user/deleteById/:idUser", customers.delete);

  // Delete all users ✔️
  app.delete("/user/deleteAll", customers.deleteAll);
};
