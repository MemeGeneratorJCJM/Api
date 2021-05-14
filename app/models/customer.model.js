const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  this.email = customer.email;
  this.username = customer.username;
  this.password = customer.password;
  this.idMeme = customer.idMeme;
};

Customer.create = (email,username,password,idMeme, result) => {
  sql.query("INSERT INTO users (username,password,email,idMeme) VALUES ($1,$2,$3,$4);",[username,password,email,idMeme], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    const createdUser = '{"Username": "'+username+'","Email": "'+email+'","Password": "'+password+'","idMeme": "'+idMeme+'"}';
    console.log("Customer created with Username: "+username+",Email: "+email+",Password: "+password+",idMeme:"+idMeme);
    result(null,createdUser);
  });
};

Customer.findUserByEmail = (email, result) => {
  sql.query("SELECT * FROM users WHERE email like $1",[email], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("User: ", res.rows);
    result(null, res.rows);
  });
};

Customer.findMemesByUsername = (username, result) => {
  sql.query(
    "select memes.file from users,memes where users.username like $1 and users.idMeme = memes.idMeme;",[username], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Memes: ", res.rows);
    result(null, res.rows);
  });
};

Customer.findMemesByCategoryName = (value, result) => {
  sql.query(
    "select memes.file from categories,memes where categories.name like $1 and memes.idCategory = categories.idCategory;",[value], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Memes: ", res.rows);
    result(null, res.rows);
  });
};

Customer.findMemesByMemeName = (value, result) => {
  sql.query(
    "select memes.file from memes where name like $1;",[value], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Memes: ", res.rows);
    result(null, res.rows);
  });
};

Customer.getAll = result => {
  sql.query("SELECT * FROM users;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res.rows);
    result(null, res.rows);
  });
};

Customer.updateById = (id, customer, result) => {
  //Update user
  sql.query(
    "UPDATE users SET email = $1, username = $2, password = $3, idMeme = $4 WHERE idUser = $5",
    [customer.email, customer.username, customer.password, customer.idMeme, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

Customer.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE idUser = $1", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res.rows);
  });
};

Customer.removeAll = result => {
  sql.query("DELETE FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} users`);
    result(null, res.rows);
  });
};

Customer.login = (email, password, result) => {
  sql.query(
    "SELECT * FROM users WHERE email like $1 and password like $2;",[email,password],(err,res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // hay que tratar cuando el user no existe, devuelve status 200 OK
    if (!result || !result.rows || !result.rows.length){
      console.log("error: ", err);
      result(null,err);
      return "NO";
    }else{
      result(null, res.rows);
      return "YES";
    }
  });
};

module.exports = Customer;
