const Notification = require("../models/notifyModel");

// Fetch all notifications
exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ id: 1 });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Add multiple notifications from JSON
exports.importNotifications = async (req, res) => {
  const notificationsData = require("../data/notifications.json");

  try {
    await Notification.deleteMany(); // Clear existing notifications
    await Notification.insertMany(notificationsData);
    res.status(201).json({ message: "Notifications imported successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error importing notifications", error });
  }
};
