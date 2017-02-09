var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/Home', function(req, res, next) {
    res.render('Home', { title: 'Home' });
});

router.get('/About', function(req, res, next) {
    res.render('About', { title: 'About' });
});

router.get('/Project', function(req, res, next) {
    res.render('Prohject', { title: 'Project' });
});

router.get('/Service', function(req, res, next) {
    res.render('Service', { title: 'Service' });
});

router.get('/Contact', function(req, res, next) {
    res.render('Contact', { title: 'Contact' });
});
module.exports = router;
