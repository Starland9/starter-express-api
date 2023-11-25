const multer = require("multer");

// Configuration de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Spécifiez le répertoire de stockage pour les photos
  },
  filename: function (req, file, cb) {
    // Générez un nom de fichier unique pour chaque photo
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
