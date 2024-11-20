import mongoose from 'mongoose';

// Leer la URI desde las variables de entorno
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/backendColima';

export const connection = async () => {
    try {
        await mongoose.connect(mongoURI, {});
        console.log("Conexión exitosa");
    } catch (err) {
        console.log("Error en la conexión", err);
        throw err; // Lanzar el error si la conexión falla
    }
};
