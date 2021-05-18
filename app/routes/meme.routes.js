module.exports = app => {
  const meme = require("../controllers/meme.controller.js");

  //Create a new Meme
  app.post("/meme/create", meme.createMeme);

  //Find a Meme by Name
  app.get("/meme/findByName/:name", meme.findByName);

  // Delete by idMeme
  app.delete("/meme/deleteById/:idMeme", meme.deleteById);

  // Retrieve some memes with username 
  app.get("/user/findMemesByUsername/:username", meme.findMemeByUsername);
  
  // Retrieve some memes with category name 
  app.get("/user/findMemesByCategoryName/:value", meme.findMemeByCategoryName);

  // Retrieve some memes with meme name 
  app.get("/user/findMemesByMemeName/:value", meme.findMemeByMemeName);
}