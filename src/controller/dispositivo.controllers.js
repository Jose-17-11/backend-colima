import { getDispositivos, createDispositivo } from "../model/dispositivo.model.js";
// Obtener todos los dispositivos del usuario
export const read = async (req, res) => {
    try {
        const usuarios = await getDispositivos(); // Llamar a la función asíncrona para obtener los usuarios
        res.status(200).json(usuarios); // Enviar los datos como respuesta JSON
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
};

// Registra un nuevo dispositivo como propiedad del usuario
export const register = async (req, res) => {
    try {
        // Obtener el ID del usuario desde las cookies (asumimos que se llama 'userId')
        const userId = await req.cookies.userId;

        // Verificar si el ID del usuario está presente en las cookies
        if (!userId) {
            return res.status(400).json({ message: "No se encontró el ID de usuario en las cookies" });
        }

        console.log(userId);
        
        // Agregar el ID del usuario al objeto Data
        const Data = { ...req.body, userId: userId };
        console.log(Data);
        
        const newDispositivo = await createDispositivo(Data);
        res.status(201).json({ message: "Dispositivo agregado exitosamente", user: newDispositivo });
    } catch (error) {
        console.error("Error al agregar un dispositivo:", error);
        // Manejar errores de duplicados (correo único)
        if (error.code === 11000) {
            return res.status(400).json({ message: "El dispositivo ya está registrado" });
        }
        res.status(500).json({ message: "Error interno del servidor", error });
    }
};


export const update = async (req, res) => {
    try {
        res.send("Hello update XD")
    } catch (error) {
        
    }
}

export const deleted = async (req, res) => {
    try {
        res.send("Hello delete XD")
    } catch (error) {
        
    }
}