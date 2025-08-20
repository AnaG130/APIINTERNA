const pedidoService = require('../Negocio/pedidoService');

module.exports = {
    obtenerPedidoPendiente: async (req, res) => {
        try {
            const result = await pedidoService.obtenerPedidoPendiente(req.params.idUsuario);
            res.json({ idPedido: result });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    crearPedidoPendiente: async (req, res) => {
        try {
            const idPedido = await pedidoService.crearPedidoPendiente(req.body.idUsuario);
            res.status(201).json({ idPedido });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    agregarDetallePedido: async (req, res) => {
        try {
            await pedidoService.agregarDetallePedido(req.body.idPedido, req.body.idProducto);
            res.status(200).json({ success: true, message: 'Detalle agregado al pedido' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    aprobarPedido: async (req, res) => {
        try {
            await pedidoService.aprobarPedido(req.params.idUsuario);
            res.status(200).json({ success: true, message: 'Pedido aprobado' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    eliminarDetallePedido: async (req, res) => {
        try {
            await pedidoService.eliminarDetallePedido(req.body.idUsuario, req.body.nombreProducto);
            res.status(200).json({ success: true, message: 'Detalle eliminado del pedido' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};
