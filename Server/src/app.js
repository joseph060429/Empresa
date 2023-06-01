const express = require("express");
const routes = require("./routes/user.routes");
const bodyParser = require("body-parser");
const verificarToken = require("./middleware/validate-token");
const routesProtegidasUser = require("./routes/routes");
const routesNoProtegidasUser = require("./routes/routes.no.protegidas");
// const { Users, archivosUser } = require ("./models/index")
const cors = require("cors");
const https = require("https");
const fs = require("fs");

require("dotenv").config();

const app = express();
app.use(cors());

//Capturar body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//SETTINGS//
app.set("port", 4000);
app.use("/api", routesNoProtegidasUser);//Las rutas no protegidas son el Registro y el Login//
app.use("/api", verificarToken, routesProtegidasUser); //Las routes protegidas son las demas//

// Lo puse ahora
// app.use(express.static(path.join(__dirname, '../../Client/vue-project/src/components/logueadoRegistrado.vue')))

//Conexion a base de datos
const sequelize = require("./databases/connection").sequelize;

//Arrancar el servidor
https
  .createServer(
    {
      key: fs.readFileSync("src/Certificado_HTTPS/client-key.pem"),
      cert: fs.readFileSync("src/Certificado_HTTPS/client-cert.pem"),
    },
    app
  )
  .listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
  });

//Asi tienes que estar//
// sequelize.sync();

//Para reiniciar las tablas//
sequelize.sync({force: true})

module.exports = app;
