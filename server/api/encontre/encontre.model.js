'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EncontreSchema = new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    FechaNacimiento: Date,
    Documentos: String,
    DNI: String,
    Foto: { data: Buffer, contentType: String },
    Email: String,
    Tel: String,
    Donde: String,
    DondeDeja: String,
    info: String,
    active: Boolean
});

export default mongoose.model('Encontre', EncontreSchema);
