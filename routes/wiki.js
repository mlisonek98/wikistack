const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;
module.exports = router;




router.post('/', function(req, res, next) {
  res.json(req.body);
  var pageTitle = req.body.title;
  var pageContent = req.body.content;
  var page = Page.build({
    title: pageTitle,
    content: pageContent
  });


  page.save();
  res.redirect('/');
  //res.send('got to POST /wiki/');
});

router.get('/', function(req, res, next){
    res.redirect('/');
  //res.render('index')

})

router.get('/add', function(req, res, next) {
  res.render('addpage')
});
