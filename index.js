const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const natters = {};

app.get("/natters", (req, res) => {
  res.send(natters);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "SomeoneNattered") {
    const { id, natter } = data;

    natters[id] = { id, natter, crossNatter: [] };
  }

  if (type === "SomeoneCrossNattered") {
    const { id, crossNatter, natterId } = data;

    const natter = natters[natterId];
    natter.crossNatter.push({ id, crossNatter });
  }
  console.log(natters);

  res.send({});
});

app.listen(5002, "127.0.0.1", (req, res) => console.log("Listening on 5002"));
