const express = require('express');
const fs = require('fs').promises;
const fetchRouter = express.Router();

fetchRouter
.post('/task/set', async (req, res)=>{
    const data = await fs.readFile('./public/data/data.JSON', 'utf-8');
    console.log(data);
    console.log(req.body);
    res.send('ok');
})
.get('/', async (req, res)=>{
    const data = await fs.readFile('./public/data/data.JSON', 'utf-8');
    res.send(data);
})

module.exports = {
    fetchRouter,
}