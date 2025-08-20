const express = require('express');
const ubicacionesController = require('../controllers/ubicacionesController');
const router = express.Router();

// Rutas de Ubicaciones
router.get('/paises', ubicacionesController.obtenerPaises);
router.get('/provincias/:paisId', ubicacionesController.obtenerProvincias);
router.get('/cantones/:provinciaId', ubicacionesController.obtenerCantones);
router.get('/distritos/:cantonId', ubicacionesController.obtenerDistritos);

module.exports = router;
