const {Schema, model} = require('mongoose');


const TaskSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El Nombre de la Tarea es Necesaria']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion de la Tarea es Necesaria']
    },
    fecha: {
        type: Date,
        required: true
    },
    prioridad: {
        type: Number,
        required: true
    }
})



module.exports = model('Task', TaskSchema);