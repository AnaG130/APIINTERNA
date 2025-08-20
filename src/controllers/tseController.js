const tseService = require('../Negocio/tseService');

module.exports = {
    consultarPersonaPorCedula: async (req, res) => {
        try {
            const cedula = req.params.cedula;
            const persona = await tseService.consultarPersonaPorCedula(cedula);
            res.json({ success: true, persona });
        } catch (err) {
            res.status(404).json({ success: false, message: err.message });
        }
    },

   insertarPersonaTSE: async (req, res) => {
        try {
            await tseService.insertarPersonaTSE(req.body);
            res.status(201).json({ success: true, message: 'Persona insertada en el TSE' }); // ✅ ESTA LÍNEA ES VITAL
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

};
