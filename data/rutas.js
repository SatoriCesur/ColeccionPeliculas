const fs = require('fs');
const path = require('path');

const peliculasPath = path.join(__dirname, 'peliculas.json');
const usuariosPath = path.join(__dirname, 'usuarios.json');

function leerPeliculas() {
  return JSON.parse(fs.readFileSync(peliculasPath, 'utf8'));
}

function leerUsuarios() {
  return JSON.parse(fs.readFileSync(usuariosPath, 'utf8'));
}

function buscarCopiaPorId(idCopia) {
  const usuarios = leerUsuarios();
  for (const usuario of usuarios) {
    const copia = usuario.copias.find(c => c.id === Number(idCopia));
    if (copia) {
      return { copia, usuario };
    }
  }
  return null;
}

function buscarPeliculaPorId(idPelicula) {
  const peliculas = leerPeliculas();
  return peliculas.find(p => p.id === Number(idPelicula));
}

module.exports = {
  leerPeliculas,
  leerUsuarios,
  buscarCopiaPorId,
  buscarPeliculaPorId
};
