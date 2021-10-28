var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  next();
});

/* GET cool listing. */
router.get('/cool', function(req, res, next) {
  res.send('You are so cool!');
  next();
});

module.exports = router;
