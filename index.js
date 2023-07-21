const express = require("express");
const mongoose = require("mongoose");
const connect = require("./db");

// const router = require("./routers/router");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routers/router"));

connect();
app.listen(3030, () => {
  console.log("Connected PORT 3030");
});
