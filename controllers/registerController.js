const RegisterModel = require("../models/registerModel");

exports.createRegister = async (req, res, next) => {
    try {
        const { name, email, phone, address, disease, healthCamp, emergencyService } = req.body;
        console.log({ name, email, phone, address, disease, healthCamp, emergencyService })
        
        if (!name || !email || !phone || !address || !disease || !healthCamp) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const register = await RegisterModel.create({
            name,
            email,
            phone,
            address,
            disease,
            healthCamp,
            emergencyService,
            registeredAt: new Date(),
        });

        res.status(201).json({
            success: true,
            message: "Registration successful",
            data: register,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message,
        });
    }
};
