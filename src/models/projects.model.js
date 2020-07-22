const db = require('../db.js');

class Projects {
  constructor (projects) {
    this.id = projects.id;
    this.name = projects.name;
    this.persons = projects.persons;
    this.content = projects.content;
    this.created_at = projects.created_at;
    this.language_id = projects.language_id;
    this.enterprise = projects.enterprise_id;
  }

  static async create (newProjects) {
    return db
      .query('INSERT INTO projects SET ?', newProjects)
      .then((res) => {
        newProjects.id = res.insertId;
        return newProjects;
      });
  }

  static async findById (id) {
    return db
      .query('SELECT * FROM projects WHERE id = ?', [id])
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
      .query('SELECT * FROM projects WHERE name = ?', [name])
      .then((rows) => {
        if (rows.length) {
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      });
  }

  static async getAll (result) {
    return db.query('SELECT * FROM projects');
  }

  static async updateById (id, projects) {
    return db
      .query('UPDATE projects SET name = ? WHERE id = ?', [
        projects.name,
        id
      ])
      .then(() => this.findById(id));
  }

  static async remove (id) {
    return db.query('DELETE FROM projects WHERE id = ?', id).then((res) => {
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
    return db.query('DELETE FROM projects');
  }
}

module.exports = Projects;
