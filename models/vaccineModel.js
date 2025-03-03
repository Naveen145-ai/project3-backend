const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
  age: {
    type: String,
    required: true
  },
  vaccines: [
    {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ]
});

const Vaccine = mongoose.model('Vaccine', vaccineSchema);

module.exports = Vaccine;
