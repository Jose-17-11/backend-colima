import mongoose from 'mongoose';
import { connection } from '../bd.js';

const monitoreoSchema = new mongoose.Schema({
    idDispositivo: { type: mongoose.Schema.Types.ObjectId, ref: 'dispositivo', required: true },
    consumo5min: { type: Number, required: true },
    consumo10min: { type: Number, required: true },
    consumoKwH: { type: Number, required: true },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    consumoSemana: { type: Number, required: true }
});

const monitoreoModel = mongoose.models.dispositivos || mongoose.model('monitoreo', dispositivoSchema);

const readData = () => {

}
const postData = () => {

}