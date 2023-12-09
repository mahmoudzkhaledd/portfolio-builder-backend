const asyncHandeler = require('express-async-handler');
const Portfolio = require('../../../../Models/Portfolio');
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


function numOfDate(firstDate, secondDate) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.floor(Math.abs((firstDate - new Date(secondDate)) / oneDay));
    return diffDays
}

function addView(viewsHistory, increase) {
    const dateNow = new Date();
    if (viewsHistory.length == 0) {
        for (let i = 0; i < 30; i++) {
            const obj = {
                views: 0,
                date: dateNow.addDays(i - 29).toLocaleDateString()
            };
            viewsHistory.push(obj);
        }
        viewsHistory[viewsHistory.length - 1].views += increase;
    } else if (dateNow.toLocaleDateString() == viewsHistory[viewsHistory.length - 1].date) {
        viewsHistory[viewsHistory.length - 1].views += increase;
    } else if (numOfDate(dateNow, viewsHistory[viewsHistory.length - 1].date) <= 30) {
        const diff = numOfDate(dateNow, viewsHistory[viewsHistory.length - 1].date);
        for (let i = 1; i <= diff; i++) {
            const obj = {
                views: 0,
                date: dateNow.addDays(i - diff).toLocaleDateString()
            };
            viewsHistory.push(obj);
        }
        viewsHistory[viewsHistory.length - 1].views += increase;
        viewsHistory.splice(0, diff);
    }
    return viewsHistory;
}

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

    const port = await Portfolio.findById(portId).populate('components');

    if (port == null || (userModel == null && !port.online) || (!port.online && userModel != null && userModel.id != port.userId)) {
        return res.sendStatus(404);
    }
    port.viewsHistory = addView(port.viewsHistory, 0);
    if (userModel == null || port.userId != userModel.id) {
        port.totalViews++;
        port.viewsHistory = port.viewsHistory || [];
        port.viewsHistory = addView(port.viewsHistory, port.viewsHistory.length == 0 ? port.totalViews : 1);
    }
    await port.save();
    res.status(200).json({
        portfolio: port,
    })
});

