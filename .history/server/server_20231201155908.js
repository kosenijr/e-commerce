// imports
const getFullDate = require("./addDate");
// requirements
const path = require("path");
require("dotenv").config({path: {`../config`}});
const express = require("express");
const cors = require("cors");
// const { url } = require("inspector");



// procedural variables
const [app, log, port] = [express(), console.log, 5000];
const basicURL = process.env.REACT_APP_BASIC_URL;
const subsc = process.env.SUBSCRIPTION_KEY;
// date variables
let [date1, date2] = [new Date(), new Date()];
date2.setDate(date2.getDate() + 1);
[date1, date2] = [date1.toDateString(), date2.toDateString()];

log(process.env);

// use cors
app.use(cors());

// set up parameters
const params = {
  fromdate: date1,
  todate: date2,
};

// combine params
const queryString = Object.keys(params)
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  .join("&");

// combine url
const urlWithParams = `${basicURL}?${queryString}`;
// log(urlWithParams);

// getting data
app.get("/", (req, res) => {
  // fetching
  fetch(urlWithParams, {
    method: "GET",
    withCredentials: true,
    headers: {
      "Ocp-Apim-Subscription-Key": subsc,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // store raw date format to be used
      const [rawDate1, rawDate2] = [
        data.days[0].today_id,
        data.days[1].today_id,
      ];

      const [dateToday, detailsToday, dateTomorrow, detailsTomorrow] = [
        getFullDate(rawDate1),
        data.days[0].items[0],
        getFullDate(rawDate2),
        data.days[1].items[0],
      ];
      log([dateToday, detailsToday, dateTomorrow, detailsTomorrow]);
      res.json([dateToday, detailsToday, dateTomorrow, detailsTomorrow]);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    });
});
// are we listening?
app.listen(port, function () {
  console.log(`Server is listening on Port: ${port}.`);
});

// run nodemon: npm run watch.
// package.json:
// "watch": "nodemon ./server.js"