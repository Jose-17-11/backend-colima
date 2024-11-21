import { getData, createData } from '../model/data.model.js'

export const getData = async () => {
    try {
        
    } catch (error) {
        console.error("Error al obtener usuarios desde la base de datos:", error);
        throw error; 
    }
};

export const createData = async (userData) => {
    try {
        
    } catch (error) {
        console.error("Error al agregar el dispositivo:", error);
        throw error;
    }
};