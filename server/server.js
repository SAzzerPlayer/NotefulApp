
// Connecting to express
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
//Creating an object of server
const app = express();
//Generator string key
const key_generator=require("random-key-generator");
//Define an handler for route "/"
///////
const jsonParser=express.json();
//Import classes of data

app.listen(3000);


