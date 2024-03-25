require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000


app.get("/", (req, res) => {
  res.send("Hello World");
})

app.get("/twitter", (req, res) => {
  res.send("yahoo")
})

app.get("/login", (req, res) => {
  res.send("<h1> login here </h1>")
})

app.get("/linkedin", (req, res) => {
  res.send("<h2> Linkedin Page </h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`This is example listening on port ${port}`);
})