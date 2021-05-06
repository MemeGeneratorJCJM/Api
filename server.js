// ======== Const ======== //
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();

// ======== App ======== //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API de MemeGenerator" });
});

// ======== MySQL ======== //
require("./app/routes/customer.routes.js")(app);

// ======== Listener ======== //
app.listen(PORT, () => {console.log(`Server started at http://localhost:${PORT}`)});