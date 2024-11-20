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
        enum: ['120v', '220v'], // Opciones válidas
        default: '120v' // Valor por defecto
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

// Función para obtener datos de la colección
export const getDispositivos = async () => {
    try {
        await connection(); 
        const usuarios = mongoose.model('usuarios', new mongoose.Schema({}, { strict: false }));
        return await usuarios.find({});
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
        console.error("Error al crear un usuario:", error);
        throw error;
    }
};


export const updateData = () => {

}

export const deleteData = () => {

}