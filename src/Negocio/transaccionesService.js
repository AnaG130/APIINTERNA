const transaccionesRepository = require('../Datos/transaccionesRepository');
const { encryptData } = require('../utils/encryption');

async function realizarCompra(data) {
    const payload = {
        NumeroTarjeta: data.NumeroTarjeta,
        Monto: data.Monto,
        Detalle: data.Detalle
    };
    await transaccionesRepository.realizarCompra(payload);
}

async function realizarSINPE(data) {
    const payload = {
        TelefonoEmisor: data.TelefonoEmisor,
        TelefonoReceptor: data.TelefonoReceptor,
        Monto: data.Monto,
        Detalle: data.Detalle
    };
    await transaccionesRepository.realizarSINPE(payload);
}

module.exports = {
    realizarCompra,
    realizarSINPE
};
