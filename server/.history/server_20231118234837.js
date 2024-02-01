// requirements
const express = require("express");
const cors = require("cors");
// general variables
const [app, log, port] = [express(), console.log, 5000];

// use cors
app.use(cors());

// fetch and handle the data
// variable

// fetching
const listInfo = await (req, res) => {
  fetch("https://pokeapi.co/api/v2");
  const data = await response.json();
  console.log(data);
}

// are we listening?
app.listen(port, function () {
  console.log(`Server is listening on Port: ${port}.`);
});


// run nodemon: npm run watch.