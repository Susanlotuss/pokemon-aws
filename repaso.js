// //FUNCIONES

// // Función normal (backtick se saca con Atl del lado derecho + })
// function saludar(nombre) {
//     return `Hola ${nombre}!`;
// }


// // Función flecha — misma función, diferente sintaxis
// const saludarFlecha = (nombre) => {
//     return `Hola ${nombre}!`;
// }


// // Función flecha corta — cuando solo hay un return se puede simplificar
// const saludarFlechaCorta = (nombre) => `Hola ${nombre}!`;


// // Consoles tests
// console.log(saludar("Susana"));
// console.log(saludarFlecha("Susana"));
// console.log(saludarFlechaCorta("Susana"));




// //LOOP FOR

// // Loop Clásico
// for (i = 0; i < 3; i++) {
//     console.log(`iteracion ${i}`);
// }

// // For of — para recorrer Arrays []
// const frutas = ['Manzana', 'Pera', 'Mango']

// for (const fruta of frutas) {
//     console.log(fruta)
// }


// // ForEach — Método de Array con callback
// frutas.forEach((fruta) => {
//     console.log(fruta)
// })




// // Callback básico — una función que se pasa a otra 
// function ejecutarDespues (nombre, callback) {
//     console.log(`Hola ${nombre}`)
//     callback() // Ejecuta la función que le pasaron
// }

// ejecutarDespues('Susana', () => {
//     console.log('Esto lo ejecutó el callback')
// })



// // Callback hell — callbacks anidados.
// // setTimeout(() => {}, 1000)

// setTimeout(() => {
//     console.log('Paso 1')
//     setTimeout(() => {
//         console.log('Paso 2')
//         setTimeout(() => {
//             console.log('Paso 3')
//         }, 1000)
//     }, 1000)
// }, 1000)


// // 
// fs.readFile('archivo.txt', (err, data) => {
//     console.log(data)
// // //  ↑ esto es una función flecha anónima
// // //  ↑ actuando como callback
// // //  ↑ Node la ejecutará cuando termine de leer
// })


// // Promise manual
// const myPromise = new Promise((resolve, reject) => {
//     const exito = false

//     if (exito) {
//         resolve('Operación exitosa')
//     } else {
//         reject('Operación fallida')
//     }
// })

// myPromise
//     .then(result => console.log('Result:', result))
//     .catch(error => console.log('Error:', error))


// // Ejemplo de funcionalidad de Promises
// function miOperacionAsincrona() {
//     return new Promise((resolve, reject) => {
//         // haz algo que tarda...
//         // si salió bien:
//         resolve(resultado)
//         // si falló:
//         reject(error)
//     })
// }

// // Función que retorna una Promise
// function esperar(segundos) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Esperé ${segundos} segundos`)
//         }, segundos * 1000)
//     })
// }

// esperar(1).then(resultado => console.log(resultado))

// function esperar (segundos) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Corre esperar ${segundos} segundo(s)`)
//         }, segundos * 1000)
//     })
// }


// // Async/Await
// async function formaModerna() {
//     const correr = await esperar(1)
//     console.log(correr)

//     const correr2 = await esperar(2)
//     console.log(correr2)
// }

// formaModerna()


// // Async errores manejo
// async function fallar() {
//     throw new Error('Algo salió mal')
// }

// async function main() {
//     try {
//         await fallar()
//         console.log('Esto no se ejecutará')
//     } catch (error) {
//         console.log('El error es:', error.message)
//         console.log('El programa sigue corriendo')
//     }
// }

// main()
// console.log('Esto se ejecutará aunque haya error')