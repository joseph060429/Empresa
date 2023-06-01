const Users = require("./user");
const archivosUser = require("./archivosUser");
const Products = require("./products");
const Vendedores = require("./vendedores");

Users.belongsTo(archivosUser, {foreignKey : "archivo_id" });
archivosUser.hasMany(Users, {foreignKey : "archivo_id" })

// Users.hasMany(archivosUser, { foreignKey: "archivo_id" });
// archivosUser.belongsTo(Users, { foreignKey: "archivo_id" });

module.exports = {
  Users,
  archivosUser,
  Products,
  Vendedores,
};
