const db = require('../db.js');

class Languages {
  constructor (languages) {
    this.id = languages.id;
    this.name = languages.name;
  }

  static async create (newLanguages) {
    return db
      .query('INSERT INTO languages SET ?', newLanguages)
      .then((res) => {
        newLanguages.id = res.insertId;
        return newLanguages;
      });
  }

  static async findById (id) {
    return db
      .query('SELECT * FROM languages WHERE id = ?', [id])
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
      .query('SELECT * FROM languages WHERE name = ?', [name])
      .then((rows) => {
        if (rows.length) {
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      });
  }

  static async getAll (result) {
    return db.query('SELECT * FROM languages');
  }

  static async updateById (id, languages) {
    return db
      .query('UPDATE languages SET name = ? WHERE id = ?', [
        languages.name,
        id
      ])
      .then(() => this.findById(id));
  }

  static async remove (id) {
    return db.query('DELETE FROM languages WHERE id = ?', id).then((res) => {
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
    return db.query('DELETE FROM languages');
  }
}

module.exports = Languages;
