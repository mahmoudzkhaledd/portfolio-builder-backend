const asyncHandeler = require('express-async-handler');
const Component = require('../../../../Models/Component');
const Portfolio = require('../../../../Models/Portfolio');

exports.getTemplateComponents = asyncHandeler(async (req, res, next) => {
    const userModel = res.locals.userModel;

    const portId = req.params.id;
    if (portId == null) {
        return res.sendStatus(404);
    }
    const port = await Portfolio.findById(portId).populate('components');
    if (port == null || port.userId != userModel.id) {
        return res.sendStatus(404);
    }
    
    const comps = await Component.find({ templateId: port.templateId });
    res.status(200).json({ components: comps, portfolio: port, });
});

