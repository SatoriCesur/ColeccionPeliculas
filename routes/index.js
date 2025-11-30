
var express = require('express');
var router = express.Router();
const data = require('../data/rutas');

// Página de cuenta del usuario
router.post('/cuenta', function(req, res, next) {
  const usuarios = data.leerUsuarios();
  const usuario = usuarios[0];
  usuario.copias = usuario.copias.map(copia => ({
    ...copia,
    pelicula: data.buscarPeliculaPorId(copia.peliculaId)
  }));
  res.render('cuenta', { usuario });
});

// GET /cuenta para navegación desde enlaces
router.get('/cuenta', function(req, res, next) {
  const usuarios = data.leerUsuarios();
  const usuario = usuarios[0];
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

// Detalle de copia
router.get('/copia/:id', function(req, res, next) {
  const resultado = data.buscarCopiaPorId(req.params.id);
  if (!resultado) {
    return res.status(404).send('Copia no encontrada');
  }
  const { copia, usuario } = resultado;
  copia.pelicula = data.buscarPeliculaPorId(copia.peliculaId);
  res.render('detalleCopia', { copia, usuario });
});

module.exports = router;
