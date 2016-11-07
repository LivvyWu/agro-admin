var express = require('express');
var router = express.Router();

var metrics =[
    { "itemCd" : "InAirTem", "val" : "25", "itemNm" : "空氣溫度" , "icon": "fa fa-thermometer-half"},
    { "itemCd" : "InAirHumidity", "val" : "75", "itemNm" : "空氣濕度" , "icon": "fa fa-tint"},
    { "itemCd" : "InAirIllumination", "val" : "40K", "itemNm" : "照度" , "icon": "fa fa-sun-o"},
    { "itemCd" : "InAirCO2", "val" : "25", "itemNm" : "空氣二氧化碳" , "icon": "fa fa-cloud"},
    { "itemCd" : "InSoilTemperature", "val" : "20", "itemNm" : "土壤溫度" , "icon": "fa fa-thermometer-full"},
    { "itemCd" : "InSoilHumidity", "val" : "90", "itemNm" : "土壤濕度" , "icon": "fa fa-tint"},
    { "itemCd" : "InSoilEC", "val" : "25", "itemNm" : "土壤電解質" , "icon": "fa fa-tachometer"},
    { "itemCd" : "InSoilPH", "val" : "5", "itemNm" : "土壤酸鹼值" , "icon": "fa fa-flask"}
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
