const appRouter = require('express').Router();
const { getUserPortfolios, getPortfolio } = require('./Service/GetUserPortfolios');
const { updateUserPortfolio } = require('./Service/UpdatePortfolio');
const { getTemplateComponents } = require('./Service/GetTemplateComponents');

appRouter.get('/', getUserPortfolios);

appRouter.route('/:id')
    .get(getPortfolio)
    .put(updateUserPortfolio);

appRouter.get('/:id/get-components', getTemplateComponents);
module.exports = appRouter;