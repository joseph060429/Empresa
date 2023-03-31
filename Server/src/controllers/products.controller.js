const { sequelize } = require("../databases/connection");
const Products = require("../models/products");

//BUSCAR TODOS LOS PRODUCTOS//
const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    return res.send(products);
  } catch (error) {
    res.status(404).send("Error");
  }
};

//CREAR NUEVO PRODUCTO//
const createNewProduct = async (req, res) => {
  const { Name, Description } = req.body;

  try {
    if (!Name || !Description) {
      return res
        .status(400)
        .json({ msg: "El nombre y la descripcion son obligatorias" });
    }
    return res.send(await Products.create(req.body));
  } catch (error) {
    console.log(error);
  }
};

//BUSCAR PRODUCTO POR ID falta validarlo no funciona//
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
    res.status(404).send("Error el ID no existe");
  }
};

//BORRAR PRODUCTO POR ID //
const deleteProductById = async (req, res) => {
  try {
    const result = await Products.destroy({ where: { ID: req.params.id } });
    if (result === 1) {
      res.send("Producto borrado");
    } else {
      throw new Error("No se ha podido borrar");
    }
  } catch (error) {
    res.status(404).send("Error el ID no existe");
  }
};

//ME FALTA ACTUALIZAR //
const updateProducts = async (req, res) => {
const { Name, Description, ID } = req.body;
console.log(req.body);
  try {
    
    res.send(await Products.update(req.body, {where:{ID: req.body.ID}}));
    
  } catch (error) {
    if (!Name || !Description || !ID) {
      console.log("El ID, la descripcion y el nombre es obligatorio");
      return res
        .status(400)
        .json({ msg: "El ID, la descripcion y el nombre es obligatorio" });
    }
  }
};

module.exports.getProducts = getProducts;
module.exports.getProductById = getProductById;
module.exports.createNewProduct = createNewProduct;
module.exports.deleteProductById = deleteProductById;
module.exports.updateProducts = updateProducts;
