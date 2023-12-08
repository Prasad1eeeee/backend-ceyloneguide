const mongoose = require('mongoose')


const HotelSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    hotelDetails: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    
    roomTypes: [
        {
            type: {
                type: String,
                enum: ['Single', 'Double', 'Family'],
            },
            pricePerNight: {
                type: Number,
            },
            amountAvailable: {
                type: Number,
            },
        },
    ],
    foodTypes: [
        {
            type: {
                type: String,
                enum: ['Breakfast', 'Lunch', 'Dinner'],
            },
            price: {
                type: Number,
            },
            availability: {
                type: Boolean,
            },
        },
    ],
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

module.exports = mongoose.model('Hotel', HotelSchema)