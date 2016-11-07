var express = require('express');
var router = express.Router();

var metrics =[
    { "item" : "空氣溫度", "num" : "25" },
    { "item" : "空氣濕度", "num" : "70" },
    { "item" : "空氣二氧化碳", "num" : "80" },
    { "item" : "照度", "num" : "65"} ,
    { "item" : "土壤溫度", "num" : "20" },
    { "item" : "土壤濕度", "num" : "60" },
    { "item" : "土壤電解質", "num" : "70" },
    { "item" : "土壤酸鹼值", "num" : "5" }
];


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('farm/list');
});

router.get('/info', function(req, res, next) {
    res.render('farm/info', { title: 'farm' , metrics: metrics});
});

router.get('/farmDetail', function(req, res, next) {
    res.render('farm/farmDetail');
});


router.get('/sensorRecord', function(req, res, next) {
    res.render('farm/sensorRecord');
});

router.get('/abnormal', function(req, res, next) {
    res.render('farm/abnormal');
});


module.exports = router;
