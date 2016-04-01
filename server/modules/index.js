var express = require("express");
var router = express.Router();
var path = require("path");
var Hero = require("../models/heroes.js");

router.get("/heroes", function(req, res){
  Hero.find({}, function(err, data){
      if(err){
        console.log(err);
      }
      res.send(data);
  });
});

router.post("/heroes", function(req, res){
  console.log(req.body);
  var addedHero = new Hero({ "alias": req.body.alias, "first_name": req.body.first_name,
    "last_name" : req.body.last_name, "city" : req.body.city, "power_name": req.body.power_name
  });
  addedHero.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.status(200).send();
  });
});

router.delete("/heroes/:id", function(req, res){
  console.log(req.params.id);
  Hero.remove({_id:  req.params.id }, function(err, data){
    if(err){
      console.log(err);
    }
    res.status(200).send();
  });

});

router.get("/*", function(req, res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
