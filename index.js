const fetch = require("node-fetch");
const express = require("express");

const app = express();

app.get("/url", (req, res) => {
  const url = req.query.url;
  const token = req.query.t;
  fetch(url, { headers: { Authorization: token } })
    .then((r) => r.blob())
    .then((result) => res.sendFile(result))
    .catch((err) => res.send("Error loading image", err));
});

app.listen(process.env.PORT || 80, () => {
  console.log("Server listening");
});
