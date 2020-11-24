const express = require("express");
const faker = require("faker");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// fake data
const randomSentence = faker.lorem.sentence();
const fakeBaseballPlayer = faker.name.findName();
const fakeFootballPlayer = faker.name.findName();
const fakeSoccerPlayer = faker.name.findName();

// routes
app.get("/", function(req, res) {
    res.render("index.ejs", { "sentence": randomSentence });
});

app.get("/baseball", function(req, res) {
    res.render("baseball.ejs", { "name": fakeBaseballPlayer });
});

app.get("/soccer", function(req, res) {
    res.render("soccer.ejs", { "name": fakeSoccerPlayer });
});

app.get("/football", function(req, res) {
    res.render("football.ejs", { "name": fakeFootballPlayer });
});

// starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("express server is running");
});