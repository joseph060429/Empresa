const sequelize = require("../databases/connection").sequelize;
const { Sequelize, DataTypes } = require("sequelize");
// const Users = require("./user");

const archivosUsers = sequelize.define(
  "Archivos",
  {
    archivo_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },

    nombre_archivo: {
      type: DataTypes.STRING,
      allowNull: true,
    },

   

    user_id: {
      type: Sequelize.UUID,
      //type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      isUnique: true,
      defaultValue: Sequelize.UUIDV4, //Esto da un valor por defecto
      //autoIncrement: true,
    },

  },

  { timestamps: false, freezeTableName: true }
);

module.exports = archivosUsers;
