const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;
module.exports = router;

router.post('/', function(req, res, next) {
  console.log(req.body)
  var newPage = Page.build(req.body);

  newPage.save().then(function(savedPage) {
    res.redirect('/');
  }).catch(next);

  //res.send('got to POST /wiki/');
});

router.get('/', function(req, res, next){
  // res.redirect('/');
  Page.findAll({})
    .then(function(thePages) {
      res.render('index', {
        pages: thePages
      })
    })
    .catch(next);
  })

router.get('/add', function(req, res) {
  res.render('addpage');
});

router.get('/:page', function (req, res, next) {
  var url = req.params.page;
  Page.findOne({
    where: {
      urlTitle: url,
    }
  })
  .then(function(foundPage) {
    if (foundPage === null) {
      return next(new Error('That page was not found!'));
    }
    res.render('wikipage', { page: foundPage })
  })
  .catch(next);
})

router.use(function (err, req, res, next) {
  console.error.bind(console, err);
  res.status(500).send(err.message);
})
