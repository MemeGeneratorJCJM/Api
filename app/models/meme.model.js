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
    result(null, res);
  });
};

Meme.findMemeByName = (name, result) => {
  sql.query(`SELECT * FROM memes WHERE name like $1`,[name] (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found meme: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Meme with the id
    result({ kind: "not_found" }, null);
  });
};

Meme.deleteMemeById = (idMeme, result) => {
  sql.query(`DELETE FROM memes WHERE idMeme = $1`,[idMeme], (err, res) => {
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
    "select memes.rute from categories,memes where categories.name like $1 and memes.idCategory = categories.idCategory;",[value], (err, res) => {
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