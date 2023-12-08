const express = require('express')
const router = express.Router();
const Guide = require('../Model/GuideModel');
const DbConnection = require('../Database');


router.post('/guide',async (req, res) => {
    try {
        await DbConnection();
        const newGuide = Guide({
            name:req.body.name,
            location:req.body.location,
            availability:req.body.availability,
            telephone:req.body.telephone,
            experience:req.body.experience,
            chargesPerDay:req.body.chargesPerDay,
            customerData: req.body.customerData





        });
        await newGuide.save();
        res.json({ success: true })

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');

    }

});

module.exports=router;