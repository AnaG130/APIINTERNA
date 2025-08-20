const express = require('express');
const transaccionesController = require('../controllers/transaccionesController');
const router = express.Router();

router.post('/comprar', transaccionesController.realizarCompra);
router.post('/sinpe', transaccionesController.realizarSINPE);

module.exports = router;
