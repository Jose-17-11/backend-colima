

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

export const createData = async (userData) => {
    try {
        await connection();
    } catch (error) {
        console.error("Error al agregar el dispositivo:", error);
        throw error;
    }
};


export const updateData = () => {

}

export const deleteData = () => {

}