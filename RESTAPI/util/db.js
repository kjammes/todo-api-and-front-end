const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'projects',
  password: 'root',
});

module.exports = pool.promise();