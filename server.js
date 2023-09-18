const express = require("express");
const mongoose = require("mongoose");

const dotenv = require('dotenv').config();
const app = express();


mongoose.connect("mongodb://127.0.0.1:27017/Rishi").then(() => {
  console.log("Connnected");
});
const makeSchema = new mongoose.Schema({
  name: String,
  roll: Number,
  branch: String,
});
const Student = new mongoose.model("Student", makeSchema);

new Student({
  name: "shashikesh",
  roll: 20211043,
  branch: "CSE",
}).save();

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});
app.listen(process.env.PORT, () => {
  console.log("server is running on" ,process.env.PORT);
});
