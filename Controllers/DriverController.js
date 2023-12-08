const express = require('express');
const router = express.Router();
const Driver = require('../Model/Driver');
const DbConnection = require('../Database');


router.post('/driver', async (req, res) => {

    try {
        await DbConnection();

        const newDriver = new Driver({
            name: req.body.name,
            location: req.body.location,
            amountAvailable: req.body.amountAvailable,
            telephone: req.body.telephone,
            address: req.body.address,
            chargesPerPackages: req.body.chargesPerPackages,
            personalInfo: req.body.personalInfo,
            customerData: req.body.customerData, // Assuming req.body.customerData is an array of objects
        });
        await newDriver.save();

        res.json({ success: true })


    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;