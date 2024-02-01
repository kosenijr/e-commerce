// requirements
require("dotenv").config();
const express = require("express");
const cors = require("cors");
// general variables
const [app, log, port] = [express(), console.log, 5000];

// logging env
log(process.env)

// use cors
app.use(cors());

// fetch and handle the data
// variable

// fetching
// async function getData(url=URL_311, data = {}) {

// const response = await fetch(URL_311, {
//   method: "GET",
//   mode: "cors",
//   cache: "no-cache",
//   credentials: "same-origin",

//   headers: {
//     "Content-Type": "application/json",
//     "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY
//   },
//   redirect: "follow",
//   referrerPolicy: "no-referrer",
//   body: JSON.stringify(data),
// });
// return response.json();
// }




// are we listening?
app.listen(port, function () {
  console.log(`Server is listening on Port: ${port}.`);
});


// run nodemon: npm run watch.