const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server started at http://localhost:${PORT}`)});

// ======== Endpoints ======== //
app.get("/", (request, response) => {
    response.json("Server works!");
});

app.get("/login/:user/:psswd", (request,response) => {
	response.json("siiiii");
});