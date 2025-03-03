const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String, // Array of image URLs
      required: true,
    },
  ],
});

const DetailModel = mongoose.model("Detail", detailSchema);

module.exports = DetailModel;
