import { getDataDispositivo, createDataDispositivo } from '../model/data.model.js'

export const getData = async (req, res) => {
    try {
        const { dispositivoId } = req.params;
        const data = await getDataDispositivo(dispositivoId)
        res.status(200).json(data);
    } catch (error) {
        console.error("Error al obtener datos de monitoreo desde la base de datos:", error);
        throw error; 
    }
};

export const createData = async (req, res) => {
    try {
        const data = await createDataDispositivo(req.params)
        res.status(200).json(data);
    } catch (error) {
        console.error("Error al obtener datos de monitoreo desde la base de datos:", error);
        throw error; 
    }
};