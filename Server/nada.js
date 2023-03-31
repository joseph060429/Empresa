
//COMO ESTABA getPRODUCTOBYID//
const getProductById = async (req, res) => {
    try {
      res.send(
        await Products.findAll({
          where: {
            ID: req.params.id,
          },
        })
      );
    } catch (error) {
      res.status(404).send('Error el ID no existe');
    }
  };
  

//COMO ESTABA VENDEDOR
  const createNewVendedor = async (req, res) => {
    if (req.body.nombre) {
      return res.send(await Vendedores.create(req.body));
      //console.log("Vendedor añadido")
    }
    res.send("Error el nombre no puede ser vacio");
    //console.log("Error el nombre no puede ser vacio");
  };

//BORRAR PRODUCTO POR ID//
const deleteProductById = async (req, res) => {
    try {
      const query = `DELETE FROM Products WHERE id = ${req.params.id}`;
      const pool = await getConnection();
      const name = await pool.request().query(`SELECT * FROM PRODUCTS WHERE id = ${req.params.id} `);
      const result = await pool.request().query(query);
      console.log("result", result.rowsAffected[0]);
      res.send(name.recordset);
    } catch (error) {
      res.status(600);
      res.send(error.message);
    }
  };
//ACTUALIZAR//
  const updateProducts = async (req, res) => {
    try {
      res.send(
        await Products.update({
          where: {
            ID: req.params.id,
            Name: req.params.name,
            Description: req.params.name
          },
        })
      );
    } catch (error) {
      res.status(404).send("No se ha podido actualizar");
    }








    try {
        const result = await Products.update({ where: { ID: req.params.id, Name: req.params.name, Description: req.params.name }, });
        
        if (result === 1) {
          res.send("Actualizado");
        } else {
          throw new Error("No se ha podido actualizar");
        }
      } catch (error) {
        res.status(404).send("error");
      }
  
  
  };


  //CREAR USUARIO

  //const createNewUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      return res.send(await Users.create(req.body));
    } catch (error) {
      if (!email || !password) {
        console.log("El email y la contraseña son obligatorios");
        console.log(error);
        return res
          .status(400)
          .json({ msg: "El email y la contraseña son obligatorios" });
      } else {
        console.log(error);
        return res.status(500).json({ msg: "ERROR 500" });
      }
    }
 //


 try {
  const elimina = {email} = req.body;
  
  const result = await Users.destroy({ where: {email: req.params.email } });

  res.send(result)
  // if (result === 1) {
  //  res.send("Usuario borrado correctamente");
  // } 
    

} catch (error) {
  res.send("gfdg")
}








  //res.send(await bcrypt.compare("123456", passwordAsociada));
  //let token = jwt.sign(email, password)


// module.exports.createNewUser = createNewUser;
// module.exports.loginUsuario = loginUsuario;





const createNewUser = async (req, res) => {
  try {
    const { id, name, email, password, surnames } = req.body;
    const data = {
      id,
      name,
      surnames,
      email,
      password: await bcrypt.hash(password, 10),
    };
    //guardar usuario
    const user = await Users.create(data);

    //si se captura al usuario
    //generar token con la identificación del usuario y la clave secreta en el archivo env

    if (user) {
      let token = jwt.sign({ email: user.email }, process.env.SECRET, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      //res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      //console.log("user", JSON.stringify(user, null, 2));
      //console.log(token);
      //Enviar detalles de los usuarios
      return res.status(201).send(user);
    } else {
      return res.status(409).send("No es correcto");
    }
  } catch (error) {
    switch (error.errors[0].type) {
      case "unique violation":
        return res.status(500).send({
          error: "Email ya registrado",
          tipo: error.errors[0].type,
          valor: error.errors[0].value,
        });

      default:
        return res
          .status(500)
          .send(
            `ERROR: Error en el servidor, \nTipo ERROR: ${error.errors[0].type} \nValor: ${error.errors[0].value}`
          );
    }
  }
};




//BORRAR USUARIO//
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
  } catch (error) {
    
  }
};


//CREAR USUARIO//
//QUITARLE LA S A CREATENEWUSER
const createNewUsers = async (req, res) => {
  const { id, name, email, password, surnames } = req.body;
  console.log("REQ BODY", req.body);
  if (!name) {
    
    return res.status(400).json({ msg: "El nombre es obligatorio" });
    
  }
  if (!surnames) {
    return res.status(400).json({ msg: "Los apellidos son obligatorios" });
  }
  if (!password) {
    return res.status(400).json({ msg: "La contraseña es obligatoria" });
  }

  try {
    const data = {
      id,
      name,
      surnames,
      email,
      password: await bcrypt.hash(password, 10),
    };
    //guardar usuario
    const user = await Users.create(data);

    //si se captura al usuario
    //generar token con la identificación del usuario y la clave secreta en el archivo env

    if (user) {
      let token = jwt.sign({ email: user.email }, process.env.SECRET, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      //res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      //console.log("user", JSON.stringify(user, null, 2));
      //console.log(token);
      //Enviar detalles de los usuarios
      return res.status(201).send(user);
    } else {
      return res.status(409).send("No es correcto");
    }
  } catch (error) {
    switch (error.errors[0].type) {
      case "unique violation":
        return res.status(500).send({
          error: "Email ya registrado",
          tipo: error.errors[0].type,
          valor: error.errors[0].value,
        });

      default:
        return res
          .status(500)
          .send(
            `ERROR: Error en el servidor, \nTipo ERROR: ${error.errors[0].type} \nValor: ${error.errors[0].value}`
          );
    }
  }
  //LOGIN//
const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Buscar Usuario por email
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    //Si se encuentra el usuario entonces se compara la contraseña
    if (user) {
      const existeToken = await bcrypt.compare(password, user.password);

      //si la contraseña es la misma
      //generar token con la identificación del usuario y la clave secreta en el archivo .env

      if (existeToken) {
        let token = jwt.sign({ email: user.email }, process.env.SECRET, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        return res.status(201).send("Usuario identificado correctamente");
      } else {
        return res.status(401).send("Fallo de autenticación");
      }
    } else {
      return res.status(401).send("Peticion invalida");
    }
  } catch (error) {
    console.log(error);
  }
};
};


 