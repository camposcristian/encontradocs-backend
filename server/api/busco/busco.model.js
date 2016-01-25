'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var BuscoSchema = new mongoose.Schema({
  Nombre: String,
  Apellido: String,
  FechaNacimiento: Date,
  Documentos: String,
  DNI: String,
  Email: String,
  Tel: String,
  Donde: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Busco', BuscoSchema);
