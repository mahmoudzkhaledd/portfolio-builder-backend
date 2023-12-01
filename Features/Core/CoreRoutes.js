const appRouter = require('express').Router();
const templateRoute = require('./Templates/TemplatesRoutes');
const portfoliosRoutes = require('./Portfolio/PortfolioRoutes');
const userRoutes = require('./User/UserRoutes');
const orderRoutes = require('./Orders/OrdersRoutes');

appRouter.use("/template", templateRoute);
appRouter.use("/portfolios", portfoliosRoutes);
appRouter.use('/user', userRoutes);
appRouter.use('/orders', orderRoutes);
module.exports = appRouter;