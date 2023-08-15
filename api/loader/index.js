require('dotenv').config();
const { Tabla} = require('../db')

async function refLoad() {

    Tabla.bulkCreate([
        { id: 1, cod: 0, description: "Estados",   valor: 0, control : 'N', cod_status: 1 },
        { id: 1, cod: 1, description: "Activo",    valor: 0, control : 'N', cod_status: 1 },
        { id: 1, cod: 2, description: "Congelado", valor: 0, control : 'N', cod_status: 1 },
        { id: 1, cod: 3, description: "Baja", valor: 10, control : 'N', cod_status: 1 },
     ]).then(() => console.log('Tablas ha sido grabado'));
 
}

module.exports = refLoad;