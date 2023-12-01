const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required!"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required!"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required!"]
    },
    phone: {
        type: String,
        required: [true, "Phone is required!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"]
    },
    verifiedEmail: {
        type: Boolean,
        default: false,
    },
    gender: {
        type: Boolean,
        required: [true, "Gender is required!"]
    },
    country: {
        type: String,
        required: [true, "Country Date is required!"]
    },
    profilePic: String,
    shareTemp: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true, });

module.exports = mongoose.model('User', schema);