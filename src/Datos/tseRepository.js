const sql = require('mssql');
const config = require('../config/db');

async function consultarPersonaPorCedula(cedula) {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('Cedula', sql.VarChar(20), cedula)
        .execute('Luis.ConsultarPersonaTSE');
    return result.recordset[0] || null;
}

async function insertarPersonaTSE(data) {
    const pool = await sql.connect(config);
    await pool.request()
        .input('Cedula', sql.VarChar(20), data.cedula)
        .input('Nombre', sql.VarChar(50), data.nombre)
        .input('Apellido1', sql.VarChar(50), data.apellido1)
        .input('Apellido2', sql.VarChar(50), data.apellido2)
        .input('Telefono', sql.VarChar(20), data.telefono)
        .execute('Luis.RegistrarPersonaTSE');
}

module.exports = {
    consultarPersonaPorCedula,
    insertarPersonaTSE
};
