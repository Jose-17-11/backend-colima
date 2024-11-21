import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import dispositivosRoutes from './routes/dispositivo.routes.js';
import auth from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import https from 'https';

dotenv.config();

const port = process.env.PORT || 443; // Puerto por defecto para HTTPS
const app = express();

// Middleware
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000', 'https://tu-frontend.com'], // Ajusta los orígenes permitidos
    credentials: true,
}));
app.use(express.json());

// Rutas
app.use(userRoutes);
app.use(dispositivosRoutes);
app.use(auth);

// Leer certificados
const privateKey = fs.readFileSync('./server.key', 'utf8');
const certificate = fs.readFileSync('./server.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Crear servidor HTTPS
https.createServer(credentials, app).listen(port, () => {
    console.log(`Servidor HTTPS corriendo en https://localhost:${port}`);
});
