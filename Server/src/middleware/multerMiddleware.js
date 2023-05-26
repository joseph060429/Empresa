const multer = require("multer");


//El multer nos sirve para ver que extensiones de archivos se pueden subir

const storage = multer.diskStorage({
  // Defino la ubicación donde se almacenarán los archivos cargados
  // cb = callback
  destination: function (req, res, cb) {
    cb(null, "./src/uploads");
  },
  // Defino el nombre del archivo cuando se almacena

  filename: function (req, file, cb) {

    // console.log(req.user.id, "request user id")
    const fieldname =
      ( "archivo-" + Date.now() + '.' + file.mimetype.split('/').at(1));
    cb(null, fieldname);
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

  if (allowedTypes.includes(file.mimetype)) {
    // El archivo es aceptable, entonces llama al callback con true
    cb(null, true);
  } else {
    // El archivo no es aceptable, entonces llama al callback con false y un error
    cb(new Error("Archivo no valido"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports.upload = upload;
