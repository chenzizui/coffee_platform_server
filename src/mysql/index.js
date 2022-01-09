var mysql = require('mysql');
var config = require('../config/default.js')

var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
});


class Mysql {
  constructor() {

  }
  queryUsers() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * from users', function (error, results, fields) {
        if (error) {
          throw error
        };
        resolve(results)
      });
    })
  }
  insertUsers(param) {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO users SET ?', param, function (error, results, fields) {
        if (error) {
          throw error
        };
        resolve(results)
      });
    })
  }
  updateUsers(param) {
    return new Promise((resolve, reject) => {
      console.log(param)
      pool.query('UPDATE users SET think=? WHERE openid=?', param, function (error, results, fields) {
        if (error) {
          throw error
        };
        resolve(results)
      });
    })
  }
}

module.exports = new Mysql()