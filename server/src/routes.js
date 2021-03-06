'use strict';

var express = require('express');
var router = express.Router();

var image = require('./image/image.controller');

// api Routes resources
router.get('/api/images', image.find);

module.exports = router;
