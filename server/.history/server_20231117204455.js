// requirements
const express = require("express");
// general variables
const [app, log, port] = [express(), console.log, 5000];

// fetch and handle the data
// variable
let fetchedData;

// fetching
fetch("https://api.nyc.gov/public/api/GetCalendar")
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