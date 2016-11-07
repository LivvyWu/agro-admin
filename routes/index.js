var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

/* GET home page. */
router.post('/login/submit', function(req, res, next) {

  res.redirect("/farm");
});

module.exports = router;
