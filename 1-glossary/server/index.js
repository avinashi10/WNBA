require("dotenv").config();
const express = require("express");
const path = require("path");

//require middleware
var cors = require('cors');

//require router
const router = require('./routes.js');

//set app as an express server
const app = express();

//have app use middleware
app.use(express.json());
app.use(cors());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

//send requests to routes
app.use('', router);

//set the port number
process.env.PORT = 3001;

app.listen(process.env.PORT);
//console.log('PROCESS OBJ: ', process.env);
console.log(`Listening at http://localhost:${process.env.PORT}`);
