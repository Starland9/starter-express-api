// src/routes/notificationRoutes.js

const express = require("express");
const router = express.Router();
const {
  sendNotification,
  sendMultiNotification,
} = require("../controllers/notificationController");

router.post("/send", sendNotification);

router.post("/send/multi", sendMultiNotification);

module.exports = router;
