const fetch = require("node-fetch");
const express = require("express");

const app = express();

app.get("/url", (req, res) => {
  const url = req.query.url;
  const token = req.query.t;
  console.log(url, token);
  fetch(url, { headers: { Authorization: token } })
    .then((r) => r.blob())
    .then((blob) => {
      res.type(blob.type);
      blob.arrayBuffer().then((buf) => {
        res.send(Buffer.from(buf));
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).send("error loading image");
    });
});

app.listen(process.env.PORT || 3200, () => {
  console.log("Server listening");
});
