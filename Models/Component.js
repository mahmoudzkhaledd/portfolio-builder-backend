const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Component Name'],
    },
    imageUrl: {
        type: String,
        default: null,
    },
    describtion: {
        type: String,
        default: "",
    },
    uniqueName: {
        type: String,
        unique: [true, 'Unique name must be unique.'],
        required: [true, 'Please Enter Component Name'],
    },
    subComponents: [{
        itemType: {
            type: String,
            required: [true, "item type is required"],
        },
        itemRef: {
            type: String,
            required: [true, "item ref is required"],
        },
        props: {
            type: Object,
            default: {},
        },
        itemBuilder: {
            type: [Object],
            default: [],
        },
    }],
}, { timestamps: true, });

module.exports = mongoose.model('Component', schema);