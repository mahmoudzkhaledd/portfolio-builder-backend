const appRouter = require('express').Router();
const { getTemplate, } = require('./Services/GetTemplates')
const { addUserTemplate, } = require('./Services/AddUserTemplate');

appRouter.get('/', getTemplate);
appRouter.post('/:id/get-template', addUserTemplate);

module.exports = appRouter;