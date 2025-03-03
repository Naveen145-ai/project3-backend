const express = require("express");
const router = express.Router();
const notifyController = require("../controllers/notifyController");

// Get all notifications
router.get("/", notifyController.getAllNotifications);

// Import notifications from JSON (Run this once)
router.post("/import", notifyController.importNotifications);

module.exports = router;
