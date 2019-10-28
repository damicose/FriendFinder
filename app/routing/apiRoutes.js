// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------// Displays all friends ("catch all")
app.get("/api/friends", function (req, res) {
    return res.json(friendData);
});

// Posting route, needs to be reconfigured (?)
app.post("/api/friends", function(req, res) {
  let user = req.body;
  let totalAll = [];
  const bestMatch = {
      position: 0,
      best: 100
  };
  friendData.forEach(friend => {
      let answerTotal = 0;
      for(let i = 0; i<friend.answers.length; i++){
         answerTotal += Math.abs(parseInt(user.answers[i]) - friend.answers[i]); 
      }
      totalAll.push(answerTotal);
  });


  for(let i = 0; i < totalAll.length; i++){
      if(totalAll[i] < bestMatch.best){
          bestMatch.position = i;
          bestMatch.best = totalAll[i];
          console.log(`Total Score Diff: ${totalAll[i]} Your best match is: ${bestMatch.position}`)
      }
  }
  res.json(friendData[bestMatch.position]);
  });
};
