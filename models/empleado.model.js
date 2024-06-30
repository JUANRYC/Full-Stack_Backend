const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  puesto: { type: String, required: true },
  salario: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Empleado', empleadoSchema);