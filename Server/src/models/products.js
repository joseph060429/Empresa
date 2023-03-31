const sequelize = require("../databases/connection").sequelize;
const { Sequelize, DataTypes } = require("sequelize");

const Products = sequelize.define(
  "Products",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Products;
