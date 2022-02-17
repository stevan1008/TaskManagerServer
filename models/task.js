const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor escriba una tarea'],
        trim: true,
        maxlength: [30, 'Limite máximo de caracteres es 30']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)