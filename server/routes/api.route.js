var express = require('express')

var router = express.Router()
var assets = require('./api/assets.route')


router.use('/assets', assets);

module.exports = router;
