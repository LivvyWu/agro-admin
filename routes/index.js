var express = require('express');
var router = express.Router();

var Dummy = require('./dummy_user');

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

  console.log(req.body.password);

  var users = new Dummy();
  console.log("dummy:" + users.dummuyUsers);


  res.redirect("/farm");
});

module.exports = router;
