// requirements
const express = require("express");
const fetch = require("node-fetch");
// general variables
const [app, port] = [express(), 5000];

// fetch and handle the data
fetch("https://api.nyc.gov/public")
  .then((res) => res.json())
  .then((data) => console.log(data));

// what are we getting
app.get(`/`, async function (req, res) {
  await res.send(data);
});

// are we listening?
app.listen(port, function () {
  console.log(`Server is working now. It is listening on Port: ${port}.`);
});
