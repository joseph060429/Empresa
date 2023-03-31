
const sequelize = require("../databases/connection").sequelize;
const { Sequelize, DataTypes } = require("sequelize");




const Vendedores = sequelize.define("vendedores", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciudad: {
    type: DataTypes.STRING,
  },
},{timestamps: false,
freezeTableName: true,
});

module.exports = Vendedores
