var express = require('express');
var router = express.Router();
/*
router.use('/cafe', require('./api/cafe'));*/
router.use('/Gif', require('./api/editor'));
module.exports = router;