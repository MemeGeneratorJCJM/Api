const sql = require("./db.js");

// constructor
const Meme = function(meme) {
  this.name = meme.name;
  this.route = meme.route;
  this.idCategory = meme.idCategory;
};

Meme.create = (name,route,idCategory,result) => {
  sql.query("INSERT INTO memes (name,route,idCategory) VALUES ($1,$2,$3);",[name,route,idCategory], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Meme");
    result(null, { id: res.idUser });
  });
};

Meme.findMemeByName = (name, result) => {
  sql.query(`SELECT * FROM memes WHERE name like ${name}`, (err, res) => {
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
  console.log("tamos");
  sql.query(`DELETE FROM memes WHERE idMeme = ${idMeme}`, (err, res) => {
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

module.exports = Meme;