const asyncHandeler = require('express-async-handler');
const Page = require('../../../../Models/Page');

exports.addPage = asyncHandeler(async (req, res, next) => {
    const userModel = res.locals.userModel;
    const {
        name,
        imageUrl,
    } = req.body;
    const page = await Page.create({
        name,
        imageUrl,
        userId: userModel.id,
        sections: [],
    });
    res.status(200).json({ page });
});
