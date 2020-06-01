const fetch = require("node-fetch");
const express = require("express");

const app = express();

app.get("/url/:url", (req, res) => {
  const url = req.params.url;
  const token = req.query.t;
  fetch(url, { headers: { Authorization: token } })
    .then((r) => r.blob())
    .then((result) => res.sendFile(result))
    .catch((err) => res.send("Error loading image"));
});

app.listen(8080, () => {
  console.log("Server listening");
});
