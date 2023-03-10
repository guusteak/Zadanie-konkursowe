const express = require("express");
const formRouter = express.Router();
const fs = require("fs").promises;
const bodyParser = require("body-parser");
const { write, writeFile } = require("fs");
const jsonParser = bodyParser.json();

formRouter
  .post("/task/set", async (req, res) => {
    console.log(req.body);
    let input = await fs.readFile("./public/data/data.JSON", "utf-8");
    input = JSON.parse(input);
    let data = req.body;
    Object.keys(data).forEach((key) => {
      input[`${key}`] = true;
    });
    input = JSON.stringify(input);
    await fs.writeFile("./public/data/data.JSON", input);
    res.send("ok");
  })
  .post("/task/update", jsonParser, async (req, res) => {
    console.log("body parser json");
    console.log("Ok? xd");
    console.log(req.body);
    await fs.writeFile("./public/data/data.JSON", JSON.stringify(req.body));
    res.send("OK");
  });

module.exports = {
  formRouter,
};
