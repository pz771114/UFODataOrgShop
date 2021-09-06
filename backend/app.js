const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//import all the routes

const products = require("./routes/product");
const auth = require("./routes/auth");
app.use("/api/v1", products);
app.use("/api/v1", auth);
module.exports = app;
