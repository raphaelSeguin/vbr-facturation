var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  res.render('facture', req.body)
});

module.exports = router;
