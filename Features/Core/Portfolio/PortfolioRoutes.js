const appRouter = require('express').Router();
const { getUserPortfolios, getPortfolio } = require('./Service/GetUserPortfolios');
const { updateUserPortfolio, updateUserPortfolioState} = require('./Service/UpdatePortfolio');
const { getTemplateComponents } = require('./Service/GetTemplateComponents');
const { getPortfolioComponent } = require('./Service/GetPortfolioComponent');
const { updatePortfolioComponent } = require('./Service/UpdateComponent');


appRouter.get('/', getUserPortfolios);

appRouter.route('/:id')
    .get(getPortfolio)
    .put(updateUserPortfolio);

appRouter.get('/:id/get-components', getTemplateComponents);
appRouter.put('/:id/switch-state', updateUserPortfolioState);
appRouter.route('/:id/components/:compId')
    .get(getPortfolioComponent)
    .put(updatePortfolioComponent);
module.exports = appRouter;