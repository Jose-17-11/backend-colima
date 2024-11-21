import mongoose from 'mongoose';
import { connection } from '../bd.js';

const consumoSchema = new mongoose.Schema({
    dispositivo_id: { type: String, ref: 'monitoreo', required: true },
    consumo: {
        cada5min: { type: Number, required: true },
        cada10min: { type: Number, required: true },
        cadaHora: { type: Number, required: true }
    },
    acumulativoSemanal: { type: Number, required: true },
    fecha: { type: String, required: true },
    hora: { type: String, required: true }
}, { strict: true });

// Definir el modelo (asegúrate de no duplicarlo)
const ConsumoModel = mongoose.models.consumos || mongoose.model('monitoreo', consumoSchema);

const ConsumoModelCreate = mongoose.models.consumos || mongoose.model('monitoreo', consumoSchema);

// Función para obtener datos de la colección
export const getDataDispositivo = async (dispositivoId) => {
    try {
        await connection(); 
        const data = await ConsumoModel.find({ dispositivo_id: dispositivoId })
        console.log(data);
        return data
    } catch (error) {
        console.error("Error al obtener monitoreo desde la base de datos:", error);
        throw error; 
    }
};

// Función para crear un usuario
export const createDataDispositivo = async (userData) => {
    try {
        await connection(); // Conectar a la base de datos si no está conectada
        const data = await ConsumoModelCreate.find(userData)
        console.log(data);
        await newUser.save(); // Guardar en la base de datos
        return newUser;
    } catch (error) {
        console.error("Error al agregar el dispositivo:", error);
        throw error;
    }
};
