const { Router } = require('express');
const { userController } = require('../controllers');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validatePassword = require('../middlewares/validatePassword');
const validateEmail = require('../middlewares/validateEmail');
const validateJWT = require('../middlewares/validateJWT');

const router = Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.create);

router.get('/', validateJWT, userController.getAll);

router.get('/:id', validateJWT, userController.getById);

router.delete('/me', validateJWT, userController.deleteMe);

module.exports = router;