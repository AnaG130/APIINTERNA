const pedidoRepository = require('../Datos/pedidoRepository');

async function obtenerPedidoPendiente(idUsuario) {
    return await pedidoRepository.obtenerPedidoPendiente(idUsuario);
}

async function crearPedidoPendiente(idUsuario) {
    return await pedidoRepository.crearPedidoPendiente(idUsuario);
}

async function agregarDetallePedido(idPedido, idProducto) {
    await pedidoRepository.agregarDetallePedido(idPedido, idProducto);
}

async function aprobarPedido(idUsuario) {
    await pedidoRepository.aprobarPedido(idUsuario);
}

async function eliminarDetallePedido(idUsuario, nombreProducto) {
    await pedidoRepository.eliminarDetallePedido(idUsuario, nombreProducto);
}

module.exports = {
    obtenerPedidoPendiente,
    crearPedidoPendiente,
    agregarDetallePedido,
    aprobarPedido,
    eliminarDetallePedido
};
