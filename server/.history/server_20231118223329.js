// requirements
const express = require("express");
const cors = require("cors");
// general variables
const [app, log, port] = [express(), console.log, 5000];

// use cors
app.use(cors());

// fetch and handle the data
// variable
let fetchedData;

// fetching
fetch("https://api.nyc.gov")
  .then((res) => res.json())
  .then((data) => {
    fetchedData = data;
    log("Data fetched successfully.");
  })
  .catch((error) => console.error(`Error fetching data:, ${error}`));

// what are we getting
app.get("/", function (req, res) {
  res.send(fetchedData);
});

// are we listening?
app.listen(port, function () {
  console.log(`Server is listening on Port: ${port}.`);
});


// run nodemon: npm run watch.