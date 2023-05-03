
const Users = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config;
const bcrypt = require("bcrypt");

const createNewUser = async (req, res) => {
    try {
      const { name, email, password, surnames } = req.body;
  
      //Validar la entrada al usuario
      if (!(email && password && name && surnames)) {
        res.status(400).json({ msg: "Todos los campos son requeridos" });
      }
  
      //Ver si el usuario ya existe en la base de datos
      //Validar si el usuario ya existe en la base datos
  
      const usuarioExiste = await Users.findOne({ where: { email: email } });
  
      if (usuarioExiste) {
        return res
          .status(400)
          .json({ msg: "El usuario ya existe, por favor logueate" });
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
      user.token = token;
      //Devolver un nuevo usuario
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
    }
  };
  //LOGIN//
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
      if (
        user &&(await bcrypt.compare(password, user.password))
      ) {
        //Creo un token
        const token = jwt.sign({ email: user.email }, process.env.SECRET, {
          expiresIn: "1H",
        });
  
        //Guardo al usuario con su token
        user.token = token;
  
        //Devuelvo al usuario
         return res.status(200).json({token: token});
        //  console.log(user);
      }
       res.status(400).send("Usuario o contraseña inválidas")
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = {
    loginUsuario, createNewUser
  }