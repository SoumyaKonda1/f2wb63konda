var express = require('express');
var router = express.Router();

/* GET music page. */
router.get('/', function(req, res, next) {
  res.render('Music', { title: 'Search Results Music' });
});

module.exports = router; 