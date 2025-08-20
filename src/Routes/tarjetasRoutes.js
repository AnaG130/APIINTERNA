const express = require('express');
const tarjetasController = require('../controllers/tarjetasController');
const router = express.Router();

// Endpoint para registrar tarjeta
router.post('/', tarjetasController.registrarTarjeta);
router.get('/:cedula', tarjetasController.obtenerTarjetasPorCedula);

module.exports = router;
