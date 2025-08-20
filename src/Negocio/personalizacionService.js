const personalizacionRepository = require('../Datos/personalizacionRepository');

async function insertarPersonalizacion(data) {
    // Llama al repositorio para insertar la personalización en la base de datos
    await personalizacionRepository.insertarPersonalizacion(data);
}

module.exports = {
    insertarPersonalizacion
};
