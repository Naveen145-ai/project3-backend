const detailModel = require('../models/detailModel');

exports.getDetail = async (req, res, next) => {
    try {
        const details = await detailModel.find({});
        res.json({
            success: true,
            details
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching details",
            error: error.message
        });
    }
};
