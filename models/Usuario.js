
const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({

    nombre: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true

    },
    password: {
        type: String,
        require: true,
        trim: true

    },
    registro: {
        type: Date,
        default: Date
    }

});

module.exports = mongoose.model('Usuario', UsuarioSchema);
