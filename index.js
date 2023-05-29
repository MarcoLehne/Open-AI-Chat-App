const express = require('express');
const homeController = require('./controllers/home');
require('ejs');

const app = new express();

app.set('view engine','ejs');

app.get('/', homeController);

app.listen(3000, () => {
    console.log("I am running");
})