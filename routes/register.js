const express = require('express');
const { createRegister } = require('../controllers/registerController');

const router = express.Router();

router.route('/register').post(createRegister);

module.exports = router;