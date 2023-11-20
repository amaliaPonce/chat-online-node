require('dotenv').config();

const mysql = require("mysql2/promise");

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

console.log("MYSQL_HOST:", MYSQL_HOST);
console.log("MYSQL_USER:", MYSQL_USER);
console.log("MYSQL_PASSWORD:", MYSQL_PASSWORD);
console.log("MYSQL_DATABASE:", MYSQL_DATABASE);

let pool;

const getDb = async () => {
  try {
    if (!pool) {
      pool = mysql.createPool({
        connectionLimit: 10,
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
        timezone: "Z",
      });
    }

    const connection = await pool.getConnection();

    await connection.query("SELECT 1");

    return connection;
  } catch (err) {
    console.error("Error in getDb:", err);
    throw err;
  }
};

const getChatHistory = async () => {
  try {
    const connection = await getDb();
    const result = await connection.query('SELECT * FROM messages ORDER BY timestamp');
    connection.release();

    return result[0];
  } catch (err) {
    console.error("Error in getChatHistory:", err);
    throw err;
  }
};


module.exports = { getDb, getChatHistory };
