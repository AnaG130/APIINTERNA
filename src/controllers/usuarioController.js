const usuarioService = require('../Negocio/usuarioService');

module.exports = {
    insertarUsuario: async (req, res) => {
        try {
            await usuarioService.insertarUsuario(req.body);
            res.status(201).json({ success: true, message: 'Usuario insertado' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    
    actualizarUsuario: async (req, res) => {
        try {
            await usuarioService.actualizarUsuario(req.body);
            res.json({ success: true });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    validarLogin: async (req, res) => {
        try {
            const result = await usuarioService.validarLogin(req.body);
            res.json(result);
        } catch (err) {
            res.status(401).json({ success: false, message: 'Credenciales inválidas' });
        }
    },

    insertarPreguntasUsuario: async (req, res) => {
        try {
            await usuarioService.insertarPreguntasUsuario(req.body);
            res.status(201).json({ success: true });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    obtenerCorreoPorUsuario: async (req, res) => {
        try {
            const correo = await usuarioService.obtenerCorreoPorUsuario(req.params.usuario);
            res.json({ correo });
        } catch (err) {
            res.status(404).json({ success: false, message: err.message });
        }
    },

    obtenerPreguntas: async (req, res) => {
        try {
            const preguntas = await usuarioService.obtenerPreguntas(req.params.correo);
            res.json({ preguntas });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    verificarRespuestas: async (req, res) => {
        try {
            const result = await usuarioService.verificarRespuestas(req.body);
            res.json({ validas: result });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    actualizarPassword: async (req, res) => {
        try {
            await usuarioService.actualizarPassword(req.body);
            res.json({ success: true });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    correoExiste: async (req, res) => {
        try {
            const existe = await usuarioService.correoExiste(req.params.correo);
            res.json({ existe });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};
