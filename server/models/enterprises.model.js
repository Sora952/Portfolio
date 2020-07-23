const db = require('../db.js');

class Enterprises {
  constructor (enterprises) {
    this.id = enterprises.id;
    this.name = enterprises.name;
    this.place = enterprises.place;
  }

  static async create (newEnterprises) {
    return db
      .query('INSERT INTO enterprises SET ?', newEnterprises)
      .then((res) => {
        newEnterprises.id = res.insertId;
        return newEnterprises;
      });
  }

  static async findById (id) {
    return db
      .query('SELECT * FROM enterprises WHERE id = ?', [id])
      .then((rows) => {
        if (rows.length) {
          return Promise.resolve(rows[0]);
        } else {
          const err = new Error();
          err.kind = 'not_found';
          return Promise.reject(err);
        }
      });
  }

  static async nameAlreadyExists (name) {
    return db
      .query('SELECT * FROM enterprises WHERE name = ?', [name])
      .then((rows) => {
        if (rows.length) {
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      });
  }

  static async getAll (result) {
    return db.query('SELECT * FROM enterprises');
  }

  static async updateById (id, enterprises) {
    return db
      .query('UPDATE enterprises SET name = ? WHERE id = ?', [
        enterprises.name,
        id
      ])
      .then(() => this.findById(id));
  }

  static async remove (id) {
    return db.query('DELETE FROM enterprises WHERE id = ?', id).then((res) => {
      if (res.affectedRows !== 0) {
        return Promise.resolve();
      } else {
        const err = new Error();
        err.kind = 'not_found';
        return Promise.reject(err);
      }
    });
  }

  static async removeAll (result) {
    return db.query('DELETE FROM enterprisess');
  }
}

module.exports = Enterprises;
