var mongoose = require("mongoose");
var mongoURI = "mongodb://localhost/heroes_db";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error", function(err){
  console.log("Mongo connection error: ", err);
});

MongoDB.on("open", function(){
  console.log("Mongo connection is open");
});

module.exports = MongoDB;
