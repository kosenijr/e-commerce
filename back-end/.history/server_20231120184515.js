// requirements
require("dotenv").config();
const express = require("express");
const cors = require("cors");
// general variables
const [app, log, port] = [express(), console.log, 5000];
const subKey = process.env.SUBSCRIPTION_KEY;
const basicURL = process.env.URL_311;
// log(basicURL);
let date = new Date();
date = date.toDateString();
// log(date);
const subsc = process.env.SUBSCRIPTION_KEY;
// log(subsc);

// set up parameters
 const params = {
  fromdate: date,
  todate: date
 };
//  check params
// log(params.key1, params.key2);

// logging env
// log(process.env.URL_311, process.env.SUBSCRIPTION_KEY)

// combine params
const queryString = Object.keys(params)
.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
.join("&");

// log(params.key1)
log(queryString);

// combine url
const urlWithParams = `${basicURL}?${queryString}`;

log(urlWithParams);

// use cors
app.use(cors());

// fetch and handle the data
// variable

// fetching
fetch(urlWithParams)
.then(res => res.json())
.then(data => log(data))
.catch(error => console.error(`Error: ${error}`));

// are we listening?
app.listen(port, function () {
  console.log(`Server is listening on Port: ${port}.`);
});


// run nodemon: npm run watch.