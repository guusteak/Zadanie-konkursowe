const express = require('express');
const PORT = 3000;
const {homeRouter} = require('./routes/home');
const {fetchRouter} = require('./routes/fetchAPI');
const {formRouter} = require('./routes/form');
const hbs = require('express-handlebars');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true,
}));
app.post('/', homeRouter)
console.log('zapostowane');
app.use('/data/json', fetchRouter);
app.post('/task/set', (req, res)=>{
    const result = res.body;
    console.log(response);
    res.send('OK');

})
app.use('/', formRouter);
app.engine('.hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.listen(PORT, 'localhost');
