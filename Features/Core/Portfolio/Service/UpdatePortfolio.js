const asyncHandeler = require('express-async-handler');
const Portfolio = require('../../../../Models/Portfolio');

exports.updateUserPortfolio = asyncHandeler(async (req, res, next) => {

    const components = req.body.componens;
    const portId = req.params.id;
    console.log(req.body)
    if (portId == null) {
        return res.sendStatus(400);
    }
    const ans = await Portfolio.updateOne({ _id: portId, }, {
        components: components,
    });
    res.sendStatus(ans.modifiedCount != 0 ? 200: 401)
});