var express = require('express');

var morgan = require('morgan');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => console.log('Wikistack app listening for tweets on port 3000'));
