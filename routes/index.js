

var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const data = require('../data/rutas');
const usuariosPath = path.join(__dirname, '../data/usuarios.json');

// LOGIN funcional
router.post('/login', function(req, res) {
  const { usuario, contrasena } = req.body;
  const usuarios = JSON.parse(fs.readFileSync(usuariosPath, 'utf8'));
  const user = usuarios.find(u => u.nombre === usuario && (u.contrasena === contrasena || !u.contrasena));
  if (user) {
    req.session.usuario = user;
    return res.redirect('/mis-peliculas');
  } else {
    return res.render('index', { title: 'Colección de Peliculas', error: 'Usuario o contraseña incorrectos' });
  }
});

// Página de películas personalizadas
router.get('/mis-peliculas', function(req, res) {
  if (!req.session.usuario) {
    return res.redirect('/');
  }
  const usuario = req.session.usuario;
  usuario.copias = usuario.copias.map(copia => ({
    ...copia,
    pelicula: data.buscarPeliculaPorId(copia.peliculaId)
  }));
  res.render('cuenta', { usuario });
});

// Página de cuenta del usuario (antiguo)
router.post('/cuenta', function(req, res, next) {
  const usuarios = data.leerUsuarios();
  const usuario = usuarios[0];
  usuario.copias = usuario.copias.map(copia => ({
    ...copia,
    pelicula: data.buscarPeliculaPorId(copia.peliculaId)
  }));
  res.render('cuenta', { usuario });
});

// GET /cuenta para navegación desde enlaces (antiguo)
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
