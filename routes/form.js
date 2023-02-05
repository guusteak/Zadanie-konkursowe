const express = require('express');
const formRouter = express.Router();

formRouter
.post('/task/set', (req, res)=>{
    console.log(req.body);
    res.send('ok');
});

module.exports = {
    formRouter,
};