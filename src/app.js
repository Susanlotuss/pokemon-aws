require('dotenv'). config()
const express = require('express')
const { logger } = require('./middlewares/logger.middleware')
const { conectarDB } = require('../src/config/database')
const pokemonRoutes = require('./routes/pokemon.routes')

const app = express()

conectarDB()

app.use(express.json())                  // 1. middleware de Express — convierte el body JSON a objeto JS
app.use(logger)                          // 2. tu middleware — loggea cada petición
app.use('/pokemon', pokemonRoutes)       // 3. rutas — si la URL empieza con /pokemon, usa estas rutas

module.exports = app