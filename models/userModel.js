const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        minLength: 6,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false,
        trim: true,
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String,
        select: false,
    },
    verificationCodeValidation: {
        type: String,
        select: false,
    },
    forgotPasswordCode: {
        type: String,
        select: false
    },
    forgotPasswordCodeValidation: {
        type: String,
        select: false
    },
}, { 
    timestamps: true
}); 


module.exports = mongoose.model('User', userSchema);
