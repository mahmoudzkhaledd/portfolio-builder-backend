const appRouter = require('express').Router();
const { makeOrder } = require('./Services/MakeOrder');
appRouter.post('/make-order',makeOrder);

module.exports = appRouter;