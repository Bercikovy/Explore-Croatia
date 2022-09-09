
//const mongoose = require("mongoose");

//const schema = mongoose.Schema({

  //  title: String,
  //  title_link: String,
   // content: String,
   // image: String
 
//});

//const Db1 = mongoose.model('db1', schema);

///module.exports = Db1;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Db1 = new Schema({
    title: String,
    content: String
    
    
    
    
    
});

module.exports=mongoose.model('collections', Db1);