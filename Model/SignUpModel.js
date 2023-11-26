const mongoose = require('mongoose');
// const validator = require('validator');

const signUpSchema = new mongoose.Schema({
   
    UserEmail: {
        type: String,
        required: [true, 'Please enter email'],
        unique:true
    },
    UserPassword: {
        type: String,
        required: [true, 'Please enter password'],
        unique:false
    },
    UserType: {
        type: String,
        unique:false
    },
   
});


module.exports = mongoose.model('signups', signUpSchema)