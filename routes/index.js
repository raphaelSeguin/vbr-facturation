const express = require('express');
const router = express.Router();

const insertFacture = require('../insertFacture.js');
const findAllFactures = require('../findAllFactures.js');
const findFacture = require('../findFacture.js');

// facture en cours d'édition
let facture = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  findAllFactures()
    .then( array => array.map( 
      fact => { 
        const {numero, nomDeSociete} = fact;
        return {numero, nomDeSociete};
      })
    )
    .then( menu => res.render('index', {facture, menu}) )
});

router.get('/facture/:numerofacture', function(req, res) {
  findFacture({numero: req.params.numerofacture})
    .then( fact => {console.log(fact); return fact;})
    .then( fact => facture = fact)
    .then( res.redirect('/') );
})

router.get('/new', function(req, res) {
  facture = {};
  res.redirect('/');
})

router.get('/all', function(req, res) {
  findAllFactures()
    .then( array => array.map( 
      fact => { 
        const {numero, nomDeSociete} = fact;
        return numero +' '+ nomDeSociete;
      })
    )
    .then( list => res.send(list) )
    .catch( err => res.send(err) )
})

router.post('/', function(req, res, next) {
  console.log(req.body);
  facture = req.body;
  res.render('facture', req.body)
});

router.get('/sauvegarde', function(req, res, next) {
  insertFacture(facture)
    .then( _ => res.render('merci', {}) )
    .catch( err => res.render('probleme', {msg: err}))
});

module.exports = router;
