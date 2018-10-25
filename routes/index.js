const express = require('express');
const router = express.Router();

const insertFacture = require('../insertFacture.js');

let facture = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', facture);
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  facture = req.body;
  res.render('facture', req.body)
});

router.get('/imprimer', function(req, res, next) {
  insertFacture(facture);
  res.render('merci', {});
});


module.exports = router;
