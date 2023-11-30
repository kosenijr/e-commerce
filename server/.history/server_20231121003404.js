// requirements
require("dotenv").config();
const express = require("express");
const cors = require("cors");
// general variables
const [app, log, port] = [express(), console.log, 5000];
const basicURL = process.env.URL_311;
// log(basicURL);
let date1 = new Date();
date1 = date1.toDateString();
// log(date);
let date2 = date1.setDate(date1 + 1);
log(date1, date2)
const subsc = process.env.SUBSCRIPTION_KEY;
// log(subsc);

// set up parameters
const params = {
  fromdate: date1,
  todate: date2,
};
//  check params
// log(params.key1, params.key2);

// logging env
// log(process.env.URL_311, process.env.SUBSCRIPTION_KEY)

// combine params
const queryString = Object.keys(params)
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  .join("&");

// log(params.key1)
// log(queryString);

// combine url
const urlWithParams = `${basicURL}?${queryString}`;

log(urlWithParams);

// use cors
app.use(cors());

// fetch and handle the data
// variable

// fetching
fetch(urlWithParams, {
  method: "GET",
  withCredentials: true,
  headers: {
    "Ocp-Apim-Subscription-Key": subsc,
  },
})
  .then((res) => res.json())
  // .then((data) => log(data, data.days[0].items))
  .then((data) => log(data.days[0].items[0]))
  .catch((error) => console.error(`Error: ${error}`));

// are we listening?
app.listen(port, function () {
  console.log(`Server is listening on Port: ${port}.`);
});

// run nodemon: npm run watch.
 