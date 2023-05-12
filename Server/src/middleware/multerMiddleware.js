const multer = require("multer");

const storage = multer.diskStorage({
  // Defino la ubicación donde se almacenarán los archivos cargados
  // cb = callback
  destination: function (req, res, cb) {
    cb(null, "../uploads");
  },
  // Defino el nombre del archivo cuando se almacena

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname,
      "-",
      Date.now,
      ".",
      file.originalname.split(".").pop()
    );
  },
});

const fileFilter = function (req, file, cb) {
  // Verifico si el tipo de archivo se puede subir dentro de un array
  const allowedTypes = [
    "application/pdf",
    "application/docx",
    "application/txt",
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/gif",
  ];

  if (allowedTypes.includes(file.mimetype0)) {
    // El archivo es aceptable, entonces llama al callback con true
    cb(null, true);
  } else {
    // El archivo no es aceptable, entonces llama al callback con false y un error
    cb(new Error("Archivo no valido"));
  }
};

const upload = multer({storage:storage, fileFilter: fileFilter});

