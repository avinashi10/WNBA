const express = require("express");
const path = require("path");

//require middleware
var cors = require('cors');
var morgan = require('morgan');

//require router
const router = require('./routes.js');

//set app as an express server
const app = express();

//have app use middleware
app.use(express.json());
app.use(cors());
app.use(morgan());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

//send requests to routes
app.use('', router);

app.listen(3001);
console.log("Listening at http://localhost:3001");
