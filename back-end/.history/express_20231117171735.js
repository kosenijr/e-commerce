// requirements
const axios = require("axios");
const express = require("express");
// Common JS Module Compatibility
// const fetch = require("node-fetch");
// general variables
const [app, port] = [express(), 5000];

// fetch?
// fetch("https://api.nyc.gov/public/api")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

import("node-fetch")
  .then(({ default: fetch ("https://api.nyc.gov/public/api/") }) => {
    // Use 'fetch' here after it's been imported
    // Rest of your code that uses 'fetch'
  })
  .catch((err) => {
    // Handle any potential import errors here
    console.error("Error importing 'node-fetch':", err);
  });

// what are we getting
app.get(`/`, async function (req, res) {
  await res.send(data);
});

// are we listening?
app.listen(port, function () {
  console.log(`Server is working now. It is listening on Port: ${port}.`);
});
