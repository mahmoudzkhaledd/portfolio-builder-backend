const appRouter = require('express').Router();
const { getUserPortfolios, getPortfolio } = require('./Service/GetUserPortfolios');
const { updateUserPortfolio } = require('./Service/UpdatePortfolio');
appRouter.get('/', getUserPortfolios);

appRouter.route('/:id')
    .get(getPortfolio)
    .put(updateUserPortfolio);


module.exports = appRouter;