const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('ejs');

const app = new express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', require('./controllers/home'));
app.post('/makeAPIRequest', require('./controllers/makeAPIRequest'));

app.listen(3000, () => {
    console.log("I am running");
})