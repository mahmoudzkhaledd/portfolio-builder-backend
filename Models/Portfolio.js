const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    templateId: {
        type: mongoose.Schema.ObjectId,
        ref: "Template",
        required: [true, 'Template id is required !'],
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, 'User id is required !'],
        index: true,
    },
    displayName: {
        type: String,
        required: [true, 'Portfolio display name is required !'],
    },
    online: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        required: [true, 'Portfolio display name is required !'],
    },
    totalViews: {
        type: Number,
        default: 0,
    },
    totalMessages: {
        type: Number,
        default: 0,
    },
    totalRatings: {
        type: Number,
        default: 0,
    },
    components: [{
        type: mongoose.Schema.ObjectId,
        ref: "PortfolioComponent"
    }],
    viewsHistory: [{
        views: {
            type: Number,
            default: 0,
        },
        date: {
            type: String,
            default: "",
        },
    }],
}, { timestamps: true, });

module.exports = mongoose.model('Portfolio', schema);

