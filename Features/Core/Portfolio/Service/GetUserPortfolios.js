const asyncHandeler = require('express-async-handler');
const Portfolio = require('../../../../Models/Portfolio');

exports.getUserPortfolios = asyncHandeler(async (req, res, next) => {
    const userModel = res.locals.userModel;
    const page = req.params.page || 0;
    const portfolios = await Portfolio
        .find({ userId: userModel.id }, { components: 0 })
        .skip(page * 10);
    res.status(200).json({ portfolios });

});

exports.getPortfolio = asyncHandeler(async (req, res, next) => {
    const userModel = res.locals.userModel;
    const portId = req.params.id;

    if (portId == null) {
        return res.sendStatus(404);
    }

    const port = await Portfolio.findById(portId);

    if (port == null || (userModel == null && !port.online) || (!port.online && userModel != null && userModel.id != port.userId)) {
        return res.sendStatus(404);
    }
    if (userModel == null || port.userId != userModel.id) {
        await port.updateOne({
            $inc: {
                totalViews: 1
            },
        })
    }
    res.status(200).json({
        portfolio: port,
    })
});

