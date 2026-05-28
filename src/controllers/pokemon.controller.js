const { getPokemon, agregarFavorito, obtenerFavoritos, eliminarFavorito } = require('../services/pokemon.service')

const obtenerPokemon = async (req, res) => {
    try {
        const { nombre } = req.params
        const pokemon = await getPokemon(nombre)
        res.json(pokemon)
    } catch (error) {
        res.status(404).json({ error: `Pokemon '${req.params.nombre}' no encontrado` })
    }
}

const agregarFavoritoController = async (req, res) => {
    try {
        const { nombre } = req.params
        const favorito = await agregarFavorito(nombre)
        res.status(201).json(favorito)
    } catch(error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: `${req.params.nombre} ya está en favoritos` })
        }
        res.status(500).json({ error: error.message })
    }
}

const obtenerFavoritosController = async (req,res) => {
    try {
        const favoritos = await obtenerFavoritos()
        res.json(favoritos)
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

const eliminarFavoritoController = async (req,res) => {
    try {
        const { nombre } = req.params
        const favorito = await eliminarFavorito(nombre)
        res.json({ mensaje: `${nombre} fué eliminado de favoritos` })
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { obtenerPokemon, agregarFavoritoController, obtenerFavoritosController, eliminarFavoritoController }