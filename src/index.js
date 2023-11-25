const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const notificationRoutes = require("./routes/notificationRoutes");




// Configuration de Mongoose et de la connexion à la base de données (voir db.js)
// require("../config/database");

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // Routes
app.use("/notifications", notificationRoutes);



// Port
const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
