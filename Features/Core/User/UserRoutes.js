const appRouter = require('express').Router();
const { makeUserShareTemplate } = require('./Service/ShareTemplate');
appRouter.get('/share-template',makeUserShareTemplate)

module.exports = appRouter;