const Projects = require('../models/projects.model.js');

class ProjectsController {
  static async create (req, res) {
    if (!req.body) {
      return res
        .status(400)
        .send({ errorMessage: 'Content can not be empty!' });
    }
    if (!req.body.name) {
      return res.status(400).send({ errorMessage: 'Name can not be empty!' });
    }
    try {
      const projects = new Projects(req.body);
      if (await Projects.nameAlreadyExists(projects.name)) {
        res.status(400).send({
          errorMessage: 'A project with this name already exists !'
        });
      } else {
        const data = await Projects.create(projects);
        res.status(201).send({ data });
      }
    } catch (err) {
      res.status(500).send({
        errorMessage:
          err.message || 'Some error occurred while creating A project.'
      });
    }
  }

  static async findAll (req, res) {
    try {
      const data = (await Projects.getAll())
        .map((m) => new Projects(m))
        .map((m) => ({
          id: m.id,
          name: m.name,
          persons: m.persons,
          content: m.content,
          created_at: m.created_at,
          language_id: m.language_id,
          enterprise_id: m.enterprise_id
        }));
      res.send({ data });
    } catch (err) {
      res.status(500).send({
        errorMessage:
          err.message || 'Some error occurred while retrieving A project.'
      });
    }
  }

  static async findOne (req, res) {
    try {
      const data = await Projects.findById(req.params.id);
      console.log({data});
      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          errorMessage: `A project with id ${req.params.id} not found.`
        });
      } else {
        res.status(500).send({
          errorMessage: 'Error retrieving  project with id ' + req.params.id
        });
      }
    }
  }

  static async update (req, res) {
    if (!req.body) {
      res.status(400).send({ errorMessage: 'Content can not be empty!' });
    }

    try {
      const data = await Projects.updateById(
        req.params.id,
        new Projects(req.body)
      );
      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          errorMessage: `projects with id ${req.params.id} not found.`
        });
      } else {
        res.status(500).send({
          errorMessage: 'Error updating project with id ' + req.params.id
        });
      }
    }
  }

  static async delete (req, res) {
    try {
      await Projects.remove(req.params.id);
      res.send({ message: 'projects was deleted successfully!' });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          errorMessage: `Not found project with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          errorMessage: 'Could not delete project with id ' + req.params.id
        });
      }
    }
  }
}

module.exports = ProjectsController;
