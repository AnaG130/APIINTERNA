const express = require('express');
const tseController = require('../controllers/tseController');
const router = express.Router();

router.get('/:cedula', tseController.consultarPersonaPorCedula);
router.post('/', tseController.insertarPersonaTSE);

module.exports = router;
