const tarjetasRepository = require('../Datos/tarjetasRepository');
const { encryptData } = require('../utils/encryption');

async function registrarTarjeta(data) {
    const tarjeta = {
        numeroTarjeta: data.numeroTarjeta,
        saldo: data.saldo,
        fechaVencimiento: data.fechaVencimiento,
        cvv: data.cvv,
        cedulaDueno: data.cedulaDueno, // sin cifrar porque es clave foránea relacionada
        nombrePropietario: data.nombrePropietario,
        telefonoPropietario: data.telefonoPropietario
    };
    await tarjetasRepository.registrarTarjeta(tarjeta);
}

async function obtenerTarjetasPorCedula(cedula) {
    return await tarjetasRepository.obtenerTarjetasPorCedula(cedula);
}


module.exports = {
    obtenerTarjetasPorCedula,
    registrarTarjeta
};
