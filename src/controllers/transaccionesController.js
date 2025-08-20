const transaccionesService = require('../Negocio/transaccionesService');

module.exports = {
    realizarCompra: async (req, res) => {
        try {
            await transaccionesService.realizarCompra(req.body);
            res.status(200).json({ success: true, message: 'Compra realizada correctamente.' });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    realizarSINPE: async (req, res) => {
        try {
            await transaccionesService.realizarSINPE(req.body);
            res.status(200).json({ success: true, message: 'Transferencia SINPE realizada.' });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
};
