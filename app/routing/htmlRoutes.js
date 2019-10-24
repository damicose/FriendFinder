// ==>Find an example to work with where it's not all stored in server.js (the routing
// pretty sure it's an import thing ?

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});