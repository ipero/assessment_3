var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Hero = new Schema({
  "alias" : String, "first_name" : String, "last_name" : String, "city" : String, "power_name": String
});

module.exports = mongoose.model("Hero", Hero);
