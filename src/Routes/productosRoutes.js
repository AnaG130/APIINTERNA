const express = require('express');
const productosController = require('../controllers/productosController');
const router = express.Router();

// Ruta para obtener productos
router.get('/productos', productosController.obtenerProductos);

module.exports = router;
