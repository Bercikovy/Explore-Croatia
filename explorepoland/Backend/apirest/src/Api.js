const express = require("express");
const mongoose = require("mongoose");
const { db } = require("../model/db1");
const Db1 = require("../model/db1");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require('cors');
//const routes = require("./api/routes");

const app = express();
app.use(express.json());
app.use( bodyParser.json() );
app.use(cors());

const port = 3001;
//const uri = "mongodb+srv://Bercikovy:Pornos21@cluster1.6m2sduh.mongodb.net/?retryWrites=true&w=majority";

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
  
  app.get("/db1", async(req,res)=>{
        try{
          const articles= await Db1.find();
            res.json(articles);
            
          }
          catch(err){
            res.json({message:err});
        }
      });
  mongoose.connect( "mongodb+srv://Bercikovy:Pornos21@cluster1.6m2sduh.mongodb.net/db1?retryWrites=true&w=majority",{ useNewUrlParser: true });
  
  app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
  });