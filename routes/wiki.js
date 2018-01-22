const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;
module.exports = router;




router.post('/', function(req, res, next) {
  console.log(req.body)
  var pageTitle = req.body.title;
  var pageContent = req.body.content;
  var page = Page.build({
    title: pageTitle,
    content: pageContent
  });


  page.save().then(function(savedPage) {
    res.redirect(savedPage.route);
  }).catch(next);

  //res.send('got to POST /wiki/');
});

router.get('/', function(req, res){
    res.redirect('/');
  //res.render('index')
})

router.get('/add', function(req, res) {
  res.render('addpage')
});

router.get('/:page', function (req, res, next) {
  var url = req.params.page;
  Page.findOne({
    where: {
      urlTitle: url,
    }
  })
  .then(function(foundPage) {
    res.render('wikipage', { page: foundPage })
  })
  .catch(next);
})
