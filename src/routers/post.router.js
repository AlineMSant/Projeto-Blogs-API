const { Router } = require('express');
const { postController } = require('../controllers');
const validateJWT = require('../middlewares/validateJWT');
const validateTitle = require('../middlewares/validateTitle');
const validateContent = require('../middlewares/validateContent');
const validateCategoryIds = require('../middlewares/validateCategoryIds');

const router = Router();

router.post(
'/', 
validateTitle, 
validateContent, 
validateCategoryIds,
validateJWT, 
postController.create,
);

module.exports = router;