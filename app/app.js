const express = require('express');
const app = express();

const home = require('./src/routers/home')

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', home);

module.exports = app;
