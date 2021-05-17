const sql = require("./db.js");

// constructor
const Category = function(category) {
  this.name = category.name;
};

Category.create = (name,result) => {
  sql.query("INSERT INTO categories (name) VALUES ($1);",[name], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created Category");
    result(null, res);
  });
};

Category.findcategoryByName = (name, result) => {
  sql.query(`SELECT * FROM categories WHERE name like ${name}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found category: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found category with the id
    result({ kind: "not_found" }, null);
  });
};

Category.deletecategoryById = (idcategory, result) => {
  sql.query(`DELETE FROM categories WHERE idcategory = ${idcategory}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found category with the idcategory
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted category with idcategory: ", idcategory);
    result(null, res);
  });
};

module.exports = Category;