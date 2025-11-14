var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Colección de Peliculas' });
});

/* GET sopport page. */
router.get('/soporte', function(req, res, next) {
  res.render('soporte', { title: 'Soporte' });
});

module.exports = router;
