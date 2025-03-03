const express = require('express');
const { getDetail } = require('../controllers/detailController');

const router = express.Router();

router.route('/details').get(getDetail);




module.exports = router;