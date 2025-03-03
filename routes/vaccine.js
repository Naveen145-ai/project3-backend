const express = require('express');
const router = express.Router();
const vaccineController = require('../controllers/vaccineController');

// Get all vaccines
router.get('/', vaccineController.getAllVaccines);

// Get a single vaccine by ID
router.get('/:id', vaccineController.getVaccineById);


module.exports = router;
