const { Sequelize, DataTypes } = require("sequelize");
const sql = require("mssql");

const sequelize = new Sequelize("crudnodejs", "node", "123456", {
  host: "localhost",
  dialect: "mssql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexion establecida correctamente");
  })
  .catch((error) => {
    console.error("Imposible conectar con la base de datos", error);
  });

module.exports.sequelize = sequelize;
/* module.exports.getConnection = getConnection();

const dbSettings = {
  user: "node",
  database: "crudnodejs",
  password: "123456",
  server: "localhost",
  encrypt: true,
  trustServerCertificate: true,
};

async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
} */
