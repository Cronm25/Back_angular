const router = require('express').Router();

const UserController = require('../../controllers/users.controller');

router.get('/', UserController.getAllUsers);
router.get('/Login', UserController.GetLogin);
router.get('/role/:roleId', UserController.getUsersByRol);// Buscar por rol
router.get('/role/:roleId/:isActive', UserController.getUserByRolAndState);//Buscar por rol y estado de actividad 
router.post('/new_user', UserController.createUser); //Crear usuario 
router.put('/:userId', UserController.updateUser); //Modificar usuario
router.delete('/:userId', UserController.deleteUser); //Borrar usuario
router.put('/:userId/:Status', UserController.updateUserStatus);//Modificar rol

module.exports = router;