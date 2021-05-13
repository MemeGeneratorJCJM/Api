module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, access-token, Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
  // Signup User ✔️
  app.post("/user/signup", customers.create);

  // Signin User ✔️
  app.post("/user/signin", customers.loginUser);

  // Retrieve all Users ✔️
  app.get("/user/getAll", customers.findAll);

  // Retrieve a single User with email ✔️
  app.get("/user/findByEmail/:email", customers.findOne);

  // Retrieve some memes with username ✔️
  app.get("/user/findMemesByUsername/:username", customers.findOneByUsername);

  // Retrieve some memes with username, category name or meme name 
  app.get("/user/findMemes/:value", customers.findSomeMemes);

  // Update a User with idUser ✔️
  app.put("/user/update/:idUser", customers.update);

  // Delete a User with idUser ✔️
  app.delete("/user/deleteById/:idUser", customers.delete);

  // Delete all users ✔️
  app.delete("/user/deleteAll", customers.deleteAll);
};
