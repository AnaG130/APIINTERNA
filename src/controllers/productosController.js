const productosService = require('../Negocio/productosService');

module.exports = {
    obtenerProductos: async (req, res) => {
        try {
            const productos = await productosService.obtenerProductos();
            res.json({ success: true, productos });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};
