const tarjetasService = require('../Negocio/tarjetasService');

module.exports = {
    registrarTarjeta: async (req, res) => {
        try {
            await tarjetasService.registrarTarjeta(req.body);
            res.status(201).json({ success: true, message: 'Tarjeta registrada con éxito' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

     obtenerTarjetasPorCedula: async (req, res) => {
        try {
            const tarjetas = await tarjetasService.obtenerTarjetasPorCedula(req.params.cedula);
            res.json(tarjetas);
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};

