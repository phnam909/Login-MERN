const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const http = require("http");
const dotenv = require("dotenv").config();
const app = express();

console.log("process.env.PORT" ,process.env.PORT);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running at port " + process.env.PORT);
});

