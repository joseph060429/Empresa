const path = require("path");
const multer = require("multer");

const { Users } = require("../models/index.js");

const jwt = require("jsonwebtoken");
//Esto lo puse porque no me reconocia el .env //
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const bcrypt = require("bcrypt");
// const { log } = require('console');

/**
 *
 * @param {*} req Funcion genericas
 * @param {*} res Funcion generica
 * @returns Si no tiene email, name, surnames, password sacará un mensaje con "Todos los campos son requeridos"
 */
const createNewUser = async (req, res) => {
  try {
    const { name, email, password, surnames } = req.body;

    //Validar la entrada al usuario
    if (!(email && password && name && surnames)) {
      res.status(400).send("Todos los campos son requeridos");
    }

    //Ver si el usuario ya existe en la base de datos
    //Validar si el usuario ya existe en la base datos

    const usuarioExiste = await Users.findOne({ where: { email: email } });

    if (usuarioExiste) {
      res.status(400).send("El usuario ya existe por favor logueate");
    }

    //Encriptar la contraseña
    const contraseñaEncriptada = await bcrypt.hash(password, 10);

    //Crear usuario en la base de datos

    const user = await Users.create({
      name: name,
      surnames: surnames,
      email: email.toLowerCase(), //convertir el correo a minusculas
      password: contraseñaEncriptada,
    });

    //Crear token
    const token = jwt.sign({ email: user.email }, process.env.SECRET, {
      expiresIn: "1H",
    });

    //Guardar token
    // user.token = token;
    //Devolver un nuevo usuario
    // console.log('reqqqqqq',req.body);
    loginUsuario(req, res);
  } catch (error) {
    console.log(error);
  }
};
//LOGIN//
/**
 *
 * @param {*} req Funcion generica
 * @param {*} res Funcion generica
 * @returns Si no tiene la clave o el paswword retornará un mensaje que diga que todo los campos son requeridos
 */
const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Validar todos los campos
    if (!(email && password)) {
      res.status(400).json({ msg: "Todos los campos son requeridos" });
    }

    //Ver si el usuario ya existe en la base de datos
    const user = await Users.findOne({ where: { email: email } });
    //Si el usuario existe y la contraseña es igual
    if (user && (await bcrypt.compare(password, user.password))) {
      //Creo un token
      delete user.dataValues.password;
      const token = jwt.sign(user.dataValues, process.env.SECRET, {
        expiresIn: "1H",
      });

      //Guardo al usuario con su token
      user.token = token;

      //Devuelvo al usuario
      return res.status(200).json({ token: token });
      //  console.log(user);
    }
    res.status(400).send("Usuario o contraseña inválidas");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginUsuario,
  createNewUser,
};
