const { Router } = require('express');
const { categoryController } = require('../controllers');
const validateJWT = require('../middlewares/validateJWT');
const validateName = require('../middlewares/validateName');

const router = Router();

router.post('/', validateJWT, validateName, categoryController.create);

router.get('/', validateJWT, categoryController.getAll);

module.exports = router;