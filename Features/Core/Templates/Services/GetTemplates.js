const asyncHandeler = require('express-async-handler');
const Template = require('../../../../Models/Template');

exports.getTemplate = asyncHandeler(async (req, res, next) => {
    const page = req.params.page || 0;
    const templates = await Template.find({}, { components: 0 }).skip(page * 20);
    res.status(200).json({ templates });
});

