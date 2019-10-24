// Displays all friends ("catch all")
app.get("/api/friends", function (req, res) {
    return res.json(characters);
});

// Posting route, needs to be reconfigured
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    // var newCharacter = req.body;
    // console.log("newCharacter", newCharacter)
  
    // // Using a RegEx Pattern to remove spaces from newCharacter
    // // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    // console.log(newCharacter);
  
    // characters.push(newCharacter);
  
    // res.json(newCharacter);
  });
