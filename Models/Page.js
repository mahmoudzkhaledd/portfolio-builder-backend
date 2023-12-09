const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Page name is required !'],
    },
    imageUrl: String,
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        index: true,
        required: [true, 'User Id is required !'],
    },
    sections: [{
        content: String,
        date: Date,
    }]
}, { timestamps: true, });

module.exports = mongoose.model('Page', schema);