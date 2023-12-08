const express = require('express')
const router = express.Router()
const Equpment = require('../Model/EqupmentSupModel')
const DbConnection = require('../Database')

router.post('/equpsup', async (req, res) => {
    try {
        await DbConnection();

        const newEqusup = new Equpment({
            name: req.body.name,
            location: req.body.location,
            amountAvailable: req.body.amountAvailable,
            telephone: req.body.telephone,
            personalInfo: req.body.personalInfo,
            address: req.body.address,
            chargesPerPackages: req.body.chargesPerPackages,
            customerData: req.body.customerData

        });
        await newEqusup.save();
        res.json({success:true})

    } catch (error) {
        
        console.error(error.message);
        res.status(500).send('Server error');

    }
});
module.exports=router;