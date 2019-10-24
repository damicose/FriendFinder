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

// Below is pulled from an HTML script tag so it will need to be reconfig for plain


  document.getElementById("add-btn").addEventListener("click", function(event) {
    event.preventDefault();
    var newCharacter = {
      name: document.getElementById("name").value.trim(),
      role: document.getElementById("role").value.trim(),
      age: document.getElementById("age").value.trim(),
      forcePoints: document.getElementById("force-points").value.trim()
    };

    fetch("/api/characters", {
      method: "POST",
      body: JSON.stringify(newCharacter),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(function(data) {
        console.log("add.html", data);
        alert("Adding character...");
      });
  });

  function getAnswers() {
    const activeRadios = document.getElementsByName(rName);
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) return radioButtons[i].value;
    }
    return '';
}