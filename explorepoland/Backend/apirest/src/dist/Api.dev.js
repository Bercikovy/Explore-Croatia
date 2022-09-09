"use strict";

var express = require("express");

var mongoose = require("mongoose");

var _require = require("../model/db1"),
    db = _require.db;

var Db1 = require("../model/db1");

var dotenv = require("dotenv").config();

var bodyParser = require("body-parser");

var cors = require('cors'); //const routes = require("./api/routes");


var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
var port = 3001; //const uri = "mongodb+srv://Bercikovy:Pornos21@cluster1.6m2sduh.mongodb.net/?retryWrites=true&w=majority";
//mongoose.connect(uri, {
// useNewUrlParser: true,
//useCreateIndex: true,
//useUnifiedTopology: true,
//});
//const connection = mongoose.connection;
//connection.once("open", () => {
// console.log("MongoDB database connection established successfully.");
//});
//app.get("/db1", async (req, res) => {
//try{
//const places= await Dbt.find();
//res.json(places);
//console.log(places);
// }
//catch(err){
//res.json({message:err});
// }
//app.get("/db1", async (req, res) => { 
//await Db1.find( {}, (error, result) => {
//console.log("place from db: ", result);
//res.send(result);
//console.log(result);
//}).clone().catch(function(error){ console.log(err)})
//});

app.get("/db1", function _callee(req, res) {
  var articles;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Db1.find());

        case 3:
          articles = _context.sent;
          res.json(articles);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.json({
            message: _context.t0
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
mongoose.connect("mongodb+srv://Bercikovy:Pornos21@cluster1.6m2sduh.mongodb.net/db1?retryWrites=true&w=majority", {
  useNewUrlParser: true
});
app.listen(port, function () {
  console.log("App is listening at http://localhost:".concat(port));
});