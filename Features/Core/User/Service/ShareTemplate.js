const asyncHandeler = require('express-async-handler');
const User = require('../../../../Models/User');

exports.makeUserShareTemplate = asyncHandeler(async (req, res, next) => {
    const userModel = res.locals.userModel;
    const updated = await User.updateOne({ _id: userModel.id }, { shareTemp: true });
    res.sendStatus(updated.modifiedCount != 0 ? 200 : 400);
});

