// Dependencies
const express = require("express");
const phrases = require("./data/phrases");
const magic8Responses = require("./data/magic8");
const speakerIMG = require("./data/speakerIMG");

// Configuration
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.status(200).send("Home Page!");
});

// Define a route for each name
for (let name in phrases) {
  app.get(`/${name}`, (req, res) => {
    res.status(200).send(`
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1 style="text-align: center;">Speaker: ${name}</h1>
      <img src="${speakerIMG[name]}" style="width: 25%;" />
      <h2 style="text-align: center;">Quote: ${phrases[name]}</h2>
    </div>
  `);
  });
}

// random response based on the same path
app.get("/magic8", (req, res) => {
  // generate a number from 0 to 19
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  res.status(200).send(`<div  style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
  <h1 style="text-align: center;">${magic8Responses[randomIndex]}</h1>
  </div>
  `);
});

// Export
module.exports = app;
