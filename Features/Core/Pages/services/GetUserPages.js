const asyncHandeler = require('express-async-handler');
const Page = require('../../../../Models/Page');

exports.getUserPages = asyncHandeler(async (req, res, next) => {
    const userModel = res.locals.userModel;
    const pages = await Page.find({ userId: userModel.id, });
    res.status(200).json({ pages });
});
