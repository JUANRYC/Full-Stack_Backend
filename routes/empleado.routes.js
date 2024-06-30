const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller');

router.post('/', empleadoController.crear);
router.get('/', empleadoController.obtenerTodos);
router.get('/:id', empleadoController.obtenerUno);
router.put('/:id', empleadoController.actualizar);
router.delete('/:id', empleadoController.eliminar);

module.exports = router;