const ProjectsController = require('../controllers/projects.controller.js');
const router = require('express').Router();

router.post('/', ProjectsController.create);
router.get('/', ProjectsController.findAll);
router.get('/:id', ProjectsController.findOne);
router.patch('/:id', ProjectsController.update);
router.delete('/:id', ProjectsController.delete);

module.exports = router;