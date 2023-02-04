const express = require('express');
const PORT = 3000;
const {homeRouter} = require('./routes/home');
const hbs = require('express-handlebars');
const app = express();
app.use(express.json());
//app.use(express.static('public'));
//to wyzej CHYBA zalatwia cos co bedzie od buta po / (do sprawdzenia)
app.use(express.urlencoded({
    extended: true,
}));
app.engine('.hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use('/', homeRouter);
app.listen(PORT, 'localhost');
