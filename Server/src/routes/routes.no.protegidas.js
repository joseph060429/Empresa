const {
  createNewUser,
  loginUsuario,
} = require("../controllers/authController");

const router = require("express").Router();

// Registrar Usuario
router.post("/registro", createNewUser);

// Login Usuario
router.get("/login", loginUsuario);

module.exports = router;
