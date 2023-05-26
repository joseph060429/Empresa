//import {Hasher} from '../middlewares'
const sequelize = require("../databases/connection").sequelize;
const { Sequelize, DataTypes } = require("sequelize");

const Users = sequelize.define(
  "Users",
  {
    id: {
      type: Sequelize.UUID,
      //type: DataTypes.INTEGER,
      // primaryKey: true,
      allowNull: false,
      isUnique: true,
      defaultValue: Sequelize.UUIDV4, //Esto da un valor por defecto
      //autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surnames: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      isUnique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: true,
      // defaultValue: "No responde",
      validate: {
        isIn: {
          args: [["Hombre", "Mujer"]],
        },
      },
    },
    LugaresAconocer: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isIn: {
          args: [["La Isla del Faraón", "El Muelle" , "El Faro", "El Áspero"]],
        },
      },

    },

    opiniones: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: true, freezeTableName: true }
);

module.exports = Users;
