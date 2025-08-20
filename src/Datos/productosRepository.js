const sql = require('mssql');
const config = require('../config/db');

async function obtenerProductos() {
    const pool = await sql.connect(config);
    const result = await pool.request().execute('Luis.ObtenerProductos');
    return result.recordset;
}

module.exports = {
    obtenerProductos
};
