const axios = require('axios')
const { Favorito } = require('../models/favorito.model')

const getPokemon = async (nombre) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)

    // Transformamos la data — solo devolvemos lo que nos interesa
    return {
        nombre: response.data.name,
        altura: response.data.height,
        peso: response.data.weight,
        tipos: response.data.types.map(t => t.type.name)
    }
}

const agregarFavorito = async (nombre) => {
    const pokemon = await getPokemon(nombre)
    const favorito = await Favorito.create(pokemon)
    return favorito
}

const obtenerFavoritos = async () => {
    return await Favorito.find()
}

const eliminarFavorito = async (nombre) => {
    return await Favorito.deleteOne({ nombre })
}

module.exports = { getPokemon, agregarFavorito, obtenerFavoritos, eliminarFavorito }