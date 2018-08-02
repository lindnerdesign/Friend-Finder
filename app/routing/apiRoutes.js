
//Load Data
var friendsList = require("../data/friends.js");
// console.log(friendsList);

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

    var newFriendScores = req.body.scores;
    console.log(newFriendScores);
   






    });
}