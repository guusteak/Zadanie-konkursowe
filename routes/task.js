const express = require('express');

const homeRouter = express.Router();

homeRouter
.get('/task/:id', (req, res)=>{
    console.log(req.params);
    const test = 'test';
    console.log(test);
    res.render('index',{
        test,
    })
});

const test = document.getElementById('ToDoPanel');
console.log(test);

module.exports = {
    homeRouter,
}