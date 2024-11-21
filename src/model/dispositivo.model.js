import mongoose from 'mongoose';
import { connection } from '../bd.js';

const dispositivoSchema = new mongoose.Schema({
    id: { 
        type: String, 
        required: true,  
        unique: true     
    },
    nombreArea: { 
        type: String, 
        required: true 
    },
    metrosCuadrados: { 
        type: Number, 
        required: true 
    },
    tipoConsumo: { 
        type: String, 
        required: true, 
    },
    edificio: { 
        type: String, 
        required: true 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario', required: true 
    }
});

// Verificar si el modelo ya está registrado antes de crearlo
const DispositivoModel = mongoose.models.dispositivos || mongoose.model('dispositivos', dispositivoSchema);

const dispositivoSchemaData = new mongoose.Schema({
    id: { type: String, required: true },
    nombreArea: { type: String, required: true },
    metrosCuadrados: { type: Number, required: true },
    tipoConsumo: { type: String, required: true },
    edificio: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    __v: { type: Number }
}, { strict: true });

const DispositivoModelData = mongoose.models.dispositivos || mongoose.model('dispositivo', dispositivoSchemaData);


// Función para obtener datos de la colección
export const getDispositivos = async (userIdea) => {
    try {
        await connection(); 
        return await DispositivoModelData.find({userId: userIdea});
    } catch (error) {
        console.error("Error al obtener usuarios desde la base de datos:", error);
        throw error; 
    }
};

// Función para crear un usuario
export const createDispositivo = async (userData) => {
    try {
        await connection(); // Conectar a la base de datos si no está conectada
        const newUser = new DispositivoModel(userData); // Crear un nuevo usuario
        await newUser.save(); // Guardar en la base de datos
        return newUser;
    } catch (error) {
        console.error("Error al agregar el dispositivo:", error);
        throw error;
    }
};


export const updateData = () => {

}

export const deleteData = () => {

}