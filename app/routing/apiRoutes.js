// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------// Displays all friends ("catch all")
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// Posting route, needs to be reconfigured
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newFriend = req.body;
    console.log("newFriend", newFriend)
  
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
  });
};
