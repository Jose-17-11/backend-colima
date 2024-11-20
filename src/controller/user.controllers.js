import { getData, login, createUser } from "../model/user.model.js";

export const read = async (req, res) => {
    try {
        const usuarios = await getData(); // Llamar a la función asíncrona para obtener los usuarios
        res.status(200).json(usuarios); // Enviar los datos como respuesta JSON
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
};


export const logueo = async (req, res) => {
    const { correo, contraseña } = req.body;
    try {
        const user = await login(correo, contraseña);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado o credenciales inválidas" });
        }
        res.status(200).json({ message: "Usuario encontrado", user });
    } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        res.status(500).json({ message: "Error interno del servidor", error });
    }
};

export const register = async (req, res) => {
    const userData = req.body;

    try {
        const newUser = await createUser(userData);
        res.status(201).json({ message: "Usuario creado exitosamente", user: newUser });
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        // Manejar errores de duplicados (correo único)
        if (error.code === 11000) {
            return res.status(400).json({ message: "El correo ya está registrado" });
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