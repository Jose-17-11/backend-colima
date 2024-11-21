import mongoose from 'mongoose';
import { connection } from '../bd.js';

// Define el esquema de usuario para cuando se va a loguear el usuario
const userSchemaLogueo = new mongoose.Schema({
    correo: String,
    contraseña: String
}, { strict: false }); // Puedes ajustar el esquema si necesitas más campos

// Intenta obtener el modelo existente, o crea uno nuevo si no existe
const Usuario = mongoose.models.usuarios || mongoose.model('usuarios', userSchemaLogueo);

const userSchema = new mongoose.Schema({
    nombre:  String,
    apellidoM:  String,
    apellidoP:  String,
    edad: Number,
    pais:  String,
    correo:  { type: String, unique: true },
    telefono:  String,
    contraseña:  String
}, { strict: false });

// Definir el modelo (asegúrate de no duplicarlo)
const UserModel = mongoose.models.usuarios || mongoose.model('usuarios', userSchema);

export const getData = async (userId) => {
    try {
        await connection(); // Establecer la conexión con la base de datos
        console.log("ID recibido:", userId);
        const user = await UserModel.findOne({_id: userId})
        console.log("Objeto en teoria", user);
        
        if (!user) {
            throw new Error("Usuario no encontrado");
        }   
        return user;
    } catch (error) {
        console.error("Error al obtener usuarios desde la base de datos:", error);
        throw error; 
    }
};

export const login = async (email, password) => {
    try {
        await connection();
        const user = await Usuario.findOne({ correo: email, contraseña: password });
        return user;
    } catch (error) {
        console.error("Error al buscar usuario popasswordr correo y contraseña:", error);
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