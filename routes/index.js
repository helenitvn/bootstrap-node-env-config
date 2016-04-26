var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { cfg: cfg, title: 'Express' });
});

module.exports = router;
