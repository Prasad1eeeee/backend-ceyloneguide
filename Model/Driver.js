const mongoose = require('mongoose');

const DriverSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    amountAvailable: {
        type: Number,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    personalInfo: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    chargesPerPackages: {
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


});


module.exports = mongoose.model('Driver', DriverSchema);