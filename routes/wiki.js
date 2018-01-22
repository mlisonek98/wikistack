const express = require('express');
const router = express.Router();
module.exports = router;


router.get('/wiki', function(req, res, next){
  res.render('index')
  next();
})


