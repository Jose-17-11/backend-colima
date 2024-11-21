import mongoose from 'mongoose';
import { connection } from '../bd.js';

// Función para obtener datos de la colección
export const getData = async () => {
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
export const createData = async (userData) => {
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
