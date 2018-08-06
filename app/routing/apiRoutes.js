//Load Data
var friendList = require("../data/friends.js");
// console.log(friendsList);

module.exports = function (app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendList);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {

  var newFriendScores = req.body.scores;
    // console.log(newFriendScores);

  var scoresMatched = [];
  var closestMatch = 0;

  //Compare the two friends scores (arrays)
  for (var i = 0; i < friendList.length; i++) {
    
    var scoreDifference = 0;

    for (var x = 0; x < newFriendScores.length; x++) {
      scoreDifference += (Math.abs(parseInt(friendList[i].scores[x])) - (parseInt(newFriendScores[x])));
    }
    scoresMatched.push(scoreDifference);
  }

  //find the two closest match
  for (var j = 0; j < scoresMatched.length; j++) {
    if (scoresMatched[j] <= scoresMatched[closestMatch]){
      closestMatch = j;
    }
  }
  
  friendList.push(req.body);

  var bestFriend = friendList[closestMatch];
  res.json(bestFriend);
  });
};