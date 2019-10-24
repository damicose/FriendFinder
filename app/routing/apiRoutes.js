// Displays all friends ("catch all")
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
