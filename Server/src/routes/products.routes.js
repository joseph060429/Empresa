const {Router} = require("express")
const {getProducts, createNewProduct, getProductById, deleteProductById, updateProducts} = require ("../controllers/products.controller")
// const bodyParser = require('body-parser')
// const jsonParser = bodyParser.json()


const router = Router();


router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products", updateProducts);




module.exports = router