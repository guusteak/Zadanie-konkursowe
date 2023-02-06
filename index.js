const express = require('express');
const PORT = 3000;
const {homeRouter} = require('./routes/home');
const {fetchRouter} = require('./routes/fetchAPI');
const {formRouter} = require('./routes/form');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true,
}));
const jsonParser = bodyParser.json();
const urlencodedBodyParser = bodyParser.urlencoded({extended:true});
//app.use(jsonParser);
app.use('/data/json', fetchRouter);
app.use('/', formRouter);

app.engine('.hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.listen(PORT, 'localhost');