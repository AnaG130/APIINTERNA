const sql = require('mssql');
const config = require('../config/db');

async function obtenerPaises() {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .execute('Luis.ObtenerPaises');
    return result.recordset.map(row => ({
        Id: row.id_ubicacion,
        Nombre: row.nombre
    }));
}

async function obtenerProvincias(paisId) {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('PaisId', sql.Int, paisId)
        .execute('Luis.ObtenerProvincias');
    return result.recordset.map(row => ({
        Id: row.id_ubicacion,
        Nombre: row.nombre
    }));
}

async function obtenerCantones(provinciaId) {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('ProvinciaId', sql.Int, provinciaId)
        .execute('Luis.ObtenerCantones');
    return result.recordset.map(row => ({
        Id: row.id_ubicacion,
        Nombre: row.nombre
    }));
}

async function obtenerDistritos(cantonId) {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('CantonId', sql.Int, cantonId)
        .execute('Luis.ObtenerDistritos');
    return result.recordset.map(row => ({
        Id: row.id_ubicacion,
        Nombre: row.nombre
    }));
}

module.exports = {
    obtenerPaises,
    obtenerProvincias,
    obtenerCantones,
    obtenerDistritos
};
