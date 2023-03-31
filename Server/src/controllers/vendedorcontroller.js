const { sequelize } = require("../databases/connection");
const Vendedores = require("../models/vendedores");

//CREAR NUEVO VENDEDOR CON SEQUELIZER//
const createNewVendedor = async (req, res) => {
  const { nombre } = req.body;
  try {
      return res.send(await Vendedores.create(req.body));
    } catch (error) {
      if (!nombre) {
        console.log("El nombre es obligatorio");
        return res
          .status(400).json({ msg: "El nombre es obligatorio" });
      }
    }
  };

  module.exports.createNewVendedor = createNewVendedor;

//CONSULTAR TODOS LOS VENDEDORES//
const getVendedores = async (req, res) => {
  try {
    const vendedores = await Vendedores.findAll();
    return res.send(vendedores);
  } catch (error) {
    res.status(404).send('Error');
  }
};

module.exports.getVendedores = getVendedores;

//CONSULTAR VENDEDORES POR ID//
const getVendedoresById = async (req, res) => {
  try {
    res.send(
      await Vendedores.findAll({
        where: {
          ID: req.params.id,
        },
      })
    );
  } catch (error) {
    res.status(404).send('Error el ID no existe');
  }
};

module.exports.getVendedoresById = getVendedoresById;




//BORRAR LOS DATOS DE VENDEDORES//
const deleteVendedores = async (req, res) => {
  try {
    const result = await Vendedores.destroy({ where: { ID: req.params.id } });
    if (result === 1) {
      res.send("Vendedor borrado");
    } else {
      throw new Error("No se ha podido borrar");
    }
  } catch (error) {
    res.status(404).send('Error el ID no existe');
  }
};

module.exports.deleteVendedores = deleteVendedores;


//ACTUALIZAR VENDEDORES//
const updateVendedores = async (req, res) => {
  const { nombre } = req.body;

  try {
   res.send(await Vendedores.update(req.body, {where:{id: req.body.id}}));
    
  } catch (error) {
    if (!nombre) {
      console.log("Nombre obligatorio");
      return res
        .status(400).json({ msg: "Nombre es obligatorio" });
    }
  }
};

module.exports.updateVendedores = updateVendedores;
