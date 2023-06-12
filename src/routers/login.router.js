const { Router } = require('express');
const { loginController } = require('../controllers');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

const router = Router();

router.post('/', validateEmail, validatePassword, loginController.login);

module.exports = router;