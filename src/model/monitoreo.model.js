import mongoose from 'mongoose';
import { connection } from '../bd.js';

const monitoreoSchema = new mongoose.Schema({
    dispositivo_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'dispositivo', 
        required: true 
    },
    consumo: {
        cada5min: { type: Number, required: false },
        cada10min: { type: Number, required: false },
        cadaHora: { type: Number, required: false }
    },
    acumulativoSemanal: { 
        type: Number, 
        required: false 
    },
    fecha: { 
        type: String, 
        required: true 
    },
    hora: { 
        type: String, 
        required: true 
    }
});

const Monitoreo = mongoose.models.Monitoreo || mongoose.model('Monitoreo', monitoreoSchema);

export const crearMonitoreo = async (data) => {
    connection()
    const monitoreo = new Monitoreo({
        dispositivo_id: data.dispositivo_id,
        consumo: data.consumo || {}, // Si no hay datos de consumo, se guarda como un objeto vacío
        acumulativoSemanal: data.acumulativoSemanal || 0, // Si no hay acumulativo, se guarda como 0
        fecha: data.fecha,
        hora: data.hora
    });

    try {
        await monitoreo.save();
        return monitoreo;
    } catch (error) {
        throw new Error('Error al guardar monitoreo: ' + error.message);
    }
};