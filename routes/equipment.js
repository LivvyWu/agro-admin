var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('equipment/list');
});

router.get('/datachart/:type', function(req, res, next) {
    res.render('equipment/datachart'+ req.params.type, { moment: moment });
});


module.exports = router;
