import jwt from 'jsonwebtoken';
import { getData, login, createUser } from "../model/user.model.js";

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

export const read = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await getData(userId);
        res.status(200).json(user); // Enviar los datos encontrados como respuesta JSON
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ message: "Error al obtener usuarios", error: error.message });
    }
};

export const logueo = async (req, res) => {
    const { correo, contraseña } = req.body;

    // Verificar si el usuario existe
    const user = await login(correo, contraseña);
    if (!user) {
        return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Verificar la contraseña (asegúrate de hacerlo de manera segura)
    // Si es necesario, usa bcrypt para comparar contraseñas hash
    if (user.contraseña !== contraseña) {
        return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Generar el token JWT
    const accessToken = jwt.sign(
        { correo: user.correo, id: user.id },
        JWT_SECRET,
        { expiresIn: '10m' } // El token expirará en 10 minutos
    );
    console.log(user.id);
    

    res.cookie('accessToken', accessToken, {
        httpOnly: true,  // Hace que la cookie no sea accesible a través de JavaScript
        secure: process.env.NODE_ENV === 'production',  // Solo se envía sobre HTTPS en producción
        maxAge: 10 * 60 * 1000,  // La cookie expirará en 10 minutos (en milisegundos)
        sameSite: 'Strict',  // Previene el envío de cookies en solicitudes de sitios cruzados
    });

    res.cookie('userId', user._id, {
        httpOnly: true, // Hace que la cookie no sea accesible a través de JavaScript
        secure: process.env.NODE_ENV === 'production',  // Solo se envía sobre HTTPS en producción
        maxAge: 10 * 60 * 1000,  // La cookie expirará en 10 minutos (en milisegundos)
        sameSite: 'Strict',  // Previene el envío de cookies en solicitudes de sitios cruzados
    });

    // Enviar el token al cliente
    res.json({  accessToken, userId: user._id  });
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