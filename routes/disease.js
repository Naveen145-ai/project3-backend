const express = require('express');
const { getDiseases, getSingleDisease } = require('../controllers/diseaseController');
const router = express.Router();

router.route('/diseases').get(getDiseases);

router.route('/disease/:id').get(getSingleDisease);


module.exports = router;