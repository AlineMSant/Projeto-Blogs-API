const { Router } = require('express');
const { postController } = require('../controllers');
const validateJWT = require('../middlewares/validateJWT');

const router = Router();

router.post('/', validateJWT, postController.create);

module.exports = router;