const express = require('express');
const router = express.Router();
module.exports = router;




router.post('/', function(req, res, next) {
  res.json(req.body);
  //res.send('got to POST /wiki/');
});

router.get('/', function(req, res, next){
    res.redirect('/');
  //res.render('index')

})

router.get('/add', function(req, res, next) {
  res.render('addpage')
});


