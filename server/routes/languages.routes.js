const LanguagesController = require('../controllers/languages.controller.js');
const router = require('express').Router();

router.post('/', LanguagesController.create);
router.get('/', LanguagesController.findAll);
router.get('/:id', LanguagesController.findOne);
router.patch('/:id', LanguagesController.update);
router.delete('/:id', LanguagesController.delete);

module.exports = router;