import mongoose from 'mongoose';
import { connection } from '../bd.js';

// Definir el esquema del modelo de usuario
const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidoM: { type: String, required: true },
    apellidoP: { type: String, required: true },
    edad: { type: Number, required: true },
    pais: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    contraseña: { type: String, required: true }
});

// Verificar si el modelo ya está registrado antes de crearlo
const UserModel = mongoose.models.usuarios || mongoose.model('usuarios', userSchema);


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

export const login = async (email, password) => {
    try {
        await connection();
        const usuarios = mongoose.model('usuarios', new mongoose.Schema({}, { strict: false }));
        const user = await usuarios.findOne({ correo: email, contraseña: password });
        return user
    } catch (error) {
        console.error("Error al buscar usuario por correo y contraseña:", error);
        throw error;
    }
}

// Función para crear un usuario
export const createUser = async (userData) => {
    try {
        await connection(); // Conectar a la base de datos si no está conectada
        const newUser = new UserModel(userData); // Crear un nuevo usuario
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