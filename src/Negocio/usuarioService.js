const usuarioRepository = require('../Datos/usuarioRepository');
const { encryptData, decryptData } = require('../utils/encryption');

async function insertarUsuario(data) {
    const usuarioEncriptado = {
        ...data,
        correo: encryptData(data.correo),
        usuario: encryptData(data.usuario),
        contrasena: encryptData(data.contrasena)
    };
    await usuarioRepository.insertarUsuario(usuarioEncriptado);
}

async function actualizarUsuario(data) {
    const usuarioEnc = {
        id: data.id,
        correo: encryptData(data.correo),
        usuario: encryptData(data.usuario),
        contrasena: encryptData(data.contrasena)
    };
    await usuarioRepository.actualizarUsuario(usuarioEnc);
}

async function validarLogin({ usuario, contrasena }) {
    const usuarioEnc = encryptData(usuario);
    const contrasenaEnc = encryptData(contrasena);
    const result = await usuarioRepository.validarLogin(usuarioEnc, contrasenaEnc);

    if (!result) throw new Error('Credenciales inválidas');

    return {
        success: true,
        Identificacion: result.Identificacion,
        Nombre: result.Nombre,
        PrimerApellido: result.PrimerApellido,
        SegundoApellido: result.SegundoApellido
    };
}


async function insertarPreguntasUsuario(data) {
    const enc = {
        identificacion: data.identificacion,
        pregunta1: encryptData(data.pregunta1),
        respuesta1: encryptData(data.respuesta1),
        pregunta2: encryptData(data.pregunta2),
        respuesta2: encryptData(data.respuesta2),
        pregunta3: encryptData(data.pregunta3),
        respuesta3: encryptData(data.respuesta3)
    };
    await usuarioRepository.insertarPreguntasUsuario(enc);
}

async function obtenerCorreoPorUsuario(usuario) {
    const usuarioEnc = encryptData(usuario);
    const correoEnc = await usuarioRepository.obtenerCorreoPorUsuario(usuarioEnc);

    if (!correoEnc) {
        throw new Error('El correo no fue encontrado o es nulo.');
    }

    return decryptData(correoEnc);
}


async function obtenerPreguntas(correo) {
    const preguntasEnc = await usuarioRepository.obtenerPreguntas(encryptData(correo));
    return preguntasEnc.map(decryptData);
}

async function verificarRespuestas({ correo, r1, r2, r3 }) {
    return await usuarioRepository.verificarRespuestas(
      
        encryptData(correo),
        encryptData(r1),
        encryptData(r2),
        encryptData(r3)
    );
}

async function actualizarPassword({ correo, nuevaPassword }) {
    await usuarioRepository.actualizarPassword(
        encryptData(correo),
        encryptData(nuevaPassword)
    );
}

async function correoExiste(correo) {
    return await usuarioRepository.correoExiste(encryptData(correo));
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
