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
  const {email} = req.user
console.log(req.user);
  try {

const user = await Users.findOne({where: {email: email}})
if(!user){
  res.status(404).send("No se encontró el usuario")
}

    //si existe el usuario desencripto la contraseña
    if(await bcrypt.compare(password,user.dataValues.password)){
      const result = await Users.destroy({ where: { email: email}});
      if (result === 1) {
        res.send("Usuario borrado");
      } else {
        res.send("No se pudo borrar el usuario")
        throw new Error()
      }
    } 
    else {
      res.status(401).send('Correo o contraseña invalidas');
    }
    }catch(err){
      console.log("No se pudo borrar el usuario: ",err)
    }


};

  // try {
  //   //Buscar Usuario por email//
  //   const user = await Users.findOne({
  //     where: {
  //       email: email,
  //     },
  //   });

  //   //Si existe el usuario deesencripto la contraseña//
  //   if (user) {
  //       const contraseñaDesencriptada = await bcrypt.compare(password,user.dataValues.password);
  //     const elimina = await user.destroy({ where: { ID: req.params.id } });

  //     console.log(elimina);

  //     if(elimina === 1 && contraseñaDesencriptada){
  //       res.send("Usuario eliminado")
  //     }
  //   } else {
  //     return res.status(401).send("El usuario y la contraseña no coinciden");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  // if (user) {
  //   //  console.log(await bcrypt.compare(password, user.dataValues.password))
  //   //  const elimina = await bcrypt.compare(password, user.dataValues.password)
  //   //  console.log(elimina);

  //   //  res.send('ok! usuario eliminado por propio usuario')

  //   if(elimina === true){
  //    Users.destroy({
  //       where: { email: email}
  //     })
  //     res.send('Usuario eliminado correctamente')
  //   }
  // const elimina = await Users.destroy({
  //   where: { email: email },

  // });

  // console.log(elimina);

  // if (elimina === 1) {
  //   return res.send("Usuario eliminado");
  // }
// };

//Actualizar usuario
const actualizarUsuario = async (req, res) => {
  const { name, password } = req.body;

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

module.exports = {
  deleteUser,
  byDeleteUser,
  actualizarUsuario,
};
