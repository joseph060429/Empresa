const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Acceso denegado" });

  try {
    const descifrado = jwt.verify(token, process.env.SECRET);
    req.user = descifrado;
    next();
  } catch (error) {
    res.status(401).send("Token invalido: " + error);
  }
};

module.exports = verificarToken;
