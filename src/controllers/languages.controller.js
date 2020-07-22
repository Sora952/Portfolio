const Languages = require('../models/languages.model.js');

class LanguagesController {
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
      const languages = new Languages(req.body);
      if (await Languages.nameAlreadyExists(languages.name)) {
        res.status(400).send({
          errorMessage: 'A language with this name already exists !'
        });
      } else {
        const data = await Languages.create(languages);
        res.status(201).send({ data });
      }
    } catch (err) {
      res.status(500).send({
        errorMessage:
          err.message || 'Some error occurred while creating A language.'
      });
    }
  }

  static async findAll (req, res) {
    try {
      const data = (await Languages.getAll())
        .map((m) => new Languages(m))
        .map((m) => ({
          id: m.id,
          name: m.name
        }));
      res.send({ data });
    } catch (err) {
      res.status(500).send({
        errorMessage:
          err.message || 'Some error occurred while retrieving A language.'
      });
    }
  }

  static async findOne (req, res) {
    try {
      const data = await Languages.findById(req.params.id);
      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          errorMessage: `A language with id ${req.params.id} not found.`
        });
      } else {
        res.status(500).send({
          errorMessage: 'Error retrieving  language with id ' + req.params.id
        });
      }
    }
  }

  static async update (req, res) {
    if (!req.body) {
      res.status(400).send({ errorMessage: 'Content can not be empty!' });
    }

    try {
      const data = await Languages.updateById(
        req.params.id,
        new Languages(req.body)
      );
      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          errorMessage: `languages with id ${req.params.id} not found.`
        });
      } else {
        res.status(500).send({
          errorMessage: 'Error updating language with id ' + req.params.id
        });
      }
    }
  }

  static async delete (req, res) {
    try {
      await Languages.remove(req.params.id);
      res.send({ message: 'languages was deleted successfully!' });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          errorMessage: `Not found language with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          errorMessage: 'Could not delete language with id ' + req.params.id
        });
      }
    }
  }
}

module.exports = LanguagesController;
