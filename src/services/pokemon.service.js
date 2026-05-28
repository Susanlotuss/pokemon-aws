const axios = require('axios')
const { Favorito } = require('../models/favorito.model')
const { subirImagenPokemon } = require('./s3.service')

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

    let imagenUrl = null

    try {
        imagenUrl = await subirImagenPokemon(nombre)
    } catch(error) {
        console.error('Error subiendo image a S3:', error.message)
    }

    const favorito = await Favorito.create({ ...pokemon, imagenUrl })
    return favorito
}

const obtenerFavoritos = async () => {
    return await Favorito.find()
}

const eliminarFavorito = async (nombre) => {
    return await Favorito.deleteOne({ nombre })
}

module.exports = { getPokemon, agregarFavorito, obtenerFavoritos, eliminarFavorito }