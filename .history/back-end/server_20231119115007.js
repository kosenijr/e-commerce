// requirements
require("dotenv").config();
const express = require("express");
const cors = require("cors");
// general variables
const [app, log, port] = [express(), console.log, 5000];

// logging env
// log(process.env.URL_311, process.env.SUBSCRIPTION_KEY)

// use cors
app.use(cors());

// fetch and handle the data
// variable

// fetching
async function getData(url=process.env.URL_311, data = {}) {

const response = await fetch(process.env.URL_311, {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",

  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": process.env.SUBSCRIPTION_KEY
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  body: JSON.stringify(data),
});
log(response.json(), "hey");
return response.json();
}


// are we listening?
app.listen(port, function () {
  console.log(`Server is listening on Port: ${port}.`);
});


// run nodemon: npm run watch.