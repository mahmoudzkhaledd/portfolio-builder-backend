const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Template Name'],
    },
    imageUrl: {
        type: String,
        default: null,
    },
    price: {
        type: Number,
        required: [true, "Please Enter Template Price !"],
    },
    describtion: {
        type: String,
        default: "",
    },
    usersNumber: {
        type: Number,
        default: 0,
    },
    prototypePage: {
        type: mongoose.Schema.ObjectId,
        ref: "Portfilio",
        default: null,
    },
    components: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: "Component",
        }],
        default: [],
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        default: null,
    },
}, { timestamps: true, });

module.exports = mongoose.model('Template', schema);