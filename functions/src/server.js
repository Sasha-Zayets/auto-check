const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./routes");

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("", router);

module.exports = { app };
