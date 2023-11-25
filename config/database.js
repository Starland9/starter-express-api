// db.js
const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect(config.databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Événement de connexion réussie
db.once("open", () => {
  console.log("Connected to the database");
});

// Événement d'erreur de connexion
db.on("error", (err) => {
  console.error("Database connection error:", err);
});
