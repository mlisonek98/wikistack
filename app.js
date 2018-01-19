var express = require('express');

var morgan = require('morgan');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
