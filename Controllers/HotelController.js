const express = require('express');
const router = express.Router();
const HotelM = require('../Model/HotelMandegerModel');
const DbConnection = require('../Database');



router.post('/hotel', async (req, res) => {
    try {
        await DbConnection();
        const newHotelM = new HotelM({
            name: req.body.name,
            location: req.body.location,
            hotelDetails: req.body.hotelDetails,
            telephone: req.body.telephone,
            roomTypes: req.body.roomTypes,
            foodTypes: req.body.foodTypes,
            customerData: req.body.customerData,


        });
        await newHotelM.save();
        res.json({ success: true })
    }
    catch (error) {

    }
});


module.exports = router;