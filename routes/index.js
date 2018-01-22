const express = require('express');
const router = express.Router();
module.exports = router;

const wikiRouter = require('./wiki.js');
const userRouter = require('./user.js');

router.use('/', wikiRouter);