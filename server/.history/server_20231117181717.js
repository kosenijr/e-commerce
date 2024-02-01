// requirements
const express = require("express");
const fetch = require("node-fetch");
// general variables
const [app, log, port] = [express(), console.log, 5000];

// fetch and handle the data
// variable
let fetchedData;

// fetching
fetch("https://api.nyc.gov/public")
  .then((res) => res.json())
  .then((data) => {
    fetchedData = data;
    log("Data fetched successfully.");
  })
  .catch((error) => console.error(`Error fetching data:, ${error}`));

// what are we getting
app.get(`/`, function (req, res) {
  res.send(data);
});

// are we listening?
app.listen(port, function () {
  console.log(`Server is working now. It is listening on Port: ${port}.`);
});
