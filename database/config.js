const mongoose = require('mongoose');


const dbConection = async() => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log('BASE DE DATOS CONECTADA @LARIOS');
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error al momento de conectar la base de datos')
    }
}




module.exports = {
    dbConection
}