import { crearMonitoreo } from "../model/monitoreo.model.js"

export const insertarMonitoreo = async (req, res) => {
    try {
        const data = req.body;

        // Validar que los campos esenciales (dispositivo_id, fecha, hora) estén presentes
        if (!data.dispositivo_id || !data.fecha || !data.hora) {
            return res.status(400).json({ error: 'Dispositivo_id, fecha y hora son obligatorios.' });
        }
        // Llamar al servicio para crear el monitoreo
        const monitoreo = await crearMonitoreo(data);

        // Responder con el monitoreo creado
        return res.status(201).json(monitoreo);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};