//jshint esversion:6

const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const apiKey = config.OPENWEATHERMAP_API;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res){
  const query = req.body.cityName;
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey +"&units=" + unit;
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.feels_like;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@4x.png";
      console.log(temp);
      console.log(weatherDescription);
      console.log(icon);
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<h1>The temperature in " + query +" is " + temp + "degrees Celsius.</h1>");
      res.write("<img src=" + imageURL + ">");
    });
  });

});


app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
