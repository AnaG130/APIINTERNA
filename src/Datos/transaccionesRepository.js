const sql = require('mssql');
const config = require('../config/db');

async function realizarCompra(data) {
    const pool = await sql.connect(config);
    await pool.request()
        .input('NumeroTarjeta', sql.VarChar(16), data.NumeroTarjeta)
        .input('Monto', sql.Decimal(18, 2), data.Monto)
        .input('Detalle', sql.VarChar(100), data.Detalle)
        .execute('Luis.RealizarCompraTarjeta');
}

async function realizarSINPE(data) {
    const pool = await sql.connect(config);
    await pool.request()
        .input('TelefonoEmisor', sql.VarChar(20), data.TelefonoEmisor)
        .input('TelefonoReceptor', sql.VarChar(20), data.TelefonoReceptor)
        .input('Monto', sql.Decimal(18, 2), data.Monto)
        .input('Detalle', sql.VarChar(100), data.Detalle)
        .execute('Luis.RealizarSINPE');
}

module.exports = {
    realizarCompra,
    realizarSINPE
};
