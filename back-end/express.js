const express = require("express");
const [app, port] = [express(), 5000];

// what are we getting
app.get(`/`, function (req, res) {
  res.send(`Hello world!`);
});

// are we listening?
app.listen(port, function () {
  console.log(`Server is working now. It is listening on Port: ${port}.`);
});
