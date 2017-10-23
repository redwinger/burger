var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burger", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
