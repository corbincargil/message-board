var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: "2022-11-10 at 17:26",
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: "2022-11-10 at 17:28",
  },
];

/* GET users listing. */
router.get("/", function (req, res) {
  res.render("new", { title: "New Message" });
});

router.post("/", function (req, res) {
  console.log(req.body);
  x = new Date();
  y =
    x.getFullYear() +
    "-" +
    x.getMonth() +
    "-" +
    x.getDay() +
    " at " +
    x.getHours() +
    ":" +
    x.getMinutes();
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: y,
  };
  messages.push(newMessage);

  res.redirect("/");
});

module.exports = {
  router: router,
  messages: messages,
};
