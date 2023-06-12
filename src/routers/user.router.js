const { Router } = require('express');
const { userController } = require('../controllers');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validatePassword = require('../middlewares/validatePassword');
const validateEmail = require('../middlewares/validateEmail');

const router = Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.create);

module.exports = router;