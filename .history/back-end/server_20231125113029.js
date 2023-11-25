// imports
const getFullDate = require("./addDate");

// requirements
require("dotenv").config();
const express = require("express");
const cors = require("cors");
// general variables
const [app, log, port] = [express(), console.log, 5000];
const basicURL = process.env.URL_311;
// log(basicURL);
const subsc = process.env.SUBSCRIPTION_KEY;
// log(subsc);

// date variables
let date1 = new Date();
date1 = date1.toDateString();
let date2 = new Date();
date2.setDate(date2.getDate() + 1);
date2 = date2.toDateString();
// log(date1, date2);

// check space for export
// log(fullDate);

// use cors
app.use(cors());

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
// log(urlWithParams);

// fetching
fetch(urlWithParams, {
  method: "GET",
  withCredentials: true,
  headers: {
    "Ocp-Apim-Subscription-Key": subsc,
  },
})
  .then((res) => res.json())
  // .then((data) => log(data, data.days[0].today_id, data.days[0].items[0], data.days[1].today_id, data.days[1].items[0]))
  // .then((data) => log(data.days[0].today_id, Date(data.days[0].today_id)))
  .then((data) => {

    // store raw date format to be used
    const rawDate1 = data.days[0].today_id;
    const rawDate2 = data.days[1].today_id;
    // log(rawDate1, rawDate2);


    // get element
    // const bodyElement = document.querySelector('body');
  })
  .catch((error) => console.error(`Error: ${error}`));

// are we listening?
app.listen(port, function () {
  console.log(`Server is listening on Port: ${port}.`);
});

// run nodemon: npm run watch.