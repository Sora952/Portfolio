const mysql = require('mysql');
class Database {
  init () {
    let config = {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '3306',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'root',
      database: process.env.DB_NAME || 'checkpoint4',
      connectionLimit: 10,
      multipleStatements: true
    };

    this.connection = mysql.createPool(config);
    return this;
  }

  query (...args) {
    return new Promise((resolve, reject) => {
      this.connection.query(...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  escape (value) {
    return this.connection.escape(value);
  }

  escapeId (value) {
    return this.connection.escapeId(value);
  }

  closeConnection () {
    return new Promise((resolve, reject) => {
      if (this.connection) {
        this.connection.end((err, res) => {
          if (err) reject(err);
          else resolve();
        });
      } else {
        return resolve();
      }
    });
  }
}

module.exports = new Database().init();