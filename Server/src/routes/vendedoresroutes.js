const {Router} = require("express")
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const {createNewVendedor, getVendedores, deleteVendedores, getVendedoresById, updateVendedores} = require('../controllers/vendedorcontroller')
const router = Router();

router.post("/vendedores", jsonParser,createNewVendedor);
router.get("/vendedores", getVendedores);
router.get("/vendedores/:id", getVendedoresById);
router.delete("/vendedores/:id", deleteVendedores);
router.put("/vendedores", jsonParser,updateVendedores)

module.exports = router

