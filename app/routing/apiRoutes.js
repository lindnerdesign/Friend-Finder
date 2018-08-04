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
  closestMatch = 0;

  //Compare the two friends scores (arrays)
  for (let i = 0; i < friendList.length; i++) {
    
    var scoreDifference = 0;

    for (let x = 0; x < newFriendScores.length; x++) {
      scoreDifference += (Math.abs(friendList[i].scores[x]) - (newFriendScores[x]));
    }
    scoresMatched.push(scoreDifference);
  }

  //find the two closest match
  for (let i = 0; i < scoresMatched.length; i++) {
    if (scoresMatched[i] <= scoresMatched[closestMatch]){
      closestMatch = i;
    }
  }
  friendList.push(req.body);
  
  var bestFriend = friendList[closestMatch];
  res.json(bestFriend);


  });
};