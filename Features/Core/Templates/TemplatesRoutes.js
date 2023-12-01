const appRouter = require('express').Router();
const { getTemplate, } = require('./Services/GetTemplates')
const { getTemplateComponents, } = require('./Services/GetTemplateComponents');
const { addUserTemplate, } = require('./Services/AddUserTemplate');

appRouter.get('/', getTemplate);
appRouter.get('/:id/components', getTemplateComponents);
appRouter.post('/:id/get-template', addUserTemplate);

module.exports = appRouter;