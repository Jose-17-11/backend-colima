import { getDispositivos, createDispositivo } from "../model/dispositivo.model.js";
// Obtener todos los dispositivos del usuario
export const read = async (req, res) => {
    try {
        const { userId } = req.params
        const usuarios = await getDispositivos(userId); // Llamar a la función asíncrona para obtener los usuarios
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
        // const userId = await req.cookies.userId;

        // Verificar si el ID del usuario está presente en las cookies
        // if (!userId) {
        //     return res.status(400).json({ message: "No se encontró el ID de usuario en las cookies" });
        // }

        // console.log(userId);
        
        // Agregar el ID del usuario al objeto Data
        const Data = req.body;
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
