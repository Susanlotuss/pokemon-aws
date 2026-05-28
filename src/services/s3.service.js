const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
const axios = require('axios')

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
})

const subirImagenPokemon = async (nombre) => {

    // Primero obtenemos el ID del pokemon
    const infoPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    const id = infoPokemon.data.id

    // Descarga la imagen usando el ID
    const response = await axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`, { responseType: 'arraybuffer' }
    )

    // Sube la imagen S3
    await s3.send(new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `pokemon/${nombre}.png`,
        Body: Buffer.from(response.data),
        contentType: 'image/png'
    }))

    // Genera URL firmada válida por 1 hora
    const url = await getSignedUrl(s3, new GetObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `pokemon/${nombre}.png`
    }), { expiresIn: 3600 })

    return url
}

module.exports = { subirImagenPokemon }