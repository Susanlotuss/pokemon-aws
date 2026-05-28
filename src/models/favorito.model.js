const mongoose = require('mongoose')

const favoritoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    altura: Number,
    peso: Number,
    tipos: [String],
    imagenUrl: String,
    fechaAgregado: {
        type: Date,
        default: Date.now
    }
})

const Favorito = mongoose.model('Favorito', favoritoSchema)

module.exports = { Favorito }