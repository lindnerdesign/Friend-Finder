var path = require("path");


module.exports = function(app) {

  app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/../data/friends.js"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};