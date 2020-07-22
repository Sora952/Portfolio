const Enterprises = require('../models/enterprises.model.js');

class EnterprisesController {
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
      const enterprises = new Enterprises(req.body);
      if (await Enterprises.nameAlreadyExists(enterprises.name)) {
        res.status(400).send({
          errorMessage: 'A enterprise with this name already exists !'
        });
      } else {
        const data = await Enterprises.create(enterprises);
        res.status(201).send({ data });
      }
    } catch (err) {
      res.status(500).send({
        errorMessage:
          err.message || 'Some error occurred while creating A enterprise.'
      });
    }
  }

  static async findAll (req, res) {
    try {
      const data = (await Enterprises.getAll())
        .map((m) => new Enterprises(m))
        .map((m) => ({
          id: m.id,
          name: m.name,
          place: m.place
        }));
      res.send({ data });
    } catch (err) {
      res.status(500).send({
        errorMessage:
          err.message || 'Some error occurred while retrieving A enterprise.'
      });
    }
  }

  static async findOne (req, res) {
    try {
      const data = await Enterprises.findById(req.params.id);
      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          errorMessage: `A enterprise with id ${req.params.id} not found.`
        });
      } else {
        res.status(500).send({
          errorMessage: 'Error retrieving  enterprise with id ' + req.params.id
        });
      }
    }
  }

  static async update (req, res) {
    if (!req.body) {
      res.status(400).send({ errorMessage: 'Content can not be empty!' });
    }

    try {
      const data = await Enterprises.updateById(
        req.params.id,
        new Enterprises(req.body)
      );
      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          errorMessage: `enterprises with id ${req.params.id} not found.`
        });
      } else {
        res.status(500).send({
          errorMessage: 'Error updating enterprise with id ' + req.params.id
        });
      }
    }
  }

  static async delete (req, res) {
    try {
      await Enterprises.remove(req.params.id);
      res.send({ message: 'enterprises was deleted successfully!' });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          errorMessage: `Not found enterprise with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          errorMessage: 'Could not delete enterprise with id ' + req.params.id
        });
      }
    }
  }
}

module.exports = EnterprisesController;
