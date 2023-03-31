const Users = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config;
const bcrypt = require("bcrypt");


//BORRAR USUARIO DESDE EL SUPER USUARIO SOLO PONIENDO EL CORREO//
const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    //Buscar Usuario por email
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    //Si se encuentra el email del usuario entonces se elimina
    if (user) {
      const elimina = await Users.destroy({
        where: { email: req.body.email },
      });

      if (elimina === 1) {
        return res.send("Usuario eliminado");
      }
    } else {
      return res.status(401).send("El usuario no existe");
    }
  } catch (error) {}
};

//BORRAR USUARIO SIENDO USUARIO //
const byDeleteUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    //Buscar Usuario por email y contraseña//
    const user = await Users.findOne({
      where: {
        email: email,
        password: password,
      },
    });
    if (user) {
      const elimina = await Users.destroy({
        where: { email: req.body.email, password: req.body.password },
      });

      if (elimina === 1) {
        return res.send("Usuario eliminado");
      }
    } else {
      return res.status(401).send("El usuario y la contraseña no coinciden");
    }
  } catch (error) {
    console.log(error)
  }
};


module.exports = {
  deleteUser,
  byDeleteUser,
};
