//Load Data
var friendList = require("../data/friends.js");
// console.log(friendsList);

module.exports = function (app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendList);
  });

  // ---------------------------------------------------------------------------
    
      app.post("/api/friends", function(req, res) {
        // console.log(req.body.scores);
    
        var user = req.body;
    
        for(var i = 0; i < user.scores.length; i++) {
          user.scores[i] = parseInt(user.scores[i]);
        }
    
        var bestFriendIndex = 0;
        var minimumDifference = 40;
    
        for(var i = 0; i < friendList.length; i++) {
          var totalDifference = 0;
          for(var j = 0; j < friendList[i].scores.length; j++) {
            var difference = Math.abs(user.scores[j] - friendList[i].scores[j]);
            totalDifference += difference;
          }
    
          if(totalDifference < minimumDifference) {
            bestFriendIndex = i;
            minimumDifference = totalDifference;
          }
        }
    
        friendList.push(user);

        res.json(friendList[bestFriendIndex]);
      });
    };