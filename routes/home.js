const express = require('express');

const homeRouter = express.Router();

homeRouter
.get('/', (req, res)=>{
    const test = 'test';
    console.log(test);
    res.render('index',{
        test,
    })
});

module.exports = {
    homeRouter,
}