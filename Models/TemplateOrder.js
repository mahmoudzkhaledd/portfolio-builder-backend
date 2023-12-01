const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'User id is required !'],
    },
    templateLink: {
        type: String,
        required: [true, 'Teplate Link is required !'],
    },
    description: {
        type: String,
        default: "",
        required: [true, "Please Enter Template Description !"],
    },
    orderState: {
        type: String,
        enum: ['reviewing', 'workingon', 'refused', 'done','scheduled', 'require-prototype'],
        default: "reviewing",
    },
    refusedReason: {
        type: String,
        default: null,
    },
    doneMessage: {
        type: String,
        default: null,
    },
    progress: [{
        text: String,
        date: Date,
    }],
}, { timestamps: true, });

module.exports = mongoose.model('TemplateOrder', schema);