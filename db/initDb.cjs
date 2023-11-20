require('dotenv').config();
const getDb = require('./getDb.cjs');

async function initializeChatDB() {
  let connection;

  try {
    connection = await getDb();

    await connection.query(`USE ${process.env.MYSQL_DATABASE}`);

    // Borrar tablas si existen
    await connection.query('DROP TABLE IF EXISTS messages');

    console.log("Creando tablas...");

    // Tabla de mensajes.
    await connection.query(`
      CREATE TABLE messages (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(30) NOT NULL,
        content TEXT,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('¡Tablas creadas!');
  } catch (err) {
    console.error('Error al inicializar la base de datos:', err);
  } finally {
    if (connection) connection.release();
    process.exit();
  }
}

initializeChatDB();
