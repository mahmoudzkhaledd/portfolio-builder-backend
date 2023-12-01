const asyncHandeler = require('express-async-handler');
const OrderTemplate = require('../../../../Models/TemplateOrder');

exports.makeOrder = asyncHandeler(async (req, res, next) => {
    const userModel = res.locals.userModel;
    const orderTemplate = await OrderTemplate.create({
        userId: userModel.id,
        ...req.body,
    })
    res.status(200).json({ order: orderTemplate });
});
