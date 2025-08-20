const tseRepository = require('../Datos/tseRepository');

async function consultarPersonaPorCedula(cedula) {
    const persona = await tseRepository.consultarPersonaPorCedula(cedula);
    if (!persona) {
        throw new Error('Persona no encontrada');
    }
    return persona;
}

async function insertarPersonaTSE(data) {
    await tseRepository.insertarPersonaTSE(data);
}

module.exports = {
    consultarPersonaPorCedula,
    insertarPersonaTSE
};
