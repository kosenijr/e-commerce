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
let date2 = new Date();
date2.setDate(date2.getDate() + 1);
date2 = date2.toDateString();
// log(date1, date2);
const subsc = process.env.SUBSCRIPTION_KEY;
// log(subsc);
const inputDate=20231123;

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

// use cors
app.use(cors());

// extract year, month, and day from input
const year = Math.floor(inputDate/10000);
const month = Math.floor((inputDate % 10000) / 100);
const day = inputDate % 100;

// set up arrays for days and months
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// log(year, month, day);
// log(...daysOfWeek, ...months)

const dayOfWeek = daysOfWeek[new Date(`${year}-${month}-${day + 1}`).getDay()];
log(dayOfWeek);

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

  .catch((error) => console.error(`Error: ${error}`));

// are we listening?
app.listen(port, function () {
  console.log(`Server is listening on Port: ${port}.`);
});

// run nodemon: npm run watch.
 