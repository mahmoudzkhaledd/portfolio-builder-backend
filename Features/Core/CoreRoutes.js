const appRouter = require('express').Router();
const templateRoute = require('./Templates/TemplatesRoutes');
const portfoliosRoutes = require('./Portfolio/PortfolioRoutes');
const userRoutes = require('./User/UserRoutes');
const orderRoutes = require('./Orders/OrdersRoutes');
const pagesRoutes = require('./Pages/PagesRoutes');
appRouter.use("/template", templateRoute);
appRouter.use("/portfolios", portfoliosRoutes);
appRouter.use('/user', userRoutes);
appRouter.use('/orders', orderRoutes);
appRouter.use('/pages', pagesRoutes);
module.exports = appRouter;  