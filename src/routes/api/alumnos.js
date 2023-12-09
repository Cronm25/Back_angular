const router = require('express').Router();

const AlumnosController = require('../../controllers/alumnos.controller');

router.get('/', AlumnosController.getAllAlumnos);
router.post('/new_student', AlumnosController.updateAlumno)
router.put('/:alumnoId',AlumnosController.updateAlumno)
router.delete('/:alumnoId', AlumnosController.deleteAlumno)


module.exports = router;