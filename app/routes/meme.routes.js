module.exports = app => {
  const meme = require("../controllers/meme.controller.js");

  //Create a new Meme
  //app.post("/meme/create", meme.createMeme);

  //Find a Meme by Name
  app.get("/meme/findByName/:name", meme.findByName);

  // Delete by idMeme
  app.delete("/meme/deleteById/:idMeme", meme.deleteById);
}