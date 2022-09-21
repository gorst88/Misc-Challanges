// jshint esversion:8

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/peopleDB");


const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: 10,
  review: "Peaches are awesome!"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "Decent fruit."
});

mango.save();

Person.updateOne({name: "John"}, {favouriteFruit: mango}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully updated the document");
  }
});

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 1,
  review: "Burning Acid!"
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me!"
});

const banana = new Fruit({
  name: "Banana",
  score: 10,
  review: "Protein Power!"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// });

// Fruit.find(function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//
//     mongoose.connection.close();
//
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//     });
//   }
// });

// Fruit.updateOne({_id: "630726296ae033fe9469f908"}, {name: "Peach"}, function(err) {
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.");
//   }
// });

// Fruit.deleteOne({name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted document.");
//   }
// });

// Person.deleteMany({
//   name: "John"
// }, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted.");
//   }
// });
