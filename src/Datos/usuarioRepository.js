const sql = require('mssql');
const config = require('../config/db');

async function insertarUsuario(data) {
    const pool = await sql.connect(config);
    await pool.request()
        .input('Identificacion', sql.Int, data.identificacion)
        .input('Nombre', sql.VarChar(100), data.nombre)
        .input('PrimerApellido', sql.VarChar(100), data.apellido1)
        .input('SegundoApellido', sql.VarChar(100), data.apellido2)
        .input('CorreoElectronico', sql.VarChar(200), data.correo)
        .input('Usuario', sql.VarChar(100), data.usuario)
        .input('Contrasena', sql.VarChar(255), data.contrasena)
        .input('Direccion', sql.VarChar(300), data.direccion)
        .execute('anix.AgregarUsuario');
}

async function actualizarUsuario(data) {
    console.log("Recibido para actualizar:", data);
    const pool = await sql.connect(config);
    await pool.request()
        .input('Identificacion', sql.Int, data.id)
        .input('CorreoElectronico', sql.VarChar(200), data.correo)
        .input('Usuario', sql.VarChar(100), data.usuario)
        .input('Contrasena', sql.VarChar(255), data.contrasena)
        .execute('anix.ActualizarUsuario');
}

async function validarLogin(usuario, contrasena) {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('Usuario', sql.VarChar(100), usuario)
        .input('Contrasena', sql.VarChar(255), contrasena)
        .execute('anix.ValidarUsuario');

    return result.recordset[0] || null;
}

async function insertarPreguntasUsuario(data) {
    const pool = await sql.connect(config);
    await pool.request()
        .input('Identificacion', sql.Int, data.identificacion)
        .input('Pregunta1', sql.VarChar(300), data.pregunta1)
        .input('Respuesta1', sql.VarChar(300), data.respuesta1)
        .input('Pregunta2', sql.VarChar(300), data.pregunta2)
        .input('Respuesta2', sql.VarChar(300), data.respuesta2)
        .input('Pregunta3', sql.VarChar(300), data.pregunta3)
        .input('Respuesta3', sql.VarChar(300), data.respuesta3)
        .execute('anix.AgregarPreguntasUsuario');
}

async function obtenerCorreoPorUsuario(usuario) {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('Usuario', sql.VarChar(100), usuario)
        .execute('anix.ObtenerCorreoPorUsuario');

    return result.recordset[0]?.CorreoElectronico || null;
}

async function obtenerPreguntas(correo) {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('Correo', sql.VarChar(200), correo)
        .execute('anix.sp_ObtenerPreguntas');

    return result.recordset.length > 0
        ? [result.recordset[0].Pregunta1, result.recordset[0].Pregunta2, result.recordset[0].Pregunta3]
        : [];
}

async function verificarRespuestas(correo, r1, r2, r3) {

 

    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('Correo', sql.VarChar(200), correo)
        .input('Respuesta1', sql.VarChar(300), r1)
        .input('Respuesta2', sql.VarChar(300), r2)
        .input('Respuesta3', sql.VarChar(300), r3)
        .execute('anix.sp_VerificarRespuestas');

    return result.returnValue === 1;
}

async function actualizarPassword(correo, nuevaPassword) {
    const pool = await sql.connect(config);
    await pool.request()
        .input('Correo', sql.VarChar(200), correo)
        .input('NuevaPassword', sql.VarChar(255), nuevaPassword)
        .execute('anix.sp_ActualizarPassword');
}

async function correoExiste(correo) {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('Correo', sql.VarChar(200), correo)
        .query("SELECT COUNT(*) as total FROM Luis.Usuarios WHERE CorreoElectronico = @Correo");

    return result.recordset[0].total > 0;
}

module.exports = {
    insertarUsuario,
    actualizarUsuario,
    validarLogin,
    insertarPreguntasUsuario,
    obtenerCorreoPorUsuario,
    obtenerPreguntas,
    verificarRespuestas,
    actualizarPassword,
    correoExiste
};
