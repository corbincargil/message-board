var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET users listing. */
router.get("/", function (req, res) {
  res.render("new", { title: "New Message" });
});

router.post("/", function (req, res) {
  console.log(req.body);
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(newMessage);

  res.redirect("/");
});

module.exports = {
  router: router,
  messages: messages,
};
