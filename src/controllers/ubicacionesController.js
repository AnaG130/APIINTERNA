const ubicacionesService = require('../Negocio/ubicacionesService');

module.exports = {
    obtenerPaises: async (req, res) => {
        try {
            const paises = await ubicacionesService.obtenerPaises();
            res.json({ paises });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    obtenerProvincias: async (req, res) => {
        try {
            const provincias = await ubicacionesService.obtenerProvincias(req.params.paisId);
            res.json({ provincias });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    obtenerCantones: async (req, res) => {
        try {
            const cantones = await ubicacionesService.obtenerCantones(req.params.provinciaId);
            res.json({ cantones });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    obtenerDistritos: async (req, res) => {
        try {
            const distritos = await ubicacionesService.obtenerDistritos(req.params.cantonId);
            res.json({ distritos });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};
