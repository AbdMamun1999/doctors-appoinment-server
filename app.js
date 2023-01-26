const express = require("express");
const app = express();
const cors = require("cors");

// middleswares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("routes is working");
});

module.exports = app;
