var express = require("express");
var router = express.Router();

var newMessageModules = require("./new");
const messages = newMessageModules.messages;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", messages: messages });
});

module.exports = router;
