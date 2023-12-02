const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Component Name'],
    },
    templateId: {
        type: mongoose.Schema.ObjectId,
        ref: "Template",
        required: [true, 'Please Enter Template Id']
    },
    imageUrl: {
        type: String,
        default: null,
    },
    describtion: {
        type: String,
        default: "",
    },
    defaultSettings: {
        type: Object,
        required:[true,'Please Enter default settings'],
    }
}, { timestamps: true, });

module.exports = mongoose.model('Component', schema);