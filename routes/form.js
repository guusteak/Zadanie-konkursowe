const express = require('express');
const formRouter = express.Router();
const fs = require('fs').promises;


formRouter
.post('/task/set', async(req, res)=>{
    let input = await fs.readFile('./public/data/data.JSON', 'utf-8');
    input = JSON.parse(input);
    let data = req.body;
    Object.keys(data).forEach(key=>{
        input[`${data[key]}`] = false; 
    });
    input = JSON.stringify(input);
    await fs.writeFile('./public/data/data.JSON', input);
    res.send('ok');
});

module.exports = {
    formRouter,
};