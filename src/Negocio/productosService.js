const productosRepository = require('../Datos/productosRepository');

async function obtenerProductos() {
    return await productosRepository.obtenerProductos();
}

module.exports = {
    obtenerProductos
};
