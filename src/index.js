import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connection } from './bd.js';

dotenv.config();

const port = 3000;
const app = express();

// Espera a que la conexión se haya establecido correctamente
app.get('/', async (req, res) => {
    try {
        // Asegúrate de que la conexión esté lista antes de consultar
        await connection();

        // Realiza la consulta a la base de datos después de la conexión
        const result = await mongoose.connection.db.collection('prueba').find().toArray();
        res.send(result);
    } catch (err) {
        res.status(500).send("Error al consultar la base de datos: " + err);
    }
});

app.listen(port, () => {
    console.log(`server running in port ${port}`);
});
