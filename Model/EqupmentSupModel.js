const mongoose = require('mongoose')

const EqupmentSchema = mongoose.Schema({
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
        type: Number,
        required: true,
    },

    customerData: [
        {
            customerName: {
                type: String,
            },
            received: {
                type: Boolean,
                default: false,
            },
            accept: {
                type: Boolean,
                default: false,
            },
            cancel: {
                type: Boolean,
                default: false,
            },
        },
    ],


});
module.exports = mongoose.model('Equpment', EqupmentSchema)