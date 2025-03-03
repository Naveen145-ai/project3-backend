const Vaccine = require('../models/vaccineModel');

// Get all vaccines
exports.getAllVaccines = async (req, res) => {
  try {
    const vaccines = await Vaccine.find({}); // FIXED: Use Vaccine instead of vaccineModel
    res.status(200).json(vaccines);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get a single vaccine entry by ID
exports.getVaccineById = async (req, res) => {
  try {
    const vaccine = await Vaccine.findById(req.params.id);
    if (!vaccine) {
      return res.status(404).json({ message: 'Vaccine not found' });
    }
    res.status(200).json(vaccine);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

