const asyncHandeler = require('express-async-handler');
const PortfolioComponent = require('../../../../Models/PortfolioComponent');

exports.updatePortfolioComponent = asyncHandeler(async (req, res, next) => {
    const userModel = res.locals.userModel;
    const { id, compId } = req.params;
    const ans = await PortfolioComponent
        .updateOne({ _id: compId, portfolioId: id, userId: userModel.id }, req.body);
    res.sendStatus(ans.modifiedCount != 0 ? 200 : 400);
});