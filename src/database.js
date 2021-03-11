// CONFIG CONEXION DATABASE
const mysql = require("mysql");
const { promisify } = require("util");
const { database } = require("./keys");

// pool - hilos que se ejecutan como tareas en secuencia
const pool = mysql.createPool(database);

// no llamar cada vez la conexion
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // la conexión con la base de datos - perdida
      console.error("DATABASE CONNECTION WAS CLOSED");
    }

    if (err.code === "ER_CON_COUNT_ERROR") {
      // comprobar cuantas conexiones tiene la base de datos
      console.error("DATABASE HAS TO MANY CONNECTIONS");
    }

    if (err.code === "ECONNREFUSED") {
      // conexión rechazada, credenciales u otros
      console.error("DATABASE CONNECTION WAS REFUSED");
    }
  }

  // inicia la conexión
  if (connection) connection.release();
  console.log("DB is Connected");
  return;
});

pool.query = promisify(pool.query);

module.exports = pool;
