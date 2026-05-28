const express = require('express')
const router = express.Router()
const { obtenerPokemon, obtenerFavoritosController, agregarFavoritoController, eliminarFavoritoController } = require('../controllers/pokemon.controller')

router.get('/favoritos', obtenerFavoritosController)               // primero — más específica (string fijo)
router.get('/:nombre', obtenerPokemon)                             // después — más genérica (dinamica)
router.post('/favoritos/:nombre', agregarFavoritoController)
router.delete('/favoritos/:nombre', eliminarFavoritoController)

module.exports = router