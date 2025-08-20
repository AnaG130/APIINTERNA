const ubicacionesRepository = require('../Datos/ubicacionesRepository');

async function obtenerPaises() {
    return await ubicacionesRepository.obtenerPaises();
}

async function obtenerProvincias(paisId) {
    return await ubicacionesRepository.obtenerProvincias(paisId);
}

async function obtenerCantones(provinciaId) {
    return await ubicacionesRepository.obtenerCantones(provinciaId);
}

async function obtenerDistritos(cantonId) {
    return await ubicacionesRepository.obtenerDistritos(cantonId);
}

module.exports = {
    obtenerPaises,
    obtenerProvincias,
    obtenerCantones,
    obtenerDistritos
};
