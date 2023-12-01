const asyncHandeler = require('express-async-handler');
const Template = require('../../../../Models/Template');
const Portfolio = require('../../../../Models/Portfolio');

exports.addUserTemplate = asyncHandeler(async (req, res, next) => {
    const userModel = res.locals.userModel;
    const tmpId = req.params.id;

    if (tmpId == null) {
        return res.sendStatus(404);
    }
    const temp = await Template.findById(tmpId, { name: 1 });

    req.body.name = temp.name;
    req.body.templateId = tmpId;
    req.body.userId = userModel.id;
    const portfolio = await Portfolio.create(req.body);
    res.status(200).json({ portfolio });
});

