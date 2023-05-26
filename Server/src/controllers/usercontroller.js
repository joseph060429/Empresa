const Users = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config;
const bcrypt = require("bcrypt");
const multer = require("../middleware/multerMiddleware");
const validateToken = require("../middleware/validate-token");
// const ERROR = require("../erroresGlobales/codigoErrores")
const ERROR = require("../ErroresApp");

const {
  NO_ID,
  BAD_REQUEST,
  BAD_LOGIN,
  ALREADY_LOGGED,
  NOT_LOGGED,
  USER_NOT_EXIST,
} = require("../erroresGlobales/codigoErrores");

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
        where: { email: email },
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
  const { password } = req.body;
  const { email } = req.body;
  // console.log(req.user);
  try {
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
      res.status(404).send("No se encontró el usuario");
    }

    //si existe el usuario desencripto la contraseña
    if (await bcrypt.compare(password, user.dataValues.password)) {
      const result = await Users.destroy({ where: { email: email } });
      if (result === 1) {
        res.send("Usuario borrado");
      } else {
        res.send("No se pudo borrar el usuario");
        throw new Error();
      }
    } else {
      res.status(401).send("Correo o contraseña invalidas");
    }
  } catch (err) {
    console.log("No se pudo borrar el usuario: ", err);
  }
};

//Actualizar usuario
const actualizarUsuario = async (req, res) => {
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
      const actualiza = await Users.update({
        where: { name: name, password: password },
      });

      console.log(actualiza);

      if (actualiza === 1) {
        return res.send("Usuario actualizado");
      }
    } else {
      return res.status(401).send("El usuario y la contraseña no coinciden");
    }
  } catch (error) {
    console.log(error);
  }
};

//Traer todos los usuarios
const getAll = async (req, res) => {
  try {
    const user = await Users.findAll();

    return res.send(user);
  } catch (error) {
    res.status(404).send("Error");
  }
};

//Traer un solo usuario//

const getUserById = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });

    return res.send(user);
  } catch (error) {
    res.status(404).send("Error");
  }
};

module.exports = {
  deleteUser,
  byDeleteUser,
  actualizarUsuario,
  getAll,
  getUserById,
};

// if (
//   !req.headers.authorization ||
//   !auth.verifyToken
// ) {
//   throw new AppError(NOT_LOGGED, 401, "not logged in");
// }

// res.json(await User.findAll());
