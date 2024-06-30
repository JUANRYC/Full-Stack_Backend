const Empleado = require('../models/empleado.model');

exports.crear = async (req, res) => {
  try {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.status(201).json(empleado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.obtenerUno = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.json(empleado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};