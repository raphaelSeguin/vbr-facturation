const express = require('express');
const router = express.Router();

const insertFacture = require('../insertFacture.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  insertFacture(req.body);
  res.render('facture', req.body)
});

module.exports = router;
