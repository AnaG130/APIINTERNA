require('dotenv').config();
const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./src/Routes/usuarioRoutes');
const productosRoutes = require('./src/Routes/productosRoutes');
const personalizacionRoutes = require('./src/Routes/personalizacionRoutes');
const pedidoRoutes = require('./src/Routes/pedidoRoutes');
const ubicacionesRoutes = require('./src/Routes/ubicacionesRoutes');
const tseRoutes = require('./src/Routes/tseRoutes');
const tarjetasRoutes = require('./src/Routes/tarjetasRoutes');
const transaccionesRoutes = require('./src/Routes/transaccionesRoutes');
const bodyParser = require('body-parser');
const app = express();

app.use(cors({
    origin: 'http://localhost:5086', // Cambia esta URL al dominio de tu frontend
}));

app.use(express.json());

console.log(process.env)
// Montar las rutas bajo /apinterna
app.use('/apinterna', usuarioRoutes);

app.use('/apinterna2', productosRoutes);

app.use('/apinterna3', personalizacionRoutes);

app.use('/apinterna4', pedidoRoutes);

app.use('/apinterna5', ubicacionesRoutes);

app.use('/tse', tseRoutes);

app.use('/tarjetas', tarjetasRoutes);

app.use('/transacciones', transaccionesRoutes);
// Middleware para manejar errores 404q
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Ruta no encontrada'
    });
});
app.use(bodyParser.json());

// Middleware para manejar otros errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Error interno del servidor'
    });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});