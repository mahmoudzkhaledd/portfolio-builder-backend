const asyncHandeler = require('express-async-handler');
const PortfolioComponent = require('../../../../Models/PortfolioComponent');

exports.getPortfolioComponent = asyncHandeler(
    async (req, res, next) => {
        const userModel = res.locals.userModel;

        const { id, compId } = req.params;
        if (id == null || compId == null || id.length != 24 || compId.length != 24) {
            return res.sendStatus(404);
        }
        const comp = await PortfolioComponent.findOne({
            _id: compId,
            portfolioId: id,
            userId: userModel.id,
        });
        res.status(200).json({
            component: comp,
        })
    }
);