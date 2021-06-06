//requireds


//Nativo de Node
//const fileSystem = require('fs');

//No nativo, paquetes externos
// const ex = require('express');

//Requireds de archivos que creamos en el proyecto
// const fs = require('./fs');

//Modulo es un objeto global
const {crearArchivo} = require('./multiplicar/multiplicar');

const argv = require('yargs');


//Me muestra donde esta node, mi archivo y los parametros que le paso en la consola
//console.log(process.argv);

//let base = "5";

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

//console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(error => console.log(error));