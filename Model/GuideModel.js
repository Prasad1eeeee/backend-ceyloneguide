const mongoose = require('mongoose');

const GuideSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    chargesPerDay: {
        type: String,
        required: true,
        
    },

    customerData: [
        {
            customerName: String,
            received: Boolean,
            accept: Boolean,
            cancel: Boolean,
        },
    ],


})


module.exports = mongoose.model('Guide', GuideSchema);