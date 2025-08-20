const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = express.Router();

// Usuario CRUD y seguridad
router.post('/usuarios', usuarioController.insertarUsuario);
router.put('/usuarios', usuarioController.actualizarUsuario);
router.post('/usuarios/login', usuarioController.validarLogin);
router.post('/usuarios/preguntas', usuarioController.insertarPreguntasUsuario);
router.get('/usuarios/correo/:usuario', usuarioController.obtenerCorreoPorUsuario);
router.get('/usuarios/preguntas/:correo', usuarioController.obtenerPreguntas);
router.post('/usuarios/verificar-respuestas', usuarioController.verificarRespuestas);
router.put('/usuarios/actualizar-password', usuarioController.actualizarPassword);
router.get('/usuarios/correo-existe/:correo', usuarioController.correoExiste);

module.exports = router;
