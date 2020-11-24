const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// routes
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/baseball", function(req, res) {
    res.render("baseball.html");
});

app.get("/soccer", function(req, res) {
    res.render("soccer.html");
});

app.get("/football", function(req, res) {
    res.render("football.html");
});

// starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("express server is running");
});