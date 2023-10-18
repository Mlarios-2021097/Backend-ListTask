const { Router } = require('express');
const { check } = require('express-validator');
const { getTask, postTask, deleteTask } = require('../controllers/task');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/get',getTask);

router.post('/post', [
    check('nombre', 'El Nombre de la Tarea es Necesaria').not().isEmpty(),
    check('descripcion', 'La Descripcion de la Tarea es Necesaria').not().isEmpty(),
    check('fecha', 'La Fecha de la Tarea es Necesaria').not().isEmpty(),
    check('prioridad', 'La Prioridad de la Tarea es Necesaria').not().isEmpty(),
    validarCampos
], postTask);


router.delete('/delete/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
], deleteTask);


module.exports = router