const express = require("express");
const routes = require("./routes/user.routes");
const bodyParser = require("body-parser");
const verificarToken = require("./middleware/validate-token");
const routesProtegidas = require("./routes/routes");
const routesNoProtegidas = require("./routes/routes.no.protegidas")
const cors = require("cors")

require("dotenv").config();

const app = express();
app.use(cors())

//Capturar body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//SETTINGS//
app.set("port", 4000);

app.use("/api", verificarToken, routesProtegidas);
app.use(routesNoProtegidas)


//Conexion a base de datos
const sequelize = require("./databases/connection").sequelize;

//Arrancar el servidor
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
sequelize.sync();
//sequelize.sync({force: true})

module.exports = app;
