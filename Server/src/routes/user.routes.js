// const user = require("./userroutes");
// const products = require("./products.routes");
// const vendedores = require("./vendedoresroutes");
const multer = require("../middleware/multerMiddleware")
const upload = multer.upload

// module.exports =  [user, products, vendedores] ;

const {
  deleteUser,
  byDeleteUser,

  } = require("../controllers/usercontroller");
  
const router = require("express").Router();
  
 // Borrar Usuario desde super Usuario
router.delete("/elimina", deleteUser);


//Borrar usuario siendo usuario
router.delete("/eliminaUsuario",byDeleteUser);

//Subir archivos
router.post("/upload", upload.single('archivo'), (req, res)=>{res.send(),"Bien"})
  
module.exports = router;
