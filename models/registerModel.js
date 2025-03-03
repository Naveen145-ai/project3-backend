const mongoose = require("mongoose"); // Import Mongoose

const RegisterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  disease: { type: String, required: true },
  healthCamp: { type: String, required: true },
  emergencyService: { type: Boolean, default: false },
  registeredAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Register", RegisterSchema);
