const EnterprisesController = require('../controllers/enterprises.controller.js');
const router = require('express').Router();

router.post('/', EnterprisesController.create);
router.get('/', EnterprisesController.findAll);
router.get('/:id', EnterprisesController.findOne);
router.patch('/:id', EnterprisesController.update);
router.delete('/:id', EnterprisesController.delete);

module.exports = router;