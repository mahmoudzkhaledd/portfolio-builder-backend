const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    portfolioId: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Please Enter portfolio id'],
        ref: 'Portfolio',
    },
    parentId: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Please Enter component id'],
        ref: 'Component',
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Please Enter user id'],
        ref: 'User',
    },
    name: {
        type: String,
        required:[true, 'Please Enter component name'],
    },
    settings: {
        type: Object,
        required: [true, 'Please Enter Component Settings'],
    },
}, { timestamps: true, });

module.exports = mongoose.model('PortfolioComponent', schema);