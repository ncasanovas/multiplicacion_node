const fileSystem = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            //Para que no siga ejecutandose pongo return
            return;
        }

        let data = '';

        for(let i = 1; i<=limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fileSystem.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else 
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

let listarTabla = (base, limite=10) => {
    console.log('*****************'.rainbow);
    console.log(`tabla de ${base}`.rainbow);
    console.log('*****************'.rainbow);
    for(let i = 1; i<=limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

//Exporto la funcion
module.exports = {
    crearArchivo,
    listarTabla
}

