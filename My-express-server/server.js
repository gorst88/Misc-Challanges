//jshint esversion:6
const express = require('express');

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: stoykov.g@outlook.de");
});

app.get("/about", function(req, res){
  res.send("My name is Goran and I am a noobgrammer.");
});

app.get("/hobbies", function(req, res){
  res.send("Coffee, Biking, Programming");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
