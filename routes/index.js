var express = require('express');
var router = express.Router();
// var game = require('../src/game.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Snake' });
});

module.exports = router;
