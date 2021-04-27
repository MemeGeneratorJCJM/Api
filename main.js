const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));


// ======== Endpoints ======== //
app.get("/", (request, response) => {
    response.json("Server works!");
});

app.get("/login/:user/:psswd"), (request,response) =>{
	response.json("siiiii");
}