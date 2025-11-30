
var express = require('express');
var router = express.Router();
const data = require('../data/rutas');

// Página de cuenta del usuario
router.get('/cuenta', function(req, res, next) {
  const usuarios = data.leerUsuarios();
  const usuario = usuarios[0]; // Selecciona el primer usuario (puedes adaptar esto)
  usuario.copias = usuario.copias.map(copia => ({
    ...copia,
    pelicula: data.buscarPeliculaPorId(copia.peliculaId)
  }));
  res.render('cuenta', { usuario });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Colección de Peliculas' });
});

/* GET sopport page. */
router.get('/soporte', function(req, res, next) {
  res.render('soporte', { title: 'Soporte' });
});

// ...existing code...
module.exports = router;
