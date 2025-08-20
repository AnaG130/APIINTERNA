const sql = require('mssql');
const config = require('../config/db');

async function registrarTarjeta(data) {
    const pool = await sql.connect(config);
    await pool.request()
        .input('NumeroTarjeta', sql.VarChar, data.numeroTarjeta)

        .input('Saldo', sql.Decimal(18,2), data.saldo)
        .input('FechaVencimiento', sql.Date, data.fechaVencimiento)
        .input('CVV', sql.VarChar, data.cvv)
        .input('CedulaDueno', sql.VarChar(20), data.cedulaDueno)
        .input('NombrePropietario', sql.VarChar(200), data.nombrePropietario)
        .input('TelefonoPropietario', sql.VarChar, data.telefonoPropietario)
        .execute('Luis.RegistrarTarjeta');
}

async function obtenerTarjetasPorCedula(cedulaDueno) {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('CedulaDueno', sql.VarChar(20), cedulaDueno)
        .execute('Luis.ObtenerTarjetasPorCedula');

    return result.recordset;
}


module.exports = {
     obtenerTarjetasPorCedula,
    registrarTarjeta
};
