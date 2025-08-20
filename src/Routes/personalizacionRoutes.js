const express = require('express');
const personalizacionController = require('../controllers/personalizacionController');
const router = express.Router();

// Ruta para insertar personalización
router.post('/personalizaciones', personalizacionController.insertarPersonalizacion);

module.exports = router;
