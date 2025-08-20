const sql = require('mssql');
const config = require('../config/db');

async function obtenerPedidoPendiente(idUsuario) {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('IdUsuario', sql.Int, idUsuario)
        .execute('Luis.ObtenerOPedidoPendiente');
    return result.recordset[0]?.IdPedido || 0;
}

async function crearPedidoPendiente(idUsuario) {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('IdUsuario', sql.Int, idUsuario)
        .output('IdPedido', sql.Int)
        .execute('Luis.CrearPedidoPendiente');
    return result.output.IdPedido;
}

async function agregarDetallePedido(idPedido, idProducto) {
    const pool = await sql.connect(config);
    await pool.request()
        .input('IdPedido', sql.Int, idPedido)
        .input('IdProducto', sql.Int, idProducto)
        .execute('anix.AgregarDetallePedido');
}

async function aprobarPedido(idUsuario) {
    const pool = await sql.connect(config);
    await pool.request()
        .input('IdUsuario', sql.Int, idUsuario)
        .execute('anix.AprobarPedido');
}

async function eliminarDetallePedido(idUsuario, nombreProducto) {
    const pool = await sql.connect(config);
    await pool.request()
        .input('IdUsuario', sql.Int, idUsuario)
        .input('NombreProducto', sql.VarChar(100), nombreProducto)
        .execute('anix.EliminarDetallePedido');
}

module.exports = {
    obtenerPedidoPendiente,
    crearPedidoPendiente,
    agregarDetallePedido,
    aprobarPedido,
    eliminarDetallePedido
};
