
const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');


// Crea una tarea 
// api/tareas
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('nombre', 'El proyecto es obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
)

// Obtener tareas por proyecto 
router.get('/',
    auth,
    tareaController.obtenerTareas
);

// Actualizar tareas 
router.put('/:id',
    auth,
    tareaController.actualizarTarea
);

// Eliminar una tarea 
router.delete('/:id',
    auth,
    tareaController.eliminarTarea
);



module.exports = router;
