const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "23.88.53.225", // Change to your MySQL host
  port: 5432,
  user: "mariadb", // Your MySQL username
  password: "pwd", // Your MySQL password
  database: "people", // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise(); // Using promise-based queries

//mysql://mysql:g473HfP09ZvuuP6hJY3IAvpwDHQKVDFLzqwXJKH1Jp5MUwvQjnq2TEvK6HVojSCe@23.88.53.225:3306/default
