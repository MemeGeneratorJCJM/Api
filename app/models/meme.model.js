const sql = require("./db.js");

// constructor
const Meme = function(meme) {
  this.name = meme.name;
  this.route = meme.route;
  this.idCategory = meme.idCategory;
};

Meme.create = (name,route,idCategory,result) => {
  sql.query("INSERT INTO memes (name,rute,idCategory) VALUES ($1,$2,$3);",[name,route,idCategory], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Meme");
    result(null, res.rows);
  });
};

Meme.deleteMemeById = (idMeme, result) => {
  sql.query("DELETE FROM memes WHERE idMeme = $1;",[meme], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Meme with the idMeme
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Meme with idMeme: ", idMeme);
    result(null, res);
  });
};

Meme.findMemesByUsername = (username, result) => {
  sql.query(
    "select memes.rute from users,memes where users.username like $1 and users.idMeme = memes.idMeme;",[username], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Memes: ", res.rows);
    result(null, res.rows);
  });
};

Meme.findMemesByCategoryName = (value, result) => {
  sql.query(
    "select memes.idMeme from memes where memes.name like $1;",[value], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Memes: ", res.rows);
    result(null, res.rows);
  });
};

Meme.findMemesByMemeName = (value, result) => {
  sql.query(
    "select memes.rute from memes where name like $1;",[value], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Memes: ", res.rows);
    result(null, res.rows);
  });
};

module.exports = Meme;