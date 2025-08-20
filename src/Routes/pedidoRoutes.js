const express = require('express');
const pedidoController = require('../controllers/pedidoController');
const router = express.Router();

// Rutas relacionadas con los pedidos
router.get('/pedidos/:idUsuario', pedidoController.obtenerPedidoPendiente);
router.post('/pedidos', pedidoController.crearPedidoPendiente);
router.post('/pedidos/detalle', pedidoController.agregarDetallePedido);
router.put('/pedidos/aprobar/:idUsuario', pedidoController.aprobarPedido);
router.delete('/pedidos/detalle', pedidoController.eliminarDetallePedido);

module.exports = router;
