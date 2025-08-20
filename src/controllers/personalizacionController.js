const personalizacionService = require('../Negocio/personalizacionService');

module.exports = {
    insertarPersonalizacion: async (req, res) => {
        try {
            await personalizacionService.insertarPersonalizacion(req.body);
            res.status(201).json({ success: true, message: 'Personalización insertada correctamente' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};
