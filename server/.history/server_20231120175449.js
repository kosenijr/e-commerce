// requirements
require("dotenv").config();
const express = require("express");
const cors = require("cors");
// general variables
const [app, log, port] = [express(), console.log, 5000];
const subKey = [process.env.SUBSCRIPTION_KEY];
const basicURL = [process.env.URL_311];
log(basicURL);
let date = new Date();
date = date.toDateString();
// log(date);

// set up parameters
 const params = {
  key: date,
  subsc: subKey
 };

//  check params
log(params.key, params.subsc)

// logging env
// log(process.env.URL_311, process.env.SUBSCRIPTION_KEY)

// use cors
app.use(cors());

// fetch and handle the data
// variable

// fetching


// are we listening?
app.listen(port, function () {
  console.log(`Server is listening on Port: ${port}.`);
});


// run nodemon: npm run watch.