var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require("./modules/db.js");
var index = require("./modules/index.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("port", (process.env.PORT || 4242));

app.use("/", index);

app.listen(app.get("port"), function(){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
