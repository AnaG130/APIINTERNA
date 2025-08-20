const sql = require('mssql');
const config = require('../config/db');

async function insertarPersonalizacion(data) {
    const pool = await sql.connect(config);
    await pool.request()
        .input('IdUsuario', sql.Int, data.idUsuario)
        .input('IdProducto', sql.Int, data.idProducto)
        .input('ColorPrincipal', sql.VarChar(100), data.colorPrincipal)
        .input('ColorSecundario', sql.VarChar(100), data.colorSecundario)
        .input('ColorCordones', sql.VarChar(100), data.colorCordones)
        .input('PrecioFinal', sql.Decimal(18, 2), data.precioFinal)
        .execute('anix.InsertarPersonalizacion');
}

module.exports = {
    insertarPersonalizacion
};
