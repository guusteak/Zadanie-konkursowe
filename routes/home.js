const express = require('express');
const fs = require('fs').promises;
const homeRouter = express.Router();

homeRouter
.get('/', async (req, res)=>{
    const test = 'test1';
    const welcomePage = await fs.readFile('./public/welcome.html', 'utf-8');
    console.log(test);
    res
    .send(welcomePage);
})
.post('/' ,async(req, res)=>{
    const test = 'test2';
    console.log(test);
    let data = await fs.readFile('public/data/data.JSON', 'utf-8');
    data = JSON.parse(data);
    console.log(data);
    res.send(data);
});

module.exports = {
    homeRouter,
}